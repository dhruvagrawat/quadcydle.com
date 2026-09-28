import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "how-much-does-a-website-cost",
  title: "How Much Does a Website Cost in 2026? An Honest Breakdown",
  excerpt:
    "From a £499 Wix site to a £5,000+ custom build — what you actually get at each price point, the hidden costs nobody mentions, and how to pick the right budget for your business.",
  category: "Web Design",
  tags: ["Pricing", "Web Design", "Planning"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-big.png",
  publishedAt: "2026-09-18",
  readTime: "8 min read",
  featured: true,
  services: ["/services/wordpress", "/services/custom-web", "/services/website-support"],
  content: `
<p>"How much does a website cost?" is the first question almost every client asks us — and the honest answer is <strong>anywhere from a few hundred pounds to tens of thousands</strong>. That's not a dodge. The range is wide because "a website" can mean a single landing page or a full online platform with logins, payments and integrations.</p>

<p>This guide breaks down what you get at each budget, where the money actually goes, and the running costs that catch people out after launch.</p>

<h2>The Short Answer: Four Budget Tiers</h2>

<h3>£500 – £1,000: Template sites on Wix or Squarespace</h3>
<p>A professionally set-up template on Wix or Squarespace, customised with your branding, content and photos. Ideal for sole traders, consultants and early-stage businesses that need to look credible quickly. Our <a href="/services/wix">Wix design and launch</a> starts at £499 and <a href="/services/squarespace">Squarespace builds</a> at £549.</p>
<p><strong>Good for:</strong> 3–8 page brochure sites, portfolios, simple booking. <strong>Watch out for:</strong> limited flexibility and monthly platform fees.</p>

<h3>£1,500 – £3,000: Custom-designed WordPress or small custom builds</h3>
<p>This is where most small and medium businesses land. You get a design made for your brand (not a template), a content management system your team can update, proper SEO foundations and better performance. A <a href="/services/custom-web">custom landing page or brochure site</a> starts from £1,499.</p>
<p><strong>Good for:</strong> service businesses, clinics, agencies, local companies that rely on Google for leads.</p>

<h3>£2,000 – £5,000: E-commerce</h3>
<p>Online stores cost more because there's more to get right: product catalogues, payments, shipping rules, tax, and a checkout that converts. A <a href="/services/shopify">Shopify Growth Store</a> sits around £1,999, and bundles like our <a href="/services/ecommerce">E-commerce Suite</a> add a custom analytics dashboard on top.</p>

<h3>£5,000+: Web applications and platforms</h3>
<p>Customer portals, booking systems, marketplaces, SaaS products. These are software projects, built with frameworks like Next.js, and priced on scope. Our <a href="/services/custom-web">full web applications</a> start from £4,999.</p>

<h2>Where the Money Actually Goes</h2>
<p>On a typical £2,500 project the budget roughly splits like this:</p>
<ul>
<li><strong>Discovery and planning (10–15%)</strong> — understanding your customers, mapping pages, writing a brief.</li>
<li><strong>Design (25–30%)</strong> — clickable Figma prototypes of key pages, revised until you're happy.</li>
<li><strong>Development (35–40%)</strong> — building, connecting forms and integrations, making it responsive.</li>
<li><strong>Content and SEO (10–15%)</strong> — page titles, meta descriptions, structured data, redirects from your old site.</li>
<li><strong>Testing and launch (5–10%)</strong> — cross-browser and device testing, speed checks, going live.</li>
</ul>
<p>If a quote is dramatically cheaper than others, one of those stages is usually missing — most often discovery or testing.</p>

<h2>The Running Costs Nobody Mentions</h2>
<p>A website isn't a one-off purchase. Budget for these every year:</p>
<table>
<tr><th>Cost</th><th>Typical range</th></tr>
<tr><td>Domain name</td><td>£10 – £40 / year</td></tr>
<tr><td>Hosting</td><td>£9 – £49 / month for <a href="/services/web-hosting">managed hosting</a></td></tr>
<tr><td>Maintenance and updates</td><td>£49 – £199 / month on a care plan</td></tr>
<tr><td>Premium plugins / apps</td><td>£0 – £500 / year</td></tr>
<tr><td>Business email</td><td>£5 – £12 per user / month</td></tr>
</table>
<p>The one people skip is maintenance — and it's the one that bites. Unpatched plugins are the number one cause of hacked small-business sites. We explain what's covered in our guide to <a href="/blog/website-care-plans-explained">website care plans</a>.</p>

<h2>Five Ways to Get More for Your Budget</h2>
<ol>
<li><strong>Write your content before design starts.</strong> Nothing delays projects (and inflates bills) like waiting for copy.</li>
<li><strong>Launch smaller, then grow.</strong> Ship the ten pages that matter now; add the rest in month two.</li>
<li><strong>Choose the right platform, not the fanciest one.</strong> Our <a href="/blog/shopify-vs-woocommerce">Shopify vs WooCommerce</a> comparison is a good example of matching tool to need.</li>
<li><strong>Reuse your brand assets.</strong> If you already have a logo and colours, don't pay to reinvent them.</li>
<li><strong>Bundle hosting and support with the build.</strong> One team that built it will fix it faster than a stranger.</li>
</ol>

<h2>Red Flags in a Website Quote</h2>
<ul>
<li>No mention of who owns the site, the domain and the code after launch.</li>
<li>"Unlimited revisions" with no defined scope — it usually means no defined timeline either.</li>
<li>No testing, SEO or redirect work listed.</li>
<li>Hosting you can't move away from.</li>
</ul>
<p>For a full list of questions to ask before signing, read <a href="/blog/how-to-choose-a-web-agency">how to choose a web agency</a>.</p>

<h2>So, What Should You Budget?</h2>
<p>If you're a service business that needs leads from Google, plan for <strong>£1,500–£3,000 upfront plus £50–£150 a month</strong> for hosting and care. If you sell online, add £1,000–£2,000 for e-commerce. And if you're not sure, a £149 <a href="/services/website-audit">website audit</a> of your current site is a cheap way to find out what actually needs fixing before you spend more.</p>
<p>Want a real number for your project? <a href="/contact">Send us a brief</a> and we'll come back with a written quote within 48 hours. You can also compare all our packages on the <a href="/pricing">pricing page</a>.</p>
`,
};

export default post;
