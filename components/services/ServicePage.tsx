"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SITE_URL } from "../../lib/seo";
import { pillars } from "../../lib/site";
import { RollText } from "../header";
import { Counter } from "../motion/counter";
import { useIntroDone } from "../motion/intro";
import { Magnetic } from "../motion/magnetic";
import { EASE, Reveal, SplitReveal } from "../motion/reveal";
import {
  Globe, ShoppingBag, Layout, Code2, Server, Database,
  Smartphone, Figma, Headphones, Mail, Shield, HardDrive,
  Activity, Search, LifeBuoy, Rocket, Store, Zap, Clock,
  CheckCircle2, Users, Lock, BarChart3, RefreshCw, Wrench,
  Bug, Star, ArrowUpRight, FileText, Layers, Cpu, Cloud,
  Settings, Package, TrendingUp, AlertCircle, Eye, Gauge,
  CreditCard, Truck,
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

export interface AddOn {
  title: string;
  price: string;
  href: string;
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
  /** Optional extras listed under pricing. */
  addOns?: AddOn[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

function FeatureCard({ feature, accent, index }: { feature: Feature; accent: string; index: number }) {
  const Icon = iconMap[feature.icon] ?? Zap;
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <div
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
        }}
        className="group relative h-full overflow-hidden rounded-[2rem] border border-line bg-ink-50 p-8 md:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(40rem circle at ${pos.x}% ${pos.y}%, ${accent}22, transparent 60%)` }}
        />
        <div className="relative flex items-start justify-between">
          <span
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-line transition-colors duration-500 group-hover:border-transparent group-hover:text-ink"
          >
            <span
              aria-hidden
              className="absolute h-14 w-14 scale-0 rounded-full transition-transform duration-500 ease-expo group-hover:scale-100"
              style={{ background: accent }}
            />
            <Icon size={20} strokeWidth={1.5} className="relative" />
          </span>
          <span className="font-mono text-xs text-bone/30">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="relative mt-10 text-2xl font-medium tracking-[-0.02em]">{feature.title}</h3>
        <p className="relative mt-3 text-md leading-relaxed text-bone/55">{feature.description}</p>
      </div>
    </Reveal>
  );
}

