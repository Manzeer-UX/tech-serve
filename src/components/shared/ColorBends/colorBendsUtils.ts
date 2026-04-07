import { Vector3 } from "three";

import type { ColorBendsConfig, ColorBendsProps } from "./colorBendsTypes";
import { MAX_COLOR_BENDS_COLORS } from "./colorBendsTypes";

const DEFAULT_COLOR_BENDS_COLORS = ["#ffffff", "#eadfff", "#c8aeff"];

function normalizeHexColor(hex: string) {
  const value = hex.replace("#", "").trim();

  if (value.length === 3) {
    return value
      .split("")
      .map((character) => `${character}${character}`)
      .join("");
  }

  return value.length === 6 ? value : "ffffff";
}

export function hexToColorBendsVector(hex: string) {
  const value = normalizeHexColor(hex);

  return new Vector3(
    Number.parseInt(value.slice(0, 2), 16) / 255,
    Number.parseInt(value.slice(2, 4), 16) / 255,
    Number.parseInt(value.slice(4, 6), 16) / 255,
  );
}

export function createColorBendsPalette(colors: ReadonlyArray<string>) {
  return Array.from({ length: MAX_COLOR_BENDS_COLORS }, (_, index) =>
    index < colors.length
      ? hexToColorBendsVector(colors[index])
      : new Vector3(0, 0, 0),
  );
}

export function resolveColorBendsConfig(
  props: Readonly<Omit<ColorBendsProps, "children" | "className" | "style">>,
): ColorBendsConfig {
  const palette =
    props.colors && props.colors.length > 0
      ? props.colors.slice(0, MAX_COLOR_BENDS_COLORS)
      : DEFAULT_COLOR_BENDS_COLORS;

  return {
    autoRotate: props.autoRotate ?? 0,
    colors: palette,
    frequency: props.frequency ?? 1,
    mouseInfluence: props.mouseInfluence ?? 1,
    noise: props.noise ?? 0.1,
    parallax: props.parallax ?? 0.5,
    rotation: props.rotation ?? 45,
    scale: props.scale ?? 1,
    speed: props.speed ?? 0.2,
    transparent: props.transparent ?? true,
    warpStrength: props.warpStrength ?? 1,
  };
}
