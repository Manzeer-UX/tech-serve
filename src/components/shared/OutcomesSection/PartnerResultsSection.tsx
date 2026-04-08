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

export interface PartnerResultsSectionProps {
  content: OutcomesSectionContent;
  metrics: ReadonlyArray<OutcomeMetric>;
  testimonials: ReadonlyArray<TestimonialItem>;
}

export function PartnerResultsSection({
  content,
  metrics,
  testimonials,
}: Readonly<PartnerResultsSectionProps>) {
  return (
    <section className="relative pb-24 pt-18 md:pt-22">
      <RevealInView className="relative mx-auto max-w-[48rem] text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-white/82 px-4 py-2 shadow-[var(--shadow-pill)]">
          <TrackPoint className="h-4 w-4" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {content.eyebrow}
          </span>
        </div>

        <TextReveal
          as="h2"
          className="mx-auto mt-6"
          textClassName="justify-center text-balance text-[clamp(2.2rem,3.8vw,4rem)] font-medium leading-[1.02] tracking-[-0.055em] text-[var(--color-brand-black)]"
        >
          {content.title}
        </TextReveal>

        <p className="mx-auto mt-5 max-w-[36rem] text-[1rem] leading-8 text-[var(--color-muted)]">
          {content.description}
        </p>
      </RevealInView>

      <div className="relative mt-12">
        <div className="grid gap-7 border-b border-[var(--color-border-subtle)] pb-8 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <OutcomeMetricCard
              key={metric.label}
              delay={index * 0.06}
              metric={metric}
            />
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
