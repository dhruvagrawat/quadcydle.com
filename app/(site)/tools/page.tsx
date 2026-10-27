import Link from "next/link";
import { PageHero } from "../../../components/page-hero";
import { ToolIcon } from "../../../components/tools/tool-icon";
import { Reveal } from "../../../components/motion/reveal";
import { pageMeta } from "../../../lib/seo";
import { tools } from "../../../lib/tools/list";

export const metadata = pageMeta({
  title: "Free Website Tools: Speed Test, SEO Checker & More | Quadcydle",
  description:
    "Free tools to test your website: Google PageSpeed speed test, on-page SEO checker, Google & social preview, and an honest website cost calculator.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tools"
        title={"Check your site\nin *seconds.*"}
        intro="The same checks we run before every project — free, no sign-up. Test your speed, find SEO problems, preview how you look in Google, and price your next build."
      />
      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto grid max-w-site gap-4 md:grid-cols-2">
          {tools.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.06} className="h-full">
              <Link
                href={`/tools/${t.slug}`}
                data-cursor="Open"
                className="group relative flex h-full min-h-[32rem] flex-col justify-between overflow-hidden rounded-[2.4rem] border border-line bg-ink-50 p-8 transition-colors hover:border-bone/30 md:p-12"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-[36rem] w-[36rem] rounded-full opacity-20 blur-[8rem] transition-opacity duration-700 group-hover:opacity-40"
                  style={{ background: t.color }}
                />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-16 w-16 items-center justify-center rounded-[1.6rem] text-ink" style={{ background: t.color }}>
                    <ToolIcon name={t.icon} size={28} />
                  </span>
                  <span className="font-mono text-xs text-bone/55">0{i + 1}</span>
                </div>
                <div className="relative">
                  <h2 className="text-5xl font-medium tracking-[-0.04em] md:text-6xl">{t.title}</h2>
                  <p className="mt-4 max-w-[52rem] text-lg leading-relaxed text-bone/65">{t.short}</p>
                  <span className="mt-8 inline-flex items-center gap-3 text-md" style={{ color: t.color }}>
                    <span className="link-underline">Use it free</span>
                    <span aria-hidden className="transition-transform duration-500 ease-expo group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
