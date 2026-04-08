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

function applyTrackTransform(
  trackElement: HTMLDivElement,
  isDesktop: boolean,
  translateX: number,
) {
  trackElement.style.transform = isDesktop
    ? `translate3d(-${translateX}px, 0, 0)`
    : "";
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
  const translateXRef = useRef(0);
  const metricsRef = useRef<WorkflowTimelineMetrics>(defaultMetrics);
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
      translateXRef.current = nextMetrics.isDesktop
        ? clamp(translateXRef.current, 0, nextMetrics.maxTranslateX)
        : 0;

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
      applyTrackTransform(
        trackElement,
        nextMetrics.isDesktop,
        translateXRef.current,
      );
    };

    const updateTranslateX = () => {
      const trackElement = trackRef.current;
      const currentMetrics = metricsRef.current;

      if (!trackElement) {
        return;
      }

      const nextTranslateX = currentMetrics.isDesktop
        ? clamp(
            window.scrollY - sceneTopRef.current + STICKY_TOP_OFFSET,
            0,
            currentMetrics.maxTranslateX,
          )
        : 0;

      if (translateXRef.current === nextTranslateX) {
        return;
      }

      translateXRef.current = nextTranslateX;
      applyTrackTransform(trackElement, currentMetrics.isDesktop, nextTranslateX);
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
    viewportRef,
  };
}
