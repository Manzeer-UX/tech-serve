import { RevealInView } from "@/components/shared/RevealInView";
import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type WorkflowSectionContent,
  type WorkflowStep,
} from "@/lib/landingPageContent";

import { WorkflowStepCard } from "./WorkflowStepCard";

export interface WorkflowSectionProps {
  content: WorkflowSectionContent;
  steps: ReadonlyArray<WorkflowStep>;
}

export function WorkflowSection({
  content,
  steps,
}: Readonly<WorkflowSectionProps>) {
  return (
    <section className="relative pb-24 pt-18 md:pt-22">
      <div className="relative overflow-hidden rounded-[3rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,242,255,0.9))] px-5 py-6 shadow-[var(--shadow-hero)] md:px-7 md:py-7 lg:px-8 lg:py-8">
        <div className="absolute inset-0 bg-[linear-gradient(var(--color-border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--color-border-subtle)_1px,transparent_1px)] bg-[size:5.25rem_5.25rem] opacity-25" />
        <div className="ambient-orb ambient-orb-left absolute -left-10 top-12 h-48 w-48 rounded-full bg-[var(--color-glow-secondary)] blur-3xl" />
        <div className="ambient-orb ambient-orb-right absolute bottom-0 right-[-3rem] h-56 w-56 rounded-full bg-[var(--color-glow-primary)] blur-3xl" />

        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start">
          <RevealInView className="rounded-[2.35rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.84)] px-6 py-6 shadow-[var(--shadow-card)] md:px-7 md:py-7">
            <div className="inline-flex items-center gap-2.5">
              <TrackPoint className="h-4 w-4" />
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
                Connected workflow
              </span>
            </div>
            <TextReveal
              as="h2"
              className="mt-5 max-w-[13ch]"
              textClassName="text-balance text-[clamp(2rem,3.2vw,3.35rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--color-brand-black)]"
            >
              {content.title}
            </TextReveal>
            <p className="mt-5 text-[1rem] leading-8 text-[var(--color-muted)]">
              {content.intro}
            </p>
            <p className="mt-4 text-[0.98rem] leading-8 text-[var(--color-muted)]">
              {content.supporting}
            </p>
            <div className="mt-8 rounded-[1.9rem] border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] px-5 py-5 shadow-[var(--shadow-pill)]">
              <p className="text-[1.08rem] font-semibold leading-8 tracking-[-0.03em] text-[var(--color-brand-black)]">
                {content.closing}
              </p>
            </div>
          </RevealInView>

          <div className="relative rounded-[2.4rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.7)] px-5 py-5 shadow-[var(--shadow-card)]">
            <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-primary-blue),transparent)] opacity-80" />
            <div className="relative space-y-5">
              {steps.map((step, index) => (
                <RevealInView key={step.id} delay={index * 0.08}>
                  <WorkflowStepCard isLast={index === steps.length - 1} step={step} />
                </RevealInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
