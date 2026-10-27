import { ogCard } from "../../../lib/og/card";

export const dynamic = "force-static";

/** Default social share image for every page without its own: /og */
export function GET() {
  return ogCard({
    eyebrow: "Build · Host · Run · Grow",
    title: "Websites, stores & apps — built, hosted and looked after by one team.",
  });
}
