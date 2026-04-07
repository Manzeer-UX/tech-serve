import type {
  RippleGridConfig,
  RippleGridProps,
  RippleGridUniforms,
} from "./rippleGridTypes";

export function hexToRgb(hex: string): [number, number, number] {
  const normalizedHex = hex.trim().replace("#", "");

  if (normalizedHex.length === 3) {
    const [red, green, blue] = normalizedHex.split("");
    return hexToRgb(`#${red}${red}${green}${green}${blue}${blue}`);
  }

  if (!/^[\da-fA-F]{6}$/.test(normalizedHex)) {
    return [1, 1, 1];
  }

  const red = parseInt(normalizedHex.slice(0, 2), 16) / 255;
  const green = parseInt(normalizedHex.slice(2, 4), 16) / 255;
  const blue = parseInt(normalizedHex.slice(4, 6), 16) / 255;

  return [red, green, blue];
}

export function resolveRippleGridConfig(
  props: Readonly<RippleGridProps>,
): RippleGridConfig {
  return {
    enableRainbow: props.enableRainbow ?? false,
    fadeDistance: props.fadeDistance ?? 1.5,
    fadeFloor: props.fadeFloor ?? 0,
    glowIntensity: props.glowIntensity ?? 0.1,
    gridColor: props.gridColor ?? "#ffffff",
    gridRotation: props.gridRotation ?? 0,
    gridSize: props.gridSize ?? 10,
    gridThickness: props.gridThickness ?? 15,
    mouseInteraction: props.mouseInteraction ?? true,
    mouseInteractionRadius: props.mouseInteractionRadius ?? 1,
    opacity: props.opacity ?? 1,
    rippleIntensity: props.rippleIntensity ?? 0.05,
    vignetteStrength: props.vignetteStrength ?? 2,
  };
}

export function createRippleGridUniforms(
  config: Readonly<RippleGridConfig>,
): RippleGridUniforms {
  return {
    iTime: { value: 0 },
    iResolution: { value: [1, 1] },
    enableRainbow: { value: config.enableRainbow },
    gridColor: { value: hexToRgb(config.gridColor) },
    rippleIntensity: { value: config.rippleIntensity },
    gridSize: { value: config.gridSize },
    gridThickness: { value: config.gridThickness },
    fadeDistance: { value: config.fadeDistance },
    fadeFloor: { value: config.fadeFloor },
    vignetteStrength: { value: config.vignetteStrength },
    glowIntensity: { value: config.glowIntensity },
    opacity: { value: config.opacity },
    gridRotation: { value: config.gridRotation },
    mouseInteraction: { value: config.mouseInteraction },
    mousePosition: { value: [0.5, 0.5] },
    mouseInfluence: { value: 0 },
    mouseInteractionRadius: { value: config.mouseInteractionRadius },
  };
}
