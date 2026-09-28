import type { Metadata } from "next";
import { site } from "./site";

export const SITE_URL = "https://quadcydle.com";

/**
 * Standard metadata for a page: title, description, canonical URL and
 * matching Open Graph / Twitter tags, so shared links preview the right page.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  image = "/og",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /** Share image path; defaults to the site-wide card at /og. */
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type,
      locale: "en_GB",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

/** JSON-LD for the business itself. Only includes facts shown on the site. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      email: site.email,
      description: site.description,
      sameAs: site.socials.map((s) => s.href).filter((h) => h.startsWith("http")),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};
