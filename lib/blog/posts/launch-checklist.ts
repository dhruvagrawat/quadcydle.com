import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "website-launch-checklist",
  title: "The Website Launch Checklist: 30 Things to Check Before You Go Live",
  seoTitle: "Website Launch Checklist: 30 Checks Before Go-Live",
  excerpt:
    "The exact list we run through before every launch — content, SEO, speed, forms, security, analytics and the redirects that protect your Google rankings.",
  category: "Web Design",
  tags: ["Launch", "SEO", "Checklist"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-small-01.png",
  publishedAt: "2026-08-21",
  readTime: "9 min read",
  services: ["/services/seo", "/services/website-audit", "/services/web-hosting", "/services/status-monitoring"],
  content: `
<p>Launch day problems are almost always preventable. A broken contact form, a missing redirect, a staging site that Google indexed — each one is a five-minute fix beforehand and a painful week afterwards. Here's the checklist we use on every project. Copy it, adapt it, and tick it off.</p>

<h2>Content (1–6)</h2>
<ol>
<li>Every page has final copy — no "lorem ipsum" or "coming soon" left anywhere.</li>
<li>Spelling and grammar checked by someone who didn't write it.</li>
<li>Phone numbers, emails and addresses are correct and clickable on mobile.</li>
<li>Images are compressed and have descriptive alt text.</li>
<li>Legal pages are live: privacy policy, cookie policy, terms.</li>
<li>A custom 404 page that helps people find their way back.</li>
</ol>

<h2>SEO (7–13)</h2>
<ol start="7">
<li>Every page has a unique title tag and meta description.</li>
<li>One clear H1 per page.</li>
<li><strong>301 redirects</strong> from every old URL to its new equivalent. This is the single most important step when replacing an existing site.</li>
<li>An XML sitemap is generated and submitted to Google Search Console.</li>
<li>robots.txt allows indexing (staging sites often block it — and teams forget to switch it back).</li>
<li>Structured data for your business type (LocalBusiness, Product, Article).</li>
<li>Open Graph images so links look good when shared on social and messaging apps.</li>
</ol>
<p>For more quick wins, see <a href="/blog/10-seo-quick-wins">10 SEO quick wins any business can implement</a>.</p>

<h2>Performance (14–18)</h2>
<ol start="14">
<li>Largest Contentful Paint under 2.5 seconds on a mid-range phone.</li>
<li>Caching and a CDN are switched on.</li>
<li>Unused plugins, scripts and tracking tags are removed.</li>
<li>Fonts are self-hosted or preloaded.</li>
<li>Tested on a real 4G connection, not just office Wi-Fi.</li>
</ol>
<p>Why this matters: <a href="/blog/website-speed-costing-customers">slow sites lose customers</a> — over half of mobile visitors leave if a page takes more than three seconds.</p>

<h2>Functionality (19–23)</h2>
<ol start="19">
<li>Every form submits, sends a confirmation, and arrives in the right inbox.</li>
<li>Checkout completes with a real payment (then refund it).</li>
<li>Every link works — run a crawler, don't just click around.</li>
<li>The site works in Chrome, Safari, Firefox and Edge, on iOS and Android.</li>
<li>Keyboard navigation and screen-reader labels work on key pages.</li>
</ol>

<h2>Security and Reliability (24–27)</h2>
<ol start="24">
<li>SSL certificate is active and HTTP redirects to HTTPS.</li>
<li>Admin accounts use strong passwords and two-factor authentication.</li>
<li>Automated daily backups are running — and you've tested restoring one.</li>
<li>Uptime monitoring is set up so you hear about downtime before your customers do.</li>
</ol>

<h2>Analytics and Tracking (28–30)</h2>
<ol start="28">
<li>Google Analytics 4 is installed and receiving data.</li>
<li>Key conversions (form submissions, purchases, calls) are tracked as events.</li>
<li>Google Search Console and Google Business Profile are connected and verified.</li>
</ol>

<h2>After Launch: The First Two Weeks</h2>
<p>Launch isn't the finish line. For the first fortnight, check Search Console daily for crawl errors, watch analytics for pages with unusually high bounce rates, and keep a list of small fixes. Every Quadcydle project includes post-launch monitoring for exactly this reason.</p>

<p>Already launched and not sure everything was done? A <a href="/services/website-audit">website audit</a> checks all thirty points (and more) and gives you a prioritised fix list. Or if you're planning a new site, <a href="/contact">tell us about it</a> — this checklist comes free with every build.</p>
`,
};

export default post;
