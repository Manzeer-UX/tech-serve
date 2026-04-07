import { type WorkflowStep } from "@/lib/landingPageContent";

export interface WorkflowStepCardProps {
  isLast: boolean;
  step: WorkflowStep;
}

export function WorkflowStepCard({
  isLast,
  step,
}: Readonly<WorkflowStepCardProps>) {
  return (
    <article className="workflow-step-card relative pl-16">
      {!isLast ? (
        <span className="workflow-step-line absolute left-[1.45rem] top-12 bottom-[-1.6rem] w-px" />
      ) : null}
      <span className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-[1.15rem] border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] text-[0.75rem] font-semibold text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
        {step.id}
      </span>
      <div className="rounded-[1.8rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.86)] px-5 py-5 shadow-[var(--shadow-card)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-[1.1rem] font-semibold tracking-[-0.03em] text-[var(--color-brand-black)]">
            {step.title}
          </h3>
          <span className="rounded-full bg-[var(--color-visual-surface-strong)] px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
            {step.metric}
          </span>
        </div>
        <p className="mt-3 text-[0.96rem] leading-7 text-[var(--color-muted)]">
          {step.description}
        </p>
      </div>
    </article>
  );
}
