"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Minus } from "lucide-react";

// ── Currency config ──────────────────────────────────────────────────────────
const CURRENCIES = [
  { code: "GBP", symbol: "£",    rate: 1,     label: "GBP £" },
  { code: "USD", symbol: "$",    rate: 1.27,  label: "USD $" },
  { code: "CAD", symbol: "C$",   rate: 1.72,  label: "CAD C$" },
  { code: "AED", symbol: "AED ", rate: 4.67,  label: "AED د.إ" },
  { code: "JPY", symbol: "¥",    rate: 190,   label: "JPY ¥" },
  { code: "INR", symbol: "₹",    rate: 105,   label: "INR ₹" },
] as const;
type CurrencyCode = (typeof CURRENCIES)[number]["code"];

function formatPrice(
  gbp: number | null,
  currency: CurrencyCode,
  period?: string,
  from?: boolean
): string {
  if (gbp === null) return "Custom";
  const cur = CURRENCIES.find((c) => c.code === currency)!;
  const raw = gbp * cur.rate;
  let formatted: string;
  if (cur.code === "JPY") {
    formatted = `${cur.symbol}${Math.round(raw).toLocaleString()}`;
  } else {
    formatted = `${cur.symbol}${raw % 1 === 0 ? raw.toLocaleString() : raw.toFixed(0)}`;
  }
  if (from) formatted = `From ${formatted}`;
  if (period) formatted += `/${period}`;
  return formatted;
}

// ── Pricing data ─────────────────────────────────────────────────────────────
interface PriceCell {
  gbp: number | null;
  period?: string;
  from?: boolean;
  note?: string;
}

interface ServiceRow {
  name: string;
  href: string;
  cells: PriceCell[];
}

interface PricingTab {
  id: string;
  label: string;
  columns: string[];
  rows: ServiceRow[];
}

