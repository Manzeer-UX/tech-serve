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
      className="rounded-[1.9rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.88)] px-5 py-5 shadow-[var(--shadow-card)]"
    >
      <p className="text-[clamp(1.75rem,3vw,2.7rem)] font-semibold leading-none tracking-[-0.05em] text-[var(--color-brand-black)]">
        {metric.value}
      </p>
      <p className="mt-3 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
        {metric.label}
      </p>
    </RevealInView>
  );
}
