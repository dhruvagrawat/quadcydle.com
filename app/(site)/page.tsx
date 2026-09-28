import { Compare } from "../../components/home/compare";
import { Cycle } from "../../components/home/cycle";
import { Hero } from "../../components/home/hero";
import { JournalTeaser } from "../../components/home/journal";
import { CapabilityMarquee, Manifesto } from "../../components/home/manifesto";
import { Pillars } from "../../components/home/pillars";
import { Work } from "../../components/home/work";

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
