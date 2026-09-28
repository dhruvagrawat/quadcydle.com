"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import type { Heading } from "../../lib/blog/links";
import { useLenis } from "../motion/smooth-scroll";

/** Sticky "On this page" list that highlights the section you're reading, plus share links. */
export function ArticleAside({ headings, url, title }: { headings: Heading[]; url: string; title: string }) {
  const [active, setActive] = useState(headings[0]?.id);
  const [copied, setCopied] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [headings]);

  const go = (id: string) => (e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(el, { offset: -110 });
    else el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  const enc = encodeURIComponent;
  const shares = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${enc(`${title} ${url}`)}` },
  ];

  return (
    <div className="space-y-10">
      {headings.length > 1 && (
        <nav aria-label="On this page" className="hidden md:block">
          <p className="eyebrow mb-4">On this page</p>
          <ul className="space-y-1 border-l border-line">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={go(h.id)}
                  className={classNames(
                    "-ml-px block border-l py-1.5 pl-4 text-sm leading-snug transition-colors",
                    active === h.id ? "border-ember text-bone" : "border-transparent text-bone/55 hover:text-bone"
                  )}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div>
        <p className="eyebrow mb-4">Share</p>
        <div className="flex flex-wrap gap-2">
          {shares.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-4 py-2 text-sm text-bone/70 transition-colors hover:border-bone/40 hover:text-bone"
            >
              {s.label}
            </a>
          ))}
          <button
            onClick={() => {
              navigator.clipboard?.writeText(url);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="rounded-full border border-line px-4 py-2 text-sm text-bone/70 transition-colors hover:border-bone/40 hover:text-bone"
          >
            {copied ? "Copied ✓" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
}
