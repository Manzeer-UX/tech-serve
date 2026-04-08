import { type FooterSocialLink } from "@/lib/landingPageContent";

export interface FooterSocialButtonProps {
  item: FooterSocialLink;
}

function renderFooterSocialIcon(id: FooterSocialLink["id"]) {
  if (id === "linkedin") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path d="M6.5 9.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 18V12.5C12 11.4 12.9 10.5 14 10.5C15.1 10.5 16 11.4 16 12.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (id === "youtube") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="7" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M11 10L15 12L11 14V10Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path d="M7 6L17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 6L7 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FooterSocialButton({
  item,
}: Readonly<FooterSocialButtonProps>) {
  return (
    <a
      aria-label={item.label}
      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white/80 text-[var(--color-brand-black)] shadow-[var(--shadow-pill)] transition-transform duration-200 hover:-translate-y-0.5 hover:text-[var(--color-primary-blue)]"
      href={item.href}
    >
      {renderFooterSocialIcon(item.id)}
    </a>
  );
}
