"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScoreRing, scoreColor } from "./score-ring";
import { UrlForm } from "./url-form";

type Strategy = "mobile" | "desktop";

type Result = {
  url: string;
  strategy: Strategy;
  scores: { key: string; label: string; score: number }[];
  lab: { label: string; value: string; score: number; hint: string }[];
  field: { label: string; value: string; rating: string }[] | null;
  opportunities: { title: string; savings: string; description: string }[];
  screenshot?: string;
};

// Optional: a PageSpeed Insights API key (restrict it to your domain in Google
// Cloud). Without one, Google's shared free quota is used and may be busy.
const API_KEY = process.env.NEXT_PUBLIC_PAGESPEED_API_KEY;

const CATEGORIES: [string, string][] = [
  ["performance", "Performance"],
  ["accessibility", "Accessibility"],
  ["best-practices", "Best practices"],
  ["seo", "SEO"],
];

const LAB: [string, string, string][] = [
  ["largest-contentful-paint", "Largest Contentful Paint", "How long until the main content appears. Aim for under 2.5 s."],
  ["total-blocking-time", "Total Blocking Time", "How long the page is too busy to respond to taps. Aim for under 200 ms."],
  ["cumulative-layout-shift", "Cumulative Layout Shift", "How much the layout jumps around while loading. Aim for under 0.1."],
  ["first-contentful-paint", "First Contentful Paint", "When the first text or image shows up. Aim for under 1.8 s."],
  ["speed-index", "Speed Index", "How quickly the page visibly fills in. Aim for under 3.4 s."],
  ["server-response-time", "Server response", "How fast the server starts answering. Aim for under 600 ms."],
];

const FIELD: [string, string][] = [
  ["LARGEST_CONTENTFUL_PAINT_MS", "LCP"],
  ["INTERACTION_TO_NEXT_PAINT", "INP"],
  ["CUMULATIVE_LAYOUT_SHIFT_SCORE", "CLS"],
];

/* eslint-disable @typescript-eslint/no-explicit-any */
// Estimated time saved by an audit. Older Lighthouse versions report
// details.overallSavingsMs; newer ones report metricSavings per metric.
const savingsMs = (a: any): number =>
  a?.details?.overallSavingsMs ??
  Math.max(0, ...Object.entries(a?.metricSavings ?? {}).filter(([k]) => k !== "CLS").map(([, v]) => Number(v) || 0));

