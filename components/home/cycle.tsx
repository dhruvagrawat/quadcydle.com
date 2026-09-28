"use client";

import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { process } from "../../lib/site";
import { EASE } from "../motion/reveal";

const COLORS = ["#FF5A1F", "#7C9CFF", "#C9F24B", "#F4C8FF"];

/** Describes one quarter of a ring as an SVG arc, with a small gap either side. */
function arc(i: number, r = 90) {
  const gap = 4;
  const start = ((i * 90 + gap - 90) * Math.PI) / 180;
  const end = (((i + 1) * 90 - gap - 90) * Math.PI) / 180;
  const p = (a: number) => `${100 + r * Math.cos(a)} ${100 + r * Math.sin(a)}`;
  return `M ${p(start)} A ${r} ${r} 0 0 1 ${p(end)}`;
}

function Segment({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const n = process.length;
  const pathLength = useTransform(progress, [i / n, (i + 1) / n], [0, 1]);
  // Round caps draw a dot even at zero length, so hide the arc until it starts.
  const opacity = useTransform(pathLength, [0, 0.02], [0, 1]);
  return (
    <motion.path
      d={arc(i)}
      fill="none"
      stroke={COLORS[i]}
      strokeWidth="14"
      strokeLinecap="round"
      style={{ pathLength, opacity }}
    />
  );
}

/** The engagement process as a ring that completes itself as you scroll. */
export function Cycle() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const spin = useTransform(scrollYProgress, [0, 1], [0, 90]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(process.length - 1, Math.floor(v * process.length)));
  });

  return (
    <section ref={ref} className="relative bg-bone text-ink" style={{ height: `${process.length * 80 + 40}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-site gap-10 px-6 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="eyebrow mb-8 !text-ink/50">(03) — How we work</p>
            <h2 className="text-display-sm font-medium tracking-[-0.045em]">
              The <span className="font-serif font-normal italic">quad</span> cycle.
            </h2>

            <div className="relative mt-12 min-h-[22rem] md:mt-16">
              {process.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: active === i ? 0 : active > i ? -30 : 30,
                    filter: active === i ? "blur(0px)" : "blur(6px)",
                  }}
                  transition={{ duration: 0.7, ease: EASE }}
                  aria-hidden={active !== i}
                >
                  <p className="font-mono text-sm text-ink/50">Step 0{i + 1}</p>
                  <h3 className="mt-3 text-6xl font-medium tracking-[-0.04em] md:text-7xl">{step.title}</h3>
                  <p className="mt-5 max-w-[48rem] text-lg leading-relaxed text-ink/70 md:text-xl">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[56rem]">
            <motion.svg viewBox="0 0 200 200" className="h-full w-full" style={{ rotate: spin }}>
              {process.map((_, i) => (
                <g key={i}>
                  <path d={arc(i)} fill="none" stroke="rgba(10,10,11,0.1)" strokeWidth="14" strokeLinecap="round" />
                  <Segment i={i} progress={scrollYProgress} />
                </g>
              ))}
            </motion.svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="h-[1em] overflow-hidden text-9xl font-medium leading-none tracking-[-0.06em]">
                <motion.div animate={{ y: `${(-active * 100) / process.length}%` }} transition={{ duration: 0.8, ease: EASE }}>
                  {process.map((_, i) => (
                    <div key={i} className="h-[1em]">
                      0{i + 1}
                    </div>
                  ))}
                </motion.div>
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/50">of 0{process.length}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
