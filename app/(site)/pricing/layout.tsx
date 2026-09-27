import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Quadcydle",
  description: "Transparent pricing for every Quadcydle service, in your currency.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