const TABS: PricingTab[] = [
  {
    id: "plans",
    label: "Monthly Plans",
    columns: ["Starter", "Growth", "Enterprise"],
    rows: [
      {
        name: "Managed Retainer",
        href: "/pricing",
        cells: [
          { gbp: 499, period: "mo" },
          { gbp: 999, period: "mo" },
          { gbp: null },
        ],
      },
    ],
  },
  {
    id: "web",
    label: "Web Platforms",
    columns: ["Starter", "Standard", "Custom"],
    rows: [
      { name: "WordPress Site", href: "/services/wordpress", cells: [{ gbp: 799, from: true }, { gbp: 1499, from: true }, { gbp: null }] },
      { name: "Shopify Store", href: "/services/shopify", cells: [{ gbp: 1499, from: true }, { gbp: 2999, from: true }, { gbp: null }] },
      { name: "Wix Site", href: "/services/wix", cells: [{ gbp: 599, from: true }, { gbp: 1199, from: true }, { gbp: 2499, from: true }] },
      { name: "Squarespace Site", href: "/services/squarespace", cells: [{ gbp: 599, from: true }, { gbp: 1199, from: true }, { gbp: 2499, from: true }] },
      { name: "Custom Web App", href: "/services/custom-web", cells: [{ gbp: 1499, from: true }, { gbp: 4999, from: true }, { gbp: null }] },
      { name: "Amazon Listing Setup", href: "/services/amazon-listing", cells: [{ gbp: 299 }, { gbp: 599 }, { gbp: 999, period: "mo" }] },
      { name: "Shopify Catalog Build", href: "/services/shopify-listing", cells: [{ gbp: 249 }, { gbp: 499 }, { gbp: 799, period: "mo" }] },
    ],
  },
  {
    id: "hosting",
    label: "Hosting",
    columns: ["Personal", "Business", "Agency"],
    rows: [
      { name: "Web Hosting", href: "/services/web-hosting", cells: [{ gbp: 9, period: "mo" }, { gbp: 22, period: "mo" }, { gbp: 49, period: "mo" }] },
      { name: "WordPress Hosting", href: "/services/wordpress-hosting", cells: [{ gbp: 14, period: "mo" }, { gbp: 29, period: "mo" }, { gbp: 79, period: "mo" }] },
      { name: "Full-Stack Hosting", href: "/services/fullstack-hosting", cells: [{ gbp: 49, period: "mo" }, { gbp: 149, period: "mo" }, { gbp: null }] },
      { name: "Status Monitoring", href: "/services/status-monitoring", cells: [{ gbp: 14, period: "mo" }, { gbp: 34, period: "mo" }, { gbp: 89, period: "mo" }] },
    ],
  },
  {
    id: "apps",
    label: "Apps & Design",
    columns: ["MVP / Sprint", "Full Product", "Enterprise"],
    rows: [
      { name: "Mobile App (iOS & Android)", href: "/services/mobile-app", cells: [{ gbp: 4999, from: true }, { gbp: 12999, from: true }, { gbp: null }] },
      { name: "App Design (Figma)", href: "/services/app-design", cells: [{ gbp: 1499, from: true }, { gbp: 3499, from: true }, { gbp: null }] },
      { name: "App Support", href: "/services/app-support", cells: [{ gbp: 149, period: "mo" }, { gbp: 349, period: "mo" }, { gbp: 799, period: "mo" }] },
      { name: "Restaurant App", href: "/services/restaurant-app", cells: [{ gbp: 4999, from: true }, { gbp: 9999, from: true }, { gbp: null }] },
    ],
  },
  {
    id: "business",
    label: "Business Tools",
    columns: ["Setup", "Migration", "Monthly Admin"],
    rows: [
      { name: "Google Workspace", href: "/services/google-workspace", cells: [{ gbp: 299 }, { gbp: 499 }, { gbp: 79, period: "mo" }] },
      { name: "Microsoft 365", href: "/services/microsoft-365", cells: [{ gbp: 349 }, { gbp: 549 }, { gbp: 89, period: "mo" }] },
      { name: "Data Recovery", href: "/services/data-recovery", cells: [{ gbp: 79, note: "Consult" }, { gbp: 199, note: "Email" }, { gbp: null }] },
      { name: "Restaurant Platform Onboarding", href: "/services/restaurant-onboarding", cells: [{ gbp: 199, note: "1 platform" }, { gbp: 349, note: "3 platforms" }, { gbp: 599, note: "All platforms" }] },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    columns: ["Starter", "Growth", "Custom"],
    rows: [
      { name: "E-commerce Store", href: "/services/ecommerce", cells: [{ gbp: 1499, from: true }, { gbp: 3499, from: true }, { gbp: 9999, from: true }] },
      { name: "Startup Builder Package", href: "/services/startup-builder", cells: [{ gbp: 2499 }, { gbp: null }, { gbp: null }] },
    ],
  },
  {
    id: "support",
    label: "Care & Support",
    columns: ["Essential", "Business", "Premium"],
    rows: [
      { name: "Website Support Plan", href: "/services/website-support", cells: [{ gbp: 49, period: "mo" }, { gbp: 99, period: "mo" }, { gbp: 199, period: "mo" }] },
      { name: "Website Audit", href: "/services/website-audit", cells: [{ gbp: 149 }, { gbp: 349 }, { gbp: 799, from: true }] },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("plans");
  const [currency, setCurrency] = useState<CurrencyCode>("GBP");

  const tab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  // Managed Plans tab has a special card layout
  const isPlansTab = activeTab === "plans";

  const plans = [
    {
      name: "Starter",
      tagline: "Establish",
      monthly: 499,
      annual: 399,
      popular: false,
      description: "Everything a small business needs to launch online.",
      features: ["5-page website", "Basic SEO", "Google Analytics", "Managed hosting", "Email support (48h)"],
      cta: "Get Started",
    },
    {
      name: "Growth",
      tagline: "Scale",
      monthly: 999,
      annual: 799,
      popular: true,
      description: "Performance, SEO, ads, and active monthly management.",
      features: ["Up to 15 pages + blog", "Full SEO campaign", "Social media (2 platforms)", "Paid ads (up to £1k)", "Priority support (24h)", "Monthly strategy call"],
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      tagline: "Dominate",
      monthly: null,
      annual: null,
      popular: false,
      description: "Custom solutions for ambitious, fast-growing businesses.",
      features: ["Everything in Growth", "Mobile app development", "Full-service social", "Dedicated account manager", "Weekly strategy calls", "SLA-backed support"],
      cta: "Contact Us",
    },
  ];

  return (
    <div className="text-white min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pb-10 pt-24 md:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[8rem]"
          style={{ background: "#7877C6" }}
        />
        <motion.div
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="relative mx-auto max-w-7xl"
        >
          <motion.span variants={fadeUp}
            className="mb-5 inline-block rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white/40"
          >
            Pricing
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between md:gap-12">
            <motion.h1 variants={fadeUp} className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Simple, transparent pricing
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-sm text-sm leading-relaxed text-white/45 md:mt-0 md:text-right">
              No hidden fees. No lock-ins. All prices exclude VAT.{" "}
              <Link href="/contact" className="underline decoration-white/20 hover:text-white/70">Need a custom quote?</Link>
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── Sticky tab + currency bar ──────────────────────────────────────── */}
      <div className="sticky top-[var(--navigation-height)] z-30 border-b border-white/[0.07]"
        style={{ background: "rgba(0,2,18,0.96)", backdropFilter: "blur(16px)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex overflow-x-auto scrollbar-none">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`relative shrink-0 px-4 py-4 text-sm font-medium transition-colors ${
                    activeTab === t.id ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {t.label}
                  {activeTab === t.id && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute inset-x-0 bottom-0 h-px bg-white"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Currency toggle */}
            <div className="flex shrink-0 items-center gap-1 rounded-lg border border-white/[0.07] bg-white/[0.03] p-1">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                    currency === c.code
                      ? "bg-white/10 text-white"
                      : "text-white/30 hover:text-white/60"
                  }`}
                >
                  {c.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Tab Content ───────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* Monthly Plans — card layout */}
            {isPlansTab ? (
              <div>
                <div className="mb-10">
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">Managed Retainers</p>
                  <h2 className="text-3xl font-bold md:text-4xl">Monthly management plans</h2>
                  <p className="mt-3 text-sm text-white/40">Ongoing digital management for your business. Includes website, SEO, and marketing — tailored to your growth stage.</p>
                </div>

                <PlansCards currency={currency} plans={plans} />
              </div>
            ) : (
              /* All other tabs — table layout */
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl font-bold md:text-4xl">{tab.label}</h2>
                  <p className="mt-2 text-sm text-white/40">
                    Prices shown in {CURRENCIES.find(c => c.code === currency)?.label}. Approximate conversion from GBP.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
                  <table className="w-full min-w-[560px]">
                    <thead>
                      <tr className="border-b border-white/[0.07]" style={{ background: "rgba(255,255,255,0.02)" }}>
                        <th className="px-6 py-4 text-left text-xs font-medium text-white/30 w-[40%]">Service</th>
                        {tab.columns.map((col) => (
                          <th key={col} className="px-6 py-4 text-center text-xs font-semibold text-white/70">{col}</th>
                        ))}
                        <th className="px-4 py-4 w-10" />
                      </tr>
                    </thead>
                    <tbody>
                      {tab.rows.map((row, i) => (
                        <tr
                          key={row.name}
                          className={`border-b border-white/[0.04] transition-colors hover:bg-white/[0.015] ${
                            i === tab.rows.length - 1 ? "border-0" : ""
                          }`}
                        >
                          <td className="px-6 py-4">
                            <Link href={row.href} className="group flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors">
                              {row.name}
                              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          </td>
                          {row.cells.map((cell, ci) => (
                            <td key={ci} className="px-6 py-4 text-center">
                              {cell.gbp === null ? (
                                <span className="text-xs text-white/30">Contact us</span>
                              ) : (
                                <div>
                                  <span className="text-sm font-semibold text-white">
                                    {formatPrice(cell.gbp, currency, cell.period, cell.from)}
                                  </span>
                                  {cell.note && (
                                    <span className="ml-1.5 text-xs text-white/30">({cell.note})</span>
                                  )}
                                </div>
                              )}
                            </td>
                          ))}
                          <td className="px-4 py-4">
                            <Link href={row.href}
                              className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-white/[0.07] text-white/25 hover:text-white hover:border-white/20 transition-colors"
                            >
                              <ArrowUpRight size={13} />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-xs text-white/20">
                  {currency !== "GBP" && "Currency conversion is approximate and for reference only. Invoices are issued in GBP. "}
                  All prices exclude VAT.{" "}
                  <Link href="/contact" className="underline decoration-white/20 hover:text-white/40">Need a custom quote?</Link>
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.07] px-10 py-14 md:px-16 md:py-20"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-[0.07] blur-[5rem]" style={{ background: "#7877C6" }} />
            <div className="relative grid md:grid-cols-[1fr_auto] md:items-center md:gap-12">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Not sure what you need?</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/45 md:max-w-lg">
                  Tell us about your business. We&apos;ll recommend the right plan or build a custom scope — no obligation, no pressure.
                </p>
              </div>
              <div className="mt-8 shrink-0 md:mt-0 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white transition-[shadow,text-shadow] hover:shadow-primary">
                  Get a Custom Quote <ArrowUpRight size={14} />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                  Browse services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Plans section with internal toggle ─────────────────────────────────────
function PlansCards({ currency, plans }: { currency: CurrencyCode; plans: ReturnType<typeof getPlans> }) {
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      {/* Period toggle inside plans section */}
      <div className="mb-8 flex items-center gap-1 self-start rounded-lg border border-white/[0.08] bg-white/[0.03] p-1 w-fit">
        {(["monthly", "annual"] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`relative rounded-md px-5 py-2 text-sm font-medium transition-all ${
              period === p ? "bg-white/[0.08] text-white" : "text-white/40 hover:text-white/60"
            }`}
          >
            {p === "monthly" ? "Monthly" : "Annual"}
            {p === "annual" && (
              <span className="absolute -right-1 -top-2.5 rounded-full bg-[#7877C6] px-1.5 py-0.5 text-[10px] font-semibold text-white">–20%</span>
            )}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => {
          const price = period === "monthly" ? plan.monthly : plan.annual;
          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-7 ${
                plan.popular ? "border-white/20 bg-white/[0.05]" : "border-white/[0.07] bg-white/[0.02]"
              }`}
            >
              {plan.popular && (
                <div className="absolute inset-x-0 top-0 h-px rounded-t-xl"
                  style={{ background: "linear-gradient(to right, transparent, #7877C690, transparent)" }}
                />
              )}
              {plan.popular && (
                <span className="mb-4 inline-block self-start rounded-md bg-[#7877C6] px-2.5 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">{plan.tagline}</p>
              <h3 className="mt-1 text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/40">{plan.description}</p>

              <div className="my-6 border-t border-white/[0.07] pt-6">
                <AnimatePresence mode="wait">
                  <motion.div key={`${period}-${currency}`}
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    {price !== null ? (
                      <div className="flex items-end gap-1.5">
                        <span className="text-4xl font-bold text-white">
                          {formatPrice(price, currency)}
                        </span>
                        <span className="mb-1.5 text-sm text-white/35">/mo</span>
                        {period === "annual" && plan.monthly && (
                          <span className="mb-1.5 text-xs text-white/25 line-through">
                            {formatPrice(plan.monthly, currency)}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-white">Custom</span>
                    )}
                  </motion.div>
                </AnimatePresence>
                {period === "annual" && price !== null && plan.monthly !== null && (
                  <p className="mt-1 text-xs text-white/25">
                    Billed annually — save {formatPrice((plan.monthly - plan.annual!) * 12, currency)}/yr
                  </p>
                )}
              </div>

              <ul className="mb-7 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0"
                      strokeWidth={1.5}
                      style={{ color: plan.popular ? "#7877C6" : "rgba(255,255,255,0.3)" }}
                    />
                    <span className="text-white/60 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-[shadow,opacity]"
                style={
                  plan.popular
                    ? { background: "linear-gradient(92.88deg, rgb(69,94,181) 9.16%, rgb(86,67,204) 43.89%, rgb(103,63,215) 64.72%)", color: "#fff" }
                    : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.08)" }
                }
              >
                {plan.cta} <ArrowUpRight size={14} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

function getPlans() {
  return [
    {
      name: "Starter", tagline: "Establish", monthly: 499, annual: 399, popular: false,
      description: "Everything a small business needs to launch online.",
      features: ["5-page website", "Basic SEO", "Google Analytics", "Managed hosting", "Email support (48h)"],
      cta: "Get Started",
    },
    {
      name: "Growth", tagline: "Scale", monthly: 999, annual: 799, popular: true,
      description: "Performance, SEO, ads, and active monthly management.",
      features: ["Up to 15 pages + blog", "Full SEO campaign", "Social media (2 platforms)", "Paid ads management", "Priority support (24h)", "Monthly strategy call"],
      cta: "Get Started",
    },
    {
      name: "Enterprise", tagline: "Dominate", monthly: null, annual: null, popular: false,
      description: "Custom solutions for ambitious, fast-growing businesses.",
      features: ["Everything in Growth", "Mobile app development", "Full-service social", "Dedicated account manager", "Weekly strategy calls", "SLA-backed support"],
      cta: "Contact Us",
    },
  ];
}
