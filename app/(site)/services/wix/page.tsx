import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Wix Design, Management & Migration | Quadcydle",
  description:
    "Professional Wix website design, SEO setup, ongoing management and migration to or from Wix. Design and launch packages from £499.",
  path: "/services/wix",
});

export default function WixPage() {
  return (
    <ServicePage
      tag="Wix Services"
      accentColor="#0c6efc"
      title="Professional Wix That Means Business"
      subtitle="Wix can do far more than most people realise. We unlock its full potential with custom design, Velo development, and serious SEO — so your site actually performs."
      heroImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80"
      stats={[
        { value: "2%", label: "of all websites use Wix" },
        { value: "200M+", label: "registered Wix users" },
        { value: "100+", label: "Velo API integrations available" },
        { value: "8 wk", label: "average project delivery" },
      ]}
      features={[
        {
          icon: "✨",
          title: "Custom Wix Design",
          description: "We design Wix sites that look nothing like a template. Brand-aligned, conversion-focused, and polished to a professional finish.",
        },
        {
          icon: "💻",
          title: "Velo (Wix Code) Development",
          description: "Custom functionality using Wix Velo — dynamic pages, custom forms, API connections, member areas, and more.",
        },
        {
          icon: "🔍",
          title: "Wix SEO Setup",
          description: "Complete SEO configuration: meta tags, structured data, XML sitemap, URL structure, Google Search Console, and page speed tuning.",
        },
        {
          icon: "🛒",
          title: "Wix Stores & Bookings",
          description: "E-commerce setup, product configuration, Wix Bookings for appointments, and payment gateway integration.",
        },
        {
          icon: "🔄",
          title: "Platform Migration",
          description: "Moving from another platform to Wix, or from Wix to WordPress/Webflow? We handle full content and SEO-safe migrations.",
        },
        {
          icon: "📚",
          title: "Training & Handover",
          description: "Once we're done, we train you to manage the site confidently with recorded walkthroughs and documentation.",
        },
      ]}
      process={[
        { step: 1, title: "Brief", description: "We understand your brand, goals, and what existing sites inspire you." },
        { step: 2, title: "Design", description: "Custom layout and visual design created in Wix Editor or Studio." },
        { step: 3, title: "Develop", description: "Velo code, integrations, and interactive features built and tested." },
        { step: 4, title: "SEO Setup", description: "Full on-site SEO configured before launch." },
        { step: 5, title: "Launch & Train", description: "Site goes live with a handover session so you're confident managing it." },
      ]}
      pricingTitle="Wix Service Packages"
      pricing={[
        {
          name: "Design & Launch",
          price: 499,
          description: "A professionally designed Wix site, ready to go live.",
          features: [
            "Up to 8 pages designed",
            "Mobile-responsive layout",
            "Basic SEO configuration",
            "Contact form & social links",
            "Google Analytics setup",
            "1 revision round",
            "14-day post-launch support",
          ],
          cta: "Get Started",
        },
        {
          name: "Design + SEO + Management",
          price: 149,
          period: "mo",
          description: "Ongoing management and SEO for businesses serious about growth.",
          features: [
            "Initial design overhaul",
            "Full SEO setup & monthly optimisation",
            "Monthly content updates (2 pages)",
            "Performance monitoring",
            "Security & uptime checks",
            "Monthly report",
            "Priority support",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Velo Development",
          price: "From £799",
          description: "Custom Wix Velo features and integrations.",
          features: [
            "Custom dynamic pages",
            "API & third-party integrations",
            "Custom member areas",
            "Advanced forms & logic",
            "CMS collections setup",
            "Full testing & documentation",
          ],
          cta: "Get a Quote",
        },
      ]}
      faq={[
        {
          question: "Is Wix good enough for a serious business?",
          answer: "With the right setup, yes. Wix has matured significantly and can handle e-commerce, bookings, member areas, and custom functionality via Velo. The key is knowing how to configure it properly.",
        },
        {
          question: "Can you improve my existing Wix site?",
          answer: "Absolutely. We frequently take over poorly-built Wix sites and transform them — redesigning layouts, fixing SEO issues, speeding things up, and adding missing functionality.",
        },
        {
          question: "Can you migrate my Wix site to WordPress?",
          answer: "Yes. If you've outgrown Wix, we can migrate your content to WordPress or another platform while keeping your SEO intact.",
        },
      ]}
      ctaTitle="Let's make your Wix site shine"
      ctaSubtitle="Whether you need a new site, an overhaul, or ongoing management, we know Wix inside out."
    />
  );
}
