"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { pillars } from "../../lib/site";
import { Reveal, SplitReveal } from "../motion/reveal";

const without = [
  { role: "A web designer", pain: "who disappears after launch" },
  { role: "A hosting company", pain: "with a ticket queue and no context" },
  { role: "An IT person", pain: "who doesn't touch the website" },
  { role: "A marketing freelancer", pain: "who can't change the code" },
];

/** "Four vendors vs. one team" — the old way gets struck through as you scroll. */
export function Compare() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.35"] });

  return (
    <section className="relative bg-ink px-6 pb-32 pt-16 md:px-10 md:pb-48 md:pt-20">
      <div className="mx-auto max-w-site">
        <p className="eyebrow mb-8">(05) — The difference</p>
        <SplitReveal
          as="h2"
          text={"Stop managing\n*four* agencies."}
          className="text-display-sm font-medium tracking-[-0.045em]"
        />

        <div ref={ref} className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2.4rem] border border-line p-8 md:p-12">
            <p className="eyebrow mb-8">The usual way</p>
            <ul>
              {without.map((w, i) => (
                <Strike key={w.role} i={i} progress={scrollYProgress} role={w.role} pain={w.pain} />
              ))}
            </ul>
            <p className="mt-8 text-sm text-bone/40">4 invoices · 4 logins · 4 people blaming each other</p>
          </div>

          <Reveal className="relative overflow-hidden rounded-[2.4rem] bg-ember p-8 text-ink md:p-12">
            <p className="eyebrow mb-8 !text-ink/60">The Quadcydle way</p>
            <p className="text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
              One team that owns the whole loop — and picks up the phone.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-3">
              {pillars.map((p) => (
                <li key={p.id} className="flex items-center gap-3 rounded-full bg-ink/10 px-4 py-3 text-md font-medium">
                  <span className="font-mono text-xs opacity-60">{p.index}</span>
                  {p.title}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ink/70">1 plan · 1 invoice · 1 person accountable</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Strike({
  i,
  progress,
  role,
  pain,
}: {
  i: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  role: string;
  pain: string;
}) {
  const scaleX = useTransform(progress, [i * 0.22, i * 0.22 + 0.25], [0, 1]);
  const opacity = useTransform(progress, [i * 0.22, i * 0.22 + 0.25], [1, 0.35]);
  return (
    <li className="border-b border-line py-5 last:border-0">
      <motion.div style={{ opacity }} className="relative inline-block">
        <p className="text-3xl font-medium tracking-[-0.02em] md:text-4xl">{role}</p>
        <p className="mt-1 text-md text-bone/50">{pain}</p>
        <motion.span
          aria-hidden
          className="absolute left-0 right-0 top-[1.6rem] h-[2px] origin-left bg-ember md:top-[2rem]"
          style={{ scaleX }}
        />
      </motion.div>
    </li>
  );
}
