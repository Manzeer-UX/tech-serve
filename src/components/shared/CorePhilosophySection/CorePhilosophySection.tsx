import { RevealInView } from "@/components/shared/RevealInView";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type PhilosophySectionContent,
  type PhilosophySectionPanelContent,
} from "@/lib/landingPageContent";

import { CorePhilosophyVisual } from "./CorePhilosophyVisual";

export interface CorePhilosophySectionProps {
  content: PhilosophySectionContent;
  panel: PhilosophySectionPanelContent;
}

export function CorePhilosophySection({
  content,
  panel,
}: Readonly<CorePhilosophySectionProps>) {
  return (
    <section className="relative pb-24 pt-18 md:pt-22">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(22rem,1.12fr)] lg:items-center lg:gap-12">
        <RevealInView className="max-w-[34rem]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] px-3.5 py-1.5 shadow-[var(--shadow-pill)]">
            <TrackPoint className="h-4 w-4" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              {content.eyebrow}
            </span>
          </div>

          <div className="mt-5 space-y-1">
            <h2 className="text-balance text-[clamp(2.1rem,3.5vw,3.45rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--color-brand-black)]">
              {content.titleLead}
            </h2>
            <p className="-mt-1 brand-gradient-text text-balance text-[clamp(2.1rem,3.5vw,3.45rem)] font-medium leading-[1.02] tracking-[-0.05em]">
              {content.titleAccent}
            </p>
          </div>

          <p className="mt-6 max-w-[32rem] text-[1rem] leading-8 text-[var(--color-muted)]">
            {content.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="rounded-[1.4rem] border border-[var(--color-border-subtle)] bg-white/72 px-4 py-4 shadow-[var(--shadow-pill)] backdrop-blur-sm"
              >
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
                  0{index + 1}
                </span>
                <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-brand-black)]">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </RevealInView>

        <CorePhilosophyVisual panel={panel} />
      </div>
    </section>
  );
}
