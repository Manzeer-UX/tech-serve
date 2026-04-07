"use client";

import {
  type PhilosophySectionBlock as PhilosophySectionBlockType,
  type PhilosophySectionContent,
} from "@/lib/landingPageContent";

import { PhilosophySectionDesktop } from "./PhilosophySectionDesktop";
import { PhilosophySectionMobile } from "./PhilosophySectionMobile";

export interface PhilosophySectionProps {
  blocks: ReadonlyArray<PhilosophySectionBlockType>;
  content: PhilosophySectionContent;
}

export function PhilosophySection({
  blocks,
  content,
}: Readonly<PhilosophySectionProps>) {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-24 pt-10 md:pt-14 lg:pt-18">
      <PhilosophySectionMobile blocks={blocks} content={content} />
      <PhilosophySectionDesktop blocks={blocks} content={content} />
    </section>
  );
}
