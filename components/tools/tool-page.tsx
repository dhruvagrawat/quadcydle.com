import Link from "next/link";
import { SITE_URL } from "../../lib/seo";
import { tools, type Tool } from "../../lib/tools/list";
import { PageHero } from "../page-hero";
import { ToolIcon } from "./tool-icon";

/**
 * Shared layout for a free tool: hero, the tool itself, a plain-English guide,
 * FAQs, links to the other tools, and SoftwareApplication structured data.
 */
export function ToolPage({
  tool,
  heroTitle,
  intro,
  children,
  guide,
  faq,
  related,
}: {
  tool: Tool;
  heroTitle: string;
  intro: string;
  children: React.ReactNode;
  guide: { title: string; body: React.ReactNode }[];
  faq: { q: string; a: string }[];
  related: { title: string; href: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: `${tool.title} by Quadcydle`,
        url: `${SITE_URL}/tools/${tool.slug}`,
        description: tool.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any (web browser)",
        offers: { "@type": "Offer", price: 0, priceCurrency: "GBP" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Free tools", item: `${SITE_URL}/tools` },
          { "@type": "ListItem", position: 2, name: tool.title, item: `${SITE_URL}/tools/${tool.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={`Free tool — ${tool.title}`} title={heroTitle} intro={intro} />

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-site">{children}</div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-site gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-6">How to use the results</p>
            <p className="text-4xl font-medium leading-tight tracking-[-0.03em]">A plain-English guide</p>
            <Link href={tool.service.href} className="link-underline mt-8 inline-block text-md text-ember">
              {tool.service.title} →
            </Link>
          </div>
          <div className="article">
            {guide.map((g) => (
              <div key={g.title}>
                <h2>{g.title}</h2>
                {g.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-site gap-16 md:grid-cols-[1fr_2fr]">
          <p className="text-4xl font-medium tracking-[-0.03em]">Questions</p>
          <dl className="border-t border-line">
            {faq.map((f) => (
              <div key={f.q} className="border-b border-line py-6">
                <dt className="text-xl font-medium">{f.q}</dt>
                <dd className="mt-2 text-md leading-relaxed text-bone/65">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10">
        <div className="mx-auto max-w-site">
          <p className="eyebrow mb-8">More free tools</p>
          <div className="grid gap-4 md:grid-cols-3">
            {tools
              .filter((t) => t.slug !== tool.slug)
              .map((t) => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="group rounded-[2rem] border border-line bg-ink-50 p-8 transition-colors hover:border-bone/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full text-ink" style={{ background: t.color }}>
                    <ToolIcon name={t.icon} size={20} />
                  </span>
                  <span className="mt-6 block text-2xl font-medium tracking-[-0.02em] transition-colors group-hover:text-ember">{t.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-bone/55">{t.short}</span>
                </Link>
              ))}
          </div>
          {related.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="eyebrow mr-2">Related reading</span>
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="rounded-full border border-line px-4 py-2 text-sm text-bone/70 hover:border-bone/40 hover:text-bone">
                  {r.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
