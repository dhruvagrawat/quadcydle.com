import type { Metadata } from "next";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pricing: Websites, Hosting & Care Plans | Quadcydle",
  description:
    "Transparent prices for every Quadcydle service — monthly plans, website builds, hosting, apps and support — shown in GBP, USD, INR and more.",
  path: "/pricing",
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
