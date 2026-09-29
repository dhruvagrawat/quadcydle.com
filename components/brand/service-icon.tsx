import {
  Activity, Bike, Blocks, Bot, Sparkles, TrendingUp, Boxes, Building2, Code2, Figma, HardDriveDownload, LayoutTemplate, LifeBuoy, Mail,
  Package, PanelsTopLeft, Rocket, SearchCheck, Server, ServerCog, ShoppingBag, ShoppingCart, Smartphone, Tags,
  UtensilsCrossed, Wrench,
} from "lucide-react";
import type { ServiceIconName } from "../../lib/site";

const icons: Record<ServiceIconName, typeof Code2> = {
  code: Code2,
  blocks: Blocks,
  "shopping-bag": ShoppingBag,
  "layout-template": LayoutTemplate,
  panels: PanelsTopLeft,
  smartphone: Smartphone,
  figma: Figma,
  "shopping-cart": ShoppingCart,
  server: Server,
  "server-cog": ServerCog,
  boxes: Boxes,
  activity: Activity,
  "hard-drive": HardDriveDownload,
  "life-buoy": LifeBuoy,
  wrench: Wrench,
  "search-check": SearchCheck,
  mail: Mail,
  building: Building2,
  rocket: Rocket,
  package: Package,
  tags: Tags,
  utensils: UtensilsCrossed,
  bike: Bike,
  "trending-up": TrendingUp,
  sparkles: Sparkles,
  bot: Bot,
};

export function ServiceIcon({ name, size = 18, className }: { name: ServiceIconName; size?: number; className?: string }) {
  const Icon = icons[name];
  return <Icon size={size} strokeWidth={1.5} aria-hidden className={className} />;
}
