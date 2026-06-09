"use client";

import { useState } from "react";
import Link from "next/link";

const issueTypes = [
  "Website is down / not loading",
  "Site hacked or security issue",
  "Email not working",
  "App crash or bug",
  "Hosting issue",
  "Performance problem",
  "Content update needed",
  "Billing question",
  "Other",
];

const urgencyLevels = [
  { label: "Critical — Site / app is completely down", value: "critical" },
  { label: "High — Major feature broken", value: "high" },
  { label: "Medium — Issue affecting some users", value: "medium" },
  { label: "Low — Minor issue or question", value: "low" },
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="text-white">
      {/* Hero */}
      <section className="px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-text">
          Support
        </p>
        <h1 className="mx-auto mb-6 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          We're here when you need us
        </h1>
        <p className="mx-auto max-w-xl text-lg text-primary-text">
          Existing clients can submit a support ticket below. For critical
          issues, WhatsApp us directly for the fastest response.
        </p>
      </section>

      {/* Quick help links */}
      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            { icon: "🚨", title: "Critical / Emergency", desc: "Site down, hacked, or major outage", href: "#ticket" },
            { icon: "📖", title: "Knowledge Base", desc: "Guides, how-tos and common fixes", href: "#" },
            { icon: "💬", title: "Chat on WhatsApp", desc: "Fastest way to reach us", href: "#" },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex flex-col rounded-2xl border border-transparent-white bg-glass-gradient p-6 transition-colors hover:border-white/20"
            >
              <span className="mb-3 text-3xl">{item.icon}</span>
              <h3 className="mb-1 font-semibold">{item.title}</h3>
              <p className="text-sm text-primary-text">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Support ticket form */}
      <section id="ticket" className="border-t border-transparent-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Submit a Support Ticket</h2>
          <p className="mb-10 text-primary-text">
            We aim to respond within 4 hours on business days. Critical issues
            are escalated immediately.
          </p>

          {submitted ? (
            <div className="rounded-3xl border border-transparent-white bg-glass-gradient p-12 text-center">
              <span className="mb-4 block text-6xl">✅</span>
              <h3 className="mb-3 text-2xl font-semibold">Ticket Received</h3>
              <p className="text-primary-text">
                We've received your support request and will respond shortly.
                For critical issues, please also reach out via WhatsApp.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-transparent-white bg-glass-gradient p-8 md:p-10"
            >
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary-text">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-transparent-white bg-white/5 px-4 py-3 text-white placeholder-primary-text outline-none focus:border-white/40 transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary-text">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-transparent-white bg-white/5 px-4 py-3 text-white placeholder-primary-text outline-none focus:border-white/40 transition-colors"
                      placeholder="jane@yourcompany.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-text">
                    Website / App URL
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-transparent-white bg-white/5 px-4 py-3 text-white placeholder-primary-text outline-none focus:border-white/40 transition-colors"
                    placeholder="https://yoursite.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-text">
                    Issue Type
                  </label>
                  <select className="w-full rounded-xl border border-transparent-white bg-background px-4 py-3 text-white outline-none focus:border-white/40 transition-colors">
                    <option value="">Select issue type…</option>
                    {issueTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-primary-text">
                    Urgency
                  </label>
                  <div className="space-y-2">
                    {urgencyLevels.map((level) => (
                      <label
                        key={level.value}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-transparent-white bg-white/5 px-4 py-3 transition-colors hover:border-white/20"
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={level.value}
                          className="accent-white"
                        />
                        <span className="text-sm">{level.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-text">
                    Describe the Issue
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-transparent-white bg-white/5 px-4 py-3 text-white placeholder-primary-text outline-none focus:border-white/40 transition-colors"
                    placeholder="What happened? When did it start? What have you already tried?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white py-4 text-sm font-semibold text-black transition-opacity hover:opacity-80"
                >
                  Submit Support Ticket →
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Response times */}
      <section className="border-t border-transparent-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold">Response Time SLAs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { urgency: "Critical", time: "Within 1 hour", desc: "Site down, security breach, data loss" },
              { urgency: "High", time: "Within 4 hours", desc: "Major feature broken, significant business impact" },
              { urgency: "Medium", time: "Within 24 hours", desc: "Feature degraded, workaround exists" },
              { urgency: "Low", time: "Within 48 hours", desc: "Minor issue, question, or content update" },
            ].map((item) => (
              <div
                key={item.urgency}
                className="rounded-2xl border border-transparent-white bg-glass-gradient p-6"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold">{item.urgency}</span>
                  <span className="text-sm font-medium text-green-400">{item.time}</span>
                </div>
                <p className="text-sm text-primary-text">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-primary-text">
            Response times apply to clients on active care or support plans during business hours (Mon–Fri 9am–6pm UK). Critical issues are monitored 24/7.
          </p>
        </div>
      </section>
    </div>
  );
}
