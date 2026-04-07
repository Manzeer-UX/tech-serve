"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

import { type PhilosophySectionBlock as PhilosophySectionBlockType } from "@/lib/landingPageContent";

import { PhilosophySectionCard } from "./PhilosophySectionCard";

export interface PhilosophySectionScrollBlockProps {
  block: PhilosophySectionBlockType;
  index: number;
  progress: MotionValue<number>;
}

export function PhilosophySectionScrollBlock({
  block,
  index,
  progress,
}: Readonly<PhilosophySectionScrollBlockProps>) {
  const start = 0.34 + index * 0.07;
  const end = start + 0.09;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const x = useTransform(progress, [start, end], [72, 0]);
  const y = useTransform(progress, [start, end], [28, 0]);
  const scale = useTransform(progress, [start, end], [0.96, 1]);
  const filter = useTransform(progress, [start, end], ["blur(10px)", "blur(0px)"]);

  return (
    <motion.div style={{ opacity, x, y, scale, filter }}>
      <PhilosophySectionCard block={block} index={index} />
    </motion.div>
  );
}
