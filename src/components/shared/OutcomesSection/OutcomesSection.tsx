import { RevealInView } from "@/components/shared/RevealInView";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type AudienceItem,
  type AudienceSectionContent,
} from "@/lib/landingPageContent";

import { OutcomesAudienceCard } from "./OutcomesAudienceCard";

function splitAudienceTitle(title: string) {
  const normalizedTitle = title.replace(/\s+/g, " ").trim();

  if (normalizedTitle === "Built for Every Layer of the IT Sales Ecosystem.") {
    return ["Built for Every Layer", "of the IT Sales Ecosystem."];
  }

  return [normalizedTitle];
}

export interface OutcomesSectionProps {
  content: AudienceSectionContent;
  items: ReadonlyArray<AudienceItem>;
}

export function OutcomesSection({
  content,
  items,
}: Readonly<OutcomesSectionProps>) {
  const titleLines = splitAudienceTitle(content.title);

  return (
    <section className="relative pb-24 pt-18 md:pt-22">
      <RevealInView className="relative mx-auto max-w-[56rem] text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-white/82 px-4 py-2 shadow-[var(--shadow-pill)]">
          <TrackPoint className="h-4 w-4" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {content.eyebrow}
          </span>
        </div>

        <h2 className="mx-auto mt-6 max-w-[22ch] text-balance text-[clamp(2.35rem,4vw,4.4rem)] font-medium leading-[1.03] tracking-[-0.06em] text-[var(--color-brand-black)]">
          {titleLines.map((line) => (
            <span key={line} className="block md:whitespace-nowrap">
              {line}
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-6 max-w-[43rem] text-[1rem] leading-8 text-[var(--color-muted)]">
          {content.description}
        </p>

        <div className="mx-auto mt-7 flex w-full max-w-[12rem] items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full brand-gradient" />
          <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(80,0,254,0.32),transparent)]" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            Segments
          </span>
        </div>
      </RevealInView>

      <ol className="relative mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {items.map((item, index) => (
          <OutcomesAudienceCard
            key={item.id}
            delay={index * 0.08}
            index={index}
            item={item}
          />
        ))}
      </ol>
    </section>
  );
}
