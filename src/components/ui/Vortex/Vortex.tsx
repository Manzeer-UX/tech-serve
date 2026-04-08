"use client";

import { motion } from "motion/react";
import { type ReactNode, useRef } from "react";

import { cn } from "@/lib/cn";

import { useVortexCanvas } from "./useVortexCanvas";

export interface VortexProps {
  backgroundColor?: string;
  baseHue?: number;
  baseRadius?: number;
  baseSpeed?: number;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  hueRange?: number;
  particleCount?: number;
  rangeRadius?: number;
  rangeSpeed?: number;
  rangeY?: number;
}

export function Vortex({
  backgroundColor = "transparent",
  baseHue = 250,
  baseRadius = 0.6,
  baseSpeed = 0.15,
  children,
  className,
  containerClassName,
  hueRange = 28,
  particleCount = 220,
  rangeRadius = 1.3,
  rangeSpeed = 1.05,
  rangeY = 180,
}: Readonly<VortexProps>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useVortexCanvas({
    backgroundColor,
    baseHue,
    baseRadius,
    baseSpeed,
    canvasRef,
    containerRef,
    hueRange,
    particleCount,
    rangeRadius,
    rangeSpeed,
    rangeY,
  });

  return (
    <div className={cn("relative h-full w-full overflow-hidden", containerClassName)}>
      <motion.div
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        ref={containerRef}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <canvas className="h-full w-full" ref={canvasRef} />
      </motion.div>

      {children ? <div className={cn("relative z-10", className)}>{children}</div> : null}
    </div>
  );
}
