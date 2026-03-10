"use client";

import { useReveal } from "../hooks/useReveal";

const papers = [
  {
    tag: "Position paper",
    title: "Coming soon",
    summary:
      "Our first position papers are in the works. Sign up to be notified when they go live.",
    href: "#contact",
  },
];

export default function Insights() {
  const ref = useReveal();

  return (
    <section id="insights" className="bg-sand py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Insights
        </h2>
        <p className="reveal stagger-1 mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
          Our thinking on defence policy and funding.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((p, i) => (
            <a
              key={i}
              href={p.href}
              className={`reveal stagger-${i + 2} group block border border-stone bg-white p-8 transition-all hover:border-accent/30 hover:shadow-md`}
            >
              <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                {p.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {p.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
