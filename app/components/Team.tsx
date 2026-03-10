import Image from "next/image";

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
  return (
    <section id="team" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Team
          </span>
          <h2
            className="mt-4 text-3xl font-light leading-snug tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The people behind the programme
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name + member.role} className="group text-center">
              <div className="mx-auto h-56 w-56 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={224}
                  height={224}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h3
                className="mt-6 text-lg font-normal text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
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
