import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "website-redesign-without-losing-seo",
  title: "How to Redesign Your Website Without Losing Your Google Rankings",
  seoTitle: "Website Redesign Without Losing SEO: The Redirect Plan",
  seoDescription:
    "Redesigns are the most common way businesses lose Google traffic overnight. The step-by-step plan — URL inventory, 301 redirect map, launch checks — to keep your rankings.",
  excerpt:
    "A new website can wipe out years of Google rankings in a day. It almost always comes down to the same few mistakes — here's the plan that avoids them.",
  category: "SEO",
  tags: ["SEO", "Redesign", "Redirects"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-05.png",
  publishedAt: "2026-08-28",
  readTime: "8 min read",
  services: ["/services/seo", "/services/website-audit", "/services/custom-web"],
  content: `
<p>We regularly meet businesses whose enquiries dropped by half after a "successful" website launch. The new site looked better — but Google no longer recognised it. The good news: traffic loss after a redesign is almost always preventable. The fix is planning, not luck.</p>

<h2>Why Redesigns Lose Rankings</h2>
<ul>
<li><strong>URLs change without redirects.</strong> Every page Google knew about now returns a 404, and the rankings it had earned are lost.</li>
<li><strong>Content gets cut.</strong> Pages that quietly brought in traffic are dropped because they "didn't fit the new design".</li>
<li><strong>Titles and headings change.</strong> Pages lose the words people were searching for.</li>
<li><strong>The staging site's noindex goes live.</strong> A single forgotten setting tells Google to drop the whole site.</li>
<li><strong>Internal links break</strong> and pages become harder to find.</li>
</ul>

<h2>Step 1: Inventory Every URL You Have Now</h2>
<p>Before any design work, export a list of every URL on the current site. Combine three sources: a site crawl, your XML sitemap, and the <strong>Pages</strong> report in Google Search Console (which shows pages getting impressions you may have forgotten about). Add each page's clicks and backlinks so you know which ones matter most.</p>

<h2>Step 2: Decide What Happens to Each Page</h2>
<table>
<tr><th>Situation</th><th>Action</th></tr>
<tr><td>Page stays, same URL</td><td>Keep. Preserve its title and main content where possible.</td></tr>
<tr><td>Page stays, new URL</td><td>301 redirect old URL → new URL.</td></tr>
<tr><td>Page merged into another</td><td>301 redirect to the page that now covers the topic.</td></tr>
<tr><td>Page removed, no equivalent</td><td>Redirect to the closest relevant page, or let it 404 if nothing fits.</td></tr>
</table>
<p>Avoid redirecting everything to the homepage — Google treats that much like a 404.</p>

<h2>Step 3: Build and Test the Redirect Map</h2>
<p>List every old URL beside its new destination. Use permanent (301 or 308) redirects, point each one straight to the final URL (no chains), and test the whole list on the staging site before launch. Google's guide to <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes">site moves with URL changes</a> covers the details.</p>

<h2>Step 4: Carry Over What Works</h2>
<p>For your top pages, keep the core content, the topic of the title, and the internal links pointing to them. Improve the design and writing — just don't throw away what Google already rewards.</p>

<h2>Step 5: Launch Day Checks</h2>
<ul>
<li>robots.txt allows crawling and no <code>noindex</code> tags remain.</li>
<li>Every redirect in the map works (crawl the old URL list).</li>
<li>Canonical tags point to the new live URLs.</li>
<li>New XML sitemap submitted in Search Console.</li>
<li>Analytics and conversion tracking recording data.</li>
</ul>
<p>Our full <a href="/blog/website-launch-checklist">website launch checklist</a> has 30 points.</p>

<h2>Step 6: Watch the First Month</h2>
<p>Check Search Console weekly for spikes in "Not found (404)" errors and fix any missing redirects. A small wobble in rankings for a couple of weeks is normal while Google recrawls; a sustained drop means something was missed.</p>

<p>Planning a redesign? Start with a <a href="/services/website-audit">website audit</a> so you know which pages are carrying your traffic — or talk to us about <a href="/services/seo">SEO support</a> through the migration.</p>
`,
};

export default post;
