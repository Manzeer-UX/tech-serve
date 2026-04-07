import { RevealInView } from "@/components/shared/RevealInView";
import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type AudienceItem,
  type AudienceSectionContent,
} from "@/lib/landingPageContent";

import { AudienceCard } from "./AudienceCard";

export interface AudienceSectionProps {
  content: AudienceSectionContent;
  items: ReadonlyArray<AudienceItem>;
}

export function AudienceSection({
  content,
  items,
}: Readonly<AudienceSectionProps>) {
  return (
    <section className="relative pb-24 pt-8">
      <div className="rounded-[3rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,255,0.88))] px-5 py-6 shadow-[var(--shadow-hero)] md:px-7 md:py-7 lg:px-8 lg:py-8">
        <RevealInView className="max-w-[54rem]">
          <div className="inline-flex items-center gap-2.5">
            <TrackPoint className="h-4 w-4" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              {content.eyebrow}
            </span>
          </div>
          <TextReveal
            as="h2"
            className="mt-5 max-w-[16ch]"
            textClassName="text-balance text-[clamp(2rem,3.4vw,3.35rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--color-brand-black)]"
          >
            {content.title}
          </TextReveal>
          <p className="mt-5 max-w-[48rem] text-[1rem] leading-8 text-[var(--color-muted)]">
            {content.description}
          </p>
        </RevealInView>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {items.map((item, index) => (
            <AudienceCard key={item.id} delay={index * 0.08} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
