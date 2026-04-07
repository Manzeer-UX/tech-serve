import { FEATURE_SHOWCASE_VISUAL_SURFACE } from "./featureShowcaseVisualStyles";

const ANALYTICS_NODES = [
  "left-[22%] top-[34%]",
  "left-[36%] top-[52%]",
  "left-[48%] top-[28%]",
  "left-[63%] top-[46%]",
  "left-[78%] top-[36%]",
] as const;

export function FeatureShowcaseVisualAnalytics() {
  return (
    <div className={FEATURE_SHOWCASE_VISUAL_SURFACE}>
      <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(80,0,254,0.24),transparent)]" />
      <div className="feature-signal-scan absolute left-[18%] top-1/2 h-[2px] w-20 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(80,0,254,0.95),transparent)]" />
      {ANALYTICS_NODES.map((position, index) => (
        <span
          key={position}
          className={`feature-signal-node absolute ${position} h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border-subtle)] bg-white shadow-[var(--shadow-pill)]`}
          style={{ animationDelay: `${index * 140}ms` }}
        >
          <span className="feature-signal-node-core absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-secondary-purple)] opacity-45" />
        </span>
      ))}
      <span className="feature-signal-focus absolute left-[48%] top-[28%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border-strong)] bg-white shadow-[var(--shadow-card)]">
        <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full brand-gradient" />
      </span>
    </div>
  );
}
