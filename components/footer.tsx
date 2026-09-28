"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { nav, pillars, site } from "../lib/site";
import { LogoMark } from "./brand/logo";
import { SocialIcon } from "./brand/social-icon";
import { RollText } from "./header";
import { Magnetic } from "./motion/magnetic";
import { SplitReveal } from "./motion/reveal";
import { useLenis } from "./motion/smooth-scroll";

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  // Only the wordmark moves — the rest of the footer scrolls normally.
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["45%", "0%"]);

  return (
    <footer className="relative overflow-hidden bg-ink-50">
      <div className="mx-auto max-w-site px-6 pt-24 md:px-10 md:pt-36">
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
                className="group relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-ember text-center text-lg font-medium text-ink md:h-56 md:w-56"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-bone transition-transform duration-700 ease-expo group-hover:scale-100" />
                <span className="relative">
                  Start a<br />project ↗
                </span>
              </Link>
            </Magnetic>
            <a href={`mailto:${site.email}`} className="link-underline text-2xl text-bone md:text-3xl">
              {site.email}
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-[repeat(4,1fr)_0.8fr]">
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
        </div>

        {/* Brand row */}
        <div className="flex flex-col gap-8 border-t border-line py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line">
              <LogoMark className="h-6 w-auto text-bone" />
            </span>
            <div>
              <p className="text-md font-medium">{site.name}</p>
              <p className="text-sm text-bone/40">{site.tagline}</p>
            </div>
          </div>

          <ul className="flex items-center gap-3">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-line text-bone/70 transition-colors duration-500 hover:border-transparent hover:text-ink"
                >
                  <span className="absolute inset-0 scale-0 rounded-full bg-bone transition-transform duration-500 ease-expo group-hover:scale-100" />
                  <SocialIcon name={s.icon} className="relative h-[1.6rem] w-[1.6rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 text-xs text-bone/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
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
      </div>

      {/* Giant wordmark — text only, cropped by the bottom edge */}
      <div ref={ref} aria-hidden className="pointer-events-none relative h-[13vw] select-none overflow-hidden">
        <motion.p
          style={{ y: wordmarkY }}
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-bone/30 via-bone/10 to-transparent bg-clip-text text-center text-[19.5vw] font-semibold leading-[0.8] tracking-[-0.07em] text-transparent"
        >
          quadcydle
        </motion.p>
      </div>
    </footer>
  );
};
