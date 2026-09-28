/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — the single place to edit what the website says.
 *
 *  Header, footer, homepage, services index, about and contact pages all read
 *  from this file. Add a service here and it shows up everywhere; remove one
 *  and it disappears everywhere. Individual service detail pages live in
 *  app/(site)/services/<slug>/page.tsx.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Quadcydle",
  tagline: "Build. Host. Run. Grow.",
  description:
    "Quadcydle is a digital studio that builds, hosts, runs and grows websites, stores and apps for ambitious businesses.",
  email: "hello@quadcydle.com",
  /** Shown in the header pill and on the homepage. Set to "" to hide. */
  availability: "Booking new projects",
  /** Response promises — reused in the contact page, CTA and stats. */
  replyTime: "1 business day",
  quoteTime: "48 hours",
  socials: [
    { label: "Twitter / X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export const nav = [
  { title: "Services", href: "/services" },
  { title: "Work", href: "/casestudies" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
  { title: "Journal", href: "/blog" },
];

export type Service = { title: string; href: string; desc: string };

export type Pillar = {
  id: "build" | "host" | "run" | "grow";
  index: string;
  title: string;
  headline: string;
  summary: string;
  /** Accent for this pillar's panel on the homepage. */
  color: string;
  services: Service[];
};

/**
 * The four pillars of the Quadcydle cycle. Every service belongs to exactly
 * one pillar — that keeps the menu short and the offer easy to understand.
 */
export const pillars: Pillar[] = [
  {
    id: "build",
    index: "01",
    title: "Build",
    headline: "Websites, stores & apps that feel expensive.",
    summary:
      "Design and engineering on the platform that fits you — from a WordPress brochure site to a custom Next.js product or a native mobile app.",
    color: "#FF5A1F",
    services: [
      { title: "Custom Web Development", href: "/services/custom-web", desc: "React, Next.js & full-stack builds" },
      { title: "WordPress", href: "/services/wordpress", desc: "Themes, plugins & rebuilds" },
      { title: "Shopify", href: "/services/shopify", desc: "Stores that convert" },
      { title: "Wix", href: "/services/wix", desc: "Design, SEO & migration" },
      { title: "Squarespace", href: "/services/squarespace", desc: "Elegant sites, fast" },
      { title: "Mobile Apps", href: "/services/mobile-app", desc: "iOS & Android in React Native" },
      { title: "App Design", href: "/services/app-design", desc: "UI/UX in Figma, handoff-ready" },
      { title: "E-commerce Suite", href: "/services/ecommerce", desc: "Store + custom dashboard" },
    ],
  },
  {
    id: "host",
    index: "02",
    title: "Host",
    headline: "Infrastructure you never have to think about.",
    summary:
      "Fast, monitored, backed-up hosting for everything we build — and everything you already have.",
    color: "#7C9CFF",
    services: [
      { title: "Managed Hosting", href: "/services/web-hosting", desc: "Fast, secure & monitored" },
      { title: "WordPress Hosting", href: "/services/wordpress-hosting", desc: "Tuned WP infrastructure" },
      { title: "Full-Stack Hosting", href: "/services/fullstack-hosting", desc: "Node, Python, Docker & more" },
      { title: "Status Monitoring", href: "/services/status-monitoring", desc: "Uptime alerts & status pages" },
      { title: "Data Recovery", href: "/services/data-recovery", desc: "Files, email & old accounts" },
    ],
  },
  {
    id: "run",
    index: "03",
    title: "Run",
    headline: "The boring bits, handled beautifully.",
    summary:
      "Workspace setup, care plans and audits so your team spends its time on the business, not the tooling.",
    color: "#C9F24B",
    services: [
      { title: "Website Care Plans", href: "/services/website-support", desc: "Updates, fixes & backups" },
      { title: "App Support", href: "/services/app-support", desc: "Maintenance & releases" },
      { title: "Website Audit", href: "/services/website-audit", desc: "Speed, SEO & UX review" },
      { title: "Google Workspace", href: "/services/google-workspace", desc: "Setup, migration & admin" },
      { title: "Microsoft 365", href: "/services/microsoft-365", desc: "Setup, migration & support" },
    ],
  },
  {
    id: "grow",
    index: "04",
    title: "Grow",
    headline: "More customers, on every channel they use.",
    summary:
      "Marketplace listings, food-delivery onboarding and launch packages that put you where your buyers already are.",
    color: "#F4C8FF",
    services: [
      { title: "Startup Builder", href: "/services/startup-builder", desc: "Everything to launch a business" },
      { title: "Amazon Listings", href: "/services/amazon-listing", desc: "Setup, optimisation & PPC" },
      { title: "Shopify Listings", href: "/services/shopify-listing", desc: "Catalogue & product ops" },
      { title: "Restaurant Apps", href: "/services/restaurant-app", desc: "Ordering, menus & bookings" },
      { title: "Delivery Onboarding", href: "/services/restaurant-onboarding", desc: "Zomato, Swiggy, ONDC & more" },
    ],
  },
];

export const allServices = pillars.flatMap((p) =>
  p.services.map((s) => ({ ...s, pillar: p.title }))
);

/** How every engagement runs — shown as the "cycle" on the homepage. */
export const process = [
  {
    title: "Discover",
    body: "A short call and a written brief. We find the one thing that will move your numbers and ignore the rest.",
  },
  {
    title: "Design",
    body: "Figma prototypes you can click through before a single line of code. Nothing gets built you haven't seen.",
  },
  {
    title: "Deliver",
    body: "Weekly demos, a shared board and a launch checklist. Shipped on the date we agreed.",
  },
  {
    title: "Evolve",
    body: "After launch we host it, watch it and keep improving it. Then the cycle starts again.",
  },
];

export const manifesto =
  "Most businesses juggle a web designer, a hosting company, an IT person and a marketing freelancer — and none of them talk to each other. Quadcydle is all four, in one team, on one plan, with one person to call.";

/** Support urgency levels and response times (support page + ticket form). */
export const urgencyLevels = [
  { value: "Critical", time: "Within 1 hour", desc: "Site down, security breach, data loss", color: "#FF5A1F" },
  { value: "High", time: "Within 4 hours", desc: "Major feature broken, real business impact", color: "#FF8A5C" },
  { value: "Medium", time: "Within 24 hours", desc: "Something's degraded but there's a workaround", color: "#7C9CFF" },
  { value: "Low", time: "Within 48 hours", desc: "Minor issue, question or content update", color: "#C9F24B" },
];

export type CaseStudy = {
  client: string;
  industry: string;
  tag: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  /** Accent used for the generative artwork on the work cards. */
  color: string;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "GreenLeaf Organics",
    color: "#C9F24B",
    industry: "E-commerce / Food & Beverage",
    tag: "Shopify build + SEO",
    challenge:
      "An organic grocery brand with a dated website and near-zero organic traffic, losing customers to better-ranked competitors.",
    solution:
      "We rebuilt their Shopify storefront from scratch and ran a full technical SEO overhaul — structured data, page speed and a content plan targeting 40+ long-tail keywords.",
    results: [
      { metric: "312%", label: "more organic traffic" },
      { metric: "2.4×", label: "conversion rate" },
      { metric: "£48k", label: "extra monthly revenue" },
    ],
  },
  {
    client: "NovaCare Clinic",
    color: "#7C9CFF",
    industry: "Healthcare",
    tag: "Web design + local SEO",
    challenge:
      "A private clinic struggling to fill appointment slots, relying entirely on word-of-mouth with no digital strategy.",
    solution:
      "A trust-first website with online booking, plus a local SEO campaign and Google Business Profile optimisation.",
    results: [
      { metric: "5×", label: "online bookings" },
      { metric: "#1", label: "for 12 local keywords" },
      { metric: "60%", label: "lower cost per patient" },
    ],
  },
  {
    client: "TechStart Hub",
    color: "#FF5A1F",
    industry: "Coworking / Startups",
    tag: "Full launch in 8 weeks",
    challenge:
      "A coworking space launch needing a brand, website, hosting, workspace and marketing — all from zero in under 8 weeks.",
    solution:
      "Brand guidelines, a Next.js site, Google Workspace, managed hosting and a launch ad campaign — delivered on the deadline.",
    results: [
      { metric: "100%", label: "occupancy by month 3" },
      { metric: "4.9★", label: "Google rating in 90 days" },
      { metric: "8 wks", label: "zero to launch" },
    ],
  },
  {
    client: "Zenith Fitness",
    color: "#F4C8FF",
    industry: "Health & Wellness",
    tag: "Mobile app + retention",
    challenge:
      "A gym chain wanted a branded app for class booking and a plan to reduce member churn.",
    solution:
      "A React Native app with scheduling, push notifications and loyalty points, paired with an email re-engagement programme.",
    results: [
      { metric: "35%", label: "less member churn" },
      { metric: "4.7★", label: "App Store rating" },
      { metric: "2,200+", label: "users in month one" },
    ],
  },
  {
    client: "Forma Studio",
    color: "#FF8A5C",
    industry: "Interior Design / B2B",
    tag: "Social + paid ads",
    challenge:
      "A high-end interior design firm with beautiful work but no social presence, struggling to reach commercial clients.",
    solution:
      "We ran their Instagram and LinkedIn and launched targeted Meta and LinkedIn campaigns showcasing their portfolio to developers and corporate clients.",
    results: [
      { metric: "18k", label: "Instagram followers in 6 months" },
      { metric: "7", label: "LinkedIn leads in Q1" },
      { metric: "£250k+", label: "pipeline generated" },
    ],
  },
  {
    client: "Atlas Legal",
    color: "#7C9CFF",
    industry: "Professional Services / Legal",
    tag: "Web redesign + SEO",
    challenge:
      "A law firm with a 2015-era website, no content and poor visibility for high-value search terms.",
    solution:
      "A redesign built around trust and authority, paired with a 12-month programme of expert legal guides targeting commercial and property law.",
    results: [
      { metric: "220%", label: "more organic enquiries" },
      { metric: "Top 3", label: "for 8 commercial terms" },
      { metric: "40%", label: "lower cost per lead" },
    ],
  },
];
