"use client";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useReveal } from "../../hooks/useReveal";

const modules = [
  {
    number: "01",
    title: "EU Drone Regulations & Military Exemptions",
    description:
      "Navigate the EASA regulatory framework including A1/A3/A2 categories, understand military-specific exemptions across EU member states, and apply SORA methodology for operational risk assessment.",
    time: "~2 hours",
  },
  {
    number: "02",
    title: "Drone Systems & Technology",
    description:
      "Compare fixed-wing, multirotor, and VTOL platforms. Understand payloads, sensor suites, communication links, data protocols, and electronic warfare considerations for military drone systems.",
    time: "~2 hours",
  },
  {
    number: "03",
    title: "Mission Planning & Airspace",
    description:
      "Master operational planning from mission briefing to execution. Covers airspace classification, NOTAMs, civil-military deconfliction procedures, and comprehensive risk assessment frameworks.",
    time: "~2 hours",
  },
  {
    number: "04",
    title: "Flight Operations & Procedures",
    description:
      "Execute pre-flight checks, manage in-flight emergencies, apply crew resource management principles, and follow standard handover protocols for safe and effective operations.",
    time: "~2 hours",
  },
  {
    number: "05",
    title: "ISR & Tactical Employment",
    description:
      "Apply intelligence gathering techniques, design surveillance patterns, conduct target acquisition, exploit collected data, and manage real-time feeds for tactical decision-making.",
    time: "~2 hours",
  },
  {
    number: "06",
    title: "Counter-UAS & Force Protection",
    description:
      "Assess UAS threats, understand detection and tracking systems, evaluate kinetic and non-kinetic countermeasures, and integrate electronic warfare into force protection operations.",
    time: "~2 hours",
  },
];

export default function MilitaryDroneOpsPage() {
  const heroRef = useReveal();
  const modulesRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <Nav />
      <main className="bg-void">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20" ref={heroRef}>
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                  Course
                </span>
              </div>

              <nav className="mb-6">
                <a
                  href="/academy"
                  className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                >
                  Academy
                </a>
                <span className="text-xs text-text-muted mx-2">/</span>
                <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-secondary">
                  Military Drone Ops
                </span>
              </nav>

              <h1 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
                Military Drone Operations Fundamentals
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl">
                A comprehensive foundation course covering EU drone regulations, systems
                technology, mission planning, flight operations, ISR tactics, and
                counter-UAS. Designed for defence professionals entering the military
                drone domain.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber/60"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-sm text-text-secondary">~12 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber/60"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span className="text-sm text-text-secondary">6 modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber/60"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span className="text-sm text-text-secondary">Quizzes + Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber/60"
                  >
                    <path d="M2 20h20M5 20V8l7-5 7 5v12" />
                    <path d="M9 20v-4h6v4" />
                  </svg>
                  <span className="text-sm text-text-secondary">Foundation level</span>
                </div>
              </div>

              <a
                href="mailto:info@winsemius.eu?subject=Enrol%20-%20Military%20Drone%20Ops"
                className="mt-8 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
              >
                Start Course
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section
          className="bg-surface py-16 md:py-24 border-t border-border"
          ref={modulesRef}
        >
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                  Curriculum
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
                Course Modules
              </h2>
            </div>

            <div className="mt-10 space-y-0">
              {modules.map((m, i) => (
                <div
                  key={m.number}
                  className={`reveal stagger-${Math.min(i + 1, 6)} py-8 border-b border-border group`}
                >
                  <div className="flex gap-4">
                    <span className="shrink-0 text-lg font-mono text-amber/50">
                      {m.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold tracking-[-0.01em] text-text font-display">
                          {m.title}
                        </h3>
                        <span className="shrink-0 text-xs font-mono text-text-muted uppercase tracking-[0.1em]">
                          {m.time}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 md:py-20 border-t border-border"
          ref={ctaRef}
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="reveal">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
                Ready to begin?
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Contact us to enrol in Military Drone Operations Fundamentals.
              </p>
              <a
                href="mailto:info@winsemius.eu?subject=Enrol%20-%20Military%20Drone%20Ops"
                className="mt-6 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
              >
                Enrol now
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
