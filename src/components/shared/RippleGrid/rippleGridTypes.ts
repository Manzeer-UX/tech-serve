export interface RippleGridProps {
  className?: string;
  enableRainbow?: boolean;
  fadeDistance?: number;
  fadeFloor?: number;
  glowIntensity?: number;
  gridColor?: string;
  gridRotation?: number;
  gridSize?: number;
  gridThickness?: number;
  mouseInteraction?: boolean;
  mouseInteractionRadius?: number;
  opacity?: number;
  rippleIntensity?: number;
  vignetteStrength?: number;
}

export interface RippleGridConfig {
  enableRainbow: boolean;
  fadeDistance: number;
  fadeFloor: number;
  glowIntensity: number;
  gridColor: string;
  gridRotation: number;
  gridSize: number;
  gridThickness: number;
  mouseInteraction: boolean;
  mouseInteractionRadius: number;
  opacity: number;
  rippleIntensity: number;
  vignetteStrength: number;
}

export interface RippleGridUniforms {
  enableRainbow: { value: boolean };
  fadeDistance: { value: number };
  fadeFloor: { value: number };
  glowIntensity: { value: number };
  gridColor: { value: [number, number, number] };
  gridRotation: { value: number };
  gridSize: { value: number };
  gridThickness: { value: number };
  iResolution: { value: [number, number] };
  iTime: { value: number };
  mouseInfluence: { value: number };
  mouseInteraction: { value: boolean };
  mouseInteractionRadius: { value: number };
  mousePosition: { value: [number, number] };
  opacity: { value: number };
  rippleIntensity: { value: number };
  vignetteStrength: { value: number };
}

export interface PointerPosition {
  x: number;
  y: number;
}
