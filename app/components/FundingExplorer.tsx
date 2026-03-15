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
    color: "#f59e0b",
  },
  {
    id: "rearm",
    label: "ReArm Europe / Readiness 2030",
    amount: "€800B",
    amountLabel: "TOTAL MOBILISATION TARGET OVER 10 YEARS",
    description:
      "The flagship EU defence mobilisation plan combining national fiscal space unlocks, EU-level joint borrowing via SAFE, and EIB/EIF financing. Aims to mobilise €800B over a decade to close Europe's capability gaps.",
    value: 800,
    color: "#ef4444",
  },
  {
    id: "safe",
    label: "SAFE Loans Facility",
    amount: "€150B",
    amountLabel: "COMPETITIVELY PRICED EU-BACKED LOANS",
    description:
      "Security Action For Europe — EU-backed loans at near-sovereign interest rates for collaborative defence procurement. Covers air & missile defence, ammunition, and strategic enablers like satellite comms.",
    value: 150,
    color: "#22c55e",
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
  const gap = 0.02;

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
          opacity={active === p.index ? 1 : 0.4}
          className="cursor-pointer transition-opacity duration-300"
          onClick={() => onSelect(p.index)}
          onMouseEnter={() => onSelect(p.index)}
        />
      ))}
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        fill="var(--color-text)"
        className="text-[2rem] font-light"
        style={{ fontFamily: "var(--font-display)" }}
      >
        €1,342B
      </text>
      <text
        x={cx}
        y={cy + 18}
        textAnchor="middle"
        fill="var(--color-text-muted)"
        className="text-[0.55rem] font-semibold tracking-[0.15em]"
        style={{ fontFamily: "var(--font-mono)" }}
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
    <section className="bg-void py-24 md:py-32 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Explorer</span>
            <div className="h-px w-8 bg-amber" />
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl">
            EU Defence Funding Explorer
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-text-secondary">
            Click any segment to explore the scale and purpose of each funding mechanism.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <DonutChart active={active} onSelect={setActive} />
          </div>

          <div className="briefing-card p-8">
            <h3 className="text-xl font-display font-semibold text-text">
              {seg.label}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {seg.description}
            </p>

            <div className="mt-6 border border-border bg-surface-raised px-6 py-5 text-center">
              <p
                className="text-3xl font-bold md:text-4xl font-mono"
                style={{ color: seg.color }}
              >
                {seg.amount}
              </p>
              <p className="mt-1 text-[0.65rem] font-mono tracking-[0.12em] text-text-muted">
                {seg.amountLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
