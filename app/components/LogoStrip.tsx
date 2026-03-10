"use client";

import { useReveal } from "../hooks/useReveal";

const partners = [
  "NATO Innovation Fund",
  "Rheinmetall",
  "Thales",
  "Saab",
  "TNO",
  "Ministry of Defence NL",
  "DeltaQuad",
  "Keen Venture Partners",
];

export default function LogoStrip() {
  const ref = useReveal();

  return (
    <section className="bg-sand py-14" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="reveal text-center text-[0.65rem] font-semibold tracking-[0.2em] text-slate/60 uppercase">
          Trusted across the defence ecosystem
        </p>
        <div className="reveal stagger-1 mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {partners.map((name) => (
            <span
              key={name}
              className="text-[13px] font-semibold tracking-wide text-ink/25 uppercase transition-colors hover:text-ink/50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
