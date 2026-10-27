import { SerpPreview } from "../../../../components/tools/serp-preview";
import { ToolPage } from "../../../../components/tools/tool-page";
import { pageMeta } from "../../../../lib/seo";
import { getTool } from "../../../../lib/tools/list";

const tool = getTool("serp-preview");

export const metadata = pageMeta({
  title: "Free Google SERP & Social Share Preview Tool | Quadcydle",
  description: tool.description,
  path: `/tools/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPage
      tool={tool}
      heroTitle={"See it before\n*Google* does."}
      intro="Write your title and description and watch how they appear in Google and on social media — with pixel-accurate length checks and ready-to-paste meta tags."
      related={[
        { title: "SEO checker", href: "/tools/seo-checker" },
        { title: "10 SEO quick wins", href: "/blog/10-seo-quick-wins" },
      ]}
      guide={[
        {
          title: "Why pixels, not characters",
          body: (
            <p>
              Google cuts titles at roughly 580 pixels on desktop, so &quot;WWW&quot; uses far more room than &quot;iii&quot;. This preview
              measures the real width in Google&apos;s font, which is why it sometimes truncates a 55-character title and keeps a 62-character
              one.
            </p>
          ),
        },
        {
          title: "Writing titles that get clicked",
          body: (
            <ul>
              <li>Lead with what the page is about, then your brand: &quot;Shopify Store Setup | Your Brand&quot;.</li>
              <li>Match the words people search for — naturally, once.</li>
              <li>Make every page&apos;s title unique.</li>
            </ul>
          ),
        },
        {
          title: "Descriptions and share images",
          body: (
            <p>
              Google may rewrite your description, but a clear 120–160 character summary is usually used. For social sharing, a
              1200×630 image makes links stand out on WhatsApp, LinkedIn and Facebook.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Will Google always show my title and description?", a: "Not always — Google sometimes rewrites them to better match a search. Accurate, specific titles and descriptions are the ones it keeps most often." },
        { q: "Where do I paste the meta tags?", a: "Inside the <head> of your page. In WordPress, an SEO plugin like Yoast or Rank Math has fields for these; in Shopify and Wix they're in each page's SEO settings." },
      ]}
    >
      <SerpPreview />
    </ToolPage>
  );
}
