import { RevealInView } from "@/components/shared/RevealInView";

function VisualBadge({
  className,
  label,
  value,
}: Readonly<{
  className: string;
  label: string;
  value: string;
}>) {
  return (
    <div className={className}>
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
        {label}
      </p>
      <p className="mt-1 text-[1.05rem] font-semibold tracking-[-0.04em] text-[var(--color-brand-black)]">
        {value}
      </p>
    </div>
  );
}

export function OutcomesShowcaseVisual() {
  return (
    <RevealInView className="relative mx-auto w-full max-w-[35rem]">
      <div className="relative aspect-[1.04] overflow-hidden rounded-[2.4rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(246,240,255,0.92),rgba(237,228,255,0.88))] shadow-[var(--shadow-hero)]">
        <div className="absolute inset-y-[-10%] left-[-20%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(150,100,250,0.34),transparent_58%)]" />
        <div className="absolute bottom-[-22%] right-[-8%] h-[65%] w-[78%] rounded-[45%] bg-[radial-gradient(circle,rgba(80,0,254,0.28),rgba(150,100,250,0.12)_48%,transparent_72%)]" />
        <div className="absolute left-[8%] top-[10%] h-[92%] w-[84%] rounded-[38%] border border-[rgba(255,255,255,0.34)] bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.52),transparent_22%),radial-gradient(circle_at_72%_72%,rgba(80,0,254,0.16),transparent_28%)] opacity-80" />

        <div className="absolute right-[15%] top-[14%] w-[42%] overflow-hidden rounded-[1.7rem] border border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,232,255,0.9))] p-3 shadow-[var(--shadow-card)]">
          <div className="rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(80,0,254,0.14),rgba(150,100,250,0.3))] p-3">
            <div className="h-28 rounded-[1rem] bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,0.86),rgba(255,255,255,0.14)_36%,transparent_62%),linear-gradient(180deg,rgba(132,194,255,0.34),rgba(80,0,254,0.18))]" />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="rounded-full bg-white px-2.5 py-1 text-[0.63rem] font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Channel growth
            </span>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
              Live
            </span>
          </div>
        </div>

        <VisualBadge
          className="absolute left-[8%] top-[10%] rounded-[1.2rem] border border-[var(--color-border-subtle)] bg-white/92 px-4 py-3 shadow-[var(--shadow-pill)]"
          label="Partner reach"
          value="500+"
        />
        <VisualBadge
          className="absolute left-[12%] bottom-[14%] rounded-[1.2rem] border border-[var(--color-border-subtle)] bg-white/90 px-4 py-3 shadow-[var(--shadow-pill)]"
          label="Invoice velocity"
          value="48 hours"
        />
        <VisualBadge
          className="absolute right-[10%] bottom-[10%] rounded-[1.35rem] border border-[var(--color-border-strong)] bg-white/92 px-4 py-3 shadow-[var(--shadow-card)]"
          label="RFP lift"
          value="51% win rate"
        />
      </div>
    </RevealInView>
  );
}
