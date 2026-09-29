import Link from "next/link";
import { tools } from "../../lib/tools/list";
import { RollText } from "../header";
import { Reveal } from "../motion/reveal";
import { ToolIcon } from "../tools/tool-icon";

/** Homepage band linking to the free tools. */
export function ToolsStrip() {
  return (
    <section className="relative bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto max-w-site rounded-[2.4rem] border border-line bg-ink-50 p-8 md:p-12">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">(07) — Free tools</p>
            <p className="max-w-[60rem] text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
              Check your site <span className="font-serif font-normal italic">right now.</span>
            </p>
          </div>
          <Link href="/tools" className="group inline-flex items-center gap-3 text-lg text-bone/70 hover:text-bone">
            <RollText>All tools</RollText> <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.06} className="h-full">
              <Link
                href={`/tools/${t.slug}`}
                className="group flex h-full flex-col gap-6 rounded-[1.6rem] border border-line p-6 transition-colors hover:border-bone/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full text-ink transition-transform duration-500 ease-expo group-hover:-rotate-12 group-hover:scale-110" style={{ background: t.color }}>
                  <ToolIcon name={t.icon} size={20} />
                </span>
                <span>
                  <span className="block text-xl font-medium tracking-[-0.02em]">{t.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-bone/55">{t.short}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
