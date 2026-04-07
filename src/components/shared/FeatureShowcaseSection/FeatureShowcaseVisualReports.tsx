import { FEATURE_SHOWCASE_VISUAL_SURFACE } from "./featureShowcaseVisualStyles";

export function FeatureShowcaseVisualReports() {
  return (
    <div className={FEATURE_SHOWCASE_VISUAL_SURFACE}>
      <div className="feature-chart-glow absolute inset-x-6 bottom-4 h-14 rounded-full bg-[var(--color-glow-floor)] blur-2xl" />
      <span className="feature-chart-point absolute left-[46%] top-[70%] h-3.5 w-3.5 rounded-full bg-[var(--color-primary-blue)] shadow-[0_0_16px_rgba(80,0,254,0.34)]" />
      <svg viewBox="0 0 220 120" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="feature-chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(80,0,254,0.28)" />
            <stop offset="100%" stopColor="rgba(80,0,254,0.02)" />
          </linearGradient>
          <linearGradient id="feature-chart-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(150,100,250,0.55)" />
            <stop offset="100%" stopColor="rgba(80,0,254,1)" />
          </linearGradient>
        </defs>
        <path
          d="M20 92 C58 96, 76 82, 106 76 S160 60, 198 34"
          fill="none"
          stroke="rgba(80,0,254,0.18)"
          strokeWidth="3"
        />
        <path
          className="feature-chart-fill-rise"
          d="M20 92 C58 96, 76 82, 106 76 S160 60, 198 34 L198 120 L20 120 Z"
          fill="url(#feature-chart-fill)"
        />
        <path
          className="feature-chart-line"
          d="M20 92 C58 96, 76 82, 106 76 S160 60, 198 34"
          fill="none"
          stroke="url(#feature-chart-stroke)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
