import { type HeroMetricData } from "@/lib/landingPageContent";

import { HeroPanelAnimatedMetrics } from "./HeroPanelAnimatedMetrics";

export interface HeroPanelProps {
  items: ReadonlyArray<HeroMetricData>;
}

export function HeroPanel({ items }: Readonly<HeroPanelProps>) {
  return (
    <div className="relative mx-auto w-full max-w-[32rem]">
      <div className="panel-orb absolute inset-x-6 top-8 h-36 rounded-full blur-3xl sm:inset-x-10 sm:top-10 sm:h-44" />
      <div className="glass-surface relative overflow-hidden rounded-[1.85rem] border border-[var(--color-border-strong)] p-4 shadow-[var(--shadow-hero)] sm:rounded-[2.1rem] sm:p-5 md:p-6">
        <div className="absolute inset-x-6 top-0 h-px bg-[var(--color-panel-topline)] sm:inset-x-10" />

        <div className="flex flex-wrap items-center gap-1.5 text-[0.72rem] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-primary-blue)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-secondary-purple)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-border-strong)]" />
          <span className="ml-2">Why channel teams choose TechServ.ai</span>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] p-3.5 shadow-[var(--shadow-card)] sm:rounded-[1.7rem] sm:p-4">
          <div className="rounded-[1.2rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-soft)] px-3.5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)] sm:px-4 sm:text-[0.72rem]">
            Performance Snapshot
          </div>

          <HeroPanelAnimatedMetrics items={items} />
        </div>
      </div>
    </div>
  );
}
