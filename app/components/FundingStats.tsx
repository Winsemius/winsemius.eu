const nlStats = [
  { value: "€26.8B", label: "2026 BUDGET (+14.5%)" },
  { value: "2.2%", label: "OF GDP IN 2026" },
  { value: "3.5%", label: "NATO TARGET BY 2035" },
  { value: "7th", label: "NATO RANK IN SPENDING" },
];

const euStats = [
  { value: "€183B", label: "EU DEFENCE INDUSTRY TURNOVER (2024)" },
  { value: "633K", label: "DIRECT DEFENCE JOBS" },
  { value: "10.5%+", label: "PROJECTED ANNUAL GROWTH" },
  { value: "75", label: "ACTIVE PESCO PROJECTS" },
];

export default function FundingStats() {
  return (
    <section className="bg-surface">
      {/* Netherlands Defence Spending */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="briefing-card px-6 py-10 md:px-12">
          <h3 className="text-center text-xl font-display font-semibold text-text md:text-2xl">
            Netherlands Defence Spending
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {nlStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-amber md:text-3xl font-mono">
                  {s.value}
                </p>
                <p className="mt-2 text-[0.6rem] font-mono tracking-[0.1em] text-text-muted uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EU Industry Stats */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {euStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-amber md:text-3xl font-mono">
                  {s.value}
                </p>
                <p className="mt-2 text-[0.6rem] font-mono tracking-[0.1em] text-text-muted uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
        <div className="border-t border-border pt-16 text-center">
          <p className="mx-auto max-w-2xl text-xl font-display font-medium text-text-secondary md:text-2xl">
            The funding is there. The question is whether you are positioned to
            capture it.
          </p>
          <a
            href="mailto:info@winsemius.eu?subject=Funding%20Positioning"
            className="mt-8 inline-block border border-amber bg-amber/10 px-10 py-4 text-sm font-mono font-medium tracking-[0.1em] uppercase text-amber transition-all hover:bg-amber/20"
          >
            Let&apos;s Talk Positioning
          </a>
        </div>
      </div>
    </section>
  );
}
