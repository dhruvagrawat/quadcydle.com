"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { nav, pillars, site } from "../lib/site";
import { LogoMark } from "./brand/logo";
import { RollText } from "./header";
import { Magnetic } from "./motion/magnetic";
import { SplitReveal } from "./motion/reveal";
import { useLenis } from "./motion/smooth-scroll";

export const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  // The footer rises from underneath the page as it comes into view.
  const y = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
  const wordmarkY = useTransform(scrollYProgress, [0.4, 1], ["60%", "0%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-90, 0]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink-50">
      <motion.div style={{ y }} className="mx-auto max-w-site px-6 pt-24 md:px-10 md:pt-36">
        {/* CTA */}
        <div className="grid gap-12 border-b border-line pb-20 md:grid-cols-[1.6fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-8">Next step</p>
            <SplitReveal
              as="h2"
              text={"Got an idea?\nLet's make it *real.*"}
              className="text-display-sm font-medium tracking-[-0.045em]"
            />
          </div>
          <div className="flex flex-col items-start gap-10 md:items-end">
            <Magnetic strength={0.4}>
              <Link
                href="/contact"
                data-cursor="Let's go"
                className="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-ember text-center text-lg font-medium text-ink md:h-56 md:w-56"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-bone transition-transform duration-700 ease-expo group-hover:scale-100" />
                <span className="relative">
                  Start a<br />project ↗
                </span>
              </Link>
            </Magnetic>
            <a
              href={`mailto:${site.email}`}
              className="link-underline text-2xl text-bone md:text-3xl"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-6">
          {pillars.map((p) => (
            <div key={p.id}>
              <p className="eyebrow mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
                {p.title}
              </p>
              <ul className="space-y-2.5 text-sm">
                {p.services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-bone/60 transition-colors hover:text-bone">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="eyebrow mb-5">Studio</p>
            <ul className="space-y-2.5 text-sm">
              {[...nav, { title: "Contact", href: "/contact" }, { title: "Support", href: "/support" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group text-bone/60 transition-colors hover:text-bone">
                    <RollText>{l.title}</RollText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Follow</p>
            <ul className="space-y-2.5 text-sm">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="group text-bone/60 transition-colors hover:text-bone">
                    <RollText>{s.label}</RollText>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 text-xs text-bone/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.tagline}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-bone">Privacy</Link>
            <Link href="#" className="hover:text-bone">Terms</Link>
            <button
              onClick={() => (lenis ? lenis.scrollTo(0, { duration: 2 }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
              className="hover:text-bone"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </motion.div>

      {/* Giant wordmark */}
      <div className="pointer-events-none relative flex select-none items-end justify-center overflow-hidden px-4" aria-hidden>
        <motion.div style={{ y: wordmarkY }} className="flex items-center gap-[2vw]">
          <motion.div style={{ rotate }}>
            <LogoMark className="h-[11vw] w-auto text-ember" />
          </motion.div>
          <span className="text-[17vw] font-semibold leading-[0.8] tracking-[-0.06em] text-bone">
            Quadcydle
          </span>
        </motion.div>
      </div>
    </footer>
  );
};
