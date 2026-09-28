import Link from "next/link";
import { allPosts } from "../../lib/blog";
import { RollText } from "../header";
import { Reveal, SplitReveal } from "../motion/reveal";

/** The three newest articles, linked from the homepage. */
export function JournalTeaser() {
  const posts = allPosts.slice(0, 3);
  return (
    <section className="relative bg-ink px-6 pb-8 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-site">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-8">(06) — From the journal</p>
            <SplitReveal
              as="h2"
              text={"Straight answers,\n*no jargon.*"}
              className="text-display-sm font-medium tracking-[-0.045em]"
            />
          </div>
          <Link href="/blog" className="group inline-flex items-center gap-3 text-lg text-bone/70 hover:text-bone">
            <RollText>All articles</RollText> <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <Link
                href={`/blog/${p.slug}`}
                data-cursor="Read"
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-ink-50 transition-colors hover:border-bone/30"
              >
                <div className="aspect-[16/10] overflow-hidden bg-ink-100">
                  <img
                    src={p.mainImage}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-bone/40">
                    {p.category} · {p.readTime}
                  </span>
                  <span className="text-2xl font-medium leading-tight tracking-[-0.02em] transition-colors group-hover:text-ember md:text-3xl">
                    {p.title}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
