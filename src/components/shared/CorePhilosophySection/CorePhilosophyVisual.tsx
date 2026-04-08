import { RevealInView } from "@/components/shared/RevealInView";
import { type PhilosophySectionPanelContent } from "@/lib/landingPageContent";

const chartBarHeights = ["h-11", "h-16", "h-13", "h-20"] as const;
const chartBarLabels = ["W1", "W2", "W3", "W4"] as const;

const scorePlotPositions = [
  "left-[10%] top-[64%]",
  "left-[28%] top-[58%]",
  "left-[46%] top-[66%]",
  "left-[64%] top-[42%]",
  "left-[82%] top-[36%]",
] as const;

export interface CorePhilosophyVisualProps {
  panel: PhilosophySectionPanelContent;
}

export function CorePhilosophyVisual({
  panel,
}: Readonly<CorePhilosophyVisualProps>) {
  return (
    <RevealInView delay={0.08} className="relative mx-auto w-full max-w-[42rem]">
      <div className="relative overflow-hidden rounded-[2.1rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(251,247,255,0.97),rgba(243,236,255,0.92))] px-4 py-4 shadow-[var(--shadow-hero)] sm:rounded-[2.75rem] sm:px-5 sm:py-5 md:px-7 md:py-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.92),transparent_24%),radial-gradient(circle_at_62%_56%,rgba(80,0,254,0.14),transparent_24%),radial-gradient(circle_at_84%_82%,rgba(150,100,250,0.14),transparent_24%)]" />
        <div className="absolute left-[18%] top-[18%] h-28 w-28 rounded-full bg-[var(--color-glow-secondary)] blur-3xl opacity-50 sm:h-40 sm:w-40" />
        <div className="absolute bottom-[12%] right-[18%] h-32 w-32 rounded-full bg-[var(--color-glow-primary)] blur-3xl opacity-45 sm:h-44 sm:w-44" />

        <div className="relative min-h-[32rem] sm:min-h-[28rem]">
          <div className="absolute left-0 top-0 max-w-[12rem] rounded-[1.05rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] px-3.5 py-3 shadow-[var(--shadow-pill)] backdrop-blur-sm sm:max-w-none sm:px-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full brand-gradient text-[0.82rem] font-semibold text-white">
                {panel.badgeValue}
              </span>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
                  {panel.badgeLabel}
                </p>
                <p className="mt-1 text-[0.84rem] text-[var(--color-muted)]">
                  Connected network strength
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-14 w-full max-w-[12.5rem] rounded-[1.4rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] px-3.5 py-3.5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:top-8 sm:max-w-[16.5rem] sm:rounded-[1.7rem] sm:px-4 sm:py-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
              {panel.chartDetail}
            </p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <div>
                <p className="text-[1.5rem] font-semibold tracking-[-0.05em] text-[var(--color-brand-black)] sm:text-[1.8rem]">
                  {panel.chartValue}
                </p>
                <p className="text-[0.84rem] text-[var(--color-muted)]">
                  {panel.chartLabel}
                </p>
              </div>
              <div className="flex items-end gap-1.5 sm:gap-2">
                {chartBarHeights.map((height, index) => (
                  <div key={chartBarLabels[index]} className="flex flex-col items-center gap-2">
                    <span
                      className={`w-3 rounded-full bg-[var(--color-brand-black)] sm:w-3.5 ${height}`}
                      style={{ opacity: 0.42 + index * 0.14 }}
                    />
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
                      {chartBarLabels[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-24 left-0 w-full max-w-[12.5rem] rounded-[1.4rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] px-3.5 py-3.5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:bottom-14 sm:max-w-[15rem] sm:rounded-[1.6rem] sm:px-4 sm:py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
                  {panel.scoreDetail}
                </p>
                <p className="mt-2 text-[1.4rem] font-semibold tracking-[-0.05em] text-[var(--color-brand-black)] sm:text-[1.7rem]">
                  {panel.scoreValue}
                </p>
                <p className="text-[0.84rem] text-[var(--color-muted)]">
                  {panel.scoreLabel}
                </p>
              </div>
            </div>

            <div className="relative mt-4 h-16 rounded-[1.1rem] bg-[linear-gradient(180deg,rgba(246,240,255,0.92),rgba(255,255,255,0.74))] sm:h-20">
              <div className="absolute left-3 right-3 top-1/2 h-px bg-[var(--color-border-subtle)]" />
              <div className="absolute inset-x-4 bottom-4 top-4">
                {scorePlotPositions.map((position) => (
                  <span
                    key={position}
                    className={`absolute ${position} h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary-blue)]`}
                  />
                ))}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 70"
                  className="absolute inset-0 h-full w-full"
                >
                  <path
                    d="M8 44C30 48 46 36 66 40C92 46 112 22 136 26C158 30 180 12 212 16"
                    fill="none"
                    stroke="url(#core-philosophy-chart-gradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient
                      id="core-philosophy-chart-gradient"
                      x1="8"
                      x2="212"
                      y1="44"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="var(--color-secondary-purple)" />
                      <stop offset="1" stopColor="var(--color-primary-blue)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-full max-w-[13rem] rounded-[1.25rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] px-3.5 py-3.5 shadow-[var(--shadow-pill)] backdrop-blur-sm sm:right-4 sm:max-w-[17rem] sm:rounded-[1.4rem] sm:px-4 sm:py-4">
            <div className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white text-[0.94rem] font-semibold text-[var(--color-brand-black)] sm:h-12 sm:w-12 sm:text-[1rem]">
                {panel.lineValue}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
                  {panel.lineDetail}
                </p>
                <p className="mt-1 text-[0.96rem] font-medium text-[var(--color-brand-black)]">
                  {panel.lineLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealInView>
  );
}
