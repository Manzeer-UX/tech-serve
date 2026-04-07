import { CorePhilosophySection } from "@/components/shared/CorePhilosophySection";
import { LandingBackdrop } from "@/components/layout/LandingBackdrop";
import { FeatureShowcaseSection } from "@/components/shared/FeatureShowcaseSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroCopy } from "@/components/shared/HeroCopy";
import { HeroPanel } from "@/components/shared/HeroPanel";
import { RippleGrid } from "@/components/shared/RippleGrid";
import { WorkflowSection } from "@/components/shared/WorkflowSection";
import {
  capabilitiesSectionContent,
  capabilityItems,
  featureShowcaseItems,
  featureShowcaseSectionContent,
  heroContent,
  heroMetrics,
  navigationItems,
  philosophySectionContent,
  philosophySectionPanelContent,
  workflowSectionContent,
  workflowSteps,
} from "@/lib/landingPageContent";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <section className=" relative overflow-hidden">
        <LandingBackdrop />
        <RippleGrid
          className="banner-shell-ripple absolute inset-0"
          enableRainbow={false}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          fadeDistance={1.65}
          fadeFloor={0.34}
          vignetteStrength={2}
          glowIntensity={0.12}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
        <RippleGrid
          className="banner-shell-ripple-secondary absolute inset-0"
          enableRainbow={false}
          gridColor="#dac9ff"
          rippleIntensity={0.018}
          gridSize={8.8}
          gridThickness={12}
          fadeDistance={1.5}
          fadeFloor={0.46}
          vignetteStrength={1.7}
          glowIntensity={0.08}
          gridRotation={14}
          mouseInteraction={true}
          mouseInteractionRadius={1.6}
          opacity={0.24}
        />

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

      <main className="relative z-10 mx-auto w-full max-w-[1440px] flex-1 px-6 md:px-10 lg:px-8">
        <FeatureShowcaseSection
          content={featureShowcaseSectionContent}
          items={featureShowcaseItems}
        />
        <CorePhilosophySection
          content={philosophySectionContent}
          panel={philosophySectionPanelContent}
        />
        <WorkflowSection
          content={workflowSectionContent}
          nextSectionContent={capabilitiesSectionContent}
          nextSectionItems={capabilityItems}
          steps={workflowSteps}
        />
      </main>
    </div>
  );
}
