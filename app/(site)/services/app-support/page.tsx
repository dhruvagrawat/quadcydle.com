import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "App Support & Maintenance Plans | Quadcydle",
  description:
    "Ongoing mobile app support: OS updates, bug fixes, performance monitoring, and new feature development. Keep your app healthy.",
  path: "/services/app-support",
});

export default function AppSupportPage() {
  return (
    <ServicePage
      tag="App Support"
      accentColor="#14b8a6"
      title="Keep Your App Healthy & Up to Date"
      subtitle="Operating systems update, libraries deprecate, and bugs surface. Our app support plans keep your iOS and Android app running smoothly long after launch."
      stats={[
        { value: "< 48h", label: "bug response time" },
        { value: "2× / year", label: "major OS updates handled" },
        { value: "99.5%", label: "app store compliance rate" },
        { value: "Monthly", label: "health & usage reports" },
      ]}
      features={[
        {
          icon: "🔧",
          title: "OS & SDK Updates",
          description: "iOS and Android release major updates every year. We apply updates proactively so your app never gets flagged or removed from the stores.",
        },
        {
          icon: "🐛",
          title: "Bug Fixes & Crash Reporting",
          description: "We monitor crash reports via Sentry or Firebase Crashlytics and fix bugs before your users complain about them.",
        },
        {
          icon: "⚡",
          title: "Performance Optimisation",
          description: "Regular profiling sessions to keep app startup time, scroll performance, and memory usage in good shape as your user base grows.",
        },
        {
          icon: "✨",
          title: "Feature Development",
          description: "Dedicated hours each month for new feature development — improvements, enhancements, and new screens as your product evolves.",
        },
        {
          icon: "🔒",
          title: "Security Updates",
          description: "Dependency audits, security patches, and prompt responses to App Store security requirements as they change.",
        },
        {
          icon: "📊",
          title: "Monthly Reporting",
          description: "A clear monthly report covering app store performance, crash rate, session data, and what work was done during the period.",
        },
      ]}
      process={[
        { step: 1, title: "Onboarding Audit", description: "We review the codebase, identify outdated dependencies, and document the app's current health." },
        { step: 2, title: "Stabilise", description: "Fix any existing crashes, remove deprecated APIs, and bring the app to a stable baseline." },
        { step: 3, title: "Monitor", description: "Crash reporting and analytics configured for continuous visibility into app health." },
        { step: 4, title: "Maintain", description: "Monthly update cycles, prompt bug fixes, and feature development as part of your plan." },
      ]}
      pricingTitle="App Support Plans"
      pricing={[
        {
          name: "Essential",
          price: 149,
          period: "mo",
          description: "Core maintenance for apps that don't change much.",
          features: [
            "OS & dependency updates",
            "Crash monitoring & reporting",
            "2 bug fixes per month",
            "App Store compliance checks",
            "Monthly health report",
            "Email support",
          ],
          cta: "Get Started",
        },
        {
          name: "Growth",
          price: 349,
          period: "mo",
          description: "Active support for evolving, growing apps.",
          features: [
            "Everything in Essential",
            "5 bug fixes per month",
            "4 hours feature development",
            "Performance profiling (quarterly)",
            "Security audit (bi-annual)",
            "Priority support (48h response)",
            "Monthly strategy call",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Dedicated",
          price: 799,
          period: "mo",
          description: "Full ongoing development and support for active products.",
          features: [
            "Everything in Growth",
            "Unlimited bug fixes",
            "12 hours feature development",
            "Weekly performance review",
            "Dedicated engineer",
            "Same-day response",
            "User feedback analysis",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Do I need app support even if my app is stable?",
          answer: "Yes — both Apple and Google change their requirements regularly. Apps that aren't updated can be removed from the store or have features disabled without warning.",
        },
        {
          question: "Can you support an app you didn't build?",
          answer: "Yes, though we'll need to do an audit first to understand the codebase. We've taken over maintenance for apps built by other agencies and freelancers many times.",
        },
        {
          question: "What if I need more hours in a given month?",
          answer: "No problem — we charge for additional hours at a discounted rate for support clients. Unused hours from a month don't roll over but we track usage carefully.",
        },
      ]}
      ctaTitle="Don't let your app fall behind"
      ctaSubtitle="A monthly support plan keeps your app in the store, bug-free, and improving."
      ctaLabel="View Support Plans →"
    />
  );
}
