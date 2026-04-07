import { type EcosystemStage } from "@/lib/landingPageContent";

import { EcosystemStageCard } from "./EcosystemStageCard";

export interface EcosystemSectionDiagramProps {
  stages: ReadonlyArray<EcosystemStage>;
}

export function EcosystemSectionDiagram({
  stages,
}: Readonly<EcosystemSectionDiagramProps>) {
  const leftStages = stages.slice(0, 3);
  const rightStages = stages.slice(3, 6);

  return (
    <div className="glass-surface relative overflow-hidden rounded-[2.75rem] border border-[var(--color-border-strong)] p-5 shadow-[var(--shadow-hero)] md:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--color-border-subtle)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,var(--color-glow-secondary),transparent_24%),radial-gradient(circle_at_82%_74%,var(--color-glow-primary),transparent_26%)] opacity-75" />

      <div className="relative grid gap-3 lg:grid-cols-[minmax(0,1fr)_12rem_minmax(0,1fr)] lg:gap-4">
        <div className="space-y-3">
          {leftStages.map((stage, index) => (
            <EcosystemStageCard key={stage.label} index={index + 1} stage={stage} />
          ))}
        </div>

        <div className="relative flex items-center justify-center py-4 lg:py-0">
          <div className="absolute left-1/2 top-1/2 hidden h-[72%] w-px -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,transparent,var(--color-border-strong),transparent)] lg:block" />
          <div className="absolute left-1/2 top-1/2 hidden h-px w-[185%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,var(--color-border-strong),transparent)] lg:block" />
          <div className="absolute left-1/2 top-1/2 h-[9rem] w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-glow-floor)] blur-3xl" />

          <div className="relative w-full max-w-[11rem] rounded-[2rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.88)] px-5 py-6 shadow-[var(--shadow-card)] backdrop-blur-sm">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-[1.3rem] brand-gradient shadow-[var(--shadow-button)]">
              <div className="grid h-7 w-7 grid-cols-2 gap-1">
                <span className="rounded-sm bg-white/95" />
                <span className="rounded-sm bg-white/75" />
                <span className="rounded-sm bg-white/75" />
                <span className="rounded-sm bg-white/95" />
              </div>
            </div>

            <p className="mt-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              TechServ.ai
            </p>
            <p className="mt-2 text-center text-[0.93rem] font-medium leading-6 text-[var(--color-brand-black)]">
              Connected operating system
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {rightStages.map((stage, index) => (
            <EcosystemStageCard
              key={stage.label}
              index={index + leftStages.length + 1}
              stage={stage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
