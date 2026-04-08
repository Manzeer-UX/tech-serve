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
        "relative overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,238,255,0.88))] px-5 py-5 shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <div className="absolute right-[-1.25rem] top-[-1.25rem] h-24 w-24 rounded-full bg-[rgba(150,100,250,0.12)] blur-3xl" />
      <div className="relative flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white/84 text-[0.72rem] font-semibold text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
          {String(index).padStart(2, "0")}
        </span>
        <p className="text-[0.98rem] font-semibold tracking-[-0.03em] text-[var(--color-brand-black)]">
          {stage.label}
        </p>
      </div>
      <p className="relative mt-4 text-[0.9rem] leading-7 text-[var(--color-muted)]">
        {stage.detail}
      </p>
    </article>
  );
}
