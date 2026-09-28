"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../components/motion/reveal";
import { PageHero } from "../../../components/page-hero";

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
    <>
      <PageHero
        eyebrow="Pricing"
        title={"Simple, *honest*\npricing."}
        intro="No hidden fees and no lock-ins. Pick a monthly plan, or price any single service below — in your currency."
      />

      {/* ── Sticky tab + currency bar ──────────────────────────────────────── */}
      <div className="relative z-30 px-6 md:px-10">
        <div className="mx-auto flex max-w-site flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex overflow-x-auto rounded-full border border-line bg-ink/80 p-1.5 backdrop-blur-xl">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-colors ${
                  activeTab === t.id ? "text-ink" : "text-bone/60 hover:text-bone"
                }`}
              >
                {activeTab === t.id && (
                  <motion.span
                    layoutId="pricing-tab"
                    className="absolute inset-0 rounded-full bg-bone"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1 self-start rounded-full border border-line bg-ink/80 p-1.5 backdrop-blur-xl md:self-auto">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => setCurrency(c.code)}
                className={`rounded-full px-3 py-2 font-mono text-xs transition-colors ${
                  currency === c.code ? "bg-ember text-ink" : "text-bone/50 hover:text-bone"
                }`}
              >
                {c.code}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab Content ───────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-site px-6 py-20 md:px-10 md:py-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {isPlansTab ? (
              <div>
                <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
                  <div>
                    <p className="eyebrow mb-4">Managed retainers</p>
                    <h2 className="text-6xl font-medium tracking-[-0.045em] md:text-7xl">Monthly plans</h2>
                  </div>
                  <p className="max-w-[52rem] text-lg text-bone/55 md:justify-self-end">
                    Ongoing management for your website, SEO and marketing — tailored to your growth stage.
                  </p>
                </div>
                <PlansCards currency={currency} plans={plans} />
              </div>
            ) : (
              <div>
                <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
                  <h2 className="text-6xl font-medium tracking-[-0.045em] md:text-7xl">{tab.label}</h2>
                  <p className="text-md text-bone/50 md:justify-self-end">
                    Prices in {CURRENCIES.find((c) => c.code === currency)?.label}
                    {currency !== "GBP" && " — approximate conversion from GBP"}.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[64rem]">
                    <thead>
                      <tr className="border-b border-line">
                        <th className="eyebrow w-[40%] py-5 text-left font-normal">Service</th>
                        {tab.columns.map((col) => (
                          <th key={col} className="eyebrow py-5 text-right font-normal">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tab.rows.map((row) => (
                        <tr key={row.name} className="group border-b border-line">
                          <td className="py-6">
                            <Link
                              href={row.href}
                              className="inline-flex items-center gap-3 text-2xl font-medium tracking-[-0.02em] transition-colors group-hover:text-ember"
                            >
                              {row.name}
                              <ArrowUpRight
                                size={18}
                                className="-translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                              />
                            </Link>
                          </td>
                          {row.cells.map((cell, ci) => (
                            <td key={ci} className="py-6 text-right">
                              {cell.gbp === null ? (
                                <span className="text-md text-bone/55">Let&apos;s talk</span>
                              ) : (
                                <div>
                                  <span className="text-xl font-medium tabular-nums">
                                    {formatPrice(cell.gbp, currency, cell.period, cell.from)}
                                  </span>
                                  {cell.note && <span className="block text-xs text-bone/55">{cell.note}</span>}
                                </div>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <p className="mt-8 text-sm text-bone/55">
              {currency !== "GBP" && "Currency conversion is approximate and for reference only. Invoices are issued in GBP. "}
              All prices exclude VAT.{" "}
              <Link href="/contact" className="link-underline text-bone/70">
                Need a custom quote?
              </Link>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

// ── Plans section with internal toggle ─────────────────────────────────────
function PlansCards({ currency, plans }: { currency: CurrencyCode; plans: ReturnType<typeof getPlans> }) {
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <div className="mb-10 flex w-fit items-center gap-1 rounded-full border border-line p-1.5">
        {(["monthly", "annual"] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`relative rounded-full px-6 py-2.5 text-sm transition-colors ${
              period === p ? "text-ink" : "text-bone/60 hover:text-bone"
            }`}
          >
            {period === p && (
              <motion.span layoutId="period" className="absolute inset-0 rounded-full bg-bone" />
            )}
            <span className="relative">
              {p === "monthly" ? "Monthly" : "Annual"}
              {p === "annual" && <span className="ml-2 font-mono text-xs text-ember">−20%</span>}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan, i) => {
          const price = period === "monthly" ? plan.monthly : plan.annual;
          const hi = plan.popular;
          return (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[2rem] border p-8 md:p-10 ${
                  hi ? "border-transparent bg-ember text-ink" : "border-line bg-ink-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className={`eyebrow ${hi ? "!text-ink/60" : ""}`}>{plan.tagline}</p>
                  {hi && (
                    <span className="rounded-full bg-ink px-3 py-1 font-mono text-xs uppercase tracking-widest text-bone">
                      Most popular
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-4xl font-medium tracking-[-0.03em]">{plan.name}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${hi ? "text-ink/70" : "text-bone/50"}`}>{plan.description}</p>

                <div className={`my-8 border-y py-8 ${hi ? "border-ink/15" : "border-line"}`}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${period}-${currency}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {price !== null ? (
                        <div className="flex flex-wrap items-end gap-2">
                          <span className="text-7xl font-medium tracking-[-0.05em]">{formatPrice(price, currency)}</span>
                          <span className={`mb-2 text-md ${hi ? "text-ink/60" : "text-bone/55"}`}>/mo</span>
                          {period === "annual" && plan.monthly && (
                            <span className={`mb-2 text-sm line-through ${hi ? "text-ink/40" : "text-bone/30"}`}>
                              {formatPrice(plan.monthly, currency)}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-7xl font-medium tracking-[-0.05em]">Custom</span>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  {period === "annual" && price !== null && plan.monthly !== null && (
                    <p className={`mt-2 text-xs ${hi ? "text-ink/60" : "text-bone/55"}`}>
                      Billed annually — save {formatPrice((plan.monthly - plan.annual!) * 12, currency)}/yr
                    </p>
                  )}
                </div>

                <ul className="mb-10 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0"
                        strokeWidth={1.5}
                        style={{ color: hi ? "#0A0A0B" : "#FF5A1F" }}
                      />
                      <span className={hi ? "text-ink/80" : "text-bone/70"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 rounded-full py-4 text-md font-medium transition-colors ${
                    hi ? "bg-ink text-bone hover:bg-ink-200" : "border border-line text-bone hover:border-bone/40"
                  }`}
                >
                  {plan.cta} <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
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
