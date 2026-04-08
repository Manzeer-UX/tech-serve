"use client";

import { startTransition, useId, useState } from "react";

import { cn } from "@/lib/cn";
import { type CapabilityItem } from "@/lib/landingPageContent";

import { WorkflowCapabilityCard } from "./WorkflowCapabilityCard";
import { getWorkflowCapabilityDisplay } from "./workflowCapabilityDisplay";

export interface WorkflowCapabilityTabsProps {
  items: ReadonlyArray<CapabilityItem>;
}

export function WorkflowCapabilityTabs({
  items,
}: Readonly<WorkflowCapabilityTabsProps>) {
  const [activeItemId, setActiveItemId] = useState(items[0]?.id ?? "");
  const baseId = useId();
  const activeItem = items.find((item) => item.id === activeItemId) ?? items[0];

  if (!activeItem) {
    return null;
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Capabilities"
        className="mx-auto grid max-w-[48rem] grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] border border-[var(--color-border-strong)] bg-[var(--color-border-strong)] shadow-[var(--shadow-pill)] sm:grid-cols-2 xl:grid-cols-3"
      >
        {items.map((item) => {
          const displayItem = getWorkflowCapabilityDisplay(item);
          const tabId = `${baseId}-${item.id}-tab`;
          const panelId = `${baseId}-${item.id}-panel`;
          const isActive = item.id === activeItem.id;

          return (
            <button
              key={item.id}
              id={tabId}
              role="tab"
              type="button"
              aria-controls={panelId}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => {
                startTransition(() => {
                  setActiveItemId(item.id);
                });
              }}
              className={cn(
                "min-h-[4.2rem] min-w-0 bg-white/64 px-4 py-3 text-left transition-colors sm:min-h-[4.8rem] sm:text-center",
                isActive
                  ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,238,255,0.9))] text-[var(--color-brand-black)]"
                  : "bg-white/28 text-[var(--color-muted)] hover:bg-white/56",
              )}
            >
              <p className="mx-auto max-w-[12rem] text-[0.88rem] font-semibold leading-5 tracking-[-0.03em] sm:text-[0.92rem] sm:leading-6">
                {displayItem.title}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-12">
        <div
          id={`${baseId}-${activeItem.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-${activeItem.id}-tab`}
        >
          <WorkflowCapabilityCard item={activeItem} />
        </div>
      </div>
    </div>
  );
}
