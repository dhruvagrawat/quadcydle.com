"use client";
import { Blog } from "../../types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog;
  const href = slug ? `/blog/${slug}` : "/blog";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top rounded-lg border border-transparent-white bg-glass-gradient p-4 pb-9 shadow-solid-8"
    >
      <Link href={href} className="relative block aspect-[368/239] overflow-hidden rounded-md bg-white/5">
        {mainImage && (
          <Image src={mainImage} alt={title} fill className="object-cover" />
        )}
      </Link>

      <div className="px-4">
        <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-white duration-300 hover:text-grey">
          <Link href={href}>
            {title.length > 60 ? `${title.slice(0, 60)}…` : title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm text-primary-text">{metadata}</p>
      </div>
    </motion.div>
  );
};

export default BlogItem;
