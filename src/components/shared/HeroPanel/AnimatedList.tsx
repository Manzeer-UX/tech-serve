"use client";

import React, {
  Children,
  memo,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, type MotionProps } from "motion/react";

import { cn } from "@/lib/cn";

const listItemAnimations: MotionProps = {
  initial: { y: 16, scale: 0.97, opacity: 0 },
  animate: { y: 0, scale: 1, opacity: 1 },
  exit: { y: -10, scale: 0.98, opacity: 0 },
  transition: { type: "spring", stiffness: 320, damping: 28, mass: 0.9 },
};

export interface AnimatedListItemProps {
  children: ReactNode;
}

export function AnimatedListItem({
  children,
}: Readonly<AnimatedListItemProps>) {
  return (
    <motion.div {...listItemAnimations} layout className="w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  delay?: number;
  initialDelay?: number;
  loopDelay?: number;
}

export const AnimatedList = memo(function AnimatedList({
  children,
  className,
  delay = 1000,
  initialDelay = 240,
  loopDelay = 1400,
  ...props
}: Readonly<AnimatedListProps>) {
  const childrenArray = Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (childrenArray.length === 0) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      if (visibleCount >= childrenArray.length) {
        setVisibleCount(0);

        return;
      }

      setVisibleCount((currentCount) => currentCount + 1);
    }, visibleCount === 0 ? initialDelay : visibleCount === childrenArray.length ? loopDelay : delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [childrenArray.length, delay, initialDelay, loopDelay, visibleCount]);

  const itemsToShow = childrenArray.slice(0, visibleCount);

  return (
    <div
      className={cn("flex flex-col items-center gap-3.5", className)}
      {...props}
    >
      <AnimatePresence mode="popLayout">
        {itemsToShow.map((item, index) => {
          const itemKey =
            React.isValidElement(item) && item.key !== null
              ? String(item.key)
              : `animated-list-item-${index}`;

          return <AnimatedListItem key={itemKey}>{item}</AnimatedListItem>;
        })}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";
