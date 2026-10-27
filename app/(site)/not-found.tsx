import Link from "next/link";
import { allPosts } from "../../lib/blog";
import { pillars } from "../../lib/site";

export const metadata = { title: "Page not found | Quadcydle", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="px-6 pb-32 pt-[calc(var(--navigation-height)+10rem)] md:px-10">
      <div className="mx-auto max-w-site">
        <p className="eyebrow mb-8">Error 404</p>
        <h1 className="text-display font-medium tracking-[-0.055em]">
          This page has <span className="font-serif font-normal italic">moved on.</span>
        </h1>
        <p className="mt-10 max-w-[56rem] text-xl leading-relaxed text-bone/65">
          The link may be old or mistyped. Here are the places most people are looking for:
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-4">Services</p>
            <ul className="space-y-2 text-lg">
              {pillars.map((p) => (
                <li key={p.id}>
                  <Link href={`/services#${p.id}`} className="link-underline">
                    {p.title} — {p.services[0].title}, {p.services[1].title}…
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Latest articles</p>
            <ul className="space-y-2 text-lg">
              {allPosts.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="link-underline">
                    {p.seoTitle ?? p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2 text-lg">
              <li><Link href="/" className="link-underline">Homepage</Link></li>
              <li><Link href="/contact" className="link-underline">Start a project</Link></li>
              <li><Link href="/support" className="link-underline">Client support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
