import { RevealInView } from "@/components/shared/RevealInView";
import { type AudienceItem } from "@/lib/landingPageContent";

export interface AudienceCardProps {
  delay?: number;
  item: AudienceItem;
}

export function AudienceCard({
  delay = 0,
  item,
}: Readonly<AudienceCardProps>) {
  return (
    <RevealInView
      delay={delay}
      className="relative h-full overflow-hidden rounded-[2.15rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(249,244,255,0.88))] px-5 py-5 shadow-[var(--shadow-card)]"
    >
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(150,100,250,0.14),transparent)]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              {item.id}
            </span>
            <h3 className="mt-3 text-[1.22rem] font-semibold tracking-[-0.03em] text-[var(--color-brand-black)]">
              {item.title}
            </h3>
            <p className="mt-2 text-[0.86rem] font-medium uppercase tracking-[0.14em] text-[var(--color-secondary-purple)]">
              {item.subtitle}
            </p>
          </div>
          <span className="rounded-full bg-[var(--color-visual-surface-strong)] px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-blue)]">
            {item.role}
          </span>
        </div>

        <div className="mt-6 rounded-[1.6rem] border border-[var(--color-border-subtle)] bg-white/70 px-4 py-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary-purple)]">
            Challenge
          </p>
          <p className="mt-3 text-[0.94rem] leading-7 text-[var(--color-muted)]">
            {item.challenge}
          </p>
        </div>

        <div className="mt-4 rounded-[1.6rem] border border-[var(--color-border-subtle)] bg-white/82 px-4 py-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary-purple)]">
            How TechServ Helps
          </p>
          <p className="mt-3 text-[0.94rem] leading-7 text-[var(--color-muted)]">
            {item.help}
          </p>
        </div>

        <div className="mt-5 rounded-[1.4rem] bg-[var(--color-brand-black)] px-4 py-4 text-white shadow-[var(--shadow-pill)]">
          <p className="text-sm font-medium tracking-[-0.02em]">{item.metric}</p>
        </div>
      </div>
    </RevealInView>
  );
}
