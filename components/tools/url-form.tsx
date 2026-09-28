"use client";

import { useState } from "react";

/** Big URL input used by the speed test and SEO checker. */
export function UrlForm({
  onSubmit,
  loading,
  cta,
  children,
  initial = "",
}: {
  onSubmit: (url: string) => void;
  loading: boolean;
  cta: string;
  children?: React.ReactNode;
  initial?: string;
}) {
  const [value, setValue] = useState(initial);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) onSubmit(value.trim());
      }}
      className="rounded-[2.4rem] border border-line bg-ink-50 p-3 md:p-4"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <label className="flex flex-1 items-center gap-3 px-4">
          <span className="sr-only">Website address</span>
          <span className="font-mono text-sm text-bone/40">https://</span>
          <input
            type="text"
            inputMode="url"
            autoComplete="url"
            spellCheck={false}
            value={value}
            onChange={(e) => setValue(e.target.value.replace(/^https?:\/\//i, ""))}
            placeholder="yourwebsite.com"
            className="w-full bg-transparent py-4 text-2xl text-bone placeholder:text-bone/25 focus:outline-none md:text-3xl"
            required
          />
        </label>
        {children}
        <button
          type="submit"
          disabled={loading}
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-ember px-8 py-5 text-md font-medium text-ink disabled:opacity-60"
        >
          <span className="absolute inset-0 translate-y-full rounded-full bg-bone transition-transform duration-500 ease-expo group-hover:translate-y-0" />
          <span className="relative">{loading ? "Analysing…" : cta}</span>
          {!loading && <span className="relative">→</span>}
        </button>
      </div>
    </form>
  );
}
