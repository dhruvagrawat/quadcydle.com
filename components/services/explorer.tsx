"use client";

import classNames from "classnames";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { pillars, type Pillar } from "../../lib/site";
import { PillarArt } from "../brand/pillar-art";
import { ServiceIcon } from "../brand/service-icon";
import { Reveal } from "../motion/reveal";

type Hovered = { title: string; desc: string; pillar: Pillar } | null;

/** The services index: filter by pillar, hover a row for a floating preview. */
export function ServicesExplorer() {
  const [filter, setFilter] = useState<Pillar["id"] | "all">("all");
  const [hovered, setHovered] = useState<Hovered>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 30 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 30 });

  const visible = filter === "all" ? pillars : pillars.filter((p) => p.id === filter);

  return (
    <div
      className="relative px-6 pb-32 md:px-10"
      onPointerMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      {/* Filter */}
      <div className="sticky top-24 z-30 mx-auto mb-16 flex max-w-site justify-center">
        <div className="flex gap-1 overflow-x-auto rounded-full border border-line bg-ink/80 p-1.5 backdrop-blur-xl">
          {[{ id: "all" as const, title: "All", color: "#EDEAE3" }, ...pillars].map((p) => (
            <button
              key={p.id}
              onClick={() => setFilter(p.id)}
              className={classNames(
                "relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-colors",
                filter === p.id ? "text-ink" : "text-bone/60 hover:text-bone"
              )}
            >
              {filter === p.id && (
                <motion.span
                  layoutId="filter"
                  className="absolute inset-0 rounded-full"
                  style={{ background: p.color }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-site space-y-32">
        <AnimatePresence mode="popLayout">
          {visible.map((pillar) => (
            <motion.section
              key={pillar.id}
              id={pillar.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="scroll-mt-32"
            >
              <Reveal className="mb-10 grid gap-6 border-b border-line pb-10 md:grid-cols-[auto_1fr_1.4fr] md:items-end md:gap-10">
                <PillarArt id={pillar.id} color={pillar.color} className="hidden h-40 w-auto md:block" />
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm" style={{ color: pillar.color }}>
                    {pillar.index}
                  </span>
                  <h2 className="text-8xl font-medium tracking-[-0.055em]">{pillar.title}</h2>
                </div>
                <div>
                  <p className="text-2xl leading-snug text-bone/85">{pillar.headline}</p>
                  <p className="mt-3 text-md leading-relaxed text-bone/50">{pillar.summary}</p>
                </div>
              </Reveal>

              <ul>
                {pillar.services.map((s, i) => (
                  <Reveal as="li" key={s.href} delay={i * 0.04}>
                    <Link
                      href={s.href}
                      onPointerEnter={() => setHovered({ ...s, pillar })}
                      onPointerLeave={() => setHovered(null)}
                      className="group relative flex items-center justify-between gap-6 overflow-hidden border-b border-line py-6 md:py-8"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-expo group-hover:scale-y-100"
                        style={{ background: pillar.color }}
                      />
                      <span className="relative flex items-center gap-6 transition-[transform,color] duration-700 ease-expo group-hover:translate-x-6 group-hover:text-ink">
                        <span className="hidden h-14 w-14 shrink-0 translate-y-[-0.4rem] items-center justify-center self-center rounded-full border border-bone/20 opacity-80 group-hover:border-ink/30 md:flex">
                          <ServiceIcon name={s.icon} size={22} />
                        </span>
                        <span className="text-4xl font-medium tracking-[-0.03em] md:text-6xl">{s.title}</span>
                      </span>
                      <span className="relative flex items-center gap-6 text-bone/50 transition-colors duration-700 group-hover:text-ink">
                        <span className="hidden text-md lg:block">{s.desc}</span>
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-current text-lg transition-transform duration-700 ease-expo group-hover:-rotate-45 md:h-16 md:w-16">
                          →
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating preview that trails the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
        style={{ x, y }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.title}
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative ml-10 mt-6 flex h-56 w-80 flex-col justify-between overflow-hidden rounded-[1.6rem] bg-ink-100 p-6 shadow-2xl"
            >
              <div
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-60 blur-3xl"
                style={{ background: hovered.pillar.color }}
              />
              <span className="relative font-mono text-xs uppercase tracking-widest text-bone/50">
                {hovered.pillar.index} {hovered.pillar.title}
              </span>
              <span className="relative font-serif text-4xl italic leading-none text-bone">{hovered.desc}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
