import { parse } from "node-html-parser";
import type { FetchedPage } from "../server/safe-fetch";
import { isAllowed, parseRobots } from "./robots";
import type { Check, CheckStatus } from "./seo-analyze";

export type AiCheck = Omit<Check, "group"> & { group: "Access" | "Structure" | "Clarity" | "Trust" };

export type AiReport = {
  url: string;
  finalUrl: string;
  score: number;
  checks: AiCheck[];
  bots: { name: string; owner: string; purpose: string; allowed: boolean; explicit: boolean }[];
  readingEase: number | null;
  words: number;
};

/** AI crawlers worth knowing about, and what each is used for. */
const BOTS = [
  { name: "OAI-SearchBot", owner: "OpenAI", purpose: "ChatGPT search results" },
  { name: "ChatGPT-User", owner: "OpenAI", purpose: "Pages fetched when a ChatGPT user asks" },
  { name: "GPTBot", owner: "OpenAI", purpose: "Model training" },
  { name: "Claude-SearchBot", owner: "Anthropic", purpose: "Claude search results" },
  { name: "Claude-User", owner: "Anthropic", purpose: "Pages fetched when a Claude user asks" },
  { name: "ClaudeBot", owner: "Anthropic", purpose: "Model training" },
  { name: "PerplexityBot", owner: "Perplexity", purpose: "Perplexity search results" },
  { name: "Google-Extended", owner: "Google", purpose: "Gemini training & grounding (not Google Search)" },
  { name: "Applebot-Extended", owner: "Apple", purpose: "Apple AI training" },
  { name: "CCBot", owner: "Common Crawl", purpose: "Open dataset used by many AI models" },
];

const SEARCH_BOTS = ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot"];

const clean = (s?: string | null) => (s ?? "").replace(/\s+/g, " ").trim();

function syllables(word: string) {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (w.length <= 3) return 1;
  const groups = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "").match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups?.length ?? 1);
}

/** Flesch Reading Ease (0–100, higher = easier). */
function readingEase(text: string) {
  const sentences = text.split(/[.!?]+\s/).filter((s) => s.split(" ").length > 2);
  const words = text.split(/\s+/).filter((w) => /[a-z]/i.test(w));
  if (sentences.length < 3 || words.length < 80) return null;
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  return Math.round(206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syl / words.length));
}

