import { BlogPost } from "../../types/blog";
import seoQuickWins from "./posts/seo-quick-wins";
import websiteSpeed from "./posts/website-speed";
import shopifyVsWoocommerce from "./posts/shopify-vs-woocommerce";
import googleWorkspaceVs365 from "./posts/google-workspace-vs-365";
import mobileAppDecision from "./posts/mobile-app-decision";
import wordpressManagement from "./posts/wordpress-management";
import websiteCost from "./posts/website-cost";
import chooseAgency from "./posts/choose-agency";
import launchChecklist from "./posts/launch-checklist";
import hostingCompare from "./posts/hosting-compare";
import carePlans from "./posts/care-plans";
import amazonVsShopify from "./posts/amazon-vs-shopify";
import restaurantOnboarding from "./posts/restaurant-onboarding";
import uptimeMonitoring from "./posts/uptime-monitoring";

export const allPosts: BlogPost[] = [
  seoQuickWins,
  websiteSpeed,
  shopifyVsWoocommerce,
  googleWorkspaceVs365,
  mobileAppDecision,
  wordpressManagement,
  websiteCost,
  chooseAgency,
  launchChecklist,
  hostingCompare,
  carePlans,
  amazonVsShopify,
  restaurantOnboarding,
  uptimeMonitoring,
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

export const categories = Array.from(new Set(allPosts.map((p) => p.category)));

/** Articles that share a category or tag with `post`, most overlap first. */
export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  return allPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score: (p.category === post.category ? 3 : 0) + p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ p }) => p);
}
