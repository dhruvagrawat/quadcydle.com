import type { MetadataRoute } from "next";
import { allPosts } from "../lib/blog";
import { allServices } from "../lib/site";
import { tools } from "../lib/tools/list";
import { SITE_URL } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/casestudies", "/pricing", "/about", "/blog", "/contact", "/support", "/tools"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...allServices.map((s) => ({ url: `${SITE_URL}${s.href}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...tools.map((t) => ({ url: `${SITE_URL}/tools/${t.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...allPosts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.publishedAt, priority: 0.6 })),
  ];
}
