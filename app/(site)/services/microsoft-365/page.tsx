import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Microsoft 365 Setup & Migration | Quadcydle",
  description:
    "Microsoft 365 setup, email migration, Exchange configuration, Teams setup, and ongoing admin support for your business.",
  path: "/services/microsoft-365",
});

export default function Microsoft365Page() {
  return (
    <ServicePage
      tag="Microsoft 365"
      accentColor="#0078d4"
      title="Microsoft 365 Configured for Your Business"
      subtitle="Outlook, Teams, SharePoint, OneDrive, Exchange — we set up and migrate your entire Microsoft 365 environment so your team is productive from day one."
      heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80"
      stats={[
        { value: "Zero", label: "email downtime during cutover" },
        { value: "< 48h", label: "full tenant setup time" },
        { value: "MFA + CA", label: "security policies as standard" },
        { value: "25+", label: "mailboxes migrated per project" },
      ]}
      features={[
        {
          icon: "📨",
          title: "Exchange & Outlook Setup",
          description: "Business email on your own domain with Exchange Online. Professional signatures, shared mailboxes, distribution lists, and calendar sharing all configured.",
        },
        {
          icon: "🌐",
          title: "DNS & Domain Configuration",
          description: "Autodiscover, MX records, SPF, DKIM, and DMARC — all DNS settings configured so email delivers reliably and passes spam filters.",
        },
        {
          icon: "💬",
          title: "Microsoft Teams Setup",
          description: "Teams configured with the right channels, guest access, meeting policies, and integrations for how your team actually communicates.",
        },
        {
          icon: "📁",
          title: "SharePoint & OneDrive",
          description: "SharePoint document libraries, site collections, and OneDrive set up with correct permissions so files are organised and secure.",
        },
        {
          icon: "🔐",
          title: "Security & Compliance",
          description: "MFA enforcement, Conditional Access policies, Defender for Business, and compliance features configured to protect your business data.",
        },
        {
          icon: "🛠️",
          title: "Admin & Ongoing Support",
          description: "User management, licence assignment, troubleshooting, and ongoing Microsoft 365 admin support available monthly.",
        },
      ]}
      process={[
        { step: 1, title: "Tenant Audit", description: "Review your existing 365 tenant or plan a fresh one — users, licences, and data inventory." },
        { step: 2, title: "Configure", description: "Domain setup, Exchange Online, Teams, SharePoint, and security baseline applied." },
        { step: 3, title: "Migrate", description: "Email, calendar, and file migration with zero downtime using staged cutover." },
        { step: 4, title: "Train & Handover", description: "Admin training and user onboarding guides so your team hits the ground running." },
      ]}
      pricingTitle="Microsoft 365 Service Packages"
      pricing={[
        {
          name: "Setup & Launch",
          price: "£349",
          description: "Complete Microsoft 365 setup for a new or existing tenancy.",
          features: [
            "Tenant setup or audit",
            "Domain & DNS configuration",
            "Up to 10 user accounts",
            "Exchange Online setup",
            "Teams initial configuration",
            "Security baseline setup",
            "Admin training session",
          ],
          cta: "Get Started",
        },
        {
          name: "Email Migration",
          price: "£549",
          description: "Migrate from Gmail, cPanel, or another platform to Microsoft 365.",
          features: [
            "Full email migration",
            "Calendar & contacts migration",
            "Up to 25 mailboxes",
            "Zero-downtime cutover",
            "DNS & autodiscover setup",
            "Post-migration support (2 weeks)",
            "User onboarding guide",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Ongoing Admin",
          price: 89,
          period: "mo",
          description: "Monthly Microsoft 365 administration and support.",
          features: [
            "User & licence management",
            "Security monitoring",
            "Troubleshooting & helpdesk",
            "Software updates & policies",
            "Monthly tenant audit",
            "Priority response",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Can you migrate from Google Workspace to Microsoft 365?",
          answer: "Yes — we migrate Gmail, Google Calendar, and Google Drive to Outlook, Exchange, and OneDrive with minimal disruption to your team.",
        },
        {
          question: "Which Microsoft 365 plan do we need?",
          answer: "Microsoft 365 Business Basic (£4.60/user/mo) is sufficient for most small businesses. We'll recommend the right plan after understanding your needs — and we don't mark up licence costs.",
        },
        {
          question: "Can you recover old emails from a previous Microsoft account?",
          answer: "Often yes — we can recover data from deactivated accounts, PST files, and old Exchange servers. See our Data Recovery service for more details.",
        },
        {
          question: "Do you support hybrid setups (on-premise Exchange + 365)?",
          answer: "Yes. We handle Hybrid Exchange configurations, including moving from on-premise Exchange to Exchange Online over time.",
        },
      ]}
      ctaTitle="Get your Microsoft 365 environment in order"
      ctaSubtitle="Whether you're setting up from scratch or migrating from another platform, we make it seamless."
      ctaLabel="Get Set Up Today →"
    />
  );
}
