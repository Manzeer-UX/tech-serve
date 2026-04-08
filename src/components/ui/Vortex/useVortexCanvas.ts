"use client";

import { type RefObject, useEffect } from "react";
import { createNoise3D } from "simplex-noise";

const BASE_TTL = 50;
const NOISE_STEPS = 3;
const PARTICLE_PROP_COUNT = 9;
const RANGE_TTL = 150;
const TO_RADIANS = Math.PI / 180;
const X_OFFSET = 0.00125;
const Y_OFFSET = 0.00125;
const Z_OFFSET = 0.0005;

export interface UseVortexCanvasOptions {
  backgroundColor: string;
  baseHue: number;
  baseRadius: number;
  baseSpeed: number;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  hueRange: number;
  particleCount: number;
  rangeRadius: number;
  rangeSpeed: number;
  rangeY: number;
}

export function useVortexCanvas({
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
}: Readonly<UseVortexCanvasOptions>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const noise3D = createNoise3D();
    let animationFrameId = 0;
    let particleProps = new Float32Array(particleCount * PARTICLE_PROP_COUNT);
    let tick = 0;
    let centerY = 0;

    const random = (value: number) => value * Math.random();
    const randomRange = (value: number) => value - random(value * 2);
    const fadeInOut = (time: number, maxTime: number) => {
      const halfMaxTime = maxTime * 0.5;
      return Math.abs(((time + halfMaxTime) % maxTime) - halfMaxTime) / halfMaxTime;
    };
    const lerp = (start: number, end: number, amount: number) =>
      (1 - amount) * start + amount * end;

    const initializeParticle = (index: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const ttl = BASE_TTL + random(RANGE_TTL);

      particleProps.set(
        [
          random(canvas.width),
          centerY + randomRange(rangeY * dpr),
          0,
          0,
          0,
          ttl,
          baseSpeed + random(rangeSpeed),
          baseRadius + random(rangeRadius),
          baseHue + random(hueRange),
        ],
        index,
      );
    };

    const initializeParticles = () => {
      tick = 0;
      particleProps = new Float32Array(particleCount * PARTICLE_PROP_COUNT);

      for (let index = 0; index < particleProps.length; index += PARTICLE_PROP_COUNT) {
        initializeParticle(index);
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      centerY = canvas.height * 0.5;
      initializeParticles();
    };

    const isOutOfBounds = (x: number, y: number) =>
      x > canvas.width || x < 0 || y > canvas.height || y < 0;

    const drawParticle = (
      x: number,
      y: number,
      nextX: number,
      nextY: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
    ) => {
      context.save();
      context.lineCap = "round";
      context.lineWidth = radius;
      context.strokeStyle = `hsla(${hue}, 100%, 62%, ${fadeInOut(life, ttl)})`;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(nextX, nextY);
      context.stroke();
      context.closePath();
      context.restore();
    };

    const updateParticle = (index: number) => {
      const x = particleProps[index];
      const y = particleProps[index + 1];
      const angle =
        noise3D(x * X_OFFSET, y * Y_OFFSET, tick * Z_OFFSET) *
        NOISE_STEPS *
        (360 * TO_RADIANS);
      const velocityX = lerp(particleProps[index + 2], Math.cos(angle), 0.5);
      const velocityY = lerp(particleProps[index + 3], Math.sin(angle), 0.5);
      const life = particleProps[index + 4] + 1;
      const ttl = particleProps[index + 5];
      const speed = particleProps[index + 6];
      const radius = particleProps[index + 7];
      const hue = particleProps[index + 8];
      const nextX = x + velocityX * speed;
      const nextY = y + velocityY * speed;

      drawParticle(x, y, nextX, nextY, life, ttl, radius, hue);

      particleProps[index] = nextX;
      particleProps[index + 1] = nextY;
      particleProps[index + 2] = velocityX;
      particleProps[index + 3] = velocityY;
      particleProps[index + 4] = life;

      if (isOutOfBounds(nextX, nextY) || life > ttl) {
        initializeParticle(index);
      }
    };

    const drawFrame = () => {
      tick += 1;
      context.clearRect(0, 0, canvas.width, canvas.height);

      if (backgroundColor !== "transparent") {
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      for (let index = 0; index < particleProps.length; index += PARTICLE_PROP_COUNT) {
        updateParticle(index);
      }

      context.save();
      context.filter = "blur(7px) brightness(180%)";
      context.globalCompositeOperation = "lighter";
      context.drawImage(canvas, 0, 0);
      context.restore();

      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    resizeCanvas();
    drawFrame();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [
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
  ]);
}
