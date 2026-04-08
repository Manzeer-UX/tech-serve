import { cn } from "@/lib/cn";
import { type CapabilityItem } from "@/lib/landingPageContent";

import { WorkflowCapabilityVisual } from "./WorkflowCapabilityVisual";
import { getWorkflowCapabilityDisplay } from "./workflowCapabilityDisplay";

export interface WorkflowCapabilityCardProps {
  className?: string;
  item: CapabilityItem;
}

export function WorkflowCapabilityCard({
  className,
  item,
}: Readonly<WorkflowCapabilityCardProps>) {
  const displayItem = getWorkflowCapabilityDisplay(item);

  return (
    <article
      className={cn(
        "grid gap-8 lg:grid-cols-[minmax(0,0.84fr)_minmax(20rem,1fr)] lg:items-center",
        className,
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              Capability {item.id}
            </p>
            <h4 className="mt-3 max-w-[18ch] text-[clamp(1.6rem,2.1vw,2.15rem)] font-medium leading-[1.08] tracking-[-0.05em] text-[var(--color-brand-black)]">
              {displayItem.title}
            </h4>
          </div>
          <span className="shrink-0 rounded-full border border-[var(--color-border-strong)] bg-white/84 px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
            {item.id}
          </span>
        </div>

        <p className="mt-5 max-w-[30rem] text-[0.98rem] leading-8 text-[var(--color-muted)]">
          {displayItem.description}
        </p>

        <div className="mt-auto pt-7">
          <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/88 px-4 py-2 text-[0.78rem] font-medium tracking-[0.01em] text-[var(--color-brand-black)] shadow-[var(--shadow-pill)]">
            {displayItem.metric}
          </span>
        </div>
      </div>

      <WorkflowCapabilityVisual item={item} />
    </article>
  );
}
