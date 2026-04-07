import { FEATURE_SHOWCASE_VISUAL_SURFACE } from "./featureShowcaseVisualStyles";

const SYNCING_NODES = [
  "left-[22%] top-[56%]",
  "left-[34%] top-[36%]",
  "left-[46%] top-[52%]",
  "left-[62%] top-[42%]",
  "left-[80%] top-[48%]",
] as const;

export function FeatureShowcaseVisualSyncing() {
  return (
    <div className={FEATURE_SHOWCASE_VISUAL_SURFACE}>
      {SYNCING_NODES.map((position, index) => (
        <span
          key={position}
          className={`feature-sync-node absolute ${position} h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[rgba(150,100,250,0.28)] bg-white`}
          style={{ animationDelay: `${index * 170}ms` }}
        />
      ))}
      <span className="feature-sync-core absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full brand-gradient shadow-[var(--shadow-pill)]" />
    </div>
  );
}
