import { SpeedTest } from "../../../../components/tools/speed-test";
import { ToolPage } from "../../../../components/tools/tool-page";
import { pageMeta } from "../../../../lib/seo";
import { getTool } from "../../../../lib/tools/list";

const tool = getTool("website-speed-test");

export const metadata = pageMeta({
  title: "Free Website Speed Test (Google PageSpeed) | Quadcydle",
  description: tool.description,
  path: `/tools/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPage
      tool={tool}
      heroTitle={"How fast is\nyour *website?*"}
      intro="Runs Google PageSpeed Insights on any page and explains the results: your scores, real-user Core Web Vitals, and the fixes that would help most."
      related={[
        { title: "Why speed costs you customers", href: "/blog/website-speed-costing-customers" },
        { title: "Managed vs shared hosting", href: "/blog/managed-hosting-vs-shared-hosting" },
        { title: "Website launch checklist", href: "/blog/website-launch-checklist" },
      ]}
      guide={[
        {
          title: "Scores vs. real-user data",
          body: (
            <p>
              The four scores come from a <strong>lab test</strong>: Google loads your page once on a simulated phone or desktop. The
              <strong> Core Web Vitals</strong> panel (when shown) is <strong>field data</strong> from real Chrome users over 28 days — that&apos;s
              what Google uses as a ranking signal. Low-traffic sites often have no field data yet; that&apos;s normal.
            </p>
          ),
        },
        {
          title: "The three numbers that matter most",
          body: (
            <ul>
              <li><strong>LCP (Largest Contentful Paint)</strong> — when the main content appears. Good: under 2.5 s.</li>
              <li><strong>INP (Interaction to Next Paint)</strong> — how quickly the page reacts to taps and clicks. Good: under 200 ms.</li>
              <li><strong>CLS (Cumulative Layout Shift)</strong> — how much things jump around. Good: under 0.1.</li>
            </ul>
          ),
        },
        {
          title: "What usually fixes a slow site",
          body: (
            <p>
              In our experience the big wins are almost always the same: compress and resize images, remove unused plugins and tracking
              scripts, turn on caching and a CDN, and move off overcrowded hosting. Start with the top item in &quot;Biggest opportunities&quot;.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Is this the same as Google PageSpeed Insights?", a: "Yes — this tool calls Google's PageSpeed Insights API and presents the same Lighthouse results with plain-English explanations. There's a link to the full Google report with every result." },
        { q: "Why is my mobile score lower than desktop?", a: "The mobile test simulates a mid-range phone on a slower connection, so heavy images and scripts hurt far more. Most visitors are on mobile, so it's the score to focus on." },
        { q: "Why do scores change between runs?", a: "Lab tests vary a little with network and server conditions. Run it two or three times and look at the trend rather than a single number." },
        { q: "Do you store the pages I test?", a: "No. The test runs between your browser and Google; we don't save the address or results." },
      ]}
    >
      <SpeedTest />
    </ToolPage>
  );
}
