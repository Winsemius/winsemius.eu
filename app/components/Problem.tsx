"use client";

import { useReveal } from "../hooks/useReveal";

const statements = [
  {
    text: "Small defence companies build great tech but can't get through the procurement maze on their own.",
    align: "text-left",
  },
  {
    text: "Governments want faster innovation but keep getting presentations instead of products.",
    align: "text-center md:pl-24",
  },
  {
    text: "The companies and the money are there. What's missing is someone who puts it all together and gets it across the finish line.",
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
