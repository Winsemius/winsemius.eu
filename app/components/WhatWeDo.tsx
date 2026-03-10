"use client";

import { useReveal } from "../hooks/useReveal";

const pillars = [
  {
    title: "Policy influence",
    description:
      "We write position papers, shape procurement frameworks, and put the right arguments in front of the right decision-makers. Our work sits at the intersection of government, industry, and research.",
  },
  {
    title: "Funding strategy",
    description:
      "We map out the funding landscape (EDF, EDIP, NATO, national programmes) and build strategies that turn public money into real projects. From proposal writing to consortium design.",
  },
  {
    title: "Coalition building",
    description:
      "We bring together the companies, research organisations, and government buyers that need to be in the room. Then we do the work to turn those introductions into signed agreements.",
  },
];

export default function WhatWeDo() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-white py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          What we do
        </h2>
        <p className="reveal stagger-1 mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
          A do-tank for European defence.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          {pillars.map((p, i) => (
            <div key={p.title} className={`reveal stagger-${i + 2}`}>
              <h3 className="text-lg font-semibold tracking-[-0.02em]">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
