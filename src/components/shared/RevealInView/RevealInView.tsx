"use client";

import {
  motion,
  type HTMLMotionProps,
  type Transition,
  type Variant,
} from "motion/react";

import { cn } from "@/lib/cn";

export interface RevealInViewProps extends HTMLMotionProps<"div"> {
  delay?: number;
  distance?: number;
}

export function RevealInView({
  children,
  className,
  delay = 0,
  distance = 24,
  transition,
  ...props
}: Readonly<RevealInViewProps>) {
  const hidden: Variant = { opacity: 0, y: distance, filter: "blur(8px)" };
  const visible: Variant = { opacity: 1, y: 0, filter: "blur(0px)" };

  const animationTransition: Transition = {
    duration: 0.72,
    ease: [0.22, 1, 0.36, 1],
    delay,
    ...(transition ?? {}),
  };

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={animationTransition}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
