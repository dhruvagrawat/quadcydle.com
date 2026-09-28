"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { CONSENT_KEY } from "../lib/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Asks before turning on Google Analytics cookies (UK/EU consent rules).
 * The choice is stored in localStorage and passed to gtag Consent Mode.
 */
export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) {
        const t = setTimeout(() => setOpen(true), 2500);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    window.gtag?.("consent", "update", { analytics_storage: value });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="Cookie preferences"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-[80] mx-auto flex max-w-[64rem] flex-col gap-4 rounded-[2rem] border border-line bg-ink-50/95 p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm leading-relaxed text-bone/70">
            We&apos;d like to use Google Analytics cookies to understand how the site is used. No ads, no selling data.
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => choose("denied")}
              className="rounded-full border border-line px-5 py-2.5 text-sm text-bone/70 hover:text-bone"
            >
              Decline
            </button>
            <button
              onClick={() => choose("granted")}
              className="rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink hover:bg-ember"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
