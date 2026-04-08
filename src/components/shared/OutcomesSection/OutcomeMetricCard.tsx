import { RevealInView } from "@/components/shared/RevealInView";
import { type OutcomeMetric } from "@/lib/landingPageContent";

export interface OutcomeMetricCardProps {
  delay?: number;
  metric: OutcomeMetric;
}

export function OutcomeMetricCard({
  delay = 0,
  metric,
}: Readonly<OutcomeMetricCardProps>) {
  return (
    <RevealInView
      delay={delay}
      className="relative pl-5"
    >
      <span className="absolute left-0 top-3 h-2.5 w-2.5 rounded-full brand-gradient shadow-[0_0_0_0.35rem_rgba(80,0,254,0.05)]" />
      <p className="text-[clamp(2rem,3vw,3.15rem)] font-semibold leading-none tracking-[-0.06em] text-[var(--color-brand-black)]">
        {metric.value}
      </p>
      <p className="mt-3 max-w-[15rem] text-[0.92rem] leading-7 text-[var(--color-muted)]">
        {metric.label}
      </p>
    </RevealInView>
  );
}
