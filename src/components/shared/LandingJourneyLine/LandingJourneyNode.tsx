import { cn } from "@/lib/cn";
import { TrackPoint } from "@/components/shared/TrackPoint";

export interface LandingJourneyNodeProps {
  className?: string;
  isVisible: boolean;
  xPercent: number;
  yPercent: number;
}

export function LandingJourneyNode({
  className,
  isVisible,
  xPercent,
  yPercent,
}: Readonly<LandingJourneyNodeProps>) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
        className,
      )}
      style={{
        left: `${xPercent}%`,
        opacity: isVisible ? 1 : 0,
        top: `${yPercent}%`,
      }}
    >
      <TrackPoint />
    </span>
  );
}
