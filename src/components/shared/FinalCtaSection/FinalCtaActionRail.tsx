import { type ActionLink } from "@/lib/landingPageContent";

export interface FinalCtaActionRailProps {
  actions: ReadonlyArray<ActionLink>;
}

export function FinalCtaActionRail({
  actions,
}: Readonly<FinalCtaActionRailProps>) {
  return (
    <div className="mx-auto w-full max-w-[48rem] rounded-[2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,238,255,0.82))] p-2.5 shadow-[var(--shadow-hero)] backdrop-blur-sm">
      <div className="grid gap-2 md:grid-cols-3">
        {actions.map((action, index) => (
          <a
            key={action.label}
            className="group relative overflow-hidden rounded-[1.35rem] px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5"
            href={action.href}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(243,236,255,0.72))]" />
            <div className="absolute left-4 top-4 h-10 w-10 rounded-full bg-[rgba(150,100,250,0.14)] blur-xl" />
            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[1rem] font-semibold tracking-[-0.03em] text-[var(--color-brand-black)]">
                  {action.label}
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white/88 text-[var(--color-primary-blue)] shadow-[var(--shadow-pill)] transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 18 18"
                >
                  <path d="M3.75 9H14.25" />
                  <path d="M9.75 4.5L14.25 9L9.75 13.5" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
