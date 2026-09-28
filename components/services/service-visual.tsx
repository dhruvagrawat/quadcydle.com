"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Pillar, Service } from "../../lib/site";
import { PillarArt } from "../brand/pillar-art";
import { ServiceIcon } from "../brand/service-icon";

/**
 * Branded hero visual for a service page: the service icon at the centre,
 * a few of its features floating around it, and the pillar illustration.
 * Replaces generic stock photography.
 */
export function ServiceVisual({
  service,
  pillar,
  accent,
  features,
  renderIcon,
}: {
  service?: Service;
  pillar?: Pillar;
  accent: string;
  features: { title: string; icon: string }[];
  renderIcon: (emoji: string) => React.ReactNode;
}) {
  const still = useReducedMotion();
  const float = (i: number) =>
    still ? {} : { y: [0, i % 2 ? 10 : -10, 0], transition: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" as const } };
  const spots = [
    "left-[6%] top-[14%]",
    "left-[10%] bottom-[14%]",
    "right-[40%] top-[8%] hidden md:flex",
    "right-[38%] bottom-[10%] hidden md:flex",
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-50">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,234,227,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(237,234,227,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 40% 50%, black, transparent 70%)",
        }}
      />
      <div className="absolute left-[30%] top-1/2 h-[80%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[6rem]" style={{ background: accent }} />

      {/* Centre: service icon with orbit rings */}
      <div className="absolute left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[32%]">
        <div className="relative flex h-40 w-40 items-center justify-center md:h-56 md:w-56">
          {[1, 1.45, 1.9].map((s, i) => (
            <motion.span
              key={s}
              className="absolute inset-0 rounded-full border border-dashed border-bone/15"
              style={{ scale: s }}
              animate={still ? {} : { rotate: i % 2 ? -360 : 360 }}
              transition={{ duration: 40 + i * 20, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <span className="relative flex h-24 w-24 items-center justify-center rounded-[2.4rem] text-ink shadow-2xl md:h-32 md:w-32" style={{ background: accent }}>
            {service ? <ServiceIcon name={service.icon} size={48} /> : null}
          </span>
        </div>
      </div>

      {/* Feature chips */}
      {features.slice(0, 4).map((f, i) => (
        <motion.div
          key={f.title}
          animate={float(i)}
          className={`absolute ${spots[i]} flex max-w-[26rem] items-center gap-3 rounded-full border border-line bg-ink/80 py-2 pl-2 pr-5 text-sm text-bone/85 backdrop-blur`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: `${accent}26`, color: accent }}>
            {renderIcon(f.icon)}
          </span>
          <span className="truncate">{f.title}</span>
        </motion.div>
      ))}

      {/* Pillar illustration */}
      {pillar && (
        <div className="absolute bottom-0 right-0 top-0 hidden w-[36%] items-center justify-center md:flex">
          <PillarArt id={pillar.id} color={accent} className="w-full max-w-[46rem]" />
        </div>
      )}
      {pillar && (
        <span className="absolute bottom-6 right-8 font-mono text-xs uppercase tracking-widest text-bone/55">
          {pillar.index} · {pillar.title}
        </span>
      )}
    </div>
  );
}
