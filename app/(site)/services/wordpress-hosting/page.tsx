import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Managed WordPress Hosting | Quadcydle",
  description:
    "WordPress hosting optimised for speed and reliability. Managed updates, staging, daily backups, and expert support.",
  path: "/services/wordpress-hosting",
});

export default function WordPressHostingPage() {
  return (
    <ServicePage
      tag="WordPress Hosting"
      accentColor="#2d7fea"
      title="Hosting Built for WordPress"
      subtitle="Not generic hosting with WordPress slapped on — infrastructure specifically configured for how WordPress works, with managed updates, staging, and expert care."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80"
      stats={[
        { value: "10×", label: "faster than shared hosting" },
        { value: "Daily", label: "automated backups" },
        { value: "PHP 8.2", label: "with Redis caching" },
        { value: "99.9%", label: "uptime guarantee" },
      ]}
      features={[
        {
          icon: "🔵",
          title: "WordPress-Optimised Stack",
          description: "PHP 8.2+, Nginx, Redis object caching, and OPcache — the exact server configuration that makes WordPress run at its best.",
        },
        {
          icon: "🔄",
          title: "Managed Core & Plugin Updates",
          description: "We apply WordPress core, theme, and plugin updates on a schedule, tested on staging first so nothing breaks on your live site.",
        },
        {
          icon: "🧪",
          title: "Staging Environments",
          description: "Every plan includes a staging site. Test changes, new plugins, or redesigns safely before pushing to production.",
        },
        {
          icon: "💾",
          title: "Daily Backups with Easy Restore",
          description: "Full site and database backups daily, stored offsite for 30+ days. Restore a specific date with one click.",
        },
        {
          icon: "🛡️",
          title: "WP-Specific Security",
          description: "Login protection, XML-RPC blocking, file permission hardening, malware scanning, and an application firewall tuned for WordPress.",
        },
        {
          icon: "📊",
          title: "Performance Dashboard",
          description: "Real-time visibility into PHP execution, database queries, cache hit rates, and Core Web Vitals.",
        },
      ]}
      process={[
        { step: 1, title: "Audit", description: "We review your current WordPress installation and hosting setup." },
        { step: 2, title: "Migrate", description: "Zero-downtime migration to our optimised WordPress infrastructure." },
        { step: 3, title: "Harden", description: "Security and performance configuration applied immediately after migration." },
        { step: 4, title: "Maintain", description: "Ongoing managed updates, monitoring, and support on your schedule." },
      ]}
      pricingTitle="WordPress Hosting Plans"
      pricing={[
        {
          name: "Personal",
          price: 14,
          period: "mo",
          description: "For blogs, portfolios, and small business sites.",
          features: [
            "1 WordPress site",
            "20 GB storage",
            "Free SSL & CDN",
            "Daily backups (14 days)",
            "Managed WP updates",
            "Staging environment",
            "Email support",
          ],
          cta: "Get Started",
        },
        {
          name: "Business",
          price: 29,
          period: "mo",
          description: "For growing businesses and WooCommerce stores.",
          features: [
            "5 WordPress sites",
            "50 GB storage",
            "Free SSL, CDN & wildcard SSL",
            "Daily backups (30 days)",
            "Managed WP + plugin updates",
            "Staging for each site",
            "Redis caching",
            "Priority support",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Agency",
          price: 79,
          period: "mo",
          description: "For agencies managing multiple client sites.",
          features: [
            "Unlimited WordPress sites",
            "200 GB storage",
            "Full CDN with 50+ edge locations",
            "Daily backups (60 days)",
            "Automated update testing",
            "White-label client portal",
            "Dedicated account manager",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Is this hosting managed or self-managed?",
          answer: "Fully managed. We handle server maintenance, WordPress updates, security patches, backups, and monitoring. You just manage your content.",
        },
        {
          question: "Can I host WooCommerce on these plans?",
          answer: "Yes — all plans are WooCommerce-compatible. For high-volume stores, we recommend the Business or Agency plan.",
        },
        {
          question: "Can you migrate my WordPress site from another host?",
          answer: "Yes — free migration is included with all annual plans. We move your site, database, and DNS with zero downtime.",
        },
      ]}
      ctaTitle="WordPress hosting that's actually managed"
      ctaSubtitle="Stop worrying about updates, backups, and security. We've got it."
    />
  );
}
