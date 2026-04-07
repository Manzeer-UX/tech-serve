import { motion } from "motion/react";

import { type PhilosophySectionBlock as PhilosophySectionBlockType } from "@/lib/landingPageContent";

export interface PhilosophySectionBlockProps {
  block: PhilosophySectionBlockType;
  delay?: number;
  index: number;
  isMobile?: boolean;
}

export function PhilosophySectionBlock({
  block,
  delay = 0,
  index,
  isMobile = false,
}: Readonly<PhilosophySectionBlockProps>) {
  return (
    <motion.article
      initial={{ opacity: 0, x: isMobile ? 0 : 56, y: 26 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className="rounded-[2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,243,255,0.78))] px-5 py-5 shadow-[var(--shadow-card)] md:px-6 md:py-6"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[rgba(80,0,254,0.08)] px-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--color-secondary-purple)]">
          {`0${index + 1}`}
        </span>
        <div className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-border-strong),transparent)]" />
      </div>

      <h3 className="mt-5 text-[1.28rem] font-semibold tracking-[-0.04em] text-[var(--color-brand-black)]">
        {block.title}
      </h3>
      <p className="mt-3 max-w-[30rem] text-[0.98rem] leading-7 text-[var(--color-muted)]">
        {block.description}
      </p>
    </motion.article>
  );
}
