"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { AiReport } from "../../lib/tools/ai-analyze";
import { CheckList, StatusCounts } from "./check-list";
import { ScoreRing } from "./score-ring";
import { UrlForm } from "./url-form";

const GROUPS = ["Access", "Structure", "Clarity", "Trust"];

export function AiChecker() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<AiReport | null>(null);

  const run = async (url: string) => {
    setLoading(true);
    setError(null);
    setReport(null);
    try {
      const res = await fetch(`/api/ai-check?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (!res.ok) setError(data.error ?? "Something went wrong.");
      else setReport(data);
    } catch {
      setError("We couldn't run the check. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <UrlForm onSubmit={run} loading={loading} cta="Check AI readability" />

      <AnimatePresence mode="wait">
        {loading && (
          <motion.p key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 text-center text-lg text-bone/70">
            Reading the page, robots.txt and llms.txt the way AI crawlers do…
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
              <ScoreRing score={report.score} label="AI readability" size={160} />
              <div>
                <p className="eyebrow mb-3">Checked</p>
                <p className="break-all text-2xl">{report.finalUrl}</p>
                <p className="mt-2 text-sm text-bone/55">
                  ~{report.words.toLocaleString("en-GB")} words readable without JavaScript
                  {report.readingEase !== null && ` · reading ease ${report.readingEase}/100`}
                </p>
                <StatusCounts checks={report.checks} />
              </div>
            </div>

            <section>
              <h2 className="text-4xl font-medium tracking-[-0.03em]">Which AI crawlers can read this page?</h2>
              <p className="mt-2 max-w-[70rem] text-md text-bone/60">
                Based on your robots.txt. Search bots decide whether you can appear in AI answers; training bots decide whether your
                content can be used to train models.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {report.bots.map((b) => (
                  <div key={b.name} className="rounded-[1.6rem] border border-line p-5">
                    <p className="flex items-center justify-between gap-3">
                      <span className="font-mono text-sm">{b.name}</span>
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: b.allowed ? "#C9F24B" : "#FF5A1F" }} />
                    </p>
                    <p className="mt-3 text-sm text-bone/85">{b.allowed ? "Allowed" : "Blocked"}{b.explicit ? " (named rule)" : ""}</p>
                    <p className="mt-1 text-xs leading-relaxed text-bone/55">
                      {b.owner} · {b.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <CheckList checks={report.checks} groups={GROUPS} />

            <div className="flex flex-col items-start justify-between gap-6 rounded-[2.4rem] bg-periwinkle p-10 text-ink md:flex-row md:items-center">
              <div>
                <p className="text-4xl font-medium tracking-[-0.03em]">Want AI to recommend you, not just read you?</p>
                <p className="mt-2 text-md text-ink/70">We audit your whole site, fix what&apos;s blocking AI, and track how AI assistants answer about your market.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/ai-readiness" className="rounded-full bg-ink px-7 py-4 text-md font-medium text-bone">
                  AI readiness audit
                </Link>
                <Link href="/services/ai-seo" className="rounded-full border border-ink/30 px-7 py-4 text-md">
                  AI search optimisation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
