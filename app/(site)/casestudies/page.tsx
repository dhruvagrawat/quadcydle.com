import { Metadata } from "next";
import { Counter } from "../../../components/motion/counter";
import { Parallax } from "../../../components/motion/parallax";
import { Reveal } from "../../../components/motion/reveal";
import { PageHero } from "../../../components/page-hero";
import { caseStudies } from "../../../lib/site";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Case Studies & Client Results | Quadcydle",
  description:
    "How Quadcydle has helped businesses grow organic traffic, bookings and revenue — the challenge, what we did and the results, project by project.",
  path: "/casestudies",
});

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow={`Selected work — ${caseStudies.length} projects`}
        title={"Real businesses.\n*Real* results."}
        intro="A few of the businesses we've built, hosted, run and grown — and the numbers that changed because of it."
      />

      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-site space-y-6">
          {caseStudies.map((study, i) => (
            <Reveal key={study.client}>
              <article className="group relative overflow-hidden rounded-[2.4rem] border border-line bg-ink-50">
                <Parallax speed={0.15} className="pointer-events-none absolute -right-40 -top-20 h-[60rem] w-[60rem]">
                  <div
                    className="h-full w-full rounded-full opacity-25 blur-[6rem] transition-opacity md:blur-[12rem] duration-700 group-hover:opacity-50"
                    style={{ background: study.color }}
                  />
                </Parallax>

                <div className="relative grid gap-12 p-8 md:grid-cols-[1.1fr_1fr] md:gap-20 md:p-14">
                  <div>
                    <div className="mb-10 flex flex-wrap items-center gap-4">
                      <span className="font-mono text-xs text-bone/55">
                        {String(i + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-line px-3 py-1 text-xs text-bone/70">{study.tag}</span>
                    </div>
                    <h2 className="text-7xl font-medium tracking-[-0.05em] md:text-8xl">{study.client}</h2>
                    <p className="mt-3 text-md text-bone/50">{study.industry}</p>

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                      <div>
                        <p className="eyebrow mb-3">The challenge</p>
                        <p className="text-md leading-relaxed text-bone/65">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="eyebrow mb-3">What we did</p>
                        <p className="text-md leading-relaxed text-bone/65">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-end">
                    <p className="eyebrow mb-4">Results</p>
                    <ul className="border-t border-line">
                      {study.results.map((r) => (
                        <li key={r.label} className="flex items-baseline justify-between gap-6 border-b border-line py-6">
                          <Counter
                            value={r.metric}
                            className="text-7xl font-medium tracking-[-0.05em] md:text-8xl"
                          />
                          <span className="text-right text-sm text-bone/55">{r.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
