import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import { type EcosystemSectionContent } from "@/lib/landingPageContent";

export interface EcosystemSectionCopyProps {
  content: EcosystemSectionContent;
}

export function EcosystemSectionCopy({
  content,
}: Readonly<EcosystemSectionCopyProps>) {
  return (
    <div className="flex h-full flex-col justify-between rounded-[2.55rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.84)] px-6 py-6 shadow-[var(--shadow-card)] md:px-7 md:py-7">
      <div>
        <div className="inline-flex items-center gap-2.5">
          <TrackPoint className="h-4 w-4" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            Connected ecosystem
          </span>
        </div>

        <TextReveal
          as="h2"
          className="mt-5 max-w-[11ch]"
          textClassName="text-balance text-[clamp(1.95rem,3.35vw,3rem)] font-medium leading-[1.05] tracking-[-0.045em] text-[var(--color-brand-black)]"
        >
          {content.title}
        </TextReveal>

        <p className="mt-6 max-w-[33rem] text-[1.02rem] leading-8 text-[var(--color-muted)]">
          {content.intro}
        </p>
      </div>

      <div className="mt-7 overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] shadow-[var(--shadow-card)]">
        <div className="brand-gradient h-1.5 w-full" />
        <div className="px-5 py-5">
          <p className="text-[1.04rem] font-medium leading-7 text-[var(--color-brand-black)]">
            {content.supporting}
          </p>
        </div>
      </div>
    </div>
  );
}
