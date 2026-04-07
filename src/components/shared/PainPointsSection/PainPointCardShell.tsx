import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface PainPointCardShellProps {
  children: ReactNode;
  className?: string;
  id: string;
  label: string;
}

export function PainPointCardShell({
  children,
  className,
  id,
  label,
}: Readonly<PainPointCardShellProps>) {
  return (
    <article
      className={cn(
        "flex h-full min-h-[21rem] flex-col rounded-[1.85rem] bg-[var(--color-surface-card)] p-5 shadow-[var(--shadow-card)] md:p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
          {id}
        </span>
        <span className="rounded-full bg-[var(--color-surface-soft)] px-3 py-1 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
          {label}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-5">{children}</div>
    </article>
  );
}
