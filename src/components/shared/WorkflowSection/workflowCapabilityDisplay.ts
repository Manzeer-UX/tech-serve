import { type CapabilityItem } from "@/lib/landingPageContent";

export interface WorkflowCapabilityDisplay {
  description: string;
  metric: string;
  title: string;
}

const capabilityDisplayById: Record<string, WorkflowCapabilityDisplay> = {
  "01": {
    title: "AIDA - Demand Intelligence",
    description:
      "Find the opportunities others do not see yet. AIDA brings together ICP intelligence, buyer intent signals, whitespace mapping, and competitive visibility so teams can engage earlier and sell smarter.",
    metric: "25%+ sales uplift",
  },
  "02": {
    title: "AI Agents - BidBrain, ContractAI, ConsultBot",
    description:
      "Specialized AI agents automate some of the most critical commercial workflows across the channel - from proposal generation and contract analysis to advisory support and performance intelligence.",
    metric: "8 hours per RFP instead of 3 days",
  },
  "03": {
    title: "Resource Platform",
    description:
      "Tap into on-demand technical depth when the deal demands it. Access certified specialists across pre-sales, delivery, DevOps, and AI/ML, matched to your requirements in as little as 24 hours.",
    metric: "200+ specialists",
  },
  "04": {
    title: "Liquidity Suite",
    description:
      "Do not let cash flow decide which deals you can pursue. Convert invoices, bills, and purchase orders into liquidity that keeps execution moving.",
    metric: "Invoice to cash in 48 hours",
  },
  "05": {
    title: "OEM Partner Hub",
    description:
      "Give OEMs the visibility they have always wanted and the attribution they have always lacked. Track catalogue usage, MDF performance, partner activity, and pipeline impact in one place.",
    metric: "3.8x MDF ROI",
  },
  "06": {
    title: "Growth Advisory",
    description:
      "When growth needs more than software, TechServ adds strategy. Get board-level GTM thinking, partner development support, and revenue advisory designed around outcomes, not activity.",
    metric: "Revenue-focused execution",
  },
};

export function getWorkflowCapabilityDisplay(item: CapabilityItem) {
  return capabilityDisplayById[item.id] ?? {
    title: item.title,
    description: item.description,
    metric: item.metricLabel ? `${item.metric} ${item.metricLabel}` : item.metric,
  };
}
