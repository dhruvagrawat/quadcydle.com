import { AiChecker } from "../../../../components/tools/ai-checker";
import { ToolPage } from "../../../../components/tools/tool-page";
import { pageMeta } from "../../../../lib/seo";
import { getTool } from "../../../../lib/tools/list";

const tool = getTool("ai-readability-checker");

export const metadata = pageMeta({
  title: "Free AI Readability Checker — Is Your Site AI-Ready? | Quadcydle",
  description: tool.description,
  path: `/tools/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPage
      tool={tool}
      heroTitle={"Can AI read\nyour *website?*"}
      intro="Check any page the way AI assistants and AI search see it: which crawlers your robots.txt lets in, whether your content works without JavaScript, llms.txt, structured data, and how clearly it reads."
      related={[
        { title: "What is AI SEO?", href: "/blog/what-is-ai-seo" },
        { title: "Should you block AI crawlers?", href: "/blog/should-you-block-ai-crawlers" },
        { title: "llms.txt explained", href: "/blog/llms-txt-explained" },
        { title: "Make your site AI-readable", href: "/blog/make-your-website-ai-readable" },
      ]}
      guide={[
        {
          title: "Search bots vs. training bots",
          body: (
            <p>
              AI companies run different crawlers for different jobs. <strong>Search</strong> crawlers such as OAI-SearchBot,
              Claude-SearchBot and PerplexityBot fetch pages to answer users&apos; questions and cite sources.{" "}
              <strong>Training</strong> crawlers such as GPTBot and ClaudeBot collect content to train future models. You can allow one
              and block the other — the checker shows which is which.
            </p>
          ),
        },
        {
          title: "Why \"content in the HTML\" matters",
          body: (
            <p>
              Many AI crawlers read the raw HTML and don&apos;t run JavaScript. If your text only appears after scripts load — common
              with some site builders and single-page apps — AI tools may see an almost empty page.
            </p>
          ),
        },
        {
          title: "Clear beats clever",
          body: (
            <p>
              AI answers quote pages that state facts plainly: what you do, for whom, where, and for how much. Structured data,
              question-style headings, lists and short sentences all make your page easier to understand and cite accurately.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Does passing this check mean ChatGPT will recommend me?", a: "No — it means AI tools can read and understand the page. Whether they recommend you also depends on your reputation, third-party mentions and how well you answer the question. That's what AI search optimisation works on." },
        { q: "What's the reading-ease score?", a: "The Flesch Reading Ease score, from 0 to 100. Higher is easier: 60+ is plain English, below 30 is very hard going. It's a rough guide, not a rule." },
        { q: "Is llms.txt required?", a: "No. It's a proposed standard that some AI tools use and others ignore. We flag it as optional — useful, cheap to add, but not a ranking factor." },
      ]}
    >
      <AiChecker />
    </ToolPage>
  );
}
