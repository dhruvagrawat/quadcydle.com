import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Google Workspace Setup & Migration | Quadcydle",
  description:
    "Professional Google Workspace setup, email migration, domain configuration, and ongoing admin support for your business.",
  path: "/services/google-workspace",
});

export default function GoogleWorkspacePage() {
  return (
    <ServicePage
      tag="Google Workspace"
      accentColor="#ea4335"
      title="Google Workspace Set Up Properly"
      subtitle="Gmail, Drive, Meet, Calendar, and Admin Console — we configure your entire Google Workspace environment correctly and migrate your existing data without losing a single email."
      stats={[
        { value: "Zero", label: "email downtime during migration" },
        { value: "< 48h", label: "full setup & go-live" },
        { value: "SPF+DKIM", label: "+DMARC configured as standard" },
        { value: "100%", label: "emails delivered, not spammed" },
      ]}
      features={[
        {
          icon: "📧",
          title: "Gmail & Email Migration",
          description: "Configure professional Gmail for your domain and migrate all emails, contacts, and calendar data from your old provider — Outlook, cPanel, Zoho, or anywhere else.",
        },
        {
          icon: "🌐",
          title: "Domain & DNS Configuration",
          description: "MX records, SPF, DKIM, DMARC — all the DNS settings configured correctly so your emails deliver reliably and don't land in spam.",
        },
        {
          icon: "👥",
          title: "User & Group Management",
          description: "Set up user accounts, admin roles, groups, aliases, and shared inboxes. We configure everything so your team can just start working.",
        },
        {
          icon: "🔒",
          title: "Security & Compliance",
          description: "Two-factor authentication enforcement, device management, data loss prevention, and audit logging — your workspace secured from day one.",
        },
        {
          icon: "🗂️",
          title: "Drive & Shared Files Setup",
          description: "Shared drives organised by team, permissions set correctly, and existing files migrated from Dropbox, OneDrive, or local storage.",
        },
        {
          icon: "🛠️",
          title: "Ongoing Admin Support",
          description: "Add users, reset accounts, troubleshoot issues, and manage your workspace with ongoing admin support from our team.",
        },
      ]}
      process={[
        { step: 1, title: "Audit", description: "Review your current email setup, user list, and what data needs to be migrated." },
        { step: 2, title: "Provision", description: "Create the Workspace account, configure your domain, and set up DNS records." },
        { step: 3, title: "Migrate", description: "Transfer all emails, contacts, and calendar events in parallel with zero downtime." },
        { step: 4, title: "Secure & Handover", description: "Security policies applied, admin training provided, and cutover completed." },
      ]}
      pricingTitle="Google Workspace Service Packages"
      pricing={[
        {
          name: "Setup & Launch",
          price: "£299",
          description: "Full Google Workspace setup for a new business.",
          features: [
            "Workspace account creation",
            "Domain & DNS configuration",
            "Up to 10 user accounts",
            "SPF, DKIM & DMARC setup",
            "Gmail branding & signature",
            "Drive structure setup",
            "Admin training session",
          ],
          cta: "Get Started",
        },
        {
          name: "Migration",
          price: "£499",
          description: "Migrate from your existing email provider to Google Workspace.",
          features: [
            "Full email migration",
            "Contact & calendar migration",
            "Up to 25 user mailboxes",
            "Zero-downtime cutover",
            "DNS configuration",
            "Post-migration support (2 weeks)",
            "User onboarding guide",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Ongoing Admin",
          price: 79,
          period: "mo",
          description: "Monthly Google Workspace administration and support.",
          features: [
            "User account management",
            "Security monitoring",
            "License management",
            "Troubleshooting & support",
            "Monthly workspace audit",
            "Priority response",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Can you migrate from Microsoft 365 / Outlook to Google Workspace?",
          answer: "Yes — we handle full migrations from Microsoft 365, Exchange, Outlook.com, and other email providers including all emails, contacts, and calendar events.",
        },
        {
          question: "Will there be any email downtime during migration?",
          answer: "No. We use a parallel migration approach — your old email keeps working throughout, and we cut over to Google Workspace only after everything is confirmed migrated.",
        },
        {
          question: "Which Google Workspace plan do I need?",
          answer: "We'll advise on this during setup. Most small businesses do well on Business Starter (£4.60/user/mo). We don't charge a markup on Google's subscription price.",
        },
        {
          question: "Can you recover emails from old or inaccessible accounts?",
          answer: "Often yes — see our Data Recovery service. We can recover emails from old hosting providers, deactivated accounts, and PST/MBOX files.",
        },
      ]}
      ctaTitle="Get Google Workspace running the right way"
      ctaSubtitle="Tell us what you're moving from and how many users you have. We'll handle the rest."
      ctaLabel="Get Set Up Today →"
    />
  );
}
