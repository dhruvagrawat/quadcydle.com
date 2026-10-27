import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Search Optimisation (AI SEO / GEO) | Quadcydle",
  description:
    "Help ChatGPT, Perplexity, Gemini and Google AI Overviews understand, trust and cite your business — AI visibility audits, content, schema and crawler setup.",
  path: "/services/ai-seo",
});

export default function AiSeoPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/ai-seo")}
      tag="AI Search Optimisation"
      accentColor="#F4C8FF"
      title="Get found when customers ask AI, not just Google"
      subtitle="More buyers now ask ChatGPT, Perplexity or Google's AI Overviews for recommendations. We make your business easy for those systems to find, understand, trust and cite."
      features={[
        {
          icon: "🤖",
          title: "AI visibility audit",
          description: "We ask ChatGPT, Perplexity, Gemini and Google the questions your customers ask, and record whether — and how — your business appears.",
        },
        {
          icon: "🔓",
          title: "AI crawler access",
          description: "robots.txt reviewed for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended, so you choose deliberately what AI systems can read.",
        },
        {
          icon: "🧾",
          title: "Structured data & entities",
          description: "Schema and consistent business details that make it unambiguous who you are, what you offer, where, and at what price.",
        },
        {
          icon: "💭",
          title: "Answer-ready content",
          description: "Pages rewritten so key facts, definitions and answers are stated clearly and are easy to quote accurately — without losing your voice.",
        },
        {
          icon: "🧠",
          title: "llms.txt & AI-friendly structure",
          description: "An llms.txt file and clean, server-rendered HTML so AI tools can read your most important pages without guessing.",
        },
        {
          icon: "🌐",
          title: "Brand & citation footprint",
          description: "Consistent profiles and genuine third-party mentions — directories, partners, reviews — the sources AI systems draw on.",
        },
      ]}
      process={[
        { step: 1, title: "Baseline", description: "We test a set of real customer questions across AI assistants and Google AI Overviews and record where you appear today." },
        { step: 2, title: "Access", description: "Crawler rules, rendering, sitemap and llms.txt checked so AI systems can actually read your site." },
        { step: 3, title: "Clarity", description: "Key pages restructured with clear answers, facts and schema; business details made consistent everywhere." },
        { step: 4, title: "Authority", description: "Genuine third-party mentions and listings strengthened — the signals AI answers lean on." },
        { step: 5, title: "Re-test", description: "The same questions re-run monthly so you can see what changed." },
      ]}
      pricingTitle="AI search packages"
      pricing={[
        {
          name: "AI Visibility Audit",
          price: 249,
          description: "Find out how AI assistants see your business today.",
          features: [
            "20 customer questions tested across 4 AI tools",
            "AI crawler & robots.txt review",
            "Structured data & entity check",
            "Competitor comparison",
            "Prioritised action plan",
          ],
          cta: "Get started",
        },
        {
          name: "AI Search Optimisation",
          price: 599,
          description: "We make the changes, not just recommend them.",
          features: [
            "Everything in the audit",
            "llms.txt & crawler configuration",
            "Schema added or fixed site-wide",
            "Up to 8 key pages made answer-ready",
            "Business details made consistent",
            "Re-test after 30 days",
          ],
          cta: "Get started",
          highlighted: true,
          badge: "Best value",
        },
        {
          name: "Ongoing AI Visibility",
          price: 299,
          period: "mo",
          description: "Monthly tracking and improvement.",
          features: [
            "Monthly AI answer tracking",
            "2 answer-ready articles a month",
            "Citation & listing building",
            "Monthly report",
          ],
          cta: "Contact us",
        },
      ]}
      faq={[
        { question: "Is AI SEO different from normal SEO?", answer: "It builds on it. Google's AI Overviews draw on pages Google has indexed, and AI assistants favour clear, well-structured, authoritative sources. Strong SEO foundations are step one; AI optimisation adds clarity, entity consistency and crawler access on top." },
        { question: "Can you guarantee ChatGPT will recommend us?", answer: "No — and be wary of anyone who does. AI answers vary between users and change often. We improve the signals these systems rely on and track the results honestly." },
        { question: "Should we block AI crawlers?", answer: "It depends on your business. Blocking training crawlers doesn't have to mean disappearing from AI search — several companies use separate bots for search and for training. We'll explain the trade-offs for your site." },
        { question: "What is llms.txt?", answer: "A proposed standard: a plain-text file at your site root that points AI tools to your most important content. It's cheap to add, but support varies between AI companies, so we treat it as a bonus rather than a guarantee." },
      ]}
      ctaTitle="Find out what AI says about you"
      ctaSubtitle="Start with an AI visibility audit — you'll see exactly how your business shows up today."
    />
  );
}
