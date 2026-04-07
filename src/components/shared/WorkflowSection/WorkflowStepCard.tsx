import { cn } from "@/lib/cn";
import { type WorkflowStep } from "@/lib/landingPageContent";

export interface WorkflowStepCardProps {
  index: number;
  step: WorkflowStep;
}

interface WorkflowCardPanelProps {
  align: "bottom" | "top";
  step: WorkflowStep;
}

function WorkflowCardPanel({
  align,
  step,
}: Readonly<WorkflowCardPanelProps>) {
  const isTop = align === "top";
  const stepLabel = `Step ${Number(step.id)}`;

  return (
    <div
      className={cn(
        "relative w-full max-w-[16.75rem] self-start overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,240,255,0.88))] px-5 py-5 shadow-[var(--shadow-card)]",
        isTop ? "row-start-1" : "row-start-5",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.82),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(150,100,250,0.18),transparent_26%)]" />
     
      <div className="relative flex flex-col">
        <div>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {stepLabel}
          </span>
          <h3 className="mt-2 text-[1.28rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--color-brand-black)]">
            {step.title}
          </h3>
        </div>
        <p className="mt-3 text-[0.88rem] leading-6 text-[var(--color-muted)]">
          {step.description}
        </p>
        <div className="pt-4">
          <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/78 px-3 py-1.5 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {step.metric}
          </span>
        </div>
      </div>
    </div>
  );
}

export function WorkflowStepCard({
  index,
  step,
}: Readonly<WorkflowStepCardProps>) {
  const isTop = index % 2 === 0;

  return (
    <article className="grid h-full justify-items-center grid-rows-[15rem_3.75rem_2.25rem_3.75rem_15rem]">
      {isTop ? <WorkflowCardPanel align="top" step={step} /> : null}

      <span
        className={cn(
          "row-start-2 h-full w-px border-l border-dashed border-[var(--color-border-strong)]",
          !isTop && "opacity-0",
        )}
      />

      <span className="row-start-3 grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--color-primary-blue)] bg-white shadow-[var(--shadow-pill)]">
        <span className="h-3 w-3 rounded-full brand-gradient" />
      </span>

      <span
        className={cn(
          "row-start-4 h-full w-px border-l border-dashed border-[var(--color-border-strong)]",
          isTop && "opacity-0",
        )}
      />

      {!isTop ? <WorkflowCardPanel align="bottom" step={step} /> : null}
    </article>
  );
}
