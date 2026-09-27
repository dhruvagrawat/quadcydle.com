"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** Moves its children at a different speed to the page. speed > 0 lags, < 0 leads. */
export function Parallax({
  children,
  speed = 0.2,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
