"use client";

import { type CSSProperties, useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

import {
  mountFloatingLinesScene,
  type FloatingLinesSceneOptions,
  type FloatingLinesWavePosition,
  type FloatingWave,
} from "./floatingLinesScene";

export interface FloatingLinesProps {
  animationSpeed?: number;
  bendRadius?: number;
  bendStrength?: number;
  className?: string;
  enabledWaves?: ReadonlyArray<FloatingWave>;
  interactive?: boolean;
  lineCount?: number | ReadonlyArray<number>;
  lineDistance?: number | ReadonlyArray<number>;
  linesGradient?: ReadonlyArray<string>;
  middleWavePosition?: FloatingLinesWavePosition;
  mixBlendMode?: CSSProperties["mixBlendMode"];
  mouseDamping?: number;
  parallax?: boolean;
  parallaxStrength?: number;
  topWavePosition?: FloatingLinesWavePosition;
  bottomWavePosition?: FloatingLinesWavePosition;
}

const defaultGradient = ["#5000FE", "#8F6DFF", "#D7CBFF"] as const;

export function FloatingLines({
  animationSpeed = 0.8,
  bendRadius = 4.2,
  bendStrength = -0.55,
  className,
  enabledWaves = ["top", "middle", "bottom"],
  interactive = true,
  lineCount = 5,
  lineDistance = 5,
  linesGradient = defaultGradient,
  middleWavePosition,
  mixBlendMode = "multiply",
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.08,
  topWavePosition,
  bottomWavePosition,
}: Readonly<FloatingLinesProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const options: FloatingLinesSceneOptions = {
      animationSpeed,
      bendRadius,
      bendStrength,
      bottomWavePosition,
      enabledWaves,
      interactive,
      lineCount,
      lineDistance,
      linesGradient,
      middleWavePosition,
      mouseDamping,
      parallax,
      parallaxStrength,
      topWavePosition,
    };

    return mountFloatingLinesScene(container, options);
  }, [
    animationSpeed,
    bendRadius,
    bendStrength,
    bottomWavePosition,
    enabledWaves,
    interactive,
    lineCount,
    lineDistance,
    linesGradient,
    middleWavePosition,
    mouseDamping,
    parallax,
    parallaxStrength,
    topWavePosition,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ mixBlendMode }}
    />
  );
}
