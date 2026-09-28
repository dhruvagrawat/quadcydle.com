"use client";

import { motion, type Variants } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

const up: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE, delay },
  }),
};

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "p";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={up}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </Tag>
  );
}

/**
 * Splits text into words and slides each one up from behind a mask.
 * Wrap words in *asterisks* to render them in the italic serif.
 */
export function SplitReveal({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  play,
  as = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Control playback manually (e.g. after the preloader). Omit to play on scroll into view. */
  play?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const Tag = motion[as];
  const lines = text.split("\n");
  let i = 0;

  const trigger =
    play !== undefined
    ? { initial: "hidden", animate: play ? "visible" : "hidden" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-10% 0px" } };

  return (
    <Tag className={className} {...trigger} aria-label={text.replace(/\*/g, "")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").map((word, wi) => {
            const italic = word.startsWith("*") && word.endsWith("*");
            const clean = word.replace(/\*/g, "");
            const d = delay + i++ * stagger;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className={italic ? "inline-block font-serif font-normal italic" : "inline-block"}
                  variants={{
                    hidden: { y: "110%", rotate: 4 },
                    visible: { y: "0%", rotate: 0, transition: { duration: 1.1, ease: EASE, delay: d } },
                  }}
                >
                  {clean}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
