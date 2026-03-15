"use client";

const spendingData = [
  { year: "2019", value: 190 },
  { year: "2020", value: 195 },
  { year: "2021", value: 200 },
  { year: "2022", value: 230 },
  { year: "2023", value: 280 },
  { year: "2024", value: 340 },
  { year: "2025*", value: 392 },
];

const growthData = [
  { year: "2020", value: 2 },
  { year: "2021", value: 5 },
  { year: "2022", value: 13 },
  { year: "2023", value: 23 },
  { year: "2024", value: 18 },
  { year: "2025*", value: 14 },
];

const investmentData = [
  { year: "2019", value: 30 },
  { year: "2020", value: 32 },
  { year: "2021", value: 35 },
  { year: "2022", value: 38 },
  { year: "2023", value: 55 },
  { year: "2024", value: 100 },
];

function BarChart({
  title,
  subtitle,
  data,
  maxVal,
  gridLines,
  prefix,
  suffix,
  lastBarHighlight,
  gradientBars,
}: {
  title: string;
  subtitle: string;
  data: { year: string; value: number }[];
  maxVal: number;
  gridLines: number[];
  prefix?: string;
  suffix?: string;
  lastBarHighlight?: boolean;
  gradientBars?: boolean;
}) {
  return (
    <div className="briefing-card p-5 md:p-6">
      <h3 className="text-center text-base font-display font-semibold text-text">
        {title}
      </h3>
      <p className="mt-1 text-center text-[0.55rem] font-mono tracking-[0.1em] text-text-muted uppercase">
        {subtitle}
      </p>

      <div className="mt-6 flex items-end gap-1" style={{ height: 220 }}>
        <div className="relative flex h-full flex-col justify-between pr-1 text-right">
          {gridLines
            .slice()
            .reverse()
            .map((v) => (
              <span key={v} className="text-[0.5rem] leading-none text-text-muted font-mono">
                {prefix}{v}{suffix}
              </span>
            ))}
        </div>

        <div className="flex flex-1 items-end justify-around gap-1" style={{ height: "100%" }}>
          {data.map((d, i) => {
            const heightPct = (d.value / maxVal) * 100;
            const isLast = i === data.length - 1;
            let bg = "var(--color-amber)";
            if (lastBarHighlight && isLast) bg = "#ef4444";
            if (gradientBars) {
              const opacity = 0.4 + (i / (data.length - 1)) * 0.6;
              bg = `rgba(245, 158, 11, ${opacity})`;
              if (isLast) bg = "#ef4444";
            }
            return (
              <div key={d.year} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="relative w-full" style={{ height: 180 }}>
                  <div
                    className="absolute bottom-0 w-full rounded-t-sm"
                    style={{ height: `${heightPct}%`, background: bg }}
                  />
                </div>
                <span className="text-[0.5rem] text-text-muted font-mono">{d.year}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LineChart() {
  const maxVal = 25;
  const chartW = 280;
  const chartH = 180;
  const padL = 35;
  const padR = 10;
  const padT = 10;
  const padB = 30;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;

  const points = growthData.map((d, i) => ({
    x: padL + (i / (growthData.length - 1)) * plotW,
    y: padT + plotH - (d.value / maxVal) * plotH,
    label: d.year,
    value: d.value,
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padT + plotH} L ${points[0].x} ${padT + plotH} Z`;

  const gridYValues = [0, 5, 10, 15, 20, 25];

  return (
    <div className="briefing-card p-5 md:p-6">
      <h3 className="text-center text-base font-display font-semibold text-text">
        Year-on-Year Growth
      </h3>
      <p className="mt-1 text-center text-[0.55rem] font-mono tracking-[0.1em] text-text-muted uppercase">
        Annual % change in total defence spending, 2020–2025
      </p>

      <div className="mt-6 flex justify-center">
        <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full max-w-[320px]">
          {gridYValues.map((v) => {
            const y = padT + plotH - (v / maxVal) * plotH;
            return (
              <g key={v}>
                <line
                  x1={padL} y1={y} x2={chartW - padR} y2={y}
                  stroke="var(--color-border)" strokeWidth="0.5"
                />
                <text x={padL - 4} y={y + 3} textAnchor="end" fill="var(--color-text-muted)" fontSize="6" fontFamily="var(--font-mono)">
                  {v}%
                </text>
              </g>
            );
          })}

          <path d={areaPath} fill="rgba(245,158,11,0.1)" />

          <path
            d={linePath}
            fill="none"
            stroke="var(--color-amber)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((p) => (
            <circle
              key={p.label}
              cx={p.x} cy={p.y} r="4"
              fill="var(--color-surface)"
              stroke="var(--color-amber)"
              strokeWidth="2"
            />
          ))}

          {points.map((p) => (
            <text
              key={p.label}
              x={p.x} y={chartH - 5}
              textAnchor="middle"
              fill="var(--color-text-muted)"
              fontSize="6"
              fontFamily="var(--font-mono)"
            >
              {p.label}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default function FundingCharts() {
  return (
    <section className="bg-void py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-5 md:grid-cols-3">
          <BarChart
            title="EU-27 Defence Spending"
            subtitle="Aggregate expenditure in EUR billions, 2019–2025"
            data={spendingData}
            maxVal={400}
            gridLines={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
            prefix="€"
            suffix="B"
            lastBarHighlight
          />
          <LineChart />
          <BarChart
            title="Investment Acceleration"
            subtitle="Equipment & R&D spending in EUR billions, 2019–2024"
            data={investmentData}
            maxVal={120}
            gridLines={[0, 20, 40, 60, 80, 100, 120]}
            prefix="€"
            suffix="B"
            gradientBars
          />
        </div>
      </div>
    </section>
  );
}
