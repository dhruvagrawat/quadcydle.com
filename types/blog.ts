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
};

export type Blog = {
  _id: number;
  title: string;
  slug?: string;
  metadata?: string;
  mainImage?: string;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};
