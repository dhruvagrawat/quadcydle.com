import Link from "next/link";
import { Container } from "./Homepage/container";
import { Logo } from "./icons/logo";
import { TwitterIcon } from "./icons/twitter";
import { GithubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";

const footerLinks = [
  {
    title: "Web Platforms",
    links: [
      { title: "WordPress", href: "/services/wordpress" },
      { title: "Shopify", href: "/services/shopify" },
      { title: "Wix", href: "/services/wix" },
      { title: "Squarespace", href: "/services/squarespace" },
      { title: "Custom Web Dev", href: "/services/custom-web" },
    ],
  },
  {
    title: "Hosting & Apps",
    links: [
      { title: "Managed Hosting", href: "/services/web-hosting" },
      { title: "WordPress Hosting", href: "/services/wordpress-hosting" },
      { title: "Full-Stack Hosting", href: "/services/fullstack-hosting" },
      { title: "Mobile App Dev", href: "/services/mobile-app" },
      { title: "App Design (Figma)", href: "/services/app-design" },
      { title: "App Support", href: "/services/app-support" },
    ],
  },
  {
    title: "Business Tools",
    links: [
      { title: "Google Workspace", href: "/services/google-workspace" },
      { title: "Microsoft 365", href: "/services/microsoft-365" },
      { title: "Data Recovery", href: "/services/data-recovery" },
      { title: "Website Audit", href: "/services/website-audit" },
      { title: "Website Support", href: "/services/website-support" },
      { title: "Status Monitoring", href: "/services/status-monitoring" },
    ],
  },
  {
    title: "Packages",
    links: [
      { title: "Startup Builder", href: "/services/startup-builder" },
      { title: "E-commerce Suite", href: "/services/ecommerce" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Case Studies", href: "/casestudies" },
      { title: "Blog", href: "/blog" },
      { title: "Pricing", href: "/pricing" },
      { title: "Contact", href: "/contact" },
      { title: "Support", href: "/support" },
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div className="mb-12 lg:mb-0">
        <div className="flex h-full flex-col">
          <Link href="/" className="flex items-center text-grey hover:text-white transition-colors">
            <Logo className="mr-4 h-4 w-4" /> Quadcydle
          </Link>
          <p className="mt-3 max-w-[22rem] text-sm text-grey leading-relaxed">
            Your full-service digital growth partner. Web design, SEO, social media, hosting, and business development — all under one roof.
          </p>
          <div className="mt-8 flex space-x-4 text-grey">
            <TwitterIcon />
            <GithubIcon />
            <SlackIcon />
          </div>
          <p className="mt-8 text-xs text-grey">
            © {new Date().getFullYear()} Quadcydle. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-10 lg:gap-x-12">
        {footerLinks.map((column) => (
          <div key={column.title} className="min-w-[14rem]">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.title}>
                  <Link
                    className="text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
