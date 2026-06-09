import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Quadcydle Digital Agency",
  description:
    "Full-service digital agency offering web development, SEO, social media, hosting, mobile apps, business tools and more.",
};

const serviceGroups = [
  {
    title: "Web Platforms",
    description: "Expert development, design, and ongoing management for every major web platform.",
    color: "from-purple-500/20 to-transparent",
    services: [
      { title: "WordPress", href: "/services/wordpress", icon: "🔵", desc: "Custom themes, plugins, hosting & support." },
      { title: "Shopify", href: "/services/shopify", icon: "🟢", desc: "Store setup, custom development & optimisation." },
      { title: "Wix", href: "/services/wix", icon: "🔷", desc: "Professional design, SEO & management." },
      { title: "Squarespace", href: "/services/squarespace", icon: "⬛", desc: "Elegant design, SEO & migration." },
      { title: "Custom Web Dev", href: "/services/custom-web", icon: "⚙️", desc: "React, Next.js, full-stack applications." },
    ],
  },
  {
    title: "Hosting & Infrastructure",
    description: "Reliable, fast, and fully managed hosting for every type of project.",
    color: "from-blue-500/20 to-transparent",
    services: [
      { title: "Managed Web Hosting", href: "/services/web-hosting", icon: "☁️", desc: "Fast, secure & monitored 24/7." },
      { title: "WordPress Hosting", href: "/services/wordpress-hosting", icon: "🏗️", desc: "Optimised WP infrastructure with daily backups." },
      { title: "Full-Stack App Hosting", href: "/services/fullstack-hosting", icon: "🚀", desc: "Node, Python, Docker, Go & more." },
      { title: "Status Monitoring", href: "/services/status-monitoring", icon: "📊", desc: "Real-time uptime monitoring & alerts." },
    ],
  },
  {
    title: "App Development",
    description: "Mobile apps and UI/UX design that users love, from concept to App Store.",
    color: "from-green-500/20 to-transparent",
    services: [
      { title: "Mobile App Development", href: "/services/mobile-app", icon: "📱", desc: "iOS & Android with React Native." },
      { title: "App Design with Figma", href: "/services/app-design", icon: "🎨", desc: "UI/UX prototyping, design systems & handoff." },
      { title: "App Support Plans", href: "/services/app-support", icon: "🛠️", desc: "Ongoing maintenance, updates & bug fixes." },
    ],
  },
  {
    title: "Business Tools",
    description: "Set up, migrate, and manage your business productivity stack.",
    color: "from-orange-500/20 to-transparent",
    services: [
      { title: "Google Workspace", href: "/services/google-workspace", icon: "📧", desc: "Setup, migration & admin for Gmail, Drive & more." },
      { title: "Microsoft 365", href: "/services/microsoft-365", icon: "🪟", desc: "Setup, migration & Outlook/Teams support." },
      { title: "Data Recovery", href: "/services/data-recovery", icon: "💾", desc: "Files, emails, old accounts & business data." },
    ],
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing care so your digital assets stay fast, secure, and up to date.",
    color: "from-cyan-500/20 to-transparent",
    services: [
      { title: "Website Support", href: "/services/website-support", icon: "🧰", desc: "Monthly care plans for any website." },
      { title: "Website Audit", href: "/services/website-audit", icon: "🔍", desc: "Performance, SEO & UX deep-dive report." },
    ],
  },
  {
    title: "All-in-One Packages",
    description: "Bundled solutions for businesses that need everything handled from day one.",
    color: "from-pink-500/20 to-transparent",
    services: [
      { title: "Startup Builder", href: "/services/startup-builder", icon: "🏁", desc: "Website, app, branding, hosting & registration." },
      { title: "E-commerce Suite", href: "/services/ecommerce", icon: "🛒", desc: "Online store + custom analytics dashboard." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center md:py-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-text">
          What We Do
        </p>
        <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Every digital service your business needs
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-text md:text-xl">
          From your first website to a full growth stack — Quadcydle covers every angle so you never have to juggle multiple agencies again.
        </p>
      </section>

      {/* Service groups */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl space-y-20">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold">{group.title}</h2>
                <p className="mt-2 text-primary-text">{group.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group flex flex-col rounded-2xl border border-transparent-white bg-glass-gradient p-6 transition-colors hover:border-white/20"
                  >
                    <span className="mb-3 text-3xl">{service.icon}</span>
                    <h3 className="mb-2 font-semibold group-hover:text-grey transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary-text leading-relaxed">{service.desc}</p>
                    <span className="mt-4 text-xs text-primary-text group-hover:text-white transition-colors">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-transparent-white px-6 py-20 text-center md:py-28">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Not sure where to start?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-primary-text">
          Tell us about your business and we'll recommend exactly what you need — no upselling, no fluff.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-opacity hover:opacity-80"
        >
          Get a Free Consultation →
        </Link>
      </section>
    </div>
  );
}
