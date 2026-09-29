import { allPosts } from "./index";

export type GuideLink = { title: string; href: string; category: string; readTime: string };

/**
 * Articles that list `serviceHref` in their `services` field — shown as
 * "Related guides" on that service page. Runs on the server, so only these
 * small objects (not full article text) reach the browser.
 */
export function guidesFor(serviceHref: string, max = 3): GuideLink[] {
  return allPosts
    .filter((p) => p.services?.includes(serviceHref))
    .slice(0, max)
    .map((p) => ({ title: p.seoTitle ?? p.title, href: `/blog/${p.slug}`, category: p.category, readTime: p.readTime }));
}
