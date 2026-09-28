import { NextResponse } from "next/server";
import { FetchError, normaliseUrl, safeFetch } from "../../../lib/server/safe-fetch";
import { analyse } from "../../../lib/tools/seo-analyze";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

// Best-effort rate limit per IP (per server instance): 10 checks / 10 minutes.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 10;
}

async function exists(url: URL, path: string) {
  try {
    const res = await safeFetch(new URL(path, url.origin), { accept: "text/plain,application/xml,*/*" });
    return res.status === 200 && res.bytes > 0 && !/<html/i.test(res.html.slice(0, 500));
  } catch {
    return false;
  }
}

export async function GET(req: Request) {
  const target = new URL(req.url).searchParams.get("url") ?? "";
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "You've run a lot of checks — please wait a few minutes and try again." }, { status: 429 });
  }
  try {
    const url = normaliseUrl(target);
    const page = await safeFetch(url);
    if (!/html/i.test(page.headers["content-type"] ?? "text/html")) {
      return NextResponse.json({ error: "That address didn't return a web page." }, { status: 422 });
    }
    const finalUrl = new URL(page.finalUrl);
    const [robotsTxt, sitemap] = await Promise.all([exists(finalUrl, "/robots.txt"), exists(finalUrl, "/sitemap.xml")]);
    return NextResponse.json(analyse(page, { robotsTxt, sitemap }), {
      headers: { "cache-control": "no-store" },
    });
  } catch (e) {
    const message = e instanceof FetchError ? e.message : "Something went wrong checking that page.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
