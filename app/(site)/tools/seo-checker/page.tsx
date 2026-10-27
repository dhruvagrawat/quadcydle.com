import { SeoChecker } from "../../../../components/tools/seo-checker";
import { ToolPage } from "../../../../components/tools/tool-page";
import { pageMeta } from "../../../../lib/seo";
import { getTool } from "../../../../lib/tools/list";

const tool = getTool("seo-checker");

export const metadata = pageMeta({
  title: "Free SEO Checker — On-Page SEO Analysis | Quadcydle",
  description: tool.description,
  path: `/tools/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPage
      tool={tool}
      heroTitle={"Is your page\n*search-ready?*"}
      intro="Enter any page and we'll check the on-page basics Google relies on — titles, headings, canonicals, structured data, social tags, robots.txt and sitemap — with a fix for each."
      related={[
        { title: "10 SEO quick wins", href: "/blog/10-seo-quick-wins" },
        { title: "Website launch checklist", href: "/blog/website-launch-checklist" },
        { title: "Google & social preview", href: "/tools/serp-preview" },
      ]}
      guide={[
        {
          title: "Fix the red items first",
          body: (
            <p>
              Items marked <strong>Fix</strong> can stop a page ranking at all — a missing title, a <code>noindex</code> tag, an error status
              or no HTTPS. Items marked <strong>Improve</strong> are missed opportunities: descriptions that will be cut off, a thin page, or
              no structured data.
            </p>
          ),
        },
        {
          title: "What this checker can't see",
          body: (
            <p>
              It reads the page&apos;s HTML the way a search engine first sees it. Content that only appears after JavaScript runs, your
              backlinks, and how you actually rank are outside its view — for those you need Google Search Console and a full site crawl.
            </p>
          ),
        },
        {
          title: "Good SEO is mostly clarity",
          body: (
            <p>
              A clear title, a single H1 that matches it, sections with descriptive headings, and a description that tells people what
              they&apos;ll get. Write for the person searching first — search engines reward pages that answer the question well.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "How is the score calculated?", a: "Each check counts equally: a pass scores fully, 'Improve' scores half, 'Fix' scores zero. It's a quick health indicator for one page, not a ranking prediction." },
        { q: "Why did it say it couldn't reach my site?", a: "Some sites block automated requests, take longer than 10 seconds to respond, or are behind a login. Private and internal addresses can't be checked." },
        { q: "Does it check my whole website?", a: "No — one page at a time. Our website audit crawls every page and adds speed, UX and conversion checks." },
      ]}
    >
      <SeoChecker />
    </ToolPage>
  );
}
