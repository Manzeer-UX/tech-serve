import { cn } from "@/lib/cn";
import { type NavigationItem } from "@/lib/landingPageContent";

import styles from "./GooeyNav.module.css";

export interface GooeyNavProps {
  className?: string;
  initialActiveIndex?: number;
  items: ReadonlyArray<NavigationItem>;
}

export function GooeyNav({
  className,
  initialActiveIndex = 0,
  items,
}: Readonly<GooeyNavProps>) {
  const activeIndex =
    items.length > 0 ? Math.min(initialActiveIndex, items.length - 1) : -1;

  return (
    <nav aria-label="Primary navigation" className={cn(styles.nav, className)}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={item.label} className={styles.item}>
            <a
              href={item.href}
              aria-current={index === activeIndex ? "page" : undefined}
              className={cn(styles.link, index === activeIndex && styles.linkActive)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
