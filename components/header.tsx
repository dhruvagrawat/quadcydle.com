"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Homepage/container";
import { HamburgerIcon } from "./icons/hamburger";
import { Logo } from "./icons/logo";
import classNames from "classnames";

const serviceCategories = [
  {
    title: "Web Platforms",
    items: [
      { title: "WordPress", href: "/services/wordpress", desc: "Development, hosting & support" },
      { title: "Shopify", href: "/services/shopify", desc: "Store setup & custom development" },
      { title: "Wix", href: "/services/wix", desc: "Design, management & migration" },
      { title: "Squarespace", href: "/services/squarespace", desc: "Design, SEO & management" },
      { title: "Custom Web Dev", href: "/services/custom-web", desc: "React, Next.js & full-stack" },
      { title: "Amazon Listing", href: "/services/amazon-listing", desc: "Setup, optimisation & PPC" },
      { title: "Shopify Listing", href: "/services/shopify-listing", desc: "Catalog & product management" },
    ],
  },
  {
    title: "Hosting & Infrastructure",
    items: [
      { title: "Managed Hosting", href: "/services/web-hosting", desc: "Fast, secure & monitored" },
      { title: "WordPress Hosting", href: "/services/wordpress-hosting", desc: "Optimised WP infrastructure" },
      { title: "Full-Stack Hosting", href: "/services/fullstack-hosting", desc: "Node, Python, Docker & more" },
      { title: "Status Monitoring", href: "/services/status-monitoring", desc: "Uptime alerts & status pages" },
    ],
  },
  {
    title: "App Development",
    items: [
      { title: "Mobile App Dev", href: "/services/mobile-app", desc: "iOS & Android — React Native" },
      { title: "App Design (Figma)", href: "/services/app-design", desc: "UI/UX prototyping & handoff" },
      { title: "App Support", href: "/services/app-support", desc: "Maintenance & updates" },
    ],
  },
  {
    title: "Food & Hospitality",
    items: [
      { title: "Restaurant App", href: "/services/restaurant-app", desc: "Ordering, menu & reservations" },
      { title: "Platform Onboarding", href: "/services/restaurant-onboarding", desc: "Zomato, Swiggy, ONDC & more" },
    ],
  },
  {
    title: "Business Tools",
    items: [
      { title: "Google Workspace", href: "/services/google-workspace", desc: "Setup, migration & admin" },
      { title: "Microsoft 365", href: "/services/microsoft-365", desc: "Setup, migration & support" },
      { title: "Data Recovery", href: "/services/data-recovery", desc: "Files, emails & accounts" },
    ],
  },
  {
    title: "Packages & Support",
    items: [
      { title: "Startup Builder", href: "/services/startup-builder", desc: "Everything to launch your biz" },
      { title: "E-commerce Suite", href: "/services/ecommerce", desc: "Store + custom dashboard" },
      { title: "Website Audit", href: "/services/website-audit", desc: "Performance, SEO & UX review" },
      { title: "Website Support", href: "/services/website-support", desc: "Ongoing care plans" },
    ],
  },
];

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const close = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("orientationchange", close);
      window.removeEventListener("resize", close);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.07] backdrop-blur-[16px]"
      style={{ background: "rgba(0,2,18,0.92)" }}
    >
      <Container className="flex justify-between h-navigation-height">
        {/* Logo */}
        <Link className="flex items-center text-md font-semibold text-white" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Quadcydle
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center [&_a]:text-sm [&_a]:text-white/60 [&_a:hover]:text-white [&_a]:transition-colors">
            {/* Services */}
            <li
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <button
                className="flex h-navigation-height items-center gap-1.5 px-4 text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <svg
                  width="10" height="10" viewBox="0 0 12 12" fill="currentColor"
                  className={classNames("transition-transform duration-200 text-white/30", servicesOpen && "rotate-180")}
                >
                  <path d="M6 8L1 3h10z" />
                </svg>
              </button>
            </li>
            <li><Link href="/casestudies" className="px-4 flex h-navigation-height items-center">Case Studies</Link></li>
            <li><Link href="/blog" className="px-4 flex h-navigation-height items-center">Blog</Link></li>
            <li><Link href="/pricing" className="px-4 flex h-navigation-height items-center">Pricing</Link></li>
            <li><Link href="/about" className="px-4 flex h-navigation-height items-center">About</Link></li>
          </ul>

          <div className="ml-4 flex h-full items-center gap-3">
            <Link
              href="/support"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Support
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-primary-gradient px-5 py-2 text-sm font-semibold text-white transition-[shadow,text-shadow] hover:shadow-primary"
            >
              Get a Quote
            </Link>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="ml-auto flex items-center md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>

      {/* ─── Full-width Services Mega Dropdown ───────────────────────────── */}
      <div
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        className={classNames(
          "absolute left-0 right-0 top-full overflow-hidden border-b border-white/[0.07] transition-all duration-200 hidden md:block",
          servicesOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(0,2,18,0.98)" }}
      >
        <div className="mx-auto max-w-[1400px] px-10 py-8">
          <div className="grid grid-cols-6 gap-8">
            {serviceCategories.map((cat) => (
              <div key={cat.title}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">
                  {cat.title}
                </p>
                <ul className="space-y-3.5">
                  {cat.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group block"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="block text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                        <span className="block text-xs text-white/35 mt-0.5 group-hover:text-white/50 transition-colors">
                          {item.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">
            <Link
              href="/services"
              className="text-sm text-white/40 hover:text-white transition-colors"
              onClick={() => setServicesOpen(false)}
            >
              View all services →
            </Link>
            <div className="flex items-center gap-6 text-xs text-white/25">
              <Link href="/pricing" className="hover:text-white/50 transition-colors" onClick={() => setServicesOpen(false)}>Pricing</Link>
              <Link href="/contact" className="hover:text-white/50 transition-colors" onClick={() => setServicesOpen(false)}>Get a quote</Link>
              <Link href="/support" className="hover:text-white/50 transition-colors" onClick={() => setServicesOpen(false)}>Support</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile nav overlay ──────────────────────────────────────────── */}
      <div
        className={classNames(
          "fixed inset-0 top-navigation-height z-40 overflow-y-auto transition-all duration-300 md:hidden",
          hamburgerMenuIsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(0,2,18,0.99)" }}
      >
        <nav className="px-6 py-8">
          <ul className="space-y-0 text-white">
            <li>
              <button
                className="flex w-full items-center justify-between border-b border-white/[0.07] py-4 text-base font-medium text-white/80"
                onClick={() => setMobileServicesOpen((o) => !o)}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
                  className={classNames("text-white/30 transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                >
                  <path d="M6 8L1 3h10z" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="pb-4">
                  {serviceCategories.map((cat) => (
                    <div key={cat.title} className="mt-6">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/25">
                        {cat.title}
                      </p>
                      <ul className="space-y-3 pl-2">
                        {cat.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block text-sm text-white/60 hover:text-white transition-colors"
                              onClick={() => setHamburgerMenuIsOpen(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {[
              { title: "Case Studies", href: "/casestudies" },
              { title: "Blog", href: "/blog" },
              { title: "Pricing", href: "/pricing" },
              { title: "About", href: "/about" },
              { title: "Contact", href: "/contact" },
              { title: "Support", href: "/support" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex w-full items-center border-b border-white/[0.07] py-4 text-base font-medium text-white/80 hover:text-white"
                  onClick={() => setHamburgerMenuIsOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              className="block w-full rounded-full bg-primary-gradient py-4 text-center text-sm font-semibold text-white"
              onClick={() => setHamburgerMenuIsOpen(false)}
            >
              Get a Free Quote →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
