"use client";

import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { militaryDroneOpsCourse } from "../../data/course-data";
import { useProgress } from "../../hooks/useProgress";

const course = militaryDroneOpsCourse;

function generateCertId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `WDA-${ts}-${rand}`;
}

export default function CertificatePage() {
  const {
    completedModules,
    quizScores,
    isEligibleForCertificate,
    loaded,
  } = useProgress(course.id, course.modules.length);

  const incompleteMods = course.modules.filter(
    (m) => !completedModules.includes(m.id)
  );
  const failedQuizzes = course.modules.filter(
    (m) => quizScores[m.id] === undefined || quizScores[m.id] < 70
  );

  const certId = typeof window !== "undefined"
    ? (sessionStorage.getItem("winsemius_cert_id") ||
        (() => {
          const id = generateCertId();
          sessionStorage.setItem("winsemius_cert_id", id);
          return id;
        })())
    : "WDA-PENDING";

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!loaded) {
    return (
      <>
        <Nav />
        <main className="bg-void min-h-screen pt-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-text-secondary">Loading...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="bg-void min-h-screen">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2">
              <Link
                href="/academy"
                className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
              >
                Academy
              </Link>
              <span className="text-xs text-text-muted">/</span>
              <Link
                href="/academy/military-drone-ops"
                className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
              >
                Military Drone Ops
              </Link>
              <span className="text-xs text-text-muted">/</span>
              <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-secondary">
                Certificate
              </span>
            </nav>

            {!isEligibleForCertificate ? (
              /* Not eligible */
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-amber" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                    Certificate
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl font-display">
                  Certificate Not Yet Available
                </h1>
                <p className="mt-4 text-base text-text-secondary">
                  Complete all modules and pass all quizzes with 70% or higher
                  to earn your certificate.
                </p>

                {incompleteMods.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-mono uppercase tracking-[0.1em] text-text-muted mb-3">
                      Incomplete Modules
                    </h3>
                    <div className="space-y-2">
                      {incompleteMods.map((m) => (
                        <Link
                          key={m.id}
                          href={`/academy/military-drone-ops/${m.id}`}
                          className="flex items-center gap-3 border border-border bg-surface p-4 hover:border-amber/30 hover:bg-surface-raised/50 transition-all duration-200"
                        >
                          <span className="text-xs font-mono text-text-muted">
                            {String(m.number).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-text">{m.title}</span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-auto text-text-muted"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {failedQuizzes.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-mono uppercase tracking-[0.1em] text-text-muted mb-3">
                      Quizzes Requiring Attention
                    </h3>
                    <div className="space-y-2">
                      {failedQuizzes.map((m) => (
                        <Link
                          key={m.id}
                          href={`/academy/military-drone-ops/${m.id}#quiz`}
                          className="flex items-center gap-3 border border-border bg-surface p-4 hover:border-amber/30 hover:bg-surface-raised/50 transition-all duration-200"
                        >
                          <span className="text-xs font-mono text-text-muted">
                            {String(m.number).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-text">{m.title}</span>
                          <span className="ml-auto text-xs font-mono text-text-muted">
                            {quizScores[m.id] !== undefined
                              ? `${quizScores[m.id]}%`
                              : "Not taken"}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Eligible — show certificate */
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-amber" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-green">
                    Earned
                  </span>
                </div>

                {/* Certificate card */}
                <div
                  id="certificate"
                  className="relative bg-[#faf8f2] border-2 border-amber/40 p-10 md:p-16 text-center print:border print:shadow-none"
                >
                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber/50" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber/50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber/50" />

                  {/* Header */}
                  <p className="text-xs font-mono uppercase tracking-[0.3em] text-amber-dim">
                    Winsemius Defence Drone Academy
                  </p>

                  <div className="mt-6 mb-8">
                    <div className="inline-block">
                      <div className="h-px w-16 bg-amber/40 mx-auto mb-6" />
                      <h1 className="text-3xl md:text-4xl font-display font-bold tracking-[-0.03em] text-[#1a1a24]">
                        Certificate of Completion
                      </h1>
                      <div className="h-px w-16 bg-amber/40 mx-auto mt-6" />
                    </div>
                  </div>

                  <p className="text-sm text-[#5c5c6e] max-w-md mx-auto">
                    This is to certify that the holder has successfully
                    completed all modules and assessments of the course
                  </p>

                  <h2 className="mt-6 text-xl md:text-2xl font-display font-semibold text-[#1a1a24]">
                    {course.title}
                  </h2>

                  <p className="mt-4 text-sm text-[#5c5c6e]">
                    covering EU drone regulations, systems technology, mission
                    planning, flight operations, ISR tactics, and counter-UAS
                    defence.
                  </p>

                  <div className="mt-10 flex flex-col items-center gap-2">
                    <p className="text-sm text-[#5c5c6e]">Date of completion</p>
                    <p className="text-base font-display font-medium text-[#1a1a24]">
                      {today}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-1">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9898a8]">
                      Certificate ID
                    </p>
                    <p className="text-xs font-mono tracking-[0.1em] text-[#5c5c6e]">
                      {certId}
                    </p>
                  </div>

                  <div className="mt-10 border-t border-[#e0ddd4] pt-6">
                    <p className="text-xs text-[#9898a8]">
                      Winsemius Group BV &middot; winsemius.eu
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
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
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                    Print Certificate
                  </button>
                  <Link
                    href="/academy/military-drone-ops"
                    className="text-sm font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                  >
                    Back to course
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
