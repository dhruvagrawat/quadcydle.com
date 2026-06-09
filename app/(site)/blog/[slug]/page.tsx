import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allPosts, getPostBySlug } from "../../../../lib/blog";

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

const categoryColors: Record<string, string> = {
  SEO: "bg-purple-500/20 text-purple-300",
  "Web Performance": "bg-blue-500/20 text-blue-300",
  "E-commerce": "bg-green-500/20 text-green-300",
  "Business Tools": "bg-orange-500/20 text-orange-300",
  Mobile: "bg-pink-500/20 text-pink-300",
  WordPress: "bg-cyan-500/20 text-cyan-300",
  "Digital Marketing": "bg-yellow-500/20 text-yellow-300",
};

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

  return (
    <div className="text-white">
      {/* Hero */}
      <section className="px-6 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                categoryColors[post.category] ?? "bg-white/10 text-white"
              }`}
            >
              {post.category}
            </span>
            <span className="text-xs text-primary-text">{post.readTime}</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mb-8 text-lg text-primary-text">{post.excerpt}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-primary-text">
            <span>{post.author.name}</span>
            <span>·</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="mx-auto max-w-4xl px-6 pb-12">
        <div className="aspect-[2/1] overflow-hidden rounded-2xl border border-transparent-white bg-white/5">
          <img
            src={post.mainImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-2xl px-6 pb-20">
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-primary-text prose-p:leading-relaxed
            prose-li:text-primary-text
            prose-a:text-white prose-a:underline prose-a:underline-offset-2
            prose-strong:text-white
            prose-code:text-white prose-code:bg-white/10 prose-code:px-1 prose-code:rounded
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 flex flex-wrap gap-2 border-t border-transparent-white pt-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-transparent-white px-3 py-1 text-xs text-primary-text"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* CTA */}
      <section className="border-t border-transparent-white px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Want help with this for your business?
        </h2>
        <p className="mb-8 text-primary-text">
          The Quadcydle team works with businesses of all sizes. Get in touch for a free consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-opacity hover:opacity-80"
        >
          Get a Free Quote →
        </Link>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="border-t border-transparent-white px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-2xl font-bold">More from the blog</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-2xl border border-transparent-white bg-glass-gradient p-6 transition-colors hover:border-white/20"
                >
                  <span
                    className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      categoryColors[related.category] ?? "bg-white/10 text-white"
                    }`}
                  >
                    {related.category}
                  </span>
                  <h3 className="font-semibold leading-snug group-hover:text-grey transition-colors">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-xs text-primary-text">{related.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
