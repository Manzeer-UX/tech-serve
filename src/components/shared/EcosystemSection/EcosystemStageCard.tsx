import { cn } from "@/lib/cn";
import { type EcosystemStage } from "@/lib/landingPageContent";

export interface EcosystemStageCardProps {
  className?: string;
  index: number;
  stage: EcosystemStage;
}

export function EcosystemStageCard({
  className,
  index,
  stage,
}: Readonly<EcosystemStageCardProps>) {
  return (
    <article
      className={cn(
        "rounded-[1.5rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.88)] px-4 py-3.5 shadow-[var(--shadow-pill)]",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-visual-surface-strong)] text-[0.72rem] font-semibold text-[var(--color-secondary-purple)]">
          {String(index).padStart(2, "0")}
        </span>
        <p className="text-[0.92rem] font-semibold text-[var(--color-brand-black)]">
          {stage.label}
        </p>
      </div>
      <p className="mt-2 text-[0.84rem] leading-6 text-[var(--color-muted)]">
        {stage.detail}
      </p>
    </article>
  );
}
