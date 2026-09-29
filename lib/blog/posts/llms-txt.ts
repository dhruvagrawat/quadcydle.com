import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "llms-txt-explained",
  title: "llms.txt Explained: What It Is, Who Uses It, and Should Your Website Have One?",
  seoTitle: "llms.txt Explained: Should Your Website Have One?",
  seoDescription:
    "What llms.txt is, what goes in it, which AI tools pay attention to it, and a simple template for adding one to your site — plus why it's no substitute for clear pages.",
  excerpt:
    "llms.txt is a simple text file that points AI tools to your most important pages. It's cheap to add — but it's not a magic ranking switch. Here's the honest version.",
  category: "AI Search",
  tags: ["AI SEO", "llms.txt", "Technical SEO"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-03.png",
  publishedAt: "2026-09-15",
  readTime: "5 min read",
  services: ["/services/ai-readiness", "/services/ai-seo"],
  content: `
<p>If you've read anything about AI search lately, you've probably seen <strong>llms.txt</strong> described as "robots.txt for AI". That's not quite right — and the difference matters when deciding whether to bother.</p>

<h2>What Is llms.txt?</h2>
<p>llms.txt is a <a href="https://llmstxt.org/">proposed standard</a>, first published in 2024, for a plain-text Markdown file at the root of your website (<code>yoursite.com/llms.txt</code>). It gives AI tools a short, curated summary of your site and links to the pages that matter most.</p>
<p>Unlike robots.txt, it doesn't allow or block anything. It's closer to a table of contents written for machines.</p>

<h2>What Goes In It?</h2>
<p>The format is simple:</p>
<pre><code># Your Business Name

> One or two sentences on what you do, for whom, and where.

## Services
- [Service name](https://yoursite.com/service): one-line description

## Guides
- [Article title](https://yoursite.com/blog/article): one-line summary

## Optional
- [About](https://yoursite.com/about): who we are</code></pre>
<p>You can see ours at <a href="/llms.txt">quadcydle.com/llms.txt</a> — it's generated automatically from the same content as our menus, so it never goes out of date.</p>

<h2>Does Anyone Actually Use It?</h2>
<p>This is where honesty matters. Support is uneven:</p>
<ul>
<li>Some AI coding tools and documentation assistants read llms.txt files.</li>
<li>Major AI search products haven't committed to using it as a signal, and Google has said it doesn't need it for Search.</li>
<li>There's no evidence that having one improves rankings or citations on its own.</li>
</ul>
<p>So treat it as a low-cost, low-risk extra — not a strategy.</p>

<h2>Should You Add One?</h2>
<p><strong>Yes, if</strong> it takes you ten minutes and you'll keep it up to date. It forces a useful exercise: deciding which pages actually represent your business.</p>
<p><strong>Don't prioritise it over</strong> the things that demonstrably matter: letting AI search crawlers in (see <a href="/blog/should-you-block-ai-crawlers">should you block AI crawlers?</a>), having content in the HTML rather than hidden behind JavaScript, clear answers on your pages, and accurate structured data.</p>

<h2>Common Mistakes</h2>
<ul>
<li><strong>Listing every page.</strong> The point is curation. Link your key services, guides and contact page.</li>
<li><strong>Letting it go stale.</strong> A file pointing to deleted pages is worse than none. Generate it from your CMS if you can.</li>
<li><strong>Marketing copy.</strong> Write the summary like a factual description, not a slogan.</li>
</ul>

<p>Want to see whether your site has one — and what else AI tools see? Try our free <a href="/tools/ai-readability-checker">AI Readability Checker</a>, or read the full <a href="/blog/make-your-website-ai-readable">AI-readability checklist</a>.</p>
`,
};

export default post;
