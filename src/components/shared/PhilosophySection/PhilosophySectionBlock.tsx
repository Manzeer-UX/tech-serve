import { motion } from "motion/react";

import { type PhilosophySectionBlock as PhilosophySectionBlockType } from "@/lib/landingPageContent";

import { PhilosophySectionCard } from "./PhilosophySectionCard";

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
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : 56, y: 26 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      <PhilosophySectionCard block={block} index={index} />
    </motion.div>
  );
}
