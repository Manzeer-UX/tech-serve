import { type LandingHeroContent } from "@/lib/landingPageContent";

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 10 10"
      className="h-2.5 w-2.5 translate-x-px fill-current"
    >
      <path d="M2 1.5L8 5L2 8.5V1.5Z" />
    </svg>
  );
}

export interface HeroCopyProps {
  content: LandingHeroContent;
}

export function HeroCopy({ content }: Readonly<HeroCopyProps>) {
  return (
    <div className="max-w-full lg:max-w-[40rem] lg:pr-8">
      <span className="inline-flex items-center rounded-full border border-[var(--color-border-strong)] bg-white/78 px-3.5 py-1.5 text-[0.78rem] font-medium text-[var(--color-secondary-purple)] shadow-[var(--shadow-pill)]">
        {content.eyebrow}
      </span>

      <div className="mt-6">
        <p className="text-[1rem] font-medium leading-none tracking-[-0.03em] text-[var(--color-secondary-purple)] sm:text-[1.1rem]">
          {content.headlinePrefix}
        </p>

        <h1 className="mt-3 max-w-[12ch] text-balance text-[clamp(2.9rem,14vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.06em] text-[var(--color-brand-black)] sm:max-w-[14ch] sm:leading-[1.02]">
          {content.headlineAccent} {content.headlineSuffix}
        </h1>

        <p className="mt-5 max-w-[31rem] text-[1rem] leading-8 text-[var(--color-muted)]">
          {content.description}
        </p>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:self-start">
        <a
          href={content.primaryAction.href}
          className="brand-gradient inline-flex min-h-[3.1rem] w-full items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-medium !text-white shadow-[var(--shadow-button)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
        >
          {content.primaryAction.label}
        </a>
        <a
          href={content.secondaryAction.href}
          className="inline-flex min-h-[3.1rem] w-full items-center justify-center gap-3 whitespace-nowrap rounded-full border border-[var(--color-border-strong)] bg-white/84 px-6 text-sm font-medium text-[var(--color-primary-blue)] shadow-[var(--shadow-pill)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full brand-gradient text-white">
            <PlayIcon />
          </span>
          {content.secondaryAction.label}
        </a>
      </div>
    </div>
  );
}
