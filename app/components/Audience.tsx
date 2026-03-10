"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";

const audiences = [
  {
    title: "Ministries & agencies",
    text: "You want new technology that works in the field. We connect you with the right industry partners, structure the funding, and manage the programme from policy to delivery.",
  },
  {
    title: "Deep-tech SMEs",
    text: "You built something great but defence procurement feels impossible. We position your technology, find the right consortium partners, and navigate the funding calls.",
  },
  {
    title: "Primes",
    text: "You need reliable local partners in other countries. We find them, check them out, set up the teaming agreements, and manage the cross-border complexity.",
  },
  {
    title: "Financiers",
    text: "You want to invest in defence but need to understand the landscape. We map the opportunities and connect you with the companies and programmes that are ready.",
  },
];

const team = [
  {
    name: "Manny Winsemius",
    role: "Founder & Managing Director",
    image: "/guy_0.png",
    detail: "Builds and runs defence partnerships across Europe.",
  },
  {
    name: "Team Member",
    role: "Strategy & Partnerships",
    image: "/guy_1.png",
    detail: "Connects the dots between government, industry, and research.",
  },
  {
    name: "Team Member",
    role: "Operations & Delivery",
    image: "/guy_2.png",
    detail: "Manages projects across borders from start to finish.",
  },
  {
    name: "Team Member",
    role: "Business Development",
    image: "/guy_3.png",
    detail: "Grows our network from NATO to early-stage startups.",
  },
];

export default function Audience() {
  const ref = useReveal();

  return (
    <section id="about" className="bg-white py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Who we work with
        </h2>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {audiences.map((a, i) => (
            <div key={a.title} className={`reveal stagger-${i + 1}`}>
              <h3 className="text-sm font-semibold tracking-[-0.01em]">
                {a.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">
                {a.text}
              </p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="reveal stagger-5 mt-24 border-t border-stone pt-20 md:mt-32 md:pt-24">
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
