import { FEATURE_SHOWCASE_VISUAL_SURFACE } from "./featureShowcaseVisualStyles";

const MARKET_DOTS = [
  "h-9 w-9 bg-[var(--color-visual-surface-secondary)]",
  "h-12 w-12 bg-[var(--color-visual-surface-strong)]",
  "h-16 w-16 brand-gradient shadow-[var(--shadow-pill)]",
  "h-12 w-12 bg-[var(--color-visual-surface-strong)]",
  "h-9 w-9 bg-[var(--color-visual-surface-secondary)]",
] as const;

export function FeatureShowcaseVisualMarket() {
  return (
    <div className={FEATURE_SHOWCASE_VISUAL_SURFACE}>
      <div className="absolute inset-x-8 top-1/2 flex -translate-y-1/2 items-center justify-between">
        {MARKET_DOTS.map((dotClassName, index) => (
          <span
            key={`${dotClassName}-${index}`}
            className={`feature-market-dot rounded-full ${dotClassName}`}
            style={{ animationDelay: `${index * 180}ms` }}
          />
        ))}
      </div>
      <span className="feature-market-core-ring absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(80,0,254,0.16)]" />
    </div>
  );
}
