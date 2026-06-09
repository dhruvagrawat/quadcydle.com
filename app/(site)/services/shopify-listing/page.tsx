import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";

export const metadata: Metadata = {
  title: "Shopify Product Listing & Catalog Management | Quadcydle",
  description: "Shopify product setup, bulk catalog upload, SEO-optimised descriptions, collections management, and ongoing listing maintenance.",
};

export default function ShopifyListingPage() {
  return (
    <ServicePage
      tag="Shopify Listing"
      accentColor="#96bf48"
      title="Shopify Catalog Setup That Sells"
      subtitle="Product listings that look great, load fast, and rank on Google. From bulk catalog import to ongoing variant management — we handle the work behind your store."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
      stats={[
        { value: "48h", label: "bulk upload turnaround" },
        { value: "SEO", label: "optimised product descriptions" },
        { value: "100%", label: "variant & inventory accuracy" },
        { value: "Any", label: "source format supported" },
      ]}
      features={[
        {
          icon: "📦",
          title: "Bulk Product Upload",
          description: "Import products from spreadsheets, WooCommerce, Etsy, eBay, or any CSV source. We map fields correctly and verify every listing before it goes live.",
        },
        {
          icon: "✏️",
          title: "SEO Product Descriptions",
          description: "Human-written, keyword-rich product titles and descriptions that rank on Google Shopping and convert visitors into customers.",
        },
        {
          icon: "🎨",
          title: "Image Organisation",
          description: "Product images renamed, compressed, alt-tagged, and ordered correctly. We also handle basic retouching and background removal if needed.",
        },
        {
          icon: "⚙️",
          title: "Variant & Option Setup",
          description: "Size, colour, material, and custom options configured correctly with accurate inventory levels, SKUs, and pricing per variant.",
        },
        {
          icon: "🗂️",
          title: "Collections & Navigation",
          description: "Product collections organised logically, smart collection conditions set up, and navigation menus updated to match your catalog structure.",
        },
        {
          icon: "📊",
          title: "Ongoing Maintenance",
          description: "Add new products, update pricing, adjust inventory, apply seasonal changes, and keep your catalog clean and accurate month after month.",
        },
      ]}
      process={[
        { step: 1, title: "Catalog Review", description: "We review your existing product data, images, and naming conventions." },
        { step: 2, title: "Data Prep", description: "Source files cleaned, mapped, and formatted for Shopify import." },
        { step: 3, title: "Upload & Configure", description: "Products, variants, and options uploaded and configured in Shopify." },
        { step: 4, title: "SEO & Content", description: "Titles and descriptions optimised for search and conversion." },
        { step: 5, title: "QA & Handover", description: "Every listing checked on desktop and mobile. You get full access and a handover document." },
      ]}
      pricingTitle="Shopify Listing Packages"
      pricing={[
        {
          name: "Starter Catalog",
          price: "£249",
          description: "Product setup for small stores and new launches.",
          features: [
            "Up to 50 products",
            "Variant & option setup",
            "Basic SEO titles",
            "Image alt tags",
            "Collection organisation",
            "QA on all listings",
          ],
          cta: "Get Started",
        },
        {
          name: "Full Catalog Build",
          price: "£499",
          description: "Complete catalog setup with full SEO and content.",
          features: [
            "Up to 250 products",
            "Full variant configuration",
            "SEO-optimised descriptions (all products)",
            "Image compression & alt tags",
            "Smart collections setup",
            "Nav menu update",
            "Google Shopping feed setup",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Ongoing Management",
          price: "£799",
          period: "mo",
          description: "Monthly catalog maintenance and updates.",
          features: [
            "Unlimited product updates",
            "New product additions",
            "Pricing & inventory updates",
            "Seasonal collection updates",
            "Product page performance review",
            "Monthly catalog audit",
          ],
          cta: "Start Managing",
        },
      ]}
      faq={[
        {
          question: "What formats can you import from?",
          answer: "Any CSV, Excel, or Google Sheets source — including exports from WooCommerce, Etsy, eBay, BigCommerce, Magento, and most ERPs/inventory systems.",
        },
        {
          question: "Can you migrate from another Shopify store?",
          answer: "Yes — we migrate between Shopify stores, including all products, collections, customer data, and order history if needed.",
        },
        {
          question: "Do you write the product descriptions or do we provide them?",
          answer: "On the Full Catalog Build plan we write all product descriptions. On the Starter plan we optimise your existing content. You can always provide copy if you prefer.",
        },
        {
          question: "How do you handle products with hundreds of variants?",
          answer: "We use Shopify's bulk import tools and custom scripts for complex variant configurations. Large variant sets are no problem.",
        },
      ]}
      ctaTitle="Get your Shopify catalog sorted properly"
      ctaSubtitle="Send us your product data and we'll come back with a plan and timeline within 24 hours."
      ctaLabel="Send Us Your Catalog →"
    />
  );
}
