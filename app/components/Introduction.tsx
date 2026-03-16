"use client";

import { useReveal } from "../hooks/useReveal";

export default function Introduction() {
  const ref = useReveal();

  return (
    <section className="relative bg-void py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
              The New Defence Landscape
            </span>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Left column */}
            <div>
              <h2 className="text-3xl font-display font-bold leading-tight tracking-[-0.03em] text-text md:text-4xl">
                High-tech defence technology is outpacing conventional industry.
              </h2>
              <p className="mt-8 text-base leading-relaxed text-text-secondary">
                We operate at the frontier of cyber, autonomous vehicles, and
                drone technology&mdash;domains where the pace of development far
                exceeds that of conventional military equipment. The parallels
                with the digital revolution of the late 1990s are striking: small,
                agile companies are innovating faster than established defence
                primes.
              </p>
            </div>

            {/* Right column */}
            <div>
              <p className="text-base leading-relaxed text-text-secondary">
                The challenge is connecting the right technology, at the right
                moment, via the right carrier&mdash;whether drone, robot, or
                autonomous platform&mdash;to the right operational need.
              </p>
              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                At the same time, the companies building this technology need to
                be enabled to grow without excessive barriers, while meeting the
                demanding requirements that the defence industry places on its
                suppliers.
              </p>

              {/* Key domains */}
              <div className="mt-10 flex flex-wrap gap-3">
                {["Cyber", "Autonomous Vehicles", "Drones & UAS", "Robotics"].map((domain) => (
                  <span
                    key={domain}
                    className="border border-amber/30 bg-amber/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.1em] text-amber"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
