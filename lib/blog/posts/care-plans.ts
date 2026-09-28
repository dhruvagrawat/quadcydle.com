import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "website-care-plans-explained",
  title: "Website Care Plans Explained: What's Included and Do You Need One?",
  excerpt:
    "Updates, backups, security, uptime checks and small edits — what a good website care plan covers, what it should cost, and how to tell if you're better off doing it yourself.",
  category: "Maintenance",
  tags: ["Maintenance", "Security", "WordPress"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-04.png",
  publishedAt: "2026-07-24",
  readTime: "6 min read",
  services: ["/services/website-support", "/services/app-support", "/services/status-monitoring"],
  content: `
<p>A website is closer to a car than a brochure. It needs regular servicing, and it's much cheaper to maintain than to repair. A care plan is a monthly subscription where someone else does that servicing for you. Here's what should be in one.</p>

<h2>What a Good Care Plan Includes</h2>

<h3>Software updates</h3>
<p>WordPress core, themes and plugins release updates constantly — many of them security fixes. A care plan applies them safely: on a staging copy first, then live, with a backup taken beforehand in case anything breaks.</p>

<h3>Daily backups, stored off-site</h3>
<p>Backups that live on the same server as your website aren't backups — if the server fails, you lose both. Look for daily, off-site backups kept for at least 30 days, and ask how quickly a restore can happen.</p>

<h3>Security monitoring</h3>
<p>Firewall rules, malware scanning, login protection and alerts for suspicious activity. And critically: <strong>who cleans up if you do get hacked</strong>, and is that included?</p>

<h3>Uptime monitoring</h3>
<p>Checks every minute or so that your site is responding, with alerts to the team that can fix it. We go deeper on this in <a href="/blog/uptime-monitoring-for-small-business">why small businesses need uptime monitoring</a>.</p>

<h3>Performance checks</h3>
<p>Sites slow down over time as content, plugins and tracking scripts pile up. A monthly speed check catches that before Google does.</p>

<h3>Small content edits</h3>
<p>Most plans include a bank of time (30 minutes to a few hours a month) for changes like updating prices, adding a team member or swapping a banner.</p>

<h3>A monthly report</h3>
<p>What was updated, what was blocked, uptime percentage and speed scores. If you're paying for it, you should see it.</p>

<h2>What It Should Cost</h2>
<table>
<tr><th>Level</th><th>Typical price</th><th>Best for</th></tr>
<tr><td>Essential</td><td>£49/mo</td><td>Brochure sites: updates, backups, monitoring</td></tr>
<tr><td>Business</td><td>£99/mo</td><td>Lead-generating sites: plus edits and priority response</td></tr>
<tr><td>Premium</td><td>£199/mo</td><td>E-commerce and busy sites: plus development time and fastest SLA</td></tr>
</table>
<p>Those are the tiers on our own <a href="/services/website-support">website care plans</a>. Apps have their own equivalent — see <a href="/services/app-support">app support plans</a>.</p>

<h2>Can You Do It Yourself?</h2>
<p>Yes, if you're comfortable with all of the following every month: updating plugins and fixing anything that breaks, checking backups actually restore, reading security logs, and doing it consistently even in busy months. Many business owners start this way and switch after the first time an update takes the site down during a sale.</p>
<p>The maths usually comes down to this: if an hour of your time is worth more than £50, a care plan pays for itself. We ran the numbers in more detail in <a href="/blog/why-wordpress-management-saves-money">why WordPress management saves money</a>.</p>

<h2>Signs You Need One Now</h2>
<ul>
<li>Your WordPress dashboard shows more than five pending plugin updates.</li>
<li>You don't know when your last backup was.</li>
<li>Your site has gone down and a customer told you.</li>
<li>The person who built the site is no longer reachable.</li>
</ul>
<p>Recognise any of those? <a href="/contact">Get in touch</a> and we'll start with a free health check — or book a full <a href="/services/website-audit">website audit</a> if you want a written report first.</p>
`,
};

export default post;
