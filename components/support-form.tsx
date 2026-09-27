"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { site, urgencyLevels } from "../lib/site";
import { Chip, Field, inputClass } from "./contact-form";


const issueTypes = [
  "Site down",
  "Security / hacked",
  "Email",
  "App bug",
  "Hosting",
  "Performance",
  "Content update",
  "Billing",
  "Other",
];

/** Support ticket. Like the contact form, it opens a pre-filled email to site.email. */
export function SupportForm() {
  const [urgency, setUrgency] = useState("");
  const [issue, setIssue] = useState("");
  const [form, setForm] = useState({ name: "", email: "", site: "", details: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[${urgency || "Support"}] ${issue || "Support request"} — ${form.site || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.site ? `Site / app: ${form.site}` : "",
      issue ? `Issue: ${issue}` : "",
      urgency ? `Urgency: ${urgency}` : "",
    ]
      .filter(Boolean)
      .concat(["", form.details])
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
          <p className="eyebrow mb-6 !text-ember">Ticket ready</p>
          <h2 className="text-5xl font-medium tracking-[-0.04em]">Hit send in your email app.</h2>
          <p className="mt-6 max-w-[56rem] text-lg leading-relaxed text-bone/60">
            Your ticket opened as a pre-filled email. If nothing opened, email{" "}
            <a href={`mailto:${site.email}`} className="link-underline text-bone">
              {site.email}
            </a>{" "}
            directly and put the urgency in the subject line.
          </p>
          <button onClick={() => setSent(false)} className="mt-8 rounded-full border border-line px-6 py-3 text-md text-bone/70">
            Back to the form
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={submit} className="space-y-14" exit={{ opacity: 0, y: -20 }}>
          <fieldset>
            <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
              <span className="mr-4 font-mono text-sm text-ember">01</span>How urgent is it?
            </legend>
            <div className="flex flex-wrap gap-3">
              {urgencyLevels.map((u) => (
                <Chip key={u.value} active={urgency === u.value} onClick={() => setUrgency(u.value)} color={u.color}>
                  {u.value} <span className="opacity-60">— {u.time.toLowerCase()}</span>
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
              <span className="mr-4 font-mono text-sm text-ember">02</span>What&apos;s going on?
            </legend>
            <div className="flex flex-wrap gap-3">
              {issueTypes.map((t) => (
                <Chip key={t} active={issue === t} onClick={() => setIssue(issue === t ? "" : t)} color="#EDEAE3">
                  {t}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-10">
            <legend className="mb-6 text-3xl font-medium tracking-[-0.02em]">
              <span className="mr-4 font-mono text-sm text-ember">03</span>Details
            </legend>
            <div className="grid gap-10 md:grid-cols-2">
              <Field label="Your name *">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Jane Smith" autoComplete="name" />
              </Field>
              <Field label="Email *">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="jane@company.com" autoComplete="email" />
              </Field>
            </div>
            <Field label="Affected site or app">
              <input value={form.site} onChange={(e) => setForm({ ...form, site: e.target.value })} className={inputClass} placeholder="acme.com" />
            </Field>
            <Field label="What happened? *">
              <textarea
                required
                rows={4}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className={inputClass + " resize-none"}
                placeholder="What did you expect, what happened instead, and when did it start?"
              />
            </Field>
          </fieldset>

          <div className="flex justify-end">
            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ember px-10 py-6 text-lg font-medium text-ink"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-bone transition-transform duration-500 ease-expo group-hover:translate-y-0" />
              <span className="relative">Open ticket</span>
              <span className="relative">→</span>
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
