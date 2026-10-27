"use client";

import classNames from "classnames";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "../../types/blog";
import { EASE, Reveal } from "../motion/reveal";
import { PostCover } from "./post-cover";

const date = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/**
 * Journal index: a lead story, category filters + search, then an editorial
 * list with a cover image that trails the cursor on desktop.
 */
export function PostList({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState<BlogPost | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 28 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 28 });

  const [lead, ...rest] = posts;
  const filtering = category !== "All" || query.trim() !== "";

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (filtering ? posts : rest).filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase().includes(q))
    );
  }, [posts, rest, category, query, filtering]);

  return (
    <div
      className="px-6 pb-32 md:px-10"
      onPointerMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      <div className="mx-auto max-w-site">
        {lead && !filtering && (
          <Reveal>
            <Link
              href={`/blog/${lead.slug}`}
              data-cursor="Read"
              className="group mb-24 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.4rem] bg-ink-100">
                <PostCover post={lead} size="lg" className="transition-transform duration-[1.4s] ease-expo group-hover:scale-105" />
                <span className="absolute left-6 top-6 rounded-full bg-ember px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink">
                  Latest
                </span>
              </div>
              <div>
                <p className="eyebrow mb-6">
                  {lead.category} · {lead.readTime}
                </p>
                <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.04em] transition-colors group-hover:text-ember md:text-6xl">
                  {lead.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-bone/60">{lead.excerpt}</p>
                <p className="mt-8 inline-flex items-center gap-3 text-md text-ember">
                  <span className="link-underline">Read the article</span> →
                </p>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Filters */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 md:mx-0 md:flex-wrap md:px-0">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={classNames(
                  "relative shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors",
                  category === c ? "border-transparent text-ink" : "border-line text-bone/60 hover:text-bone"
                )}
              >
                {category === c && (
                  <motion.span
                    layoutId="blog-cat"
                    className="absolute inset-0 rounded-full bg-bone"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 border-b border-line pb-2 focus-within:border-ember md:w-[32rem]">
            <span className="sr-only">Search articles</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-bone/55" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full bg-transparent text-md text-bone placeholder:text-bone/30 focus:outline-none"
            />
          </label>
        </div>

        <ul className="border-t border-line">
          <AnimatePresence initial={false} mode="popLayout">
            {results.map((post) => (
              <motion.li
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(post)}
                  onPointerLeave={() => setHovered(null)}
                  className="group grid gap-3 border-b border-line py-8 md:grid-cols-[16rem_1fr_auto] md:items-baseline md:gap-10"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-bone/55">{post.category}</span>
                  <span>
                    <span className="block text-3xl font-medium tracking-[-0.03em] transition-[transform,color] duration-700 ease-expo group-hover:translate-x-3 group-hover:text-ember md:text-5xl">
                      {post.title}
                    </span>
                    <span className="mt-3 block max-w-[72rem] text-md leading-relaxed text-bone/50 md:hidden">
                      {post.excerpt}
                    </span>
                  </span>
                  <span className="text-sm text-bone/55">
                    {date(post.publishedAt)} · {post.readTime}
                  </span>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {results.length === 0 && (
          <p className="py-16 text-center text-lg text-bone/50">
            No articles match that yet.{" "}
            <button
              onClick={() => {
                setCategory("All");
                setQuery("");
              }}
              className="link-underline text-bone"
            >
              Clear filters
            </button>
          </p>
        )}
      </div>

      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block" style={{ x, y }}>
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.slug}
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="-ml-40 -mt-72 h-64 w-96 overflow-hidden rounded-[1.6rem] shadow-2xl"
            >
              <PostCover post={hovered} size="sm" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
