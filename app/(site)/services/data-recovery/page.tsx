import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";

export const metadata: Metadata = {
  title: "Data Recovery — Emails, Files & Old Accounts | Quadcydle",
  description:
    "We recover lost emails, files, and data from old accounts, deactivated services, and failed systems. Business data recovery specialists.",
};

export default function DataRecoveryPage() {
  return (
    <ServicePage
      tag="Data Recovery"
      accentColor="#d97706"
      title="Get Your Data Back"
      subtitle="Lost access to an old email account? Files deleted from hosting? Business data locked in a deactivated service? We specialise in recovering what others say is gone."
      heroImage="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1400&q=80"
      stats={[
        { value: "90%+", label: "data recovery success rate" },
        { value: "30–90", label: "days providers retain data after closure" },
        { value: "100%", label: "NDA signed before work begins" },
        { value: "7-day", label: "email recovery guarantee" },
      ]}
      features={[
        {
          icon: "📧",
          title: "Email Recovery",
          description: "Recover emails from old cPanel hosting, deactivated Google or Microsoft accounts, PST/MBOX files, and legacy mail servers.",
        },
        {
          icon: "📁",
          title: "File & Document Recovery",
          description: "Retrieve files from deleted hosting accounts, expired cloud storage, corrupted drives, or inaccessible backup archives.",
        },
        {
          icon: "🔓",
          title: "Account Access Recovery",
          description: "Regain access to old business accounts where the original credentials are lost — email providers, hosting panels, domain registrars, and CMS platforms.",
        },
        {
          icon: "🗄️",
          title: "Database Recovery",
          description: "Extract and restore MySQL, PostgreSQL, and other databases from damaged installations, corrupt backups, or old hosting providers.",
        },
        {
          icon: "☁️",
          title: "Cloud Storage Migration",
          description: "Transfer data from legacy or discontinued cloud services before access is permanently lost.",
        },
        {
          icon: "🔄",
          title: "Platform Migration & Archiving",
          description: "Export and archive your data from services you're closing down — so nothing is lost when you cancel a subscription or switch providers.",
        },
      ]}
      process={[
        { step: 1, title: "Assessment", description: "We evaluate what's recoverable and provide an honest feasibility report before any commitment." },
        { step: 2, title: "NDA & Scope", description: "Non-disclosure agreement signed, scope and fixed price agreed upfront." },
        { step: 3, title: "Recovery", description: "We execute the recovery using the best available method for your specific situation." },
        { step: 4, title: "Delivery", description: "Recovered data securely transferred to you in your chosen format. Our copies deleted upon confirmation." },
      ]}
      pricingTitle="Data Recovery Packages"
      pricing={[
        {
          name: "Consultation",
          price: "£79",
          description: "Assess what's recoverable before committing to a full recovery.",
          features: [
            "45-minute technical assessment",
            "Recovery feasibility report",
            "Recommended recovery path",
            "Fixed-price recovery quote",
            "No obligation to proceed",
          ],
          cta: "Book Assessment",
        },
        {
          name: "Email Recovery",
          price: "£199",
          description: "Recover and export emails from old or inaccessible accounts.",
          features: [
            "Up to 3 email accounts",
            "PST / MBOX / EML export",
            "Import to new provider",
            "Contact list recovery",
            "Calendar data recovery",
            "7-day delivery guarantee",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Common",
        },
        {
          name: "Full Data Recovery",
          price: "Custom",
          description: "Complex recovery involving files, databases, and multiple systems.",
          features: [
            "Unlimited data sources",
            "Database extraction & restore",
            "File system recovery",
            "Account access recovery",
            "Full migration to new platform",
            "Recovery report & documentation",
          ],
          cta: "Get a Quote",
        },
      ]}
      faq={[
        {
          question: "How do you know if you can recover the data?",
          answer: "We start with a paid consultation to assess what's available and recoverable. We'll tell you honestly what we can and can't recover before you commit to the full service.",
        },
        {
          question: "Can you recover emails from an old hosting provider that has shut down?",
          answer: "Sometimes — it depends on whether backups exist and what the provider's data retention policy was. If there are any backups at all, we have methods to extract email data from them.",
        },
        {
          question: "My old account with a provider was deactivated. Is the data gone?",
          answer: "Not necessarily. Most providers retain data for 30–90 days after account closure. We can contact the provider on your behalf and attempt to recover access or request a data export.",
        },
        {
          question: "Is my recovered data kept confidential?",
          answer: "Absolutely. We sign NDAs as standard for data recovery work, all recovered data is handled securely, and we delete our copies once you've confirmed receipt.",
        },
      ]}
      ctaTitle="Think your data is gone? Let's check first."
      ctaSubtitle="Book a consultation and we'll tell you exactly what we can recover before you commit."
      ctaLabel="Book a Free Assessment →"
    />
  );
}
