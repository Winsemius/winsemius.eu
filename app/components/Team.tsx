"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";

const team = [
  {
    name: "Manny Winsemius",
    role: "Founder & Managing Director",
    image: "/guy_0.png",
    bio: "Programme director and consortium architect. Connects defence operators, deep-tech SMEs, and institutional capital across EU member states.",
  },
  {
    name: "Team Member",
    role: "Strategy & Partnerships",
    image: "/guy_1.png",
    bio: "Drives strategic positioning and stakeholder alignment across government, industry, and research institutions.",
  },
  {
    name: "Team Member",
    role: "Operations & Delivery",
    image: "/guy_2.png",
    bio: "Manages cross-border delivery programmes from operator input through to signed capability contracts.",
  },
  {
    name: "Team Member",
    role: "Business Development",
    image: "/guy_3.png",
    bio: "Builds and maintains the ecosystem network — from NATO-level institutions to early-stage defence-tech ventures.",
  },
];

export default function Team() {
  const ref = useReveal();

  return (
    <section id="team" className="bg-white py-28 md:py-36" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Team
          </span>
          <h2 className="mt-5 text-3xl font-medium leading-snug tracking-[-0.02em] md:text-4xl">
            The people behind the programme
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div key={member.name + member.role} className={`reveal stagger-${i + 1} group`}>
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-base font-medium text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
