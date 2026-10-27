import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Custom Web Development — React & Next.js | Quadcydle",
  description:
    "Custom websites and web applications built with React and Next.js — fast, secure, SEO-ready and designed around your business. Brochure sites from £1,499.",
  path: "/services/custom-web",
});

export default function CustomWebPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/custom-web")}
      tag="Custom Development"
      accentColor="#7c3aed"
      title="Custom Web Applications Built to Last"
      subtitle="When off-the-shelf platforms aren't enough, we build bespoke. React frontends, Node.js APIs, PostgreSQL databases — architected properly from day one."
      stats={[
        { value: "5+", label: "years shipping web apps" },
        { value: "99%", label: "on-time delivery rate" },
        { value: "< 48h", label: "response to scope requests" },
        { value: "100%", label: "ownership handed to you" },
      ]}
      features={[
        {
          icon: "⚛️",
          title: "React & Next.js Frontend",
          description: "Server-side rendered, statically generated, or fully client-side — we choose the right architecture for your performance requirements.",
        },
        {
          icon: "🔧",
          title: "Backend API Development",
          description: "RESTful and GraphQL APIs built with Node.js, Python, or Go. Scalable, documented, and properly tested.",
        },
        {
          icon: "🗄️",
          title: "Database Design",
          description: "PostgreSQL, MongoDB, MySQL, or Redis — we design schemas that handle your data cleanly and scale as you grow.",
        },
        {
          icon: "🔐",
          title: "Authentication & Auth Systems",
          description: "JWT, OAuth2, SSO, role-based access control, MFA — secure auth for any application complexity.",
        },
        {
          icon: "🚀",
          title: "Deployment & DevOps",
          description: "CI/CD pipelines, Docker containers, Kubernetes, AWS / GCP / Vercel — we deploy and manage your infrastructure properly.",
        },
        {
          icon: "🤖",
          title: "AI Feature Integration",
          description: "LLM integration, RAG pipelines, AI-powered search, and intelligent automation — built into your product from the start.",
        },
      ]}
      process={[
        { step: 1, title: "Discovery & Spec", description: "Requirements, user stories, and technical spec agreed in writing before any code is written." },
        { step: 2, title: "Architecture", description: "Tech stack, data model, and system design reviewed and signed off." },
        { step: 3, title: "Build (Sprints)", description: "Two-week sprints with demos at the end of each. You see progress constantly." },
        { step: 4, title: "QA & Testing", description: "Functional, integration, and performance testing before any release." },
        { step: 5, title: "Deploy & Handover", description: "Production deployment, documentation, and code ownership fully transferred to you." },
      ]}
      pricingTitle="Custom Development Pricing"
      pricing={[
        {
          name: "Landing Page / Brochure",
          price: "From £1,499",
          description: "A fast, polished marketing site built with Next.js.",
          features: [
            "Next.js static generation",
            "Up to 8 sections / pages",
            "CMS integration",
            "Contact form with email",
            "SEO & performance optimised",
            "Vercel / Netlify deployment",
            "1 month post-launch support",
          ],
          cta: "Get a Quote",
        },
        {
          name: "Full Web Application",
          price: "From £4,999",
          description: "A complete web app with frontend, backend, and database.",
          features: [
            "React / Next.js frontend",
            "Node.js or Python API",
            "Database design & setup",
            "User authentication",
            "Admin dashboard",
            "Cloud deployment",
            "Full documentation",
            "3 months post-launch support",
          ],
          cta: "Get a Quote",
          highlighted: true,
        },
        {
          name: "Enterprise / SaaS",
          price: "Custom",
          description: "Complex platforms, SaaS products, and enterprise systems.",
          features: [
            "Full architecture design",
            "Microservices / monorepo",
            "Multi-tenant architecture",
            "Payment & subscription billing",
            "Analytics & reporting",
            "CI/CD & infrastructure",
            "Dedicated engineering team",
          ],
          cta: "Contact Us",
        },
      ]}
      faq={[
        {
          question: "What tech stack do you use?",
          answer: "Our primary stack is React / Next.js (frontend), Node.js or Python (backend), and PostgreSQL (database), deployed on AWS or Vercel. We adapt to client requirements.",
        },
        {
          question: "Do you take over existing codebases?",
          answer: "Yes. We audit existing code, identify issues, and can maintain, refactor, or extend it. We work with whatever stack is already in place when it makes sense to do so.",
        },
        {
          question: "How do you handle project management?",
          answer: "We work in two-week sprints with a dedicated project manager, weekly updates, and a shared project board. You always know exactly what's happening.",
        },
        {
          question: "Can you build AI-powered features?",
          answer: "Yes — we integrate LLMs (OpenAI, Anthropic), build RAG pipelines, and add AI-powered features like chat, search, content generation, and data analysis.",
        },
      ]}
      ctaTitle="Have a project in mind?"
      ctaSubtitle="Share your idea and we'll send back a technical approach and rough estimate within 48 hours."
      ctaLabel="Start a Project →"
    />
  );
}
