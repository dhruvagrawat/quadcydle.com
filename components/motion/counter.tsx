"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Counts up to the number inside `value` when it scrolls into view,
 * keeping any prefix/suffix ("£48k", "4.9★", "312%").
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);

  // Start from zero on the client (the server renders the real value for SEO).
  useEffect(() => {
    if (!match || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ref.current.textContent = match[1] + "0" + match[3];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView || !match || !ref.current) return;
    const [, pre, num, post] = match;
    const target = parseFloat(num.replace(/,/g, ""));
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    const commas = num.includes(",");
    const node = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.textContent = value;
      return;
    }
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = decimals ? v.toFixed(decimals) : Math.round(v).toString();
        node.textContent = pre + (commas ? Number(n).toLocaleString("en-GB") : n) + post;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
