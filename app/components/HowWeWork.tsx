"use client";

import { useReveal } from "../hooks/useReveal";

const clusters = [
  {
    step: "01",
    title: "Assemble",
    description:
      "We find the right companies, negotiate the teaming agreements, settle IP ownership, and handle strategic positioning. By the time a funding call opens, the team is ready to sign.",
    outcome: "Real partnerships with signed agreements, not slide decks with good intentions.",
  },
  {
    step: "02",
    title: "Contract",
    description:
      "We structure the contracts, navigate export controls, set up compliance, and arrange funding. One desk that produces signed contracts, approved licences, and committed financing.",
    outcome: "From first meeting to signed contract in weeks, not years.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "We run the programme office and the validation sprints. Operators, developers, and decision-makers working together until the product is tested and the procurement pathway is signed.",
    outcome: "Working products delivered across borders with all approvals in place.",
  },
];

export default function HowWeWork() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-white py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1px_1fr_1px_1fr]">
          {clusters.map((c, i) => (
            <>
              {i > 0 && (
                <div
                  key={`divider-${i}`}
                  className="hidden bg-stone md:block"
                />
              )}
              <div key={c.step} className={`reveal stagger-${i + 1}`}>
                <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  {c.step}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-6 text-[15px] leading-relaxed text-slate">
                  {c.description}
                </p>
                <p className="mt-8 border-t border-stone pt-6 text-sm font-medium text-ink">
                  {c.outcome}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
