"use client";

import { useReveal } from "../hooks/useReveal";

const resources = [
  {
    title: "GYPS Integrator",
    description:
      "Systems integration approach for defence capability development.",
    badge: "Brochure",
    href: "https://github.com/Winsemius/whitepaper/releases/download/latest/gyps-pitch.pdf",
    external: true,
  },
  {
    title: "Funding Strat Advisor",
    description:
      "Private & public funding strategy advisor. Requires ChatGPT login.",
    badge: "GPT Tool",
    href: "https://chatgpt.com/g/g-69a33838740081919d3acd1d50c82489-funding-strat-advisor",
    external: true,
  },
];

export default function Resources() {
  const ref = useReveal();

  return (
    <section id="resources" className="bg-white py-28 md:py-36" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Resources
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-4xl">
            Brochures &amp; tools
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-6 sm:grid-cols-2">
          {resources.map((r, i) => (
            <a
              key={r.title}
              href={r.href}
              target={r.external ? "_blank" : undefined}
              rel={r.external ? "noopener noreferrer" : undefined}
              className={`reveal stagger-${i + 1} group flex flex-col border border-warm bg-sand p-8 transition-all hover:border-accent hover:shadow-lg`}
            >
              <span className="text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">
                {r.badge}
              </span>
              <h3 className="mt-3 text-lg font-medium leading-snug tracking-[-0.01em]">
                {r.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                {r.description}
              </p>
              <span className="mt-4 text-xs font-medium text-accent">
                {r.external ? "Open" : "Download"} &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
