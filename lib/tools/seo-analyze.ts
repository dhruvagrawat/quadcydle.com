import { parse } from "node-html-parser";
import type { FetchedPage } from "../server/safe-fetch";

export type CheckStatus = "pass" | "warn" | "fail" | "info";
export type Check = {
  id: string;
  group: "Content" | "Technical" | "Social" | "Performance";
  label: string;
  status: CheckStatus;
  value: string;
  advice?: string;
};

export type SeoReport = {
  url: string;
  finalUrl: string;
  status: number;
  ms: number;
  kb: number;
  score: number;
  checks: Check[];
  headings: { level: number; text: string }[];
  preview: { title: string; description: string; image?: string; siteName?: string };
};

const clean = (s?: string | null) => (s ?? "").replace(/\s+/g, " ").trim();

/** Turns a fetched page into a list of pass/warn/fail checks with plain-English advice. */
export function analyse(page: FetchedPage, extras: { robotsTxt: boolean; sitemap: boolean }): SeoReport {
  const root = parse(page.html, { comment: false, blockTextElements: { script: true, style: true, noscript: false } });
  const meta = (sel: string) => root.querySelector(sel)?.getAttribute("content") ?? "";
  const checks: Check[] = [];
  const add = (c: Check) => checks.push(c);

  // ── Content ──
  const title = clean(root.querySelector("title")?.text);
  add(
    !title
      ? { id: "title", group: "Content", label: "Page title", status: "fail", value: "Missing", advice: "Add a <title> that says what the page is about in about 50–60 characters." }
      : title.length < 20 || title.length > 65
        ? { id: "title", group: "Content", label: "Page title", status: "warn", value: `${title.length} characters`, advice: title.length > 65 ? "Google usually cuts titles around 60 characters — lead with the most important words." : "Short titles miss the chance to describe the page. Aim for 30–60 characters." }
        : { id: "title", group: "Content", label: "Page title", status: "pass", value: `${title.length} characters` }
  );

  const desc = clean(meta('meta[name="description"]'));
  add(
    !desc
      ? { id: "desc", group: "Content", label: "Meta description", status: "fail", value: "Missing", advice: "Write a 120–160 character summary. Google often shows it under your title in results." }
      : desc.length < 70 || desc.length > 170
        ? { id: "desc", group: "Content", label: "Meta description", status: "warn", value: `${desc.length} characters`, advice: desc.length > 170 ? "Long descriptions get truncated — aim for 120–160 characters." : "A bit short. Aim for 120–160 characters that explain the page and invite the click." }
        : { id: "desc", group: "Content", label: "Meta description", status: "pass", value: `${desc.length} characters` }
  );

  const h1s = root.querySelectorAll("h1").map((h) => clean(h.text)).filter(Boolean);
  add(
    h1s.length === 1
      ? { id: "h1", group: "Content", label: "Main heading (H1)", status: "pass", value: `“${h1s[0].slice(0, 70)}”` }
      : h1s.length === 0
        ? { id: "h1", group: "Content", label: "Main heading (H1)", status: "fail", value: "None found", advice: "Every page should have one H1 that states its main topic." }
        : { id: "h1", group: "Content", label: "Main heading (H1)", status: "warn", value: `${h1s.length} found`, advice: "Use a single H1 per page and H2/H3 for sections." }
  );

  const headings = root
    .querySelectorAll("h1,h2,h3,h4")
    .map((h) => ({ level: Number(h.tagName[1]), text: clean(h.text).slice(0, 90) }))
    .filter((h) => h.text)
    .slice(0, 40);
  const skipped = headings.some((h, i) => i > 0 && h.level - headings[i - 1].level > 1);
  add({
    id: "outline",
    group: "Content",
    label: "Heading structure",
    status: headings.length < 2 ? "warn" : skipped ? "warn" : "pass",
    value: `${headings.length} headings`,
    advice: headings.length < 2 ? "Break content into sections with H2 subheadings." : skipped ? "Some heading levels are skipped (e.g. H2 → H4). Keep the outline in order." : undefined,
  });

  const bodyText = clean(root.querySelector("body")?.text);
  const words = bodyText ? bodyText.split(" ").length : 0;
  add({
    id: "words",
    group: "Content",
    label: "Amount of text",
    status: words < 250 ? "warn" : "pass",
    value: `~${words.toLocaleString("en-GB")} words`,
    advice: words < 250 ? "Thin pages rarely rank. Explain the topic fully — who it's for, what's included, common questions." : undefined,
  });

  const imgs = root.querySelectorAll("img");
  const noAlt = imgs.filter((i) => i.getAttribute("alt") === undefined).length;
  add({
    id: "alt",
    group: "Content",
    label: "Image alt text",
    status: imgs.length === 0 ? "info" : noAlt === 0 ? "pass" : noAlt / imgs.length > 0.3 ? "fail" : "warn",
    value: imgs.length === 0 ? "No images" : `${imgs.length - noAlt} of ${imgs.length} have alt text`,
    advice: noAlt ? "Add alt text describing each meaningful image (use alt=\"\" for purely decorative ones)." : undefined,
  });

  const host = new URL(page.finalUrl).hostname;
  let internal = 0;
  let external = 0;
  root.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href") ?? "";
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;
    try {
      new URL(href, page.finalUrl).hostname === host ? internal++ : external++;
    } catch {}
  });
  add({
    id: "links",
    group: "Content",
    label: "Links",
    status: internal < 3 ? "warn" : "pass",
    value: `${internal} internal · ${external} external`,
    advice: internal < 3 ? "Link to related pages on your own site so visitors (and Google) can find them." : undefined,
  });

  // ── Technical ──
  const https = page.finalUrl.startsWith("https://");
  add({ id: "https", group: "Technical", label: "HTTPS", status: https ? "pass" : "fail", value: https ? "Secure" : "Not secure", advice: https ? undefined : "Install an SSL certificate and redirect all http:// traffic to https://." });

  add({
    id: "status",
    group: "Technical",
    label: "Response",
    status: page.status >= 400 ? "fail" : page.redirects.length > 1 ? "warn" : "pass",
    value: `HTTP ${page.status}${page.redirects.length ? ` after ${page.redirects.length} redirect${page.redirects.length > 1 ? "s" : ""}` : ""}`,
    advice: page.status >= 400 ? "The page returned an error — search engines won't index it." : page.redirects.length > 1 ? "Chains of redirects slow visitors down and waste crawl budget. Redirect straight to the final URL." : undefined,
  });

  const robotsMeta = meta('meta[name="robots"]').toLowerCase() + " " + (page.headers["x-robots-tag"] ?? "").toLowerCase();
  const noindex = robotsMeta.includes("noindex");
  add({ id: "indexable", group: "Technical", label: "Indexable", status: noindex ? "fail" : "pass", value: noindex ? "Blocked by noindex" : "Yes", advice: noindex ? "This page tells search engines not to index it. Remove noindex if it should appear in Google." : undefined });

  const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute("href");
  add({ id: "canonical", group: "Technical", label: "Canonical URL", status: canonical ? "pass" : "warn", value: canonical ? clean(canonical).slice(0, 80) : "Missing", advice: canonical ? undefined : "Add a canonical link so Google knows the preferred URL when duplicates exist." });

  const lang = root.querySelector("html")?.getAttribute("lang");
  add({ id: "lang", group: "Technical", label: "Language declared", status: lang ? "pass" : "warn", value: lang ?? "Missing", advice: lang ? undefined : 'Add a lang attribute, e.g. <html lang="en-GB">.' });

  const viewport = meta('meta[name="viewport"]');
  add({ id: "viewport", group: "Technical", label: "Mobile viewport", status: viewport.includes("width=device-width") ? "pass" : "fail", value: viewport ? "Set" : "Missing", advice: viewport ? undefined : "Without a viewport tag, phones show a zoomed-out desktop page." });

  const ld = root.querySelectorAll('script[type="application/ld+json"]');
  const types = new Set<string>();
  ld.forEach((s) => (s.text.match(/"@type"\s*:\s*"([^"]+)"/g) ?? []).forEach((m) => types.add(m.split('"')[3])));
  add({
    id: "schema",
    group: "Technical",
    label: "Structured data",
    status: types.size ? "pass" : "warn",
    value: types.size ? Array.from(types).slice(0, 6).join(", ") : "None found",
    advice: types.size ? undefined : "Add JSON-LD (e.g. Organization, LocalBusiness, Product, Article) so search engines understand the page.",
  });

  add({ id: "robots", group: "Technical", label: "robots.txt", status: extras.robotsTxt ? "pass" : "warn", value: extras.robotsTxt ? "Found" : "Not found", advice: extras.robotsTxt ? undefined : "Add a robots.txt at the site root that points to your sitemap." });
  add({ id: "sitemap", group: "Technical", label: "XML sitemap", status: extras.sitemap ? "pass" : "warn", value: extras.sitemap ? "Found" : "Not found at /sitemap.xml", advice: extras.sitemap ? undefined : "Publish an XML sitemap and submit it in Google Search Console." });

  // ── Social ──
  const ogTitle = meta('meta[property="og:title"]');
  const ogImage = meta('meta[property="og:image"]');
  add({
    id: "og",
    group: "Social",
    label: "Social share tags",
    status: ogTitle && ogImage ? "pass" : ogTitle || ogImage ? "warn" : "fail",
    value: [ogTitle && "title", meta('meta[property="og:description"]') && "description", ogImage && "image"].filter(Boolean).join(", ") || "Missing",
    advice: ogTitle && ogImage ? undefined : "Add Open Graph tags (og:title, og:description, og:image) so links look good on WhatsApp, LinkedIn and Facebook.",
  });
  const twitter = meta('meta[name="twitter:card"]');
  add({ id: "twitter", group: "Social", label: "X / Twitter card", status: twitter ? "pass" : "info", value: twitter || "Not set", advice: twitter ? undefined : "Optional: add twitter:card = summary_large_image for bigger previews on X." });
  const favicon = root.querySelector('link[rel~="icon"]');
  add({ id: "favicon", group: "Social", label: "Favicon", status: favicon ? "pass" : "warn", value: favicon ? "Found" : "Not declared", advice: favicon ? undefined : "Add a favicon — it appears next to your site in mobile search results." });

  // ── Performance ──
  add({
    id: "ttfb",
    group: "Performance",
    label: "Server response time",
    status: page.ms < 800 ? "pass" : page.ms < 1800 ? "warn" : "fail",
    value: `${page.ms.toLocaleString("en-GB")} ms`,
    advice: page.ms >= 800 ? "The server is slow to respond. Better hosting, caching or a CDN usually fixes this." : undefined,
  });
  const kb = Math.round(page.bytes / 1024);
  add({ id: "size", group: "Performance", label: "HTML size", status: kb < 300 ? "pass" : kb < 800 ? "warn" : "fail", value: `${kb.toLocaleString("en-GB")} KB`, advice: kb >= 300 ? "Very large HTML slows the first render. Trim inline scripts, styles and hidden markup." : undefined });
  const scripts = root.querySelectorAll("script[src]").length;
  add({ id: "scripts", group: "Performance", label: "External scripts", status: scripts <= 20 ? "pass" : scripts <= 35 ? "warn" : "fail", value: `${scripts}`, advice: scripts > 20 ? "Lots of third-party scripts slow pages down. Remove the ones you no longer use." : undefined });

  const weight: Record<CheckStatus, number> = { pass: 1, warn: 0.5, fail: 0, info: 1 };
  const scored = checks.filter((c) => c.status !== "info");
  const score = Math.round((scored.reduce((s, c) => s + weight[c.status], 0) / scored.length) * 100);

  return {
    url: page.url,
    finalUrl: page.finalUrl,
    status: page.status,
    ms: page.ms,
    kb,
    score,
    checks,
    headings,
    preview: {
      title: ogTitle || title,
      description: meta('meta[property="og:description"]') || desc,
      image: ogImage ? new URL(ogImage, page.finalUrl).href : undefined,
      siteName: meta('meta[property="og:site_name"]') || host,
    },
  };
}
