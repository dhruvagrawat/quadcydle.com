"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE } from "./reveal";
import { INTRO_KEY, markIntroDone } from "./intro";
import { LogoMark } from "../brand/logo";

const WORDS = ["Build", "Host", "Run", "Grow"];

/** First-visit intro: a counter, the four pillars flashing past, then a curtain lift. */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [word, setWord] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (document.documentElement.classList.contains("intro-seen")) {
      setVisible(false);
      markIntroDone();
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 2.2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        if (countRef.current) countRef.current.textContent = String(Math.round(v)).padStart(3, "0");
        setWord(Math.min(WORDS.length - 1, Math.floor((v / 100) * WORDS.length)));
      },
      onComplete: () => {
        try {
          sessionStorage.setItem(INTRO_KEY, "1");
        } catch {}
        setTimeout(() => {
          setVisible(false);
          document.documentElement.style.overflow = "";
          markIntroDone();
        }, 250);
      },
    });
    return () => {
      controls.stop();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="preloader fixed inset-0 z-[100] flex flex-col justify-between bg-ink-50 p-8 md:p-12"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between">
            <LogoMark className="h-8 w-8 text-bone" />
            <span className="eyebrow">Quadcydle — Digital Studio</span>
          </div>

          <div className="flex items-end justify-between gap-8">
            <div className="relative h-[1.1em] overflow-hidden text-display font-medium tracking-[-0.04em]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={word}
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {WORDS[word]}
                  <span className="text-ember">.</span>
                </motion.span>
              </AnimatePresence>
            </div>
            <span
              ref={countRef}
              className="font-mono text-4xl tabular-nums text-bone-dim md:text-6xl"
            >
              000
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
