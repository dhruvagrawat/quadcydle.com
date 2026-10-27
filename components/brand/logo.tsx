import { LOGO_PATHS, LOGO_VIEWBOX } from "../../lib/brand/mark";

/** The Quadcydle mark in currentColor, so it inherits the surrounding text colour. */
export const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox={LOGO_VIEWBOX} fill="currentColor" aria-hidden className={className}>
    {LOGO_PATHS.map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);

export const Logo = ({ className }: { className?: string }) => (
  <span className={"inline-flex items-center gap-3 " + (className ?? "")}>
    <LogoMark className="h-[1.9rem] w-auto" />
    <span className="text-lg font-semibold tracking-[-0.02em]">Quadcydle</span>
  </span>
);
