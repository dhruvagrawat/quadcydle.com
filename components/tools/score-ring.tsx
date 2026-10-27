"use client";

import { motion } from "framer-motion";

export const scoreColor = (s: number) => (s >= 90 ? "#C9F24B" : s >= 50 ? "#FFB020" : "#FF5A1F");

/** Animated 0–100 score ring (Lighthouse-style colour bands). */
export function ScoreRing({ score, label, size = 132 }: { score: number; label: string; size?: number }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const color = scoreColor(score);
  return (
    <figure className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(237,234,227,0.08)" strokeWidth="7" />
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c * (1 - score / 100) }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-5xl font-medium tracking-[-0.04em]" style={{ color }}>
          {score}
        </span>
      </div>
      <figcaption className="text-center text-sm text-bone/70">{label}</figcaption>
    </figure>
  );
}
