"use client";

import { useState } from "react";

const segments = [
  {
    id: "national",
    label: "EU-27 National Defence Spending (2025)",
    amount: "€392B",
    amountLabel: "PROJECTED 2025 AGGREGATE, +14% YOY",
    description:
      "Projected aggregate defence spending across all 27 EU member states in 2025. Up 14% from 2024, driven by geopolitical urgency. 18 member states now meet or exceed the 2% GDP target.",
    value: 392,
    color: "#5bb8f5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    id: "rearm",
    label: "ReArm Europe / Readiness 2030",
    amount: "€800B",
    amountLabel: "TOTAL MOBILISATION TARGET OVER 10 YEARS",
    description:
      "The flagship EU defence mobilisation plan combining national fiscal space unlocks, EU-level joint borrowing via SAFE, and EIB/EIF financing. Aims to mobilise €800B over a decade to close Europe's capability gaps.",
    value: 800,
    color: "#e8a838",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20L20 4M14 4l6 6M4 20l6-6" />
        <path d="M20 20L4 4M10 4L4 10M20 20l-6-6" />
      </svg>
    ),
  },
  {
    id: "safe",
    label: "SAFE Loans Facility",
    amount: "€150B",
    amountLabel: "COMPETITIVELY PRICED EU-BACKED LOANS",
    description:
      "Security Action For Europe — EU-backed loans at near-sovereign interest rates for collaborative defence procurement. Covers air & missile defence, ammunition, and strategic enablers like satellite comms.",
    value: 150,
    color: "#5bb8f5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="10" width="18" height="11" rx="1" />
        <path d="M5 10V7a7 7 0 0 1 14 0v3" />
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
        <line x1="12" y1="3" x2="12" y2="1" />
        <path d="M8 21v-3h8v3" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    ),
  },
];

const total = segments.reduce((sum, s) => sum + s.value, 0);

function DonutChart({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 140;
  const innerR = 90;
  const gap = 0.02; // radians gap between segments

  let currentAngle = -Math.PI / 2;
  const paths: { d: string; color: string; index: number }[] = [];

  segments.forEach((seg, i) => {
    const fraction = seg.value / total;
    const sweepAngle = fraction * 2 * Math.PI - gap;
    const startAngle = currentAngle + gap / 2;
    const endAngle = startAngle + sweepAngle;

    const x1Outer = cx + outerR * Math.cos(startAngle);
    const y1Outer = cy + outerR * Math.sin(startAngle);
    const x2Outer = cx + outerR * Math.cos(endAngle);
    const y2Outer = cy + outerR * Math.sin(endAngle);
    const x1Inner = cx + innerR * Math.cos(endAngle);
    const y1Inner = cy + innerR * Math.sin(endAngle);
    const x2Inner = cx + innerR * Math.cos(startAngle);
    const y2Inner = cy + innerR * Math.sin(startAngle);

    const largeArc = sweepAngle > Math.PI ? 1 : 0;

    const d = [
      `M ${x1Outer} ${y1Outer}`,
      `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2Outer} ${y2Outer}`,
      `L ${x1Inner} ${y1Inner}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 0 ${x2Inner} ${y2Inner}`,
      `Z`,
    ].join(" ");

    paths.push({ d, color: seg.color, index: i });
    currentAngle = startAngle + sweepAngle + gap / 2;
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[320px]">
      {paths.map((p) => (
        <path
          key={p.index}
          d={p.d}
          fill={p.color}
          opacity={active === p.index ? 1 : 0.6}
          className="cursor-pointer transition-opacity duration-300"
          onClick={() => onSelect(p.index)}
          onMouseEnter={() => onSelect(p.index)}
        />
      ))}
      {/* Center text */}
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        className="fill-white text-[2rem] font-light"
        style={{ fontFamily: "var(--font-display)" }}
      >
        €1,342B
      </text>
      <text
        x={cx}
        y={cy + 18}
        textAnchor="middle"
        className="fill-white/40 text-[0.55rem] font-semibold tracking-[0.15em]"
      >
        TOTAL MOBILISED
      </text>
    </svg>
  );
}

export default function FundingExplorer() {
  const [active, setActive] = useState(0);
  const seg = segments[active];

  return (
    <section className="bg-[#0f1729] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2
            className="text-3xl font-light leading-snug tracking-tight text-white md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            EU Defence Funding Explorer
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/40">
            Click any segment to explore the scale and purpose of each funding
            mechanism.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          {/* Donut chart */}
          <div className="flex justify-center">
            <DonutChart active={active} onSelect={setActive} />
          </div>

          {/* Info panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mb-4" style={{ color: seg.color }}>
              {seg.icon}
            </div>
            <h3
              className="text-xl font-normal text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {seg.label}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {seg.description}
            </p>

            <div className="mt-6 rounded-xl bg-white/5 px-6 py-5 text-center">
              <p
                className="text-3xl font-light md:text-4xl"
                style={{ color: seg.color, fontFamily: "var(--font-display)" }}
              >
                {seg.amount}
              </p>
              <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.12em] text-white/30">
                {seg.amountLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
