export type ServiceSection = {
  title: string;
  body?: string;
  bullets: string[];
};

export type Service = {
  slug: string;
  title: string;
  shortLabel: string;
  flagship?: boolean;
  intro: string;
  homepageDescription: string;
  outcome: string;
  body: string;
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    slug: "grant-and-subsidy-advisory",
    title: "Grant & Subsidy Advisory",
    shortLabel: "Grants & Subsidies",
    flagship: true,
    intro:
      "Public funding identified, won, and delivered — across NL, NATO, EU, and space programmes.",
    homepageDescription:
      "NL national programmes (RVO, DTFA, NWO), NATO (DIANA, STO), EDA, EDF, Horizon Europe, EIC, and ESA-linked instruments. We write the proposals, build the consortium, and where it adds value, join the project ourselves as a partner.",
    outcome: "Funded programmes — not grant applications.",
    body:
      "We identify, pursue, and manage public funding opportunities across national and international defence and innovation programmes — hands-on from identification through to award and delivery. Programmes covered include Dutch national instruments (RVO, DTFA, NWO), NATO (DIANA, STO), EDA, EDF, EU Framework Programmes (Horizon Europe, EIC), and space instruments (ESA, EUSPA) where they intersect with defence and dual-use applications.",
    sections: [
      {
        title: "Bid and proposal services",
        bullets: [
          "Opportunity identification and funding landscape monitoring",
          "Lead applicant / Penvoerderschap management",
          "Consortium coordination and partner search",
          "Business case design and review",
          "Proposal writing and editorial support",
          "Red-team review",
          "Compliance and eligibility checks",
          "Submission management",
        ],
      },
      {
        title: "Funding monitoring",
        bullets: [
          "Continuous monitoring of relevant funding calls across target programmes",
          "Early-warning briefings for clients and consortium partners",
          "Funding calendar management",
        ],
      },
      {
        title: "Post-award management",
        bullets: [
          "Reporting and milestone tracking",
          "Financial compliance and audit preparation",
          "Consortium governance during execution",
        ],
      },
      {
        title: "Winsemius as project partner",
        body:
          "Beyond advisory, Winsemius is available as an active consortium partner in grant and subsidy projects. We contribute directly to project delivery — for example as work package lead, exploitation coordinator, dissemination partner, or in a strategic advisory role embedded within the project team. This model lets clients leverage Winsemius expertise not only to win funding, but to execute successfully against it.",
        bullets: [],
      },
    ],
  },
  {
    slug: "corporate-development",
    title: "Corporate Development",
    shortLabel: "Corporate Development",
    intro:
      "Strategy, business plans, go-to-market, and financing access — from early-stage positioning to operational scale.",
    homepageDescription:
      "We support defence and dual-use technology companies at every stage of their strategic and commercial development — from early positioning through scale-up and internationalisation.",
    outcome: "A coherent path from technology to commercial scale.",
    body:
      "We support defence and dual-use technology companies at every stage of their strategic and commercial development.",
    sections: [
      {
        title: "What this covers",
        bullets: [
          "Corporate, business development, and technology strategy",
          "Business plan and business case development",
          "Go-to-market strategy and execution support",
          "Investor pitch and product presentation support",
          "Legal structuring advice (in coordination with legal counsel)",
          "Executive and leadership coaching",
          "Access to financing sources (PE, VC, family offices, defence-focused funds)",
          "Scale-up and internationalisation support",
          "Market entry consulting",
          "Ecosystem mapping, partner identification, and strategic matchmaking",
        ],
      },
    ],
  },
  {
    slug: "financing-and-m-and-a",
    title: "Financing & M&A Advisory",
    shortLabel: "Financing & M&A",
    intro:
      "Capital raises, strategic partnerships, and M&A in the defence and dual-use sector.",
    homepageDescription:
      "Funding strategy, buy- and sell-side M&A, due diligence, transaction structuring, and post-merger integration — with the sector knowledge defence deals demand.",
    outcome: "Deals that close, with the right partners on the right terms.",
    body:
      "We guide companies through capital raises, strategic partnerships, and M&A transactions in the defence and dual-use sector.",
    sections: [
      {
        title: "What this covers",
        bullets: [
          "Funding strategy and investor readiness",
          "Buy-side and sell-side M&A support",
          "Due diligence coordination",
          "Transaction structuring and negotiation support",
          "Post-merger integration advisory",
        ],
      },
    ],
  },
  {
    slug: "ecosystem-and-community",
    title: "Ecosystem & Community Management",
    shortLabel: "Ecosystem & Community",
    intro:
      "Defence and dual-use ecosystems, consortia, and clusters — designed and governed to compound value over time.",
    homepageDescription:
      "Ecosystems, consortia, and clusters that produce contracts, not press releases. Cross-border bridging across NL, NATO, and EU.",
    outcome: "Ecosystems that produce contracts, not press releases.",
    body:
      "We build and manage strategic ecosystems that create compounding value for their members.",
    sections: [
      {
        title: "What this covers",
        bullets: [
          "Defence and dual-use ecosystem design and governance",
          "Consortium formation and ongoing management",
          "Stakeholder engagement and community orchestration",
          "Industry association and cluster participation strategy",
          "Cross-border ecosystem bridging (NL, NATO, EU)",
        ],
      },
    ],
  },
  {
    slug: "market-intelligence",
    title: "Defence Market Intelligence",
    shortLabel: "Market Intelligence",
    intro:
      "Structured market and competitive analysis tailored to the defence and dual-use sector.",
    homepageDescription:
      "Market landscaping, competitor benchmarking, threat horizon scanning, and procurement pipeline monitoring across NL MoD, NATO, EDA, and EU.",
    outcome: "The signal you need before the tender drops.",
    body:
      "Informed decisions require reliable, current intelligence. We provide structured market and competitive analysis tailored to defence and dual-use markets.",
    sections: [
      {
        title: "What this covers",
        bullets: [
          "Defence market landscaping and segmentation",
          "Competitor and capability benchmarking",
          "Threat horizon scanning and technology trend analysis",
          "Procurement pipeline monitoring (NL MoD, NATO, EDA, EU)",
          "Customer and stakeholder mapping",
          "Strategic opportunity assessment",
        ],
      },
    ],
  },
  {
    slug: "regulatory-and-compliance",
    title: "Regulatory & Export Compliance",
    shortLabel: "Regulatory & Export",
    intro:
      "Operating in defence demands navigating dense regulation. We guide clients through it — directly or with specialised legal partners.",
    homepageDescription:
      "Dual-use export controls (EU Dual-Use Regulation, EAR, ITAR), defence article licensing, NL/EU compliance for market entry, and offset/Industrial Participation advisory for foreign entrants.",
    outcome: "Capability delivered across borders with licences secured.",
    body:
      "Navigating the regulatory environment is a prerequisite for operating in defence markets. We guide clients through the applicable frameworks, directly or in close coordination with specialised legal partners.",
    sections: [
      {
        title: "What this covers",
        bullets: [
          "Dual-use export control assessment (EU Dual-Use Regulation, EAR, ITAR)",
          "Defence article classification and licensing strategy",
          "NL and EU regulatory compliance for defence market entry",
          "Offset and Industrial Participation (IP) advisory for foreign companies entering NL/NATO procurement programmes",
          "Compliance gap analysis and remediation planning",
        ],
      },
    ],
  },
  {
    slug: "communications-and-thought-leadership",
    title: "Communications & Thought Leadership",
    shortLabel: "Comms & Thought Leadership",
    intro:
      "Visibility and credibility in the defence ecosystem are strategic assets. We help clients build a coherent and credible market presence.",
    homepageDescription:
      "Defence market positioning, white papers, executive profiling, media relations, and event strategy — from DSEI to NATO Industry Days.",
    outcome: "Visibility and credibility where defence buyers actually pay attention.",
    body:
      "Visibility and credibility in the defence ecosystem are strategic assets. We support clients in building a coherent, credible market presence.",
    sections: [
      {
        title: "What this covers",
        bullets: [
          "Defence market positioning and messaging strategy",
          "Thought leadership development (white papers, articles, conference contributions)",
          "Stakeholder communication strategy",
          "Defence media and industry relations",
          "Executive profiling and presentation coaching",
          "Event strategy and representation support (DSEI, MSPO, NATO Industry Days, and others)",
        ],
      },
    ],
  },
  {
    slug: "post-award-execution",
    title: "Post-Award Execution",
    shortLabel: "Post-Award Execution",
    intro:
      "Winning a contract or grant is only the beginning. We support clients through delivery to protect outcomes and maximise the strategic value of the engagement.",
    homepageDescription:
      "Programme management, milestone tracking, consortium coordination, and stakeholder reporting — protecting the value of the contract once it is signed.",
    outcome: "Wins delivered, not just awarded.",
    body:
      "Winning a contract or grant is only the beginning. We support clients through the delivery phase to protect outcomes, manage stakeholder relationships, and maximise the strategic value of the engagement.",
    sections: [
      {
        title: "What this covers",
        bullets: [
          "Programme and project management support",
          "Milestone and deliverable tracking",
          "Consortium partner coordination during execution",
          "Stakeholder and customer reporting",
          "Lessons learned and follow-on opportunity development",
        ],
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
