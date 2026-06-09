"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Globe, ShoppingBag, Layout, Code2, Server, Database,
  Smartphone, Figma, Headphones, Mail, Shield, HardDrive,
  Activity, Search, LifeBuoy, Rocket, Store, Zap, Clock,
  CheckCircle2, Users, Lock, BarChart3, RefreshCw, Wrench,
  Bug, Star, ArrowUpRight, FileText, Layers, Cpu, Cloud,
  Settings, Package, TrendingUp, AlertCircle, Eye, Gauge,
  CreditCard, Truck, PieChart, ChevronDown, ChevronUp,
} from "lucide-react";

// Map emoji/strings to Lucide icons for clean rendering
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  "🌐": Globe, "🛒": ShoppingBag, "🖥️": Layout, "⚛️": Code2,
  "🔧": Wrench, "🗄️": Database, "📱": Smartphone, "🎨": Figma,
  "🆘": Headphones, "📧": Mail, "🛡️": Shield, "💾": HardDrive,
  "📊": BarChart3, "🔍": Search, "🔒": Lock, "☁️": Cloud,
  "⚡": Zap, "🚀": Rocket, "✨": Star, "📋": FileText,
  "🔄": RefreshCw, "🧭": Layout, "⚙️": Settings, "🖱️": Layers,
  "📐": Layers, "♿": Eye, "🐳": Cpu, "📈": TrendingUp,
  "🐛": Bug, "🔔": AlertCircle, "💳": CreditCard, "🚚": Truck,
  "📦": Package, "🔭": Eye, "🗺️": Globe, "🔓": Lock,
  "🌍": Globe, "📄": FileText, "⏱️": Clock, "🤝": Users,
  "🤖": Cpu, "🏢": Settings, "🔵": Server, "🧪": Gauge,
  "🌟": Star, "💡": Zap, "✏️": FileText, "🎯": Star,
};

function ServiceIcon({ icon, accent }: { icon: string; accent: string }) {
  const IconComponent = iconMap[icon] ?? Zap;
  return (
    <div
      className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border"
      style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}
    >
      <IconComponent size={18} strokeWidth={1.5} />
    </div>
  );
}

