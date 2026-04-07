import { cn } from "@/lib/cn";
import { RevealInView } from "@/components/shared/RevealInView";
import { TextReveal } from "@/components/shared/TextReveal";
import { type FeatureShowcaseItem, type FeatureShowcaseSectionContent } from "@/lib/landingPageContent";

import { FeatureShowcaseCard } from "./FeatureShowcaseCard";
import { FeatureShowcaseSectionBackground } from "./FeatureShowcaseSectionBackground";

export interface FeatureShowcaseSectionProps {
  content: FeatureShowcaseSectionContent;
  items: ReadonlyArray<FeatureShowcaseItem>;
}

function getFeatureShowcaseCardOffset(index: number) {
  return index % 2 === 0 ? -88 : 88;
}

export function FeatureShowcaseSection({
  content,
  items,
}: Readonly<FeatureShowcaseSectionProps>) {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-transparent pb-24 pt-16 md:pt-20">
      <FeatureShowcaseSectionBackground />
      <div className="relative z-10 mx-auto max-w-[1440px] bg-transparent px-6 md:px-10 lg:px-8">
        <RevealInView className="relative mx-auto max-w-[38rem] bg-transparent text-center">
          <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-transparent px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
            {content.eyebrow}
          </span>
          <TextReveal
            as="h2"
            className="mt-5"
            textClassName="justify-center text-balance text-[clamp(2rem,3.3vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.05em] text-[var(--color-brand-black)]"
          >
            {content.title}
          </TextReveal>
          <p className="mx-auto mt-5 max-w-[34rem] text-[1rem] leading-8 text-[var(--color-muted)]">
            {content.description}
          </p>
        </RevealInView>

        <div className="relative mt-10 grid gap-5 lg:grid-cols-6">
          {items.map((item, index) => (
            <RevealInView
              key={item.id}
              delay={index * 0.06}
              className={cn("lg:col-span-2")}
              initial={{
                opacity: 0,
                x: getFeatureShowcaseCardOffset(index),
                y: 28,
                scale: 0.94,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.82,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.07,
              }}
            >
              <FeatureShowcaseCard item={item} />
            </RevealInView>
          ))}
        </div>
      </div>
    </section>
  );
}
