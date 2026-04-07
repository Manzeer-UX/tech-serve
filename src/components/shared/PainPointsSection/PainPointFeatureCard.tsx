import { type PainPointItem } from "@/lib/landingPageContent";

import { PainPointCardShell } from "./PainPointCardShell";

export interface PainPointFeatureCardProps {
  item: PainPointItem;
}

const signalNodePositions = [
  "left-[18%] top-[44%]",
  "left-[36%] top-[40%]",
  "left-[58%] top-[44%]",
  "left-[73%] top-[60%]",
  "left-[29%] top-[72%]",
  "left-[55%] top-[67%]",
] as const;

export function PainPointFeatureCard({
  item,
}: Readonly<PainPointFeatureCardProps>) {
  return (
    <PainPointCardShell id={item.id} label="Visibility gap">
      <div className="grid flex-1 gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(15rem,1.08fr)] xl:items-center">
        <div>
          <h3 className="max-w-[16ch] text-[clamp(1.22rem,1.6vw,1.6rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--color-brand-black)]">
            {item.title}
          </h3>
          <p className="mt-3 max-w-[36ch] text-[0.92rem] leading-6 text-[var(--color-muted)]">
            {item.description}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[1.45rem] bg-[var(--color-surface-soft)] p-4 shadow-[inset_0_1px_0_var(--color-panel-topline)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,var(--color-visual-surface-secondary),transparent_24%),radial-gradient(circle_at_88%_82%,var(--color-visual-surface-strong),transparent_22%)]" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-[var(--color-visual-ink)]" />
          <div className="absolute left-1/3 top-0 h-full w-px bg-[var(--color-visual-ink)]" />
          <div className="absolute left-2/3 top-0 h-full w-px bg-[var(--color-visual-ink)]" />

          <div className="relative h-[10.75rem]">
            <div className="absolute left-[8%] top-[30%] h-10 w-[5.2rem] rounded-[50%] bg-[var(--color-visual-surface-strong)]" />
            <div className="absolute left-[31%] top-[22%] h-[3.4rem] w-[5.5rem] rounded-[48%] bg-[var(--color-visual-surface-secondary)]" />
            <div className="absolute left-[54%] top-[28%] h-[3rem] w-[5.25rem] rounded-[48%] bg-[var(--color-visual-surface-strong)]" />
            <div className="absolute left-[71%] top-[44%] h-10 w-[4.4rem] rounded-[48%] bg-[var(--color-visual-surface-secondary)]" />
            <div className="absolute left-[19%] top-[62%] h-[3rem] w-[3.5rem] rounded-[48%] bg-[var(--color-visual-surface-secondary)]" />
            <div className="absolute left-[48%] top-[58%] h-[2.75rem] w-[4rem] rounded-[48%] bg-[var(--color-visual-surface-strong)]" />

            {signalNodePositions.map((position) => (
              <span
                key={position}
                className={`absolute ${position} flex h-5 w-5 items-center justify-center`}
              >
                <span className="absolute h-5 w-5 rounded-full brand-gradient opacity-22" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-visual-dot)] ring-4 ring-[var(--color-secondary-purple)]/35" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </PainPointCardShell>
  );
}
