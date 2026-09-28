import { Metadata } from "next";
import { PostList } from "../../../components/blog/post-list";
import { PageHero } from "../../../components/page-hero";
import { allPosts, categories } from "../../../lib/blog";

export const metadata: Metadata = {
  title: "Journal — Quadcydle",
  description:
    "Practical notes on websites, SEO, hosting, apps and running a business online, from the Quadcydle team.",
};

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
