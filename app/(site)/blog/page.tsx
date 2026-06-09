import { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "../../../lib/blog";

export const metadata: Metadata = {
  title: "Blog — Quadcydle",
  description:
    "Practical tips and insights on web design, SEO, social media, app development, and digital marketing from the Quadcydle team.",
};

const categoryColors: Record<string, string> = {
  SEO: "bg-purple-500/20 text-purple-300",
  "Web Performance": "bg-blue-500/20 text-blue-300",
  "E-commerce": "bg-green-500/20 text-green-300",
  "Business Tools": "bg-orange-500/20 text-orange-300",
  Mobile: "bg-pink-500/20 text-pink-300",
  WordPress: "bg-cyan-500/20 text-cyan-300",
  "Digital Marketing": "bg-yellow-500/20 text-yellow-300",
};

const BlogPage = () => {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-text">
          Insights & Resources
        </p>
        <h1 className="mx-auto mb-6 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Tips, strategies & industry insights
        </h1>
        <p className="mx-auto max-w-xl text-lg text-primary-text">
          Practical advice on web design, SEO, social media, and digital
          marketing — straight from the Quadcydle team.
        </p>
      </section>

      {/* Posts grid */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-transparent-white bg-glass-gradient transition-colors hover:border-white/20"
              >
                <div className="aspect-[16/9] overflow-hidden bg-white/5">
                  <img
                    src={post.mainImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        categoryColors[post.category] ??
                        "bg-white/10 text-white"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-primary-text">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-lg font-semibold leading-snug group-hover:text-grey transition-colors">
                    {post.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm text-primary-text leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-primary-text">
                    <span>{post.author.name}</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
