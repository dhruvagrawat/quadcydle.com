import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "10-seo-quick-wins",
  title: "10 SEO Quick Wins Any Business Can Implement This Week",
  seoTitle: "10 SEO Quick Wins for Small Businesses",
  seoDescription:
    "Ten practical SEO fixes you can make this week — titles, meta descriptions, image compression, internal links and more. Most take under an hour.",
  excerpt:
    "You don't need a massive budget to improve your search rankings. Here are ten actionable changes that make a real difference to your organic traffic — most take under an hour.",
  category: "SEO",
  tags: ["SEO", "Digital Marketing", "Quick Tips"],
  author: {
    name: "Quadcydle Team",
    image: "/blog/blog-01.png",
    bio: "Digital marketing experts helping businesses grow online.",
  },
  mainImage: "/blog/blog-01.png",
  publishedAt: "2025-06-01",
  readTime: "6 min read",
  services: ["/services/seo", "/services/website-audit", "/services/wordpress"],
  featured: true,
  content: `
<p>Search engine optimisation doesn't have to mean months of work and a big budget. Many of the highest-impact SEO improvements are things you can do yourself, in a single afternoon. Here are ten that work.</p>

<h2>1. Fix Missing or Duplicate Title Tags</h2>
<p>Every page on your site should have a unique title tag (the text shown in browser tabs and search results). If any are missing or duplicate, that's Google's signal that you don't know which page is more important. Audit your pages with a free tool like Screaming Frog's free tier and fix them.</p>

<h2>2. Add Meta Descriptions to Every Page</h2>
<p>While meta descriptions don't directly affect rankings, they heavily influence click-through rate. Write a compelling 150–160 character summary for each page that tells searchers exactly what they'll find and why they should click.</p>

<h2>3. Compress Your Images</h2>
<p>Images are the single biggest contributor to slow page load times — and page speed is a confirmed ranking factor. Run every image through a tool like Squoosh or TinyPNG and convert to WebP format. You can typically cut file sizes by 60–80% with zero visible quality loss.</p>

<h2>4. Set Up Google Search Console</h2>
<p>If you haven't already, connect your site to Google Search Console. It's free, it shows you which queries your site appears for, and it flags technical issues like crawl errors and mobile usability problems that Google has already identified.</p>

<h2>5. Claim and Optimise Your Google Business Profile</h2>
<p>If you serve local customers, your Google Business Profile is more important than your website for local search. Make sure it's claimed, fully completed (especially categories, opening hours, and photos), and that you're actively asking satisfied customers to leave reviews.</p>

<h2>6. Add Internal Links</h2>
<p>Go through your existing content and link between related pages using descriptive anchor text. This helps Google understand your site structure and distributes authority to pages that need it. As a rule of thumb, no important page should be more than 2 clicks from your homepage.</p>

<h2>7. Fix Broken Links</h2>
<p>Broken links (404 errors) waste crawl budget and damage user experience. Use Screaming Frog or a free broken link checker, find any 404s, and either fix the links or set up 301 redirects to the correct destination.</p>

<h2>8. Get Your Site on HTTPS</h2>
<p>If your site is still on HTTP, it's actively being penalised. Google has used HTTPS as a ranking signal since 2014, and browsers now show security warnings on non-HTTPS sites. Most hosts offer free SSL via Let's Encrypt — switch today.</p>

<h2>9. Add Schema Markup to Key Pages</h2>
<p>Schema markup is structured data that helps Google understand your content and display rich results (stars, FAQs, opening hours) in search. At minimum, add LocalBusiness schema to your contact page and FAQPage schema to any FAQ sections.</p>

<h2>10. Update Old Content</h2>
<p>Google favours fresh content. Identify your top-performing blog posts and pages from last year, update statistics, add new information, and re-publish them with today's date. This can produce meaningful ranking improvements within weeks.</p>

<h2>Where to Start</h2>
<p>If you can only do one thing today, set up Google Search Console. Everything else follows from understanding what Google already sees when it visits your site. From there, work through the list above in order — the biggest gains are at the top.</p>

<p>If you'd like help implementing a full SEO strategy, <a href="/contact">get in touch with the Quadcydle team</a> — we offer SEO audits and managed campaigns for businesses of all sizes.</p>
  `.trim(),
};

export default post;
