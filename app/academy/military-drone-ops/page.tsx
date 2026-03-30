"use client";

import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useReveal } from "../../hooks/useReveal";
import { militaryDroneOpsCourse } from "../data/course-data";
import { useProgress } from "../hooks/useProgress";

const course = militaryDroneOpsCourse;

export default function MilitaryDroneOpsPage() {
  const heroRef = useReveal();
  const modulesRef = useReveal();
  const ctaRef = useReveal();

  const {
    completedModules,
    quizScores,
    progress,
    isEligibleForCertificate,
    loaded,
  } = useProgress(course.id, course.modules.length);

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
                <Link
                  href="/academy"
                  className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                >
                  Academy
                </Link>
                <span className="text-xs text-text-muted mx-2">/</span>
                <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-secondary">
                  Military Drone Ops
                </span>
              </nav>

              <h1 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
                {course.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl">
                {course.description}
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
                  <span className="text-sm text-text-secondary">
                    {course.duration}
                  </span>
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
                  <span className="text-sm text-text-secondary">
                    {course.modules.length} modules
                  </span>
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
                  <span className="text-sm text-text-secondary">
                    Quizzes + Certificate
                  </span>
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
                  <span className="text-sm text-text-secondary">
                    {course.level} level
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              {loaded && progress > 0 && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted">
                      Progress
                    </span>
                    <span className="text-xs font-mono text-amber">
                      {progress}%
                    </span>
                  </div>
                  <div className="h-1 bg-border w-full">
                    <div
                      className="h-1 bg-amber transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Certificate link */}
              {loaded && isEligibleForCertificate && (
                <Link
                  href="/academy/military-drone-ops/certificate"
                  className="mt-6 inline-flex items-center gap-2 border border-green/30 bg-green/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-green hover:bg-green/10 transition-colors duration-200"
                >
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  View Certificate
                </Link>
              )}

              {loaded && !isEligibleForCertificate && (
                <Link
                  href={`/academy/military-drone-ops/${course.modules[0].id}`}
                  className="mt-8 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
                >
                  {progress > 0 ? "Continue Course" : "Start Course"}
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
                </Link>
              )}
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
              {course.modules.map((m, i) => {
                const isComplete = completedModules.includes(m.id);
                const score = quizScores[m.id];
                const quizPassed = score !== undefined && score >= 70;

                return (
                  <Link
                    key={m.id}
                    href={`/academy/military-drone-ops/${m.id}`}
                    className={`reveal stagger-${Math.min(
                      i + 1,
                      6
                    )} block py-8 border-b border-border group transition-all duration-200 hover:bg-surface-raised/30`}
                  >
                    <div className="flex gap-4">
                      <span className="shrink-0 text-lg font-mono text-amber/50">
                        {String(m.number).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <h3 className="text-lg font-semibold tracking-[-0.01em] text-text font-display group-hover:text-amber transition-colors duration-200">
                            {m.title}
                          </h3>
                          <div className="shrink-0 flex items-center gap-3">
                            <span className="text-xs font-mono text-text-muted uppercase tracking-[0.1em]">
                              {m.duration}
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {m.description}
                        </p>

                        {/* Progress indicators */}
                        {loaded && (isComplete || score !== undefined) && (
                          <div className="mt-3 flex flex-wrap items-center gap-4">
                            {isComplete && (
                              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.1em] text-green">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Complete
                              </span>
                            )}
                            {score !== undefined && (
                              <span
                                className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.1em] ${
                                  quizPassed ? "text-green" : "text-red"
                                }`}
                              >
                                Quiz: {score}%
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
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
                Work through all six modules, pass the quizzes, and earn your
                Winsemius Defence Drone Certificate.
              </p>
              <Link
                href={`/academy/military-drone-ops/${course.modules[0].id}`}
                className="mt-6 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
              >
                {progress > 0 ? "Continue Learning" : "Start Module 1"}
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
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
