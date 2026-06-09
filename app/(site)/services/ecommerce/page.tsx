import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";

export const metadata: Metadata = {
  title: "E-commerce Suite — Store + Custom Dashboard | Quadcydle",
  description:
    "Complete e-commerce solution: platform setup, custom storefront, payment integration, and a bespoke analytics dashboard for your business.",
};

export default function EcommercePage() {
  return (
    <ServicePage
      tag="E-commerce Suite"
      accentColor="#10b981"
      title="An Online Store That Works as Hard as You Do"
      subtitle="Custom storefront design, payment integration, inventory management, and a bespoke analytics dashboard — everything you need to sell online at scale."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
      stats={[
        { value: "2×", label: "avg conversion rate improvement" },
        { value: "4–6 wk", label: "store build & launch time" },
        { value: "Stripe+", label: "Apple Pay, Google Pay, BNPL" },
        { value: "Any", label: "platform: Shopify, WooCommerce, custom" },
      ]}
      features={[
        {
          icon: "🛒",
          title: "Platform Setup",
          description: "We build on Shopify, WooCommerce, or a custom Next.js storefront depending on your scale and requirements. Always the right tool for the job.",
        },
        {
          icon: "🎨",
          title: "Custom Storefront Design",
          description: "A brand-led shopping experience — product pages, collection pages, and checkout flow designed to convert and retain customers.",
        },
        {
          icon: "💳",
          title: "Payment Integration",
          description: "Stripe, PayPal, Apple Pay, Google Pay, buy-now-pay-later (Klarna, Clearpay), and multi-currency support configured and tested.",
        },
        {
          icon: "📦",
          title: "Inventory Management",
          description: "Stock tracking, variant management, low-stock alerts, and supplier integrations so you never accidentally oversell.",
        },
        {
          icon: "📊",
          title: "Custom Analytics Dashboard",
          description: "A bespoke dashboard showing revenue, orders, conversion rate, top products, customer LTV, and marketing ROI — built for how you run your business.",
        },
        {
          icon: "🚚",
          title: "Fulfilment Integration",
          description: "Connect your store to Royal Mail, DPD, FedEx, or your 3PL partner. Automated label generation and tracking notification emails.",
        },
      ]}
      process={[
        { step: 1, title: "Discovery", description: "Products, customers, and goals — we understand your business before writing a line of code." },
        { step: 2, title: "Design", description: "Storefront UI/UX designed in Figma, reviewed and approved before development." },
        { step: 3, title: "Build", description: "Platform setup, product import, payment integration, and custom features built in sprints." },
        { step: 4, title: "Test", description: "Full checkout testing, payment gateway testing, and mobile QA before launch." },
        { step: 5, title: "Launch & Support", description: "Go-live support, analytics and tracking verified, and ongoing care plan available." },
      ]}
      pricingTitle="E-commerce Packages"
      pricing={[
        {
          name: "Starter Store",
          price: "From £1,499",
          description: "A polished e-commerce site for businesses just starting out.",
          features: [
            "Shopify or WooCommerce",
            "Up to 100 products",
            "Payment gateway setup",
            "Shipping configuration",
            "Basic analytics",
            "Mobile-optimised design",
            "1 month post-launch support",
          ],
          cta: "Get Started",
        },
        {
          name: "Growth Store",
          price: "From £3,499",
          description: "A full-featured store with custom dashboard and marketing tools.",
          features: [
            "Custom storefront (Shopify/WooCommerce)",
            "Unlimited products",
            "All payment methods",
            "Custom analytics dashboard",
            "Email marketing integration",
            "Abandoned cart recovery",
            "Upsell & cross-sell features",
            "3 months post-launch support",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Custom Platform",
          price: "From £9,999",
          description: "Bespoke e-commerce built from the ground up.",
          features: [
            "Custom Next.js storefront",
            "Headless commerce architecture",
            "Custom admin & dashboard",
            "ERP / WMS integration",
            "Multi-warehouse fulfilment",
            "B2B pricing & portal",
            "Dedicated engineering team",
          ],
          cta: "Get a Quote",
        },
      ]}
      faq={[
        {
          question: "Which platform should I use — Shopify or WooCommerce?",
          answer: "Shopify is generally better for businesses that want a hosted, low-maintenance platform. WooCommerce is better if you want more flexibility and control over hosting and functionality. We'll advise based on your specific situation.",
        },
        {
          question: "What does the custom dashboard show?",
          answer: "Revenue, orders, average order value, conversion rate by traffic source, top-selling products, inventory levels, customer LTV, return rate, and marketing channel ROI. We can customise the metrics to match how you run your business.",
        },
        {
          question: "Can you migrate my existing online store?",
          answer: "Yes — we migrate from any platform including Etsy, eBay, BigCommerce, Magento, and older Shopify or WooCommerce setups. Products, customers, and order history all transferred.",
        },
        {
          question: "Do you offer ongoing support after the store goes live?",
          answer: "Yes — all packages include post-launch support, and we offer e-commerce specific care plans covering updates, performance monitoring, and new feature development.",
        },
      ]}
      ctaTitle="Ready to sell more online?"
      ctaSubtitle="Let's talk about your products, your customers, and what a great online store would look like for your business."
      ctaLabel="Start Your Store →"
    />
  );
}
