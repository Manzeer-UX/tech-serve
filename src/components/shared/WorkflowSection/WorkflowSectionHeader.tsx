import { RevealInView } from "@/components/shared/RevealInView";
import { TrackPoint } from "@/components/shared/TrackPoint";
import { type WorkflowSectionContent } from "@/lib/landingPageContent";

function splitWorkflowTitle(title: string) {
  const [firstSentence, ...remainingSentences] = title.split(". ");
  const firstLine = firstSentence.endsWith(".")
    ? firstSentence
    : `${firstSentence}.`;

  return {
    firstLine,
    secondLine: remainingSentences.join(". "),
  };
}

export interface WorkflowSectionHeaderProps {
  content: WorkflowSectionContent;
}

export function WorkflowSectionHeader({
  content,
}: Readonly<WorkflowSectionHeaderProps>) {
  const { firstLine, secondLine } = splitWorkflowTitle(content.title);

  return (
    <RevealInView className="mx-auto max-w-[44rem] text-center">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] px-3.5 py-1.5 shadow-[var(--shadow-pill)]">
        <TrackPoint className="h-4 w-4" />
        <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
          Horizontal timeline
        </span>
      </div>

      <h2 className="mx-auto mt-5 max-w-[26ch] text-[clamp(2.1rem,3.5vw,3.45rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[var(--color-brand-black)]">
        <span className="block md:whitespace-nowrap">{firstLine}</span>
        <span className="block md:whitespace-nowrap">{secondLine}</span>
      </h2>

      <p className="mx-auto mt-6 max-w-[34rem] text-balance text-[1rem] leading-8 text-[var(--color-muted)]">
        {content.intro}
      </p>

      <div className="mx-auto mt-6 h-px w-full max-w-[11rem] bg-[linear-gradient(90deg,transparent,var(--color-primary-blue),transparent)] opacity-80" />

      <div className="mx-auto mt-6 grid max-w-[44rem] gap-4 text-left md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="rounded-[1.4rem] border border-[var(--color-border-subtle)] bg-white/72 px-5 py-4 shadow-[var(--shadow-pill)] backdrop-blur-sm">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
            System context
          </p>
          <p className="mt-2 text-[0.96rem] leading-7 text-[var(--color-muted)]">
            {content.supporting}
          </p>
        </div>

        <div className="rounded-[1.4rem] border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] px-5 py-4 shadow-[var(--shadow-pill)]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
            Why it matters
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 text-[var(--color-brand-black)]">
            {content.closing}
          </p>
        </div>
      </div>
    </RevealInView>
  );
}
