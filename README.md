# Quadcydle.com

The Quadcydle studio website — Next.js 14 (app router), Tailwind CSS, Framer Motion and Lenis smooth scrolling.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Editing content

Almost everything the site says lives in **`lib/site.ts`**:

| What | Where |
| --- | --- |
| Company name, tagline, email, reply times, socials, "booking" badge | `site` |
| Top navigation | `nav` |
| The four pillars (Build / Host / Run / Grow) and every service in them | `pillars` |
| Homepage process ("the quad cycle") | `process` |
| Homepage manifesto paragraph | `manifesto` |
| Case studies (homepage shows the first four) | `caseStudies` |
| Support response times | `urgencyLevels` |

Add a service to a pillar and it appears in the header mega-menu, footer, homepage, services page and contact form automatically.

Each service's detail page is `app/(site)/services/<slug>/page.tsx`, which passes its copy, pricing and FAQ into the shared `components/services/ServicePage.tsx` template. Blog posts live in `lib/blog/posts/`.

## Design system

- **Colours** — `tailwind.config.js`: `ink` (background), `bone` (text), `ember` (accent) plus one colour per pillar.
- **Type** — Inter Tight (sans), Instrument Serif (italic accents), JetBrains Mono (labels), loaded in `app/(site)/layout.tsx`. In any `SplitReveal`/`PageHero` title, wrap a word in `*asterisks*` to set it in the italic serif.
- **Motion** — reusable pieces in `components/motion/`: `SplitReveal`, `Reveal`, `ScrollText`, `Parallax`, `Marquee`, `Magnetic`, `Counter`, the custom `Cursor` (add `data-cursor="Label"` to any element), `Preloader` (first visit per session) and `SmoothScroll`.
- Everything respects `prefers-reduced-motion`.

## Forms

The contact and support forms have no backend yet: submitting opens the visitor's email app with a pre-filled brief addressed to `site.email`. To collect submissions server-side, swap the `submit` handler in `components/contact-form.tsx` / `components/support-form.tsx` for a POST to your form service or an API route.
