import { BlogPost } from "../../types/blog";
import seoQuickWins from "./posts/seo-quick-wins";
import websiteSpeed from "./posts/website-speed";
import shopifyVsWoocommerce from "./posts/shopify-vs-woocommerce";
import googleWorkspaceVs365 from "./posts/google-workspace-vs-365";
import mobileAppDecision from "./posts/mobile-app-decision";
import wordpressManagement from "./posts/wordpress-management";

export const allPosts: BlogPost[] = [
  seoQuickWins,
  websiteSpeed,
  shopifyVsWoocommerce,
  googleWorkspaceVs365,
  mobileAppDecision,
  wordpressManagement,
].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return allPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return allPosts.filter((post) => post.category === category);
}
