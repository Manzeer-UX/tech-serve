import { FEATURE_SHOWCASE_VISUAL_SURFACE } from "./featureShowcaseVisualStyles";

export function FeatureShowcaseVisualScore() {
  return (
    <div className={FEATURE_SHOWCASE_VISUAL_SURFACE}>
      <div className="absolute inset-x-8 top-8">
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((index) => (
            <div
              key={`top-${index}`}
              className="feature-silo-shift rounded-[0.8rem] bg-[var(--color-visual-surface-strong)] px-3 py-2"
              style={{ animationDelay: `${index * 130}ms` }}
            />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((index) => (
            <div
              key={`bottom-${index}`}
              className="feature-silo-card-shift rounded-[0.95rem] bg-white/86 px-3 py-4 shadow-[var(--shadow-pill)]"
              style={{ animationDelay: `${index * 170}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
