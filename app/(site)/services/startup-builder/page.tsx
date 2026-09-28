import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";

export const metadata: Metadata = {
  title: "Startup Builder Package — Everything to Launch Your Business | Quadcydle",
  description:
    "The all-in-one package for new businesses: website, branding, business email, hosting, app setup, company registration guidance, and AWS credits.",
};

const included = [
  {
    icon: "🌐",
    title: "Professional Website",
    description: "A fast, mobile-first website built on WordPress or Next.js — up to 8 pages, designed to convert visitors from day one.",
  },
  {
    icon: "🎨",
    title: "Brand Identity",
    description: "Logo design, colour palette, typography, and a brand guidelines document to keep everything consistent.",
  },
  {
    icon: "📧",
    title: "Business Email Setup",
    description: "Google Workspace or Microsoft 365 configured with your domain — professional email from day one.",
  },
  {
    icon: "☁️",
    title: "Managed Hosting (1 Year)",
    description: "12 months of managed hosting — fast NVMe servers, SSL, daily backups, and uptime monitoring.",
  },
  {
    icon: "🔍",
    title: "SEO Foundation",
    description: "Google Search Console setup, sitemap submission, meta tags, and local SEO if applicable.",
  },
  {
    icon: "📊",
    title: "Analytics Setup",
    description: "Google Analytics 4 and Tag Manager installed and configured so you understand your traffic from the start.",
  },
  {
    icon: "🏢",
    title: "Company Registration Guidance",
    description: "We guide you through UK Ltd or LLP registration, Companies House filing, and what records to keep.",
  },
  {
    icon: "☁️",
    title: "AWS Credits Application",
    description: "We help you apply for AWS Activate startup credits (up to $100k) to cover cloud infrastructure costs.",
  },
  {
    icon: "📱",
    title: "Social Media Setup",
    description: "Profile creation and branding on LinkedIn, Instagram, Facebook, and X — consistent from launch.",
  },
  {
    icon: "🛡️",
    title: "Legal Pages",
    description: "Privacy Policy, Terms of Service, and Cookie Policy drafted for your website.",
  },
];

const addOns = [
  { title: "Mobile App (React Native)", price: "From £4,999", href: "/services/mobile-app" },
  { title: "E-commerce / Online Store", price: "From £799", href: "/services/ecommerce" },
  { title: "Custom Web Application", price: "From £4,999", href: "/services/custom-web" },
  { title: "Social Media Management (3 mo)", price: "£299/mo", href: "/contact" },
  { title: "SEO Campaign (6 mo)", price: "£499/mo", href: "/contact" },
  { title: "Startup PR & Press Release", price: "From £299", href: "/contact" },
];

export default function StartupBuilderPage() {
  return (
    <ServicePage
      tag="Startup Builder Package"
      accentColor="#F4C8FF"
      title="Everything to launch your startup"
      subtitle="Website, branding, email, hosting, analytics, registration guidance, and more — one package so you can launch properly and focus on building."
      stats={[
        { value: "10+", label: "deliverables included" },
        { value: "£2,499", label: "fixed all-in price" },
        { value: "4–6 wk", label: "kickoff to launch" },
        { value: "12 mo", label: "hosting included" },
      ]}
      features={included}
      pricingTitle="One fixed price. Everything included."
      pricing={[
        {
          name: "Startup Builder",
          price: 2499,
          description: "One-time price, including 12 months of managed hosting.",
          features: [
            "Professional website built & launched",
            "Brand identity (logo + guidelines) delivered",
            "Business email configured on your domain",
            "12 months managed hosting included",
            "Google Analytics & Search Console setup",
            "Company registration guidance",
            "AWS Activate credits application",
            "Social media profiles set up",
            "Privacy Policy, T&Cs, and Cookie Policy",
          ],
          cta: "Get started",
          highlighted: true,
          badge: "All-in",
        },
      ]}
      addOns={addOns}
      ctaTitle="Ready to launch your startup?"
      ctaSubtitle="Tell us about your startup. We'll confirm the scope and get you a launch date within 48 hours of our first call."
    />
  );
}
