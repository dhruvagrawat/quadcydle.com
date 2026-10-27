import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Website Support & Care Plans | Quadcydle",
  description:
    "Monthly website care plans covering updates, backups, security, content changes, and priority technical support.",
  path: "/services/website-support",
});

export default function WebsiteSupportPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/website-support")}
      tag="Website Support"
      accentColor="#6366f1"
      title="Your Website, Always in Good Hands"
      subtitle="Monthly care plans that keep your website fast, secure, up to date, and ready for whatever you throw at it — without you having to think about it."
      stats={[
        { value: "24/7", label: "uptime monitoring" },
        { value: "Daily", label: "offsite backups" },
        { value: "< 24h", label: "priority support response" },
        { value: "100%", label: "issues resolved in-plan" },
      ]}
      features={[
        {
          icon: "🔄",
          title: "Software Updates",
          description: "CMS core, themes, and plugins updated on a schedule — tested before going live so nothing breaks.",
        },
        {
          icon: "💾",
          title: "Daily Backups",
          description: "Automated offsite backups every 24 hours with easy restore. Your site and data are always protected.",
        },
        {
          icon: "🛡️",
          title: "Security Monitoring",
          description: "Malware scanning, uptime monitoring, firewall rules, and prompt response if anything suspicious is detected.",
        },
        {
          icon: "✏️",
          title: "Content Updates",
          description: "Need to update text, swap an image, or add a new page? Just send us the content and we'll handle it for you.",
        },
        {
          icon: "📊",
          title: "Monthly Reports",
          description: "A clear monthly summary of site health, traffic highlights, updates applied, and any issues resolved.",
        },
        {
          icon: "🆘",
          title: "Priority Support",
          description: "Something urgent? We're available for same-day or next-day response depending on your plan — not a ticket queue.",
        },
      ]}
      process={[
        { step: 1, title: "Site Audit", description: "We review your current site, hosting, and any existing issues before taking over." },
        { step: 2, title: "Onboarding", description: "Access setup, backup system configured, monitoring activated — all within 24 hours." },
        { step: 3, title: "First Update Cycle", description: "All pending software updates applied, security hardening done." },
        { step: 4, title: "Ongoing Care", description: "Monthly update cycles, backups, monitoring, and prompt support from your dedicated team." },
      ]}
      pricingTitle="Website Care Plans"
      pricing={[
        {
          name: "Essential",
          price: 49,
          period: "mo",
          description: "Core maintenance for simple sites that don't change often.",
          features: [
            "Monthly software updates",
            "Daily backups (14-day retention)",
            "Uptime monitoring",
            "Security scan (monthly)",
            "1 content change per month",
            "Email support (72h response)",
          ],
          cta: "Get Started",
        },
        {
          name: "Business",
          price: 99,
          period: "mo",
          description: "Active support and management for business websites.",
          features: [
            "Weekly software updates",
            "Daily backups (30-day retention)",
            "24/7 uptime monitoring",
            "Security monitoring & firewall",
            "3 content changes per month",
            "Performance checks (monthly)",
            "Priority support (24h response)",
            "Monthly health report",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Best Value",
        },
        {
          name: "Premium",
          price: 199,
          period: "mo",
          description: "Comprehensive care for high-value, high-traffic websites.",
          features: [
            "All Business plan features",
            "Unlimited content updates",
            "Speed optimisation (monthly)",
            "SEO health checks",
            "Staging environment access",
            "2 development hours per month",
            "Same-day support response",
            "Dedicated account manager",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "What counts as a content change?",
          answer: "Updating text, replacing images, adding a team member, changing contact details, updating pricing — anything that doesn't require new functionality. Development work (new features, layouts) is charged separately or included on the Premium plan.",
        },
        {
          question: "Can you support a site you didn't build?",
          answer: "Yes. We audit the site first and if we find anything we need to flag, we'll tell you before taking over. We work with sites built on any platform.",
        },
        {
          question: "What happens if my site breaks?",
          answer: "We investigate and fix it — usually the same day. If the issue is caused by something we updated, the fix is included at no extra cost.",
        },
        {
          question: "Can I cancel any time?",
          answer: "Monthly plans can be cancelled with 30 days' notice. Annual plans can be cancelled at the end of the subscription period.",
        },
      ]}
      ctaTitle="Stop worrying about your website"
      ctaSubtitle="Hand it over to us. We'll keep it running smoothly while you focus on your business."
      ctaLabel="View Care Plans →"
    />
  );
}
