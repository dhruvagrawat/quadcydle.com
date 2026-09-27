"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { pillars, type Pillar } from "../../lib/site";
import { SplitReveal } from "../motion/reveal";

function PillarPanel({ pillar, progress, i }: { pillar: Pillar; progress: MotionValue<number>; i: number }) {
  // The glow drifts against the scroll for a touch of depth.
  const glowX = useTransform(progress, [0, 1], [`${30 - i * 15}%`, `${-30 - i * 15}%`]);

  return (
    <article
      id={pillar.id}
      className="relative grid w-full shrink-0 gap-10 overflow-hidden rounded-[2.4rem] border border-line bg-ink-50 p-8 md:h-[78svh] md:w-[min(124rem,84vw)] md:grid-cols-[1.1fr_1fr] md:gap-16 md:p-14"
    >
      <motion.div
        aria-hidden
        style={{ x: glowX, background: pillar.color }}
        className="pointer-events-none absolute -bottom-60 -left-20 h-[46rem] w-[46rem] rounded-full opacity-20 blur-[12rem]"
      />

      <div className="relative flex flex-col justify-between gap-10">
        <div>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: pillar.color }} />
            {pillar.index} / 04
          </p>
          <h3 className="text-display font-medium tracking-[-0.06em]">{pillar.title}</h3>
        </div>
        <div>
          <p className="max-w-[48rem] text-3xl font-medium leading-tight tracking-[-0.02em] md:text-4xl">
            {pillar.headline}
          </p>
          <p className="mt-5 max-w-[44rem] text-md leading-relaxed text-bone/60">{pillar.summary}</p>
          <Link
            href={`/services#${pillar.id}`}
            className="group mt-8 inline-flex items-center gap-3 text-md"
            style={{ color: pillar.color }}
          >
            <span className="link-underline">Explore {pillar.title.toLowerCase()} services</span>
            <span aria-hidden className="transition-transform duration-500 ease-expo group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      <ul className="relative flex flex-col justify-end border-line md:border-l md:pl-12">
        {pillar.services.map((s, n) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="group relative flex items-center justify-between gap-6 border-b border-line py-3.5 md:py-4"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-expo group-hover:scale-y-100"
                style={{ background: pillar.color }}
              />
              <span className="relative flex items-baseline gap-4 transition-[color,transform] duration-500 ease-expo group-hover:translate-x-3 group-hover:text-ink">
                <span className="font-mono text-xs opacity-50">{String(n + 1).padStart(2, "0")}</span>
                <span className="text-lg md:text-xl">{s.title}</span>
              </span>
              <span className="relative hidden text-sm text-bone/40 transition-colors duration-500 group-hover:text-ink/70 xl:block">
                {s.desc}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

/**
 * The four pillars on a horizontal track. On desktop the section pins and
 * vertical scroll drives the track sideways; on small screens it stacks.
 */
export function Pillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [horizontal, setHorizontal] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const measure = () => {
      setHorizontal(mq.matches);
      if (trackRef.current) setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.0005 });
  const x = useTransform(smooth, (v) => (horizontal ? -v * distance : 0));
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="pillars-title"
      className="relative bg-ink"
      style={horizontal ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={horizontal ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "py-24"}>
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex flex-col gap-6 px-6 md:w-max md:flex-row md:items-center md:gap-8 md:px-10"
        >
          <div className="flex shrink-0 flex-col justify-center pb-8 md:w-[42vw] md:pb-0 md:pr-16">
            <p className="eyebrow mb-8">(02) — What we do</p>
            <SplitReveal
              as="h2"
              text={"Four pillars.\nOne *cycle.*"}
              className="text-display-sm font-medium tracking-[-0.045em]"
            />
            <p id="pillars-title" className="mt-8 max-w-[42rem] text-lg leading-relaxed text-bone/60">
              Every service we offer sits in one of four pillars. Pick one, or let us run the whole loop —
              each pillar feeds the next.
            </p>
          </div>
          {pillars.map((p, i) => (
            <PillarPanel key={p.id} pillar={p} progress={scrollYProgress} i={i} />
          ))}
          <div className="hidden w-[10vw] shrink-0 md:block" />
        </motion.div>

        {horizontal && (
          <div className="absolute inset-x-10 bottom-10 flex items-center gap-6">
            <span className="font-mono text-xs text-bone/40">01</span>
            <div className="relative h-px flex-1 bg-line">
              <motion.div className="absolute inset-0 origin-left bg-ember" style={{ scaleX: bar }} />
            </div>
            <span className="font-mono text-xs text-bone/40">04</span>
          </div>
        )}
      </div>
    </section>
  );
}
