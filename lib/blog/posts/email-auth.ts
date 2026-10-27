import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "spf-dkim-dmarc-explained",
  title: "SPF, DKIM and DMARC Explained: Why Your Business Emails Land in Spam",
  seoTitle: "SPF, DKIM & DMARC Explained for Small Businesses",
  seoDescription:
    "Why business emails land in spam and how SPF, DKIM and DMARC fix it — in plain English, with setup steps for Google Workspace and Microsoft 365.",
  excerpt:
    "If your invoices and quotes keep landing in customers' spam folders, the fix is usually three DNS records. Here's what they do and how to set them up.",
  category: "Business Tools",
  tags: ["Email", "Google Workspace", "Microsoft 365", "Security"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-04.png",
  publishedAt: "2026-07-17",
  readTime: "7 min read",
  services: ["/services/google-workspace", "/services/microsoft-365"],
  content: `
<p>A customer says your quote "never arrived". It's in their spam folder — again. For most small businesses the cause is the same: the domain's email authentication isn't set up. Three DNS records — <strong>SPF, DKIM and DMARC</strong> — tell receiving mail servers your emails are genuine.</p>

<h2>Why It Matters More Now</h2>
<p>In 2024 Google and Yahoo tightened their rules for anyone sending email to their users. Google's <a href="https://support.google.com/a/answer/81126">email sender guidelines</a> require all senders to use SPF or DKIM, and bulk senders to use all three plus an easy unsubscribe. Even if you only send a few emails a day, proper authentication is now the difference between the inbox and the spam folder.</p>

<h2>SPF: Who's Allowed to Send</h2>
<p><strong>SPF (Sender Policy Framework)</strong> is a DNS record listing the services allowed to send email for your domain — for example Google Workspace, Microsoft 365, and your newsletter tool. A receiving server checks whether the email came from an approved source.</p>
<p>Common mistake: having <em>two</em> SPF records (for example one added by your email provider and one by your newsletter tool). You must have exactly one, combining all senders.</p>

<h2>DKIM: A Tamper-Proof Signature</h2>
<p><strong>DKIM (DomainKeys Identified Mail)</strong> adds a digital signature to each email. The receiving server checks it against a public key in your DNS, proving the message really came from your domain and wasn't altered in transit. You switch it on in Google Workspace or Microsoft 365, then add the DNS record they give you.</p>

<h2>DMARC: What to Do With Failures</h2>
<p><strong>DMARC</strong> tells receiving servers what to do with emails that fail SPF and DKIM checks — deliver them, quarantine them, or reject them — and sends you reports about who's sending email using your domain. That last part is how you spot someone impersonating your business.</p>
<p>Start with a monitoring policy, review the reports for a few weeks, then tighten it:</p>
<ol>
<li><code>p=none</code> — monitor only.</li>
<li><code>p=quarantine</code> — failing emails go to spam.</li>
<li><code>p=reject</code> — failing emails are refused. The strongest protection against spoofing.</li>
</ol>

<h2>Setting It Up</h2>
<h3>Google Workspace</h3>
<p>Add Google to your SPF record, generate a DKIM key in the Admin console under Gmail → Authenticate email, publish it in DNS, then add a DMARC record. See our <a href="/services/google-workspace">Google Workspace setup</a> service.</p>
<h3>Microsoft 365</h3>
<p>Add Microsoft to your SPF record, enable DKIM in the Microsoft Defender portal (it gives you two CNAME records), then add DMARC. See <a href="/services/microsoft-365">Microsoft 365 setup</a>.</p>
<p>Choosing between the two? Read <a href="/blog/google-workspace-vs-microsoft-365">Google Workspace vs Microsoft 365</a>.</p>

<h2>Don't Forget Other Senders</h2>
<p>Your website's contact form, invoicing software, CRM and newsletter tool all send email "from" your domain. Each needs to be included in SPF or set up with its own DKIM, or those emails will fail DMARC once you tighten the policy.</p>

<p>Emails still going to spam? We set up and fix email authentication as part of our <a href="/services/google-workspace">Google Workspace</a> and <a href="/services/microsoft-365">Microsoft 365</a> services — <a href="/contact">get in touch</a>.</p>
`,
};

export default post;
