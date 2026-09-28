import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Cursor } from "../../components/motion/cursor";
import { introScript } from "../../components/motion/intro";
import { Preloader } from "../../components/motion/preloader";
import { ScrollProgress } from "../../components/motion/scroll-progress";
import { SmoothScroll } from "../../components/motion/smooth-scroll";
import { organizationJsonLd, SITE_URL } from "../../lib/seo";
import { site } from "../../lib/site";
import { CookieConsent } from "../../components/cookie-consent";
import { CONSENT_KEY } from "../../lib/consent";
import "../../styles/globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.name, template: "%s" },
  description: site.description,
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }], apple: "/apple-touch-icon.png" },
  openGraph: { siteName: site.name, locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body>
        <SmoothScroll>
          <Preloader />
          <ScrollProgress />
          <Header />
          <main className="relative z-10 bg-ink">{children}</main>
          <Footer />
        </SmoothScroll>
        <Cursor />
        <div className="grain" aria-hidden />
        <Analytics />
        {site.gaId && (
          <>
            {/* Consent Mode v2: analytics storage stays off until the visitor accepts (see CookieConsent). */}
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var granted = false;
try { granted = localStorage.getItem('${CONSENT_KEY}') === 'granted'; } catch (e) {}
gtag('consent', 'default', {
  analytics_storage: granted ? 'granted' : 'denied',
  ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
});
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
            </Script>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
            <CookieConsent />
          </>
        )}
      </body>
    </html>
  );
}
