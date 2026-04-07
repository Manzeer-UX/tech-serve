"use client";

import { startTransition, useId, useState } from "react";

import { cn } from "@/lib/cn";
import { type AudienceItem } from "@/lib/landingPageContent";

import { WorkflowAudienceCard } from "./WorkflowAudienceCard";

export interface WorkflowAudienceTabsProps {
  items: ReadonlyArray<AudienceItem>;
}

export function WorkflowAudienceTabs({
  items,
}: Readonly<WorkflowAudienceTabsProps>) {
  const [activeItemId, setActiveItemId] = useState(items[0]?.id ?? "");
  const baseId = useId();
  const activeItem = items.find((item) => item.id === activeItemId) ?? items[0];

  if (!activeItem) {
    return null;
  }

  return (
    <div className="rounded-[2rem] border border-[var(--color-border-strong)] bg-white/58 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm lg:p-5">
      <div
        role="tablist"
        aria-label="Audience segments"
        className="flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-3 lg:overflow-visible"
      >
        {items.map((item) => {
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
                "min-w-[13rem] rounded-[1.35rem] border px-4 py-3 text-left transition-colors lg:min-w-0",
                isActive
                  ? "border-[var(--color-border-strong)] bg-white text-[var(--color-brand-black)] shadow-[var(--shadow-pill)]"
                  : "border-[var(--color-border-subtle)] bg-white/48 text-[var(--color-muted)] hover:bg-white/72",
              )}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
                {item.id}
              </p>
              <p className="mt-2 text-[0.98rem] font-semibold leading-6">
                {item.title}
              </p>
              <p className="mt-1 text-[0.84rem] leading-6">{item.subtitle}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        <div
          id={`${baseId}-${activeItem.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-${activeItem.id}-tab`}
        >
          <WorkflowAudienceCard item={activeItem} />
        </div>
      </div>
    </div>
  );
}
