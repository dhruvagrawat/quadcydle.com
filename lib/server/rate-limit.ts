/**
 * Best-effort in-memory rate limit per key (e.g. IP). On serverless hosting
 * each instance keeps its own counts, so this only slows abuse down.
 */
export function createRateLimit(max: number, windowMs: number) {
  const hits = new Map<string, number[]>();
  return (key: string) => {
    const now = Date.now();
    const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    recent.push(now);
    hits.set(key, recent);
    return recent.length > max;
  };
}
