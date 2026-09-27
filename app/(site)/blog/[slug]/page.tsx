import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allPosts, getPostBySlug } from "../../../../lib/blog";
import { Parallax } from "../../../../components/motion/parallax";
import { Reveal, SplitReveal } from "../../../../components/motion/reveal";

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Quadcydle Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const date = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className="px-6 pb-16 pt-[calc(var(--navigation-height)+8rem)] md:px-10 md:pb-20">
        <div className="mx-auto max-w-[110rem]">
          <Link href="/blog" className="eyebrow mb-10 inline-flex items-center gap-3 hover:text-bone">
            ← Journal
          </Link>
          <p className="eyebrow mb-6 flex flex-wrap items-center gap-3">
            <span className="h-px w-10 bg-ember" />
            {post.category} · {post.readTime} · {date}
          </p>
          <SplitReveal
            as="h1"
            text={post.title}
            stagger={0.03}
            className="text-6xl font-medium leading-[0.98] tracking-[-0.045em] md:text-8xl"
          />
          <p className="mt-10 max-w-[72rem] text-xl leading-relaxed text-bone/60">{post.excerpt}</p>
        </div>
      </section>

      <div className="px-6 pb-16 md:px-10 md:pb-24">
        <Reveal className="mx-auto aspect-[2/1] max-w-site overflow-hidden rounded-[2.4rem] bg-ink-100">
          <Parallax speed={0.08} className="h-[116%] -translate-y-[8%]">
            <img src={post.mainImage} alt="" className="h-full w-full object-cover" />
          </Parallax>
        </Reveal>
      </div>

      <div className="px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-site gap-12 md:grid-cols-[1fr_3fr]">
          <aside className="space-y-6 md:sticky md:top-32 md:self-start">
            <div>
              <p className="eyebrow mb-2">Written by</p>
              <p className="text-lg">{post.author.name}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-bone/60">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
          <article className="article max-w-[72rem]" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      {otherPosts.length > 0 && (
        <section className="border-t border-line px-6 py-24 md:px-10">
          <div className="mx-auto max-w-site">
            <p className="eyebrow mb-10">Keep reading</p>
            <div className="grid gap-4 md:grid-cols-3">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col justify-between gap-10 rounded-[2rem] border border-line bg-ink-50 p-8 transition-colors hover:border-bone/30"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-bone/40">{related.category}</span>
                  <span className="text-3xl font-medium leading-tight tracking-[-0.03em] transition-colors group-hover:text-ember">
                    {related.title}
                  </span>
                  <span className="text-sm text-bone/40">{related.readTime} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
