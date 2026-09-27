import { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../../components/contact-form";
import { PageHero } from "../../../components/page-hero";
import { site } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Start a project — Quadcydle",
  description: `Tell us about your project. We reply within ${site.replyTime} with ideas and a no-obligation quote.`,
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title={"Let's build\nsomething *good.*"}
        intro={`Four quick questions and we'll come back within ${site.replyTime} with ideas and a written quote within ${site.quoteTime}. No sales scripts.`}
      />
      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto grid max-w-site gap-16 md:grid-cols-[1fr_2.2fr] md:gap-24">
          <aside className="order-2 space-y-10 md:order-1 md:sticky md:top-32 md:self-start">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a href={`mailto:${site.email}`} className="link-underline text-2xl">
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Reply time</p>
              <p className="text-2xl">Within {site.replyTime}</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Elsewhere</p>
              <ul className="space-y-1 text-lg text-bone/70">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="link-underline">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-line p-6 text-md leading-relaxed text-bone/60">
              Already a client and something&apos;s broken?{" "}
              <a href="/support" className="link-underline text-bone">
                Go to support →
              </a>
            </div>
          </aside>
          <div className="order-1 md:order-2">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
