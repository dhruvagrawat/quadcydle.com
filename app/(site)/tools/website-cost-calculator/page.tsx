import { CostCalculator } from "../../../../components/tools/cost-calculator";
import { ToolPage } from "../../../../components/tools/tool-page";
import { pageMeta } from "../../../../lib/seo";
import { getTool } from "../../../../lib/tools/list";

const tool = getTool("website-cost-calculator");

export const metadata = pageMeta({
  title: "Website Cost Calculator — Get a Price Range | Quadcydle",
  description: tool.description,
  path: `/tools/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPage
      tool={tool}
      heroTitle={"What will your\nsite *cost?*"}
      intro="Pick what you're building and the extras you need. You'll get an honest price range and monthly running costs, based on the prices we publish on our service pages."
      related={[
        { title: "How much does a website cost?", href: "/blog/how-much-does-a-website-cost" },
        { title: "How to choose a web agency", href: "/blog/how-to-choose-a-web-agency" },
        { title: "Pricing", href: "/pricing" },
      ]}
      guide={[
        {
          title: "Why it's a range",
          body: (
            <p>
              Two &quot;10-page websites&quot; can differ a lot: custom illustrations, complex forms, or migrating hundreds of old pages all
              add time. The low end assumes your content is ready and the scope is simple; the high end allows for more design rounds
              and integrations.
            </p>
          ),
        },
        {
          title: "Don't forget running costs",
          body: (
            <p>
              Hosting, a domain, updates and security patches continue after launch. We explain what&apos;s worth paying for in our guide
              to <a href="/blog/website-care-plans-explained">website care plans</a>.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Is this a quote?", a: "No — it's an indicative range. Send us the estimate and we'll reply with a fixed written quote within 48 hours." },
        { q: "Are prices including VAT?", a: "No, all figures exclude VAT and are in GBP. The pricing page can show other currencies." },
        { q: "Can I pay in stages?", a: "Most projects are split into a deposit and milestone payments. Ask us about the schedule that suits you." },
      ]}
    >
      <CostCalculator />
    </ToolPage>
  );
}
