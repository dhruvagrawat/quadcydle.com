/**
 * Minimal robots.txt evaluation: finds the group for a user-agent (falling back
 * to "*") and applies the longest matching Allow/Disallow rule for a path.
 */
type Group = { agents: string[]; rules: { allow: boolean; path: string }[] };

export function parseRobots(txt: string): Group[] {
  const groups: Group[] = [];
  let current: Group | null = null;
  let lastWasAgent = false;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const m = line.match(/^([a-z-]+)\s*:\s*(.*)$/i);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === "user-agent") {
      if (!current || !lastWasAgent) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
    } else if ((key === "allow" || key === "disallow") && current) {
      if (value || key === "allow") current.rules.push({ allow: key === "allow", path: value });
      lastWasAgent = false;
    } else {
      lastWasAgent = false;
    }
  }
  return groups;
}

const toRegex = (p: string) =>
  new RegExp("^" + p.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\\\$$/, "$"));

export function isAllowed(groups: Group[], agent: string, path = "/") {
  const a = agent.toLowerCase();
  const group = groups.find((g) => g.agents.includes(a)) ?? groups.find((g) => g.agents.includes("*"));
  if (!group) return { allowed: true, explicit: false };
  let best: { allow: boolean; len: number } | null = null;
  for (const r of group.rules) {
    if (!r.path) continue;
    if (toRegex(r.path).test(path) && (!best || r.path.length > best.len || (r.path.length === best.len && r.allow))) {
      best = { allow: r.allow, len: r.path.length };
    }
  }
  return { allowed: best ? best.allow : true, explicit: group.agents.includes(a) };
}
