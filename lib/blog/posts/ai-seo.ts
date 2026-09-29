import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "what-is-ai-seo",
  title: "What Is AI SEO? How to Get Your Business Mentioned by ChatGPT, Perplexity and Google AI Overviews",
  seoTitle: "What Is AI SEO? Getting Cited by ChatGPT & AI Overviews",
  seoDescription:
    "AI SEO (or GEO) explained: how ChatGPT, Perplexity and Google AI Overviews choose sources, and the practical steps that make your business easier to find and cite.",
  excerpt:
    "More customers now ask an AI assistant instead of typing into Google. Here's how AI search picks its sources — and what a small business can realistically do to be one of them.",
  category: "AI Search",
  tags: ["AI SEO", "GEO", "ChatGPT", "SEO"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-01.png",
  publishedAt: "2026-09-26",
  readTime: "8 min read",
  featured: true,
  services: ["/services/ai-seo", "/services/ai-readiness", "/services/seo"],
  content: `
<p>"What's the best accountant near me?" "Which Shopify agency should I use?" A growing share of these questions now go to ChatGPT, Perplexity, Claude or Gemini — or get answered by an AI Overview at the top of Google before anyone clicks a link. <strong>AI SEO</strong> (also called GEO, generative engine optimisation) is the work of making your business easy for those systems to find, understand, trust and cite.</p>

<p>This guide explains how AI search chooses its sources, what's genuinely within your control, and where the hype outruns the evidence.</p>

<h2>How Does AI Search Choose What to Say?</h2>
<p>There are two broad routes by which your business ends up in an AI answer:</p>
<ol>
<li><strong>Live search.</strong> ChatGPT search, Perplexity, Claude and Google's AI features fetch web pages when a question is asked, then summarise and cite them. If your page can't be crawled or doesn't clearly answer the question, it won't be used. Google says its <a href="https://developers.google.com/search/docs/appearance/ai-features">AI features</a> draw on pages that are indexed and eligible to appear in normal Search.</li>
<li><strong>Training data.</strong> Models also "know" things from the text they were trained on. Businesses that are widely and consistently described across the web — directories, reviews, press, partner sites — are more likely to be known to the model at all.</li>
</ol>
<p>So AI SEO is not a trick. It's mostly good SEO, clear writing and a consistent public footprint — with a few AI-specific technical settings on top.</p>

<h2>Is AI SEO Different From Normal SEO?</h2>
<p>It overlaps heavily. The same fundamentals apply: pages must be crawlable and indexable, content must answer real questions, and your site needs signals of trust. The differences are in emphasis:</p>
<ul>
<li><strong>Clarity over keywords.</strong> AI tools summarise. Pages that state facts plainly — what you do, for whom, where, and for how much — are easier to summarise correctly.</li>
<li><strong>Crawler access.</strong> AI companies run their own crawlers, and many sites block them without realising. We cover this in <a href="/blog/should-you-block-ai-crawlers">should you block AI crawlers?</a></li>
<li><strong>Entity consistency.</strong> Your name, services and contact details should match everywhere, so a model can connect mentions of you with confidence.</li>
<li><strong>Third-party mentions matter more.</strong> AI answers often lean on comparison articles, directories and reviews — not just your own site.</li>
</ul>

<h2>7 Practical Steps to Improve Your AI Visibility</h2>

<h3>1. Make sure AI search crawlers can read your site</h3>
<p>Check your robots.txt for rules that block OAI-SearchBot, ChatGPT-User, PerplexityBot or Claude's crawlers. Also check your CDN or firewall — some security settings block "bots" wholesale. Our free <a href="/tools/ai-readability-checker">AI Readability Checker</a> shows which crawlers are allowed on any page.</p>

<h3>2. Put your content in the HTML</h3>
<p>Many AI crawlers read raw HTML and don't run JavaScript. If your text only appears after scripts load, the crawler may see an empty page. Server-rendered sites (most WordPress sites, and frameworks like Next.js) are usually fine.</p>

<h3>3. Answer the actual questions</h3>
<p>List the questions customers ask before buying — price, timelines, comparisons, "is this right for me?" — and answer each clearly on the relevant page. Question-style headings and short, direct first sentences make answers easy to lift accurately.</p>

<h3>4. Add structured data</h3>
<p>Organization, Service, Product, Article and FAQ schema states facts in a machine-readable form. It must match what's visible on the page — never mark up content that isn't there.</p>

<h3>5. Be consistent everywhere</h3>
<p>Your business name, description, services, location and contact details should be identical on your website, Google Business Profile, LinkedIn, directories and social profiles.</p>

<h3>6. Earn genuine mentions</h3>
<p>Get listed in the directories and partner programmes relevant to your industry, ask happy clients for reviews, and publish content other sites want to reference. Never buy links or fake reviews — it's against search engine rules and it's the kind of signal AI systems are increasingly built to discount.</p>

<h3>7. Measure it</h3>
<p>Write down 10–20 questions your customers ask, test them in ChatGPT, Perplexity, Gemini and Google each month, and record whether you're mentioned or cited. It's imperfect — answers vary between users and over time — but it shows the trend.</p>

<h2>What About llms.txt?</h2>
<p>llms.txt is a proposed file that points AI tools to your most important pages. It's cheap to add, but support varies and it's not a ranking factor anywhere we know of. We explain it fully in <a href="/blog/llms-txt-explained">llms.txt explained</a>.</p>

<h2>Be Wary of Guarantees</h2>
<p>No one can guarantee that ChatGPT will recommend your business. AI answers change constantly and are personalised. What you can do is remove the technical barriers, make your information unambiguous, and build a reputation worth citing — the same things that make a business trustworthy to people.</p>

<p>Want to know where you stand? Run the free <a href="/tools/ai-readability-checker">AI Readability Checker</a>, read our <a href="/blog/make-your-website-ai-readable">AI-readability checklist</a>, or ask us for an <a href="/services/ai-seo">AI visibility audit</a> — we'll test the questions your customers ask and show you exactly how AI answers today.</p>
`,
};

export default post;
