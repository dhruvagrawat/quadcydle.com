import { allServices, manifesto, pillars, site } from "../../lib/site";
import { Counter } from "../motion/counter";
import { Marquee } from "../motion/marquee";
import { Reveal } from "../motion/reveal";
import { ScrollText } from "../motion/scroll-text";

export function CapabilityMarquee() {
  return (
    <section aria-label="Capabilities" className="relative z-10 -mt-px border-y border-line bg-ink py-8 md:py-10">
      <Marquee baseVelocity={-1.5}>
        {allServices.map((s, i) => (
          <span key={s.href} className="flex items-center text-4xl font-medium tracking-[-0.03em] md:text-6xl">
            <span className={i % 3 === 1 ? "font-serif font-normal italic text-bone/60" : ""}>{s.title}</span>
            <span className="mx-8 text-ember md:mx-12" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export function Manifesto() {
  const stats = [
    { value: String(pillars.length), label: "pillars, one team" },
    { value: String(allServices.length), label: "services under one roof" },
    { value: site.quoteTime.replace(" hours", "h"), label: "to a written quote" },
    { value: "1", label: "person to call. Always." },
  ];

  return (
    <section className="relative bg-ink px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-site">
        <div className="grid gap-12 md:grid-cols-[1fr_3fr]">
          <Reveal>
            <p className="eyebrow md:sticky md:top-32">(01) — Why we exist</p>
          </Reveal>
          <ScrollText
            text={manifesto}
            className="text-4xl font-medium leading-[1.12] tracking-[-0.03em] md:text-6xl"
          />
        </div>

        <div className="mt-32 grid grid-cols-2 border-t border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border-b border-line py-10 pr-6 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <Counter value={s.value} className="block text-7xl font-medium tracking-[-0.05em] md:text-8xl" />
              <p className="mt-3 text-sm text-bone/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
