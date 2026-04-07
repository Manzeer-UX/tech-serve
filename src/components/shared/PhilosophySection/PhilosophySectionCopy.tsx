import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import { type PhilosophySectionContent } from "@/lib/landingPageContent";

export interface PhilosophySectionCopyProps {
  content: PhilosophySectionContent;
}

function PhilosophyHighlightIcon() {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[1rem] border border-[var(--color-border-strong)] bg-white shadow-[var(--shadow-pill)]">
      <svg
        aria-hidden="true"
        viewBox="0 0 18 18"
        className="h-[1.1rem] w-[1.1rem] fill-none stroke-[var(--color-primary-blue)] stroke-[1.8]"
      >
        <path d="M4.5 9L7.5 12L13.5 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function PhilosophySectionCopy({
  content,
}: Readonly<PhilosophySectionCopyProps>) {
  return (
    <div className="relative z-10 max-w-[34rem]">
      <div className="inline-flex items-center gap-2.5">
        <TrackPoint className="h-4 w-4" />
        <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
          {content.eyebrow}
        </span>
      </div>

      <div className="mt-5 space-y-1">
        <TextReveal
          as="h2"
          textClassName="text-balance text-[clamp(2.1rem,3.5vw,3.45rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--color-brand-black)]"
        >
          {content.titleLead}
        </TextReveal>
        <TextReveal
          as="p"
          className="-mt-1"
          textClassName="brand-gradient-text text-balance text-[clamp(2.1rem,3.5vw,3.45rem)] font-medium leading-[1.02] tracking-[-0.05em]"
        >
          {content.titleAccent}
        </TextReveal>
      </div>

      <p className="mt-6 max-w-[32rem] text-[1rem] leading-8 text-[var(--color-muted)]">
        {content.description}
      </p>

      <div className="mt-8 space-y-4">
        {content.highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-start gap-3 rounded-[1.4rem] border border-[var(--color-border-subtle)] bg-white/72 px-4 py-4 shadow-[var(--shadow-pill)] backdrop-blur-sm"
          >
            <PhilosophyHighlightIcon />
            <p className="pt-0.5 text-[0.98rem] leading-7 text-[var(--color-brand-black)]">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
