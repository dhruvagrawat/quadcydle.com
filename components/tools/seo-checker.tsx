"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { Check, SeoReport } from "../../lib/tools/seo-analyze";
import { ScoreRing } from "./score-ring";
import { UrlForm } from "./url-form";

const badge: Record<Check["status"], { label: string; cls: string; dot: string }> = {
  pass: { label: "Good", cls: "text-lime", dot: "#C9F24B" },
  warn: { label: "Improve", cls: "text-[#FFB020]", dot: "#FFB020" },
  fail: { label: "Fix", cls: "text-ember", dot: "#FF5A1F" },
  info: { label: "Info", cls: "text-bone/60", dot: "rgba(237,234,227,0.4)" },
};

const GROUPS: Check["group"][] = ["Content", "Technical", "Social", "Performance"];

export function SeoChecker() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<SeoReport | null>(null);
  const [onlyIssues, setOnlyIssues] = useState(false);

  const run = async (url: string) => {
    setLoading(true);
    setError(null);
    setReport(null);
    try {
      const res = await fetch(`/api/seo-check?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (!res.ok) setError(data.error ?? "Something went wrong.");
      else setReport(data);
    } catch {
      setError("We couldn't run the check. Please try again.");
    }
    setLoading(false);
  };

  const counts = report
    ? (["fail", "warn", "pass"] as const).map((s) => ({ s, n: report.checks.filter((c) => c.status === s).length }))
    : [];

  return (
    <div>
      <UrlForm onSubmit={run} loading={loading} cta="Check SEO" />

      <AnimatePresence mode="wait">
        {loading && (
          <motion.p key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 text-center text-lg text-bone/70">
            Fetching the page and running 20+ checks…
          </motion.p>
        )}
        {error && !loading && (
          <motion.div key="e" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-[2rem] border border-ember/40 bg-ember/10 p-8 text-lg">
            {error}
          </motion.div>
        )}
        {report && !loading && (
          <motion.div key="r" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-14 space-y-14">
            <div className="grid gap-10 rounded-[2.4rem] border border-line bg-ink-50 p-8 md:grid-cols-[auto_1fr] md:items-center md:p-12">
              <ScoreRing score={report.score} label="On-page score" size={160} />
              <div>
                <p className="eyebrow mb-3">Checked</p>
                <p className="break-all text-2xl">{report.finalUrl}</p>
                <p className="mt-2 text-sm text-bone/55">
                  HTTP {report.status} · {report.ms.toLocaleString("en-GB")} ms · {report.kb} KB HTML
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {counts.map(({ s, n }) => (
                    <span key={s} className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm">
                      <span className="h-2 w-2 rounded-full" style={{ background: badge[s].dot }} />
                      {n} {s === "fail" ? "to fix" : s === "warn" ? "to improve" : "passed"}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-medium tracking-[-0.03em]">Checks</h2>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-bone/70">
                <input type="checkbox" checked={onlyIssues} onChange={(e) => setOnlyIssues(e.target.checked)} className="h-4 w-4 accent-[#FF5A1F]" />
                Show issues only
              </label>
            </div>

            {GROUPS.map((g) => {
              const items = report.checks.filter((c) => c.group === g && (!onlyIssues || c.status === "fail" || c.status === "warn"));
              if (!items.length) return null;
              return (
                <section key={g}>
                  <p className="eyebrow mb-4">{g}</p>
                  <ul className="border-t border-line">
                    {items.map((c) => (
                      <li key={c.id} className="grid gap-2 border-b border-line py-5 md:grid-cols-[16rem_1fr_auto] md:items-baseline md:gap-8">
                        <span className="flex items-center gap-3 text-lg">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: badge[c.status].dot }} />
                          {c.label}
                        </span>
                        <span>
                          <span className="block break-words text-md text-bone/85">{c.value}</span>
                          {c.advice && <span className="mt-1 block text-sm leading-relaxed text-bone/55">{c.advice}</span>}
                        </span>
                        <span className={classNames("font-mono text-xs uppercase tracking-widest", badge[c.status].cls)}>{badge[c.status].label}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}

            <section className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="eyebrow mb-4">Heading outline</p>
                <ul className="max-h-[40rem] space-y-1.5 overflow-auto rounded-[1.6rem] border border-line p-6 font-mono text-sm" data-lenis-prevent>
                  {report.headings.length === 0 && <li className="text-bone/55">No headings found.</li>}
                  {report.headings.map((h, i) => (
                    <li key={i} style={{ paddingLeft: `${(h.level - 1) * 1.6}rem` }} className={h.level === 1 ? "text-bone" : "text-bone/65"}>
                      <span className="mr-2 text-ember">H{h.level}</span>
                      {h.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-4">How it looks when shared</p>
                <div className="overflow-hidden rounded-[1.6rem] border border-line bg-ink-50">
                  {report.preview.image ? (
                    <img src={report.preview.image} alt="" className="aspect-[1.91/1] w-full object-cover" />
                  ) : (
                    <div className="flex aspect-[1.91/1] items-center justify-center text-sm text-bone/55">No share image (og:image)</div>
                  )}
                  <div className="p-5">
                    <p className="text-xs uppercase text-bone/55">{report.preview.siteName}</p>
                    <p className="mt-1 text-lg font-medium">{report.preview.title || "No title"}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-bone/60">{report.preview.description || "No description"}</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex flex-col items-start justify-between gap-6 rounded-[2.4rem] bg-lime p-10 text-ink md:flex-row md:items-center">
              <div>
                <p className="text-4xl font-medium tracking-[-0.03em]">This checks one page. Your site has more.</p>
                <p className="mt-2 text-md text-ink/70">Our website audit crawls every page, checks speed and UX, and gives you a prioritised plan.</p>
              </div>
              <Link href="/services/website-audit" className="shrink-0 rounded-full bg-ink px-7 py-4 text-md font-medium text-bone">
                See the full audit →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
