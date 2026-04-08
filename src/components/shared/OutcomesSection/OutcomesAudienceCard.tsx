import { RevealInView } from "@/components/shared/RevealInView";
import { cn } from "@/lib/cn";
import { type AudienceItem } from "@/lib/landingPageContent";

import { OutcomesAudienceIcon } from "./OutcomesAudienceIcon";

const audienceCardVariants = [
  {
    accent: "from-[rgba(80,0,254,0.22)] via-[rgba(150,100,250,0.12)] to-transparent",
    orb: "bg-[rgba(150,100,250,0.14)]",
    shell:
      "rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,238,255,0.9))]",
  },
  {
    accent: "from-[rgba(150,100,250,0.22)] via-[rgba(80,0,254,0.08)] to-transparent",
    orb: "bg-[rgba(80,0,254,0.12)]",
    shell:
      "rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(251,248,255,0.98),rgba(241,235,255,0.92))]",
  },
  {
    accent: "from-[rgba(80,0,254,0.2)] via-[rgba(150,100,250,0.1)] to-transparent",
    orb: "bg-[rgba(150,100,250,0.12)]",
    shell:
      "rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(243,237,255,0.9))]",
  },
] as const;

export interface OutcomesAudienceCardProps {
  delay?: number;
  index: number;
  item: AudienceItem;
}

export function OutcomesAudienceCard({
  delay = 0,
  index,
  item,
}: Readonly<OutcomesAudienceCardProps>) {
  const variant = audienceCardVariants[index % audienceCardVariants.length];

  return (
    <RevealInView delay={delay} className="h-full">
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden border border-[var(--color-border-strong)] px-5 py-5 shadow-[var(--shadow-hero)] transition-transform duration-500 hover:-translate-y-1 sm:px-7 sm:py-7",
          variant.shell,
        )}
      >
        <div className={cn("ambient-orb absolute right-[-2rem] top-[-1rem] h-36 w-36 rounded-full blur-3xl", variant.orb)} />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.22))]" />

        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/84 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
              {item.id}
            </span>
            <OutcomesAudienceIcon id={item.id} />
          </div>
          <p className="max-w-none text-left text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-secondary-purple)] sm:max-w-[11rem] sm:text-right">
            {item.title}
          </p>
        </div>

        <h3 className="relative mt-6 max-w-[12ch] text-[clamp(1.8rem,2.5vw,2.35rem)] font-medium leading-[1.03] tracking-[-0.055em] text-[var(--color-brand-black)] sm:max-w-[11ch]">
          {item.subtitle}
        </h3>

        <p className="relative mt-4 max-w-none text-[0.92rem] leading-7 text-[var(--color-muted)] sm:max-w-[15rem]">
          {item.role}
        </p>

        <div className="relative mt-10 flex-1">
          <p className="text-[0.98rem] leading-8 text-[var(--color-muted)]">
            {item.challenge}
          </p>
        </div>

        <div className="relative mt-8 border-t border-[var(--color-border-subtle)] pt-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-purple)]">
            How TechServ Helps
          </p>
          <p className="mt-3 text-[0.95rem] leading-8 text-[var(--color-brand-black)]">
            {item.help}
          </p>
        </div>

        <div className="relative mt-8 flex flex-wrap items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full brand-gradient shadow-[0_0_0_0.35rem_rgba(80,0,254,0.05)]" />
          <span className="hidden h-px flex-1 bg-[var(--color-border-subtle)] sm:block" />
          <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/88 px-4 py-2 text-[0.78rem] font-medium tracking-[0.01em] text-[var(--color-brand-black)] shadow-[var(--shadow-pill)]">
            {item.metric}
          </span>
        </div>
      </article>
    </RevealInView>
  );
}
