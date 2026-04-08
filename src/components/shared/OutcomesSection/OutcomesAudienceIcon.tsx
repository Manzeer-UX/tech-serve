import { cn } from "@/lib/cn";

export interface OutcomesAudienceIconProps {
  className?: string;
  id: string;
}

export function OutcomesAudienceIcon({
  className,
  id,
}: Readonly<OutcomesAudienceIconProps>) {
  if (id === "01") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 44 44"
        className={cn("h-11 w-11", className)}
        fill="none"
      >
        <circle cx="22" cy="22" r="21" fill="rgba(255,255,255,0.82)" />
        <circle
          cx="22"
          cy="22"
          r="21"
          stroke="rgba(80,0,254,0.18)"
        />
        <circle cx="22" cy="22" r="6" fill="url(#audience-icon-gradient-1)" />
        <circle cx="12" cy="14" r="3" fill="rgba(150,100,250,0.42)" />
        <circle cx="32" cy="14" r="3" fill="rgba(150,100,250,0.42)" />
        <circle cx="12" cy="30" r="3" fill="rgba(150,100,250,0.42)" />
        <circle cx="32" cy="30" r="3" fill="rgba(150,100,250,0.42)" />
        <path
          d="M22 22L12 14M22 22L32 14M22 22L12 30M22 22L32 30"
          stroke="rgba(80,0,254,0.55)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="audience-icon-gradient-1"
            x1="16"
            y1="16"
            x2="28"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary-blue)" />
            <stop offset="1" stopColor="var(--color-secondary-purple)" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (id === "02") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 44 44"
        className={cn("h-11 w-11", className)}
        fill="none"
      >
        <circle cx="22" cy="22" r="21" fill="rgba(255,255,255,0.82)" />
        <circle
          cx="22"
          cy="22"
          r="21"
          stroke="rgba(80,0,254,0.18)"
        />
        <path
          d="M10 29H26"
          stroke="rgba(80,0,254,0.58)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M21 24L26 29L21 34"
          stroke="url(#audience-icon-gradient-2)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="12"
          y="14"
          width="10"
          height="6"
          rx="3"
          fill="rgba(150,100,250,0.28)"
        />
        <rect
          x="24"
          y="14"
          width="8"
          height="6"
          rx="3"
          fill="rgba(80,0,254,0.2)"
        />
        <defs>
          <linearGradient
            id="audience-icon-gradient-2"
            x1="21"
            y1="24"
            x2="29"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary-blue)" />
            <stop offset="1" stopColor="var(--color-secondary-purple)" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 44 44"
      className={cn("h-11 w-11", className)}
      fill="none"
    >
      <circle cx="22" cy="22" r="21" fill="rgba(255,255,255,0.82)" />
      <circle
        cx="22"
        cy="22"
        r="21"
        stroke="rgba(80,0,254,0.18)"
      />
      <rect
        x="12"
        y="14"
        width="20"
        height="14"
        rx="4"
        fill="rgba(150,100,250,0.2)"
        stroke="rgba(80,0,254,0.3)"
      />
      <path
        d="M18 31H26"
        stroke="rgba(80,0,254,0.55)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 21L20 17L24 21L28 17"
        stroke="url(#audience-icon-gradient-3)"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="audience-icon-gradient-3"
          x1="16"
          y1="17"
          x2="28"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-primary-blue)" />
          <stop offset="1" stopColor="var(--color-secondary-purple)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
