"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "../../types/blog";
import { Reveal } from "../motion/reveal";

const date = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** Journal index: a featured lead story, then an editorial list with a cursor-trailing cover image. */
export function PostList({ posts }: { posts: BlogPost[] }) {
  const [hovered, setHovered] = useState<BlogPost | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 28 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 28 });
  const [lead, ...rest] = posts;

  return (
    <div
      className="px-6 pb-32 md:px-10"
      onPointerMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      <div className="mx-auto max-w-site">
        {lead && (
          <Reveal>
            <Link
              href={`/blog/${lead.slug}`}
              data-cursor="Read"
              className="group mb-24 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.4rem] bg-ink-100">
                <img
                  src={lead.mainImage}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-105"
                />
              </div>
              <div>
                <p className="eyebrow mb-6">
                  Latest — {lead.category} · {lead.readTime}
                </p>
                <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">{lead.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-bone/60">{lead.excerpt}</p>
                <p className="mt-8 inline-flex items-center gap-3 text-md text-ember">
                  <span className="link-underline">Read the article</span> →
                </p>
              </div>
            </Link>
          </Reveal>
        )}

        <ul className="border-t border-line">
          {rest.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                onPointerEnter={() => setHovered(post)}
                onPointerLeave={() => setHovered(null)}
                className="group grid gap-3 border-b border-line py-8 md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-10"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-bone/40">{post.category}</span>
                <span className="text-3xl font-medium tracking-[-0.03em] transition-[transform,color] duration-700 ease-expo group-hover:translate-x-3 group-hover:text-ember md:text-5xl">
                  {post.title}
                </span>
                <span className="text-sm text-bone/40">
                  {date(post.publishedAt)} · {post.readTime}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>

      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block" style={{ x, y }}>
        <AnimatePresence>
          {hovered && (
            <motion.img
              key={hovered.slug}
              src={hovered.mainImage}
              alt=""
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="-ml-40 -mt-72 h-64 w-96 rounded-[1.6rem] object-cover shadow-2xl"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
