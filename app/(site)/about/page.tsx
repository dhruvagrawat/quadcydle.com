import { Metadata } from "next";
import { Compare } from "../../../components/home/compare";
import { Cycle } from "../../../components/home/cycle";
import { Reveal, SplitReveal } from "../../../components/motion/reveal";
import { ScrollText } from "../../../components/motion/scroll-text";
import { PageHero } from "../../../components/page-hero";
import { pillars } from "../../../lib/site";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Quadcydle | One Team to Build, Host, Run & Grow",
  description:
    "Quadcydle is a digital studio that builds, hosts, runs and grows websites, stores and apps — one accountable team instead of four separate vendors.",
  path: "/about",
});

const values = [
  {
    title: "Results first",
    body: "Every design decision and line of code answers one question: does this move the needle for your business?",
  },
  {
    title: "Radical transparency",
    body: "No jargon, no smoke and mirrors. You always know what we're working on, why, and what it costs.",
  },
  {
    title: "Long-term thinking",
    body: "We build for sustainable growth, not vanity metrics. Our client relationships last years, not projects.",
  },
  {
    title: "Craft, everywhere",
    body: "From pixel-perfect interfaces to clean, fast code and tidy DNS records — the craft shows in the details.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Quadcydle"
        title={"One team for the\n*whole* cycle."}
        intro="Quad — four. Cycle — on repeat. We named the studio after the loop every online business lives in: build it, host it, run it, grow it, and start again."
      />

      <section className="px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-site gap-12 md:grid-cols-[1fr_3fr]">
          <p className="eyebrow">Our mission</p>
          <ScrollText
            text="Every business — whatever its size — deserves a digital presence that feels expensive, works flawlessly and keeps getting better. We give you senior-level attention, honest advice and work you're proud to show off."
            className="text-4xl font-medium leading-[1.12] tracking-[-0.03em] md:text-6xl"
          />
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-40">
        <div className="mx-auto max-w-site">
          <SplitReveal
            as="h2"
            text={"Four pillars,\n*one* name."}
            className="text-display-sm font-medium tracking-[-0.045em]"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2.4rem] border border-line bg-line md:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08} className="flex min-h-[36rem] flex-col justify-between bg-ink p-8 md:p-10">
                <span className="font-mono text-sm" style={{ color: p.color }}>
                  {p.index}
                </span>
                <div>
                  <h3 className="text-6xl font-medium tracking-[-0.05em]">{p.title}</h3>
                  <p className="mt-4 text-md leading-relaxed text-bone/55">{p.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cycle />

      <section className="px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-site">
          <p className="eyebrow mb-8">What we believe</p>
          <ul className="border-t border-line">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.05} className="grid gap-4 border-b border-line py-10 md:grid-cols-[auto_1fr_1.2fr] md:items-baseline md:gap-16">
                <span className="font-mono text-sm text-bone/55">0{i + 1}</span>
                <h3 className="text-5xl font-medium tracking-[-0.04em] md:text-6xl">{v.title}</h3>
                <p className="text-lg leading-relaxed text-bone/60">{v.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Compare />
    </>
  );
}
