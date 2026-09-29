import { NextResponse } from "next/server";
import { createRateLimit } from "../../../lib/server/rate-limit";
import { FetchError, normaliseUrl, safeFetch } from "../../../lib/server/safe-fetch";
import { analyseAi } from "../../../lib/tools/ai-analyze";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

// 10 checks per IP per 10 minutes.
const limited = createRateLimit(10, 10 * 60_000);

async function textFile(origin: string, path: string) {
  try {
    const res = await safeFetch(new URL(path, origin), { accept: "text/plain,*/*" });
    if (res.status !== 200 || !res.bytes || /<html/i.test(res.html.slice(0, 500))) return null;
    return res.html;
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const target = new URL(req.url).searchParams.get("url") ?? "";
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "You've run a lot of checks — please wait a few minutes and try again." }, { status: 429 });
  }
  try {
    const page = await safeFetch(normaliseUrl(target));
    if (!/html/i.test(page.headers["content-type"] ?? "text/html")) {
      return NextResponse.json({ error: "That address didn't return a web page." }, { status: 422 });
    }
    const origin = new URL(page.finalUrl).origin;
    const [robotsTxt, llms, sitemap] = await Promise.all([
      textFile(origin, "/robots.txt"),
      textFile(origin, "/llms.txt"),
      textFile(origin, "/sitemap.xml"),
    ]);
    return NextResponse.json(analyseAi(page, { robotsTxt, llmsTxt: !!llms, sitemap: !!sitemap }), {
      headers: { "cache-control": "no-store" },
    });
  } catch (e) {
    const message = e instanceof FetchError ? e.message : "Something went wrong checking that page.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
