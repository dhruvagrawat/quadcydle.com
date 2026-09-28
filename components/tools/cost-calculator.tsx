"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";

/**
 * Indicative pricing, derived from the prices published on our service pages.
 * All figures GBP, excluding VAT. Update here if service prices change.
 */
const TYPES = [
  { id: "template", label: "Template website", sub: "Wix or Squarespace, up to ~8 pages", min: 499, max: 999, pages: 5, weeks: [1, 2], href: "/services/wix" },
  { id: "custom", label: "Custom-designed website", sub: "WordPress or Next.js, designed for your brand", min: 1499, max: 3000, pages: 6, weeks: [3, 6], href: "/services/custom-web" },
  { id: "store", label: "Online store", sub: "Shopify store with products, payments and shipping", min: 799, max: 1999, pages: 6, weeks: [2, 6], href: "/services/shopify" },
  { id: "webapp", label: "Web application", sub: "Portals, booking systems, SaaS, dashboards", min: 4999, max: 15000, pages: 0, weeks: [8, 16], href: "/services/custom-web" },
  { id: "mobile", label: "Mobile app", sub: "iOS & Android with React Native", min: 4999, max: 12999, pages: 0, weeks: [8, 16], href: "/services/mobile-app" },
] as const;

const EXTRAS = [
  { id: "copy", label: "We write the copy", min: 80, max: 150, perPage: true, for: ["template", "custom", "store"] },
  { id: "brand", label: "Logo & brand identity", min: 300, max: 800, for: ["template", "custom", "store", "webapp", "mobile"] },
  { id: "blog", label: "Blog / news section", min: 150, max: 300, for: ["template", "custom", "store"] },
  { id: "booking", label: "Online booking or appointments", min: 300, max: 800, for: ["template", "custom", "store", "webapp", "mobile"] },
  { id: "multilang", label: "Multiple languages", min: 400, max: 900, for: ["template", "custom", "store", "webapp", "mobile"] },
  { id: "members", label: "Logins, memberships or payments", min: 500, max: 1500, for: ["custom", "webapp", "mobile"] },
  { id: "integrations", label: "Integrations (CRM, ERP, accounting)", min: 300, max: 1200, for: ["custom", "store", "webapp", "mobile"] },
  { id: "products", label: "Import 50+ products", min: 150, max: 600, for: ["store"] },
  { id: "seo", label: "SEO setup & migration redirects", min: 200, max: 500, for: ["template", "custom", "store", "webapp"] },
] as const;

const CARE = [
  { id: "none", label: "No thanks", min: 0, max: 0 },
  { id: "hosting", label: "Managed hosting", min: 9, max: 49 },
  { id: "care", label: "Hosting + care plan", min: 58, max: 248 },
] as const;

const gbp = (n: number) => {
  const r = n < 100 ? Math.round(n) : n < 1000 ? Math.round(n / 10) * 10 : Math.round(n / 50) * 50;
  return `£${r.toLocaleString("en-GB")}`;
};

