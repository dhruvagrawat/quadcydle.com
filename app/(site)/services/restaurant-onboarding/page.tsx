import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { guidesFor } from "../../../../lib/blog/guides";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Zomato, Swiggy & ONDC Restaurant Onboarding | Quadcydle",
  description:
    "Get your restaurant listed and optimised on Zomato, Swiggy, ONDC, Deliveroo, Uber Eats, and more. Menu setup, photos, and ongoing management.",
  path: "/services/restaurant-onboarding",
});

export default function RestaurantOnboardingPage() {
  return (
    <ServicePage
      guides={guidesFor("/services/restaurant-onboarding")}
      tag="Platform Onboarding"
      accentColor="#ef4444"
      title="Get Your Restaurant on Every Major Platform"
      subtitle="We handle the complete onboarding for Zomato, Swiggy, ONDC, Deliveroo, Uber Eats, and more — menu photography brief, listing optimisation, and ongoing account management."
      stats={[
        { value: "6+", label: "platforms we onboard to" },
        { value: "48h", label: "go-live after document submission" },
        { value: "ONDC", label: "compliant setup included" },
        { value: "30%+", label: "avg order increase after optimisation" },
      ]}
      features={[
        {
          icon: "🌐",
          title: "Multi-Platform Setup",
          description: "Simultaneous onboarding to Zomato, Swiggy, ONDC, Deliveroo, Uber Eats, and JustEat — we manage all registrations and documentation.",
        },
        {
          icon: "📋",
          title: "Menu Upload & Optimisation",
          description: "Menu structured for each platform's requirements — categories, items, modifiers, combos, pricing, and availability all configured correctly.",
        },
        {
          icon: "🎨",
          title: "Menu Photography Brief",
          description: "We produce a shot list and brief for your photographer (or coordinate a shoot) so your dishes look as good on the platform as they do in person.",
        },
        {
          icon: "🔍",
          title: "Platform SEO & Discoverability",
          description: "Cuisine tags, keywords, restaurant description, and category selection optimised so you appear in the right searches on each platform.",
        },
        {
          icon: "⭐",
          title: "Ratings & Reviews Management",
          description: "Platform-compliant review response strategy, flagging fake reviews, and monitoring your rating trend across all active platforms.",
        },
        {
          icon: "📊",
          title: "Ongoing Account Management",
          description: "Weekly menu updates, promotional offers setup, commission tracking, payout reconciliation, and monthly performance reviews across all platforms.",
        },
      ]}
      process={[
        { step: 1, title: "Document Gathering", description: "We collect all required documents — FSSAI, GST, PAN, bank details, and business registration." },
        { step: 2, title: "Platform Registration", description: "Accounts created on each platform you want, with ownership assigned to you." },
        { step: 3, title: "Menu Build", description: "Full menu uploaded with photos, descriptions, and pricing on every platform." },
        { step: 4, title: "Go-Live", description: "Listings activated, delivery zones configured, and trial orders placed to verify everything works." },
        { step: 5, title: "Manage & Optimise", description: "Ongoing menu updates, offers, and performance reviews to maximise your platform rankings." },
      ]}
      pricingTitle="Platform Onboarding Packages"
      pricing={[
        {
          name: "Single Platform",
          price: "£199",
          description: "Get set up on one delivery platform, done properly.",
          features: [
            "1 platform of your choice",
            "Account registration",
            "Full menu upload",
            "Description & tag optimisation",
            "Delivery zone setup",
            "Go-live verification",
          ],
          cta: "Get Started",
        },
        {
          name: "Multi-Platform",
          price: "£349",
          description: "Onboarding to 3 platforms simultaneously.",
          features: [
            "Up to 3 platforms",
            "All registrations handled",
            "Menu uploaded to each platform",
            "Platform-specific optimisation",
            "Photo brief per platform",
            "Reviews setup & monitoring",
            "ONDC registration included",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Best Value",
        },
        {
          name: "Full Service",
          price: "£599",
          description: "All major platforms + ongoing monthly management.",
          features: [
            "All available platforms",
            "Complete account setup",
            "Professional menu content",
            "Monthly menu updates",
            "Promotional offers management",
            "Rating & review monitoring",
            "Monthly performance report",
            "Payout reconciliation",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "Which platforms do you support?",
          answer: "Zomato, Swiggy, ONDC, Deliveroo, Uber Eats, JustEat, Magicpin, and DotPe. We can also set up WhatsApp ordering and Google Food ordering.",
        },
        {
          question: "What documents are needed?",
          answer: "Typically: FSSAI licence, GST certificate, PAN card, bank account details, and business address proof. Requirements vary by platform — we'll give you a full checklist.",
        },
        {
          question: "What is ONDC and why does it matter?",
          answer: "ONDC (Open Network for Digital Commerce) is India's government-backed open e-commerce protocol. Being listed on ONDC means you can receive orders from any app built on the network, dramatically expanding your reach.",
        },
        {
          question: "How long does onboarding take?",
          answer: "Most platforms go live within 5–7 business days from document submission. Zomato and Swiggy can be faster (2–3 days). ONDC takes 7–10 days.",
        },
        {
          question: "Can you manage the accounts after we go live?",
          answer: "Yes — our Full Service package includes ongoing monthly management of all your platform accounts, including menu updates, offers, and review responses.",
        },
      ]}
      ctaTitle="Get on every platform. Start getting more orders."
      ctaSubtitle="Tell us which platforms and we'll handle everything from registration to go-live."
      ctaLabel="Start Platform Onboarding →"
    />
  );
}
