import { cn } from "@/lib/cn";

export interface TrackPointProps {
  className?: string;
}

export function TrackPoint({ className }: Readonly<TrackPointProps>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 22 22"
      className={cn("h-[22px] w-[22px] overflow-visible", className)}
      fill="none"
    >
      <rect x="6" y="6" width="10" height="10" rx="5" fill="var(--color-primary-blue)" />
      <rect
        x="6"
        y="6"
        width="10"
        height="10"
        rx="5"
        fill="white"
        fillOpacity="0.01"
        shapeRendering="crispEdges"
        className="track-point-shadow"
      />
    </svg>
  );
}
