"use client";

import classNames from "classnames";
import { useState } from "react";

export type CheckItem = {
  id: string;
  group: string;
  label: string;
  status: "pass" | "warn" | "fail" | "info";
  value: string;
  advice?: string;
};

export const badge: Record<CheckItem["status"], { label: string; cls: string; dot: string }> = {
  pass: { label: "Good", cls: "text-lime", dot: "#C9F24B" },
  warn: { label: "Improve", cls: "text-[#FFB020]", dot: "#FFB020" },
  fail: { label: "Fix", cls: "text-ember", dot: "#FF5A1F" },
  info: { label: "Info", cls: "text-bone/60", dot: "rgba(237,234,227,0.4)" },
};

/** Grouped pass / improve / fix list shared by the SEO and AI checkers. */
export function CheckList({ checks, groups }: { checks: CheckItem[]; groups: string[] }) {
  const [onlyIssues, setOnlyIssues] = useState(false);
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-medium tracking-[-0.03em]">Checks</h2>
        <label className="flex cursor-pointer items-center gap-3 text-sm text-bone/70">
          <input type="checkbox" checked={onlyIssues} onChange={(e) => setOnlyIssues(e.target.checked)} className="h-4 w-4 accent-[#FF5A1F]" />
          Show issues only
        </label>
      </div>
      {groups.map((g) => {
        const items = checks.filter((c) => c.group === g && (!onlyIssues || c.status === "fail" || c.status === "warn"));
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
    </div>
  );
}

export function StatusCounts({ checks }: { checks: CheckItem[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {(["fail", "warn", "pass"] as const).map((s) => (
        <span key={s} className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm">
          <span className="h-2 w-2 rounded-full" style={{ background: badge[s].dot }} />
          {checks.filter((c) => c.status === s).length} {s === "fail" ? "to fix" : s === "warn" ? "to improve" : "passed"}
        </span>
      ))}
    </div>
  );
}
