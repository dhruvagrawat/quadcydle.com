"use client";

import { Metadata } from "next";
import { useState } from "react";

const contactDetails = [
  {
    icon: "✉️",
    label: "Email",
    value: "hello@quadcydle.com",
    href: "mailto:hello@quadcydle.com",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat with us",
    href: "#",
  },
  {
    icon: "🌐",
    label: "Socials",
    value: "@quadcydle",
    href: "#",
  },
];

const services = [
  "Web Design & Development",
  "SEO & Analytics",
  "Social Media Marketing",
  "Paid Advertising",
  "Hosting & Maintenance",
  "Mobile App Development",
  "Business Development",
  "Other",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center md:py-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-text">
          Get in Touch
        </p>
        <h1 className="mx-auto mb-6 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Let's build something great together
        </h1>
        <p className="mx-auto max-w-xl text-lg text-primary-text md:text-xl">
          Tell us about your project and we'll get back to you within one
          business day with ideas and a no-obligation quote.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">
          {/* Left: contact info */}
          <div>
            <h2 className="mb-8 text-2xl font-semibold">Contact Info</h2>
            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="mt-0.5 text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm text-primary-text">{item.label}</p>
                    <a
                      href={item.href}
                      className="font-medium hover:underline"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-transparent-white bg-glass-gradient p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-text">
                Response Time
              </p>
              <p className="text-primary-text">
                We typically respond within <strong className="text-white">24 hours</strong> on business days. For urgent requests, drop us a WhatsApp.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-transparent-white bg-glass-gradient p-8 md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="mb-4 text-6xl">🎉</span>
                <h3 className="mb-3 text-2xl font-semibold">Message Sent!</h3>
                <p className="text-primary-text">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary-text">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-transparent-white bg-white/5 px-4 py-3 text-white placeholder-primary-text outline-none focus:border-white/40 focus:ring-0 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary-text">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-transparent-white bg-white/5 px-4 py-3 text-white placeholder-primary-text outline-none focus:border-white/40 focus:ring-0 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-text">
                    Company / Website
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp / acme.com"
                    className="w-full rounded-xl border border-transparent-white bg-white/5 px-4 py-3 text-white placeholder-primary-text outline-none focus:border-white/40 focus:ring-0 transition-colors"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-text">
                    Service Interested In
                  </label>
                  <select
                    className="w-full rounded-xl border border-transparent-white bg-background px-4 py-3 text-white outline-none focus:border-white/40 transition-colors"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-text">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you trying to achieve? Any deadlines or budget in mind?"
                    className="w-full resize-none rounded-xl border border-transparent-white bg-white/5 px-4 py-3 text-white placeholder-primary-text outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white py-4 text-sm font-semibold text-black transition-opacity hover:opacity-80"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
