import { RevealInView } from "@/components/shared/RevealInView";
import { cn } from "@/lib/cn";
import { type AudienceItem } from "@/lib/landingPageContent";

const visualNodePositions = [
  "left-[4%] top-[10%] philosophy-card-float",
  "right-[6%] top-[30%] philosophy-card-float-delayed",
  "left-[16%] bottom-[6%] philosophy-card-float",
] as const;

export interface OutcomesFlowVisualProps {
  items: ReadonlyArray<AudienceItem>;
}

export function OutcomesFlowVisual({
  items,
}: Readonly<OutcomesFlowVisualProps>) {
  return (
    <RevealInView className="relative mx-auto w-full max-w-[36rem]">
      <div className="relative h-[25rem] overflow-hidden rounded-[3rem] bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.9),transparent_20%),radial-gradient(circle_at_72%_78%,rgba(150,100,250,0.18),transparent_24%),linear-gradient(180deg,rgba(247,243,255,0.88),rgba(241,234,255,0.72))] p-6 shadow-[var(--shadow-hero)] sm:h-[27rem]">
        <div className="absolute inset-[10%] rounded-[42%_58%_60%_40%/40%_42%_58%_60%] border border-[var(--color-border-strong)] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_62%)]" />
        <div className="absolute left-[18%] top-[18%] h-40 w-40 rounded-full bg-[rgba(150,100,250,0.18)] blur-3xl" />
        <div className="absolute bottom-[8%] right-[12%] h-44 w-44 rounded-full bg-[rgba(80,0,254,0.12)] blur-3xl" />

        <svg
          aria-hidden="true"
          viewBox="0 0 500 420"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M86 105C142 92 206 118 242 168C270 206 312 224 382 216"
            className="fill-none stroke-[rgba(80,0,254,0.18)] stroke-[3]"
          />
          <path
            d="M128 308C198 276 248 246 292 198C328 158 374 138 432 146"
            className="fill-none stroke-[rgba(150,100,250,0.24)] stroke-[3]"
          />
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-34 w-34 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[42%_58%_56%_44%/46%_40%_60%_54%] border border-[var(--color-border-strong)] bg-white/84 px-5 text-center shadow-[var(--shadow-card)] backdrop-blur-sm">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            Value flow
          </p>
          <p className="mt-2 text-[1.08rem] font-semibold leading-6 tracking-[-0.04em] text-[var(--color-brand-black)]">
            Create. Move. Deliver.
          </p>
        </div>

        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute max-w-[10rem] rounded-[40%_60%_58%_42%/42%_44%_56%_58%] border border-[var(--color-border-strong)] bg-white/84 px-4 py-4 shadow-[var(--shadow-card)] backdrop-blur-sm",
              visualNodePositions[index],
            )}
          >
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
              {item.id}
            </p>
            <p className="mt-2 text-[0.96rem] font-semibold leading-6 tracking-[-0.04em] text-[var(--color-brand-black)]">
              {item.title}
            </p>
            <p className="mt-1 text-[0.78rem] leading-6 text-[var(--color-muted)]">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </RevealInView>
  );
}
