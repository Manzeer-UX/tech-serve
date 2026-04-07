"use client";

import { useEffect, useRef, useState } from "react";

import { LandingJourneyNode } from "./LandingJourneyNode";

const journeyViewport = {
  height: 1800,
  width: 1440,
} as const;

const journeyPath =
  "M1186 152 L1186 792 C1186 846 1138 836 1060 836 H118 C90 836 78 852 78 878 V938 C78 998 120 1040 180 1040 H1214 C1336 1040 1406 1114 1406 1230 V1312 C1406 1398 1356 1460 1274 1480 L1146 1512 C1072 1530 1022 1588 1022 1660 V1700";

const journeyNodes = [
  { cx: 1186, cy: 110, delay: 0.06 },
  { cx: 118, cy: 836, delay: 0.34 },
  { cx: 1406, cy: 1230, delay: 0.62 },
  { cx: 1022, cy: 1660, delay: 0.88 },
] as const;

const lineLength = 1000;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getJourneyPoint(pathElement: SVGPathElement, progress: number) {
  const totalLength = pathElement.getTotalLength();
  const nextPoint = pathElement.getPointAtLength(totalLength * progress);

  return {
    xPercent: (nextPoint.x / journeyViewport.width) * 100,
    yPercent: (nextPoint.y / journeyViewport.height) * 100,
  };
}

export function LandingJourneyLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [movingPoint, setMovingPoint] = useState<null | { xPercent: number; yPercent: number }>(null);

  useEffect(() => {
    const updateProgress = () => {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop < 8) {
        setProgress(0);
        return;
      }

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const revealDistance = rect.height + viewportHeight * 0.7;
      const traveledDistance = viewportHeight * 0.42 - rect.top;
      const nextProgress = clamp(traveledDistance / revealDistance, 0, 1);

      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const activeLength = progress > 0 ? Math.max(progress * lineLength, 18) : 0;
  const shineLength = Math.min(Math.max(activeLength * 0.12, 0), 56);
  const shineOffset = -Math.max(activeLength - shineLength, 0);

  useEffect(() => {
    const pathElement = pathRef.current;

    if (!pathElement || progress <= 0) {
      const resetFrame = window.requestAnimationFrame(() => {
        setMovingPoint(null);
      });

      return () => {
        window.cancelAnimationFrame(resetFrame);
      };
    }

    const frameId = window.requestAnimationFrame(() => {
      setMovingPoint(getJourneyPoint(pathElement, progress));
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [progress]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      <svg
        viewBox={`0 0 ${journeyViewport.width} ${journeyViewport.height}`}
        preserveAspectRatio="none"
        className="journey-line-svg h-full w-full"
      >
        <defs>
          <linearGradient id="journey-line-gradient" x1="10%" x2="88%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary-blue)" />
            <stop offset="46%" stopColor="var(--color-secondary-purple)" />
            <stop offset="100%" stopColor="var(--color-primary-blue)" />
          </linearGradient>
          <filter id="journey-line-blur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <path
          ref={pathRef}
          d={journeyPath}
          pathLength={lineLength}
          fill="none"
          stroke="var(--color-journey-line)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="journey-line-base"
        />
        <path
          d={journeyPath}
          pathLength={lineLength}
          fill="none"
          stroke="url(#journey-line-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={`${activeLength} ${lineLength}`}
          className="journey-line-glow"
        />
        <path
          d={journeyPath}
          pathLength={lineLength}
          fill="none"
          stroke="url(#journey-line-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={`${activeLength} ${lineLength}`}
          className="journey-line-active"
        />
        <path
          d={journeyPath}
          pathLength={lineLength}
          fill="none"
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={`${shineLength} ${lineLength}`}
          strokeDashoffset={shineOffset}
          className="journey-line-shine"
        />
      </svg>

      {journeyNodes.map((node) => (
        <LandingJourneyNode
          key={`${node.cx}-${node.cy}`}
          isVisible={progress > node.delay}
          xPercent={(node.cx / journeyViewport.width) * 100}
          yPercent={(node.cy / journeyViewport.height) * 100}
        />
      ))}

      {movingPoint ? (
        <LandingJourneyNode
          isVisible={progress > 0}
          xPercent={movingPoint.xPercent}
          yPercent={movingPoint.yPercent}
          className="z-[1]"
        />
      ) : null}
    </div>
  );
}
