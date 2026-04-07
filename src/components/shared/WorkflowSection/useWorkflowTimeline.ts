"use client";

import { useEffect, useRef, useState } from "react";

interface WorkflowTimelineMetrics {
  isDesktop: boolean;
  maxTranslateX: number;
  sceneHeight: number;
  scrollSpan: number;
}

const DESKTOP_BREAKPOINT = 1024;
const STICKY_TOP_OFFSET = 0;
const SCENE_EXIT_PADDING = 0;
const defaultMetrics: WorkflowTimelineMetrics = {
  isDesktop: false,
  maxTranslateX: 0,
  sceneHeight: 0,
  scrollSpan: 0,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getMetrics(
  viewportElement: HTMLDivElement,
  trackElement: HTMLDivElement,
): WorkflowTimelineMetrics {
  const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
  const maxTranslateX = Math.max(
    trackElement.scrollWidth - viewportElement.clientWidth,
    0,
  );
  const scrollSpan = isDesktop ? maxTranslateX + SCENE_EXIT_PADDING : 0;
  const sceneHeight = isDesktop
    ? viewportElement.offsetHeight + scrollSpan + STICKY_TOP_OFFSET
    : viewportElement.offsetHeight;

  return {
    isDesktop,
    maxTranslateX,
    sceneHeight,
    scrollSpan,
  };
}

export function useWorkflowTimeline() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sceneTopRef = useRef(0);
  const metricsRef = useRef<WorkflowTimelineMetrics>(defaultMetrics);
  const [translateX, setTranslateX] = useState(0);
  const [metrics, setMetrics] = useState<WorkflowTimelineMetrics>(defaultMetrics);

  useEffect(() => {
    let animationFrameId = 0;

    const measure = () => {
      const sceneElement = sceneRef.current;
      const viewportElement = viewportRef.current;
      const trackElement = trackRef.current;

      if (!sceneElement || !viewportElement || !trackElement) {
        return;
      }

      const nextMetrics = getMetrics(viewportElement, trackElement);
      sceneTopRef.current =
        window.scrollY + sceneElement.getBoundingClientRect().top;
      metricsRef.current = nextMetrics;

      setMetrics((previousMetrics) => {
        if (
          previousMetrics.isDesktop === nextMetrics.isDesktop &&
          previousMetrics.maxTranslateX === nextMetrics.maxTranslateX &&
          previousMetrics.sceneHeight === nextMetrics.sceneHeight &&
          previousMetrics.scrollSpan === nextMetrics.scrollSpan
        ) {
          return previousMetrics;
        }

        return nextMetrics;
      });

      setTranslateX((previousTranslateX) =>
        nextMetrics.isDesktop
          ? clamp(previousTranslateX, 0, nextMetrics.maxTranslateX)
          : 0,
      );
    };

    const updateTranslateX = () => {
      const currentMetrics = metricsRef.current;

      if (!currentMetrics.isDesktop) {
        setTranslateX(0);
        return;
      }

      const scrollProgress = clamp(
        window.scrollY - sceneTopRef.current + STICKY_TOP_OFFSET,
        0,
        currentMetrics.maxTranslateX,
      );

      setTranslateX(scrollProgress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateTranslateX);
    };

    const handleResize = () => {
      measure();
      updateTranslateX();
    };

    measure();
    updateTranslateX();

    const resizeObserver = new ResizeObserver(handleResize);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    metrics,
    sceneRef,
    trackRef,
    translateX,
    viewportRef,
  };
}
