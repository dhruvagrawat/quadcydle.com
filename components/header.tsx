"use client";

import classNames from "classnames";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, pillars, site } from "../lib/site";
import { Logo } from "./brand/logo";
import { Magnetic } from "./motion/magnetic";
import { EASE } from "./motion/reveal";
import { useLenis } from "./motion/smooth-scroll";

/** Text that rolls up to a duplicate of itself on hover. */
export function RollText({ children }: { children: string }) {
  return (
    <span className="relative inline-flex overflow-hidden">
      <span className="transition-transform duration-500 ease-expo group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute left-0 top-full transition-transform duration-500 ease-expo group-hover:-translate-y-full"
      >
        {children}
      </span>
    </span>
  );
}

export const Header = () => {
  const pathname = usePathname();
  const lenis = useLenis();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 300 && y > prev && !megaOpen);
  });

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    document.documentElement.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen, lenis]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden && !menuOpen ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div
          className={classNames(
            "mx-auto flex h-navigation-height max-w-site items-center justify-between px-6 transition-[background,backdrop-filter,border-color] duration-500 md:px-10",
            (scrolled || megaOpen) && !menuOpen
              ? "border-b border-line bg-ink/70 backdrop-blur-xl"
              : "border-b border-transparent"
          )}
        >
          <Link href="/" className="relative z-10 text-bone" aria-label={`${site.name} home`}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              const isServices = item.href === "/services";
              return (
                <div
                  key={item.href}
                  onMouseEnter={isServices ? openMega : undefined}
                  onMouseLeave={isServices ? closeMega : undefined}
                >
                  <Link
                    href={item.href}
                    className={classNames(
                      "group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                      active ? "text-bone" : "text-bone/60 hover:text-bone"
                    )}
                    aria-expanded={isServices ? megaOpen : undefined}
                    onFocus={isServices ? openMega : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-bone/[0.07]"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                    <RollText>{item.title}</RollText>
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {site.availability && (
              <span className="hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone/50 xl:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                {site.availability}
              </span>
            )}
            <Magnetic className="hidden md:inline-block">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-bone px-5 py-3 text-sm font-medium text-ink"
              >
                <span className="absolute inset-0 translate-y-full rounded-full bg-ember transition-transform duration-500 ease-expo group-hover:translate-y-0" />
                <span className="relative">
                  <RollText>Start a project</RollText>
                </span>
              </Link>
            </Magnetic>

            <button
              className="relative z-10 flex h-12 items-center gap-3 rounded-full border border-line px-4 text-sm lg:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={classNames(
                    "absolute left-0 h-px w-full bg-bone transition-all duration-500 ease-expo",
                    menuOpen ? "top-1/2 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={classNames(
                    "absolute left-0 h-px w-full bg-bone transition-all duration-500 ease-expo",
                    menuOpen ? "top-1/2 -rotate-45" : "top-full"
                  )}
                />
              </span>
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* ─── Services mega menu ─────────────────────────────────────── */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-ink/95 backdrop-blur-xl lg:block"
            >
              <div className="mx-auto grid max-w-site grid-cols-[1fr_2fr] gap-16 px-10 py-12">
                <div className="flex flex-col justify-between border-r border-line pr-12">
                  <div>
                    <p className="eyebrow mb-6">The Quadcydle cycle</p>
                    <ul>
                      {pillars.map((p, i) => (
                        <li key={p.id}>
                          <button
                            onMouseEnter={() => setActivePillar(i)}
                            onFocus={() => setActivePillar(i)}
                            className={classNames(
                              "flex w-full items-baseline gap-4 py-1 text-left text-5xl font-medium tracking-[-0.03em] transition-colors duration-300",
                              activePillar === i ? "text-bone" : "text-bone/20"
                            )}
                          >
                            <span className="font-mono text-xs text-bone/40">{p.index}</span>
                            {p.title}
                            {activePillar === i && (
                              <motion.span
                                layoutId="mega-dot"
                                className="h-3 w-3 rounded-full"
                                style={{ background: p.color }}
                              />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/services" className="group mt-10 inline-flex items-center gap-2 text-sm text-bone/60 hover:text-bone">
                    <RollText>All services</RollText> <span aria-hidden>→</span>
                  </Link>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <p className="mb-8 max-w-xl text-2xl leading-snug text-bone/80">
                      {pillars[activePillar].headline}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-10 gap-y-1">
                      {pillars[activePillar].services.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="group flex items-center justify-between gap-4 border-b border-line py-4"
                          >
                            <span>
                              <span className="block text-md text-bone">{s.title}</span>
                              <span className="block text-sm text-bone/40">{s.desc}</span>
                            </span>
                            <span
                              aria-hidden
                              className="-translate-x-2 opacity-0 transition-all duration-500 ease-expo group-hover:translate-x-0 group-hover:opacity-100"
                              style={{ color: pillars[activePillar].color }}
                            >
                              ↗
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── Mobile menu ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink-50 px-6 pb-10 pt-[calc(var(--navigation-height)+2.4rem)] lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 5rem) 3.6rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 5rem) 3.6rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 5rem) 3.6rem)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            data-lenis-prevent
          >
            <nav aria-label="Mobile">
              <ul>
                {[...nav, { title: "Contact", href: "/contact" }].map((item, i) => (
                  <li key={item.href} className="overflow-hidden border-b border-line">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-baseline justify-between py-4 text-5xl font-medium tracking-[-0.03em]"
                      >
                        {item.title}
                        <span className="font-mono text-xs text-bone/40">0{i + 1}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {pillars.map((p) => (
                <Link key={p.id} href={`/services#${p.id}`} className="flex items-center gap-3 text-bone/70">
                  <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
                  {p.title}
                </Link>
              ))}
            </motion.div>

            <div className="mt-auto pt-12">
              <Link
                href="/contact"
                className="block rounded-full bg-ember py-5 text-center text-md font-medium text-ink"
              >
                Start a project
              </Link>
              <a href={`mailto:${site.email}`} className="mt-6 block text-center text-sm text-bone/50">
                {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
