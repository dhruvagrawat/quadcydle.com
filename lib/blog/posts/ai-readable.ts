import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "make-your-website-ai-readable",
  title: "How to Make Your Website Readable for AI: A 15-Point Checklist",
  seoTitle: "How to Make Your Website AI-Readable: 15-Point Checklist",
  seoDescription:
    "A practical checklist to make your website easy for ChatGPT, Claude, Perplexity and Google AI to read and quote: crawler access, rendering, structure, schema and clarity.",
  excerpt:
    "Most websites aren't invisible to AI because of anything clever — just blocked crawlers, content hidden behind JavaScript and vague copy. Fifteen checks, and how to fix each one.",
  category: "AI Search",
  tags: ["AI SEO", "Checklist", "Structured Data"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-04.png",
  publishedAt: "2026-09-10",
  readTime: "7 min read",
  services: ["/services/ai-readiness", "/services/ai-seo", "/services/seo"],
  content: `
<p>AI assistants can only recommend what they can read. In our audits, the reasons a website is hard for AI to understand are rarely exotic. They fall into four groups: <strong>access, structure, clarity and trust</strong>. Here's the checklist we use.</p>

<h2>Access: Can AI Tools Reach Your Content?</h2>
<ol>
<li><strong>AI search crawlers are allowed in robots.txt.</strong> Check for rules blocking OAI-SearchBot, ChatGPT-User, PerplexityBot and Claude's search crawlers. Training crawlers are a separate choice — see <a href="/blog/should-you-block-ai-crawlers">should you block AI crawlers?</a></li>
<li><strong>Your firewall or CDN isn't blocking bots wholesale.</strong> "Bot protection" settings can silently block AI crawlers even when robots.txt allows them.</li>
<li><strong>Key content is in the HTML.</strong> Many AI crawlers don't run JavaScript. View your page source (not the inspector) and search for a sentence from the page — if it's missing, crawlers may miss it too.</li>
<li><strong>Pages are indexable.</strong> No stray <code>noindex</code> tags on important pages. Google's AI Overviews rely on pages in Google's index.</li>
<li><strong>You have an XML sitemap</strong> — and optionally an <a href="/blog/llms-txt-explained">llms.txt</a> pointing to your key pages.</li>
</ol>

<h2>Structure: Can They Find the Right Part?</h2>
<ol start="6">
<li><strong>One clear H1 per page</strong> that says what the page is about.</li>
<li><strong>Descriptive subheadings</strong> — ideally phrased like the questions customers ask ("How long does a Shopify build take?").</li>
<li><strong>Lists and tables for facts.</strong> Prices, steps, specs and comparisons are far easier to extract from a table than from a paragraph.</li>
<li><strong>Structured data that matches the page.</strong> Organization, Service, Product, Article, FAQ and Breadcrumb schema. Never mark up things that aren't visible.</li>
</ol>

<h2>Clarity: Will They Understand It Correctly?</h2>
<ol start="10">
<li><strong>State the facts plainly.</strong> What you do, who it's for, where you work, what it costs. "We craft bespoke digital journeys" tells an AI (and a customer) nothing.</li>
<li><strong>Lead with the answer.</strong> Put the direct answer in the first sentence under each heading, then explain.</li>
<li><strong>Use plain language.</strong> Shorter sentences and common words. Our checker reports a Flesch reading-ease score — above 50 is a good target for most business pages.</li>
<li><strong>Keep facts current.</strong> Outdated prices or services get repeated back to customers as if they were true.</li>
</ol>

<h2>Trust: Will They Rely on It?</h2>
<ol start="14">
<li><strong>Clear business identity.</strong> Organization schema, consistent name and contact details, and an About page that says who's behind the business.</li>
<li><strong>Authorship and dates on articles.</strong> Named authors, publish and update dates, and links to original sources for any statistics.</li>
</ol>

<h2>Test It in Two Minutes</h2>
<p>Our free <a href="/tools/ai-readability-checker">AI Readability Checker</a> runs most of these checks on any page — including which AI crawlers your robots.txt allows and how much of your content is readable without JavaScript. Pair it with the <a href="/tools/seo-checker">SEO Checker</a> for the traditional search basics.</p>

<p>Want every page checked and fixed? Our <a href="/services/ai-readiness">AI Readiness Audit</a> covers the whole site and includes the fixes. For the strategy behind it, read <a href="/blog/what-is-ai-seo">what AI SEO is</a>.</p>
`,
};

export default post;
