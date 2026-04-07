import { cn } from "@/lib/cn";
import { type PainPointItem } from "@/lib/landingPageContent";

import { PainPointCardShell } from "./PainPointCardShell";

const labelMap = {
  cash: "Capital drag",
  expertise: "Bench pressure",
  market: "Channel gap",
  silos: "Workflow fragmentation",
  workflow: "Proposal speed",
} as const;

const graphicShellClass =
  "flex min-h-[9.75rem] items-center rounded-[1.35rem] bg-[var(--color-surface-soft)] p-4 shadow-[inset_0_1px_0_var(--color-panel-topline)]";

type PainPointVariant = keyof typeof labelMap;

function VariantGraphic({ variant }: Readonly<{ variant: PainPointVariant }>) {
  if (variant === "workflow") {
    return (
      <div className={graphicShellClass}>
        <div className="w-full space-y-2.5">
          {["RFP intake", "Pricing review", "Compliance"].map((label, index) => (
            <div key={label} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <span className="rounded-full bg-white/70 px-2.5 py-1 text-[0.64rem] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                {label}
              </span>
              <div className="h-2 rounded-full bg-[var(--color-visual-ink)]">
                <div className="brand-gradient h-full rounded-full" style={{ width: `${82 - index * 18}%` }} />
              </div>
              <span className="text-[0.72rem] font-semibold text-[var(--color-secondary-purple)]">
                {index === 0 ? "2h" : index === 1 ? "6h" : "11h"}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "cash") {
    return (
      <div className={graphicShellClass}>
        <div className="flex w-full items-end gap-2.5">
          {[42, 58, 76].map((height, index) => (
            <div key={height} className="flex-1">
              <div
                className="brand-gradient mx-auto w-full rounded-t-[0.9rem]"
                style={{ height: `${height}px`, opacity: 0.56 + index * 0.14 }}
              />
              <p className="mt-2 text-center text-[0.68rem] font-medium text-[var(--color-muted)]">
                {index === 0 ? "60d" : index === 1 ? "90d" : "120d"}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "expertise") {
    return (
      <div className={graphicShellClass}>
        <div className="relative h-[5.2rem] w-full">
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full brand-gradient shadow-[var(--shadow-button)]" />
          {[
            "left-[18%] top-[54%]",
            "left-[36%] top-[20%]",
            "left-[74%] top-[24%]",
            "left-[78%] top-[68%]",
            "left-[30%] top-[76%]",
          ].map((position) => (
            <span key={position} className={`absolute ${position} h-4 w-4 rounded-full bg-[var(--color-visual-dot)] ring-4 ring-[var(--color-secondary-purple)]/20`} />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "silos") {
    return (
      <div className={graphicShellClass}>
        <div className="grid w-full grid-cols-3 gap-2">
          {[0, 1, 2].map((column) => (
            <div key={column} className="space-y-2">
              <div className="h-3.5 rounded-full bg-[var(--color-visual-surface-strong)]" />
              <div className="h-8 rounded-[0.85rem] bg-[var(--color-surface-card)]" />
              <div className="h-3.5 rounded-full bg-[var(--color-visual-surface-secondary)]" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={graphicShellClass}>
      <div className="w-full space-y-3">
        {[92, 64, 38].map((width) => (
          <div key={width} className="flex items-center gap-3">
            <div className="h-3 rounded-full brand-gradient" style={{ width: `${width}%` }} />
            <div className="h-3 w-3 rounded-full bg-[var(--color-surface-card)] ring-2 ring-[var(--color-secondary-purple)]/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

export interface PainPointInfoCardProps {
  className?: string;
  item: PainPointItem;
  variant: PainPointVariant;
}

export function PainPointInfoCard({
  className,
  item,
  variant,
}: Readonly<PainPointInfoCardProps>) {
  return (
    <PainPointCardShell id={item.id} label={labelMap[variant]} className={cn(className)}>
      <VariantGraphic variant={variant} />

      <div>
        <h3 className="text-[1.14rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--color-brand-black)]">
          {item.title}
        </h3>
        <p className="mt-2.5 text-[0.9rem] leading-6 text-[var(--color-muted)]">
          {item.description}
        </p>
      </div>
    </PainPointCardShell>
  );
}
