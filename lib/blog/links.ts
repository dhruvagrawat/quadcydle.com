/**
 * Automatic internal linking for blog posts.
 *
 * Each rule links the FIRST mention of a phrase in an article's body text to a
 * service page or another article. Headings and existing links are never
 * touched, a post never links to itself, and each target is linked once.
 * Add a row here and every article that mentions the phrase picks it up.
 */
export const autoLinks: { phrase: string; href: string }[] = [
  // Services
  { phrase: "AI search optimisation", href: "/services/ai-seo" },
  { phrase: "AI SEO", href: "/services/ai-seo" },
  { phrase: "AI readiness", href: "/services/ai-readiness" },
  { phrase: "WordPress hosting", href: "/services/wordpress-hosting" },
  { phrase: "managed hosting", href: "/services/web-hosting" },
  { phrase: "uptime monitoring", href: "/services/status-monitoring" },
  { phrase: "status page", href: "/services/status-monitoring" },
  { phrase: "website audit", href: "/services/website-audit" },
  { phrase: "care plan", href: "/services/website-support" },
  { phrase: "Google Workspace", href: "/services/google-workspace" },
  { phrase: "Microsoft 365", href: "/services/microsoft-365" },
  { phrase: "React Native", href: "/services/mobile-app" },
  { phrase: "Figma", href: "/services/app-design" },
  { phrase: "Next.js", href: "/services/custom-web" },
  { phrase: "custom web application", href: "/services/custom-web" },
  { phrase: "Squarespace", href: "/services/squarespace" },
  { phrase: "Wix vs", href: "/blog/wix-vs-squarespace-vs-wordpress" },
  { phrase: "Wix", href: "/services/wix" },
  { phrase: "Shopify", href: "/services/shopify" },
  { phrase: "WordPress", href: "/services/wordpress" },
  { phrase: "Amazon listing", href: "/services/amazon-listing" },
  { phrase: "Seller Central", href: "/services/amazon-listing" },
  { phrase: "Zomato", href: "/services/restaurant-onboarding" },
  { phrase: "ONDC", href: "/services/restaurant-onboarding" },
  { phrase: "online ordering", href: "/services/restaurant-app" },
  { phrase: "data recovery", href: "/services/data-recovery" },
  { phrase: "backups", href: "/services/web-hosting" },
  // Articles
  { phrase: "AI Overviews", href: "/blog/what-is-ai-seo" },
  { phrase: "llms.txt", href: "/blog/llms-txt-explained" },
  { phrase: "AI crawlers", href: "/blog/should-you-block-ai-crawlers" },
  { phrase: "GPTBot", href: "/blog/should-you-block-ai-crawlers" },
  { phrase: "301 redirect", href: "/blog/website-redesign-without-losing-seo" },
  { phrase: "redesign", href: "/blog/website-redesign-without-losing-seo" },
  { phrase: "DMARC", href: "/blog/spf-dkim-dmarc-explained" },
  { phrase: "spam folder", href: "/blog/spf-dkim-dmarc-explained" },
  { phrase: "Google Business Profile", href: "/blog/google-business-profile-guide" },
  { phrase: "hacked", href: "/blog/hacked-website-what-to-do" },
  { phrase: "malware", href: "/blog/hacked-website-what-to-do" },
  { phrase: "page speed", href: "/blog/website-speed-costing-customers" },
  { phrase: "Core Web Vitals", href: "/blog/website-speed-costing-customers" },
  { phrase: "WooCommerce", href: "/blog/shopify-vs-woocommerce" },
  { phrase: "technical SEO", href: "/blog/10-seo-quick-wins" },
  { phrase: "mobile app", href: "/blog/does-your-business-need-a-mobile-app" },
  { phrase: "website cost", href: "/blog/how-much-does-a-website-cost" },
  { phrase: "launch checklist", href: "/blog/website-launch-checklist" },
  { phrase: "choosing an agency", href: "/blog/how-to-choose-a-web-agency" },
  { phrase: "load time", href: "/blog/website-speed-costing-customers" },
  { phrase: "Search Console", href: "/blog/website-launch-checklist" },
  { phrase: "shared hosting", href: "/blog/managed-hosting-vs-shared-hosting" },
  { phrase: "cheap hosting", href: "/blog/managed-hosting-vs-shared-hosting" },
  { phrase: "hosting", href: "/blog/managed-hosting-vs-shared-hosting" },
  { phrase: "plugins", href: "/blog/website-care-plans-explained" },
  { phrase: "caching", href: "/services/web-hosting" },
  { phrase: "online store", href: "/services/ecommerce" },
  { phrase: "Amazon", href: "/blog/amazon-vs-your-own-shopify-store" },
  { phrase: "budget", href: "/blog/how-much-does-a-website-cost" },
  { phrase: "agency", href: "/blog/how-to-choose-a-web-agency" },
  { phrase: "SEO", href: "/services/seo" },
];

/** Never add more than this many automatic links to one article. */
const MAX_AUTO_LINKS = 10;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export type Heading = { id: string; text: string };

/**
 * Prepares stored article HTML for display: adds ids to <h2>s (for the table
 * of contents) and applies the auto-link rules. Returns the new HTML and the
 * list of headings.
 */
export function prepareArticle(html: string, selfHref: string) {
  const headings: Heading[] = [];
  let out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = slugify(text);
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  // Targets the author already linked by hand don't get a second link.
  const linked = new Set(Array.from(out.matchAll(/href="([^"]+)"/g), (m) => m[1]));
  linked.add(selfHref);

  let added = 0;
  for (const rule of autoLinks) {
    if (added >= MAX_AUTO_LINKS) break;
    if (linked.has(rule.href)) continue;
    const re = new RegExp(`\\b(${escape(rule.phrase)})\\b`, "i");
    // Walk the HTML as alternating tags / text, tracking whether we're inside a link, heading or code.
    const parts = out.split(/(<[^>]+>)/);
    let depthA = 0;
    let depthH = 0;
    let done = false;
    for (let i = 0; i < parts.length && !done; i++) {
      const part = parts[i];
      if (part.startsWith("<")) {
        if (/^<a[\s>]/i.test(part)) depthA++;
        else if (/^<\/a>/i.test(part)) depthA--;
        else if (/^<(h[1-6]|pre|code)[\s>]/i.test(part)) depthH++;
        else if (/^<\/(h[1-6]|pre|code)>/i.test(part)) depthH--;
        continue;
      }
      if (depthA || depthH || !re.test(part)) continue;
      parts[i] = part.replace(re, `<a href="${rule.href}">$1</a>`);
      done = true;
    }
    if (done) {
      out = parts.join("");
      linked.add(rule.href);
      added++;
    }
  }

  return { html: out, headings };
}
