"use client";

import { useReveal } from "../hooks/useReveal";

const services = [
  {
    slug: "funding-navigator",
    title: "EU Funding Navigator",
    what: "Match your company to the right EU defence funding instrument — EDF, SAFE, ReArm Europe, PESCO, or national MoD innovation programmes. We handle the proposal, you build the technology.",
    outcome: "Funded programmes, not grant applications.",
  },
  {
    slug: "consortium-builder",
    title: "Consortium Builder",
    what: "Cross-border consortium assembly for EU-funded defence projects. Capability-based partner matching, industrial teaming agreements, IP frameworks, and joint bid coordination across 3+ countries.",
    outcome: "Consortia that exist as legal entities, not as slide decks.",
  },
  {
    slug: "intelligence",
    title: "Defence Market Intelligence",
    what: "Monthly synthesis of European defence think tank research, procurement signals, and policy shifts. 45+ sources distilled into actionable briefings with Winsemius analysis on top.",
    outcome: "Know what's moving before the tender drops.",
  },
  {
    slug: "procurement",
    title: "Procurement Fast-Track",
    what: "Operator-driven validation sprints, procurement pathway acceleration, and contract vehicle structuring. From prototype to signed contract without the 3-year procurement cycle.",
    outcome: "Procurement-ready solutions in weeks, not years.",
  },
  {
    slug: "investor-matching",
    title: "Investor Matching",
    what: "Connect defence technology companies with aligned capital — VC, PE, sovereign wealth, and institutional investors who understand defence. Due diligence support and deal structuring.",
    outcome: "Capital that understands your sector and your timeline.",
  },
  {
    slug: "export-compliance",
    title: "Export & Compliance",
    what: "Navigate export controls, dual-use regulations, and cross-border compliance across European jurisdictions. Licensing strategy, end-user certification, and supply chain security.",
    outcome: "Capability delivered across borders with licences secured.",
  },
];

const serviceIcons = [
  // Funding - coins
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v8M9 11h6M9 14h6" /></svg>,
  // Consortium - network
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" /><path d="M12 8v3M7.5 17.5 10 13M16.5 17.5 14 13" /></svg>,
  // Intelligence - radar
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4" /></svg>,
  // Procurement - lightning
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  // Investor - chart
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  // Export - globe
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-void py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Services</span>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
            What we do
          </h2>
          <p className="mt-4 text-base text-text-secondary max-w-xl">
            Select a capability to learn more.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`reveal stagger-${Math.min(i + 1, 5)} group relative bg-void p-8 transition-all duration-300 hover:bg-surface-raised/50 block`}
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-amber transition-all duration-300 group-hover:w-full" />
              <div className="mb-4 text-amber/60 group-hover:text-amber transition-colors duration-300">
                {serviceIcons[i]}
              </div>
              <span className="text-xs font-mono text-text-muted">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.01em] text-text font-display group-hover:text-amber transition-colors duration-300">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {s.what}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs font-mono tracking-[0.1em] text-amber uppercase">
                  Outcome
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-text">
                  {s.outcome}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-text-muted group-hover:text-amber transition-colors duration-300">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
