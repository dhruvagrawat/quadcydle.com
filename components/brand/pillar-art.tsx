"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Pillar } from "../../lib/site";

/**
 * Line illustrations for the four pillars, drawn in the pillar colour with a
 * little looping motion. Purely decorative (aria-hidden).
 *   Build — a browser window assembling itself
 *   Host  — a server rack with blinking status lights
 *   Run   — a dashboard gauge and a checklist ticking off
 *   Grow  — bars rising with a trend line
 */
export function PillarArt({ id, color, className }: { id: Pillar["id"]; color: string; className?: string }) {
  const still = useReducedMotion();
  const loop = (delay = 0, duration = 3) =>
    still ? { duration: 0 } : { duration, delay, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const };
  const line = "rgba(237,234,227,0.28)";

  return (
    <svg viewBox="0 0 320 240" fill="none" aria-hidden className={className}>
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="120" r="120" fill={`url(#glow-${id})`} />

      {id === "build" && (
        <g strokeWidth="1.5" strokeLinecap="round">
          <rect x="50" y="40" width="220" height="160" rx="12" stroke={line} />
          <line x1="50" y1="64" x2="270" y2="64" stroke={line} />
          {[64, 76, 88].map((x) => (
            <circle key={x} cx={x} cy="52" r="3.5" stroke={line} />
          ))}
          <motion.rect x="66" y="78" width="188" height="44" rx="6" fill={color} fillOpacity="0.18" stroke={color}
            initial={{ opacity: 0.3, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={loop(0)} />
          <motion.rect x="66" y="132" width="88" height="52" rx="6" stroke={color}
            initial={{ opacity: 0.2, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={loop(0.4)} />
          <motion.g initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={loop(0.8)}>
            <line x1="166" y1="138" x2="254" y2="138" stroke={line} />
            <line x1="166" y1="152" x2="236" y2="152" stroke={line} />
            <line x1="166" y1="166" x2="246" y2="166" stroke={line} />
            <rect x="166" y="174" width="44" height="12" rx="6" fill={color} />
          </motion.g>
          <motion.path d="M214 176 l0 22 l6 -6 l6 12 l5 -2.5 l-6 -12 l9 0 z" fill="#EDEAE3" stroke="#0A0A0B" strokeWidth="1"
            initial={{ x: 30, y: 20 }} animate={{ x: 0, y: 0 }} transition={loop(0, 2.4)} />
        </g>
      )}

      {id === "host" && (
        <g strokeWidth="1.5" strokeLinecap="round">
          {[46, 100, 154].map((y, i) => (
            <g key={y}>
              <rect x="80" y={y} width="160" height="42" rx="8" stroke={line} />
              {[100, 112, 124].map((x) => (
                <line key={x} x1={x} y1={y + 12} x2={x} y2={y + 30} stroke={line} />
              ))}
              <motion.circle cx="216" cy={y + 21} r="5" fill={color}
                initial={{ opacity: 0.25 }} animate={{ opacity: 1 }} transition={loop(i * 0.5, 0.9)} />
              <circle cx="200" cy={y + 21} r="3" fill={line} />
            </g>
          ))}
          {[0, 1, 2].map((i) => (
            <motion.path key={i} d={`M ${252 + i * 10} 70 a ${18 + i * 10} ${18 + i * 10} 0 0 1 0 ${40 + i * 20}`} stroke={color}
              initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }}
              transition={still ? { duration: 0 } : { duration: 2, delay: i * 0.3, repeat: Infinity }} />
          ))}
        </g>
      )}

      {id === "run" && (
        <g strokeWidth="1.5" strokeLinecap="round">
          <rect x="40" y="44" width="240" height="152" rx="12" stroke={line} />
          <path d="M 70 150 A 50 50 0 0 1 170 150" stroke={line} strokeWidth="8" />
          <motion.path d="M 70 150 A 50 50 0 0 1 170 150" stroke={color} strokeWidth="8"
            initial={{ pathLength: 0.3 }} animate={{ pathLength: 0.92 }} transition={loop(0, 2.6)} />
          <motion.line x1="120" y1="150" x2="120" y2="112" stroke="#EDEAE3" strokeWidth="2.5"
            style={{ originX: "120px", originY: "150px" }}
            initial={{ rotate: -60 }} animate={{ rotate: 55 }} transition={loop(0, 2.6)} />
          <circle cx="120" cy="150" r="5" fill="#EDEAE3" />
          <text x="120" y="178" textAnchor="middle" fill="rgba(237,234,227,0.6)" fontSize="11" fontFamily="monospace">99.98%</text>
          {[76, 104, 132].map((y, i) => (
            <g key={y}>
              <rect x="196" y={y} width="16" height="16" rx="4" stroke={line} />
              <motion.path d={`M 199 ${y + 8} l 4 4 l 7 -8`} stroke={color} strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={loop(i * 0.5, 1.6)} />
              <line x1="222" y1={y + 8} x2={258 - i * 8} y2={y + 8} stroke={line} />
            </g>
          ))}
        </g>
      )}

      {id === "grow" && (
        <g strokeWidth="1.5" strokeLinecap="round">
          <line x1="50" y1="196" x2="270" y2="196" stroke={line} />
          {[0, 1, 2, 3, 4].map((i) => {
            const h = 30 + i * 26;
            return (
              <motion.rect key={i} x={66 + i * 42} width="26" rx="5" fill={color} fillOpacity={0.25 + i * 0.15}
                initial={{ height: h * 0.4, y: 196 - h * 0.4 }} animate={{ height: h, y: 196 - h }} transition={loop(i * 0.15, 2.2)} />
            );
          })}
          <motion.path d="M 70 170 L 118 142 L 160 150 L 204 96 L 252 58" stroke="#EDEAE3" strokeWidth="2.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={loop(0, 2.2)} />
          <motion.path d="M 238 56 L 254 56 L 254 72" stroke="#EDEAE3" strokeWidth="2.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={loop(1.2, 1)} />
        </g>
      )}
    </svg>
  );
}
