"use client";

import { useReveal } from "../hooks/useReveal";

const statements = [
  {
    text: "SMEs build great technology but cannot navigate multinational procurement alone.",
    align: "text-left",
  },
  {
    text: "Governments want innovation speed but get slide decks and letters of intent.",
    align: "text-center md:pl-24",
  },
  {
    text: "The ecosystem exists. What is missing is the operator who assembles it, contracts it, and delivers.",
    align: "text-right",
  },
];

export default function Problem() {
  const ref = useReveal();

  return (
    <section className="bg-ink-light py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-16 md:space-y-24">
          {statements.map((s, i) => (
            <p
              key={i}
              className={`reveal stagger-${i + 1} text-xl font-normal leading-relaxed tracking-[-0.01em] text-[#8A9BB5] md:text-2xl md:leading-relaxed ${s.align}`}
            >
              {s.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
