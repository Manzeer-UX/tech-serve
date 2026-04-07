import { cn } from "@/lib/cn";
import { type AudienceItem } from "@/lib/landingPageContent";

export interface WorkflowAudienceCardProps {
  className?: string;
  item: AudienceItem;
}

export function WorkflowAudienceCard({
  className,
  item,
}: Readonly<WorkflowAudienceCardProps>) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[1.8rem] border border-[var(--color-border-strong)] bg-white/88 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {item.id} — {item.title}
          </p>
          <h4 className="mt-2 text-[1.05rem] font-semibold leading-[1.2] text-[var(--color-brand-black)]">
            {item.subtitle}
          </h4>
        </div>
        <span className="shrink-0 rounded-full border border-[var(--color-border-strong)] bg-white px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
          {item.id}
        </span>
      </div>

      <p className="mt-4 text-[0.92rem] leading-7 text-[var(--color-muted)]">
        {item.challenge}
      </p>

      <div className="mt-4 rounded-[1.3rem] border border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(244,239,255,0.74))] p-4">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
          How TechServ Helps
        </p>
        <p className="mt-2 text-[0.9rem] leading-7 text-[var(--color-brand-black)]">
          {item.help}
        </p>
      </div>

      <div className="mt-auto pt-4">
        <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white px-3.5 py-1.5 text-[0.72rem] font-medium tracking-[0.01em] text-[var(--color-brand-black)] shadow-[var(--shadow-pill)]">
          {item.metric}
        </span>
      </div>
    </article>
  );
}
