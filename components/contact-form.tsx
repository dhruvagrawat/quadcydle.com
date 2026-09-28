"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { pillars, site } from "../lib/site";
import { EASE } from "./motion/reveal";

const budgets = ["< £1k", "£1k – £5k", "£5k – £15k", "£15k+", "Not sure yet"];
const timelines = ["ASAP", "This month", "This quarter", "Just exploring"];

export function Chip({
  active,
  onClick,
  children,
  color = "#FF5A1F",
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={classNames(
        "relative overflow-hidden rounded-full border px-5 py-3 text-md transition-colors duration-300",
        active ? "border-transparent text-ink" : "border-line text-bone/70 hover:border-bone/40 hover:text-bone"
      )}
    >
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: color }}
        initial={false}
        animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />
      <span className="relative">{children}</span>
    </button>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="group block border-b border-line pb-3 transition-colors focus-within:border-ember">
      <span className="eyebrow mb-2 block group-focus-within:text-ember">{label}</span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full bg-transparent text-2xl text-bone placeholder:text-bone/25 outline-none md:text-3xl";

/**
 * A short project brief. There's no backend yet, so submitting opens the
 * visitor's email app with the brief filled in, addressed to site.email.
 */
export function ContactForm() {
  const params = useSearchParams();
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState<string | null>(null);

  // /contact?service=Shopify pre-fills the brief from a service page.
  useEffect(() => {
    const service = params.get("service");
    if (service) setForm((f) => (f.message ? f : { ...f, message: `I'm interested in ${service}. ` }));
  }, [params]);

  const toggle = (id: string) => setNeeds((n) => (n.includes(id) ? n.filter((x) => x !== id) : [...n, id]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company / website: ${form.company}` : "",
      needs.length ? `Needs help with: ${needs.join(", ")}` : "",
      budget ? `Budget: ${budget}` : "",
      timeline ? `Timeline: ${timeline}` : "",
    ].filter(Boolean);
    const body = [...details, "", form.message].join("\n");
    const subject = `New project — ${form.company || form.name}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(body);
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2.4rem] border border-line bg-ink-50 p-10 md:p-14"
        >
          <p className="eyebrow mb-6 !text-ember">Almost there</p>
          <h2 className="text-5xl font-medium tracking-[-0.04em] md:text-6xl">Your brief is ready to send.</h2>
          <p className="mt-6 max-w-[56rem] text-lg leading-relaxed text-bone/60">
            Your email app should have opened with everything filled in — just hit send. If it didn&apos;t, copy the
            brief below and email it to{" "}
            <a href={`mailto:${site.email}`} className="link-underline text-bone">
              {site.email}
            </a>
            . We reply within {site.replyTime}.
          </p>
          <pre className="mt-8 max-h-80 overflow-auto whitespace-pre-wrap rounded-2xl bg-ink p-6 font-mono text-sm text-bone/70">
            {sent}
          </pre>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => navigator.clipboard?.writeText(sent)}
              className="rounded-full bg-bone px-6 py-3 text-md font-medium text-ink transition-colors hover:bg-ember"
            >
              Copy brief
            </button>
            <button onClick={() => setSent(null)} className="rounded-full border border-line px-6 py-3 text-md text-bone/70">
              Edit
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={submit} className="space-y-14" exit={{ opacity: 0, y: -20 }}>
          <fieldset>
            <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
              <span className="mr-4 font-mono text-sm text-ember">01</span>What do you need help with?
            </legend>
            <div className="flex flex-wrap gap-3">
              {pillars.map((p) => (
                <Chip key={p.id} active={needs.includes(p.title)} onClick={() => toggle(p.title)} color={p.color}>
                  {p.title}{" "}
                  <span className="hidden opacity-60 md:inline">— {p.services.slice(0, 2).map((s) => s.title).join(", ")}…</span>
                </Chip>
              ))}
              <Chip active={needs.includes("Something else")} onClick={() => toggle("Something else")} color="#EDEAE3">
                Something else
              </Chip>
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
              <span className="mr-4 font-mono text-sm text-ember">02</span>Rough budget?
            </legend>
            <div className="flex flex-wrap gap-3">
              {budgets.map((b) => (
                <Chip key={b} active={budget === b} onClick={() => setBudget(budget === b ? "" : b)}>
                  {b}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
              <span className="mr-4 font-mono text-sm text-ember">03</span>When do you want to start?
            </legend>
            <div className="flex flex-wrap gap-3">
              {timelines.map((t) => (
                <Chip key={t} active={timeline === t} onClick={() => setTimeline(timeline === t ? "" : t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-10">
            <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
              <span className="mr-4 font-mono text-sm text-ember">04</span>About you
            </legend>
            <div className="grid gap-10 md:grid-cols-2">
              <Field label="Your name *">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Smith"
                  className={inputClass}
                  autoComplete="name"
                />
              </Field>
              <Field label="Email *">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className={inputClass}
                  autoComplete="email"
                />
              </Field>
            </div>
            <Field label="Company or website">
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="acme.com"
                className={inputClass}
                autoComplete="organization"
              />
            </Field>
            <Field label="Tell us about the project *">
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you trying to achieve? Any deadlines?"
                className={inputClass + " resize-none"}
              />
            </Field>
          </fieldset>

          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[44rem] text-sm text-bone/55">
              Sending opens your email app with this brief filled in. We reply within {site.replyTime}.
            </p>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ember px-10 py-6 text-lg font-medium text-ink"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-bone transition-transform duration-500 ease-expo group-hover:translate-y-0" />
              <span className="relative">Send brief</span>
              <span className="relative transition-transform duration-500 ease-expo group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
