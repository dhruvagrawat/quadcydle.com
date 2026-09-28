"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

/**
 * Inertia smooth scrolling. Lenis drives the native scroll position, so
 * framer-motion's useScroll and position: sticky keep working untouched.
 * Disabled entirely for people who ask for reduced motion.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: true,
      anchors: true,
    });
    setLenis(instance);
    return () => instance.destroy();
  }, []);

  // New page: jump to the top, or to the #section in the URL.
  useEffect(() => {
    if (!lenis) return;
    const hash = window.location.hash;
    const target = hash ? document.querySelector<HTMLElement>(hash) : null;
    if (target) {
      requestAnimationFrame(() => lenis.scrollTo(target, { offset: -96, immediate: true }));
    } else {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
