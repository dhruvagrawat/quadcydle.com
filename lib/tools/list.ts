/** The free tools under /tools — used by the tools index, homepage, footer and sitemap. */
export type Tool = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: "gauge" | "search" | "eye" | "calculator" | "bot";
  color: string;
  /** Service page most relevant to people using this tool. */
  service: { title: string; href: string };
};

export const tools: Tool[] = [
  {
    slug: "website-speed-test",
    title: "Website Speed Test",
    short: "Google PageSpeed scores, Core Web Vitals and the fixes that matter — in plain English.",
    description:
      "Free website speed test powered by Google PageSpeed Insights. Check Core Web Vitals (LCP, INP, CLS), performance, SEO and accessibility scores for mobile and desktop.",
    icon: "gauge",
    color: "#FF5A1F",
    service: { title: "Managed hosting", href: "/services/web-hosting" },
  },
  {
    slug: "seo-checker",
    title: "SEO Checker",
    short: "20+ on-page checks: titles, headings, canonicals, schema, social tags, robots and sitemap.",
    description:
      "Free on-page SEO checker. Analyse any page's title, meta description, headings, canonical, structured data, social tags, robots.txt and sitemap with clear fixes.",
    icon: "search",
    color: "#C9F24B",
    service: { title: "Website audit", href: "/services/website-audit" },
  },
  {
    slug: "ai-readability-checker",
    title: "AI Readability Checker",
    short: "Can ChatGPT, Claude and Perplexity read your page? Crawler access, llms.txt, schema and clarity.",
    description:
      "Free AI readability checker. See which AI crawlers (GPTBot, ClaudeBot, PerplexityBot and more) can access your page, check llms.txt, structured data, rendering and reading ease.",
    icon: "bot",
    color: "#7C9CFF",
    service: { title: "AI readiness audit", href: "/services/ai-readiness" },
  },
  {
    slug: "serp-preview",
    title: "Google & Social Preview",
    short: "See how your page looks in Google and when shared — then copy the meta tags.",
    description:
      "Free SERP and social share preview tool. Preview your Google search result and Open Graph card, check title and description length, and generate meta tags.",
    icon: "eye",
    color: "#FF8A5C",
    service: { title: "Custom web development", href: "/services/custom-web" },
  },
  {
    slug: "website-cost-calculator",
    title: "Website Cost Calculator",
    short: "An honest price range for your website, store or app, based on our published prices.",
    description:
      "Free website cost calculator. Get an indicative price range for a brochure site, online store, web app or mobile app, plus monthly hosting and care costs.",
    icon: "calculator",
    color: "#F4C8FF",
    service: { title: "Get a written quote", href: "/contact" },
  },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug)!;
