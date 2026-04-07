import { type HeroMetricData } from "@/lib/landingPageContent";

import { HeroPanelAnimatedMetrics } from "./HeroPanelAnimatedMetrics";

export interface HeroPanelProps {
  items: ReadonlyArray<HeroMetricData>;
}

export function HeroPanel({ items }: Readonly<HeroPanelProps>) {
  return (
    <div className="relative mx-auto w-full max-w-[29rem]">
      <div className="panel-orb absolute inset-x-10 top-10 h-44 rounded-full blur-3xl" />
      <div className="glass-surface relative overflow-hidden rounded-[2.1rem] border border-[var(--color-border-strong)] p-5 shadow-[var(--shadow-hero)] md:p-6">
        <div className="absolute inset-x-10 top-0 h-px bg-[var(--color-panel-topline)]" />

        <div className="flex items-center gap-1.5 text-[0.72rem] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-primary-blue)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-secondary-purple)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-border-strong)]" />
          <span className="ml-2">Why channel teams choose TechServ.ai</span>
        </div>

        <div className="mt-5 rounded-[1.7rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] p-4 shadow-[var(--shadow-card)]">
          <div className="rounded-[1.2rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-soft)] px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            Performance Snapshot
          </div>

          <HeroPanelAnimatedMetrics items={items} />
        </div>
      </div>
    </div>
  );
}
