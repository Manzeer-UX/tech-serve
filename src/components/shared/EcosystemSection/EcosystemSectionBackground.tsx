"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { Vortex } from "@/components/ui/Vortex";

export function EcosystemSectionBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    amount: 0.24,
    once: false,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      ref={containerRef}
    >
      <motion.div
        animate={{ opacity: isInView ? 1 : 0.35 }}
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,255,255,0.18)_34%,transparent_100%)]"
        initial={{ opacity: 0.35 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        animate={{ opacity: isInView ? 1 : 0.5, scale: isInView ? 1 : 0.96 }}
        className="absolute inset-x-[-10%] top-6 h-[24rem] bg-[radial-gradient(circle_at_18%_18%,rgba(150,100,250,0.16),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(80,0,254,0.12),transparent_22%),radial-gradient(circle_at_50%_64%,rgba(150,100,250,0.1),transparent_28%)] blur-3xl"
        initial={{ opacity: 0.5, scale: 0.96 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        animate={{ opacity: isInView ? 0.72 : 0 }}
        className="absolute inset-x-[-12%] top-[8%] h-[70%] [-webkit-mask-image:radial-gradient(circle_at_center,black_0%,black_54%,transparent_88%)] [mask-image:radial-gradient(circle_at_center,black_0%,black_54%,transparent_88%)]"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {isInView ? (
          <Vortex
            backgroundColor="transparent"
            baseHue={248}
            baseRadius={0.65}
            baseSpeed={0.12}
            containerClassName="h-full w-full mix-blend-multiply dark:mix-blend-screen"
            hueRange={24}
            particleCount={260}
            rangeRadius={1.4}
            rangeSpeed={1.2}
            rangeY={220}
          />
        ) : null}
      </motion.div>
      <motion.div
        animate={{ opacity: isInView ? 1 : 0.45 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(255,255,255,0.82),transparent_20%),radial-gradient(circle_at_84%_18%,rgba(255,255,255,0.58),transparent_16%),radial-gradient(circle_at_50%_74%,rgba(80,0,254,0.06),transparent_22%)]"
        initial={{ opacity: 0.45 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
