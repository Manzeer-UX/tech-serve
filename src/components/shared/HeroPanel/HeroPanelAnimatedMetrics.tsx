"use client";

import { type HeroMetricData } from "@/lib/landingPageContent";

import { AnimatedList } from "./AnimatedList";
import { HeroPanelMetricCard } from "./HeroPanelMetricCard";

export interface HeroPanelAnimatedMetricsProps {
  items: ReadonlyArray<HeroMetricData>;
}

export function HeroPanelAnimatedMetrics({
  items,
}: Readonly<HeroPanelAnimatedMetricsProps>) {
  const animationKey = items
    .map((item) => `${item.value}-${item.description}`)
    .join("|");

  return (
    <>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item.description}>
            {item.value} {item.description}
          </li>
        ))}
      </ul>

      <div className="relative mt-4">
        <div aria-hidden="true" className="invisible space-y-3.5">
          {items.map((item) => (
            <HeroPanelMetricCard key={`placeholder-${item.description}`} item={item} />
          ))}
        </div>

        <AnimatedList
          key={animationKey}
          aria-hidden="true"
          delay={850}
          initialDelay={220}
          loopDelay={1450}
          className="absolute inset-0 pointer-events-none justify-start"
        >
          {items.map((item) => (
            <HeroPanelMetricCard key={item.description} item={item} />
          ))}
        </AnimatedList>
      </div>
    </>
  );
}
