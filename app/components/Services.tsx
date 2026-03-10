const services = [
  {
    title: "Capability Programme Office",
    what: "Standing PMO with governance frameworks, open architecture design, supplier tiering, and milestone authority.",
    how: "We operate the programme office — not as advisors on the side, but as the single point of accountability for schedule, scope, and supplier performance.",
    outcome: "One programme office, one set of KPIs, one escalation path.",
  },
  {
    title: "Industrial Teaming & Consortium Assembly",
    what: "Capability-based clustering (ISR, C2, EW, loitering munitions), industrial teaming agreements, IP vehicles, and order-specific partnerships.",
    how: "We assemble the consortium, negotiate the teaming agreement, and settle IP ownership — ready to sign before the call lands.",
    outcome: "Consortia that exist as legal entities with signed agreements, not as slide decks with letters of intent.",
  },
  {
    title: "Contracting, Compliance & Financing Desk",
    what: "Contract structuring, export control navigation, compliance frameworks, pre-commitment funding, and escrow arrangements.",
    how: "We draft, negotiate, and close — not coordinate. The desk produces signed contracts, approved export licences, and committed funding.",
    outcome: "Validation-to-contract in weeks.",
  },
  {
    title: "Capability Validation & Sprint Delivery",
    what: "Operator-driven validation sprints, rapid prototyping, and procurement pathway acceleration.",
    how: "We run the sprint — operators, developers, and decision-makers in one room, producing tested capability with a signed procurement pathway at the end.",
    outcome: "Procurement-ready solutions in weeks, with operator sign-off and a contract vehicle attached.",
  },
  {
    title: "Strategic Positioning",
    what: "Stakeholder mapping, policy timing, NATO/EU integration strategies, and institutional relationship management.",
    how: "Public affairs embedded in the delivery timeline — not a parallel track, but an integral part of the programme office output.",
    outcome: "Market access that produces contracts, not calendar invites.",
  },
  {
    title: "International Delivery & Export Enablement",
    what: "Multi-national programme execution, distributed manufacturing, export licensing, and cross-border supply chain management.",
    how: "We run international delivery — export licences, manufacturing coordination, logistics, and compliance in one integrated desk.",
    outcome: "Capability delivered across borders with licences approved and supply chains secured.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Services
          </span>
          <h2
            className="mx-auto mt-4 max-w-2xl text-3xl font-light leading-snug tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How we work
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-stone md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white p-8 transition-colors hover:bg-sand"
            >
              <span className="text-xs font-medium text-accent/60">
                0{i + 1}
              </span>
              <h3
                className="mt-3 text-lg font-normal leading-snug tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {s.what}
              </p>
              <div className="mt-6 border-t border-stone pt-4">
                <p className="text-xs font-medium tracking-wide text-accent uppercase">
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
