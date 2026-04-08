import { TrackPoint } from "@/components/shared/TrackPoint";
import { cn } from "@/lib/cn";

const pointerLabels = ["Signal thread", "Momentum thread"];
const pointerNotes = ["Intent to action", "Capital to clarity"];

export interface CorePhilosophyPointerCardProps {
  highlight: string;
  index: number;
}

export function CorePhilosophyPointerCard({
  highlight,
  index,
}: Readonly<CorePhilosophyPointerCardProps>) {
  const isFirstCard = index === 0;
  const pointerLabel = pointerLabels[index] ?? "Connected thread";
  const pointerNote = pointerNotes[index] ?? "Connected motion";

  return (
    <li
      className={cn(
        "relative overflow-hidden py-5 sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6 sm:py-6",
        isFirstCard ? "pt-2" : "",
      )}
    >
      <div
        className={cn(
          "philosophy-orb-breathe absolute h-24 w-24 rounded-full blur-3xl",
          isFirstCard
            ? "left-0 top-0 bg-[rgba(150,100,250,0.14)]"
            : "left-1 top-5 bg-[rgba(80,0,254,0.1)]",
        )}
      />

      <div className="relative flex items-center gap-4 sm:block">
        <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white/92 shadow-[var(--shadow-pill)]">
          <span className="absolute inset-[0.4rem] rounded-full brand-gradient opacity-[0.12]" />
          <TrackPoint className="relative h-5 w-5" />
        </span>

        <div className="min-w-0 pt-1 sm:mt-5">
          <div className="flex items-center gap-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary-purple)]">
              0{index + 1}
            </p>
            <span className="hidden h-px w-12 bg-[var(--color-border-strong)] sm:block" />
          </div>

          <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {pointerLabel}
          </p>
        </div>
      </div>

      <div className="relative mt-5 sm:mt-0">
        <div className="flex flex-wrap items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full brand-gradient shadow-[0_0_0_0.35rem_rgba(80,0,254,0.05)]" />
          <span className="hidden h-px flex-1 bg-[var(--color-border-subtle)] sm:block" />
          <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            {pointerNote}
          </span>
        </div>

        <p className="mt-5 max-w-[28rem] text-[1.04rem] leading-[1.7] tracking-[-0.04em] text-[var(--color-brand-black)] sm:text-[1.2rem] sm:leading-[1.85]">
          {highlight}
        </p>
      </div>
    </li>
  );
}
