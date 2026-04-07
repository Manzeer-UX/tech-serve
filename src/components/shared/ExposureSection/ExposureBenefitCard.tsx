import { cn } from "@/lib/cn";
import { type ExposureItem } from "@/lib/landingPageContent";

export interface ExposureBenefitCardProps {
  className?: string;
  item: ExposureItem;
}

export function ExposureBenefitCard({
  className,
  item,
}: Readonly<ExposureBenefitCardProps>) {
  return (
    <article
      className={cn(
        "rounded-[1.4rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] px-4 py-4 shadow-[var(--shadow-pill)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white shadow-[var(--shadow-pill)]">
          <svg
            aria-hidden="true"
            viewBox="0 0 18 18"
            className="h-[0.9rem] w-[0.9rem] fill-none stroke-[var(--color-secondary-purple)] stroke-[1.8]"
          >
            <path
              d="M4.75 9.25L7.35 11.85L13.25 5.95"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-[0.94rem] leading-6 text-[var(--color-brand-black)]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
