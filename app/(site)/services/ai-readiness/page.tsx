import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Readiness Audit — Is Your Website AI-Readable? | Quadcydle",
  description:
    "An audit of how well AI assistants and AI search can read your website: crawler access, llms.txt, rendering, structured data, content clarity and business details.",
  path: "/services/ai-readiness",
});

export default function AiReadinessPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/ai-readiness")}
      tag="AI Readiness Audit"
      accentColor="#7C9CFF"
      title="Can AI actually read your website?"
      subtitle="Many sites are invisible to AI tools for fixable reasons — blocked crawlers, content hidden behind JavaScript, vague pages and inconsistent details. We find them and fix them."
      features={[
        {
          icon: "🔓",
          title: "Crawler access check",
          description: "Which AI and search bots your robots.txt, firewall and CDN allow or block — including ones blocked by accident.",
        },
        {
          icon: "💻",
          title: "Rendering test",
          description: "We check whether your key content is in the HTML or only appears after JavaScript runs — many AI crawlers don't run JavaScript.",
        },
        {
          icon: "🧾",
          title: "Structured data review",
          description: "Schema validated against what's actually on each page, with missing types flagged — Organization, Service, Product, Article, FAQ.",
        },
        {
          icon: "💭",
          title: "Content clarity scoring",
          description: "Are prices, services, locations and answers stated plainly, or buried in vague marketing copy? We score each key page.",
        },
        {
          icon: "🧠",
          title: "llms.txt & sitemap",
          description: "Whether you have a sitemap and llms.txt, and whether they point to the pages that matter.",
        },
        {
          icon: "📋",
          title: "Written report & fixes",
          description: "A prioritised report in plain English — and, if you want, we implement the fixes.",
        },
      ]}
      process={[
        { step: 1, title: "Crawl", description: "We crawl your site the way AI crawlers do — with and without JavaScript." },
        { step: 2, title: "Check", description: "Crawler rules, schema, rendering, content clarity and business details reviewed page by page." },
        { step: 3, title: "Report", description: "A prioritised report with each issue explained in plain English." },
        { step: 4, title: "Fix", description: "Optionally, we fix everything and re-test." },
      ]}
      pricingTitle="AI readiness packages"
      pricing={[
        {
          name: "AI Readiness Report",
          price: 149,
          description: "A written audit of up to 25 pages.",
          features: ["Crawler access check", "JavaScript rendering test", "Schema review", "Content clarity scoring", "Prioritised report"],
          cta: "Get started",
        },
        {
          name: "Report + Fixes",
          price: 449,
          description: "We audit, then implement the fixes.",
          features: ["Everything in the report", "robots.txt & llms.txt set up", "Schema added or fixed", "Up to 5 pages rewritten for clarity", "Re-test after fixes"],
          cta: "Get started",
          highlighted: true,
          badge: "Recommended",
        },
        {
          name: "Large sites",
          price: "Custom",
          description: "E-commerce catalogues, multi-language and 100+ page sites.",
          features: ["Full-site crawl", "Template-level schema", "Developer handoff notes", "Dedicated contact"],
          cta: "Contact us",
        },
      ]}
      faq={[
        { question: "Can I check my site for free first?", answer: "Yes — our free AI Readability Checker tests any single page for the most common issues. The paid audit covers your whole site and includes fixes." },
        { question: "How is this different from the AI Search Optimisation service?", answer: "The readiness audit is the technical foundation: can AI read your site at all? AI Search Optimisation goes further — tracking how AI assistants answer questions about your market and improving your visibility in them." },
        { question: "Will this affect my normal Google rankings?", answer: "Positively, if anything. Clear content, good structured data and server-rendered pages help traditional search too." },
      ]}
      ctaTitle="Is your website AI-ready?"
      ctaSubtitle="Try the free checker, or send us your site for a full readiness audit."
      ctaHref="/tools/ai-readability-checker"
      ctaLabel="Try the free checker"
    />
  );
}