export function CostCalculator() {
  const [type, setType] = useState<(typeof TYPES)[number]["id"]>("custom");
  const [pages, setPages] = useState(8);
  const [extras, setExtras] = useState<string[]>(["seo"]);
  const [care, setCare] = useState<(typeof CARE)[number]["id"]>("care");

  const t = TYPES.find((x) => x.id === type)!;
  const available = EXTRAS.filter((e) => (e.for as readonly string[]).includes(type));
  const hasPages = t.pages > 0;

  const estimate = useMemo(() => {
    let min = t.min;
    let max = t.max;
    const extraPages = hasPages ? Math.max(0, pages - t.pages) : 0;
    min += extraPages * 60;
    max += extraPages * 120;
    available
      .filter((e) => extras.includes(e.id))
      .forEach((e) => {
        const n = "perPage" in e && e.perPage ? pages : 1;
        min += e.min * n;
        max += e.max * n;
      });
    const c = CARE.find((x) => x.id === care)!;
    const weeks = [t.weeks[0] + Math.floor(extras.length / 3), t.weeks[1] + Math.ceil(extras.length / 2)];
    return { min, max, monthly: c, weeks };
  }, [t, pages, extras, available, care, hasPages]);

  const summary = `${t.label}${hasPages ? `, ~${pages} pages` : ""}${
    extras.length ? `, with ${available.filter((e) => extras.includes(e.id)).map((e) => e.label.toLowerCase()).join(", ")}` : ""
  } (estimate ${gbp(estimate.min)}–${gbp(estimate.max)})`;

  const chip = (active: boolean) =>
    classNames(
      "rounded-full border px-5 py-3 text-md transition-colors",
      active ? "border-transparent bg-bone text-ink" : "border-line text-bone/70 hover:border-bone/40 hover:text-bone"
    );

  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-14">
        <fieldset>
          <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
            <span className="mr-4 font-mono text-sm text-ember">01</span>What are you building?
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {TYPES.map((x) => (
              <button
                key={x.id}
                type="button"
                onClick={() => {
                  setType(x.id);
                  setExtras((prev) => prev.filter((id) => EXTRAS.find((e) => e.id === id)?.for.includes(x.id as never)));
                }}
                aria-pressed={type === x.id}
                className={classNames(
                  "rounded-[1.6rem] border p-5 text-left transition-colors",
                  type === x.id ? "border-ember bg-ember/10" : "border-line hover:border-bone/30"
                )}
              >
                <span className="block text-lg">{x.label}</span>
                <span className="mt-1 block text-sm text-bone/55">{x.sub}</span>
              </button>
            ))}
          </div>
        </fieldset>

        {hasPages && (
          <fieldset>
            <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
              <span className="mr-4 font-mono text-sm text-ember">02</span>Roughly how many pages?
            </legend>
            <div className="flex items-center gap-6">
              <input
                type="range"
                min={1}
                max={40}
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="h-2 flex-1 accent-[#FF5A1F]"
                aria-label="Number of pages"
              />
              <span className="w-24 text-right text-5xl font-medium tabular-nums tracking-[-0.03em]">{pages}</span>
            </div>
            <p className="mt-2 text-sm text-bone/55">{t.pages} pages included in the base price; each extra page adds roughly £60–£120.</p>
          </fieldset>
        )}

        <fieldset>
          <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
            <span className="mr-4 font-mono text-sm text-ember">{hasPages ? "03" : "02"}</span>Anything extra?
          </legend>
          <div className="flex flex-wrap gap-3">
            {available.map((e) => (
              <button
                key={e.id}
                type="button"
                aria-pressed={extras.includes(e.id)}
                onClick={() => setExtras((x) => (x.includes(e.id) ? x.filter((i) => i !== e.id) : [...x, e.id]))}
                className={chip(extras.includes(e.id))}
              >
                {e.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
            <span className="mr-4 font-mono text-sm text-ember">{hasPages ? "04" : "03"}</span>Hosting & care after launch?
          </legend>
          <div className="flex flex-wrap gap-3">
            {CARE.map((c) => (
              <button key={c.id} type="button" aria-pressed={care === c.id} onClick={() => setCare(c.id)} className={chip(care === c.id)}>
                {c.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <aside className="lg:sticky lg:top-32 lg:self-start">
        <div className="overflow-hidden rounded-[2.4rem] bg-ember p-8 text-ink md:p-10">
          <p className="eyebrow !text-ink/60">Estimated project cost</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={`${estimate.min}-${estimate.max}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-4 text-6xl font-medium tracking-[-0.05em] md:text-7xl"
            >
              {gbp(estimate.min)}–{gbp(estimate.max)}
            </motion.p>
          </AnimatePresence>
          <p className="mt-2 text-sm text-ink/70">one-off, excluding VAT</p>

          <dl className="mt-8 space-y-3 border-t border-ink/15 pt-6 text-md">
            <div className="flex justify-between gap-4">
              <dt className="text-ink/70">Monthly after launch</dt>
              <dd>{estimate.monthly.max ? `£${estimate.monthly.min}–£${estimate.monthly.max}/mo` : "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink/70">Typical timeline</dt>
              <dd>
                {estimate.weeks[0]}–{estimate.weeks[1]} weeks
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href={`/contact?service=${encodeURIComponent(summary)}`}
              className="rounded-full bg-ink px-7 py-4 text-center text-md font-medium text-bone"
            >
              Get an exact quote in 48h →
            </Link>
            <Link href={t.href} className="rounded-full border border-ink/25 px-7 py-4 text-center text-md">
              See what&apos;s included
            </Link>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-bone/55">
          An indicative range based on the prices on our service pages — not a quote. Your written quote depends on
          content, integrations and design complexity.
        </p>
      </aside>
    </div>
  );
}