export function analyseAi(page: FetchedPage, extras: { robotsTxt: string | null; llmsTxt: boolean; sitemap: boolean }): AiReport {
  const root = parse(page.html, { comment: false, blockTextElements: { script: true, style: true, noscript: false } });
  const checks: AiCheck[] = [];
  const add = (c: AiCheck) => checks.push(c);
  const path = new URL(page.finalUrl).pathname || "/";

  // ── Access ──
  const groups = extras.robotsTxt ? parseRobots(extras.robotsTxt) : [];
  const bots = BOTS.map((b) => ({ ...b, ...isAllowed(groups, b.name, path) }));
  const blockedSearch = bots.filter((b) => SEARCH_BOTS.includes(b.name) && !b.allowed);
  add({
    id: "ai-search-bots",
    group: "Access",
    label: "AI search crawlers",
    status: blockedSearch.length === 0 ? "pass" : blockedSearch.length >= 3 ? "fail" : "warn",
    value: blockedSearch.length === 0 ? "All allowed" : `${blockedSearch.length} blocked: ${blockedSearch.map((b) => b.name).join(", ")}`,
    advice: blockedSearch.length ? "These bots power AI search answers. Blocking them can keep you out of ChatGPT, Claude or Perplexity results — check it's intentional." : undefined,
  });
  const blockedTraining = bots.filter((b) => !SEARCH_BOTS.includes(b.name) && !b.allowed);
  add({
    id: "ai-training-bots",
    group: "Access",
    label: "AI training crawlers",
    status: "info",
    value: blockedTraining.length ? `${blockedTraining.length} blocked` : "All allowed",
    advice: "A business choice, not an error: blocking training bots stops your content being used to train models, but doesn't by itself remove you from AI search.",
  });
  const robotsMeta = (root.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "").toLowerCase() + " " + (page.headers["x-robots-tag"] ?? "").toLowerCase();
  add({
    id: "indexable",
    group: "Access",
    label: "Indexable",
    status: robotsMeta.includes("noindex") ? "fail" : "pass",
    value: robotsMeta.includes("noindex") ? "noindex set" : "Yes",
    advice: robotsMeta.includes("noindex") ? "noindex keeps the page out of search indexes — including the ones AI answers draw on." : undefined,
  });
  add({
    id: "llms",
    group: "Access",
    label: "llms.txt",
    status: extras.llmsTxt ? "pass" : "info",
    value: extras.llmsTxt ? "Found" : "Not found",
    advice: extras.llmsTxt ? undefined : "Optional: an llms.txt file at your site root points AI tools to your key pages. Support varies, but it's cheap to add.",
  });
  add({
    id: "sitemap",
    group: "Access",
    label: "XML sitemap",
    status: extras.sitemap ? "pass" : "warn",
    value: extras.sitemap ? "Found" : "Not found at /sitemap.xml",
    advice: extras.sitemap ? undefined : "A sitemap helps every crawler — search and AI — find all your pages.",
  });

  const bodyText = clean(root.querySelector("body")?.text);
  const words = bodyText ? bodyText.split(" ").length : 0;
  const scripts = root.querySelectorAll("script[src]").length;
  add({
    id: "render",
    group: "Access",
    label: "Content in the HTML",
    status: words >= 250 ? "pass" : words >= 80 ? "warn" : "fail",
    value: `~${words.toLocaleString("en-GB")} words without JavaScript`,
    advice:
      words < 250
        ? `Most AI crawlers don't run JavaScript. ${scripts > 5 ? "This page may rely on scripts to show its content — " : ""}make sure key text is in the server-rendered HTML.`
        : undefined,
  });

  // ── Structure ──
  const h1 = root.querySelectorAll("h1").length;
  const headings = root.querySelectorAll("h2,h3").map((h) => clean(h.text)).filter(Boolean);
  add({
    id: "headings",
    group: "Structure",
    label: "Clear headings",
    status: h1 === 1 && headings.length >= 3 ? "pass" : "warn",
    value: `${h1} H1 · ${headings.length} subheadings`,
    advice: h1 === 1 && headings.length >= 3 ? undefined : "One H1 plus descriptive H2/H3 sections makes it easy for AI to find and quote the right part of a page.",
  });
  const questions = headings.filter((h) => h.endsWith("?")).length;
  add({
    id: "questions",
    group: "Structure",
    label: "Question-style headings",
    status: questions >= 2 ? "pass" : "info",
    value: `${questions} found`,
    advice: questions >= 2 ? undefined : "Headings phrased as the questions customers ask (\"How much does X cost?\") map neatly to AI prompts.",
  });
  const types = new Set<string>();
  root.querySelectorAll('script[type="application/ld+json"]').forEach((s) =>
    (s.text.match(/"@type"\s*:\s*"([^"]+)"/g) ?? []).forEach((m) => types.add(m.split('"')[3]))
  );
  add({
    id: "schema",
    group: "Structure",
    label: "Structured data",
    status: types.size ? "pass" : "fail",
    value: types.size ? Array.from(types).slice(0, 6).join(", ") : "None",
    advice: types.size ? undefined : "Structured data (JSON-LD) states facts — who you are, what you sell, prices — in a form machines read without guessing.",
  });
  const lists = root.querySelectorAll("ul,ol,table").length;
  add({
    id: "lists",
    group: "Structure",
    label: "Lists & tables",
    status: lists >= 2 ? "pass" : "info",
    value: `${lists} found`,
    advice: lists >= 2 ? undefined : "Steps, comparisons and prices in lists or tables are easier for AI to extract accurately than long paragraphs.",
  });

  // ── Clarity ──
  const title = clean(root.querySelector("title")?.text);
  const desc = clean(root.querySelector('meta[name="description"]')?.getAttribute("content"));
  add({
    id: "summary",
    group: "Clarity",
    label: "Title & summary",
    status: title && desc ? "pass" : title || desc ? "warn" : "fail",
    value: [title ? "title" : null, desc ? "description" : null].filter(Boolean).join(" + ") || "Missing",
    advice: title && desc ? undefined : "A clear title and meta description are often the first summary an AI tool reads about a page.",
  });
  const mainText = clean((root.querySelector("main") ?? root.querySelector("article") ?? root.querySelector("body"))?.text);
  const ease = readingEase(mainText);
  add({
    id: "reading",
    group: "Clarity",
    label: "Reading ease",
    status: ease === null ? "info" : ease >= 50 ? "pass" : ease >= 30 ? "warn" : "fail",
    value: ease === null ? "Not enough text to score" : `${ease}/100 (Flesch)`,
    advice: ease !== null && ease < 50 ? "Long sentences and jargon make pages harder for people and AI to summarise correctly. Aim for shorter sentences and plain words." : undefined,
  });
  const lang = root.querySelector("html")?.getAttribute("lang");
  add({ id: "lang", group: "Clarity", label: "Language declared", status: lang ? "pass" : "warn", value: lang ?? "Missing", advice: lang ? undefined : 'Add <html lang="en-GB"> (or your language) so tools know how to read the page.' });

  // ── Trust ──
  const hasOrg = ["Organization", "LocalBusiness", "ProfessionalService", "Corporation", "Store"].some((t) => types.has(t));
  add({
    id: "entity",
    group: "Trust",
    label: "Business identity",
    status: hasOrg ? "pass" : "warn",
    value: hasOrg ? "Organization data found" : "No Organization schema",
    advice: hasOrg ? undefined : "Organization (or LocalBusiness) schema with your name, logo, contact details and profiles helps AI connect your site to your brand.",
  });
  const contact = root.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').length > 0;
  add({ id: "contact", group: "Trust", label: "Contact details", status: contact ? "pass" : "warn", value: contact ? "Email or phone linked" : "None found", advice: contact ? undefined : "Visible, linked contact details are a basic trust signal." });
  const dated =
    !!root.querySelector('meta[property="article:published_time"], time[datetime]') || /"datePublished"\s*:/.test(page.html);
  const author = !!root.querySelector('meta[name="author"], [rel="author"]') || /"author"\s*:/.test(page.html);
  add({
    id: "authorship",
    group: "Trust",
    label: "Author & date",
    status: dated && author ? "pass" : dated || author ? "warn" : "info",
    value: [author ? "author" : null, dated ? "date" : null].filter(Boolean).join(" + ") || "Not found",
    advice: dated && author ? undefined : "For articles, a named author and publish date help AI judge how current and credible the content is.",
  });
  const https = page.finalUrl.startsWith("https://");
  add({ id: "https", group: "Trust", label: "HTTPS", status: https ? "pass" : "fail", value: https ? "Secure" : "Not secure" });

  const weight: Record<CheckStatus, number> = { pass: 1, warn: 0.5, fail: 0, info: 1 };
  const scored = checks.filter((c) => c.status !== "info");
  const score = Math.round((scored.reduce((s, c) => s + weight[c.status], 0) / scored.length) * 100);

  return { url: page.url, finalUrl: page.finalUrl, score, checks, bots, readingEase: ease, words };
}
