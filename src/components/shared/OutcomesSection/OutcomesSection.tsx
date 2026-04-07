import { RevealInView } from "@/components/shared/RevealInView";
import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type OutcomeMetric,
  type OutcomesSectionContent,
  type TestimonialItem,
} from "@/lib/landingPageContent";

import { OutcomeMetricCard } from "./OutcomeMetricCard";
import { TestimonialCard } from "./TestimonialCard";

export interface OutcomesSectionProps {
  content: OutcomesSectionContent;
  metrics: ReadonlyArray<OutcomeMetric>;
  testimonials: ReadonlyArray<TestimonialItem>;
}

export function OutcomesSection({
  content,
  metrics,
  testimonials,
}: Readonly<OutcomesSectionProps>) {
  return (
    <section className="relative pb-24 pt-8">
      <div className="relative overflow-hidden rounded-[3rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,243,255,0.9))] px-5 py-6 shadow-[var(--shadow-hero)] md:px-7 md:py-7 lg:px-8 lg:py-8">
        <div className="ambient-orb ambient-orb-left absolute left-[-2rem] top-10 h-44 w-44 rounded-full bg-[var(--color-glow-secondary)] blur-3xl" />
        <div className="ambient-orb ambient-orb-right absolute bottom-0 right-[-2rem] h-52 w-52 rounded-full bg-[var(--color-glow-primary)] blur-3xl" />

        <RevealInView className="mx-auto max-w-[48rem] text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-white/84 px-4 py-2 shadow-[var(--shadow-pill)]">
            <TrackPoint className="h-4 w-4" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              {content.eyebrow}
            </span>
          </div>
          <TextReveal
            as="h2"
            className="mt-5"
            textClassName="justify-center text-balance text-[clamp(2rem,3.4vw,3.35rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--color-brand-black)]"
          >
            {content.title}
          </TextReveal>
          <p className="mt-5 text-[1rem] leading-8 text-[var(--color-muted)]">
            {content.description}
          </p>
        </RevealInView>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <OutcomeMetricCard key={metric.label} delay={index * 0.06} metric={metric} />
          ))}
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} delay={index * 0.08} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
