import { RevealInView } from "@/components/shared/RevealInView";
import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type ActionLink,
  type FinalCtaSectionContent,
} from "@/lib/landingPageContent";

export interface FinalCtaSectionProps {
  actions: ReadonlyArray<ActionLink>;
  content: FinalCtaSectionContent;
}

export function FinalCtaSection({
  actions,
  content,
}: Readonly<FinalCtaSectionProps>) {
  return (
    <section className="relative pb-28 pt-8">
      <div className="relative overflow-hidden rounded-[3rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,239,255,0.92))] px-5 py-7 shadow-[var(--shadow-hero)] md:px-8 md:py-9">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent,rgba(150,100,250,0.08),transparent)]" />
        <div className="absolute inset-x-16 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-primary-blue),transparent)] opacity-80" />
        <div className="ambient-orb ambient-orb-left absolute -left-12 top-8 h-48 w-48 rounded-full bg-[var(--color-glow-secondary)] blur-3xl" />
        <div className="ambient-orb ambient-orb-right absolute bottom-[-2rem] right-[-3rem] h-56 w-56 rounded-full bg-[var(--color-glow-primary)] blur-3xl" />

        <RevealInView className="relative mx-auto max-w-[48rem] text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-white/86 px-4 py-2 shadow-[var(--shadow-pill)]">
            <TrackPoint className="h-4 w-4" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              {content.eyebrow}
            </span>
          </div>
          <TextReveal
            as="h2"
            className="mt-5"
            textClassName="justify-center text-balance text-[clamp(2rem,3.5vw,3.45rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--color-brand-black)]"
          >
            {content.title}
          </TextReveal>
          <p className="mt-5 text-[1rem] leading-8 text-[var(--color-muted)]">
            {content.description}
          </p>
        </RevealInView>

        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          {actions.map((action, index) => (
            <RevealInView
              key={action.label}
              delay={index * 0.08}
              className="rounded-[2rem] border border-[var(--color-border-strong)] bg-white/86 p-[1px] shadow-[var(--shadow-card)]"
            >
              <a
                href={action.href}
                className="group flex h-full min-h-[9.5rem] flex-col justify-between rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,244,255,0.88))] px-5 py-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
                  Next step {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <span className="max-w-[11ch] text-[1.18rem] font-semibold leading-7 tracking-[-0.03em] text-[var(--color-brand-black)]">
                    {action.label}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full brand-gradient text-white shadow-[var(--shadow-button)] transition-transform duration-300 group-hover:translate-x-1">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 18 18"
                      className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
                    >
                      <path d="M3.75 9H14.25" />
                      <path d="M9.75 4.5L14.25 9L9.75 13.5" />
                    </svg>
                  </span>
                </div>
              </a>
            </RevealInView>
          ))}
        </div>
      </div>
    </section>
  );
}
