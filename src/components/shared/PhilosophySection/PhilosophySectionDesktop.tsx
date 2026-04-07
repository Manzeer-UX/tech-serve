"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type PhilosophySectionBlock as PhilosophySectionBlockType,
  type PhilosophySectionContent,
} from "@/lib/landingPageContent";

import { PhilosophySectionScrollBlock } from "./PhilosophySectionScrollBlock";

export interface PhilosophySectionDesktopProps {
  blocks: ReadonlyArray<PhilosophySectionBlockType>;
  content: PhilosophySectionContent;
}

export function PhilosophySectionDesktop({
  blocks,
  content,
}: Readonly<PhilosophySectionDesktopProps>) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headingX = useTransform(scrollYProgress, [0, 0.28], ["22vw", "0vw"]);
  const headingScale = useTransform(scrollYProgress, [0, 0.28], [1.16, 0.92]);
  const headingY = useTransform(scrollYProgress, [0, 0.28], ["0vh", "-2vh"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const headingFilter = useTransform(scrollYProgress, [0, 0.1], ["blur(14px)", "blur(0px)"]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.88], [32, -24]);

  return (
    <div ref={sectionRef} className="hidden lg:block">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-8">
        <div className="grid min-h-[235vh] grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-12">
          <div className="relative">
            <div className="sticky top-20 flex min-h-[calc(100vh-5rem)] items-center">
              <motion.div
                style={{
                  x: headingX,
                  y: headingY,
                  scale: headingScale,
                  opacity: headingOpacity,
                  filter: headingFilter,
                }}
                className="w-full max-w-[34rem] origin-left"
              >
                <div className="flex items-center gap-2.5">
                  <TrackPoint className="h-4 w-4" />
                  <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
                    {content.eyebrow}
                  </span>
                </div>
                <h2 className="mt-6 text-[clamp(3.2rem,5.7vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.08em] text-[var(--color-brand-black)]">
                  <span className="block">{content.titleLead}</span>
                  <span className="brand-gradient-text block">{content.titleAccent}</span>
                </h2>
              </motion.div>
            </div>
          </div>

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="space-y-7 py-[18vh]"
          >
            {blocks.map((block, index) => (
              <PhilosophySectionScrollBlock
                key={block.title}
                block={block}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
