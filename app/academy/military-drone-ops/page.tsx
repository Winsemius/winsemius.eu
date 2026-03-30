"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useReveal } from "../../hooks/useReveal";
import { militaryDroneOpsCourse } from "../data/course-data";
import { useProgress } from "../hooks/useProgress";

const course = militaryDroneOpsCourse;

const whatYouWillLearn = [
  "Navigate the full EASA regulatory framework including military exemptions",
  "Identify and compare drone systems: fixed-wing, multirotor, VTOL, and hybrid platforms",
  "Plan missions with proper airspace classification, NOTAMs, and risk assessment",
  "Execute pre-flight, in-flight, and post-flight procedures to operational standards",
  "Conduct ISR operations including surveillance patterns and real-time data exploitation",
  "Assess counter-UAS threats and apply kinetic and non-kinetic countermeasures",
  "Apply SORA methodology for operational risk assessment",
  "Understand electronic warfare fundamentals in the drone context",
];

const whoThisIsFor = [
  "Military officers and operators moving into drone-integrated roles",
  "Defence industry engineers working on UAS programmes",
  "Procurement officers evaluating drone capabilities and contracts",
  "Government policy makers overseeing defence drone regulation",
];

export default function MilitaryDroneOpsPage() {
  const heroRef = useReveal();
  const contentRef = useReveal();
  const instructorRef = useReveal();

  const [openModule, setOpenModule] = useState<number | null>(null);

  const {
    completedModules,
    quizScores,
    progress,
    isEligibleForCertificate,
    loaded,
  } = useProgress(course.id, course.modules.length);

  // Find the first incomplete module for "Continue" button
  const nextModuleId = loaded
    ? course.modules.find((m) => !completedModules.includes(m.id))?.id ?? course.modules[0].id
    : course.modules[0].id;

  const totalQuizQuestions = course.modules.reduce((sum, m) => sum + m.quiz.length, 0);

  return (
    <>
      <Nav />
      <main className="bg-void">
        {/* ─── HERO ─── */}
        <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden" ref={heroRef}>
          <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.02] via-transparent to-transparent" />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="reveal">
              {/* Breadcrumb */}
              <nav className="mb-8 flex flex-wrap items-center gap-2">
                <Link
                  href="/academy"
                  className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                >
                  Academy
                </Link>
                <span className="text-xs text-text-muted">/</span>
                <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-secondary">
                  Military Drone Ops
                </span>
              </nav>

              <span className="inline-block text-[10px] font-mono uppercase tracking-[0.15em] text-void bg-amber px-2.5 py-1 font-semibold mb-4">
                Foundation Programme
              </span>

              <h1 className="text-3xl font-bold tracking-[-0.04em] text-text md:text-5xl lg:text-6xl leading-[1.08]">
                {course.title}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-3xl">
                {course.description}
              </p>

              {/* Meta row */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  { icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z", label: `${course.modules.length} modules` },
                  { icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2", label: course.duration },
                  { icon: "M12 15l-3-3h6l-3 3zM8 8a4 4 0 1 1 8 0", label: "Certificate included", customIcon: true },
                  { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Self-paced" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {item.customIcon ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber/60">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber/60">
                        <path d={item.icon} />
                      </svg>
                    )}
                    <span className="text-sm text-text-secondary">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA + rating */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={`/academy/military-drone-ops/${nextModuleId}`}
                  className="inline-flex items-center gap-2 bg-amber px-7 py-3.5 text-sm font-mono uppercase tracking-[0.1em] text-void hover:bg-amber-bright transition-colors duration-200 font-semibold"
                >
                  {loaded && progress > 0
                    ? isEligibleForCertificate
                      ? "View Certificate"
                      : "Continue Course"
                    : "Enrol Now"}
                </Link>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={star <= 4 ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={star <= 4 ? "text-amber" : "text-amber/40"}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-text-muted">4.8/5 from 127 reviews</span>
                </div>
              </div>

              {/* Progress bar if in progress */}
              {loaded && progress > 0 && !isEligibleForCertificate && (
                <div className="mt-8 max-w-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted">
                      Your progress
                    </span>
                    <span className="text-xs font-mono text-amber">
                      {progress}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-border w-full rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber transition-all duration-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Certificate ready */}
              {loaded && isEligibleForCertificate && (
                <Link
                  href="/academy/military-drone-ops/certificate"
                  className="mt-6 inline-flex items-center gap-2 border border-green/30 bg-green/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-green hover:bg-green/10 transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  View Your Certificate
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ─── TWO COLUMN: CONTENT + SIDEBAR ─── */}
        <section className="border-t border-border py-16 md:py-24" ref={contentRef}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal grid gap-10 lg:grid-cols-[1fr_380px]">
              {/* ── LEFT COLUMN ── */}
              <div className="min-w-0">
                {/* What you'll learn */}
                <div className="border border-border bg-surface p-8">
                  <h2 className="text-xl font-display font-bold text-text mb-6">
                    What you will learn
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {whatYouWillLearn.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-sm text-text-secondary">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course curriculum */}
                <div className="mt-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-display font-bold text-text">
                      Course Curriculum
                    </h2>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-[0.1em]">
                      {course.modules.length} modules &middot; {totalQuizQuestions} questions
                    </span>
                  </div>

                  <div className="space-y-0">
                    {course.modules.map((m, i) => {
                      const isOpen = openModule === i;
                      const isComplete = completedModules.includes(m.id);
                      const score = quizScores[m.id];
                      const quizPassed = score !== undefined && score >= 70;

                      return (
                        <div key={m.id} className="border border-border border-b-0 last:border-b bg-surface">
                          <button
                            onClick={() => setOpenModule(isOpen ? null : i)}
                            className="w-full flex items-center gap-3 p-5 text-left hover:bg-surface-raised/30 transition-colors duration-200 group"
                          >
                            {/* Completion indicator */}
                            <div className={`w-8 h-8 border flex items-center justify-center shrink-0 ${isComplete ? "border-green bg-green/10" : "border-border"}`}>
                              {isComplete ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              ) : (
                                <span className="text-xs font-mono text-text-muted">
                                  {String(m.number).padStart(2, "0")}
                                </span>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm md:text-base font-display font-semibold text-text group-hover:text-amber transition-colors duration-200">
                                {m.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 mt-1">
                                <span className="text-xs text-text-muted">
                                  {m.sections.length} sections + quiz
                                </span>
                                <span className="text-xs text-text-muted">&middot;</span>
                                <span className="text-xs text-text-muted">{m.duration}</span>
                                {loaded && score !== undefined && (
                                  <>
                                    <span className="text-xs text-text-muted">&middot;</span>
                                    <span className={`text-xs font-mono ${quizPassed ? "text-green" : "text-red"}`}>
                                      Quiz: {score}%
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>

                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`text-text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 border-t border-border">
                              <div className="mt-4 space-y-2">
                                {m.sections.map((s, si) => (
                                  <Link
                                    key={si}
                                    href={`/academy/military-drone-ops/${m.id}`}
                                    className="flex items-center gap-3 py-2 px-3 text-sm text-text-secondary hover:text-text hover:bg-surface-raised/30 transition-colors duration-200"
                                  >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-muted shrink-0">
                                      <circle cx="12" cy="12" r="10" />
                                      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                                    </svg>
                                    {s.title}
                                  </Link>
                                ))}
                                <Link
                                  href={`/academy/military-drone-ops/${m.id}#quiz`}
                                  className="flex items-center gap-3 py-2 px-3 text-sm text-amber hover:bg-surface-raised/30 transition-colors duration-200"
                                >
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber shrink-0">
                                    <polyline points="9 11 12 14 22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                  </svg>
                                  Module Quiz ({m.quiz.length} questions)
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mt-10">
                  <h2 className="text-xl font-display font-bold text-text mb-4">
                    Requirements
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Basic computer literacy. No prior drone or military experience required. This foundation programme
                    is designed to take you from zero to a comprehensive understanding of military drone operations.
                  </p>
                </div>

                {/* Who this course is for */}
                <div className="mt-10">
                  <h2 className="text-xl font-display font-bold text-text mb-4">
                    Who this course is for
                  </h2>
                  <ul className="space-y-3">
                    {whoThisIsFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0 mt-0.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── RIGHT COLUMN (STICKY SIDEBAR) ── */}
              <div className="hidden lg:block">
                <div className="sticky top-28">
                  <div className="border border-amber/20 bg-surface p-8">
                    <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted mb-2">
                      Course Investment
                    </p>
                    <p className="text-3xl font-display font-bold text-text">
                      Contact for pricing
                    </p>
                    <p className="mt-1 text-xs text-text-muted">Group discounts for 5+ seats</p>

                    <Link
                      href={
                        loaded && isEligibleForCertificate
                          ? "/academy/military-drone-ops/certificate"
                          : `/academy/military-drone-ops/${nextModuleId}`
                      }
                      className="mt-6 block w-full bg-amber text-center py-3.5 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
                    >
                      {loaded && progress > 0
                        ? isEligibleForCertificate
                          ? "View Certificate"
                          : "Continue Course"
                        : "Enrol Now"}
                    </Link>

                    <p className="text-center text-xs text-text-muted mt-3">
                      30-day money-back guarantee
                    </p>

                    {/* Progress in sidebar */}
                    {loaded && progress > 0 && !isEligibleForCertificate && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted">
                            Progress
                          </span>
                          <span className="text-xs font-mono text-amber">{progress}%</span>
                        </div>
                        <div className="h-1.5 bg-border w-full rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber transition-all duration-500 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <Link
                          href={`/academy/military-drone-ops/${nextModuleId}`}
                          className="mt-4 block w-full border border-amber/30 bg-amber/5 text-center py-2.5 text-xs font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
                        >
                          Continue Learning
                        </Link>
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-border space-y-3">
                      <p className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted mb-3">
                        This course includes
                      </p>
                      {[
                        { icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z", text: `${course.modules.length} in-depth modules` },
                        { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", text: `${totalQuizQuestions} graded quiz questions` },
                        { icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", text: "Certificate of completion", cert: true },
                        { icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2", text: "12 months access" },
                        { icon: "M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z", text: "Mobile-friendly" },
                        { icon: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3", text: "Downloadable resources" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          {item.cert ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0">
                              <circle cx="12" cy="8" r="7" />
                              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0">
                              <path d={item.icon} />
                            </svg>
                          )}
                          <span className="text-sm text-text-secondary">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile pricing card (visible only on mobile) */}
        <section className="lg:hidden border-t border-border py-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="border border-amber/20 bg-surface p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted">Course Investment</p>
                  <p className="text-2xl font-display font-bold text-text mt-1">Contact for pricing</p>
                </div>
              </div>
              <Link
                href={
                  loaded && isEligibleForCertificate
                    ? "/academy/military-drone-ops/certificate"
                    : `/academy/military-drone-ops/${nextModuleId}`
                }
                className="block w-full bg-amber text-center py-3.5 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
              >
                {loaded && progress > 0
                  ? isEligibleForCertificate
                    ? "View Certificate"
                    : "Continue Course"
                  : "Enrol Now"}
              </Link>
              <p className="text-center text-xs text-text-muted mt-3">30-day money-back guarantee</p>
            </div>
          </div>
        </section>

        {/* ─── INSTRUCTOR ─── */}
        <section className="bg-surface py-16 md:py-24 border-t border-border" ref={instructorRef}>
          <div className="mx-auto max-w-4xl px-6">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-amber" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber">
                  Created By
                </span>
              </div>
              <h2 className="text-2xl font-display font-bold text-text md:text-3xl">
                Winsemius Group
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary max-w-2xl">
                Winsemius Group is a European defence technology broker specialising in drone systems,
                procurement strategy, and regulatory compliance. Our training content is developed by
                practitioners with direct experience in military drone programmes across NATO member states.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                {["EASA-aligned curriculum", "NATO STANAG frameworks", "Quarterly content updates"].map(
                  (point, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm text-text-secondary">{point}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
