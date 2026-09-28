import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

/**
 * Fetches a public web page on behalf of a visitor (used by the SEO checker).
 *
 * Because the URL comes from the public, this guards against SSRF: only
 * http/https on default ports, every hostname must resolve to public IP
 * addresses, redirects are followed manually (and re-checked, max 4), and the
 * response is time- and size-limited.
 */

const MAX_BYTES = 3 * 1024 * 1024;
const TIMEOUT_MS = 10_000;
const MAX_REDIRECTS = 4;

export class FetchError extends Error {}

function isPrivateIPv4(ip: string) {
  const [a, b] = ip.split(".").map(Number);
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 192 && b === 0) ||
    (a === 198 && (b === 18 || b === 19)) ||
    a >= 224
  );
}

function isPrivateIP(ip: string) {
  if (isIP(ip) === 4) return isPrivateIPv4(ip);
  const v6 = ip.toLowerCase();
  if (v6.startsWith("::ffff:")) return isPrivateIPv4(v6.slice(7));
  return (
    v6 === "::" ||
    v6 === "::1" ||
    v6.startsWith("fc") ||
    v6.startsWith("fd") ||
    v6.startsWith("fe8") ||
    v6.startsWith("fe9") ||
    v6.startsWith("fea") ||
    v6.startsWith("feb") ||
    v6.startsWith("ff")
  );
}

export function normaliseUrl(input: string) {
  let raw = input.trim();
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(raw) && !/^https?:\/\//i.test(raw)) {
    throw new FetchError("Only http and https addresses can be checked.");
  }
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new FetchError("That doesn't look like a valid web address.");
  }
  if (!["http:", "https:"].includes(url.protocol)) throw new FetchError("Only http and https addresses can be checked.");
  if (url.username || url.password) throw new FetchError("Addresses with login details can't be checked.");
  if (url.port && !["80", "443"].includes(url.port)) throw new FetchError("Only standard web ports can be checked.");
  if (!url.hostname.includes(".")) throw new FetchError("Please enter a full domain, like example.com.");
  return url;
}

async function assertPublicHost(hostname: string) {
  const host = hostname.replace(/^\[|\]$/g, "");
  if (/^localhost$|\.local$|\.internal$/i.test(host)) throw new FetchError("Private addresses can't be checked.");
  const addresses = isIP(host) ? [{ address: host }] : await lookup(host, { all: true }).catch(() => []);
  if (addresses.length === 0) throw new FetchError("We couldn't find that domain. Check the spelling?");
  if (addresses.some((a) => isPrivateIP(a.address))) throw new FetchError("Private addresses can't be checked.");
}

export type FetchedPage = {
  url: string;
  finalUrl: string;
  status: number;
  redirects: string[];
  headers: Record<string, string>;
  html: string;
  bytes: number;
  ms: number;
};

export async function safeFetch(input: string | URL, opts: { accept?: string } = {}): Promise<FetchedPage> {
  let url = typeof input === "string" ? normaliseUrl(input) : input;
  const start = Date.now();
  const redirects: string[] = [];

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    await assertPublicHost(url.hostname);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    let res: Response;
    try {
      res = await fetch(url, {
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "user-agent": "Mozilla/5.0 (compatible; QuadcydleSEOChecker/1.0; +https://quadcydle.com/tools/seo-checker)",
          accept: opts.accept ?? "text/html,application/xhtml+xml",
        },
        cache: "no-store",
      });
    } catch (e) {
      clearTimeout(timer);
      throw new FetchError(
        (e as Error).name === "AbortError" ? "The site took more than 10 seconds to respond." : "We couldn't connect to that site."
      );
    }

    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      clearTimeout(timer);
      redirects.push(`${res.status} ${url.href}`);
      url = normaliseUrl(new URL(res.headers.get("location")!, url).href);
      continue;
    }

    // Read the body with a size cap.
    const reader = res.body?.getReader();
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > MAX_BYTES) {
          controller.abort();
          break;
        }
        chunks.push(value);
      }
    }
    clearTimeout(timer);
    const html = new TextDecoder("utf-8").decode(Buffer.concat(chunks));
    const headers: Record<string, string> = {};
    res.headers.forEach((v, k) => (headers[k] = v));
    return { url: typeof input === "string" ? input : input.href, finalUrl: url.href, status: res.status, redirects, headers, html, bytes, ms: Date.now() - start };
  }
  throw new FetchError("Too many redirects.");
}