function Process({ steps, accent }: { steps: ProcessStep[]; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.5"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-16">
      <div className="absolute left-[1.9rem] top-0 h-full w-px bg-line md:left-0 md:right-0 md:top-[1.9rem] md:h-px md:w-full">
        <motion.div
          className="absolute inset-0 origin-top md:origin-left"
          style={{ background: accent, scaleY: fill }}
        />
      </div>
      <ol
        className="relative grid gap-12 md:gap-8"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(18rem, 1fr))` }}
      >
        {steps.map((step, i) => (
          <Reveal as="li" key={step.step} delay={i * 0.1} className="relative pl-20 md:pl-0">
            <span
              className="absolute left-0 top-0 flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border border-line bg-ink font-mono text-sm md:relative"
            >
              {String(step.step).padStart(2, "0")}
            </span>
            <h3 className="text-2xl font-medium tracking-[-0.02em] md:mt-8">{step.title}</h3>
            <p className="mt-3 text-md leading-relaxed text-bone/55">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function FAQAccordion({ items, accent }: { items: FAQItem[]; accent: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.question} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="text-xl font-medium tracking-[-0.01em] md:text-2xl">{item.question}</span>
              <span
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-500"
                style={isOpen ? { background: accent, borderColor: accent, color: "#0A0A0B" } : undefined}
              >
                <span className="absolute h-px w-4 bg-current" />
                <span
                  className="absolute h-4 w-px bg-current transition-transform duration-500 ease-expo"
                  style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[72rem] pb-8 text-md leading-relaxed text-bone/60">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="eyebrow mb-6">{eyebrow}</p>
      <SplitReveal as="h2" text={title} className="text-6xl font-medium tracking-[-0.045em] md:text-7xl" />
    </div>
  );
}

export function ServicePage({
  tag,
  accentColor = "#FF5A1F",
  title,
  subtitle,
  heroImage,
  stats,
  features,
  process,
  pricingTitle = "Simple, transparent pricing",
  pricing,
  faq,
  addOns,
  ctaTitle = "Ready to get started?",
  ctaSubtitle = "Let's talk about your project. We'll put together a tailored plan and quote within 48 hours.",
  ctaHref = "/contact",
  ctaLabel = "Get a free quote",
}: ServicePageProps) {
  const play = useIntroDone();
  const pathname = usePathname();
  const pillar = pillars.find((p) => p.services.some((s) => s.href === pathname));
  const related = pillar?.services.filter((s) => s.href !== pathname) ?? [];

  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const clip = useTransform(scrollYProgress, [0, 0.35], ["inset(8% 6% 8% 6% round 32px)", "inset(0% 0% 0% 0% round 24px)"]);

  // Structured data describing exactly what's visible on this page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: tag,
        serviceType: tag,
        description: subtitle,
        url: `${SITE_URL}${pathname}`,
        provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Quadcydle", url: SITE_URL },
        ...(pricing?.some((t) => typeof t.price === "number") && {
          offers: pricing
            .filter((t) => typeof t.price === "number")
            .map((t) => ({
              "@type": "Offer",
              name: t.name,
              description: t.description,
              price: t.price,
              priceCurrency: "GBP",
              ...(t.period && { priceSpecification: { "@type": "UnitPriceSpecification", price: t.price, priceCurrency: "GBP", unitText: t.period === "mo" ? "MONTH" : t.period } }),
            })),
        }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 2, name: tag, item: `${SITE_URL}${pathname}` },
        ],
      },
    ],
  };

  return (
    <div className="text-bone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-[calc(var(--navigation-height)+6rem)] md:px-10 md:pb-24 md:pt-[calc(var(--navigation-height)+10rem)]">
        <div
          className="pointer-events-none absolute -right-[10%] -top-[25%] h-[70vh] w-[70vh] rounded-full opacity-20 blur-[7rem] md:blur-[14rem]"
          style={{ background: accentColor }}
        />
        <div className="relative mx-auto max-w-site">
          <motion.nav
            aria-label="Breadcrumb"
            className="eyebrow mb-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={play ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Link href="/services" className="hover:text-bone">Services</Link>
            {pillar && (
              <>
                <span>/</span>
                <Link href={`/services#${pillar.id}`} className="hover:text-bone">{pillar.title}</Link>
              </>
            )}
            <span>/</span>
            <span className="flex items-center gap-2 text-bone/80">
              <span className="h-2 w-2 rounded-full" style={{ background: accentColor }} />
              {tag}
            </span>
          </motion.nav>

          <SplitReveal
            as="h1"
            text={title}
            play={play}
            delay={0.1}
            stagger={0.05}
            className="max-w-[130rem] text-display-sm font-medium tracking-[-0.05em]"
          />

          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={play ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          >
            <p className="max-w-[60rem] text-lg leading-relaxed text-bone/65 md:text-xl">{subtitle}</p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Magnetic>
                <Link
                  href={ctaHref}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-5 text-md font-medium text-ink"
                  style={{ background: accentColor }}
                >
                  <span className="absolute inset-0 translate-y-full rounded-full bg-bone transition-transform duration-500 ease-expo group-hover:translate-y-0" />
                  <span className="relative"><RollText>{ctaLabel}</RollText></span>
                  <ArrowUpRight size={16} className="relative" />
                </Link>
              </Magnetic>
              {pricing && pricing.length > 0 && (
                <a
                  href="#pricing"
                  className="group inline-flex items-center rounded-full border border-line px-8 py-5 text-md text-bone/80 transition-colors hover:border-bone/40 hover:text-bone"
                >
                  <RollText>See pricing</RollText>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HERO IMAGE (parallax) ─────────────────────────────────────── */}
      {heroImage && (
        <section className="px-6 md:px-10">
          <motion.div
            ref={imageRef}
            style={{ clipPath: clip }}
            className="relative mx-auto aspect-[4/3] max-w-site overflow-hidden bg-ink-100 md:aspect-[21/9]"
          >
            <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
              <Image src={heroImage} alt="" fill sizes="100vw" className="object-cover" priority />
            </motion.div>
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{ background: `linear-gradient(to top, #0A0A0B 0%, transparent 60%), ${accentColor}22` }}
            />
          </motion.div>
        </section>
      )}

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      {stats && stats.length > 0 && (
        <section className="px-6 pt-16 md:px-10 md:pt-24">
          <div className="mx-auto grid max-w-site grid-cols-2 border-t border-line md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="border-b border-line py-10 pr-6 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <Counter value={stat.value} className="block text-4xl font-medium tracking-[-0.045em] sm:text-6xl md:text-7xl" />
                <p className="mt-3 text-sm text-bone/50">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ─── FEATURES ─────────────────────────────────────────────────── */}
      <section className="px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-site">
          <SectionTitle eyebrow="What's included" title={"Everything handled,\n*nothing* bolted on."} />
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} accent={accentColor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────── */}
      {process && process.length > 0 && (
        <section className="border-t border-line px-6 py-24 md:px-10 md:py-40">
          <div className="mx-auto max-w-site">
            <SectionTitle eyebrow="How it works" title={"From first call\nto *live.*"} />
            <Process steps={process} accent={accentColor} />
          </div>
        </section>
      )}

      {/* ─── PRICING ──────────────────────────────────────────────────── */}
      {pricing && pricing.length > 0 && (
        <section id="pricing" className="scroll-mt-24 border-t border-line px-6 py-24 md:px-10 md:py-40">
          <div className="mx-auto max-w-site">
            <SectionTitle eyebrow="Pricing" title={pricingTitle} />
            <div
              className={`mt-16 grid gap-4 ${
                pricing.length === 1 ? "max-w-[64rem]" : pricing.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
              }`}
            >
              {pricing.map((tier, i) => (
                <Reveal key={tier.name} delay={i * 0.08} className="h-full">
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 md:p-10 ${
                      tier.highlighted ? "border-transparent text-ink" : "border-line bg-ink-50"
                    }`}
                    style={tier.highlighted ? { background: accentColor } : undefined}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium">{tier.name}</h3>
                      {tier.badge && (
                        <span
                          className={`rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest ${
                            tier.highlighted ? "bg-ink text-bone" : "bg-bone text-ink"
                          }`}
                        >
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <p className={`mt-3 text-sm leading-relaxed ${tier.highlighted ? "text-ink/70" : "text-bone/50"}`}>
                      {tier.description}
                    </p>

                    <div className={`my-8 flex items-end gap-2 border-b pb-8 ${tier.highlighted ? "border-ink/15" : "border-line"}`}>
                      <span className="text-7xl font-medium tracking-[-0.05em]">
                        {typeof tier.price === "number" ? `£${tier.price.toLocaleString("en-GB")}` : tier.price}
                      </span>
                      {tier.period && (
                        <span className={`mb-2 text-md ${tier.highlighted ? "text-ink/60" : "text-bone/55"}`}>/{tier.period}</span>
                      )}
                    </div>

                    <ul className="mb-10 flex-1 space-y-3">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0"
                            strokeWidth={1.5}
                            style={{ color: tier.highlighted ? "#0A0A0B" : accentColor }}
                          />
                          <span className={tier.highlighted ? "text-ink/80" : "text-bone/70"}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={tier.href ?? "/contact"}
                      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full py-4 text-md font-medium ${
                        tier.highlighted ? "bg-ink text-bone" : "border border-line text-bone"
                      }`}
                    >
                      <RollText>{tier.cta}</RollText>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
            {addOns && addOns.length > 0 && (
              <div className="mt-20">
                <p className="eyebrow mb-6">Optional add-ons</p>
                <ul className="border-t border-line">
                  {addOns.map((a) => (
                    <li key={a.title}>
                      <Link
                        href={a.href}
                        className="group flex items-center justify-between gap-6 border-b border-line py-6"
                      >
                        <span className="text-2xl font-medium tracking-[-0.02em] transition-transform duration-500 ease-expo group-hover:translate-x-3">
                          {a.title}
                        </span>
                        <span className="flex items-center gap-4 text-md text-bone/60">
                          {a.price}
                          <ArrowUpRight size={18} style={{ color: accentColor }} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="mt-8 text-sm text-bone/55">
              All prices exclude VAT.{" "}
              <Link href="/contact" className="link-underline text-bone/70">
                Need something custom? Talk to us.
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      {faq && faq.length > 0 && (
        <section className="border-t border-line px-6 py-24 md:px-10 md:py-40">
          <div className="mx-auto grid max-w-site gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
            <div>
              <SectionTitle eyebrow="FAQ" title={"Good\n*questions.*"} />
              <p className="mt-6 max-w-[36rem] text-md leading-relaxed text-bone/50">
                Not seeing yours?{" "}
                <Link href="/contact" className="link-underline text-bone">
                  Ask us anything.
                </Link>
              </p>
            </div>
            <Reveal>
              <FAQAccordion items={faq} accent={accentColor} />
            </Reveal>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="relative mx-auto max-w-site overflow-hidden rounded-[2.4rem] p-10 text-ink md:p-20">
          <div className="absolute inset-0" style={{ background: accentColor }} />
          <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div>
              <h2 className="text-6xl font-medium leading-[0.95] tracking-[-0.045em] md:text-7xl">{ctaTitle}</h2>
              <p className="mt-6 max-w-[56rem] text-lg text-ink/70">{ctaSubtitle}</p>
            </div>
            <div className="md:justify-self-end">
              <Magnetic>
                <Link
                  href={ctaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-10 py-6 text-md font-medium text-bone"
                >
                  <RollText>{ctaLabel}</RollText>
                  <ArrowUpRight size={16} />
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── RELATED ──────────────────────────────────────────────────── */}
      {pillar && related.length > 0 && (
        <section className="border-t border-line px-6 py-20 md:px-10">
          <div className="mx-auto max-w-site">
            <p className="eyebrow mb-8">More in {pillar.title}</p>
            <ul className="flex flex-wrap gap-3">
              {related.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 text-md text-bone/70 transition-colors hover:border-bone/40 hover:text-bone"
                  >
                    <RollText>{s.title}</RollText>
                    <span aria-hidden style={{ color: pillar.color }}>↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
