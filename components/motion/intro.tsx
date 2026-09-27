"use client";

import { useEffect, useState } from "react";

/**
 * Tiny global flag: has the intro preloader finished? Hero animations wait for
 * it so they play in view rather than underneath the loading screen.
 */
let done = false;
const listeners = new Set<() => void>();

export function markIntroDone() {
  done = true;
  listeners.forEach((l) => l());
}

export function useIntroDone() {
  const [value, setValue] = useState(done);
  useEffect(() => {
    if (done) return setValue(true);
    const l = () => setValue(true);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  return value;
}

export const INTRO_KEY = "qc-intro-seen";

/** Runs before paint so returning visitors never see a flash of the preloader. */
export const introScript = `try{if(sessionStorage.getItem("${INTRO_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("intro-seen")}catch(e){}`;
