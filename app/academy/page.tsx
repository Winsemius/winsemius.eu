"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const stats = [
  { value: "85%", label: "of modern military operations involve drone-assisted ISR" },
  { value: "€2.1B", label: "EU investment in military drone programmes by 2027" },
  { value: "12 weeks", label: "average time to operational readiness with structured training" },
];

const modules = [
  {
    number: "01",
    title: "EU Drone Regulations & Military Exemptions",
    description:
      "EASA framework, A1/A3/A2 categories, military-specific exemptions, SORA methodology.",
  },
  {
    number: "02",
    title: "Drone Systems & Technology",
    description:
      "Fixed-wing vs multirotor, VTOL, payloads, sensors, communication links, EW considerations.",
  },
  {
    number: "03",
    title: "Mission Planning & Airspace",
    description:
      "Operational planning, airspace classification, NOTAMs, deconfliction, risk assessment.",
  },
  {
    number: "04",
    title: "Flight Operations & Procedures",
    description:
      "Pre-flight checks, emergency procedures, crew resource management, handover protocols.",
  },
  {
    number: "05",
    title: "ISR & Tactical Employment",
    description:
      "Intelligence gathering, surveillance patterns, target acquisition, data exploitation, real-time feeds.",
  },
  {
    number: "06",
    title: "Counter-UAS & Force Protection",
    description:
      "Threat assessment, detection systems, kinetic/non-kinetic countermeasures, electronic warfare.",
  },
];

const steps = [
  { label: "Enrol", description: "Register and access course materials." },
  { label: "Learn", description: "Work through modules at your own pace." },
  { label: "Test", description: "Complete quizzes to validate knowledge." },
  { label: "Certify", description: "Receive your Winsemius Defence Drone Certificate." },
];

export default function AcademyPage() {
  const heroRef = useReveal();
  const whyRef = useReveal();
  const coursesRef = useReveal();
  const modulesRef = useReveal();
  const howRef = useReveal();
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
                  Drone Academy
                </span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-text md:text-6xl">
                Military Drone Operations Training
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl">
                Comprehensive training programme for defence professionals. From EU
                regulations to tactical deployment — master military drone operations.
              </p>
              <a
                href="#courses"
                className="mt-8 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
              >
                Explore Courses
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

        {/* Why Section */}
        <section
          className="bg-surface py-16 md:py-20 border-t border-b border-border"
          ref={whyRef}
        >
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
                Why Drone Training Matters for Defence
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`reveal stagger-${i + 1} border border-border p-6`}
                >
                  <p className="text-3xl font-display font-bold text-amber">{s.value}</p>
                  <p className="mt-2 text-sm text-text-secondary">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 md:py-24" ref={coursesRef}>
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                  Programmes
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
                Training Programmes
              </h2>
            </div>

            <a
              href="/academy/military-drone-ops"
              className="reveal stagger-1 mt-10 block border border-border bg-surface p-8 transition-all duration-300 hover:border-amber/30 hover:bg-surface-raised/50 group relative"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-amber transition-all duration-300 group-hover:w-full" />
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-mono tracking-[0.1em] text-amber uppercase">
                  Foundation
                </span>
                <span className="text-xs text-text-muted">·</span>
                <span className="text-xs font-mono tracking-[0.05em] text-text-muted uppercase">
                  ~12 hours
                </span>
                <span className="text-xs text-text-muted">·</span>
                <span className="text-xs font-mono tracking-[0.05em] text-text-muted uppercase">
                  6 modules
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-text font-display group-hover:text-amber transition-colors duration-300">
                Military Drone Operations Fundamentals
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                From EU regulations and drone systems to tactical ISR and counter-UAS —
                everything a defence professional needs to understand military drone
                operations. Includes quizzes and certificate on completion.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-text-muted group-hover:text-amber transition-colors duration-300">
                View course
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
              </div>
            </a>
          </div>
        </section>

        {/* Modules Overview */}
        <section
          className="bg-surface py-16 md:py-24 border-t border-border"
          ref={modulesRef}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                  Curriculum
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
                6 Modules. One Complete Programme.
              </h2>
            </div>

            <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {modules.map((m, i) => (
                <div
                  key={m.number}
                  className={`reveal stagger-${Math.min(i + 1, 6)} bg-void p-8`}
                >
                  <span className="text-xs font-mono text-text-muted">{m.number}</span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.01em] text-text font-display">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 border-t border-border" ref={howRef}>
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
                How it works
              </h2>
            </div>
            <div className="mt-10 space-y-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`reveal stagger-${i + 1} flex gap-4`}
                >
                  <span className="shrink-0 text-lg font-mono text-amber/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-text">{step.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="bg-surface py-16 md:py-20 border-t border-border"
          ref={ctaRef}
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="reveal">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Get in touch to enrol or learn more about our training programmes.
              </p>
              <a
                href="mailto:info@winsemius.eu?subject=Drone%20Academy%20enquiry"
                className="mt-6 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
              >
                Contact us
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
