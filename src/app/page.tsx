import { CorePhilosophySection } from "@/components/shared/CorePhilosophySection";
import { LandingBackdrop } from "@/components/layout/LandingBackdrop";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FeatureShowcaseSection } from "@/components/shared/FeatureShowcaseSection";
import { FinalCtaSection } from "@/components/shared/FinalCtaSection";
import { HeroRippleEffects } from "@/components/shared/HeroRippleEffects";
import {
  OutcomesSection,
  PartnerResultsSection,
} from "@/components/shared/OutcomesSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroCopy } from "@/components/shared/HeroCopy";
import { HeroPanel } from "@/components/shared/HeroPanel";
import { WorkflowSection } from "@/components/shared/WorkflowSection";
import {
  audienceItems,
  audienceSectionContent,
  capabilitiesSectionContent,
  capabilityItems,
  featureShowcaseItems,
  featureShowcaseSectionContent,
  footerColumns,
  footerSectionContent,
  footerSocialLinks,
  footerUtilityLinks,
  finalCtaActions,
  finalCtaSectionContent,
  heroContent,
  heroMetrics,
  navigationItems,
  outcomeMetrics,
  outcomesSectionContent,
  philosophySectionContent,
  philosophySectionPanelContent,
  testimonialItems,
  workflowSectionContent,
  workflowSteps,
} from "@/lib/landingPageContent";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip hero-bg">
      <section className=" relative overflow-hidden">
        <LandingBackdrop />
        <HeroRippleEffects />

        <div className="relative z-10">
          <SiteHeader
            navigationItems={navigationItems}
            primaryAction={heroContent.primaryAction}
          />

          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-8">
            <section className="hero-banner-section relative flex min-h-[calc(100svh-5.75rem)] items-center justify-center py-10 md:py-12 lg:min-h-[calc(100svh-6.25rem)] lg:py-16">
              <div className="hero-banner-grid relative z-10 mx-auto grid w-full items-center gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1fr)] xl:gap-16">
                <div className="hero-banner-copy">
                  <HeroCopy content={heroContent} />
                </div>
                <div className="hero-banner-panel">
                  <HeroPanel items={heroMetrics} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <main className="relative z-10  bg-white flex-1 ">
        <div className="mx-auto w-full max-w-[1440px]">
          <FeatureShowcaseSection
            content={featureShowcaseSectionContent}
            items={featureShowcaseItems}
          />
        </div>
        <div className="bg-white">
          <div className="mx-auto w-full max-w-[1440px]">
            <CorePhilosophySection
              content={philosophySectionContent}
              panel={philosophySectionPanelContent}
            />
          </div>
        </div>
       <div className="bg-all">
       <div className="mx-auto w-full max-w-[1440px]">
          <WorkflowSection
            content={workflowSectionContent}
            nextSectionContent={capabilitiesSectionContent}
            nextSectionItems={capabilityItems}
            steps={workflowSteps}
          />
        </div>
       </div>
        <div className="mx-auto w-full max-w-[1440px]">
          <OutcomesSection
            content={audienceSectionContent}
            items={audienceItems}
          />
        </div>
        <div className="mx-auto w-full max-w-[1440px]">
          <PartnerResultsSection
            content={outcomesSectionContent}
            metrics={outcomeMetrics}
            testimonials={testimonialItems}
          />
        </div>
        <div className="mx-auto w-full max-w-[1440px]">
          <FinalCtaSection
            actions={finalCtaActions}
            content={finalCtaSectionContent}
          />
        </div>
      </main >
      <SiteFooter
        columns={footerColumns}
        content={footerSectionContent}
        cta={heroContent.primaryAction}
        socialLinks={footerSocialLinks}
        utilityLinks={footerUtilityLinks}
      />
    </div >
  );
}
