"use client";

import { useReveal } from "../hooks/useReveal";

const brokerRoles = [
  {
    title: "Navigate procurement",
    description:
      "European defence procurement is fragmented across 27+ national systems, each with different rules, timelines, and decision-makers. A broker knows which doors to knock on and how to get through them.",
  },
  {
    title: "Unlock funding",
    description:
      "EU defence instruments — EDF, SAFE, ReArm Europe, PESCO — require cross-border consortia and complex proposals. A broker assembles the partnerships and handles the paperwork.",
  },
  {
    title: "Connect tech to end-users",
    description:
      "Innovative companies build great technology but struggle to reach military buyers. A broker bridges that gap — matching capabilities to operational needs and getting solutions in front of decision-makers.",
  },
  {
    title: "Shorten the valley of death",
    description:
      "The average European defence procurement cycle is 3–7 years. A broker compresses that timeline — from prototype to signed contract — by knowing the system from the inside.",
  },
];

export default function WhatIsABroker() {
  const ref = useReveal();

  return (
    <section className="relative bg-void py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
              The Role
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
            What is a defence broker?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-3xl">
            A defence broker is an independent intermediary that connects
            technology companies, governments, and capital markets within the
            European defence ecosystem. Where defence primes have decades of
            institutional relationships, smaller companies — often the ones
            building the most innovative technology — have none. A broker
            closes that gap.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {brokerRoles.map((role, i) => (
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
            <span className="text-text font-medium">Winsemius</span> is that
            broker. We operate at the intersection of defence technology,
            industrial policy, and capital — helping companies access the right
            funding, build the right partnerships, and reach the right buyers
            across Europe.
          </p>
        </div>
      </div>
    </section>
  );
}
