"use client";

import { useEffect, useRef } from "react";
import {
  Clock,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
} from "three";

import { COLOR_BENDS_FRAGMENT_SHADER, COLOR_BENDS_VERTEX_SHADER } from "./colorBendsShaders";
import type { ColorBendsConfig } from "./colorBendsTypes";
import { createColorBendsPalette, hexToColorBendsVector } from "./colorBendsUtils";

interface ColorBendsRuntime {
  material: ShaderMaterial;
  renderer: WebGLRenderer;
}

function syncColorBendsSize(container: HTMLDivElement, runtime: ColorBendsRuntime) {
  const width = Math.max(container.clientWidth, 1);
  const height = Math.max(container.clientHeight, 1);
  runtime.renderer.setSize(width, height, false);
  runtime.material.uniforms["uCanvas"].value.set(width, height);
}

function syncColorBendsUniforms(
  runtime: ColorBendsRuntime,
  config: Readonly<ColorBendsConfig>,
) {
  const uniforms = runtime.material.uniforms;
  const palette = uniforms["uColors"].value;

  uniforms["uSpeed"].value = config.speed;
  uniforms["uScale"].value = config.scale;
  uniforms["uFrequency"].value = config.frequency;
  uniforms["uWarpStrength"].value = config.warpStrength;
  uniforms["uMouseInfluence"].value = config.mouseInfluence;
  uniforms["uParallax"].value = config.parallax;
  uniforms["uNoise"].value = config.noise;
  uniforms["uTransparent"].value = config.transparent ? 1 : 0;
  uniforms["uColorCount"].value = config.colors.length;

  config.colors.forEach((color, index) => {
    palette[index].copy(hexToColorBendsVector(color));
  });

  for (let index = config.colors.length; index < palette.length; index += 1) {
    palette[index].set(0, 0, 0);
  }

  runtime.renderer.setClearColor(0x000000, config.transparent ? 0 : 1);
}

export function useColorBends(config: Readonly<ColorBendsConfig>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const runtimeRef = useRef<ColorBendsRuntime | null>(null);
  const initialConfigRef = useRef(config);
  const rotationRef = useRef(config.rotation);
  const autoRotateRef = useRef(config.autoRotate);
  const pointerCurrentRef = useRef(new Vector2(0, 0));
  const pointerTargetRef = useRef(new Vector2(0, 0));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const initialConfig = initialConfigRef.current;

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new PlaneGeometry(2, 2);
    const material = new ShaderMaterial({
      vertexShader: COLOR_BENDS_VERTEX_SHADER,
      fragmentShader: COLOR_BENDS_FRAGMENT_SHADER,
      uniforms: {
        uCanvas: { value: new Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: initialConfig.speed },
        uRot: { value: new Vector2(1, 0) },
        uColorCount: { value: initialConfig.colors.length },
        uColors: { value: createColorBendsPalette(initialConfig.colors) },
        uTransparent: { value: initialConfig.transparent ? 1 : 0 },
        uScale: { value: initialConfig.scale },
        uFrequency: { value: initialConfig.frequency },
        uWarpStrength: { value: initialConfig.warpStrength },
        uPointer: { value: new Vector2(0, 0) },
        uMouseInfluence: { value: initialConfig.mouseInfluence },
        uParallax: { value: initialConfig.parallax },
        uNoise: { value: initialConfig.noise },
      },
      premultipliedAlpha: true,
      transparent: true,
    });
    const mesh = new Mesh(geometry, material);
    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.outputColorSpace = SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.display = "block";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.width = "100%";
    container.appendChild(renderer.domElement);
    scene.add(mesh);

    const runtime = { material, renderer };
    runtimeRef.current = runtime;
    syncColorBendsUniforms(runtime, initialConfig);
    syncColorBendsSize(container, runtime);

    const handleResize = () => syncColorBendsSize(container, runtime);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
      const y = -((((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2) - 1);
      pointerTargetRef.current.set(x, y);
    };

    const handlePointerLeave = () => pointerTargetRef.current.set(0, 0);
    window.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    const clock = new Clock();
    let frameId = 0;

    const renderFrame = () => {
      const delta = clock.getDelta();
      const elapsed = clock.elapsedTime;
      const rotation = ((rotationRef.current % 360) + autoRotateRef.current * elapsed) * (Math.PI / 180);
      const pointerLerp = Math.min(1, delta * 8);

      material.uniforms["uTime"].value = elapsed;
      material.uniforms["uRot"].value.set(Math.cos(rotation), Math.sin(rotation));
      pointerCurrentRef.current.lerp(pointerTargetRef.current, pointerLerp);
      material.uniforms["uPointer"].value.copy(pointerCurrentRef.current);
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(renderFrame);
    };

    frameId = window.requestAnimationFrame(renderFrame);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      runtimeRef.current = null;
      if (renderer.domElement.parentElement === container) container.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    rotationRef.current = config.rotation;
    autoRotateRef.current = config.autoRotate;

    const runtime = runtimeRef.current;
    if (!runtime) return;

    syncColorBendsUniforms(runtime, config);
  }, [config]);

  return containerRef;
}
