import { RevealInView } from "@/components/shared/RevealInView";
import { TextReveal } from "@/components/shared/TextReveal";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type EcosystemSectionContent,
  type EcosystemStage,
} from "@/lib/landingPageContent";

import { EcosystemSectionBackground } from "./EcosystemSectionBackground";
import { EcosystemStageCard } from "./EcosystemStageCard";

function splitEcosystemTitle(title: string) {
  const normalizedTitle = title.replace(/\s+/g, " ").trim();

  if (normalizedTitle === "One Platform. Entire Ecosystem.") {
    return ["One Platform.", "Entire Ecosystem."];
  }

  return [normalizedTitle];
}

export interface EcosystemSectionProps {
  content: EcosystemSectionContent;
  stages: ReadonlyArray<EcosystemStage>;
}

export function EcosystemSection({
  content,
  stages,
}: Readonly<EcosystemSectionProps>) {
  const titleLines = splitEcosystemTitle(content.title);

  return (
    <section className="relative isolate overflow-hidden pb-24 pt-18 md:pt-22">
      <EcosystemSectionBackground />

      <div className="relative mx-auto max-w-[56rem] text-center">
        <RevealInView className="inline-flex" distance={18}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-white/82 px-4 py-2 shadow-[var(--shadow-pill)]">
            <TrackPoint className="h-4 w-4" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              Connected ecosystem
            </span>
          </div>
        </RevealInView>

        <div className="mx-auto mt-6 flex max-w-[15ch] flex-col items-center gap-1">
          {titleLines.map((line) => (
            <TextReveal
              key={line}
              as="h2"
              className="w-full"
              textClassName="justify-center text-balance text-[clamp(2.4rem,4.2vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.06em] text-[var(--color-brand-black)] md:whitespace-nowrap"
            >
              {line}
            </TextReveal>
          ))}
        </div>

        <RevealInView className="mx-auto mt-6 max-w-[46rem]" delay={0.08}>
          <p className="text-[1rem] leading-8 text-[var(--color-muted)]">
            {content.intro}
          </p>
        </RevealInView>

        <RevealInView className="mx-auto mt-5 max-w-[40rem]" delay={0.14}>
          <p className="text-[0.96rem] leading-8 text-[var(--color-muted)]">
            {content.supporting}
          </p>
        </RevealInView>
      </div>

      <div className="relative mt-14">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(80,0,254,0.14),transparent)] lg:block" />
        <div className="absolute inset-x-[18%] top-1/2 hidden h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(80,0,254,0.14),transparent)] lg:block" />

        <div className="grid gap-5 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <RevealInView
              key={stage.label}
              className={`relative overflow-hidden rounded-[2rem] ${
                index % 3 === 1 ? "lg:translate-y-10" : ""
              }`}
              delay={index * 0.08}
              distance={56}
              viewport={{ once: true, amount: 0.32 }}
            >
              <EcosystemStageCard index={index + 1} stage={stage} />
            </RevealInView>
          ))}
        </div>
      </div>

      <RevealInView className="relative mx-auto mt-12 max-w-[52rem]">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(243,236,255,0.88))] px-6 py-6 shadow-[var(--shadow-card)]">
          <div className="absolute left-[-10%] top-[-30%] h-40 w-40 rounded-full bg-[rgba(150,100,250,0.14)] blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-40%] h-44 w-44 rounded-full bg-[rgba(80,0,254,0.1)] blur-3xl" />
          <p className="relative text-center text-[1rem] leading-8 text-[var(--color-brand-black)] md:text-[1.08rem]">
            {content.systemNarrative}
          </p>
          <p className="relative mt-6 text-center text-[1.22rem] font-semibold leading-8 tracking-[-0.03em] text-[var(--color-brand-black)]">
            {content.closing}
          </p>
        </div>
      </RevealInView>
    </section>
  );
}
