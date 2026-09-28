import { Calculator, Eye, Gauge, SearchCheck } from "lucide-react";
import type { Tool } from "../../lib/tools/list";

const icons = { gauge: Gauge, search: SearchCheck, eye: Eye, calculator: Calculator };

export function ToolIcon({ name, size = 22, className }: { name: Tool["icon"]; size?: number; className?: string }) {
  const Icon = icons[name];
  return <Icon size={size} strokeWidth={1.5} aria-hidden className={className} />;
}
