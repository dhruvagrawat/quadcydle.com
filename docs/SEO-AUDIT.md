# Quadcydle.com — SEO Audit & Implementation Plan

_Audit date: 28 September 2026 · Scope: the redesigned site on branch `claude/company-page-redesign-mfofc9` (Next.js 14 app router)._

**How to read this report.** Every finding is labelled:

- **Observed**: checked directly in the code or in a local production build.
- **Inferred**: a reasonable conclusion that hasn't been verified.
- **Recommended**: a change I'm suggesting.
- **Requires access**: needs data or permissions I don't have.

**What was not available.** The live domain (quadcydle.com is blocked by this environment's network policy), Google Search Console, GA4 data, backlink tools, keyword-volume tools and SERP data. So this report contains **no rankings, search volumes, backlink counts or competitor names**. Where those would matter, the report says what's needed.

---

## 1. Executive summary

**Current state (Observed).** The rebuilt site is technically sound after the fixes in this commit:
- 45 indexable URLs, all in the sitemap and all internally linked (no orphans).
- One H1 per page.
- Unique titles and descriptions.
- Canonical URLs everywhere.
- Correct 404 status codes.
- Structured data on every template.
- Per-page social share cards.

**Biggest problems (outside the code):**
1. **The redesign isn't live.** The production domain appears to deploy from a different repository (Inferred from your note about `quadcydle-main/app-applyo`). None of the SEO work below counts until this branch is merged and deployed.
2. **Trust pages are missing.** Privacy Policy and Terms links point to `#`. With GA4 running, a privacy policy is a legal requirement in the UK and EU, and it's also a trust signal.
3. **Case studies are unverified.** If GreenLeaf, NovaCare, TechStart, Zenith, Forma and Atlas aren't real, named clients, they have to be replaced or removed. Fabricated results damage E-E-A-T and carry advertising-standards risk.
4. **There's no real author identity or business identity.** Articles are credited to "Quadcydle Team". There's no address, company number or phone number, and the social links are `#`.

**Biggest opportunities:**
- Commercial, UK-focused service pages already exist for 23 services.
- The journal now has 14 articles with deliberate internal linking into those services.
- Next up: Search Console data, real proof (case studies, testimonials) and a steady pipeline of articles that answer buyer questions (Section 7).

## 2. SEO health scorecard

| Area | Status | Evidence |
| --- | --- | --- |
| Technical SEO | **GOOD** | robots.txt, XML sitemap (45 URLs), canonicals, 308 redirects for removed URLs, real 404s (Observed) |
| Indexation | **GOOD** (pending deploy) | All intended pages indexable; the 404 page is `noindex` (Observed). Live index status: Requires access (GSC) |
| On-page SEO | **GOOD** | Titles 37–66 chars, descriptions ≤160, one H1 per page (Observed) |
| Content | **NEEDS WORK** | Service pages are about 600–700 words each, a sensible length. Case-study authenticity is unverified; there are no testimonials and no named experts |
| Internal linking | **GOOD** | Mega-menu, footer and contextual article links; every page has inbound links (Observed) |
| Performance | **NEEDS WORK** | Heavy motion JS (about 162 kB first-load JS on the homepage). Core Web Vitals are unmeasured: Requires PageSpeed Insights / CrUX after deploy |
| Mobile | **GOOD** | No horizontal scroll; sections no longer pin on phones (Observed at 390 px) |
| Structured data | **GOOD** | Organization, WebSite, Service, Offer, BreadcrumbList and BlogPosting (Observed) |
| Local SEO | **NOT ASSESSABLE** | No address or location published. Requires input: do you serve customers from a location, or UK-wide/remote? |
| Authority / backlinks | **NOT ASSESSABLE** | Requires a backlink tool (Ahrefs, Semrush or GSC Links report) |
| Conversion SEO | **NEEDS WORK** | Clear CTAs and a working brief form (mailto). No phone number, testimonials or real proof |

## 3. Critical fixes

| # | Task | Owner | Why |
| --- | --- | --- | --- |
| C1 | Merge this branch and point the production project at `dhruvagrawat/quadcydle.com` | You (hosting) | Nothing ranks until it's live |
| C2 | Publish a Privacy Policy (and Terms) and link them in the footer | You (needs company details) | Legal requirement once GA4 is running; also a trust signal |
| C3 | Confirm the case studies are real (client permission), otherwise remove them | You | Fabricated results are a trust and legal risk |
| C4 | Verify the domain in Google Search Console and submit `https://quadcydle.com/sitemap.xml` | You | Indexing visibility and error reporting |
| C5 | At the host, 301 `www` → apex and `http` → `https` (one canonical host) | You (Vercel domain settings) | Prevents duplicate hosts. Canonical tags already point at `https://quadcydle.com` |

## 4. Quick wins (already implemented in this commit)

See Section 9 for the full list of changes and where they live.
- Each page now has a unique, intent-matched title and description. Blog titles were 74–110 characters (truncated in search results) and are now 49–66.
- Canonical tags on every page. Before, only blog posts had them.
- Open Graph and Twitter tags per page. Before, every non-blog page shared the homepage's title when posted on social media or messaging apps.
- Generated 1200×630 share images: one site-wide, plus one per article.
- Sharp generated article covers replace 90×70 and 370×240 thumbnails that were stretched to full width.
- `lang="en-GB"`, since the site uses £ and British spelling.
- Redirects for the removed template pages (`/tools`, `/uicomponents`, `/blog/blog-details`).
- A helpful custom 404 page with a real 404 status.
- GA4 now uses Consent Mode v2 with an Accept/Decline banner.
- Text contrast raised for small grey text (WCAG AA).
- The first-visit intro is shortened from about 2.5s to about 1.2s, so the hero, usually the LCP element, appears sooner.

## 5. Page-by-page action plan

| URL | Issue | Action | Priority |
| --- | --- | --- | --- |
| `/` | Title was the brand slogan only | **Done**: "Quadcydle \| Web Design, Development, Hosting & Support" | High |
| `/services/wordpress` | Title "Development, **Hosting** & Support" overlapped `/services/wordpress-hosting` | **Done**: repositioned to "WordPress Development & Support" | High |
| `/services/*` (23) | Mixed "—"/"\|" title patterns, some too long; no schema | **Done**: consistent titles plus Service/Offer/Breadcrumb schema | High |
| `/casestudies` | Unverified claims; no client names, links or quotes | Verify, add client quotes and logos (with permission) or remove | Critical |
| `/about` | No people, no location, no company details | Add founder/team bios, company registration and where you work from | High |
| `/contact` | No phone number; form relies on the visitor's email app | Add a phone/WhatsApp number if you offer one; later, a server-side form (Section 9) | Medium |
| `/pricing` | Only the active tab's prices are in the initial HTML | Consider rendering all tabs server-side, visually tabbed | Low |
| `/support` | Useful to clients, little search value | Keep indexed (harmless); no action | Low |
| Blog (14) | "Quadcydle Team" author | Add named authors with short bios and a `/about#team` anchor | Medium |
| Blog: older 6 posts | Dated 2025; some tips may age | Review yearly; add an "Updated" date when edited | Low |

## 6. Keyword strategy (topic map)

No search-volume or difficulty data was available, so the terms below are grouped by **intent**, not volume. Validate them with GSC queries after 4–8 weeks of data, or with a keyword tool.

| Intent | Topic / example queries (not volume-checked) | Target page |
| --- | --- | --- |
| Commercial | shopify developer uk · shopify store setup | `/services/shopify` |
| Commercial | wordpress developer · wordpress support | `/services/wordpress` |
| Commercial | managed wordpress hosting uk | `/services/wordpress-hosting` |
| Commercial | managed web hosting small business | `/services/web-hosting` |
| Commercial | website maintenance packages · website care plan | `/services/website-support` |
| Commercial | website audit service | `/services/website-audit` |
| Commercial | google workspace setup · migrate to google workspace | `/services/google-workspace` |
| Commercial | microsoft 365 setup small business | `/services/microsoft-365` |
| Commercial | react native app development | `/services/mobile-app` |
| Commercial | zomato / swiggy / ondc onboarding service | `/services/restaurant-onboarding` |
| Commercial | amazon listing optimisation service | `/services/amazon-listing` |
| Informational | how much does a website cost | `/blog/how-much-does-a-website-cost` |
| Informational | how to choose a web design agency | `/blog/how-to-choose-a-web-agency` |
| Informational | website launch checklist | `/blog/website-launch-checklist` |
| Informational | managed vs shared hosting | `/blog/managed-hosting-vs-shared-hosting` |
| Informational | shopify vs woocommerce | `/blog/shopify-vs-woocommerce` |
| Informational | google workspace vs microsoft 365 | `/blog/google-workspace-vs-microsoft-365` |
| Navigational | quadcydle | `/` (Organization schema, consistent profiles) |

**Cannibalisation check**

| URL A | URL B | Overlap | Recommendation |
| --- | --- | --- | --- |
| `/services/wordpress` | `/services/wordpress-hosting` | "WordPress hosting" | **Fixed**: dev/support vs hosting positioning |
| `/services/web-hosting` | `/services/wordpress-hosting` | "managed hosting" | Keep separate: general vs WP-specific; cross-link |
| `/services/shopify` | `/services/ecommerce` | Online store builds | Keep: Shopify build vs store + dashboard bundle; make the E-commerce Suite page explain when to choose it |
| `/services/shopify` | `/services/shopify-listing` | "Shopify" | Keep: build vs catalogue operations |
| `/blog/website-care-plans-explained` | `/blog/why-wordpress-management-saves-money` | Maintenance value | Keep for now (general vs WP cost case). If GSC shows both ranking for the same queries, merge the WP post into the care-plans post with a 301 |
| `/blog/*` guides | Matching `/services/*` | Topic | Keep: informational vs commercial intent, linked both ways |

## 7. Content strategy

**Clusters** (pillar page → supporting articles). Items marked _proposed_ are not written yet.

- **Build** (`/services`, plus `/services/custom-web`, `/services/wordpress` and `/services/shopify`):
  - Existing: website cost, choosing an agency, launch checklist, Shopify vs WooCommerce, mobile app decision.
  - _Proposed:_
    - Website redesign without losing SEO (redirect mapping)
    - Wix vs Squarespace vs WordPress
    - How long does a website take to build?
    - Custom web app cost
- **Host** (`/services/web-hosting`):
  - Existing: managed vs shared hosting, uptime monitoring.
  - _Proposed:_
    - What to do when your website is hacked
    - Moving hosts without downtime
- **Run** (`/services/website-support`):
  - Existing: care plans, WordPress management, Workspace vs 365.
  - _Proposed:_ SPF, DKIM and DMARC email setup for small businesses (supports Workspace/365).
- **Grow** (`/services/startup-builder` and marketplaces):
  - Existing: Amazon vs Shopify, restaurant delivery apps, SEO quick wins.
  - _Proposed:_
    - Launching a UK limited company online: the digital checklist
    - Google Business Profile setup guide

**Content calendar (proposed, one quality article every two weeks)**

| Month | Topic | Intent | Links to | CTA |
| --- | --- | --- | --- | --- |
| Oct 2026 | Website redesign without losing SEO | Informational → commercial | `/services/website-audit`, `/services/custom-web` | Book an audit |
| Oct 2026 | Wix vs Squarespace vs WordPress | Comparison | `/services/wix`, `/services/squarespace`, `/services/wordpress` | Get a quote |
| Nov 2026 | Hacked website: first 24 hours | Problem-solving | `/services/website-support`, `/services/data-recovery` | Open a ticket / contact |
| Nov 2026 | SPF, DKIM, DMARC explained | Informational | `/services/google-workspace`, `/services/microsoft-365` | Contact |
| Dec 2026 | How long does a website take? | Informational | Website-cost post, `/services/custom-web` | Get a quote |
| Jan 2027 | Custom web app cost guide | Commercial research | `/services/custom-web`, `/pricing` | Get a quote |
| Jan 2027 | Moving hosts without downtime | Problem-solving | `/services/web-hosting` | Contact |
| Feb 2027 | Real case study write-up (with client permission) | Brand / proof | Relevant service | Start a project |

Each article should get a named author, first-hand examples, one clear CTA and 3–6 contextual links. The automatic linker handles recurring terms.

## 8. Internal linking strategy

**Observed:**
- Every service page has around 44 inbound links (menu and footer).
- Articles have 3–14 inbound links.
- Articles link out to 4–15 internal pages.
- Service pages link to sibling services ("More in {pillar}").

**Implemented:** `lib/blog/links.ts` links the first mention of about 40 phrases to the right service or article. It skips headings and existing links, links each target at most once per article, adds no more than 10 links per article, and never links an article to itself.

**Recommended:**
1. Add a "Guides" block to each service page, listing the 2–3 articles tagged with that service (the `services` field on posts already provides the data). This is the main missing link direction: service → article.
2. Link `/casestudies` entries to the service pages used in each project.
3. Use natural anchors ("our WordPress care plans"), never repeated exact-match phrases.

## 9. Technical implementation (what changed in this commit)

| Change | File(s) |
| --- | --- |
| `pageMeta()` helper: title, description, canonical, OG and Twitter per page | `lib/seo.ts`, all `page.tsx` files |
| Organization and WebSite JSON-LD | `lib/seo.ts`, `app/(site)/layout.tsx` |
| Service, Offer and BreadcrumbList JSON-LD (from the visible prices only) | `components/services/ServicePage.tsx` |
| BlogPosting JSON-LD: modified date, language, section, image | `app/(site)/blog/[slug]/page.tsx` |
| Short `seoTitle` / `seoDescription` fields for posts | `types/blog.ts`, `lib/blog/posts/*` |
| Share images `/og` and `/blog/<slug>/og` | `lib/og/card.tsx`, `app/(site)/og`, `app/(site)/blog/[slug]/og` |
| Generated article covers (replace blurry thumbnails) | `components/blog/post-cover.tsx`, `lib/blog/covers.ts` |
| Logo and icons for schema and browsers | `public/icon.png`, `public/apple-touch-icon.png`, `public/logo.svg` |
| 308 redirects for removed template URLs | `next.config.js` |
| Custom 404 (noindex, real 404 status) | `app/(site)/not-found.tsx`, `app/(site)/[...missing]/page.tsx` |
| GA4 Consent Mode v2 and banner | `app/(site)/layout.tsx`, `components/cookie-consent.tsx`, `lib/consent.ts` |
| `lang="en-GB"`, `og:locale` en_GB | `app/(site)/layout.tsx`, `lib/seo.ts` |
| Contrast: `text-bone/40` and `/45` → `/55` | components and pages |
| Shorter first-visit intro | `components/motion/preloader.tsx` |

**Recommended next (code):**
- Replace the mailto contact/support forms with a server action or form service, so enquiries arrive even when the visitor has no email app, and track `generate_lead` in GA4.
- Build the service-page "Guides" block (Section 8).
- Add `dateModified` to posts when they're edited (a `updatedAt` field).

## 10. Schema plan

| Schema | Where | Status |
| --- | --- | --- |
| Organization, WebSite | Every page | Done. Add `address`, `telephone` and real `sameAs` profile URLs once they're published |
| Service + Offer | 23 service pages | Done (GBP prices exactly as shown on the page) |
| BreadcrumbList | Services, articles | Done |
| BlogPosting | Articles | Done. Switch `author` to `Person` once named authors exist |
| LocalBusiness | Only if you publish a real address | Not added (no address on the site) |
| FAQPage | Service FAQs | Not added. The markup would be valid, but Google limits FAQ rich results to authoritative government and health sites, so the benefit is minimal |
| Review / AggregateRating | — | **Do not add** until genuine, verifiable reviews are shown on the page |

## 11. Performance plan

Core Web Vitals couldn't be measured (no live URL, no CrUX data). Run PageSpeed Insights on `/`, one service page and one article after deploying.

| Priority | Item |
| --- | --- |
| HIGH | Measure LCP on mobile. The hero headline animates in, and on a first visit waits for the (now 1.1s) intro. If mobile LCP > 2.5s, skip the intro on mobile or render the headline statically |
| HIGH | JavaScript weight: Framer Motion and Lenis are on every page (≈162 kB first load on `/`). Consider lazy-loading below-the-fold animated sections with `next/dynamic` |
| MEDIUM | Service hero images load from Unsplash through `next/image` (good). Self-host your own photos when available |
| LOW | Fonts are already self-hosted by `next/font`; grain and blur effects are disabled on phones (done earlier) |

## 12. Local SEO plan

**Requires input.** The site shows £ pricing, UK business hours and "UK Ltd" guidance (UK, Inferred), and it also serves Indian restaurant platforms (Zomato, Swiggy, ONDC, INR). If you serve a local area from a real address:
- Create a Google Business Profile (service-area business if you have no public office).
- Add the address and phone number to the footer and to Organization/LocalBusiness schema.
- Keep NAP (name, address, phone) identical everywhere.

**Do not** create city pages without a genuine presence or distinct content.

## 13. Backlink / authority plan

Backlink data requires access to a tool; nothing has been assessed. Realistic, white-hat opportunities:
- Client credits ("Website by Quadcydle") with permission.
- Partner directories: Shopify Partners, Google Workspace partner listings if eligible.
- Local business associations and chambers.
- Guest articles built on your journal topics.
- A consistent listing on Clutch, GoodFirms or DesignRush, with real reviews only.

## 14. AI search / answer-engine visibility

Already in place:
- Clear definitions and direct answers near the top of articles.
- Tables with explicit prices.
- One topic per page.
- Consistent entity naming ("Quadcydle", the four pillars).
- Organization/Service/BlogPosting schema.
- British-English `lang`.

Next steps:
- Named, credentialed authors.
- An "About" page stating who you are, where you operate and since when.
- Citations to primary sources (Google, Shopify, Amazon fee pages) where articles quote figures.
- Real case studies with verifiable client names.

## 15–17. 30 / 60 / 90-day plan

**Days 1–30**
- C1–C5 (deploy, privacy policy, verify case studies, GSC plus sitemap, host redirects).
- Fill in the social URLs in `lib/site.ts`.
- Named authors on articles.
- PageSpeed baseline.

**Days 31–60**
- Service-page "Guides" block.
- Server-side forms with GA4 lead events.
- The first four proposed articles.
- Directory and partner listings.
- Review the first GSC queries for striking-distance terms (positions 8–20) and adjust titles.

**Days 61–90**
- Two to four real case studies with client quotes.
- Refresh the six 2025 articles.
- Content-gap review against the pages that actually rank for your target queries (use GSC and a SERP tool).
- Decide on merging the two maintenance articles based on data.

## 18. Ongoing SEO checklist

**Weekly**
- GSC: Pages → "Why pages aren't indexed" (new errors).
- Performance: large drops in clicks.
- Uptime: form deliveries arriving.

**Monthly**
- Top queries and CTR per page; rewrite titles and descriptions with CTR below the site average.
- New striking-distance queries.
- Two new articles.
- Check that new articles link to 1–3 services and 1–2 posts.
- Broken-link crawl.
- PageSpeed on the top three landing pages.
- GA4: organic sessions → `generate_lead` conversions.

**Quarterly**
- Full technical crawl (titles, canonicals, 404s, redirects).
- Content refresh of the oldest five posts.
- Cannibalisation check in GSC (two URLs for one query).
- Backlink review.
- Revisit this report.

**KPIs.** Traffic metrics: organic clicks, impressions, CTR, ranking distribution and indexed pages. Business metrics: organic leads (brief submissions), lead-to-client rate and revenue from organic clients. Business metrics decide priorities.
