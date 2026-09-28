import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Shopify Development & Store Setup | Quadcydle",
  description:
    "Custom Shopify store development, theme builds, app integration, and ongoing optimisation. We build Shopify stores that convert.",
  path: "/services/shopify",
});

export default function ShopifyPage() {
  return (
    <ServicePage
      tag="Shopify Development"
      accentColor="#96bf48"
      title="Shopify Stores That Actually Sell"
      subtitle="From a brand-new store to enterprise Shopify Plus — we design, build, and optimise Shopify experiences that convert browsers into buyers."
      stats={[
        { value: "4.6M+", label: "stores powered by Shopify" },
        { value: "2×", label: "higher CVR with custom themes" },
        { value: "£444B+", label: "in global Shopify merchant sales" },
        { value: "4–6 wk", label: "typical build time" },
      ]}
      features={[
        {
          icon: "🖌️",
          title: "Custom Theme Development",
          description: "Bespoke Shopify themes built with Liquid — fast, accessible, and designed around your brand. No bloated page builders.",
        },
        {
          icon: "📦",
          title: "Product & Catalogue Setup",
          description: "Bulk product import, variant configuration, collections, metafields, and inventory management — all handled for you.",
        },
        {
          icon: "💳",
          title: "Payment & Checkout Optimisation",
          description: "Shopify Payments, Stripe, PayPal, buy-now-pay-later options, and custom checkout flows to reduce cart abandonment.",
        },
        {
          icon: "🔗",
          title: "App Integration",
          description: "We integrate the right Shopify apps for reviews, loyalty, subscriptions, upsells, and email — and build custom apps when needed.",
        },
        {
          icon: "📈",
          title: "Conversion Rate Optimisation",
          description: "A/B tested product pages, upsell strategies, and abandoned cart recovery flows that measurably increase your revenue.",
        },
        {
          icon: "🚚",
          title: "Shipping & Fulfilment Setup",
          description: "Shipping zones, rates, carrier integration, 3PL connections, and fulfilment workflows — set up correctly from day one.",
        },
      ]}
      process={[
        { step: 1, title: "Discovery", description: "We learn about your products, brand, and customers to plan the right store architecture." },
        { step: 2, title: "Design", description: "Figma mockups of key pages, reviewed and approved before any code is written." },
        { step: 3, title: "Build", description: "Custom Liquid theme built, products imported, payments and shipping configured." },
        { step: 4, title: "Test", description: "Full device and browser testing, checkout flows validated, speed benchmarked." },
        { step: 5, title: "Launch", description: "Domain pointed, store goes live. We monitor for 2 weeks post-launch and fix anything that comes up." },
      ]}
      pricingTitle="Shopify Development Packages"
      pricing={[
        {
          name: "Starter Store",
          price: 799,
          description: "A clean, fast Shopify store for new or small businesses.",
          features: [
            "Premium theme customisation",
            "Up to 50 products imported",
            "Payment gateway setup",
            "Basic shipping configuration",
            "Mobile-optimised design",
            "Google Analytics & pixel setup",
            "2 weeks post-launch support",
          ],
          cta: "Get Started",
        },
        {
          name: "Growth Store",
          price: 1999,
          description: "A custom-built store designed to scale with your business.",
          features: [
            "Custom Liquid theme build",
            "Unlimited products imported",
            "Advanced checkout customisation",
            "App integrations (up to 5)",
            "Email marketing setup",
            "SEO foundation setup",
            "Conversion optimisation",
            "4 weeks post-launch support",
            "Staff training session",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Best Value",
        },
        {
          name: "Enterprise / Plus",
          price: "Custom",
          description: "Shopify Plus builds for high-volume brands and complex needs.",
          features: [
            "Full custom storefront build",
            "Shopify Plus scripts & flows",
            "Headless / custom storefront option",
            "Multi-currency & multi-language",
            "ERP / PIM / 3PL integrations",
            "Custom Shopify app development",
            "Dedicated project manager",
          ],
          cta: "Contact Us",
        },
      ]}
      faq={[
        {
          question: "Can you migrate my existing store to Shopify?",
          answer: "Yes — we migrate from WooCommerce, Magento, BigCommerce, Wix, and other platforms including all products, customers, and order history.",
        },
        {
          question: "Do you offer ongoing Shopify support after launch?",
          answer: "Yes. We offer monthly support retainers for Shopify stores including updates, new features, and performance monitoring.",
        },
        {
          question: "How long does a Shopify build take?",
          answer: "A Starter Store typically takes 2–3 weeks. Growth Stores take 4–6 weeks. Enterprise projects are scoped individually based on complexity.",
        },
        {
          question: "Can you build custom Shopify apps?",
          answer: "Absolutely. We build public and private Shopify apps using Node.js and the Shopify API for functionality that isn't available in the app store.",
        },
      ]}
      ctaTitle="Ready to build your Shopify store?"
      ctaSubtitle="Tell us what you're selling and we'll suggest the best approach for your budget and goals."
    />
  );
}
