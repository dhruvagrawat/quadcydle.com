import type { BlogPost } from "../../types/blog";
import { categoryColor } from "../../lib/blog/covers";

/**
 * Generated cover art for a journal post — sharp at any size, no stock photo.
 * Colour comes from the post's category; layout varies slightly per post.
 */
export function PostCover({ post, size = "md", className = "" }: { post: BlogPost; size?: "sm" | "md" | "lg"; className?: string }) {
  const color = categoryColor(post.category);
  const seed = post.slug.length % 5;
  const label = size === "sm" ? "text-4xl" : size === "lg" ? "text-7xl md:text-9xl" : "text-6xl md:text-7xl";
  return (
    <div aria-hidden className={`relative h-full w-full overflow-hidden bg-ink-100 ${className}`}>
      <div
        className="absolute rounded-full opacity-60 blur-3xl"
        style={{
          background: color,
          width: "70%",
          height: "90%",
          left: `${15 + seed * 10}%`,
          top: `${-30 + seed * 6}%`,
        }}
      />
      <div
        className="absolute rounded-full opacity-20 blur-2xl"
        style={{ background: "#EDEAE3", width: "35%", height: "45%", left: `${seed * 8}%`, bottom: "-15%" }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,234,227,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(237,234,227,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at 60% 40%, black, transparent 75%)",
        }}
      />
      <span className="absolute left-[6%] top-[8%] font-mono text-xs uppercase tracking-widest text-bone/70">
        {post.readTime}
      </span>
      <span className={`absolute bottom-[6%] left-[6%] right-[6%] font-serif italic leading-none text-bone ${label}`}>
        {post.category}
      </span>
    </div>
  );
}
