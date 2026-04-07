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
    <header className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-4 md:px-10 lg:px-8">
      <div className="flex items-center justify-between gap-6 px-4 py-2.5 md:px-6">
        <a href="#" className="inline-flex items-center">
          <Image
            src="/techserv-logo.svg"
            alt="TECHSERV.ai"
            width={257}
            height={27}
            sizes="(max-width: 768px) 160px, 228px"
            className="h-auto w-[160px] md:w-[228px]"
            priority
          />
        </a>

        <GooeyNav items={navigationItems} className="hidden xl:block" />

        <div className="flex items-center">
          <a
            href={primaryAction.href}
            className="brand-gradient inline-flex min-h-10.5 items-center justify-center rounded-full px-5 text-sm font-medium !text-white shadow-[var(--shadow-button)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {primaryAction.label}
          </a>
        </div>
      </div>
    </header>
  );
}
