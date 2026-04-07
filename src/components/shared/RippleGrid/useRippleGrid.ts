import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";

import { rippleGridFragmentShader, rippleGridVertexShader } from "./rippleGridShaders";
import {
  createRippleGridUniforms,
  hexToRgb,
} from "./rippleGridUtils";
import type {
  PointerPosition,
  RippleGridConfig,
  RippleGridUniforms,
} from "./rippleGridTypes";

function setUniformValue<T>(
  uniform: { value: T } | undefined,
  value: T,
) {
  if (!uniform) {
    return;
  }

  uniform.value = value;
}

export function useRippleGrid(config: Readonly<RippleGridConfig>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentMouseRef = useRef<PointerPosition>({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef<PointerPosition>({ x: 0.5, y: 0.5 });
  const mouseInfluenceRef = useRef(0);
  const optionsRef = useRef(config);
  const uniformsRef = useRef<RippleGridUniforms | null>(null);

  useEffect(() => {
    optionsRef.current = config;

    const uniforms = uniformsRef.current;
    if (!uniforms) {
      return;
    }

    setUniformValue(uniforms.enableRainbow, config.enableRainbow);
    setUniformValue(uniforms.gridColor, hexToRgb(config.gridColor));
    setUniformValue(uniforms.rippleIntensity, config.rippleIntensity);
    setUniformValue(uniforms.gridSize, config.gridSize);
    setUniformValue(uniforms.gridThickness, config.gridThickness);
    setUniformValue(uniforms.fadeDistance, config.fadeDistance);
    setUniformValue(uniforms.fadeFloor, config.fadeFloor);
    setUniformValue(uniforms.vignetteStrength, config.vignetteStrength);
    setUniformValue(uniforms.glowIntensity, config.glowIntensity);
    setUniformValue(uniforms.opacity, config.opacity);
    setUniformValue(uniforms.gridRotation, config.gridRotation);
    setUniformValue(uniforms.mouseInteraction, config.mouseInteraction);
    setUniformValue(
      uniforms.mouseInteractionRadius,
      config.mouseInteractionRadius,
    );
  }, [config]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let renderer: Renderer;
    try {
      renderer = new Renderer({
        alpha: true,
        dpr: Math.min(window.devicePixelRatio, 2),
      });
    } catch {
      return;
    }

    const gl = renderer.gl;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    container.appendChild(gl.canvas);

    const uniforms = createRippleGridUniforms(optionsRef.current);
    uniformsRef.current = uniforms;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      depthTest: false,
      depthWrite: false,
      fragment: rippleGridFragmentShader,
      transparent: true,
      uniforms,
      vertex: rippleGridVertexShader,
    });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const { clientHeight, clientWidth } = container;
      if (clientWidth === 0 || clientHeight === 0) {
        return;
      }

      renderer.setSize(clientWidth, clientHeight);
      uniforms.iResolution.value = [clientWidth, clientHeight];
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!optionsRef.current.mouseInteraction) {
        mouseInfluenceRef.current = 0;
        return;
      }

      const rect = container.getBoundingClientRect();

      targetMouseRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: 1 - (event.clientY - rect.top) / rect.height,
      };
    };

    const handleMouseEnter = () => {
      if (!optionsRef.current.mouseInteraction) {
        return;
      }

      mouseInfluenceRef.current = 1;
    };

    const handlePointerReset = () => {
      mouseInfluenceRef.current = 0;
    };

    let animationFrameId = 0;
    const render = (time: number) => {
      uniforms.iTime.value = time * 0.001;

      currentMouseRef.current.x +=
        (targetMouseRef.current.x - currentMouseRef.current.x) * 0.1;
      currentMouseRef.current.y +=
        (targetMouseRef.current.y - currentMouseRef.current.y) * 0.1;

      uniforms.mouseInfluence.value +=
        (mouseInfluenceRef.current - uniforms.mouseInfluence.value) * 0.05;
      uniforms.mousePosition.value = [
        currentMouseRef.current.x,
        currentMouseRef.current.y,
      ];

      renderer.render({ scene: mesh });
      animationFrameId = window.requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handlePointerReset);
    window.addEventListener("blur", handlePointerReset);
    resize();
    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", handlePointerReset);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handlePointerReset);
      uniformsRef.current = null;
      program.remove();
      geometry.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();

      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, []);

  return containerRef;
}
