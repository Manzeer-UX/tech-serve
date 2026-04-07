'use client';

import { cn } from "@/lib/cn";

import { useRippleGrid } from "./useRippleGrid";
import { resolveRippleGridConfig } from "./rippleGridUtils";
import type { RippleGridProps } from "./rippleGridTypes";

export function RippleGrid(props: Readonly<RippleGridProps>) {
  const { className } = props;
  const containerRef = useRippleGrid(resolveRippleGridConfig(props));

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative h-full w-full overflow-hidden [&_canvas]:block",
        className,
      )}
    />
  );
}
