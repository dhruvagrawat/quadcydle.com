import { allPosts, getPostBySlug } from "../../../../../lib/blog";
import { categoryColor } from "../../../../../lib/blog/covers";
import { ogCard } from "../../../../../lib/og/card";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

/** Per-article social share image: /blog/<slug>/og */
export function GET(_: Request, { params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return ogCard({
    eyebrow: `Journal · ${post?.category ?? ""}`,
    title: post?.seoTitle ?? post?.title ?? "Quadcydle Journal",
    accent: categoryColor(post?.category ?? ""),
  });
}
