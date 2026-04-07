import { RevealInView } from "@/components/shared/RevealInView";
import { type CapabilityItem } from "@/lib/landingPageContent";

export interface CapabilityCardProps {
  delay?: number;
  item: CapabilityItem;
}

export function CapabilityCard({
  delay = 0,
  item,
}: Readonly<CapabilityCardProps>) {
  return (
    <RevealInView
      delay={delay}
      className="group relative h-full overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.86)] px-5 py-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-secondary-purple),transparent)] opacity-80" />
      <div className="absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-[var(--color-glow-secondary)] blur-3xl opacity-55 transition-opacity duration-300 group-hover:opacity-80" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {item.id}
          </span>
          <span className="rounded-full bg-[var(--color-visual-surface-strong)] px-3 py-1 text-[0.78rem] font-semibold text-[var(--color-primary-blue)]">
            {item.metric}
          </span>
        </div>
        <h3 className="mt-5 text-[1.18rem] font-semibold leading-7 tracking-[-0.03em] text-[var(--color-brand-black)]">
          {item.title}
        </h3>
        <p className="mt-4 text-[0.95rem] leading-7 text-[var(--color-muted)]">
          {item.description}
        </p>
        <div className="mt-6 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full brand-gradient" />
          <p className="text-[0.82rem] font-medium uppercase tracking-[0.14em] text-[var(--color-secondary-purple)]">
            {item.metricLabel}
          </p>
        </div>
      </div>
    </RevealInView>
  );
}
