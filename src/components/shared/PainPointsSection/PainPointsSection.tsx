import {
  type PainPointItem,
  type PainPointsSectionContent,
} from "@/lib/landingPageContent";

import { PainPointFeatureCard } from "./PainPointFeatureCard";
import { PainPointInfoCard } from "./PainPointInfoCard";
import { PainPointsSectionHeader } from "./PainPointsSectionHeader";

export interface PainPointsSectionProps {
  content: PainPointsSectionContent;
  items: ReadonlyArray<PainPointItem>;
}

export function PainPointsSection({
  content,
  items,
}: Readonly<PainPointsSectionProps>) {
  return (
    <section className="relative mt-10 pb-16 pt-6 md:mt-12 md:pb-20 md:pt-8 lg:mt-16">
      <div className="relative px-4 py-5 md:px-6 md:py-7 lg:px-8 lg:py-8">
        <PainPointsSectionHeader content={content} />

        <div className="relative mt-8 grid gap-4 md:mt-10 lg:grid-cols-2 xl:gap-5">
          <div className="h-full">
            <PainPointFeatureCard item={items[0]} />
          </div>

          <div className="h-full">
            <PainPointInfoCard item={items[1]} variant="workflow" />
          </div>

          <div className="h-full">
            <PainPointInfoCard item={items[2]} variant="cash" />
          </div>

          <div className="h-full">
            <PainPointInfoCard item={items[3]} variant="expertise" />
          </div>

          <div className="h-full">
            <PainPointInfoCard item={items[4]} variant="silos" />
          </div>

          <div className="h-full">
            <PainPointInfoCard item={items[5]} variant="market" />
          </div>
        </div>
      </div>
    </section>
  );
}
