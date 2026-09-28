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
import { site } from "../../lib/site";
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
  metadataBase: new URL("https://quadcydle.com"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
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
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
