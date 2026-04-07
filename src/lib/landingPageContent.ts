export type AccentTone = "primary" | "secondary" | "gradient" | "foreground";

export interface ActionLink {
  href: string;
  label: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface LandingHeroContent {
  description: string;
  eyebrow: string;
  headlineAccent: string;
  headlinePrefix: string;
  headlineSuffix: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
}

export interface DashboardCardData {
  delta: string;
  label: string;
  tone: AccentTone;
  value: string;
}

export interface SignalRowData {
  label: string;
  progress: string;
  score: string;
}

export interface InsightChipData {
  label: string;
  tone: AccentTone;
  value: string;
}

export interface HeroMetricData {
  description: string;
  tone: AccentTone;
  value: string;
}

export interface FeatureShowcaseSectionContent {
  description: string;
  eyebrow: string;
  title: string;
}

export interface PhilosophySectionContent {
  description: string;
  eyebrow: string;
  highlights: ReadonlyArray<string>;
  titleAccent: string;
  titleLead: string;
}

export interface PhilosophySectionBlock {
  description: string;
  title: string;
}

export interface PhilosophySectionPanelContent {
  badgeLabel: string;
  badgeValue: string;
  chartDetail: string;
  chartLabel: string;
  chartValue: string;
  lineDetail: string;
  lineLabel: string;
  lineValue: string;
  scoreDetail: string;
  scoreLabel: string;
  scoreValue: string;
}

export type FeatureShowcaseVariant =
  | "analytics"
  | "reports"
  | "budgeting"
  | "syncing"
  | "score"
  | "market";

export interface FeatureShowcaseItem {
  description: string;
  id: string;
  title: string;
  variant: FeatureShowcaseVariant;
}

export interface PainPointItem {
  description: string;
  id: string;
  title: string;
}

export interface PainPointsSectionContent {
  bridge: string;
  description: string;
  eyebrow: string;
  lead: string;
  title: string;
}

export interface EcosystemSectionContent {
  closing: string;
  intro: string;
  supporting: string;
  systemNarrative: string;
  title: string;
}

export interface EcosystemStage {
  detail: string;
  label: string;
}

export interface WorkflowSectionContent {
  closing: string;
  intro: string;
  supporting: string;
  title: string;
}

export interface WorkflowStep {
  description: string;
  id: string;
  metric: string;
  title: string;
}

export interface ExposureSectionContent {
  title: string;
}

export interface ExposureItem {
  description: string;
  id: string;
}

export interface CapabilitiesSectionContent {
  description: string;
  eyebrow: string;
  title: string;
}

export interface CapabilityItem {
  description: string;
  id: string;
  metric: string;
  metricLabel: string;
  title: string;
}

export interface AudienceSectionContent {
  description: string;
  eyebrow: string;
  title: string;
}

export interface AudienceItem {
  challenge: string;
  help: string;
  id: string;
  metric: string;
  role: string;
  subtitle: string;
  title: string;
}

export interface OutcomesSectionContent {
  description: string;
  eyebrow: string;
  title: string;
}

export interface OutcomeMetric {
  label: string;
  value: string;
}

export interface TestimonialItem {
  name: string;
  quote: string;
  role: string;
}

export interface FinalCtaSectionContent {
  description: string;
  eyebrow: string;
  title: string;
}

export const navigationItems: ReadonlyArray<NavigationItem> = [
  { href: "#", label: "About" },
  { href: "#", label: "Platform" },
  { href: "#", label: "Services" },
  { href: "#", label: "Solutions" },
  { href: "#", label: "AI Agents" },
  { href: "#", label: "Resources" },
];

export const heroContent: LandingHeroContent = {
  eyebrow: "Built for modern IT sales growth",
  headlinePrefix: "One ecosystem. One workflow.",
  headlineAccent: "One operating system",
  headlineSuffix: "for IT sales growth.",
  description:
    "The IT Sales Ecosystem was never built to move at the speed of modern demand. TechServ changes that. One connected platform helps you identify buyers earlier, win faster, unlock working capital, and scale with intelligence built into every step.",
  primaryAction: { href: "#", label: "Book a Demo" },
  secondaryAction: { href: "#", label: "See How It Works" },
};

export const dashboardCards: ReadonlyArray<DashboardCardData> = [
  { delta: "AI-ranked", label: "Qualified Buyers", tone: "primary", value: "1,284" },
  { delta: "+24%", label: "Active Pipeline", tone: "gradient", value: "$4.2M" },
  { delta: "48h cycle", label: "Invoice Velocity", tone: "secondary", value: "Fast" },
];

export const signalRows: ReadonlyArray<SignalRowData> = [
  { label: "Intent signals", progress: "85%", score: "85%" },
  { label: "RFP readiness", progress: "68%", score: "68%" },
  { label: "Cash acceleration", progress: "54%", score: "54%" },
];

export const insightChips: ReadonlyArray<InsightChipData> = [
  { label: "Partner network", tone: "primary", value: "500+" },
  { label: "Average RFP win rate", tone: "gradient", value: "51%" },
  { label: "Invoice to cash", tone: "secondary", value: "48 hours" },
];

export const heroMetrics: ReadonlyArray<HeroMetricData> = [
  { description: "Channel Partners", tone: "primary", value: "500+" },
  { description: "Average RFP Win Rate", tone: "gradient", value: "51%" },
  { description: "Invoice to Cash", tone: "secondary", value: "48 hours" },
];

export const featureShowcaseSectionContent: FeatureShowcaseSectionContent = {
  eyebrow: "Features",
  title: "The IT Sales Ecosystem Has Demand. But Demand Alone Does Not Create Growth.",
  description:
    "Across the IT ecosystem, opportunity is everywhere. Buyers are evaluating. Projects are moving. Budgets are being assigned. And yet, growth keeps getting lost between intent and execution.",
};

export const featureShowcaseItems: ReadonlyArray<FeatureShowcaseItem> = [
  {
    id: "01",
    title: "No visibility into real buyers",
    description:
      "Most partners are not short on ambition. They are short on signal. Without clear intelligence on who is in-market, who is evaluating, and where whitespace exists, sales teams end up reacting too late.",
    variant: "analytics",
  },
  {
    id: "02",
    title: "Proposal cycles are too slow",
    description:
      "Manual RFP responses, fragmented pricing inputs, and compliance-heavy workflows stretch proposals into days when deals demand speed.",
    variant: "reports",
  },
  {
    id: "03",
    title: "Cash gets trapped",
    description:
      "Partners often fund projects before customers pay. When collections take 60 to 120 days, working capital becomes a growth bottleneck.",
    variant: "budgeting",
  },
  {
    id: "04",
    title: "Expertise is hard to access on demand",
    description:
      "Customers expect deep technical confidence across cloud, security, AI, infrastructure, and delivery. Most partners cannot keep that bench available at all times.",
    variant: "syncing",
  },
  {
    id: "05",
    title: "The ecosystem runs in silos",
    description:
      "OEM data, distributor data, partner workflows, proposals, financing, and attribution all live in separate systems. That fragmentation slows decisions and hides opportunity.",
    variant: "score",
  },
  {
    id: "06",
    title: "The middle market is underserved",
    description:
      "The middle 80% of channel partners often have customer relationships but not the tooling, capital, or enablement required to convert access into scalable revenue.",
    variant: "market",
  },
];

export const philosophySectionContent: PhilosophySectionContent = {
  eyebrow: "Connected operating philosophy",
  titleLead: "One Platform.",
  titleAccent: "Entire Ecosystem.",
  description:
    "TechServ connects the full journey from market signal to closed revenue so every layer of the IT sales ecosystem can move with more clarity, more speed, and more confidence.",
  highlights: [
    "Buyer intent informs outreach. AI accelerates bids. Specialists strengthen delivery.",
    "Financing unlocks momentum, and ecosystem data makes every next decision sharper.",
  ],
};

export const philosophySectionBlocks: ReadonlyArray<PhilosophySectionBlock> = [
  {
    title: "From market signal to revenue",
    description:
      "TechServ connects the full journey from market signal to closed revenue so the ecosystem moves with more clarity, more speed, and more confidence.",
  },
  {
    title: "Not another point solution",
    description:
      "It works as one connected operating layer for IT sales growth instead of another disconnected tool in the stack.",
  },
  {
    title: "Every motion informs the next",
    description:
      "Buyer intent informs outreach, outreach shapes requirements, AI accelerates bids, and specialists strengthen delivery.",
  },
  {
    title: "Growth becomes systematic",
    description:
      "Financing unlocks momentum and ecosystem data feeds back into better decisions, so every outcome improves the next one.",
  },
];

export const philosophySectionPanelContent: PhilosophySectionPanelContent = {
  badgeValue: "500+",
  badgeLabel: "Channel partners",
  chartValue: "51%",
  chartLabel: "Average RFP win rate",
  chartDetail: "BidBrain acceleration",
  lineValue: "48h",
  lineLabel: "Invoice to cash",
  lineDetail: "Liquidity in motion",
  scoreValue: "3.8x",
  scoreLabel: "Average MDF ROI",
  scoreDetail: "OEM visibility lift",
};

export const painPointsSectionContent: PainPointsSectionContent = {
  eyebrow: "Where growth stalls",
  title: "Demand exists. Growth still breaks between signal and execution.",
  lead:
    "Buyers are active, budgets are moving, and projects are already in motion across the channel.",
  bridge: "What slows growth is the gap between market signal and operational follow-through.",
  description:
    "TechServ is built for the workflow gaps that delay channel momentum before revenue shows up.",
};

export const painPointItems: ReadonlyArray<PainPointItem> = [
  {
    id: "01",
    title: "Real buyers stay hard to see",
    description:
      "Teams still lack a clear view of who is in-market, what is moving, and where whitespace exists. That delay turns strong intent into late outreach.",
  },
  {
    id: "02",
    title: "Proposal speed still stalls",
    description:
      "Manual RFP work, pricing back-and-forth, and compliance reviews stretch proposal cycles when deals need speed.",
  },
  {
    id: "03",
    title: "Cash gets trapped in the gap",
    description:
      "Partners often fund delivery before customers pay, which ties up working capital and slows the next opportunity.",
  },
  {
    id: "04",
    title: "On-demand expertise stays thin",
    description:
      "Customers expect specialist depth across cloud, security, AI, and delivery, but most partners cannot keep that bench ready on demand.",
  },
  {
    id: "05",
    title: "The ecosystem runs in silos",
    description:
      "OEM data, distributor inputs, proposals, financing, and partner workflows still live in separate systems.",
  },
  {
    id: "06",
    title: "Mid-market partners stay underserved",
    description:
      "The middle market often has customer access, but not the tooling, capital, or support to scale revenue consistently.",
  },
];

export const ecosystemSectionContent: EcosystemSectionContent = {
  title: "One Platform. Entire Ecosystem.",
  intro:
    "TechServ connects the full journey from market signal to closed revenue, so every participant in the IT sales ecosystem can move with more clarity, more speed, and more confidence.",
  supporting:
    "This is not another point solution. It is a connected operating system for IT sales growth.",
  systemNarrative:
    "A system where buyer intent informs outreach. Outreach shapes requirements. AI accelerates bids. Specialists strengthen delivery. Financing unlocks momentum. And ecosystem data feeds back into better decisions across the network.",
  closing:
    "When every layer works together, growth stops depending on guesswork and starts becoming systematic.",
};

export const ecosystemStages: ReadonlyArray<EcosystemStage> = [
  {
    label: "Market signal",
    detail: "Intent and whitespace become visible earlier.",
  },
  {
    label: "Outreach",
    detail: "The right conversations start with better timing.",
  },
  {
    label: "Requirements",
    detail: "Signals shape stronger buying requirements.",
  },
  {
    label: "AI bids",
    detail: "Proposal speed moves from days toward hours.",
  },
  {
    label: "Specialists",
    detail: "Expert guidance strengthens confidence in delivery.",
  },
  {
    label: "Financing",
    detail: "Cash flow unlocks momentum instead of slowing it.",
  },
];

export const workflowSectionContent: WorkflowSectionContent = {
  title: "From Signal to Cash. One Connected Workflow.",
  intro: "Each capability works on its own. Together, they create a growth engine.",
  supporting:
    "TechServ is designed so that every deal, proposal, deployment, and financing event makes the system smarter, faster, and more valuable over time.",
  closing: "Every outcome improves the next one. That is the TechServ flywheel.",
};

export const workflowSteps: ReadonlyArray<WorkflowStep> = [
  {
    id: "01",
    title: "Signal",
    description:
      "AIDA detects buyer intent, whitespace, and priority accounts before the RFP ever lands in your inbox.",
    metric: "AIDA demand intelligence",
  },
  {
    id: "02",
    title: "Engage",
    description:
      "AI-guided outreach helps teams move earlier, shape requirements sooner, and enter deals before competitors are fully in motion.",
    metric: "Earlier entry into active deals",
  },
  {
    id: "03",
    title: "Bid",
    description:
      "BidBrain generates proposals, pricing, BOMs, and compliance workflows in hours instead of days.",
    metric: "Hours instead of days",
  },
  {
    id: "04",
    title: "Deliver",
    description:
      "The Resource Platform connects you with AI-matched specialists across pre-sales, delivery, DevOps, and AI/ML.",
    metric: "AI-matched specialist depth",
  },
  {
    id: "05",
    title: "Fund",
    description:
      "The Liquidity Suite converts approved invoices and purchase orders into working capital in as little as 48 hours.",
    metric: "48-hour working capital",
  },
  {
    id: "06",
    title: "Scale",
    description:
      "The OEM Partner Hub measures partner activation, MDF efficiency, ROI, and pipeline influence in real time.",
    metric: "Real-time ecosystem visibility",
  },
];

export const exposureSectionContent: ExposureSectionContent = {
  title: "Built for Every Layer of the IT Sales Ecosystem.",
};

export const exposureItems: ReadonlyArray<ExposureItem> = [
  {
    id: "01",
    description: "Hands-off. No ongoing costs or maintenance.",
  },
  {
    id: "02",
    description: "Data-driven risk/reward assessments.",
  },
  {
    id: "03",
    description: "Secure and stable returns are prioritized over risky degen yields.",
  },
  {
    id: "04",
    description: "Low correlation to BTC, ETH, DeFi blue chips and S&P 500.",
  },
  {
    id: "05",
    description: "Secure and audited smart contracts.",
  },
];

export const capabilitiesSectionContent: CapabilitiesSectionContent = {
  eyebrow: "Connected capabilities",
  title: "Six Capabilities. One Connected System.",
  description:
    "AI agents, embedded finance, ecosystem intelligence, and growth strategy, everything purpose-built for the IT sales ecosystem.",
};

export const capabilityItems: ReadonlyArray<CapabilityItem> = [
  {
    id: "01",
    title: "AIDA â€” Demand Intelligence",
    description:
      "Find the opportunities others do not see yet. AIDA brings together ICP intelligence, buyer intent signals, whitespace mapping, and competitive visibility so teams can engage earlier and sell smarter.",
    metric: "25%+",
    metricLabel: "sales uplift",
  },
  {
    id: "02",
    title: "AI Agents â€” BidBrain, ContractAI, ConsultBot",
    description:
      "Specialized AI agents automate critical commercial workflows across the channel, from proposal generation and contract analysis to advisory support and performance intelligence.",
    metric: "8h",
    metricLabel: "per RFP instead of 3 days",
  },
  {
    id: "03",
    title: "Resource Platform",
    description:
      "Tap into on-demand technical depth when the deal demands it. Access certified specialists across pre-sales, delivery, DevOps, and AI/ML, matched to your requirements in as little as 24 hours.",
    metric: "200+",
    metricLabel: "specialists",
  },
  {
    id: "04",
    title: "Liquidity Suite",
    description:
      "Do not let cash flow decide which deals you can pursue. Convert invoices, bills, and purchase orders into liquidity that keeps execution moving.",
    metric: "48h",
    metricLabel: "invoice to cash",
  },
  {
    id: "05",
    title: "OEM Partner Hub",
    description:
      "Give OEMs the visibility they have always wanted and the attribution they have always lacked. Track catalogue usage, MDF performance, partner activity, and pipeline impact in one place.",
    metric: "3.8x",
    metricLabel: "MDF ROI",
  },
  {
    id: "06",
    title: "Growth Advisory",
    description:
      "When growth needs more than software, TechServ adds strategy. Get board-level GTM thinking, partner development support, and revenue advisory designed around outcomes, not activity.",
    metric: "Advisory",
    metricLabel: "revenue-focused execution",
  },
];

export const audienceSectionContent: AudienceSectionContent = {
  eyebrow: "Built for every layer",
  title: "Six Capabilities. One Connected System.",
  description:
    "AI agents, embedded finance, ecosystem intelligence, and growth strategy, everything purpose-built for the IT sales ecosystem.",
};

export const audienceItems: ReadonlyArray<AudienceItem> = [
  {
    id: "01",
    title: "IT OEM Vendor",
    subtitle: "Creates the Technology",
    role: "Visibility for partner ecosystems",
    challenge:
      "You invest in partner ecosystems, but visibility stays fragmented. MDF gets spent without clear attribution. Real-time insight into who is selling what, and how effectively, remains limited.",
    help:
      "The OEM Partner Hub embeds your catalogue into live proposal workflows, gives you visibility into activation and pipeline performance, and connects MDF to attributable revenue.",
    metric: "3.8x average MDF ROI",
  },
  {
    id: "02",
    title: "IT Distributor",
    subtitle: "Moves the Technology",
    role: "Momentum for partner movement",
    challenge:
      "Inventory is available, but partners lack either the tools, the capital, or the prioritization needed to move it efficiently. Performance data is disconnected and pipeline quality is hard to read.",
    help:
      "TechServ helps distributors unlock partner momentum with liquidity, demand intelligence, and visibility into where enablement can drive the highest movement.",
    metric: "25%+ partner productivity uplift",
  },
  {
    id: "03",
    title: "SI / IT Reseller",
    subtitle: "Delivers the Technology",
    role: "Faster bids and stronger delivery",
    challenge:
      "You are competing without enough signal, bidding too slowly, waiting too long to get paid, and stretching internal teams beyond capacity.",
    help:
      "AIDA surfaces buyers early. BidBrain accelerates proposals. The Liquidity Suite unlocks working capital. The Resource Platform brings in specialist expertise exactly when you need it.",
    metric: "51% average RFP win rate via BidBrain",
  },
];

export const outcomesSectionContent: OutcomesSectionContent = {
  eyebrow: "Proof in motion",
  title: "Real Outcomes. Real Partners.",
  description: "Measured across 500+ channel partners in 7+ countries.",
};

export const outcomeMetrics: ReadonlyArray<OutcomeMetric> = [
  { value: "$2.4B+", label: "Partner Revenue Influenced" },
  { value: "51%", label: "Average RFP Win Rate" },
  { value: "48 hours", label: "Invoice to Cash" },
  { value: "3.8x", label: "Average MDF ROI for OEMs" },
];

export const testimonialItems: ReadonlyArray<TestimonialItem> = [
  {
    quote:
      "BidBrain changed how we handle enterprise RFPs. What used to take us three days now takes half a day, and we are winning more of the right opportunities.",
    name: "Rajesh Sharma",
    role: "Technology Solutions Partner",
  },
  {
    quote:
      "We were close to passing on a major deployment because cash flow would not support it. TechServâ€™s financing capability changed that. One deal delivered more value than we expected from the platform in years.",
    name: "Anjali Kumar",
    role: "Regional Systems Integrator",
  },
  {
    quote:
      "AIDA surfaced accounts we had never actively targeted, but they were already evaluating exactly what we sold. That changed the quality of our pipeline immediately.",
    name: "Marcus Oâ€™Reilly",
    role: "VAR Partner",
  },
];

export const finalCtaSectionContent: FinalCtaSectionContent = {
  eyebrow: "Your next step",
  title: "The Platform Was Built for You.",
  description:
    "Whether you want to see the product, explore a strategic partnership, or connect with the right regional expert, TechServ gives you a clear next step.",
};

export const finalCtaActions: ReadonlyArray<ActionLink> = [
  { href: "#", label: "Book a Demo" },
  { href: "#", label: "Connect with Us" },
  { href: "#", label: "Find a Partner" },
];
