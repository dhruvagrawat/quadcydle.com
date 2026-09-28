export type Author = {
  name: string;
  image: string;
  bio?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: Author;
  mainImage: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  /** Service pages this article relates to (hrefs from lib/site.ts). Shown as a box on the article. */
  services?: string[];
};
