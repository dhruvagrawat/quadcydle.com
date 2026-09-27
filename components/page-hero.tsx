"use client";

import { motion } from "framer-motion";
import { useIntroDone } from "./motion/intro";
import { EASE, SplitReveal } from "./motion/reveal";

/**
 * The opening block for inner pages. Wrap words in *asterisks* in the title
 * to set them in the italic serif; use \n for line breaks.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  const play = useIntroDone();
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-[calc(var(--navigation-height)+8rem)] md:px-10 md:pb-28 md:pt-[calc(var(--navigation-height)+12rem)]">
      <div className="pointer-events-none absolute -right-[15%] -top-[30%] h-[70vh] w-[70vh] rounded-full bg-ember/15 blur-[14rem]" />
      <div className="relative mx-auto max-w-site">
        <motion.p
          className="eyebrow mb-10 flex items-center gap-3"
          initial={{ opacity: 0, x: -10 }}
          animate={play ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="h-px w-10 bg-ember" /> {eyebrow}
        </motion.p>
        <SplitReveal
          as="h1"
          text={title}
          play={play}
          delay={0.1}
          className="max-w-[140rem] text-display font-medium tracking-[-0.055em]"
        />
        {(intro || children) && (
          <motion.div
            className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[1fr_1fr] md:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={play ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          >
            {intro && <p className="max-w-[56rem] text-lg leading-relaxed text-bone/65 md:text-xl">{intro}</p>}
            {children && <div className="md:justify-self-end">{children}</div>}
          </motion.div>
        )}
      </div>
    </section>
  );
}
