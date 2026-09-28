"use client";

import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";

// Google truncates by pixel width, not characters (approx. limits for desktop).
const TITLE_PX = 580;
const DESC_PX = 920;
// On mobile, titles and snippets wrap over more lines, so more fits.
const MOBILE_TITLE_PX = 650;
const MOBILE_DESC_PX = 1000;

function useMeasure() {
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    ctx.current = document.createElement("canvas").getContext("2d");
  }, []);
  return (text: string, font: string) => {
    if (!ctx.current) return text.length * 8;
    ctx.current.font = font;
    return ctx.current.measureText(text).width;
  };
}

function truncate(text: string, max: number, measure: (t: string) => number) {
  if (measure(text) <= max) return text;
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (measure(text.slice(0, mid) + "…") <= max) lo = mid;
    else hi = mid - 1;
  }
  return text.slice(0, lo).trimEnd() + "…";
}

function Meter({ label, chars, px, max, ideal }: { label: string; chars: number; px: number; max: number; ideal: [number, number] }) {
  const pct = Math.min(100, (px / max) * 100);
  const status = chars === 0 ? "empty" : chars < ideal[0] ? "short" : px > max ? "long" : "good";
  const color = status === "good" ? "#C9F24B" : status === "long" ? "#FF5A1F" : "#FFB020";
  return (
    <div className="mt-2 flex items-center gap-4 text-xs text-bone/60">
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="font-mono tabular-nums">
        {chars} chars · {Math.round(px)}/{max}px
      </span>
      <span style={{ color }} className="w-40 text-right">
        {status === "good" ? `${label} length looks good` : status === "long" ? "Will be cut off" : status === "short" ? "Could be longer" : "Empty"}
      </span>
    </div>
  );
}

export function SerpPreview() {
  const [title, setTitle] = useState("Managed Web Hosting — Fast, Secure & Monitored | Quadcydle");
  const [desc, setDesc] = useState(
    "Managed web hosting from £9/month: fast servers, SSL, daily backups, malware scanning and 24/7 uptime monitoring, with support from people who know your site."
  );
  const [url, setUrl] = useState("https://quadcydle.com/services/web-hosting");
  const [site, setSite] = useState("Quadcydle");
  const [image, setImage] = useState("");
  // Default to this site's own share card so the preview isn't empty.
  useEffect(() => setImage(`${window.location.origin}/og`), []);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [copied, setCopied] = useState(false);
  const measure = useMeasure();
  const [, force] = useState(0);
  // Re-measure once the canvas exists (the first render uses an estimate).
  useEffect(() => force(1), []);

  const titlePx = measure(title, "20px Arial");
  const descPx = measure(desc, "14px Arial");
  const shownTitle = useMemo(() => truncate(title, device === "desktop" ? TITLE_PX : MOBILE_TITLE_PX, (t) => measure(t, "20px Arial")), [title, device, measure]);
  const shownDesc = useMemo(() => truncate(desc, device === "desktop" ? DESC_PX : MOBILE_DESC_PX, (t) => measure(t, "14px Arial")), [desc, device, measure]);

  let host = "example.com";
  let crumbs: string[] = [];
  try {
    const u = new URL(url);
    host = u.hostname.replace(/^www\./, "");
    crumbs = u.pathname.split("/").filter(Boolean);
  } catch {}

  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const code = `<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${esc(url)}" />

<!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${esc(site)}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${esc(url)}" />
<meta property="og:image" content="${esc(image)}" />

<!-- X / Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(desc)}" />
<meta name="twitter:image" content="${esc(image)}" />`;

  const field = "w-full rounded-2xl border border-line bg-ink px-5 py-4 text-md text-bone placeholder:text-bone/30 focus:border-ember focus:outline-none";

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
      <div className="min-w-0 space-y-8">
        <label className="block">
          <span className="eyebrow mb-3 block">Page title</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className={field} />
          <Meter label="Title" chars={title.length} px={titlePx} max={TITLE_PX} ideal={[30, 60]} />
        </label>
        <label className="block">
          <span className="eyebrow mb-3 block">Meta description</span>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={4} className={field + " resize-none"} />
          <Meter label="Description" chars={desc.length} px={descPx} max={DESC_PX} ideal={[70, 160]} />
        </label>
        <label className="block">
          <span className="eyebrow mb-3 block">Page URL</span>
          <input value={url} onChange={(e) => setUrl(e.target.value)} className={field} />
        </label>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="eyebrow mb-3 block">Site name</span>
            <input value={site} onChange={(e) => setSite(e.target.value)} className={field} />
          </label>
          <label className="block">
            <span className="eyebrow mb-3 block">Share image URL</span>
            <input value={image} onChange={(e) => setImage(e.target.value)} className={field} placeholder="https://…/image.png (1200×630)" />
          </label>
        </div>
      </div>

      <div className="min-w-0 space-y-10">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="eyebrow">Google result</p>
            <div className="flex rounded-full border border-line p-1">
              {(["desktop", "mobile"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDevice(d)}
                  className={classNames("rounded-full px-4 py-1.5 text-xs capitalize", device === d ? "bg-bone text-ink" : "text-bone/60")}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          {/* Google renders results on white, so the preview does too. */}
          <div className={classNames("rounded-[1.6rem] bg-white p-6 text-left", device === "mobile" ? "mx-auto max-w-[40rem]" : "max-w-[68rem]")} style={{ fontFamily: "Arial, sans-serif" }}>
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1f3f4] text-[11px] font-bold text-[#5f6368]">
                {site.slice(0, 1).toUpperCase() || "•"}
              </span>
              <span className="leading-tight">
                <span className="block text-[14px] text-[#202124]">{site || host}</span>
                <span className="block text-[12px] text-[#4d5156]">
                  {`https://${host}`}
                  {crumbs.map((c) => ` › ${c}`)}
                </span>
              </span>
            </div>
            <p className="mt-2 text-[20px] leading-[1.3] text-[#1a0dab]">{shownTitle || "Your page title"}</p>
            <p className="mt-1 text-[14px] leading-[1.58] text-[#4d5156]">{shownDesc || "Your meta description will appear here."}</p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Social share card</p>
          <div className="overflow-hidden rounded-[1.6rem] border border-line bg-ink-50">
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className="aspect-[1.91/1] w-full bg-ink-100 object-cover" onError={(e) => (e.currentTarget.style.opacity = "0.2")} />
            ) : (
              <div className="flex aspect-[1.91/1] items-center justify-center text-sm text-bone/55">Add a share image (1200×630)</div>
            )}
            <div className="p-5">
              <p className="text-xs uppercase text-bone/55">{host}</p>
              <p className="mt-1 line-clamp-2 text-lg font-medium">{title}</p>
              <p className="mt-1 line-clamp-2 text-sm text-bone/60">{desc}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="eyebrow">Your meta tags</p>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(code);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="rounded-full border border-line px-4 py-2 text-sm text-bone/80 hover:border-bone/40"
            >
              {copied ? "Copied ✓" : "Copy code"}
            </button>
          </div>
          <pre className="max-h-[36rem] overflow-auto rounded-[1.6rem] border border-line bg-ink p-6 font-mono text-xs leading-relaxed text-bone/75" data-lenis-prevent>
            {code}
          </pre>
        </div>
      </div>
    </div>
  );
}
