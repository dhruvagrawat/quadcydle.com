import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "SEO Services — Technical, On-Page & Content SEO | Quadcydle",
  description:
    "SEO that fixes the foundations first: technical audits, on-page optimisation, structured data, content that answers real searches, and plain-English monthly reporting.",
  path: "/services/seo",
});

export default function SeoPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/seo")}
      tag="SEO Services"
      accentColor="#C9F24B"
      title="SEO that fixes the foundations, then compounds"
      subtitle="No ranking guarantees and no bought links — just the technical fixes, page improvements and genuinely useful content that search engines reward over time."
      features={[
        {
          icon: "🔍",
          title: "Technical SEO audit & fixes",
          description: "Crawlability, indexing, canonicals, redirects, sitemaps, Core Web Vitals and structured data — found, prioritised and fixed, not just reported.",
        },
        {
          icon: "📝",
          title: "On-page optimisation",
          description: "Titles, descriptions, headings and internal links rewritten around what your customers actually search for — naturally, without keyword stuffing.",
        },
        {
          icon: "🧾",
          title: "Structured data",
          description: "Organization, Service, Product, Article and Breadcrumb schema that accurately describes your pages so search engines understand them.",
        },
        {
          icon: "📚",
          title: "Content strategy & writing",
          description: "Topic clusters and articles that answer real buyer questions and link into your service pages — the content behind lasting rankings.",
        },
        {
          icon: "📍",
          title: "Local SEO",
          description: "Google Business Profile setup and optimisation, consistent business details across directories, and location content where you genuinely operate.",
        },
        {
          icon: "📈",
          title: "Search Console & reporting",
          description: "Search Console and GA4 set up properly, then a monthly plain-English report: what moved, why, and what we're doing next.",
        },
      ]}
      process={[
        { step: 1, title: "Audit", description: "A full technical and content audit of your site, plus a look at what currently ranks for your key searches." },
        { step: 2, title: "Fix", description: "Critical technical issues fixed first — the things that stop pages being crawled, indexed or understood." },
        { step: 3, title: "Optimise", description: "Priority pages improved: titles, headings, content depth, internal links and schema." },
        { step: 4, title: "Publish", description: "A realistic content plan — fewer, better articles that support the pages that make you money." },
        { step: 5, title: "Measure", description: "Monthly reporting on clicks, rankings and — most importantly — enquiries and sales from search." },
      ]}
      pricingTitle="SEO packages"
      pricing={[
        {
          name: "SEO Foundations",
          price: 499,
          description: "A one-off project to fix the technical basics and set you up properly.",
          features: [
            "Full technical SEO audit",
            "Fixes for critical issues",
            "Titles & meta descriptions for key pages",
            "Structured data setup",
            "Search Console & GA4 setup",
            "Written action plan",
          ],
          cta: "Get started",
        },
        {
          name: "Monthly SEO",
          price: 399,
          period: "mo",
          description: "Ongoing technical care, on-page improvements and content.",
          features: [
            "Everything in Foundations",
            "2 optimised articles a month",
            "On-page improvements each month",
            "Internal linking & schema upkeep",
            "Monthly plain-English report",
            "Quarterly strategy call",
          ],
          cta: "Get started",
          highlighted: true,
          badge: "Most popular",
        },
        {
          name: "Growth SEO",
          price: 799,
          period: "mo",
          description: "For competitive markets and larger sites.",
          features: [
            "Everything in Monthly SEO",
            "4 articles a month",
            "Local SEO & Google Business Profile",
            "Competitor & content-gap analysis",
            "AI search visibility tracking",
            "Monthly strategy call",
          ],
          cta: "Contact us",
        },
      ]}
      faq={[
        { question: "How long does SEO take to work?", answer: "Technical fixes can show results in weeks once Google recrawls. Content-led growth usually takes three to six months, and longer in competitive markets. Anyone promising page one in 30 days is guessing." },
        { question: "Do you guarantee rankings?", answer: "No. Nobody controls Google's rankings. We commit to the work, to transparency about what we did, and to measuring results by enquiries and sales — not just traffic." },
        { question: "Do you build backlinks?", answer: "We never buy links. We help you earn them: listings in relevant directories and partner programmes, content worth citing, and digital PR where it makes sense." },
        { question: "Is there a minimum contract?", answer: "Monthly plans run month to month. SEO compounds over time, so most clients stay for at least six months, but you're not locked in." },
      ]}
      ctaTitle="Want more customers from search?"
      ctaSubtitle="Send us your website and we'll reply with the three biggest SEO problems we can see — free."
    />
  );
}
