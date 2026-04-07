import { RevealInView } from "@/components/shared/RevealInView";
import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import { type PainPointsSectionContent } from "@/lib/landingPageContent";

export interface PainPointsSectionHeaderProps {
  content: PainPointsSectionContent;
}

export function PainPointsSectionHeader({
  content,
}: Readonly<PainPointsSectionHeaderProps>) {
  return (
    <div className="pain-points-header-shell relative overflow-hidden rounded-[2.6rem] border border-[var(--color-border-strong)] px-5 py-6 md:px-7 md:py-7">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,244,255,0.7))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(150,100,250,0.12),transparent_24%),radial-gradient(circle_at_84%_26%,rgba(80,0,254,0.08),transparent_24%)]" />
      <div className="absolute right-[-3rem] top-[-1rem] h-28 w-28 rounded-full bg-[var(--color-glow-secondary)] blur-3xl opacity-60" />

      <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:items-end lg:gap-x-16 xl:gap-x-24">
        <div className="max-w-[40rem]">
          <RevealInView className="inline-flex items-center gap-2.5">
            <TrackPoint className="h-[18px] w-[18px]" />
            <span className="inline-flex rounded-full bg-[var(--color-surface-soft)] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
              {content.eyebrow}
            </span>
          </RevealInView>

          <TextReveal
            as="h2"
            className="mt-5 max-w-[16ch]"
            textClassName="text-left text-[clamp(2.15rem,3.2vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.052em] text-[var(--color-brand-black)]"
          >
            {content.title}
          </TextReveal>

          <RevealInView delay={0.1} className="mt-6 flex flex-wrap items-center gap-3">
            <span className="pain-points-signal relative h-px w-full max-w-[12rem]" />
            <span className="rounded-full border border-[var(--color-border-strong)] bg-white/78 px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
              Signal delay across the channel
            </span>
          </RevealInView>
        </div>

        <RevealInView delay={0.14} className="lg:justify-self-end">
          <div className="rounded-[1.8rem] border border-[var(--color-border-strong)] bg-white/82 px-5 py-5 shadow-[var(--shadow-card)] backdrop-blur-sm">
            <p className="max-w-[27rem] text-[0.98rem] leading-8 text-[var(--color-muted)]">
              {content.lead} {content.bridge}
            </p>
          </div>
        </RevealInView>
      </div>
    </div>
  );
}
