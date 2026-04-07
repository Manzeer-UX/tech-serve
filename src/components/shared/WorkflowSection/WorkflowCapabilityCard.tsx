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
        "grid gap-5 rounded-[1.8rem] border border-[var(--color-border-strong)] bg-white/88 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,0.95fr)] lg:items-start",
        className,
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              Capability {item.id}
            </p>
            <h4 className="mt-2 text-[1.18rem] font-semibold leading-[1.25] text-[var(--color-brand-black)]">
              {displayItem.title}
            </h4>
          </div>
          <span className="shrink-0 rounded-full border border-[var(--color-border-strong)] bg-white px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
            {item.id}
          </span>
        </div>

        <p className="mt-4 text-[0.95rem] leading-7 text-[var(--color-muted)]">
          {displayItem.description}
        </p>

        <div className="mt-auto pt-5">
          <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white px-3.5 py-1.5 text-[0.78rem] font-medium tracking-[0.01em] text-[var(--color-brand-black)] shadow-[var(--shadow-pill)]">
            {displayItem.metric}
          </span>
        </div>
      </div>

      <WorkflowCapabilityVisual item={item} />
    </article>
  );
}
