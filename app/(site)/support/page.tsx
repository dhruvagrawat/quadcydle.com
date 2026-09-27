import { Metadata } from "next";
import { PageHero } from "../../../components/page-hero";
import { SupportForm } from "../../../components/support-form";
import { site, urgencyLevels } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Support — Quadcydle",
  description: "Existing Quadcydle clients: open a support ticket and see our response times.",
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Client support"
        title={"Something broken?\nWe're *on it.*"}
        intro="Existing clients can open a ticket below. Tell us how urgent it is and we'll respond inside the window for that level."
      />

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-site">
          <p className="eyebrow mb-8">Response times</p>
          <div className="grid gap-px overflow-hidden rounded-[2.4rem] border border-line bg-line md:grid-cols-4">
            {urgencyLevels.map((u) => (
              <div key={u.value} className="bg-ink p-8 md:p-10">
                <p className="flex items-center gap-3 text-md">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: u.color }} />
                  {u.value}
                </p>
                <p className="mt-8 text-4xl font-medium tracking-[-0.03em]">{u.time}</p>
                <p className="mt-3 text-sm leading-relaxed text-bone/50">{u.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-bone/40">
            Response times apply to clients on an active care or support plan, during business hours (Mon–Fri
            9am–6pm UK). Critical issues are monitored 24/7.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto grid max-w-site gap-16 md:grid-cols-[1fr_2.2fr] md:gap-24">
          <aside className="space-y-6 md:sticky md:top-32 md:self-start">
            <p className="text-3xl font-medium leading-tight tracking-[-0.02em]">Open a ticket</p>
            <p className="text-md leading-relaxed text-bone/55">
              The more detail the better: the page or feature affected, what you expected, and when it started.
              Screenshots help — attach them in your email app before sending.
            </p>
            <a href={`mailto:${site.email}`} className="link-underline inline-block text-lg">
              {site.email}
            </a>
          </aside>
          <SupportForm />
        </div>
      </section>
    </>
  );
}
