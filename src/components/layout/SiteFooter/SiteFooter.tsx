import { RevealInView } from "@/components/shared/RevealInView";
import { TrackPoint } from "@/components/shared/TrackPoint";
import {
  type ActionLink,
  type FooterColumn,
  type FooterSectionContent,
  type FooterSocialLink,
} from "@/lib/landingPageContent";

import { FooterLinkColumn } from "./FooterLinkColumn";
import { FooterSocialButton } from "./FooterSocialButton";

export interface SiteFooterProps {
  columns: ReadonlyArray<FooterColumn>;
  content: FooterSectionContent;
  cta: ActionLink;
  socialLinks: ReadonlyArray<FooterSocialLink>;
  utilityLinks: ReadonlyArray<ActionLink>;
}

export function SiteFooter({
  columns,
  content,
  cta,
  socialLinks,
  utilityLinks,
}: Readonly<SiteFooterProps>) {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(247,243,255,0.88),rgba(255,255,255,0.98))]">
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-border-strong)]" />
      <div className="absolute left-[-10%] top-[-14rem] h-[24rem] w-[24rem] rounded-full bg-[rgba(150,100,250,0.12)] blur-3xl" />
      <div className="absolute right-[-8%] bottom-[-16rem] h-[26rem] w-[26rem] rounded-full bg-[rgba(80,0,254,0.1)] blur-3xl" />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-8 pt-10 md:px-10 lg:px-8 lg:pt-12">
        <RevealInView className="flex flex-col gap-6 border-b border-[var(--color-border-subtle)] pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="inline-flex items-center gap-2.5">
              <TrackPoint className="h-4 w-4" />
              <span className="text-sm font-semibold tracking-[-0.02em] text-[var(--color-brand-black)]">
                {content.utilityTitle}
              </span>
            </div>
            {utilityLinks.map((link) => (
              <a
                key={link.label}
                className="text-sm text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-brand-black)]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            {socialLinks.map((item) => (
              <FooterSocialButton key={item.label} item={item} />
            ))}
            <a
              className="brand-gradient inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium !text-white shadow-[var(--shadow-button)] transition-transform duration-200 hover:-translate-y-0.5"
              href={cta.href}
            >
              {cta.label}
            </a>
            <label className="relative">
              <span className="sr-only">Region</span>
              <select className="min-h-11 rounded-full border border-[var(--color-border-strong)] bg-white/82 px-4 pr-10 text-sm text-[var(--color-brand-black)] shadow-[var(--shadow-pill)] outline-none transition-colors duration-200 hover:border-[var(--color-secondary-purple)]">
                <option>Global</option>
                <option>India</option>
                <option>Middle East</option>
              </select>
            </label>
          </div>
        </RevealInView>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {columns.map((column, index) => (
            <FooterLinkColumn
              key={column.title}
              column={column}
              delay={index * 0.05}
            />
          ))}
        </div>

        <RevealInView className="relative mt-14 border-t border-[var(--color-border-subtle)] pt-8" delay={0.12}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[clamp(4rem,13vw,10rem)] font-medium leading-[0.82] tracking-[-0.09em] text-[var(--color-brand-black)]">
                {content.wordmark}
                <span className="ml-2 inline-block align-top text-[var(--color-primary-blue)]">
                  +
                </span>
              </p>
              <p className="mt-3 max-w-[28rem] text-[1rem] leading-7 text-[var(--color-muted)]">
                {content.tagline}
              </p>
            </div>
            <p className="max-w-[18rem] text-sm leading-6 text-[var(--color-muted)] lg:text-right">
              {content.copyright}
            </p>
          </div>
        </RevealInView>
      </div>
    </footer>
  );
}
