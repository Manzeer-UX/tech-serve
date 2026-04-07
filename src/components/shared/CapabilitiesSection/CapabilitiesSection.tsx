import { RevealInView } from "@/components/shared/RevealInView";
import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type CapabilitiesSectionContent,
  type CapabilityItem,
} from "@/lib/landingPageContent";

import { CapabilityCard } from "./CapabilityCard";

export interface CapabilitiesSectionProps {
  content: CapabilitiesSectionContent;
  items: ReadonlyArray<CapabilityItem>;
}

export function CapabilitiesSection({
  content,
  items,
}: Readonly<CapabilitiesSectionProps>) {
  return (
    <section className="relative pb-24 pt-8">
      <RevealInView className="mx-auto max-w-[52rem] text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-white/84 px-4 py-2 shadow-[var(--shadow-pill)]">
          <TrackPoint className="h-4 w-4" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {content.eyebrow}
          </span>
        </div>
        <TextReveal
          as="h2"
          className="mt-5"
          textClassName="justify-center text-balance text-[clamp(2rem,3.4vw,3.4rem)] font-medium leading-[1.03] tracking-[-0.05em] text-[var(--color-brand-black)]"
        >
          {content.title}
        </TextReveal>
        <p className="mx-auto mt-5 max-w-[44rem] text-[1rem] leading-8 text-[var(--color-muted)]">
          {content.description}
        </p>
      </RevealInView>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <CapabilityCard key={item.id} delay={index * 0.06} item={item} />
        ))}
      </div>
    </section>
  );
}
