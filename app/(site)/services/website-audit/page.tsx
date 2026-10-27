import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Website Audit — Speed, SEO & UX Review | Quadcydle",
  description:
    "Comprehensive website audit covering SEO, performance, UX, accessibility, and security. Actionable recommendations to improve your site.",
  path: "/services/website-audit",
});

export default function WebsiteAuditPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/website-audit")}
      tag="Website Audit"
      accentColor="#eab308"
      title="Find Out What's Really Holding Your Site Back"
      subtitle="A comprehensive audit covering SEO, page speed, UX, accessibility, and security — with a prioritised action plan you can actually use."
      stats={[
        { value: "5 areas", label: "SEO, perf, UX, a11y, security" },
        { value: "5 days", label: "Quick Audit turnaround" },
        { value: "93%", label: "clients find critical issues" },
        { value: "3×", label: "avg speed improvement after fixes" },
      ]}
      features={[
        {
          icon: "🔍",
          title: "SEO Audit",
          description: "Technical SEO issues, missing meta data, crawl errors, keyword gaps, backlink profile, and competitor benchmark — full picture, nothing missed.",
        },
        {
          icon: "⚡",
          title: "Performance Audit",
          description: "Core Web Vitals analysis, Lighthouse scores, render-blocking resources, image optimisation opportunities, and server response time.",
        },
        {
          icon: "🖱️",
          title: "UX & Conversion Review",
          description: "Heuristic evaluation of navigation, CTAs, user journeys, and checkout flows. We identify exactly where users are dropping off.",
        },
        {
          icon: "♿",
          title: "Accessibility Audit",
          description: "WCAG 2.1 compliance review — colour contrast, keyboard navigation, screen reader compatibility, and form labelling.",
        },
        {
          icon: "🛡️",
          title: "Security Scan",
          description: "Outdated plugins, vulnerable dependencies, missing security headers, SSL configuration, and common attack vectors checked.",
        },
        {
          icon: "📋",
          title: "Actionable Report",
          description: "A clear, prioritised report with specific recommendations — not just a list of scores, but exactly what to fix and why it matters.",
        },
      ]}
      process={[
        { step: 1, title: "Kickoff", description: "Share your site URL, goals, and what's been tried before. We'll confirm scope and timeline." },
        { step: 2, title: "Analysis", description: "Automated tools + manual expert review across all 5 audit areas." },
        { step: 3, title: "Report", description: "Prioritised findings report with specific, actionable fixes — not generic advice." },
        { step: 4, title: "Debrief", description: "A call to walk through the findings, answer questions, and agree next steps." },
      ]}
      pricingTitle="Audit Packages"
      pricing={[
        {
          name: "Quick Audit",
          price: "£149",
          description: "A focused SEO and performance audit for smaller sites.",
          features: [
            "Up to 20-page site",
            "SEO technical audit",
            "Core Web Vitals review",
            "Top 10 priority fixes",
            "Written report",
            "30-min debrief call",
          ],
          cta: "Get Started",
        },
        {
          name: "Full Audit",
          price: "£349",
          description: "Complete audit across SEO, UX, performance, and security.",
          features: [
            "Unlimited pages",
            "Full SEO audit",
            "UX & conversion review",
            "Accessibility (WCAG 2.1)",
            "Security scan",
            "Performance deep-dive",
            "Competitor benchmark",
            "Prioritised action plan",
            "60-min debrief call",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Thorough",
        },
        {
          name: "Audit + Implementation",
          price: "From £799",
          description: "We audit your site and then fix everything we find.",
          features: [
            "Full Audit (everything above)",
            "All critical fixes implemented",
            "SEO foundations corrected",
            "Performance optimisation",
            "Security hardening",
            "Before & after report",
            "1 month post-fix monitoring",
          ],
          cta: "Get a Quote",
        },
      ]}
      faq={[
        {
          question: "What platforms do you audit?",
          answer: "Any platform — WordPress, Shopify, Squarespace, Wix, Webflow, custom sites. The audit methodology is platform-agnostic.",
        },
        {
          question: "How long does an audit take?",
          answer: "Quick Audits are delivered within 5 business days. Full Audits within 10 business days. Rush delivery is available for an additional fee.",
        },
        {
          question: "Will you fix the issues you find?",
          answer: "Yes — the Audit + Implementation package includes us fixing everything. Alternatively, you can take the report to your own team or we can fix specific items at our standard hourly rate.",
        },
        {
          question: "Can I use the audit report to get quotes from other developers?",
          answer: "Absolutely. The report is yours. We write it to be clear and actionable for any competent developer to implement.",
        },
      ]}
      ctaTitle="Find out exactly what's wrong with your site"
      ctaSubtitle="Most businesses are surprised by what a proper audit reveals. Let's take a look."
      ctaLabel="Order Your Audit →"
    />
  );
}
