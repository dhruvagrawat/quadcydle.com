import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "should-you-block-ai-crawlers",
  title: "Should You Block AI Crawlers? GPTBot, ClaudeBot, PerplexityBot and Google-Extended Explained",
  seoTitle: "Should You Block AI Crawlers? GPTBot & Co. Explained",
  seoDescription:
    "Which AI crawlers visit your site, what each one does, and how to decide what to allow in robots.txt — so you can protect your content without vanishing from AI search.",
  excerpt:
    "Blocking every AI bot can quietly remove you from ChatGPT and Perplexity answers. Allowing all of them means your content trains models. Here's how to make a deliberate choice.",
  category: "AI Search",
  tags: ["AI SEO", "robots.txt", "Crawlers"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-02.png",
  publishedAt: "2026-09-22",
  readTime: "7 min read",
  services: ["/services/ai-readiness", "/services/ai-seo"],
  content: `
<p>Open your server logs and you'll find visitors with names like GPTBot, ClaudeBot and PerplexityBot. They're crawlers run by AI companies, and whether you let them in is now a real business decision. Block too much and you can disappear from AI-powered search. Allow everything and your content may be used to train AI models.</p>

<p>The good news: most AI companies now run <strong>separate crawlers for search and for training</strong>, so you can make a nuanced choice.</p>

<h2>The Main AI Crawlers and What They Do</h2>
<table>
<tr><th>Crawler</th><th>Company</th><th>Used for</th></tr>
<tr><td>OAI-SearchBot</td><td>OpenAI</td><td>Finding pages to show in ChatGPT search</td></tr>
<tr><td>ChatGPT-User</td><td>OpenAI</td><td>Fetching a page when a user asks ChatGPT to</td></tr>
<tr><td>GPTBot</td><td>OpenAI</td><td>Collecting content for model training</td></tr>
<tr><td>Claude-SearchBot / Claude-User</td><td>Anthropic</td><td>Search results and user-requested fetches in Claude</td></tr>
<tr><td>ClaudeBot</td><td>Anthropic</td><td>Collecting content for model training</td></tr>
<tr><td>PerplexityBot</td><td>Perplexity</td><td>Indexing pages for Perplexity answers</td></tr>
<tr><td>Google-Extended</td><td>Google</td><td>Controls use of your content for Gemini — <em>not</em> Google Search</td></tr>
<tr><td>Applebot-Extended</td><td>Apple</td><td>Controls use of your content for Apple's AI models</td></tr>
<tr><td>CCBot</td><td>Common Crawl</td><td>An open web archive used to train many AI models</td></tr>
</table>
<p>Each company documents its crawlers — for example <a href="https://platform.openai.com/docs/bots">OpenAI's bot documentation</a> and <a href="https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers">Google's list of crawlers</a>. Names and behaviour change, so check the source before relying on a rule.</p>

<h2>An Important Detail About Google</h2>
<p>Blocking <strong>Google-Extended</strong> does not remove you from Google Search, and it doesn't stop Googlebot crawling your site. Google's AI Overviews in Search are built from Google's normal search index. If you block Googlebot itself, you disappear from Google entirely — almost never what a business wants.</p>

<h2>Three Sensible Policies</h2>

<h3>1. Open (most small businesses)</h3>
<p>Allow everything. Your goal is to be found, and your content is marketing anyway. This is effectively the default if your robots.txt doesn't mention AI bots.</p>

<h3>2. Search yes, training no (publishers and content-heavy sites)</h3>
<p>Allow the search and user-fetch crawlers so you can appear and be cited in AI answers, but block the training crawlers:</p>
<pre><code>User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: *
Allow: /</code></pre>

<h3>3. Closed (rarely right)</h3>
<p>Block every AI crawler. This protects content but removes you from a fast-growing discovery channel. It makes sense for paywalled or proprietary content — rarely for a business that wants customers.</p>

<h2>The Accidental Block</h2>
<p>The most common problem we find isn't a deliberate policy — it's an accidental one. Security plugins, CDN "bot fight" modes and copy-pasted robots.txt templates often block AI crawlers without anyone noticing. Check yours with our free <a href="/tools/ai-readability-checker">AI Readability Checker</a>, which reads your robots.txt and lists which crawlers are allowed.</p>

<h2>What robots.txt Can't Do</h2>
<p>robots.txt is a request, not a lock. Reputable crawlers respect it, but it doesn't stop someone copying your content by other means. It also only affects future crawling — it doesn't remove content already collected.</p>

<p>Not sure which policy fits your business? Our <a href="/services/ai-readiness">AI Readiness Audit</a> reviews your crawler settings, firewall and content — or read <a href="/blog/what-is-ai-seo">what AI SEO is</a> for the bigger picture.</p>
`,
};

export default post;
