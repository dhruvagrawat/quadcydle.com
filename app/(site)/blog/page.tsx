import { Metadata } from "next";
import { PostList } from "../../../components/blog/post-list";
import { PageHero } from "../../../components/page-hero";
import { allPosts, categories } from "../../../lib/blog";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Journal: Website, Hosting & SEO Guides | Quadcydle",
  description:
    "Practical guides on website costs, choosing an agency, hosting, SEO, e-commerce and business tools — written by the Quadcydle team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow={`Journal — ${allPosts.length} articles`}
        title={"Notes from\nthe *studio.*"}
        intro="Straight answers on what websites cost, how to pick an agency, hosting, SEO, e-commerce and the tools that run a business — written by the people who do the work."
      />
      <PostList posts={allPosts} categories={categories} />
    </>
  );
}
