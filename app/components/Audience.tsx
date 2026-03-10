"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";

const audiences = [
  {
    title: "For deep-tech SMEs",
    text: "You have the technology. We give you the consortium, the contract vehicle, and access to procurement pipelines you cannot reach alone.",
  },
  {
    title: "For primes & integrators",
    text: "You need vetted local partners and compliant subcontracting structures. We assemble the ecosystem, negotiate the teaming agreement, and manage delivery.",
  },
  {
    title: "For governments & MODs",
    text: "You want innovation at speed. We deliver operator-validated capability with export licences approved and supply chains secured.",
  },
];

const team = [
  {
    name: "Manny Winsemius",
    role: "Founder & Managing Director",
    image: "/guy_0.png",
    detail: "Programme director and consortium architect across EU member states.",
  },
  {
    name: "Team Member",
    role: "Strategy & Partnerships",
    image: "/guy_1.png",
    detail: "Stakeholder alignment across government, industry, and research.",
  },
  {
    name: "Team Member",
    role: "Operations & Delivery",
    image: "/guy_2.png",
    detail: "Cross-border programme management from input to signed capability.",
  },
  {
    name: "Team Member",
    role: "Business Development",
    image: "/guy_3.png",
    detail: "Ecosystem network from NATO institutions to early-stage ventures.",
  },
];

export default function Audience() {
  const ref = useReveal();

  return (
    <section id="about" className="bg-sand py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Audience segments */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {audiences.map((a, i) => (
            <div key={a.title} className={`reveal stagger-${i + 1}`}>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                {a.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate">
                {a.text}
              </p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="reveal stagger-4 mt-24 border-t border-stone pt-20 md:mt-32 md:pt-24">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name + t.role} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-stone">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-ink">{t.name}</h4>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-accent uppercase">
                  {t.role}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
