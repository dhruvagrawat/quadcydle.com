"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const accentColor = "#a855f7";

const included = [
  {
    icon: "🌐",
    title: "Professional Website",
    description: "A fast, mobile-first website built on WordPress or Next.js — up to 8 pages, designed to convert visitors from day one.",
  },
  {
    icon: "🎨",
    title: "Brand Identity",
    description: "Logo design, colour palette, typography, and a brand guidelines document to keep everything consistent.",
  },
  {
    icon: "📧",
    title: "Business Email Setup",
    description: "Google Workspace or Microsoft 365 configured with your domain — professional email from day one.",
  },
  {
    icon: "☁️",
    title: "Managed Hosting (1 Year)",
    description: "12 months of managed hosting — fast NVMe servers, SSL, daily backups, and uptime monitoring.",
  },
  {
    icon: "🔍",
    title: "SEO Foundation",
    description: "Google Search Console setup, sitemap submission, meta tags, and local SEO if applicable.",
  },
  {
    icon: "📊",
    title: "Analytics Setup",
    description: "Google Analytics 4 and Tag Manager installed and configured so you understand your traffic from the start.",
  },
  {
    icon: "🏢",
    title: "Company Registration Guidance",
    description: "We guide you through UK Ltd or LLP registration, Companies House filing, and what records to keep.",
  },
  {
    icon: "☁️",
    title: "AWS Credits Application",
    description: "We help you apply for AWS Activate startup credits (up to $100k) to cover cloud infrastructure costs.",
  },
  {
    icon: "📱",
    title: "Social Media Setup",
    description: "Profile creation and branding on LinkedIn, Instagram, Facebook, and X — consistent from launch.",
  },
  {
    icon: "🛡️",
    title: "Legal Pages",
    description: "Privacy Policy, Terms of Service, and Cookie Policy drafted for your website.",
  },
];

const addOns = [
  { title: "Mobile App (React Native)", price: "From £4,999", href: "/services/mobile-app" },
  { title: "E-commerce / Online Store", price: "From £799", href: "/services/ecommerce" },
  { title: "Custom Web Application", price: "From £4,999", href: "/services/custom-web" },
  { title: "Social Media Management (3 mo)", price: "£299/mo", href: "/contact" },
  { title: "SEO Campaign (6 mo)", price: "£499/mo", href: "/contact" },
  { title: "Startup PR & Press Release", price: "From £299", href: "/contact" },
];

const stats = [
  { value: "10+", label: "deliverables included" },
  { value: "£2,499", label: "fixed all-in price" },
  { value: "4–6 wk", label: "kickoff to launch" },
  { value: "12 mo", label: "hosting included" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function StartupBuilderClient() {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="relative px-6 pb-16 pt-24 md:pt-32 md:pb-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[50rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[8rem]"
          style={{ background: accentColor }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative mx-auto max-w-6xl"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white/50">
              Startup Builder Package
            </span>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_auto] md:gap-16 md:items-end">
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Everything to launch your startup
            </motion.h1>
            <motion.div variants={fadeUp} className="mt-6 md:mt-0 md:max-w-sm md:pb-2">
              <p className="text-sm leading-relaxed text-white/50 md:text-base">
                Website, branding, email, hosting, analytics, registration guidance, and more — one
                package so you can launch properly and focus on building.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-85"
                  style={{ background: accentColor }}
                >
                  Get a Quote
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
                >
                  Book a call
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/[0.06] px-6 py-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto max-w-6xl grid grid-cols-2 divide-x divide-white/[0.07] border-b border-x border-white/[0.07] md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5 text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/40">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* What's included */}
      <section className="border-t border-white/[0.06] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">
                What&apos;s included
              </p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                A complete launch package
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-3"
            >
              {included.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group bg-background p-7 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <CheckCircle2
                      size={15}
                      strokeWidth={1.5}
                      style={{ color: accentColor }}
                    />
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/45">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-white/[0.06] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">
                Pricing
              </p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                One fixed price. Everything included.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid gap-8 md:grid-cols-[1fr_380px] md:items-start"
            >
              {/* Features list */}
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-8">
                <ul className="space-y-3">
                  {[
                    "Professional website built & launched",
                    "Brand identity (logo + guidelines) delivered",
                    "Business email configured on your domain",
                    "12 months managed hosting included",
                    "Google Analytics & Search Console setup",
                    "Company registration guidance",
                    "AWS Activate credits application",
                    "Social media profiles set up",
                    "Privacy Policy, T&Cs, and Cookie Policy",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0"
                        strokeWidth={1.5}
                        style={{ color: accentColor }}
                      />
                      <span className="text-white/60">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price box */}
              <div
                className="rounded-xl border p-8 text-center"
                style={{
                  borderColor: `${accentColor}40`,
                  background: `rgba(168, 85, 247, 0.04)`,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-xl"
                  style={{
                    background: `linear-gradient(to right, transparent, ${accentColor}80, transparent)`,
                  }}
                />
                <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Full Package</p>
                <p className="text-6xl font-bold text-white mb-1" style={{ color: accentColor }}>£2,499</p>
                <p className="text-xs text-white/30 mb-8">one-time + 12 months hosting included</p>
                <Link
                  href="/contact"
                  className="block rounded-lg py-3 text-sm font-semibold text-black transition-opacity hover:opacity-85"
                  style={{ background: accentColor }}
                >
                  Get Started →
                </Link>
                <p className="mt-4 text-xs text-white/25">All prices exclude VAT</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-t border-white/[0.06] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">
                Optional
              </p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Grow further with add-ons
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3"
            >
              {addOns.map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="group bg-background">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/30">{item.price}</span>
                      <ArrowUpRight size={13} className="text-white/20 group-hover:text-white/50 transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto max-w-6xl"
        >
          <div
            className="relative overflow-hidden rounded-xl border border-white/[0.07] px-10 py-14 md:px-16 md:py-20"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-[0.08] blur-[5rem]"
              style={{ background: accentColor }}
            />
            <div className="relative grid md:grid-cols-[1fr_auto] md:items-center md:gap-12">
              <div>
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white md:text-4xl">
                  Ready to launch your startup?
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-3 text-sm leading-relaxed text-white/45 md:max-w-lg">
                  Tell us about your startup. We&apos;ll confirm the scope and get you a launch date
                  within 48 hours of our first call.
                </motion.p>
              </div>
              <motion.div variants={fadeUp} className="mt-8 shrink-0 md:mt-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-85"
                  style={{ background: accentColor }}
                >
                  Let&apos;s build together
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
