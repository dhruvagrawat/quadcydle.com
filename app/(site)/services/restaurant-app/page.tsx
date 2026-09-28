import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Restaurant Ordering App Development | Quadcydle",
  description:
    "Custom restaurant app with online ordering, digital menu, table reservations, loyalty programs, and kitchen management — built for iOS & Android.",
  path: "/services/restaurant-app",
});

export default function RestaurantAppPage() {
  return (
    <ServicePage
      tag="Restaurant Technology"
      accentColor="#f97316"
      title="Your Restaurant's Own App — Not Someone Else's Platform"
      subtitle="Stop paying commission to aggregators. We build your own branded iOS and Android app with online ordering, digital menu, table reservations, and loyalty rewards."
      heroImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
      stats={[
        { value: "0%", label: "commission — your orders, your revenue" },
        { value: "iOS + Android", label: "from one React Native codebase" },
        { value: "8–12 wk", label: "build and launch timeline" },
        { value: "Real-time", label: "kitchen & order management" },
      ]}
      features={[
        {
          icon: "🛒",
          title: "Online Ordering System",
          description: "Customers order directly through your app for delivery, collection, or dine-in. Orders go straight to your kitchen — no intermediary, no commission.",
        },
        {
          icon: "📋",
          title: "Digital Menu Management",
          description: "Update your menu in real time — add items, change prices, mark things as sold out. Category management, modifiers, and combos all supported.",
        },
        {
          icon: "📅",
          title: "Table Reservation System",
          description: "Guests book tables directly in the app. You manage capacity, time slots, party size, and special requests from a simple dashboard.",
        },
        {
          icon: "💳",
          title: "Integrated Payments",
          description: "Stripe, Apple Pay, Google Pay, card-on-delivery, and pay-at-table — every payment method your customers expect, handled securely.",
        },
        {
          icon: "⭐",
          title: "Loyalty & Rewards",
          description: "Points-based loyalty system, stamp cards, referral rewards, and push notification campaigns to bring customers back more often.",
        },
        {
          icon: "📊",
          title: "Kitchen Display & Analytics",
          description: "Kitchen Display System (KDS) for order management, plus a dashboard tracking revenue, popular dishes, peak hours, and customer retention.",
        },
      ]}
      process={[
        { step: 1, title: "Discovery", description: "Menu structure, ordering flow, reservation logic, and branding aligned before design starts." },
        { step: 2, title: "Design", description: "Full Figma design for every screen — customer-facing app and restaurant dashboard." },
        { step: 3, title: "Build", description: "React Native app + web dashboard built in sprints with regular preview builds." },
        { step: 4, title: "Integrate", description: "Payment gateway, POS system, and printer integration tested thoroughly." },
        { step: 5, title: "Launch", description: "App Store and Google Play submission, staff training, and 3 months of post-launch support." },
      ]}
      pricingTitle="Restaurant App Packages"
      pricing={[
        {
          name: "Ordering App",
          price: "From £4,999",
          description: "A branded ordering app for delivery and collection.",
          features: [
            "iOS + Android app",
            "Digital menu management",
            "Online ordering (delivery & collection)",
            "Stripe payment integration",
            "Basic loyalty (stamp card)",
            "Order management dashboard",
            "App Store submission",
          ],
          cta: "Get a Quote",
        },
        {
          name: "Full Restaurant System",
          price: "From £9,999",
          description: "Complete digital restaurant platform.",
          features: [
            "Everything in Ordering App",
            "Table reservation system",
            "Kitchen Display System",
            "Points-based loyalty & rewards",
            "Push notification campaigns",
            "Analytics & revenue dashboard",
            "POS integration",
            "Staff management portal",
          ],
          cta: "Get a Quote",
          highlighted: true,
          badge: "Complete Solution",
        },
        {
          name: "Enterprise / Chain",
          price: "Custom",
          description: "Multi-location systems for restaurant groups and franchises.",
          features: [
            "Multi-location support",
            "Centralised menu control",
            "Per-location reporting",
            "Franchise management portal",
            "Custom loyalty programmes",
            "Third-party delivery integration",
            "Dedicated support team",
          ],
          cta: "Contact Us",
        },
      ]}
      faq={[
        {
          question: "Do customers need to download an app?",
          answer: "The native app is recommended for the best experience and loyalty features, but we also build a mobile web ordering flow so customers can order without installing anything.",
        },
        {
          question: "Can it integrate with our existing POS system?",
          answer: "We integrate with Lightspeed, Square, Toast, Clover, and most modern POS systems via API. Legacy systems may require a middleware solution.",
        },
        {
          question: "Can we update the menu ourselves?",
          answer: "Yes — the restaurant admin dashboard lets you update items, prices, availability, and photos in real time without needing any technical knowledge.",
        },
        {
          question: "Do you support multiple locations?",
          answer: "Yes — the Enterprise package supports multi-location chains with centralised menu control and per-location reporting and settings.",
        },
        {
          question: "How is this different from just being on Deliveroo or Uber Eats?",
          answer: "Those platforms take 15–35% commission on every order. Your own app charges nothing per order. For an average restaurant doing £30k/month in delivery, that's £5,000–£10,000 saved every month.",
        },
      ]}
      ctaTitle="Own your digital ordering — stop paying commission"
      ctaSubtitle="Tell us about your restaurant and we'll design the right solution — with a quote within 48 hours."
      ctaLabel="Get a Restaurant App Quote →"
    />
  );
}
