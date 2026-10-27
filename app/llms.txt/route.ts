import { allPosts } from "../../lib/blog";
import { SITE_URL } from "../../lib/seo";
import { pillars, site } from "../../lib/site";
import { tools } from "../../lib/tools/list";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text map of the site for AI tools (llmstxt.org format).
 * Generated from lib/site.ts, the tools list and the journal, so it stays current.
 */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description} Contact: ${site.email}. We reply within ${site.replyTime} and send written quotes within ${site.quoteTime}. Prices on the site are in GBP and exclude VAT.`,
    "",
    ...pillars.flatMap((p) => [
      `## ${p.title} — ${p.headline}`,
      "",
      ...p.services.map((s) => `- [${s.title}](${SITE_URL}${s.href}): ${s.desc}`),
      "",
    ]),
    "## Free tools",
    "",
    ...tools.map((t) => `- [${t.title}](${SITE_URL}/tools/${t.slug}): ${t.short}`),
    "",
    "## Guides",
    "",
    ...allPosts.map((p) => `- [${p.seoTitle ?? p.title}](${SITE_URL}/blog/${p.slug}): ${p.seoDescription ?? p.excerpt}`),
    "",
    "## Optional",
    "",
    `- [Pricing](${SITE_URL}/pricing): Prices for monthly plans and individual services`,
    `- [About](${SITE_URL}/about): Who we are and how we work`,
    `- [Contact](${SITE_URL}/contact): Start a project`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
