import {
  type CapabilitiesSectionContent,
  type CapabilityItem,
} from "@/lib/landingPageContent";

import { WorkflowCapabilityTabs } from "./WorkflowCapabilityTabs";

function splitPanelTitle(title: string) {
  const normalizedTitle = title.replace(/\s+/g, " ").trim();

  if (normalizedTitle === "Six Capabilities. One Connected System.") {
    return ["Six Capabilities.", "One Connected", "System."];
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
      <div className="relative flex h-full w-full items-center bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,243,255,0.88))] lg:h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(82,214,201,0.1),transparent_24%),radial-gradient(circle_at_78%_24%,rgba(150,100,250,0.16),transparent_28%),radial-gradient(circle_at_68%_78%,rgba(179,255,111,0.08),transparent_24%)]" />

        <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-10 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[26rem] text-center lg:col-span-4 lg:mx-0 lg:max-w-[28rem] lg:text-left xl:col-span-5">
            <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/78 px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
              Built for every layer
            </span>
            <h3 className="mt-5 max-w-[11ch] text-balance text-[clamp(2rem,3vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--color-brand-black)]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-5 max-w-[24rem] text-[0.98rem] leading-8 text-[var(--color-muted)]">
              {content.description}
            </p>
          </div>

          <div className="lg:col-span-8 xl:col-span-7">
            <WorkflowCapabilityTabs items={items} />
          </div>
        </div>
      </div>
    </article>
  );
}
