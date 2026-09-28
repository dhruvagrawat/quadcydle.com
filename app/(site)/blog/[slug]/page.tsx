import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCover } from "../../../../components/blog/post-cover";
import { ArticleAside } from "../../../../components/blog/toc";
import { Parallax } from "../../../../components/motion/parallax";
import { Reveal, SplitReveal } from "../../../../components/motion/reveal";
import { allPosts, getPostBySlug, getRelatedPosts } from "../../../../lib/blog";
import { prepareArticle } from "../../../../lib/blog/links";
import { pageMeta, SITE_URL } from "../../../../lib/seo";
import { pillars, site } from "../../../../lib/site";


export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const meta = pageMeta({
    title: `${post.seoTitle ?? post.title} | Quadcydle`,
    description: post.seoDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    image: `/blog/${post.slug}/og`,
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: post.publishedAt, tags: post.tags },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const { html, headings } = prepareArticle(post.content, `/blog/${post.slug}`);
  const related = getRelatedPosts(post);
  const index = allPosts.findIndex((p) => p.slug === post.slug);
  const newer = allPosts[index - 1];
  const older = allPosts[index + 1];

  const services = (post.services ?? [])
    .map((href) => {
      const pillar = pillars.find((p) => p.services.some((s) => s.href === href));
      const service = pillar?.services.find((s) => s.href === href);
      return pillar && service ? { ...service, pillar } : null;
    })
    .filter(Boolean) as { title: string; href: string; desc: string; pillar: (typeof pillars)[number] }[];

  const date = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        image: `${url}/og`,
        inLanguage: "en-GB",
        articleSection: post.category,
        author: { "@type": "Organization", name: post.author.name, url: `${SITE_URL}/about` },
        publisher: { "@id": `${SITE_URL}/#organization`, "@type": "Organization", name: site.name, url: SITE_URL },
        mainEntityOfPage: url,
        keywords: post.tags.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Journal", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 2, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-6 pb-16 pt-[calc(var(--navigation-height)+8rem)] md:px-10 md:pb-20">
        <div className="mx-auto max-w-[110rem]">
          <nav aria-label="Breadcrumb" className="eyebrow mb-10 flex flex-wrap items-center gap-3">
            <Link href="/blog" className="hover:text-bone">
              ← Journal
            </Link>
            <span>/</span>
            <span className="text-bone/70">{post.category}</span>
          </nav>
          <SplitReveal
            as="h1"
            text={post.title}
            stagger={0.03}
            className="text-5xl font-medium leading-[0.98] tracking-[-0.045em] md:text-8xl"
          />
          <p className="mt-10 max-w-[72rem] text-xl leading-relaxed text-bone/60">{post.excerpt}</p>
          <p className="mt-8 flex flex-wrap items-center gap-3 text-sm text-bone/50">
            <span className="h-px w-10 bg-ember" />
            {post.author.name} · {date} · {post.readTime}
          </p>
        </div>
      </section>

      <div className="px-6 pb-16 md:px-10 md:pb-24">
        <Reveal className="mx-auto aspect-[16/9] max-w-site overflow-hidden rounded-[2.4rem] bg-ink-100 md:aspect-[2/1]">
          <Parallax speed={0.08} className="h-[116%] -translate-y-[8%]">
            <PostCover post={post} size="lg" />
          </Parallax>
        </Reveal>
      </div>

      <div className="px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-site gap-12 md:grid-cols-[1fr_3fr] md:gap-16">
          <aside className="order-2 md:order-1 md:sticky md:top-32 md:self-start">
            <ArticleAside headings={headings} url={url} title={post.title} />
          </aside>

          <div className="order-1 max-w-[72rem] md:order-2">
            <article className="article" dangerouslySetInnerHTML={{ __html: html }} />

            <div className="mt-14 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-bone/60">
                  #{tag}
                </span>
              ))}
            </div>

            {services.length > 0 && (
              <div className="mt-16 rounded-[2rem] border border-line bg-ink-50 p-8 md:p-10">
                <p className="eyebrow mb-2">Need a hand with this?</p>
                <p className="text-3xl font-medium tracking-[-0.02em]">We do this every day.</p>
                <ul className="mt-8 border-t border-line">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="group flex items-center justify-between gap-6 border-b border-line py-5">
                        <span className="flex items-center gap-4">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.pillar.color }} />
                          <span>
                            <span className="block text-lg transition-colors group-hover:text-ember">{s.title}</span>
                            <span className="block text-sm text-bone/55">{s.desc}</span>
                          </span>
                        </span>
                        <span className="transition-transform duration-500 ease-expo group-hover:translate-x-1" aria-hidden>
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex rounded-full bg-ember px-7 py-4 text-md font-medium text-ink transition-colors hover:bg-bone"
                >
                  Start a project →
                </Link>
              </div>
            )}

            <nav aria-label="More articles" className="mt-16 grid gap-4 md:grid-cols-2">
              {older && (
                <Link href={`/blog/${older.slug}`} className="group rounded-[2rem] border border-line p-6 transition-colors hover:border-bone/30">
                  <span className="eyebrow">← Previous</span>
                  <span className="mt-3 block text-xl leading-snug transition-colors group-hover:text-ember">{older.title}</span>
                </Link>
              )}
              {newer && (
                <Link
                  href={`/blog/${newer.slug}`}
                  className="group rounded-[2rem] border border-line p-6 text-right transition-colors hover:border-bone/30 md:col-start-2"
                >
                  <span className="eyebrow">Next →</span>
                  <span className="mt-3 block text-xl leading-snug transition-colors group-hover:text-ember">{newer.title}</span>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line px-6 py-24 md:px-10">
          <div className="mx-auto max-w-site">
            <p className="eyebrow mb-10">Keep reading</p>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-line bg-ink-50 transition-colors hover:border-bone/30"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-ink-100">
                    <PostCover post={r} size="sm" className="transition-transform duration-[1.2s] ease-expo group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-8 p-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-bone/55">{r.category}</span>
                    <span className="text-2xl font-medium leading-tight tracking-[-0.02em] transition-colors group-hover:text-ember">
                      {r.title}
                    </span>
                    <span className="text-sm text-bone/55">{r.readTime} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
