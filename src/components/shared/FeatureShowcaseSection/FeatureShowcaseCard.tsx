import { cn } from "@/lib/cn";
import {
  type FeatureShowcaseItem,
  type FeatureShowcaseVariant,
} from "@/lib/landingPageContent";

import { FeatureShowcaseVisual } from "./FeatureShowcaseVisual";

export interface FeatureShowcaseCardProps {
  item: FeatureShowcaseItem;
}

interface FeatureShowcaseIconProps {
  variant: FeatureShowcaseVariant;
}

function FeatureShowcaseIcon({
  variant,
}: Readonly<FeatureShowcaseIconProps>) {
  const iconClassName = "h-[1.05rem] w-[1.05rem] fill-none stroke-current stroke-[1.7]";

  switch (variant) {
    case "analytics":
      return (
        <svg aria-hidden="true" viewBox="0 0 18 18" className={iconClassName}>
          <path d="M3.75 11.75L6.75 8.75L9.1 10.4L14.25 5.25" />
          <path d="M11.75 5.25H14.25V7.75" />
        </svg>
      );
    case "reports":
      return (
        <svg aria-hidden="true" viewBox="0 0 18 18" className={iconClassName}>
          <path d="M4.5 14.25H13.5" />
          <path d="M6 11.5V8.75" />
          <path d="M9 11.5V6.75" />
          <path d="M12 11.5V4.75" />
        </svg>
      );
    case "budgeting":
      return (
        <svg aria-hidden="true" viewBox="0 0 18 18" className={iconClassName}>
          <path d="M9 3.75V14.25" />
          <path d="M12.75 6.25C12.75 5.14543 11.0711 4.25 9 4.25C6.92893 4.25 5.25 5.14543 5.25 6.25C5.25 7.35457 6.92893 8.25 9 8.25C11.0711 8.25 12.75 9.14543 12.75 10.25C12.75 11.3546 11.0711 12.25 9 12.25C6.92893 12.25 5.25 11.3546 5.25 10.25" />
        </svg>
      );
    case "syncing":
      return (
        <svg aria-hidden="true" viewBox="0 0 18 18" className={iconClassName}>
          <path d="M6 4.5H4.5V6" />
          <path d="M12 13.5H13.5V12" />
          <path d="M13 6.25A4.75 4.75 0 0 0 5.75 4.7L4.5 6" />
          <path d="M5 11.75A4.75 4.75 0 0 0 12.25 13.3L13.5 12" />
        </svg>
      );
    case "score":
      return (
        <svg aria-hidden="true" viewBox="0 0 18 18" className={iconClassName}>
          <path d="M4 11.5A5 5 0 1 1 14 11.5" />
          <path d="M9 11L12 8" />
          <path d="M9 11.5H9.01" />
        </svg>
      );
    case "market":
      return (
        <svg aria-hidden="true" viewBox="0 0 18 18" className={iconClassName}>
          <circle cx="5" cy="9" r="1.35" />
          <circle cx="9" cy="7" r="1.55" />
          <circle cx="13" cy="10" r="1.85" />
          <path d="M6.2 8.45L7.7 7.65" />
          <path d="M10.4 7.8L11.8 9.1" />
        </svg>
      );
    default:
      return null;
  }
}

export function FeatureShowcaseCard({
  item,
}: Readonly<FeatureShowcaseCardProps>) {
  return (
    <article
      className={cn(
        "group relative min-h-[19rem] overflow-hidden rounded-[1.8rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,242,255,0.88))] px-4 py-4 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[21rem] sm:rounded-[2rem] sm:px-5 sm:py-5",
      )}
    >
      <div className="absolute right-[-2rem] top-[-1rem] h-24 w-24 rounded-full bg-[var(--color-glow-secondary)] blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[1rem] border border-[var(--color-border-strong)] bg-white/88 text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
              <FeatureShowcaseIcon variant={item.variant} />
            </span>
            <h3 className="pt-1 text-[1.02rem] font-semibold tracking-[-0.03em] text-[var(--color-brand-black)] sm:text-[1.08rem]">
              {item.title}
            </h3>
          </div>
          <span className="pt-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
            {item.id}
          </span>
        </div>
        <p className="mt-3 max-w-none text-[0.9rem] leading-6 text-[var(--color-muted)]">
          {item.description}
        </p>
        <div className="mt-auto pt-5">
          <FeatureShowcaseVisual variant={item.variant} />
        </div>
      </div>
    </article>
  );
}
