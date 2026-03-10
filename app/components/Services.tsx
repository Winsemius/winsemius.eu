"use client";

import { useReveal } from "../hooks/useReveal";

const serviceIcons = [
  // Programme Office - org chart
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="5" rx="1" /><rect x="1" y="17" width="8" height="5" rx="1" /><rect x="15" y="17" width="8" height="5" rx="1" /><path d="M12 7v4M5 17v-4h14v4" /></svg>,
  // Consortium - network
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" /><path d="M12 8v3M7.5 17.5 10 13M16.5 17.5 14 13" /></svg>,
  // Contracting - document
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg>,
  // Sprint - lightning
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  // Strategy - compass
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>,
  // Export - globe
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
];

const services = [
  {
    title: "Capability Programme Office",
    what: "Standing PMO with governance frameworks, open architecture design, supplier tiering, and milestone authority.",
    outcome: "One programme office, one set of KPIs, one escalation path.",
  },
  {
    title: "Industrial Teaming & Consortium Assembly",
    what: "Capability-based clustering (ISR, C2, EW, loitering munitions), industrial teaming agreements, IP vehicles, and order-specific partnerships.",
    outcome: "Consortia that exist as legal entities with signed agreements, not as slide decks with letters of intent.",
  },
  {
    title: "Contracting, Compliance & Financing Desk",
    what: "Contract structuring, export control navigation, compliance frameworks, pre-commitment funding, and escrow arrangements.",
    outcome: "Validation-to-contract in weeks.",
  },
  {
    title: "Capability Validation & Sprint Delivery",
    what: "Operator-driven validation sprints, rapid prototyping, and procurement pathway acceleration.",
    outcome: "Procurement-ready solutions in weeks, with operator sign-off and a contract vehicle attached.",
  },
  {
    title: "Strategic Positioning",
    what: "Stakeholder mapping, policy timing, NATO/EU integration strategies, and institutional relationship management.",
    outcome: "Market access that produces contracts, not calendar invites.",
  },
  {
    title: "International Delivery & Export Enablement",
    what: "Multi-national programme execution, distributed manufacturing, export licensing, and cross-border supply chain management.",
    outcome: "Capability delivered across borders with licences approved and supply chains secured.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-white py-28 md:py-36" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Services
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-4xl">
            How we work
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-stone md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal stagger-${i + 1 > 5 ? 5 : i + 1} group relative bg-white p-10 transition-colors hover:bg-sand`}
            >
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              <div className="mb-4 text-accent/60">
                {serviceIcons[i]}
              </div>
              <span className="text-xs font-medium text-accent/40">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-medium leading-snug tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {s.what}
              </p>
              <div className="mt-6 border-t border-stone pt-4">
                <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                  Outcome
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-ink">
                  {s.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
