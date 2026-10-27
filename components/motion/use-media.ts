"use client";

import { useEffect, useState } from "react";

/**
 * True when the viewport is wide enough (and the visitor allows motion) for
 * the heavier pinned / scroll-scrubbed effects. Phones get plain scrolling.
 */
export function useDesktopMotion() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setOn(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return on;
}
