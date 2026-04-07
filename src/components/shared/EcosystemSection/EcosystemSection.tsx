import {
  type EcosystemSectionContent,
  type EcosystemStage,
} from "@/lib/landingPageContent";

import { EcosystemSectionCopy } from "./EcosystemSectionCopy";
import { EcosystemSectionDiagram } from "./EcosystemSectionDiagram";
import { EcosystemSectionFlow } from "./EcosystemSectionFlow";

export interface EcosystemSectionProps {
  content: EcosystemSectionContent;
  stages: ReadonlyArray<EcosystemStage>;
}

export function EcosystemSection({
  content,
  stages,
}: Readonly<EcosystemSectionProps>) {
  return (
    <section className="relative pb-24 pt-14 md:pt-18 lg:pt-20">
      <div className="relative overflow-hidden rounded-[3rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(249,245,255,0.9))] px-5 py-6 shadow-[var(--shadow-hero)] md:px-7 md:py-7 lg:px-8 lg:py-8">
        <div className="absolute inset-0 bg-[linear-gradient(var(--color-border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--color-border-subtle)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-25" />
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-[var(--color-glow-secondary)] blur-3xl" />
        <div className="absolute bottom-2 right-[-4rem] h-56 w-56 rounded-full bg-[var(--color-glow-primary)] blur-3xl" />
        <div className="absolute inset-x-[14%] top-[20%] h-60 rounded-full bg-[var(--color-glow-floor)] blur-3xl" />

        <div className="relative">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-stretch">
            <EcosystemSectionCopy content={content} />
            <EcosystemSectionDiagram stages={stages} />
          </div>

          <EcosystemSectionFlow content={content} />
        </div>
      </div>
    </section>
  );
}
