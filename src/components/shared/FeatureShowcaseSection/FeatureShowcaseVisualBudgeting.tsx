import { FEATURE_SHOWCASE_VISUAL_SURFACE } from "./featureShowcaseVisualStyles";

const BUDGETING_BARS = [
  { delay: "0ms", height: "h-11", label: "60d", tone: "bg-[linear-gradient(180deg,rgba(150,100,250,0.68),rgba(150,100,250,0.9))]" },
  { delay: "160ms", height: "h-16", label: "90d", tone: "bg-[linear-gradient(180deg,rgba(131,79,255,0.72),rgba(131,79,255,0.95))]" },
  { delay: "320ms", height: "h-21", label: "120d", tone: "bg-[linear-gradient(180deg,rgba(80,0,254,0.76),rgba(80,0,254,1))]" },
] as const;

export function FeatureShowcaseVisualBudgeting() {
  return (
    <div className={FEATURE_SHOWCASE_VISUAL_SURFACE}>
      <div className="absolute inset-x-10 bottom-6 flex items-end gap-2">
        {BUDGETING_BARS.map((bar) => (
          <span key={bar.label} className="flex flex-1 flex-col items-center justify-end gap-3">
            <span
              className={`feature-bar-grow ${bar.height} w-full origin-bottom rounded-t-[1rem] ${bar.tone}`}
              style={{ animationDelay: bar.delay }}
            />
            <span className="text-[0.72rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
              {bar.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
