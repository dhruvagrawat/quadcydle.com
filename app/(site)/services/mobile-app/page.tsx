import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";

export const metadata: Metadata = {
  title: "Mobile App Development — iOS & Android | Quadcydle",
  description: "Cross-platform mobile app development with React Native. One codebase, two platforms, App Store and Google Play ready.",
};

export default function MobileAppPage() {
  return (
    <ServicePage
      tag="Mobile App Development"
      accentColor="#ec4899"
      title="Mobile Apps Users Actually Love"
      subtitle="We build iOS and Android apps with React Native — one codebase, native performance, and the polish your users expect. From MVP to production."
      heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80"
      stats={[
        { value: "iOS + Android", label: "from one codebase" },
        { value: "8–12 wk", label: "MVP delivery time" },
        { value: "4.7★", label: "average app store rating" },
        { value: "3×", label: "higher retention vs web" },
      ]}
      features={[
        {
          icon: "📱",
          title: "React Native Development",
          description: "Cross-platform apps that share 90%+ of code across iOS and Android, with native UI components and performance that feels truly native.",
        },
        {
          icon: "🎨",
          title: "UI/UX Design Included",
          description: "We design and build. Every app we ship has a polished, user-tested interface — we don't hand you wireframes and call it design.",
        },
        {
          icon: "🔐",
          title: "Authentication & User Accounts",
          description: "Social login (Google, Apple, Facebook), email/password, biometric auth, and full user profile management.",
        },
        {
          icon: "🔔",
          title: "Push Notifications",
          description: "Real-time push notifications via Expo or Firebase Cloud Messaging — transactional, marketing, and in-app notifications.",
        },
        {
          icon: "💳",
          title: "Payments & Subscriptions",
          description: "In-app purchases, Stripe integration, Apple Pay, Google Pay, and subscription billing — revenue features built correctly.",
        },
        {
          icon: "🚀",
          title: "App Store Submission",
          description: "We handle the full submission process for both App Store and Google Play, including metadata, screenshots, and review resolution.",
        },
      ]}
      process={[
        { step: 1, title: "Discovery", description: "Define user stories, core features, and what success looks like at launch." },
        { step: 2, title: "Design", description: "Figma screens for every flow, reviewed and approved before development starts." },
        { step: 3, title: "Build", description: "React Native development in sprints with TestFlight / internal builds for review." },
        { step: 4, title: "QA", description: "Device testing on real iOS and Android hardware, accessibility checks, performance profiling." },
        { step: 5, title: "Launch", description: "App Store and Google Play submission, monitoring for reviews, and fixing any post-launch issues." },
      ]}
      pricingTitle="Mobile App Development Packages"
      pricing={[
        {
          name: "MVP",
          price: "From £4,999",
          description: "A focused MVP to validate your idea and get to market fast.",
          features: [
            "iOS + Android (React Native)",
            "Up to 10 screens",
            "User auth (email & social)",
            "1 core feature set",
            "API integration",
            "App Store submission",
            "3 months post-launch support",
          ],
          cta: "Get a Quote",
        },
        {
          name: "Full Product",
          price: "From £12,999",
          description: "A complete, production-ready app with all the features your users need.",
          features: [
            "iOS + Android (React Native)",
            "Unlimited screens",
            "Full auth & user management",
            "Push notifications",
            "In-app payments",
            "Analytics integration",
            "Admin dashboard",
            "6 months post-launch support",
          ],
          cta: "Get a Quote",
          highlighted: true,
          badge: "Full Build",
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Complex apps for enterprise clients with specific requirements.",
          features: [
            "Custom architecture",
            "Offline-first capability",
            "Third-party system integration",
            "White-label options",
            "Tablet & iPad optimisation",
            "Dedicated team",
            "SLA-backed support",
          ],
          cta: "Contact Us",
        },
      ]}
      faq={[
        {
          question: "Do you build for both iOS and Android?",
          answer: "Yes — with React Native we build for both platforms simultaneously from a shared codebase, which dramatically reduces cost and time.",
        },
        {
          question: "How long does it take to build an app?",
          answer: "An MVP typically takes 8–12 weeks from kickoff to App Store submission. Full-featured apps take 4–6 months depending on complexity.",
        },
        {
          question: "Do you need the backend built too?",
          answer: "We can build the entire stack — app, API, database, and hosting. Or we can integrate with your existing backend.",
        },
        {
          question: "What happens after launch?",
          answer: "We offer ongoing support and maintenance plans covering OS updates, bug fixes, performance improvements, and new feature development.",
        },
      ]}
      ctaTitle="Let's build your app"
      ctaSubtitle="Share your idea and we'll come back with a scope, timeline, and quote within 48 hours."
      ctaLabel="Start Your App Project →"
    />
  );
}
