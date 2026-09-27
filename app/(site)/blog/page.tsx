import { Metadata } from "next";
import { PostList } from "../../../components/blog/post-list";
import { PageHero } from "../../../components/page-hero";
import { allPosts } from "../../../lib/blog";

export const metadata: Metadata = {
  title: "Journal — Quadcydle",
  description:
    "Practical notes on websites, SEO, hosting, apps and running a business online, from the Quadcydle team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={"Notes from\nthe *studio.*"}
        intro="Practical advice on websites, SEO, hosting, apps and the tools that run a business — written by the people who do the work."
      />
      <PostList posts={allPosts} />
    </>
  );
}
