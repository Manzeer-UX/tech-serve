import Image from "next/image";

import { GooeyNav } from "@/components/layout/GooeyNav";
import { type ActionLink, type NavigationItem } from "@/lib/landingPageContent";

export interface SiteHeaderProps {
  navigationItems: ReadonlyArray<NavigationItem>;
  primaryAction: ActionLink;
}

export function SiteHeader({
  navigationItems,
  primaryAction,
}: Readonly<SiteHeaderProps>) {
  return (
    <header className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pt-4 sm:px-6 md:px-10 lg:px-8">
      <div className="flex items-center justify-between gap-3 py-2.5 sm:gap-6 sm:px-2 md:px-6">
        <a href="#" className="inline-flex items-center">
          <Image
            src="/techserv-logo.svg"
            alt="TECHSERV.ai"
            width={257}
            height={27}
            sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 228px"
            className="h-auto w-[140px] sm:w-[180px] md:w-[228px]"
            priority
          />
        </a>

        <GooeyNav items={navigationItems} className="hidden xl:block" />

        <div className="flex items-center">
          <a
            href={primaryAction.href}
            className="brand-gradient inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-[0.78rem] font-medium !text-white shadow-[var(--shadow-button)] transition-transform duration-200 hover:-translate-y-0.5 sm:min-h-11 sm:px-5 sm:text-sm"
          >
            {primaryAction.label}
          </a>
        </div>
      </div>
    </header>
  );
}
