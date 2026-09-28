"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { caseStudies, type CaseStudy } from "../../lib/site";
import { RollText } from "../header";
import { Counter } from "../motion/counter";
import { SplitReveal } from "../motion/reveal";
import { useDesktopMotion } from "../motion/use-media";

/** Generative cover art — no stock photos, just the project's colour in motion. */
function Artwork({ color, seed }: { color: string; seed: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink-100">
      {[0, 1, 2].map((k) => (
        <motion.div
          key={k}
          className="absolute rounded-full"
          style={{
            width: `${60 - k * 15}%`,
            height: `${60 - k * 15}%`,
            left: `${10 + ((seed * 17 + k * 23) % 50)}%`,
            top: `${5 + ((seed * 29 + k * 31) % 50)}%`,
            background: k === 1 ? "#EDEAE3" : color,
            opacity: k === 1 ? 0.08 : 0.55 - k * 0.12,
            filter: `blur(${30 + k * 10}px)`,
          }}
          animate={{ x: [0, 40 - k * 25, 0], y: [0, -30 + k * 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10 + k * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,234,227,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(237,234,227,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />
    </div>
  );
}

function Card({
  study,
  i,
  total,
  progress,
  desktop,
}: {
  desktop: boolean;
  study: CaseStudy;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.04]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / total)], [0, i === total - 1 ? 0 : 0.5]);

  return (
    <div
      className="mb-4 flex items-start justify-center md:sticky md:mb-0 md:h-[100svh]"
      style={desktop ? { top: `calc(12vh + ${i * 2.4}rem)` } : undefined}
    >
      <motion.article
        style={desktop ? { scale } : undefined}
        className="relative grid w-full md:h-[76svh] origin-top overflow-hidden rounded-[2.4rem] border border-line bg-ink-50 md:grid-cols-[1fr_1.15fr]"
        data-cursor="Read"
      >
        <div className="relative z-10 flex flex-col justify-between gap-10 p-8 md:p-12">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs text-bone/40">
                0{i + 1} / 0{total}
              </span>
              <span className="rounded-full border border-line px-3 py-1 text-xs text-bone/70">{study.tag}</span>
            </div>
            <h3 className="text-5xl font-medium tracking-[-0.04em] md:text-6xl">{study.client}</h3>
            <p className="mt-2 text-sm text-bone/50">{study.industry}</p>
            <p className="mt-8 hidden max-w-[48rem] text-md leading-relaxed text-bone/70 md:block">{study.solution}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-line pt-8">
            {study.results.map((r) => (
              <div key={r.label}>
                <Counter value={r.metric} className="block text-3xl font-medium tracking-[-0.03em] md:text-5xl" />
                <p className="mt-2 text-xs leading-snug text-bone/50">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden md:block">
          <Artwork color={study.color} seed={i + 1} />
          <span className="absolute bottom-8 right-8 font-serif text-8xl italic text-bone/90">
            {study.client.split(" ")[0]}
          </span>
        </div>
        {desktop && <motion.div className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: dim }} />}
      </motion.article>
    </div>
  );
}

const featured = caseStudies.slice(0, 4);

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useDesktopMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="relative bg-ink px-6 pt-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-8">(04) — Selected work</p>
            <SplitReveal
              as="h2"
              text={"Results you can\n*put on a slide.*"}
              className="text-display-sm font-medium tracking-[-0.045em]"
            />
          </div>
          <Link href="/casestudies" className="group inline-flex items-center gap-3 text-lg text-bone/70 hover:text-bone">
            <RollText>All case studies</RollText> <span aria-hidden>→</span>
          </Link>
        </div>

        <div ref={ref} className="relative mt-12 md:mt-8">
          {featured.map((s, i) => (
            <Card key={s.client} study={s} i={i} total={featured.length} progress={scrollYProgress} desktop={desktop} />
          ))}
        </div>
      </div>
    </section>
  );
}
