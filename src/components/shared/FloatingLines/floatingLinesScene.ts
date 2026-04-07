import {
  Clock,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";

import {
  floatingLinesFragmentShader,
  floatingLinesVertexShader,
  MAX_GRADIENT_STOPS,
} from "./floatingLinesShaders";

export type FloatingWave = "bottom" | "middle" | "top";

export interface FloatingLinesWavePosition {
  rotate: number;
  x: number;
  y: number;
}

export interface FloatingLinesSceneOptions {
  animationSpeed: number;
  bendRadius: number;
  bendStrength: number;
  enabledWaves: ReadonlyArray<FloatingWave>;
  interactive: boolean;
  lineCount: number | ReadonlyArray<number>;
  lineDistance: number | ReadonlyArray<number>;
  linesGradient: ReadonlyArray<string>;
  middleWavePosition?: FloatingLinesWavePosition;
  mouseDamping: number;
  parallax: boolean;
  parallaxStrength: number;
  topWavePosition?: FloatingLinesWavePosition;
  bottomWavePosition?: FloatingLinesWavePosition;
}

function hexToVector3(hex: string) {
  const value = hex.trim().replace("#", "");
  const [red, green, blue] =
    value.length === 3
      ? [value[0] + value[0], value[1] + value[1], value[2] + value[2]]
      : [value.slice(0, 2), value.slice(2, 4), value.slice(4, 6)];

  return new Vector3(
    parseInt(red || "ff", 16) / 255,
    parseInt(green || "ff", 16) / 255,
    parseInt(blue || "ff", 16) / 255,
  );
}

function getWaveValue(
  enabledWaves: ReadonlyArray<FloatingWave>,
  setting: number | ReadonlyArray<number>,
  wave: FloatingWave,
  fallback: number,
) {
  if (!enabledWaves.includes(wave)) {
    return 0;
  }

  if (typeof setting === "number") {
    return setting;
  }

  const index = enabledWaves.indexOf(wave);
  return setting[index] ?? fallback;
}

export function mountFloatingLinesScene(
  container: HTMLDivElement,
  options: Readonly<FloatingLinesSceneOptions>,
) {
  let isActive = true;
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new WebGLRenderer({ alpha: true, antialias: true });
  const geometry = new PlaneGeometry(2, 2);
  const clock = new Clock();
  const targetMouse = new Vector2(-1000, -1000);
  const currentMouse = new Vector2(-1000, -1000);
  const targetParallax = new Vector2(0, 0);
  const currentParallax = new Vector2(0, 0);
  let targetInfluence = 0;
  let currentInfluence = 0;
  let animationFrameId = 0;

  camera.position.z = 1;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.setClearAlpha(0);
  container.appendChild(renderer.domElement);

  const enabledWaves = options.enabledWaves;
  const uniforms = {
    animationSpeed: { value: options.animationSpeed },
    bendInfluence: { value: 0 },
    bendRadius: { value: options.bendRadius },
    bendStrength: { value: options.bendStrength },
    bottomLineCount: { value: getWaveValue(enabledWaves, options.lineCount, "bottom", 5) },
    bottomLineDistance: {
      value: getWaveValue(enabledWaves, options.lineDistance, "bottom", 5) * 0.01,
    },
    bottomWavePosition: {
      value: new Vector3(
        options.bottomWavePosition?.x ?? 1.8,
        options.bottomWavePosition?.y ?? -0.75,
        options.bottomWavePosition?.rotate ?? 0.25,
      ),
    },
    enableBottom: { value: enabledWaves.includes("bottom") },
    enableMiddle: { value: enabledWaves.includes("middle") },
    enableTop: { value: enabledWaves.includes("top") },
    iMouse: { value: new Vector2(-1000, -1000) },
    iResolution: { value: new Vector3(1, 1, 1) },
    iTime: { value: 0 },
    interactive: { value: options.interactive },
    lineGradient: {
      value: Array.from({ length: MAX_GRADIENT_STOPS }, () => new Vector3(1, 1, 1)),
    },
    lineGradientCount: { value: Math.min(options.linesGradient.length, MAX_GRADIENT_STOPS) },
    middleLineCount: { value: getWaveValue(enabledWaves, options.lineCount, "middle", 6) },
    middleLineDistance: {
      value: getWaveValue(enabledWaves, options.lineDistance, "middle", 5) * 0.01,
    },
    middleWavePosition: {
      value: new Vector3(
        options.middleWavePosition?.x ?? 4.8,
        options.middleWavePosition?.y ?? 0.02,
        options.middleWavePosition?.rotate ?? 0.16,
      ),
    },
    parallax: { value: options.parallax },
    parallaxOffset: { value: new Vector2(0, 0) },
    topLineCount: { value: getWaveValue(enabledWaves, options.lineCount, "top", 5) },
    topLineDistance: { value: getWaveValue(enabledWaves, options.lineDistance, "top", 5) * 0.01 },
    topWavePosition: {
      value: new Vector3(
        options.topWavePosition?.x ?? 8.6,
        options.topWavePosition?.y ?? 1.15,
        options.topWavePosition?.rotate ?? -0.18,
      ),
    },
  };

  options.linesGradient.slice(0, MAX_GRADIENT_STOPS).forEach((hex, index) => {
    const color = hexToVector3(hex);
    uniforms.lineGradient.value[index].set(color.x, color.y, color.z);
  });

  const material = new ShaderMaterial({
    fragmentShader: floatingLinesFragmentShader,
    transparent: true,
    uniforms,
    vertexShader: floatingLinesVertexShader,
  });
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);

  const setSize = () => {
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    renderer.setSize(width, height, false);
    uniforms.iResolution.value.set(renderer.domElement.width, renderer.domElement.height, 1);
  };

  const resizeObserver =
    typeof ResizeObserver === "undefined"
      ? null
      : new ResizeObserver(() => {
          if (isActive) {
            setSize();
          }
        });

  const handlePointerMove = (event: PointerEvent) => {
    const rect = renderer.domElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const pixelRatio = renderer.getPixelRatio();

    targetMouse.set(x * pixelRatio, (rect.height - y) * pixelRatio);
    targetInfluence = 1;

    if (!options.parallax) {
      return;
    }

    targetParallax.set(
      ((x - rect.width / 2) / rect.width) * options.parallaxStrength,
      (-(y - rect.height / 2) / rect.height) * options.parallaxStrength,
    );
  };

  const handlePointerLeave = () => {
    targetInfluence = 0;
  };

  const renderLoop = () => {
    if (!isActive) {
      return;
    }

    uniforms.iTime.value = clock.getElapsedTime();
    currentMouse.lerp(targetMouse, options.mouseDamping);
    currentParallax.lerp(targetParallax, options.mouseDamping);
    currentInfluence += (targetInfluence - currentInfluence) * options.mouseDamping;
    uniforms.iMouse.value.copy(currentMouse);
    uniforms.parallaxOffset.value.copy(currentParallax);
    uniforms.bendInfluence.value = currentInfluence;
    renderer.render(scene, camera);
    animationFrameId = window.requestAnimationFrame(renderLoop);
  };

  setSize();
  resizeObserver?.observe(container);
  if (options.interactive) {
    renderer.domElement.addEventListener("pointerleave", handlePointerLeave);
    renderer.domElement.addEventListener("pointermove", handlePointerMove);
  }
  renderLoop();

  return () => {
    isActive = false;
    window.cancelAnimationFrame(animationFrameId);
    resizeObserver?.disconnect();
    if (options.interactive) {
      renderer.domElement.removeEventListener("pointerleave", handlePointerLeave);
      renderer.domElement.removeEventListener("pointermove", handlePointerMove);
    }
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    const parent = renderer.domElement.parentElement;
    if (parent) {
      parent.removeChild(renderer.domElement);
    }
  };
}
