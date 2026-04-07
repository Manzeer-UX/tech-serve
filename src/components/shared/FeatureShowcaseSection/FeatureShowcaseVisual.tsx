import { type FeatureShowcaseVariant } from "@/lib/landingPageContent";

import { FeatureShowcaseVisualAnalytics } from "./FeatureShowcaseVisualAnalytics";
import { FeatureShowcaseVisualBudgeting } from "./FeatureShowcaseVisualBudgeting";
import { FeatureShowcaseVisualMarket } from "./FeatureShowcaseVisualMarket";
import { FeatureShowcaseVisualReports } from "./FeatureShowcaseVisualReports";
import { FeatureShowcaseVisualScore } from "./FeatureShowcaseVisualScore";
import { FeatureShowcaseVisualSyncing } from "./FeatureShowcaseVisualSyncing";

export interface FeatureShowcaseVisualProps {
  variant: FeatureShowcaseVariant;
}

export function FeatureShowcaseVisual({
  variant,
}: Readonly<FeatureShowcaseVisualProps>) {
  switch (variant) {
    case "analytics":
      return <FeatureShowcaseVisualAnalytics />;
    case "reports":
      return <FeatureShowcaseVisualReports />;
    case "budgeting":
      return <FeatureShowcaseVisualBudgeting />;
    case "syncing":
      return <FeatureShowcaseVisualSyncing />;
    case "score":
      return <FeatureShowcaseVisualScore />;
    case "market":
      return <FeatureShowcaseVisualMarket />;
    default:
      return null;
  }
}
