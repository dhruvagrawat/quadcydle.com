import { pageMeta } from "../../lib/seo";
import { Compare } from "../../components/home/compare";
import { Cycle } from "../../components/home/cycle";
import { Hero } from "../../components/home/hero";
import { JournalTeaser } from "../../components/home/journal";
import { CapabilityMarquee, Manifesto } from "../../components/home/manifesto";
import { Pillars } from "../../components/home/pillars";
import { Work } from "../../components/home/work";

export const metadata = pageMeta({
  title: "Quadcydle | Web Design, Development, Hosting & Support",
  description:
    "Quadcydle builds, hosts, runs and grows websites, online stores and apps — web design, Shopify and WordPress, managed hosting and care plans.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityMarquee />
      <Manifesto />
      <Pillars />
      <Cycle />
      <Work />
      <Compare />
      <JournalTeaser />
    </>
  );
}
