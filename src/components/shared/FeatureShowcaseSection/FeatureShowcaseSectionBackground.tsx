import { ColorBends } from "@/components/shared/ColorBends";

export function FeatureShowcaseSectionBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,248,255,0.98)_0%,rgba(246,239,255,0.98)_52%,rgba(243,235,255,0.99)_100%)]" />
      <div className="absolute inset-0 opacity-[0.88]">
        <ColorBends
          className="h-full w-full"
          colors={["#ffffff", "#eadfff", "#c6a8ff"]}
          rotation={-6}
          speed={0.22}
          scale={1.08}
          frequency={0.9}
          warpStrength={0.94}
          mouseInfluence={0.42}
          parallax={0.24}
          noise={0.014}
          transparent
          autoRotate={2.4}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.96),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(214,194,255,0.48),transparent_24%),radial-gradient(circle_at_50%_72%,rgba(188,162,255,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.68),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(255,255,255,0.56),transparent)]" />
    </div>
  );
}
