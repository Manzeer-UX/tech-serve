"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const RippleGrid = dynamic(
  () =>
    import("@/components/shared/RippleGrid").then((module) => module.RippleGrid),
  {
    loading: () => null,
    ssr: false,
  },
);

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";
const REDUCED_MOTION_MEDIA_QUERY = "(prefers-reduced-motion: reduce)";

function canRenderHeroRipples() {
  return (
    window.matchMedia(DESKTOP_MEDIA_QUERY).matches &&
    !window.matchMedia(REDUCED_MOTION_MEDIA_QUERY).matches
  );
}

export function HeroRippleEffects() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const reducedMotionMediaQuery = window.matchMedia(
      REDUCED_MOTION_MEDIA_QUERY,
    );
    const updateEnabledState = () => {
      setIsEnabled(canRenderHeroRipples());
    };

    updateEnabledState();
    desktopMediaQuery.addEventListener("change", updateEnabledState);
    reducedMotionMediaQuery.addEventListener("change", updateEnabledState);

    return () => {
      desktopMediaQuery.removeEventListener("change", updateEnabledState);
      reducedMotionMediaQuery.removeEventListener("change", updateEnabledState);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <RippleGrid
        className="banner-shell-ripple absolute inset-0"
        enableRainbow={false}
        gridColor="#ffffff"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        fadeDistance={1.65}
        fadeFloor={0.34}
        vignetteStrength={2}
        glowIntensity={0.12}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.8}
      />
      <RippleGrid
        className="banner-shell-ripple-secondary absolute inset-0"
        enableRainbow={false}
        gridColor="#dac9ff"
        rippleIntensity={0.018}
        gridSize={8.8}
        gridThickness={12}
        fadeDistance={1.5}
        fadeFloor={0.46}
        vignetteStrength={1.7}
        glowIntensity={0.08}
        gridRotation={14}
        mouseInteraction={true}
        mouseInteractionRadius={1.6}
        opacity={0.24}
      />
    </>
  );
}
