import { RevealInView } from "@/components/shared/RevealInView";
import {
  type ExposureItem,
  type ExposureSectionContent,
} from "@/lib/landingPageContent";

import { ExposureBenefitCard } from "./ExposureBenefitCard";

const desktopCardPositions = [
  "left-[16%] top-0 max-w-[11rem]",
  "right-[16%] top-[3rem] max-w-[12rem]",
  "left-[8%] top-[9.25rem] max-w-[15rem]",
  "right-[8%] top-[9.25rem] max-w-[13rem]",
  "left-1/2 top-[15.5rem] max-w-[11rem] -translate-x-1/2",
] as const;

export interface ExposureSectionProps {
  content: ExposureSectionContent;
  items: ReadonlyArray<ExposureItem>;
}

export function ExposureSection({
  content,
  items,
}: Readonly<ExposureSectionProps>) {
  return (
    <section className="relative pb-24 pt-18 md:pt-22">
      <div className="relative overflow-hidden rounded-[3rem] px-4 py-10 md:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(82,214,201,0.16),transparent_20%),radial-gradient(circle_at_86%_22%,rgba(150,100,250,0.12),transparent_20%),radial-gradient(circle_at_80%_84%,rgba(179,255,111,0.12),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.08))]" />

        <RevealInView className="relative mx-auto max-w-[30rem] text-center">
          <h2 className="mx-auto max-w-[12ch] text-balance text-[clamp(2rem,3.3vw,3.2rem)] font-medium leading-[1.03] tracking-[-0.05em] text-[var(--color-brand-black)]">
            {content.title}
          </h2>
        </RevealInView>

        <div className="relative mt-10 hidden min-h-[27rem] lg:block">
          {items.map((item, index) => (
            <RevealInView
              key={item.id}
              delay={index * 0.05}
              className={`absolute ${desktopCardPositions[index]}`}
            >
              <ExposureBenefitCard item={item} />
            </RevealInView>
          ))}
        </div>

        <div className="relative mt-10 grid gap-4 lg:hidden">
          {items.map((item, index) => (
            <RevealInView key={item.id} delay={index * 0.05}>
              <ExposureBenefitCard item={item} />
            </RevealInView>
          ))}
        </div>
      </div>
    </section>
  );
}
