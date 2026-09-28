import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "WordPress Development & Support | Quadcydle",
  description:
    "Custom WordPress themes, plugins, rebuilds and ongoing support — fast, secure sites your team can edit. Plans from £49/month.",
  path: "/services/wordpress",
});

export default function WordPressPage() {
  return (
    <ServicePage
      tag="WordPress Services"
      accentColor="#3858e9"
      title="WordPress Done Right"
      subtitle="From a fresh install to a complex multisite — we handle every aspect of your WordPress site so you can focus on your business, not your CMS."
      heroImage="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1400&q=80"
      stats={[
        { value: "43%", label: "of all websites run WordPress" },
        { value: "99.9%", label: "uptime guaranteed" },
        { value: "< 2s", label: "target page load time" },
        { value: "24/7", label: "security monitoring" },
      ]}
      features={[
        {
          icon: "🎨",
          title: "Custom Theme Development",
          description: "Pixel-perfect, mobile-first WordPress themes built from scratch or adapted from premium frameworks — always clean-coded and fast.",
        },
        {
          icon: "🔌",
          title: "Plugin Management",
          description: "We select, configure, and maintain the right plugins for your site. No bloat, no conflicts, no security vulnerabilities.",
        },
        {
          icon: "⚡",
          title: "Speed Optimisation",
          description: "Core Web Vitals tuning, image compression, caching, CDN setup, and database optimisation to keep your site blazing fast.",
        },
        {
          icon: "🛡️",
          title: "Security & Monitoring",
          description: "Malware scanning, firewall setup, login protection, and 24/7 uptime monitoring — we keep your site safe around the clock.",
        },
        {
          icon: "🔄",
          title: "Daily Backups",
          description: "Automated offsite backups every 24 hours with one-click restore. Your data is always safe, even if the worst happens.",
        },
        {
          icon: "🛒",
          title: "WooCommerce Development",
          description: "Custom product pages, payment gateway integration, shipping setup, and order management for your WordPress online store.",
        },
      ]}
      process={[
        { step: 1, title: "Site Audit", description: "We review your existing setup, flag issues, and agree on priorities before touching anything." },
        { step: 2, title: "Staging Setup", description: "All changes are tested on a staging copy of your site — nothing goes live untested." },
        { step: 3, title: "Implementation", description: "Updates, optimisations, and new features applied with zero downtime." },
        { step: 4, title: "Monitor & Report", description: "Ongoing monitoring, monthly reports, and a direct line to our team whenever you need us." },
      ]}
      pricingTitle="WordPress Care Plans"
      pricing={[
        {
          name: "Starter",
          price: 49,
          period: "mo",
          description: "Essential WordPress maintenance for small sites and blogs.",
          features: [
            "WordPress core & plugin updates",
            "Daily automated backups",
            "Basic security monitoring",
            "Uptime monitoring",
            "1 hour support per month",
            "Monthly health report",
          ],
          cta: "Get Started",
        },
        {
          name: "Professional",
          price: 99,
          period: "mo",
          description: "Full management for growing business websites.",
          features: [
            "Everything in Starter",
            "Speed optimisation (monthly)",
            "Security hardening & firewall",
            "Google Analytics reporting",
            "3 hours support per month",
            "Content updates included",
            "Priority support (24h response)",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Agency",
          price: 199,
          period: "mo",
          description: "White-glove WordPress management for high-traffic sites.",
          features: [
            "Everything in Professional",
            "Custom development hours (5/mo)",
            "Advanced performance monitoring",
            "Staging environment",
            "Dedicated account manager",
            "Same-day support response",
            "Monthly strategy call",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Do you work with my existing WordPress site?",
          answer: "Yes — we can take over management of any existing WordPress installation, regardless of who built it or what plugins it uses. We'll do a full audit first and flag any issues.",
        },
        {
          question: "Will updates break my site?",
          answer: "We always test updates on a staging environment before pushing to production. If anything breaks, we catch it before it affects your visitors.",
        },
        {
          question: "Can you migrate my site to a new host?",
          answer: "Absolutely. We handle full WordPress migrations — files, databases, DNS — with zero downtime. Migration is included free with any annual plan.",
        },
        {
          question: "What happens if my site gets hacked?",
          answer: "We clean hacked sites and restore from backup, usually within a few hours. On Professional and Agency plans this is included at no extra cost.",
        },
      ]}
      ctaTitle="Let's get your WordPress site in great shape"
      ctaSubtitle="Whether you need a new site built or an existing one looked after, we've got you covered."
    />
  );
}
