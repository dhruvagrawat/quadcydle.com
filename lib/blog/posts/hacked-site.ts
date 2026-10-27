import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "hacked-website-what-to-do",
  title: "Website Hacked? What to Do in the First 24 Hours",
  seoTitle: "Website Hacked? What to Do in the First 24 Hours",
  seoDescription:
    "A calm, step-by-step plan for when your website is hacked: contain it, change passwords, restore a clean backup, remove malware, fix the cause and get Google's warning removed.",
  excerpt:
    "Strange redirects, spam pages or a red warning in Google? Don't panic — and don't just delete things. Here's the order to work in during the first day.",
  category: "Security",
  tags: ["Security", "WordPress", "Hosting"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-small-01.png",
  publishedAt: "2026-07-31",
  readTime: "7 min read",
  services: ["/services/website-support", "/services/data-recovery", "/services/web-hosting"],
  content: `
<p>Your site redirects visitors to a casino, Google shows "This site may be hacked", or your host has suspended your account. It's stressful — but a calm, ordered response limits the damage. Here's what to do, in order.</p>

<h2>Signs Your Website Has Been Hacked</h2>
<ul>
<li>Visitors (especially on mobile or from Google) are redirected to spam sites.</li>
<li>Google results show pages or titles you didn't create, often in another language.</li>
<li>Your browser or Google shows a security warning.</li>
<li>New admin users you don't recognise.</li>
<li>Your host reports malware or suspends the account.</li>
<li>Your emails suddenly land in spam (the server may be sending spam).</li>
</ul>

<h2>Hour 1: Contain It</h2>
<ol>
<li><strong>Don't delete things at random.</strong> You may destroy the evidence of how they got in.</li>
<li><strong>Put the site into maintenance mode</strong> if visitors are being redirected or infected.</li>
<li><strong>Tell your host.</strong> Good hosts have security teams and clean backups.</li>
</ol>

<h2>Hours 1–3: Lock the Doors</h2>
<ol start="4">
<li><strong>Change every password:</strong> website admin accounts, hosting control panel, FTP/SFTP, database, and the email account used for password resets.</li>
<li><strong>Remove unknown admin users.</strong></li>
<li><strong>Turn on two-factor authentication</strong> for admin logins.</li>
</ol>

<h2>Hours 3–12: Clean Up</h2>
<ol start="7">
<li><strong>Restore a clean backup</strong> from before the hack, if you have one — this is the fastest fix. Keep a copy of the infected version for investigation.</li>
<li><strong>If there's no clean backup,</strong> the malware has to be removed by hand: replacing core files, checking themes and plugins, and searching the database for injected code. This is specialist work — and exactly why reliable, off-site <a href="/services/web-hosting">backups</a> matter.</li>
<li><strong>Update everything:</strong> core software, themes and plugins. Remove anything you don't use.</li>
</ol>

<h2>Hours 12–24: Fix the Cause and Tell Google</h2>
<ol start="10">
<li><strong>Find how they got in.</strong> Common causes: an outdated plugin, a weak or reused password, a nulled (pirated) theme, or an insecure shared server.</li>
<li><strong>Check Google Search Console.</strong> Look at <strong>Security issues</strong>, fix what's listed, then request a review. Google removes the warning once it confirms the site is clean.</li>
<li><strong>Remove spam pages from Google</strong> by making sure they return 404 or 410, and use the Removals tool for urgent cases.</li>
</ol>

<h2>Preventing the Next One</h2>
<ul>
<li>Keep software updated — most hacks exploit known, already-fixed vulnerabilities.</li>
<li>Daily off-site backups you've actually tested restoring.</li>
<li>Strong unique passwords and two-factor authentication.</li>
<li>Managed hosting with a firewall and malware scanning.</li>
<li><a href="/services/status-monitoring">Uptime monitoring</a> so you hear about problems quickly.</li>
</ul>
<p>These are exactly what a good <a href="/blog/website-care-plans-explained">website care plan</a> covers.</p>

<p>Dealing with a hacked site right now? <a href="/support">Open an urgent ticket</a> or <a href="/contact">contact us</a> — we clean and secure hacked sites, and can help recover lost data through our <a href="/services/data-recovery">data recovery service</a>.</p>
`,
};

export default post;
