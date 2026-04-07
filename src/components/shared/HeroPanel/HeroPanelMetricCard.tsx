import { cn } from "@/lib/cn";
import { type HeroMetricData } from "@/lib/landingPageContent";

export interface HeroPanelMetricCardProps {
  item: HeroMetricData;
  className?: string;
}

function CheckIcon() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full brand-gradient text-white shadow-[var(--shadow-button)]">
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-4 w-4 fill-none stroke-current stroke-[2.2]"
      >
        <path d="M3.5 8.5L6.6 11.6L12.5 4.8" />
      </svg>
    </span>
  );
}

export function HeroPanelMetricCard({
  item,
  className,
}: Readonly<HeroPanelMetricCardProps>) {
  return (
    <div
      className={cn(
        "flex items-center gap-3.5 rounded-[1.35rem] border border-[var(--color-border-subtle)] bg-white/88 px-4 py-3.5 shadow-[0_16px_36px_rgba(126,87,255,0.08)]",
        className,
      )}
    >
      <CheckIcon />

      <p className="flex min-w-0 flex-wrap items-center text-[1.02rem] leading-7 text-[var(--color-brand-black)]">
        <span className="mr-2 min-w-[5.75rem] font-semibold text-[var(--color-primary-blue)]">
          {item.value}
        </span>
        <span className="font-medium text-[var(--color-brand-black)]">
          {item.description}
        </span>
      </p>
    </div>
  );
}
