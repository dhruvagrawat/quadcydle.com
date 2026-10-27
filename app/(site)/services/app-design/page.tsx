import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "App Design in Figma — UI/UX & Prototyping | Quadcydle",
  description:
    "Professional UI/UX app design with Figma. Design systems, interactive prototypes, and developer-ready handoff.",
  path: "/services/app-design",
});

export default function AppDesignPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/app-design")}
      tag="App Design"
      accentColor="#8b5cf6"
      title="Designs Developers Can Actually Build"
      subtitle="We design mobile and web apps in Figma — with complete design systems, interactive prototypes, and handoff files that make your dev team's life easy."
      stats={[
        { value: "Figma", label: "native design & prototyping" },
        { value: "2 wk", label: "first concept delivery" },
        { value: "40%", label: "avg UX-driven conversion lift" },
        { value: "100%", label: "dev-ready handoff included" },
      ]}
      features={[
        {
          icon: "🎨",
          title: "UI Design",
          description: "Clean, modern interfaces that follow platform conventions (iOS HIG and Material Design) while expressing your brand identity.",
        },
        {
          icon: "🧭",
          title: "UX Research & Flows",
          description: "User journey mapping, information architecture, and task flow design before a single pixel is placed — so the structure is right from the start.",
        },
        {
          icon: "⚙️",
          title: "Design Systems",
          description: "A complete component library in Figma — buttons, inputs, cards, navigation, typography scale — ready to extend as your product grows.",
        },
        {
          icon: "🖱️",
          title: "Interactive Prototypes",
          description: "Clickable Figma prototypes that simulate the real app experience for stakeholder review, user testing, or investor demos.",
        },
        {
          icon: "📐",
          title: "Developer Handoff",
          description: "Pixel-perfect specs, annotated components, auto-layout usage, and Figma Dev Mode access so developers can implement without guessing.",
        },
        {
          icon: "♿",
          title: "Accessibility Design",
          description: "Colour contrast checking, touch target sizing, focus states, and screen reader-friendly layouts baked in from the start.",
        },
      ]}
      process={[
        { step: 1, title: "Discovery", description: "User interviews, competitive analysis, and alignment on goals and success metrics." },
        { step: 2, title: "Architecture", description: "Information architecture, user flows, and content hierarchy mapped in Figma." },
        { step: 3, title: "Wireframes", description: "Low-fidelity layouts for every screen, reviewed and approved before visual design begins." },
        { step: 4, title: "Visual Design", description: "Full high-fidelity designs in your brand, with micro-interactions and all UI states." },
        { step: 5, title: "Handoff", description: "Developer-annotated Figma files, design tokens, and an exported asset library." },
      ]}
      pricingTitle="Design Packages"
      pricing={[
        {
          name: "App Design Sprint",
          price: "From £1,499",
          description: "Core screens designed and prototyped in 2 weeks.",
          features: [
            "Up to 15 screens",
            "2 design directions",
            "Component library (basic)",
            "Interactive prototype",
            "2 revision rounds",
            "Developer handoff file",
          ],
          cta: "Get Started",
        },
        {
          name: "Full Product Design",
          price: "From £3,499",
          description: "End-to-end UX + UI for a complete product.",
          features: [
            "UX research & user flows",
            "Full information architecture",
            "Unlimited screens",
            "Complete design system",
            "Clickable prototype",
            "3 revision rounds",
            "Dev handoff + documentation",
            "3 weeks of post-handoff support",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Design Retainer",
          price: "£999/mo",
          description: "Ongoing design support for evolving products.",
          features: [
            "Up to 20 design hours per month",
            "New feature design",
            "Design system maintenance",
            "A/B test variant design",
            "Same-week turnaround",
            "Direct Figma collaboration",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Do you do UX research as well as visual design?",
          answer: "Yes — on Full Product Design engagements we start with user flows, competitive analysis, and information architecture before touching visual design. Good structure first, then aesthetics.",
        },
        {
          question: "What file formats do you deliver?",
          answer: "All work is delivered as Figma files. We can also export assets in any format (SVG, PNG, WebP), and we provide Dev Mode access so developers can inspect spacing, fonts, and colours directly.",
        },
        {
          question: "Can you redesign an existing app?",
          answer: "Absolutely. We audit the current design, identify usability issues, and produce a redesign that's both more attractive and more usable. We can work from existing brand guidelines or help evolve them.",
        },
        {
          question: "Do you also build what you design?",
          answer: "Yes — we have in-house developers who can implement Figma designs in React Native (for mobile) or React/Next.js (for web). You get design and development from one team.",
        },
      ]}
      ctaTitle="Great products start with great design"
      ctaSubtitle="Let's design something your users will love — and your developers will thank you for."
      ctaLabel="Start Your Design Project →"
    />
  );
}
