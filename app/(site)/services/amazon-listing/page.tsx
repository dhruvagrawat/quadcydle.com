import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Amazon Listing Optimisation & Management | Quadcydle",
  description:
    "Amazon seller setup, product listing optimisation, A+ content, PPC ads management, and ongoing account management. Rank higher, sell more.",
  path: "/services/amazon-listing",
});

export default function AmazonListingPage() {
  return (
    <ServicePage
      tag="Amazon Listing"
      accentColor="#FF9900"
      title="Amazon Listings That Actually Rank and Convert"
      subtitle="Seller account setup, keyword-rich listings, A+ content, and PPC campaign management — everything you need to compete on Amazon and win."
      heroImage="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1400&q=80"
      stats={[
        { value: "3×", label: "avg organic rank improvement" },
        { value: "A10", label: "Amazon algorithm optimised" },
        { value: "A+", label: "enhanced content included" },
        { value: "ROAS", label: "tracked on every ad campaign" },
      ]}
      features={[
        {
          icon: "🔍",
          title: "Keyword Research & Strategy",
          description: "Deep Amazon-native keyword research using Helium 10 and Jungle Scout. We find high-volume, low-competition keywords your competitors are missing.",
        },
        {
          icon: "📋",
          title: "Listing Optimisation",
          description: "SEO-optimised titles, bullet points, product descriptions, and backend search terms — all written to rank in A10 and convert real buyers.",
        },
        {
          icon: "🎨",
          title: "A+ Content & Brand Story",
          description: "Enhanced Brand Content (EBC) and Brand Story modules that make your product page look credible and convert browsers into buyers.",
        },
        {
          icon: "📦",
          title: "FBA Setup & Guidance",
          description: "Fulfilment by Amazon setup — FNSKU labels, shipment plans, inventory management, and IPI score optimisation.",
        },
        {
          icon: "📊",
          title: "PPC Campaign Management",
          description: "Sponsored Products, Sponsored Brands, and Sponsored Display campaigns built, monitored, and optimised for the best ROAS.",
        },
        {
          icon: "⭐",
          title: "Reviews & Reputation",
          description: "Amazon-compliant review generation strategy, Request a Review automation, and monitoring for negative feedback with compliant responses.",
        },
      ]}
      process={[
        { step: 1, title: "Account Audit", description: "Full review of your existing account health, listings, and ad performance." },
        { step: 2, title: "Keyword Research", description: "Comprehensive keyword map for each ASIN using Helium 10 and competitor analysis." },
        { step: 3, title: "Listing Build", description: "Title, bullets, description, search terms, and A+ content written and uploaded." },
        { step: 4, title: "Ads Launch", description: "PPC campaigns built with tight structure, match types, and negative keyword lists." },
        { step: 5, title: "Optimise & Scale", description: "Weekly bid adjustments, search term harvesting, and monthly performance reviews." },
      ]}
      pricingTitle="Amazon Listing Packages"
      pricing={[
        {
          name: "Listing Audit",
          price: "£299",
          description: "Find out what's holding your current listings back.",
          features: [
            "Up to 10 ASINs reviewed",
            "Keyword gap analysis",
            "Competitor benchmarking",
            "Prioritised action report",
            "60-min debrief call",
          ],
          cta: "Order an Audit",
        },
        {
          name: "Full Listing Setup",
          price: "£599",
          description: "Complete listing build for up to 10 products.",
          features: [
            "Keyword research (per ASIN)",
            "Optimised title & bullets",
            "Product description copy",
            "Backend search terms",
            "A+ Content design & upload",
            "1 image brief per ASIN",
            "FBA shipment setup",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Ongoing Management",
          price: "£999",
          period: "mo",
          description: "Monthly active management of your Amazon presence.",
          features: [
            "Unlimited listings managed",
            "PPC campaign management",
            "Weekly bid optimisation",
            "Monthly keyword refresh",
            "A+ Content updates",
            "Review monitoring & responses",
            "Monthly performance report",
          ],
          cta: "Start Managing",
        },
      ]}
      faq={[
        {
          question: "Do I need a brand registered on Amazon?",
          answer: "Brand Registry is required for A+ Content and Sponsored Brands ads. We can guide you through the Brand Registry process — it typically takes 2–4 weeks.",
        },
        {
          question: "Can you manage an existing account or only set up new ones?",
          answer: "Both. We handle new seller account setups as well as taking over and improving existing accounts that aren't performing as expected.",
        },
        {
          question: "What markets do you optimise for?",
          answer: "UK (Amazon.co.uk), US (Amazon.com), EU, and India (Amazon.in). We can optimise listings for multiple marketplaces simultaneously.",
        },
        {
          question: "How long before I see results?",
          answer: "Organic ranking improvements typically show within 4–8 weeks of listing optimisation. PPC results are visible within 2–4 weeks of campaign launch.",
        },
      ]}
      ctaTitle="Ready to dominate your Amazon category?"
      ctaSubtitle="Share your ASINs and current situation. We'll come back with an audit and growth plan within 48 hours."
      ctaLabel="Get an Amazon Audit →"
    />
  );
}
