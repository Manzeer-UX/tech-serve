"use client";

import {
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

import { cn } from "@/lib/cn";

type TextRevealElement = "div" | "h1" | "h2" | "h3" | "p" | "span";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  as?: TextRevealElement;
  children: string;
  textClassName?: string;
}

interface TextRevealWordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function TextRevealWord({
  children,
  progress,
  range,
}: Readonly<TextRevealWordProps>) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [14, 0]);
  const filter = useTransform(progress, range, ["blur(8px)", "blur(0px)"]);

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className="mr-[0.22em] inline-block text-[var(--color-brand-black)] will-change-transform"
    >
      {children}
    </motion.span>
  );
}

export function TextReveal({
  as = "div",
  children,
  className,
  textClassName,
  ...props
}: Readonly<TextRevealProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "end 0.34"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const Component = as as ElementType;
  const words = children.split(" ");

  return (
    <div ref={containerRef} className={cn("relative", className)} {...props}>
      <Component className={cn("flex flex-wrap", textClassName)}>
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <TextRevealWord
              key={`${word}-${index}`}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </TextRevealWord>
          );
        })}
      </Component>
    </div>
  );
}
