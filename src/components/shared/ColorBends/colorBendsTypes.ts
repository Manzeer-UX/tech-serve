import type { ComponentPropsWithoutRef } from "react";

export const MAX_COLOR_BENDS_COLORS = 8;

export interface ColorBendsProps extends ComponentPropsWithoutRef<"div"> {
  autoRotate?: number;
  colors?: ReadonlyArray<string>;
  frequency?: number;
  mouseInfluence?: number;
  noise?: number;
  parallax?: number;
  rotation?: number;
  scale?: number;
  speed?: number;
  transparent?: boolean;
  warpStrength?: number;
}

export interface ColorBendsConfig {
  autoRotate: number;
  colors: ReadonlyArray<string>;
  frequency: number;
  mouseInfluence: number;
  noise: number;
  parallax: number;
  rotation: number;
  scale: number;
  speed: number;
  transparent: boolean;
  warpStrength: number;
}