function parse(data: any, url: string, strategy: Strategy): Result {
  const lh = data.lighthouseResult ?? {};
  const audits = lh.audits ?? {};
  const categories = lh.categories ?? {};
  const exp = data.loadingExperience?.metrics;
  const fmtField = (k: string, v: number) =>
    k.startsWith("CUMULATIVE_LAYOUT_SHIFT") ? (v / 100).toFixed(2) : v >= 1000 ? `${(v / 1000).toFixed(1)} s` : `${v} ms`;
  return {
    url,
    strategy,
    scores: CATEGORIES.filter(([k]) => categories[k]).map(([k, label]) => ({
      key: k,
      label,
      score: Math.round((categories[k].score ?? 0) * 100),
    })),
    lab: LAB.filter(([k]) => audits[k]).map(([k, label, hint]) => ({
      label,
      value: audits[k].displayValue ?? "—",
      score: Math.round((audits[k].score ?? 0) * 100),
      hint,
    })),
    field: exp
      ? FIELD.filter(([k]) => exp[k]?.percentile !== undefined).map(([k, label]) => ({
          label,
          value: fmtField(k, exp[k].percentile),
          rating: exp[k].category,
        }))
      : null,
    opportunities: Object.values(audits as Record<string, any>)
      .filter((a) => (a.details?.type === "opportunity" || a.metricSavings) && a.score !== null && (a.score ?? 1) < 0.9 && savingsMs(a) > 0)
      .sort((a, b) => savingsMs(b) - savingsMs(a))
      .slice(0, 6)
      .map((a) => ({
        title: a.title,
        savings: a.displayValue || `~${(savingsMs(a) / 1000).toFixed(1)} s`,
        description: String(a.description ?? "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
      })),
    screenshot: audits["final-screenshot"]?.details?.data,
  };
}

const ratingColor: Record<string, string> = { FAST: "#C9F24B", AVERAGE: "#FFB020", SLOW: "#FF5A1F" };
const ratingLabel: Record<string, string> = { FAST: "Good", AVERAGE: "Needs improvement", SLOW: "Poor" };

export function SpeedTest() {
  const [strategy, setStrategy] = useState<Strategy>("mobile");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string; url?: string } | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!loading) return;
    const t0 = Date.now();
    const id = setInterval(() => setElapsed(Math.round((Date.now() - t0) / 1000)), 500);
    return () => clearInterval(id);
  }, [loading]);

  const run = async (input: string) => {
    const url = /^https?:\/\//i.test(input) ? input : `https://${input}`;
    setLoading(true);
    setError(null);
    setResult(null);
    setElapsed(0);
    const q = new URLSearchParams({ url, strategy });
    CATEGORIES.forEach(([k]) => q.append("category", k.toUpperCase().replace("-", "_")));
    if (API_KEY) q.set("key", API_KEY);
    try {
      const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${q}`);
      const data = await res.json();
      if (!res.ok) {
        const busy = res.status === 429;
        setError({
          message: busy
            ? "Google's free testing quota is busy right now. Try again in a minute — or open the full report directly on Google PageSpeed Insights."
            : data?.error?.message?.includes("FAILED_DOCUMENT_REQUEST") || data?.error?.message?.includes("ERRORED_DOCUMENT_REQUEST")
              ? "Google couldn't load that page. Check the address is public and working."
              : "Google couldn't test that page. Check the address and try again.",
          url,
        });
      } else {
        const parsed = parse(data, url, strategy);
        if (!parsed.scores.length) setError({ message: "Google returned an incomplete result. Try again, or open the full report.", url });
        else setResult(parsed);
      }
    } catch {
      setError({ message: "We couldn't reach Google PageSpeed. Check your connection and try again.", url });
    }
    setLoading(false);
  };

  const psiLink = (url: string) => `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}&form_factor=${strategy}`;

  return (
    <div>
      <UrlForm onSubmit={run} loading={loading} cta="Test speed">
        <div className="flex rounded-full border border-line p-1" role="radiogroup" aria-label="Device">
          {(["mobile", "desktop"] as const).map((s) => (
            <button
              key={s}
              type="button"
              role="radio"
              aria-checked={strategy === s}
              onClick={() => setStrategy(s)}
              className={classNames(
                "rounded-full px-4 py-3 text-sm capitalize transition-colors",
                strategy === s ? "bg-bone text-ink" : "text-bone/60 hover:text-bone"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </UrlForm>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 text-center">
            <div className="mx-auto mb-8 h-1 w-64 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full w-1/3 rounded-full bg-ember"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <p className="text-lg text-bone/70">Google is loading your page on a {strategy === "mobile" ? "mid-range phone over 4G" : "desktop"}…</p>
            <p className="mt-2 font-mono text-sm text-bone/55">{elapsed}s · usually 15–40 seconds</p>
          </motion.div>
        )}

        {error && !loading && (
          <motion.div key="error" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-[2rem] border border-ember/40 bg-ember/10 p-8">
            <p className="text-lg">{error.message}</p>
            {error.url && (
              <a href={psiLink(error.url)} target="_blank" rel="noopener noreferrer" className="link-underline mt-4 inline-block text-ember">
                Open in PageSpeed Insights ↗
              </a>
            )}
          </motion.div>
        )}

        {result && !loading && (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-14 space-y-16">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow mb-3">Results · {result.strategy}</p>
                <p className="break-all text-2xl">{result.url}</p>
              </div>
              <a href={psiLink(result.url)} target="_blank" rel="noopener noreferrer" className="link-underline text-md text-bone/70">
                Full report on Google PageSpeed Insights ↗
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 rounded-[2.4rem] border border-line bg-ink-50 p-8 md:grid-cols-4 md:p-12">
              {result.scores.map((s) => (
                <ScoreRing key={s.key} score={s.score} label={s.label} />
              ))}
            </div>

            {result.field && (
              <section>
                <h2 className="text-4xl font-medium tracking-[-0.03em]">Real-user Core Web Vitals</h2>
                <p className="mt-2 max-w-[64rem] text-md text-bone/60">
                  From Chrome users who visited this page over the last 28 days — this is what Google uses for rankings.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {result.field.map((m) => (
                    <div key={m.label} className="rounded-[2rem] border border-line p-6">
                      <p className="eyebrow">{m.label}</p>
                      <p className="mt-4 text-6xl font-medium tracking-[-0.04em]" style={{ color: ratingColor[m.rating] }}>
                        {m.value}
                      </p>
                      <p className="mt-2 text-sm text-bone/60">{ratingLabel[m.rating] ?? m.rating}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-4xl font-medium tracking-[-0.03em]">Lab measurements</h2>
                <ul className="mt-8 border-t border-line">
                  {result.lab.map((m) => (
                    <li key={m.label} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-line py-5">
                      <span className="flex items-center gap-3 text-lg">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: scoreColor(m.score) }} />
                        {m.label}
                      </span>
                      <span className="text-right text-2xl font-medium tabular-nums">{m.value}</span>
                      <span className="col-span-2 pl-6 text-sm text-bone/55">{m.hint}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {result.screenshot && (
                <figure>
                  <p className="eyebrow mb-4">What Google saw</p>
                  <img
                    src={result.screenshot}
                    alt={`Screenshot of ${result.url} as loaded by Google PageSpeed`}
                    className={classNames(
                      "rounded-[1.6rem] border border-line",
                      result.strategy === "mobile" ? "mx-auto max-h-[56rem]" : "w-full"
                    )}
                  />
                </figure>
              )}
            </section>

            {result.opportunities.length > 0 && (
              <section>
                <h2 className="text-4xl font-medium tracking-[-0.03em]">Biggest opportunities</h2>
                <p className="mt-2 text-md text-bone/60">Fixes Google estimates would make the biggest difference to load time.</p>
                <ol className="mt-8 space-y-3">
                  {result.opportunities.map((o, i) => (
                    <li key={o.title} className="rounded-[1.6rem] border border-line p-6">
                      <div className="flex items-baseline justify-between gap-6">
                        <span className="flex items-baseline gap-4 text-lg">
                          <span className="font-mono text-sm text-ember">0{i + 1}</span>
                          {o.title}
                        </span>
                        {o.savings && <span className="shrink-0 font-mono text-sm text-bone/60">{o.savings}</span>}
                      </div>
                      <p className="mt-2 pl-10 text-sm leading-relaxed text-bone/55">{o.description}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <div className="flex flex-col items-start justify-between gap-6 rounded-[2.4rem] bg-ember p-10 text-ink md:flex-row md:items-center">
              <div>
                <p className="text-4xl font-medium tracking-[-0.03em]">Want these fixed for you?</p>
                <p className="mt-2 text-md text-ink/70">A full website audit turns this into a prioritised fix list — or we can just fix it.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/website-audit" className="rounded-full bg-ink px-7 py-4 text-md font-medium text-bone">
                  Book an audit
                </Link>
                <Link href={`/contact?service=${encodeURIComponent(`speed fixes for ${result.url}`)}`} className="rounded-full border border-ink/30 px-7 py-4 text-md">
                  Ask us to fix it
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
