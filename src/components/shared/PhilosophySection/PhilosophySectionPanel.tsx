import { ColorBends } from "@/components/shared/ColorBends";
import { type PhilosophySectionPanelContent } from "@/lib/landingPageContent";

export interface PhilosophySectionPanelProps {
  content: PhilosophySectionPanelContent;
}

const BAR_SERIES = [
  { delay: "0s", height: "3.2rem" },
  { delay: "0.18s", height: "4.5rem" },
  { delay: "0.32s", height: "2.7rem" },
  { delay: "0.46s", height: "5.4rem" },
] as const;

export function PhilosophySectionPanel({
  content,
}: Readonly<PhilosophySectionPanelProps>) {
  return (
    <div className="relative min-h-[31rem] overflow-hidden rounded-[2.8rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(244,237,255,0.86))] p-5 shadow-[var(--shadow-hero)] md:p-6">
      <div className="absolute inset-0 opacity-[0.92]">
        <ColorBends
          className="h-full w-full"
          colors={["#ffffff", "#ece2ff", "#8c63ff"]}
          rotation={-10}
          speed={0.22}
          scale={1.08}
          frequency={0.92}
          warpStrength={0.88}
          mouseInfluence={0.3}
          parallax={0.18}
          noise={0.012}
          transparent
          autoRotate={2.6}
        />
      </div>

      <div className="philosophy-orb-breathe absolute left-[28%] top-[28%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(80,0,254,0.42)_0%,rgba(150,100,250,0.18)_42%,transparent_74%)] blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--color-border-subtle)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.12]" />

      <div className="relative h-full min-h-[27rem]">
        <div className="philosophy-card-float absolute left-0 top-0 rounded-[1.1rem] border border-[var(--color-border-subtle)] bg-white/92 px-4 py-3 shadow-[var(--shadow-pill)] backdrop-blur-sm">
          <p className="text-[1.15rem] font-semibold tracking-[-0.03em] text-[var(--color-brand-black)]">
            {content.badgeValue}
          </p>
          <p className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {content.badgeLabel}
          </p>
        </div>

        <div className="philosophy-card-float-delayed absolute right-2 top-8 w-[16.5rem] rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-white/94 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm md:w-[18rem]">
          <p className="text-[0.76rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {content.chartLabel}
          </p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <div>
              <p className="text-[1.8rem] font-semibold tracking-[-0.05em] text-[var(--color-brand-black)]">
                {content.chartValue}
              </p>
              <p className="text-[0.78rem] text-[var(--color-muted)]">{content.chartDetail}</p>
            </div>
            <div className="flex items-end gap-2">
              {BAR_SERIES.map((bar, index) => (
                <span
                  key={`${bar.height}-${index}`}
                  className="philosophy-bar-rise w-3 rounded-full bg-[linear-gradient(180deg,rgba(150,100,250,0.35),var(--color-primary-blue))]"
                  style={{ animationDelay: bar.delay, height: bar.height }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="philosophy-card-float absolute bottom-16 left-0 w-[15rem] rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-white/94 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm md:w-[17rem]">
          <p className="text-[0.76rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {content.lineLabel}
          </p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <div>
              <p className="text-[1.75rem] font-semibold tracking-[-0.05em] text-[var(--color-brand-black)]">
                {content.lineValue}
              </p>
              <p className="text-[0.78rem] text-[var(--color-muted)]">{content.lineDetail}</p>
            </div>
          </div>
          <svg viewBox="0 0 180 72" className="mt-4 h-[4.5rem] w-full overflow-visible">
            <defs>
              <linearGradient id="philosophy-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(150,100,250,0.25)" />
                <stop offset="100%" stopColor="rgba(80,0,254,1)" />
              </linearGradient>
            </defs>
            <path
              d="M6 54C26 54 28 38 44 38C60 38 66 44 82 34C96 26 112 28 126 18C142 8 154 14 174 6"
              fill="none"
              stroke="url(#philosophy-line-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              className="philosophy-line-draw"
            />
          </svg>
        </div>

        <div className="philosophy-card-float-delayed absolute bottom-4 right-0 flex w-[15rem] items-center gap-4 rounded-[1.5rem] border border-[var(--color-border-subtle)] bg-white/94 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm md:w-[16rem]">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,rgba(80,0,254,0.12),rgba(150,100,250,0.32))] text-[1.2rem] font-semibold text-[var(--color-brand-black)]">
            {content.scoreValue}
          </div>
          <div>
            <p className="text-[0.78rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {content.scoreLabel}
            </p>
            <p className="mt-1 text-[1.2rem] font-semibold tracking-[-0.04em] text-[var(--color-primary-blue)]">
              {content.scoreDetail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
