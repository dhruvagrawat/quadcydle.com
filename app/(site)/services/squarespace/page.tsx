import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";

export const metadata: Metadata = {
  title: "Squarespace Design, SEO & Management — Quadcydle",
  description: "Professional Squarespace website design, SEO configuration, CSS customisation, and ongoing management.",
};

export default function SquarespacePage() {
  return (
    <ServicePage
      tag="Squarespace Services"
      accentColor="#e0e0e0"
      title="Beautiful Squarespace Sites That Rank"
      subtitle="Squarespace looks great out of the box — but with expert design, CSS customisation, and proper SEO setup, it becomes a real business asset."
      heroImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400&q=80"
      stats={[
        { value: "4M+", label: "live Squarespace websites" },
        { value: "Top 10", label: "website builder worldwide" },
        { value: "99.98%", label: "platform uptime" },
        { value: "2 wk", label: "average design turnaround" },
      ]}
      features={[
        {
          icon: "🎭",
          title: "Custom Squarespace Design",
          description: "We go beyond templates with custom CSS, JavaScript, and layout techniques to create a site that's genuinely unique to your brand.",
        },
        {
          icon: "🔍",
          title: "SEO Optimisation",
          description: "Full Squarespace SEO setup: title tags, meta descriptions, structured data, sitemap, Google Search Console, and speed improvements.",
        },
        {
          icon: "🛍️",
          title: "Squarespace Commerce",
          description: "Product setup, payment integration, shipping configuration, digital downloads, and subscriptions — your shop, done properly.",
        },
        {
          icon: "📝",
          title: "Content & Blog Setup",
          description: "Blog structure, content strategy, category setup, and editorial calendar so your blog actually drives traffic.",
        },
        {
          icon: "🔄",
          title: "Migration Services",
          description: "Moving to Squarespace, or moving away? We handle both directions with full content transfer and SEO-safe URL management.",
        },
        {
          icon: "📊",
          title: "Analytics & Reporting",
          description: "Google Analytics 4, conversion tracking, and monthly performance reports so you always know what's working.",
        },
      ]}
      process={[
        { step: 1, title: "Strategy", description: "Define your goals, audience, and what success looks like for your site." },
        { step: 2, title: "Design", description: "Custom Squarespace layout with bespoke CSS to match your brand perfectly." },
        { step: 3, title: "SEO Setup", description: "Full technical SEO configuration before launch." },
        { step: 4, title: "Launch", description: "Domain connected, tested on all devices, live." },
      ]}
      pricingTitle="Squarespace Service Packages"
      pricing={[
        {
          name: "Design & Launch",
          price: 549,
          description: "A professionally designed Squarespace site for your business.",
          features: [
            "Up to 8 pages",
            "Custom CSS styling",
            "Mobile optimisation",
            "SEO basics setup",
            "Contact forms & social links",
            "Analytics integration",
            "2 weeks post-launch support",
          ],
          cta: "Get Started",
        },
        {
          name: "Managed Growth",
          price: 129,
          period: "mo",
          description: "Ongoing management, SEO, and content updates to grow your site.",
          features: [
            "Initial design optimisation",
            "Monthly SEO work",
            "2 content updates per month",
            "Blog post publishing",
            "Analytics reporting",
            "Priority email support",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Commerce Setup",
          price: 699,
          description: "Complete Squarespace Commerce configuration.",
          features: [
            "Full product catalogue setup",
            "Payment gateway integration",
            "Shipping & tax configuration",
            "Inventory management setup",
            "Email marketing integration",
            "Launch support included",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Can you make my Squarespace site look completely different from the template?",
          answer: "Yes. With custom CSS, injected JavaScript, and advanced block layouts, we can make a Squarespace site look entirely custom. Most visitors would never know the platform underneath.",
        },
        {
          question: "Does Squarespace rank well on Google?",
          answer: "With proper configuration, absolutely. Squarespace generates clean HTML, supports structured data, and is fast by default. The key is correct meta setup, quality content, and consistent link building.",
        },
        {
          question: "Can you move my existing website to Squarespace?",
          answer: "Yes. We migrate content from WordPress, Wix, Weebly, and other platforms to Squarespace, ensuring no SEO value is lost.",
        },
      ]}
      ctaTitle="Ready to elevate your Squarespace site?"
      ctaSubtitle="Tell us what you're trying to achieve and we'll show you how we'd get there."
    />
  );
}
