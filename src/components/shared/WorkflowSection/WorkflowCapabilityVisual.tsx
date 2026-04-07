import { FeatureShowcaseVisual } from "@/components/shared/FeatureShowcaseSection/FeatureShowcaseVisual";
import { cn } from "@/lib/cn";
import {
  type CapabilityItem,
  type FeatureShowcaseVariant,
} from "@/lib/landingPageContent";

export interface WorkflowCapabilityVisualProps {
  className?: string;
  item: CapabilityItem;
}

function getCapabilityVariant(itemId: string): FeatureShowcaseVariant {
  switch (itemId) {
    case "01":
      return "analytics";
    case "02":
      return "reports";
    case "03":
      return "syncing";
    case "04":
      return "budgeting";
    case "05":
      return "score";
    case "06":
      return "market";
    default:
      return "analytics";
  }
}

export function WorkflowCapabilityVisual({
  className,
  item,
}: Readonly<WorkflowCapabilityVisualProps>) {
  return (
    <div
      className={cn(
        "rounded-[1.6rem] border border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,241,255,0.78))] p-3 shadow-[var(--shadow-pill)]",
        className,
      )}
    >
      <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
        Visual overview
      </p>
      <FeatureShowcaseVisual variant={getCapabilityVariant(item.id)} />
    </div>
  );
}
