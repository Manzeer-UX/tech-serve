import { RevealInView } from "@/components/shared/RevealInView";
import { type TestimonialItem } from "@/lib/landingPageContent";

export interface TestimonialCardProps {
  delay?: number;
  item: TestimonialItem;
}

export function TestimonialCard({
  delay = 0,
  item,
}: Readonly<TestimonialCardProps>) {
  return (
    <RevealInView
      delay={delay}
      className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.88)] px-5 py-5 shadow-[var(--shadow-card)]"
    >
      <div className="absolute right-4 top-4 text-[4rem] leading-none text-[var(--color-visual-surface-strong)]">
        “
      </div>
      <p className="relative pr-6 text-[1rem] leading-8 text-[var(--color-brand-black)]">
        {item.quote}
      </p>
      <div className="mt-6">
        <p className="text-[1rem] font-semibold tracking-[-0.03em] text-[var(--color-brand-black)]">
          {item.name}
        </p>
        <p className="mt-1 text-[0.84rem] font-medium uppercase tracking-[0.14em] text-[var(--color-secondary-purple)]">
          {item.role}
        </p>
      </div>
    </RevealInView>
  );
}
