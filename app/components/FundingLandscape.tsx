"use client";

import { useState } from "react";

interface CardData {
  label: string;
  amount: string;
  summary: string;
  detailLabel: string;
  detail: string;
  color: string;
}

const cards: CardData[] = [
  {
    label: "REARM EUROPE / READINESS 2030",
    amount: "€800B",
    summary:
      "Total defence spending mobilisation target across EU member states",
    detailLabel: "REARM EUROPE DETAILS",
    detail:
      "The landmark plan combines national fiscal space unlocks, EU-level joint borrowing, and EIB/EIF financing to mobilise €800B over a decade. Member states can exempt defence spending from fiscal rules, encouraging rapid scale-up.",
    color: "#D97706",
  },
  {
    label: "SAFE LOANS FACILITY",
    amount: "€150B",
    summary:
      "Competitively priced loans for joint defence procurement, adopted May 2025",
    detailLabel: "SAFE LOANS DETAILS",
    detail:
      "Security Action For Europe (SAFE) provides EU-backed loans at near-sovereign rates for collaborative procurement of air & missile defence, ammunition, and strategic enablers. Minimum two member states per application.",
    color: "#2563EB",
  },
  {
    label: "EU-27 DEFENCE SPENDING",
    amount: "€392B",
    summary:
      "Projected 2025 aggregate, up from €343B in 2024 \u2014 rising to 2.1% of GDP",
    detailLabel: "SPENDING TREND",
    detail:
      "EU-27 defence spending has grown every year since 2014, accelerating sharply post-2022. The 2025 projection of €392B represents a 14% YoY increase, with 18 member states now meeting or exceeding the 2% GDP target.",
    color: "#059669",
  },
  {
    label: "DEFENCE INVESTMENT GROWTH",
    amount: "+42%",
    summary:
      "Year-on-year increase in equipment & R&D spending, reaching €106B in 2024",
    detailLabel: "INVESTMENT BREAKDOWN",
    detail:
      "Equipment procurement surged 42% in 2024, driven by urgent needs in air defence, ammunition, and armoured vehicles. R&D spending grew 28%, with a strong push toward autonomous systems and space capabilities.",
    color: "#D97706",
  },
  {
    label: "EUROPEAN DEFENCE FUND 2026",
    amount: "€1B",
    summary: "Annual budget for collaborative R&D across 31 call topics",
    detailLabel: "EDF DETAILS",
    detail:
      "The EDF co-finances collaborative R&D and capability development with 75\u2013100% EU funding rates. Priority areas: CBRN, cyber, space, maritime, and next-gen land systems. Requires consortia from at least 3 member states.",
    color: "#2563EB",
  },
  {
    label: "EDIP GRANTS",
    amount: "€1.5B",
    summary:
      "Grants for 2025\u20132027 to boost defence industrial readiness",
    detailLabel: "EDIP DETAILS",
    detail:
      "The European Defence Industrial Programme targets production ramp-up, supply chain resilience, and strategic stockpiling. Focus on SME participation and reducing dependency on non-EU suppliers for critical components.",
    color: "#059669",
  },
];

function FlipCard({ card }: { card: CardData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="w-full rounded-2xl border bg-paper p-6 text-left transition-colors hover:bg-parchment"
          style={{
            backfaceVisibility: "hidden",
            borderColor: `color-mix(in srgb, ${card.color} 25%, transparent)`,
          }}
        >
          <p
            className="text-[0.65rem] font-bold tracking-[0.12em]"
            style={{ color: card.color }}
          >
            {card.label}
          </p>
          <p
            className="mt-2 text-3xl font-light text-ink md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {card.amount}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            {card.summary}
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full rounded-2xl border bg-paper p-6 text-left"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderColor: `color-mix(in srgb, ${card.color} 25%, transparent)`,
          }}
        >
          <p
            className="text-[0.65rem] font-bold tracking-[0.12em]"
            style={{ color: card.color }}
          >
            {card.detailLabel}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            {card.detail}
          </p>
          <p className="mt-4 text-[0.6rem] font-semibold tracking-[0.1em] text-muted uppercase">
            Click to flip back &#x21BB;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FundingLandscape() {
  return (
    <section className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2
            className="text-3xl font-light leading-snug tracking-tight text-ink md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The EU Defence Funding Landscape
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate">
            Europe is mobilising unprecedented capital for defence. The
            opportunity window is now.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <FlipCard key={card.label} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
