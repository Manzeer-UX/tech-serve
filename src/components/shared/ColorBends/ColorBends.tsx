"use client";

import { useMemo } from "react";

import { cn } from "@/lib/cn";

import type { ColorBendsProps } from "./colorBendsTypes";
import { resolveColorBendsConfig } from "./colorBendsUtils";
import { useColorBends } from "./useColorBends";

export function ColorBends(props: Readonly<ColorBendsProps>) {
  const {
    autoRotate,
    className,
    colors,
    frequency,
    mouseInfluence,
    noise,
    parallax,
    rotation,
    scale,
    speed,
    style,
    transparent,
    warpStrength,
  } = props;

  const config = useMemo(
    () =>
      resolveColorBendsConfig({
        autoRotate,
        colors,
        frequency,
        mouseInfluence,
        noise,
        parallax,
        rotation,
        scale,
        speed,
        transparent,
        warpStrength,
      }),
    [
      autoRotate,
      colors,
      frequency,
      mouseInfluence,
      noise,
      parallax,
      rotation,
      scale,
      speed,
      transparent,
      warpStrength,
    ],
  );

  const containerRef = useColorBends(config);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative h-full w-full overflow-hidden [&_canvas]:block",
        className,
      )}
      style={style}
    />
  );
}
