import { type WorkflowStep } from "@/lib/landingPageContent";

export interface WorkflowStackedStepCardProps {
  index: number;
  isLast: boolean;
  step: WorkflowStep;
}

export function WorkflowStackedStepCard({
  index,
  isLast,
  step,
}: Readonly<WorkflowStackedStepCardProps>) {
  const stepLabel = `Step ${Number(step.id)}`;

  return (
    <li className="relative pl-12 sm:pl-14">
      {!isLast ? (
        <span className="absolute left-[0.95rem] top-11 bottom-[-1.4rem] w-px bg-[linear-gradient(180deg,rgba(80,0,254,0.18),rgba(150,100,250,0.08),transparent)] sm:left-[1.15rem]" />
      ) : null}

      <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border-2 border-[var(--color-primary-blue)] bg-white shadow-[var(--shadow-pill)] sm:h-10 sm:w-10">
        <span className="h-2.5 w-2.5 rounded-full brand-gradient" />
      </span>

      <article className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,240,255,0.88))] px-4 py-5 shadow-[var(--shadow-card)] sm:px-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              {stepLabel}
            </p>
            <h3 className="mt-2 text-[1.18rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-brand-black)]">
              {step.title}
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-[var(--color-border-strong)] bg-white/84 px-3 py-1.5 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
            0{index + 1}
          </span>
        </div>

        <p className="mt-3 text-[0.9rem] leading-7 text-[var(--color-muted)]">
          {step.description}
        </p>

        <div className="mt-5">
          <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/88 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
            {step.metric}
          </span>
        </div>
      </article>
    </li>
  );
}
