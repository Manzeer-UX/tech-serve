import { RevealInView } from "@/components/shared/RevealInView";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type PhilosophySectionBlock as PhilosophySectionBlockType,
  type PhilosophySectionContent,
} from "@/lib/landingPageContent";

import { PhilosophySectionBlock } from "./PhilosophySectionBlock";

export interface PhilosophySectionMobileProps {
  blocks: ReadonlyArray<PhilosophySectionBlockType>;
  content: PhilosophySectionContent;
}

export function PhilosophySectionMobile({
  blocks,
  content,
}: Readonly<PhilosophySectionMobileProps>) {
  return (
    <div className="mx-auto max-w-[48rem] px-6 md:px-10 lg:hidden">
      <RevealInView className="text-center">
        <div className="inline-flex items-center gap-2.5">
          <TrackPoint className="h-4 w-4" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {content.eyebrow}
          </span>
        </div>
        <h2 className="mt-5 text-balance text-[clamp(2.5rem,11vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-[var(--color-brand-black)]">
          <span className="block">{content.titleLead}</span>
          <span className="brand-gradient-text block">{content.titleAccent}</span>
        </h2>
      </RevealInView>

      <div className="mt-10 space-y-4">
        {blocks.map((block, index) => (
          <PhilosophySectionBlock
            key={block.title}
            block={block}
            delay={index * 0.06}
            index={index}
            isMobile
          />
        ))}
      </div>
    </div>
  );
}
