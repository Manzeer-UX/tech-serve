import {
  type CapabilitiesSectionContent,
  type CapabilityItem,
} from "@/lib/landingPageContent";

import { WorkflowCapabilityTabs } from "./WorkflowCapabilityTabs";

function splitPanelTitle(title: string) {
  const normalizedTitle = title.replace(/\s+/g, " ").trim();

  if (normalizedTitle === "Six Capabilities. One Connected System.") {
    return ["Six Capabilities.", "One Connected System."];
  }

  return [normalizedTitle];
}

export interface WorkflowExposurePanelProps {
  content: CapabilitiesSectionContent;
  items: ReadonlyArray<CapabilityItem>;
}

export function WorkflowExposurePanel({
  content,
  items,
}: Readonly<WorkflowExposurePanelProps>) {
  const titleLines = splitPanelTitle(content.title);

  return (
    <article className="flex h-full min-w-[92vw] shrink-0 items-center pl-6 md:min-w-[82vw] lg:h-screen lg:min-w-screen lg:pl-0">
      <div className="relative flex h-full w-full items-center lg:h-screen">
        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-10 md:px-10 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[52rem] text-center">
            <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/78 px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
              Built for every layer
            </span>
            <h3 className="mx-auto mt-5 max-w-[16ch] text-balance text-[clamp(2.1rem,3.8vw,4rem)] font-medium leading-[1.02] tracking-[-0.055em] text-[var(--color-brand-black)]">
              {titleLines.map((line) => (
                <span key={line} className="block md:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mx-auto mt-5 max-w-[40rem] text-[0.98rem] leading-8 text-[var(--color-muted)]">
              {content.description}
            </p>
          </div>

          <div className="mt-10">
            <WorkflowCapabilityTabs items={items} />
          </div>
        </div>
      </div>
    </article>
  );
}
