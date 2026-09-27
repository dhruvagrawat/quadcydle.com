"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { pillars, site } from "../../lib/site";
import { LogoMark } from "../brand/logo";
import { RollText } from "../header";
import { useIntroDone } from "../motion/intro";
import { Magnetic } from "../motion/magnetic";
import { EASE, SplitReveal } from "../motion/reveal";

/** One orbiting pillar "planet". depth controls how much it reacts to the mouse. */
function Orb({
  label,
  color,
  angle,
  radius,
  size,
  depth,
  mx,
  my,
  spread,
  delay,
  play,
  counter,
}: {
  counter: MotionValue<number>;
  label: string;
  color: string;
  angle: number;
  radius: number;
  size: number;
  depth: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  spread: MotionValue<number>;
  delay: number;
  play: boolean;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = useTransform([mx, spread] as MotionValue<number>[], ([m, s]: number[]) =>
    Math.cos(rad) * radius * s + m * depth
  );
  const y = useTransform([my, spread] as MotionValue<number>[], ([m, s]: number[]) =>
    Math.sin(rad) * radius * s + m * depth
  );

  return (
    <motion.div className="absolute left-1/2 top-1/2" style={{ x, y }}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={play ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: EASE, delay }}
        className="relative"
        style={{ width: size, height: size, x: "-50%", y: "-50%" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${color}, ${color}55 45%, transparent 72%)`,
            filter: "blur(0.5px)",
          }}
        />
        <div className="absolute inset-0 rounded-full border border-bone/10" />
        <motion.span style={{ rotate: counter, x: "-50%" }} className="absolute left-1/2 top-full mt-3 whitespace-nowrap rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-[1.1rem] uppercase tracking-widest text-bone/70 backdrop-blur">
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

/** Four pillars orbiting the logo mark, with a spinning text ring. */
function Orbit({ progress, play }: { progress: MotionValue<number>; play: boolean }) {
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const spread = useTransform(progress, [0, 1], [1, 1.6]);
  const rotate = useTransform(progress, [0, 1], [0, 140]);
  const counter = useTransform(rotate, (r) => -r);
  const ringScale = useTransform(progress, [0, 1], [1, 1.5]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };

  const sizes = [120, 84, 100, 70];
  const depths = [40, -60, 30, -80];
  const angles = [-30, 60, 150, 240];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div className="relative h-[46rem] w-[46rem] md:h-[60rem] md:w-[60rem]" style={{ rotate }}>
        {/* Rotating text ring */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-[12%] animate-spin-slow text-bone/30"
          style={{ scale: ringScale }}
          initial={{ opacity: 0 }}
          animate={play ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <defs>
            <path id="ring" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
          </defs>
          <text className="fill-current font-mono text-[7px] uppercase tracking-[0.42em]">
            <textPath href="#ring">
              Build ✦ Host ✦ Run ✦ Grow ✦ Build ✦ Host ✦ Run ✦ Grow ✦
            </textPath>
          </text>
        </motion.svg>

        {/* Orbit rings */}
        {[0.95, 0.7, 0.45].map((s, i) => (
          <motion.div
            key={s}
            className="absolute rounded-full border border-dashed border-bone/[0.08]"
            style={{ inset: `${((1 - s) / 2) * 100}%` }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={play ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.6, ease: EASE, delay: 0.2 + i * 0.1 }}
          />
        ))}

        {/* Core */}
        <motion.div
          style={{ x: "-50%", y: "-50%" }}
          className="absolute left-1/2 top-1/2 flex h-40 w-40 items-center justify-center rounded-full bg-ink-100 shadow-[0_0_120px_rgba(255,90,31,0.25)]"
          initial={{ scale: 0 }}
          animate={play ? { scale: 1 } : {}}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <LogoMark className="h-14 w-auto text-ember" />
        </motion.div>

        {pillars.map((p, i) => (
          <Orb
            key={p.id}
            label={`${p.index} ${p.title}`}
            color={p.color}
            angle={angles[i]}
            radius={i % 2 ? 190 : 250}
            size={sizes[i]}
            depth={depths[i]}
            mx={mx}
            my={my}
            spread={spread}
            delay={0.5 + i * 0.12}
            play={play}
            counter={counter}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const play = useIntroDone();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const lineA = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const lineB = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const lineC = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[160svh] bg-ink-50">
      <motion.div
        style={{ scale, borderBottomLeftRadius: radius, borderBottomRightRadius: radius }}
        className="sticky top-0 flex h-[100svh] min-h-[64rem] flex-col overflow-hidden bg-ink"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-[20%] top-[10%] h-[70vh] w-[70vh] rounded-full bg-ember/20 blur-[14rem]" />
        <div className="pointer-events-none absolute -left-[10%] bottom-[-20%] h-[60vh] w-[60vh] rounded-full bg-periwinkle/10 blur-[14rem]" />

        {/* Orbit visual */}
        <div className="absolute inset-0 scale-75 opacity-25 md:left-[38%] md:scale-100 md:opacity-100">
          <Orbit progress={scrollYProgress} play={play} />
        </div>

        <motion.div
          style={{ opacity: fade }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-1 flex-col justify-end px-6 pb-12 pt-[calc(var(--navigation-height)+4rem)] md:px-10 md:pb-16"
        >
          <motion.p
            className="eyebrow mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={play ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          >
            <span className="h-px w-10 bg-ember" /> Digital studio — {site.tagline}
          </motion.p>

          <h1 className="text-display font-medium tracking-[-0.055em]" aria-label="Digital that never stops moving.">
            <motion.span style={{ x: lineA }} className="block">
              <SplitReveal as="span" className="block" text="Digital that" play={play} delay={0.15} />
            </motion.span>
            <motion.span style={{ x: lineB }} className="block pl-[8vw]">
              <SplitReveal as="span" className="block" text="*never* stops" play={play} delay={0.3} />
            </motion.span>
            <motion.span style={{ x: lineC }} className="block">
              <SplitReveal as="span" className="block" text="moving." play={play} delay={0.45} />
            </motion.span>
          </h1>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[1fr_auto] md:items-end">
            <motion.p
              className="max-w-[46rem] text-lg leading-relaxed text-bone/70 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={play ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE, delay: 0.8 }}
            >
              Quadcydle is the one team that <span className="text-bone">builds, hosts, runs and grows</span>{" "}
              your website, store and apps — so you never juggle four agencies again.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={play ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE, delay: 0.95 }}
            >
              <Magnetic>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ember px-8 py-5 text-md font-medium text-ink"
                >
                  <span className="absolute inset-0 translate-y-full rounded-full bg-bone transition-transform duration-500 ease-expo group-hover:translate-y-0" />
                  <span className="relative"><RollText>Start a project</RollText></span>
                  <span className="relative">↗</span>
                </Link>
              </Magnetic>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full border border-line px-8 py-5 text-md text-bone/80 transition-colors hover:border-bone/40 hover:text-bone"
              >
                <RollText>Explore services</RollText>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
          style={{ opacity: fade }}
        >
          <motion.div
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-bone/40"
            initial={{ opacity: 0 }}
            animate={play ? { opacity: 1 } : {}}
            transition={{ delay: 1.4 }}
          >
          Scroll
          <span className="relative block h-10 w-px overflow-hidden bg-bone/10">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-ember"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
