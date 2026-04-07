import { type EcosystemSectionContent } from "@/lib/landingPageContent";

export interface EcosystemSectionFlowProps {
  content: EcosystemSectionContent;
}

export function EcosystemSectionFlow({
  content,
}: Readonly<EcosystemSectionFlowProps>) {
  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
      <div className="rounded-[2.35rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.84)] px-5 py-5 shadow-[var(--shadow-card)]">
        <p className="text-[1rem] leading-8 text-[var(--color-muted)]">
          {content.systemNarrative}
        </p>
      </div>

      <div className="brand-gradient rounded-[2.35rem] p-px shadow-[var(--shadow-button)]">
        <div className="h-full rounded-[calc(2.35rem-1px)] bg-[var(--color-surface-card)] px-5 py-5">
          <p className="text-[1.26rem] font-semibold leading-8 tracking-[-0.03em] text-[var(--color-brand-black)]">
            {content.closing}
          </p>
        </div>
      </div>
    </div>
  );
}
