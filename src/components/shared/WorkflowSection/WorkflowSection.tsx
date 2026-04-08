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
    <section className="relative pb-24 pt-18 md:pt-22">
      <WorkflowSectionHeader content={content} />

      <div
        ref={sceneRef}
        className="relative mt-10 w-screen ml-[calc(50%-50vw)]"
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
                ? "flex h-screen items-center overflow-x-clip"
                : "overflow-x-auto pb-4",
            )}
          >
            <div className="relative h-[40rem] min-w-max lg:h-[calc(100vh-5.5rem)]">
              <div
                ref={trackRef}
                className="relative z-10 flex h-full w-max items-stretch gap-20 pl-[8vw] pr-0 will-change-transform lg:gap-24"
              >
                <div className="absolute left-[8vw] right-0 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(80,0,254,0.18),rgba(80,0,254,0.76),rgba(150,100,250,0.18))]" />
                <div className="absolute left-[8vw] right-0 top-1/2 h-5 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(150,100,250,0.16),transparent_70%)] blur-md" />
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="relative h-full w-[20rem] shrink-0 lg:w-[21rem]"
                  >
                    <WorkflowStepCard index={index} step={step} />
                  </div>
                ))}
                <WorkflowExposurePanel
                  content={nextSectionContent}
                  items={nextSectionItems}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
