import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../../components/page-hero";
import { ServicesExplorer } from "../../../components/services/explorer";
import { allServices, pillars } from "../../../lib/site";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services: Web Design, Hosting, Support & Growth | Quadcydle",
  description:
    "Websites, stores and apps; managed hosting and monitoring; care plans and workspace setup; marketplaces and launch packages — every Quadcydle service.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={`Services — ${allServices.length} ways we help`}
        title={"Everything your\nbusiness *runs on.*"}
        intro="Four pillars, one team. Pick the single thing you need today — or hand us the whole loop and never brief four different agencies again."
      >
        <div className="flex flex-wrap gap-2">
          {pillars.map((p) => (
            <Link
              key={p.id}
              href={`#${p.id}`}
              className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-bone/70 transition-colors hover:text-bone"
            >
              <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
              {p.title}
            </Link>
          ))}
        </div>
      </PageHero>
      <ServicesExplorer />
      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 rounded-[2.4rem] border border-line p-10 md:flex-row md:items-center md:p-14">
          <div>
            <p className="text-4xl font-medium tracking-[-0.03em] md:text-5xl">Not sure where to start?</p>
            <p className="mt-3 max-w-[56rem] text-md text-bone/60">
              A website audit is the quickest way to find out what&apos;s holding you back — speed, SEO and UX, in
              one written report.
            </p>
          </div>
          <Link
            href="/services/website-audit"
            className="shrink-0 rounded-full bg-bone px-8 py-5 text-md font-medium text-ink transition-colors hover:bg-ember"
          >
            Book an audit →
          </Link>
        </div>
      </section>
    </>
  );
}