export interface PricingTier {
  name: string;
  price: string | number;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href?: string;
  highlighted?: boolean;
  badge?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  tag: string;
  accentColor?: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  stats?: StatItem[];
  features: Feature[];
  process?: ProcessStep[];
  pricingTitle?: string;
  pricing?: PricingTier[];
  faq?: FAQItem[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function FAQAccordion({ items, accentColor }: { items: FAQItem[]; accentColor: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-px overflow-hidden rounded-xl border border-white/[0.07]">
      {items.map((item, i) => (
        <div key={item.question} className="border-b border-white/[0.07] last:border-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-white/[0.02]"
          >
            <span className="text-sm font-medium text-white">{item.question}</span>
            {open === i ? (
              <ChevronUp size={16} className="shrink-0 text-white/40" />
            ) : (
              <ChevronDown size={16} className="shrink-0 text-white/40" />
            )}
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-7 pb-5 text-sm leading-relaxed text-white/50">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function ServicePage({
  tag,
  accentColor = "#7877C6",
  title,
  subtitle,
  heroImage,
  stats,
  features,
  process,
  pricingTitle = "Simple, Transparent Pricing",
  pricing,
  faq,
  ctaTitle = "Ready to get started?",
  ctaSubtitle = "Let's talk about your project. We'll put together a tailored plan and quote within 48 hours.",
  ctaHref = "/contact",
  ctaLabel = "Get a Free Quote",
}: ServicePageProps) {
  return (
    <div className="text-white">

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-6 pb-16 pt-24 md:pt-32 md:pb-24">
        {/* Very subtle ambient glow — barely there */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[50rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[8rem]"
          style={{ background: accentColor }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Tag */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white/40">
                {tag}
              </span>
            </motion.div>

            {/* Title + subtitle side-by-side on large screens */}
            <div className="grid md:grid-cols-[1fr_380px] md:gap-20 md:items-end">
              <div>
                <motion.h1
                  variants={fadeUp}
                  className="mb-0 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[5.6rem]"
                >
                  {title}
                </motion.h1>
              </div>
              <motion.div variants={fadeUp} className="mt-8 md:mt-0 md:pb-2">
                <p className="text-sm leading-relaxed text-white/50 md:text-base">
                  {subtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white transition-[shadow,text-shadow] hover:shadow-primary"
                  >
                    {ctaLabel}
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
                  >
                    Talk to us first
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero image */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-14 overflow-hidden rounded-xl border border-white/[0.07]"
            >
              <div className="relative aspect-[21/8] w-full">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: heroImage ? 0.55 : 0.35, duration: 0.5 }}
              className="mt-10 grid grid-cols-2 divide-x divide-white/[0.07] border border-white/[0.07] rounded-xl md:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="px-6 py-5 text-center">
                  <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/40 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group bg-background p-7 transition-colors hover:bg-white/[0.02]"
              >
                <ServiceIcon icon={feature.icon} accent={accentColor} />
                <h3 className="mb-2 text-sm font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────── */}
      {process && process.length > 0 && (
        <section className="border-t border-white/[0.06] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-12">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">
                  How it works
                </p>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Our process, start to finish
                </h2>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={
                process.length === 4 ? { gridTemplateColumns: 'repeat(4, 1fr)' } :
                process.length === 5 ? { gridTemplateColumns: 'repeat(5, 1fr)' } : {}
              }>
                {process.map((step, i) => (
                  <motion.div key={step.step} variants={fadeUp} className="relative">
                    {/* Step number */}
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-white/50"
                      >
                        {step.step}
                      </span>
                      {i < process.length - 1 && (
                        <div className="hidden h-px flex-1 bg-white/[0.07] lg:block" />
                      )}
                    </div>
                    <h3 className="mb-1.5 text-sm font-semibold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-white/45">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── PRICING ──────────────────────────────────────────────────── */}
      {pricing && pricing.length > 0 && (
        <section className="border-t border-white/[0.06] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-12">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">
                  Pricing
                </p>
                <h2 className="text-3xl font-bold text-white md:text-4xl">{pricingTitle}</h2>
              </motion.div>

              <div
                className={`grid gap-4 ${
                  pricing.length === 2 ? "md:grid-cols-2 md:max-w-2xl" : "md:grid-cols-3"
                }`}
              >
                {pricing.map((tier) => (
                  <motion.div
                    key={tier.name}
                    variants={fadeUp}
                    className={`relative flex flex-col rounded-xl border p-7 ${
                      tier.highlighted
                        ? "border-white/20 bg-white/[0.05]"
                        : "border-white/[0.07] bg-white/[0.02]"
                    }`}
                  >
                    {/* Subtle top line on highlighted card */}
                    {tier.highlighted && (
                      <div
                        className="absolute inset-x-0 top-0 h-px rounded-t-xl"
                        style={{
                          background: `linear-gradient(to right, transparent, ${accentColor}80, transparent)`,
                        }}
                      />
                    )}

                    {tier.badge && (
                      <span
                        className="mb-4 inline-block self-start rounded-md px-2.5 py-1 text-xs font-semibold text-black"
                        style={{ background: accentColor }}
                      >
                        {tier.badge}
                      </span>
                    )}

                    <h3 className="mb-1 text-sm font-semibold text-white">{tier.name}</h3>
                    <p className="mb-4 text-xs leading-relaxed text-white/40">{tier.description}</p>

                    <div className="mb-6 flex items-end gap-1.5 border-b border-white/[0.07] pb-6">
                      <span className="text-3xl font-bold text-white">
                        {typeof tier.price === "number" ? `£${tier.price}` : tier.price}
                      </span>
                      {tier.period && (
                        <span className="mb-1 text-sm text-white/40">/{tier.period}</span>
                      )}
                    </div>

                    <ul className="mb-7 flex-1 space-y-2.5">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: tier.highlighted ? accentColor : "rgba(255,255,255,0.3)" }}
                            strokeWidth={1.5}
                          />
                          <span className="text-white/60 leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={tier.href ?? "/contact"}
                      className="inline-flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-opacity hover:opacity-85"
                      style={
                        tier.highlighted
                          ? { background: accentColor, color: "#000" }
                          : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.08)" }
                      }
                    >
                      {tier.cta}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.p variants={fadeUp} className="mt-6 text-xs text-white/25">
                All prices exclude VAT.{" "}
                <Link href="/contact" className="underline decoration-white/20 hover:text-white/50">
                  Need something custom? Contact us.
                </Link>
              </motion.p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      {faq && faq.length > 0 && (
        <section className="border-t border-white/[0.06] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <div className="grid md:grid-cols-[280px_1fr] md:gap-20">
                <motion.div variants={fadeUp}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">FAQ</p>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">Common questions</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    Not seeing your question? We&apos;re happy to answer anything.{" "}
                    <Link href="/contact" className="underline decoration-white/20 hover:text-white/70">
                      Get in touch.
                    </Link>
                  </p>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <FAQAccordion items={faq} accentColor={accentColor} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
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
            {/* Very subtle background accent */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-[0.08] blur-[5rem]"
              style={{ background: accentColor }}
            />
            <div className="relative grid md:grid-cols-[1fr_auto] md:items-center md:gap-12">
              <div>
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white md:text-4xl">
                  {ctaTitle}
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-3 text-sm leading-relaxed text-white/45 md:max-w-lg">
                  {ctaSubtitle}
                </motion.p>
              </div>
              <motion.div variants={fadeUp} className="mt-8 shrink-0 md:mt-0">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white transition-[shadow,text-shadow] hover:shadow-primary"
                >
                  {ctaLabel}
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
