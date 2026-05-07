"use client";

import { useReveal } from "../hooks/useReveal";

const valuePoints = [
  {
    title: "Map the funding landscape",
    description:
      "Dutch national programmes (RVO, DTFA, NWO), NATO (DIANA, STO), EDA, EDF, Horizon Europe, EIC. We track what is open, what is opening, and which programme actually fits your case.",
  },
  {
    title: "Build the consortium and write the proposal",
    description:
      "We don’t just point you at the call. We act as lead applicant where useful, run partner search, manage the submission, and red-team the bid before it goes in.",
  },
  {
    title: "Stand with you as project partner",
    description:
      "Where it adds value, Winsemius joins the consortium itself — work package lead, exploitation coordinator, dissemination partner, or embedded strategic advisor. Skin in the game, not just slides.",
  },
  {
    title: "Deliver beyond the win",
    description:
      "Reporting, milestone tracking, financial compliance, consortium governance, and follow-on opportunity development. We stay through execution, not only through award.",
  },
];

export default function WhyWinsemius() {
  const ref = useReveal();

  return (
    <section className="relative bg-void py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
              Why Winsemius
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
            We don&rsquo;t intermediate. We add value.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-3xl">
            European defence and dual-use markets are complex: fragmented
            procurement, dense regulation, and dozens of overlapping funding
            programmes. Winsemius is a boutique consultancy built specifically
            for these markets. We map the landscape, we write the proposals,
            we build the consortia &mdash; and where it makes sense, we step
            into the project alongside you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {valuePoints.map((role, i) => (
            <div
              key={i}
              className={`reveal stagger-${Math.min(i + 1, 4)} border border-border p-8 hover:border-amber/30 transition-colors duration-300`}
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 text-2xl font-display font-bold text-amber/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-text font-display">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {role.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 border-t border-border pt-8">
          <p className="text-base leading-relaxed text-text-secondary max-w-3xl">
            <span className="text-text font-medium">Winsemius</span> is the
            boutique defence consultancy that wins the funding and helps you
            deliver against it &mdash; across NL, NATO, and EU programmes.
          </p>
        </div>
      </div>
    </section>
  );
}
