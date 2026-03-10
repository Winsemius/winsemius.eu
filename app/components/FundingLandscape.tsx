"use client";

import { useState } from "react";

const barData = [
  { year: "2019", value: 190, projected: false },
  { year: "2020", value: 195, projected: false },
  { year: "2021", value: 200, projected: false },
  { year: "2022", value: 230, projected: false },
  { year: "2023", value: 280, projected: false },
  { year: "2024", value: 340, projected: false },
  { year: "2025*", value: 392, projected: true },
];

const maxValue = 400;
const gridLines = [0, 50, 100, 150, 200, 250, 300, 350, 400];

function BarChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
      <h3
        className="text-center text-lg font-normal text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        EU-27 Defence Spending
      </h3>
      <p className="mt-1 text-center text-[0.65rem] font-semibold tracking-[0.12em] text-white/30 uppercase">
        Aggregate expenditure in EUR billions, 2019–2025
      </p>

      <div className="mt-8 flex items-end gap-1 sm:gap-3" style={{ height: 280 }}>
        {/* Y-axis labels */}
        <div className="relative flex h-full flex-col justify-between pr-2 text-right">
          {gridLines
            .slice()
            .reverse()
            .map((v) => (
              <span key={v} className="text-[0.6rem] leading-none text-white/30">
                €{v}B
              </span>
            ))}
        </div>

        {/* Bars */}
        <div className="flex flex-1 items-end justify-around gap-1 sm:gap-2" style={{ height: "100%" }}>
          {barData.map((d) => {
            const heightPct = (d.value / maxValue) * 100;
            return (
              <div key={d.year} className="flex flex-1 flex-col items-center gap-2">
                <div className="relative w-full" style={{ height: 240 }}>
                  <div
                    className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-500 ${
                      d.projected ? "bg-[#e8a838]" : "bg-[#5bb8f5]"
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                </div>
                <span className="text-[0.6rem] text-white/40">{d.year}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface CardData {
  id: string;
  label: string;
  amount: string;
  summary: string;
  detailLabel: string;
  detail: string;
  color: string;
}

const cards: CardData[] = [
  {
    id: "rearm",
    label: "REARM EUROPE / READINESS 2030",
    amount: "€800B",
    summary: "Total defence spending mobilisation target",
    detailLabel: "REARM EUROPE DETAILS",
    detail:
      "Combines national fiscal space unlocks, EU-level joint borrowing, and EIB/EIF financing to mobilise €800B over a decade.",
    color: "#e8a838",
  },
  {
    id: "safe",
    label: "SAFE LOANS FACILITY",
    amount: "€150B",
    summary: "Competitively priced loans for joint procurement",
    detailLabel: "SAFE LOANS DETAILS",
    detail:
      "EU-backed loans at near-sovereign rates for collaborative procurement of air & missile defence, ammunition, and strategic enablers.",
    color: "#5bb8f5",
  },
  {
    id: "spending",
    label: "EU-27 DEFENCE SPENDING 2025",
    amount: "€392B",
    summary: "Projected aggregate, up 14% from 2024",
    detailLabel: "SPENDING TREND",
    detail:
      "EU-27 spending has grown every year since 2014, with 18 member states now meeting or exceeding the 2% GDP target.",
    color: "#5bb8f5",
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
          className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left hover:border-white/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p
            className="text-[0.65rem] font-bold tracking-[0.12em]"
            style={{ color: card.color }}
          >
            {card.label}
          </p>
          <p
            className="mt-2 text-3xl font-light text-white md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {card.amount}
          </p>
          <p className="mt-2 text-sm text-white/40">{card.summary}</p>
          <p className="mt-4 text-[0.6rem] font-semibold tracking-[0.1em] text-white/25 uppercase">
            Click to learn more &#x21BB;
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left hover:border-white/20"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p
            className="text-[0.65rem] font-bold tracking-[0.12em]"
            style={{ color: card.color }}
          >
            {card.detailLabel}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {card.detail}
          </p>
          <p className="mt-4 text-[0.6rem] font-semibold tracking-[0.1em] text-white/25 uppercase">
            Click to flip back &#x21BB;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FundingLandscape() {
  return (
    <section className="bg-[#0f1729] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2
            className="text-3xl font-light leading-snug tracking-tight text-white md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The EU Defence Funding Landscape
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/40">
            Europe is mobilising unprecedented capital for defence. The
            opportunity window is now.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-8 md:grid-cols-2">
          <BarChart />

          <div className="flex flex-col gap-4">
            {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
