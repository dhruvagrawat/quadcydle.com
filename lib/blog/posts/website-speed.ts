import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "website-speed-costing-customers",
  title: "Why Your Website's Load Speed Is Costing You Customers",
  seoTitle: "How a Slow Website Costs You Customers",
  excerpt:
    "53% of mobile users abandon a site that takes more than 3 seconds to load. Here's what's slowing your site down — and exactly how to fix it.",
  category: "Web Performance",
  tags: ["Web Performance", "Core Web Vitals", "Conversion"],
  author: {
    name: "Quadcydle Team",
    image: "/blog/blog-02.png",
    bio: "Digital marketing experts helping businesses grow online.",
  },
  mainImage: "/blog/blog-02.png",
  publishedAt: "2025-05-20",
  readTime: "7 min read",
  services: ["/services/website-audit", "/services/web-hosting"],
  featured: true,
  content: `
<p>Google's own research shows that 53% of mobile site visits are abandoned when pages take more than 3 seconds to load. For an e-commerce site doing £10,000/month in revenue, even a 1-second delay in load time can cost you hundreds of pounds every month in lost conversions.</p>

<p>Here's what's typically causing slowness — and what you can do about it.</p>

<h2>The Problem: What Slows Sites Down</h2>

<h3>Unoptimised Images</h3>
<p>Images account for the majority of page weight on most websites. A single uncompressed hero image can be 2–5MB — easily taking 3–5 seconds to load on a mobile connection. The fix is simple: compress images, use modern formats (WebP or AVIF), and use proper sizing so images are never loaded larger than they're displayed.</p>

<h3>Too Many Plugins and Third-Party Scripts</h3>
<p>Every plugin, chat widget, analytics script, and marketing tag that loads on your page adds load time. Audit what's actually necessary — you'd be surprised how many sites are loading 20+ third-party scripts they no longer use.</p>

<h3>No Caching</h3>
<p>Without caching, your server builds each page from scratch for every visitor. With a caching layer (browser caching + a server-side cache), returning visitors and even first-time visitors on CDN edge nodes get your page in milliseconds rather than seconds.</p>

<h3>Cheap Hosting</h3>
<p>Shared hosting on a crowded server is often the root cause of slow sites. If your server response time (Time to First Byte) is over 600ms, your hosting is likely the bottleneck — no amount of optimisation will fully fix a slow server.</p>

<h3>Render-Blocking JavaScript and CSS</h3>
<p>Scripts and stylesheets loaded in the wrong order prevent the browser from displaying anything until they've fully downloaded and parsed. This increases Largest Contentful Paint (LCP), a core ranking signal.</p>

<h2>Core Web Vitals: What Google Measures</h2>
<p>Google uses three specific metrics to assess page experience:</p>
<ul>
<li><strong>Largest Contentful Paint (LCP):</strong> How long until the main content is visible. Target: under 2.5 seconds.</li>
<li><strong>Interaction to Next Paint (INP):</strong> How quickly the page responds to user input. Target: under 200ms.</li>
<li><strong>Cumulative Layout Shift (CLS):</strong> How much the layout jumps around as it loads. Target: under 0.1.</li>
</ul>
<p>Poor scores in any of these can suppress your search rankings — Google introduced these as a direct ranking factor in 2021.</p>

<h2>How to Fix It</h2>

<h3>Step 1: Benchmark with PageSpeed Insights</h3>
<p>Go to <strong>pagespeed.web.dev</strong>, enter your URL, and run the test for both mobile and desktop. The report will highlight your biggest issues with specific recommendations.</p>

<h3>Step 2: Compress and Modernise Your Images</h3>
<p>Use Squoosh, ShortPixel, or Cloudinary to compress images and convert them to WebP. Implement lazy loading so images below the fold don't load until they're needed.</p>

<h3>Step 3: Implement Caching</h3>
<p>On WordPress, a plugin like WP Rocket or LiteSpeed Cache adds server-side page caching and browser caching headers. On other platforms, your host should offer caching — or a CDN like Cloudflare can be added for free.</p>

<h3>Step 4: Defer Non-Critical Scripts</h3>
<p>Add <code>defer</code> or <code>async</code> attributes to JavaScript that doesn't need to load before your page renders. Move scripts to the footer where possible.</p>

<h3>Step 5: Upgrade Your Hosting</h3>
<p>If your Time to First Byte is consistently over 600ms, it's time to move to a faster host. Managed WordPress hosts and cloud platforms like Vercel or Cloudflare Pages deliver dramatically faster TTFB.</p>

<h2>The Business Case</h2>
<p>Shopify published data showing that a 10% improvement in page speed increases conversion rate by 7%. For most sites, getting from a 4-second load to a 2-second load is achievable with a weekend of work — and the revenue impact can be significant and permanent.</p>

<p>Need help speeding up your site? Our <a href="/services/website-audit">Website Audit service</a> includes a full Core Web Vitals review and a prioritised fix list.</p>
  `.trim(),
};

export default post;
