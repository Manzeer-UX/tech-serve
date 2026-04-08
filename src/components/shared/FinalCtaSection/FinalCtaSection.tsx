import { RevealInView } from "@/components/shared/RevealInView";
import {
  type ActionLink,
  type FinalCtaSectionContent,
} from "@/lib/landingPageContent";

import { FinalCtaActionRail } from "./FinalCtaActionRail";
import { FinalCtaLogoMark } from "./FinalCtaLogoMark";

export interface FinalCtaSectionProps {
  actions: ReadonlyArray<ActionLink>;
  content: FinalCtaSectionContent;
}

function splitFinalCtaTitle(title: string) {
  const normalizedTitle = title.replace(/\s+/g, " ").trim();

  if (normalizedTitle === "The Platform Was Built for You.") {
    return ["The Platform Was", "Built for You."];
  }

  return [normalizedTitle];
}

export function FinalCtaSection({
  actions,
  content,
}: Readonly<FinalCtaSectionProps>) {
  const titleLines = splitFinalCtaTitle(content.title);

  return (
    <section className="relative overflow-hidden pb-28 pt-18 md:pt-22">
      <div className="relative mx-auto flex max-w-[58rem] flex-col items-center text-center">
        <RevealInView className="flex justify-center" distance={18}>
          <FinalCtaLogoMark />
        </RevealInView>

        <RevealInView className="mt-5" delay={0.06} distance={18}>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {content.eyebrow}
          </p>
        </RevealInView>

        <RevealInView className="mx-auto mt-4 " delay={0.08} distance={20}>
          <h2 className="text-balance text-[clamp(2.45rem,4.6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.06em] text-[var(--color-brand-black)]">
            {titleLines.map((line) => (
              <span key={line} className="block md:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
        </RevealInView>

        <RevealInView className="mx-auto mt-5 max-w-[42rem]" delay={0.1}>
          <p className="text-[1rem] leading-8 text-[var(--color-muted)]">
            {content.description}
          </p>
        </RevealInView>

        <RevealInView className="mt-10 w-full" delay={0.16} distance={26}>
          <FinalCtaActionRail actions={actions} />
        </RevealInView>
      </div>
    </section>
  );
}
