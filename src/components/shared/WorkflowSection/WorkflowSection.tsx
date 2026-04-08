"use client";

import { cn } from "@/lib/cn";
import {
  type CapabilitiesSectionContent,
  type CapabilityItem,
  type WorkflowSectionContent,
  type WorkflowStep,
} from "@/lib/landingPageContent";

import { WorkflowExposurePanel } from "./WorkflowExposurePanel";
import { WorkflowSectionHeader } from "./WorkflowSectionHeader";
import { WorkflowStackedStepCard } from "./WorkflowStackedStepCard";
import { WorkflowStepCard } from "./WorkflowStepCard";
import { useWorkflowTimeline } from "./useWorkflowTimeline";

export interface WorkflowSectionProps {
  content: WorkflowSectionContent;
  nextSectionContent: CapabilitiesSectionContent;
  nextSectionItems: ReadonlyArray<CapabilityItem>;
  steps: ReadonlyArray<WorkflowStep>;
}

export function WorkflowSection({
  content,
  nextSectionContent,
  nextSectionItems,
  steps,
}: Readonly<WorkflowSectionProps>) {
  const { metrics, sceneRef, trackRef, viewportRef } = useWorkflowTimeline();

  return (
    <section className="relative pb-20 pt-16 sm:pb-24 sm:pt-20">
      <WorkflowSectionHeader content={content} />

      <div className="mt-10 space-y-5 xl:hidden">
        <ol className="grid gap-5 sm:gap-6">
          {steps.map((step, index) => (
            <WorkflowStackedStepCard
              key={step.id}
              index={index}
              isLast={index === steps.length - 1}
              step={step}
            />
          ))}
        </ol>

        <WorkflowExposurePanel
          content={nextSectionContent}
          items={nextSectionItems}
          layout="stacked"
        />
      </div>

      <div
        ref={sceneRef}
        className="relative mt-10 hidden w-screen xl:ml-[calc(50%-50vw)] xl:block"
        style={
          metrics.isDesktop && metrics.sceneHeight > 0
            ? { height: `${metrics.sceneHeight}px` }
            : undefined
        }
      >
        <div className={cn("relative", metrics.isDesktop && "sticky top-0 h-screen")}>
          <div
            ref={viewportRef}
            className={cn(
              "relative overflow-y-hidden",
              metrics.isDesktop
                ? "flex h-[100svh] items-center overflow-x-clip"
                : "min-h-[38rem] overflow-x-hidden",
            )}
          >
            <div className="relative h-[36rem] min-w-max xl:h-[calc(100svh-6rem)]">
              <div
                ref={trackRef}
                className="relative z-10 flex h-full w-max items-stretch gap-12 pl-[max(2rem,6vw)] pr-0 will-change-transform 2xl:gap-16"
              >
                <div className="absolute left-[max(2rem,6vw)] right-0 top-1/2 h-px -translate-y-1/2 bg-[rgba(80,0,254,0.14)]" />
                <div className="absolute left-[max(2rem,6vw)] right-0 top-1/2 h-5 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(150,100,250,0.14),transparent_70%)] blur-md" />
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="relative h-full w-[16rem] shrink-0 2xl:w-[18rem]"
                  >
                    <WorkflowStepCard index={index} step={step} />
                  </div>
                ))}
                <WorkflowExposurePanel
                  content={nextSectionContent}
                  items={nextSectionItems}
                  layout="desktop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
