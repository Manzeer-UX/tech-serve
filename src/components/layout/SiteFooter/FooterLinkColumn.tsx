import { RevealInView } from "@/components/shared/RevealInView";
import { type FooterColumn } from "@/lib/landingPageContent";

export interface FooterLinkColumnProps {
  column: FooterColumn;
  delay?: number;
}

export function FooterLinkColumn({
  column,
  delay = 0,
}: Readonly<FooterLinkColumnProps>) {
  return (
    <RevealInView delay={delay} distance={22}>
      <div>
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-purple)]">
          {column.title}
        </p>
        <ul className="mt-4 space-y-3">
          {column.links.map((link) => (
            <li key={link.label}>
              <a
                className="text-[0.98rem] leading-6 text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-brand-black)]"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </RevealInView>
  );
}
