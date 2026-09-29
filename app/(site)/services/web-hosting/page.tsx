import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Managed Web Hosting — Fast, Secure & Monitored | Quadcydle",
  description:
    "Managed web hosting from £9/month: fast servers, SSL, daily backups, malware scanning and 24/7 uptime monitoring, with support from people who know your site.",
  path: "/services/web-hosting",
});

export default function WebHostingPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/web-hosting")}
      tag="Managed Hosting"
      accentColor="#06b6d4"
      title="Hosting That Just Works"
      subtitle="Fast NVMe servers, free SSL, daily backups, CDN, and 24/7 monitoring — without the complexity of managing it yourself."
      stats={[
        { value: "99.9%", label: "uptime SLA" },
        { value: "< 1 min", label: "downtime detection" },
        { value: "30-day", label: "backup retention" },
        { value: "5 min", label: "avg issue resolution" },
      ]}
      features={[
        {
          icon: "⚡",
          title: "NVMe SSD Servers",
          description: "Our servers run on NVMe solid-state storage — up to 10× faster than traditional SSDs. Your pages load faster, your rankings improve.",
        },
        {
          icon: "🔒",
          title: "Free SSL Certificates",
          description: "Let's Encrypt SSL certificates installed and auto-renewed for every domain. HTTPS everywhere, always.",
        },
        {
          icon: "🌍",
          title: "Global CDN",
          description: "Content delivered from the nearest edge location worldwide. Consistent fast load times regardless of where your visitors are.",
        },
        {
          icon: "💾",
          title: "Daily Automated Backups",
          description: "Full site backups every 24 hours retained for 30 days. One-click restore if anything goes wrong.",
        },
        {
          icon: "📊",
          title: "24/7 Uptime Monitoring",
          description: "We monitor your site every minute. If it goes down, we're alerted immediately and get to work fixing it — often before you notice.",
        },
        {
          icon: "🛡️",
          title: "DDoS Protection & Firewall",
          description: "Enterprise-grade protection against attacks, with a web application firewall filtering malicious traffic before it reaches your site.",
        },
      ]}
      process={[
        { step: 1, title: "Onboarding", description: "We audit your current setup and plan the migration or launch." },
        { step: 2, title: "Migration", description: "Files, databases, and DNS transferred with zero downtime." },
        { step: 3, title: "Optimise", description: "Caching, CDN, and security rules configured for your specific setup." },
        { step: 4, title: "Monitor", description: "24/7 automated monitoring with immediate alerts and response." },
      ]}
      pricingTitle="Hosting Plans"
      pricing={[
        {
          name: "Starter",
          price: 9,
          period: "mo",
          description: "For small sites, blogs, and landing pages.",
          features: [
            "10 GB NVMe storage",
            "1 website",
            "Free SSL certificate",
            "Daily backups (7-day retention)",
            "99.9% uptime SLA",
            "Email support",
          ],
          cta: "Get Started",
        },
        {
          name: "Professional",
          price: 22,
          period: "mo",
          description: "For growing business websites and WordPress sites.",
          features: [
            "50 GB NVMe storage",
            "5 websites",
            "Free SSL + wildcard SSL",
            "Daily backups (30-day retention)",
            "Global CDN included",
            "One-click staging environment",
            "Priority support (24h response)",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Business",
          price: 49,
          period: "mo",
          description: "For high-traffic sites that need maximum performance.",
          features: [
            "200 GB NVMe storage",
            "Unlimited websites",
            "Dedicated resources",
            "Daily backups (60-day retention)",
            "Advanced CDN & DDoS protection",
            "Dedicated IP address",
            "Phone & chat support",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Can you migrate my site from another host?",
          answer: "Yes — we handle full site migrations from any host at no extra cost, with zero downtime.",
        },
        {
          question: "What CMS and languages do you support?",
          answer: "We support WordPress, PHP, Node.js, Python, static sites, and most common web technologies.",
        },
        {
          question: "What happens if my site goes down?",
          answer: "Our monitoring alerts us within 1 minute. We investigate and resolve immediately, communicating with you throughout.",
        },
        {
          question: "Do you manage the hosting or just provide server space?",
          answer: "We fully manage the infrastructure — updates, security patches, performance tuning, backups, and monitoring. You never touch a server.",
        },
      ]}
      ctaTitle="Get reliable hosting from people who actually care"
      ctaSubtitle="Talk to us about migrating your site. We'll make it painless."
    />
  );
}
