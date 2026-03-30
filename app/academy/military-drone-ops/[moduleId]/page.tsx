"use client";

import { use, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { militaryDroneOpsCourse } from "../../data/course-data";
import { useProgress } from "../../hooks/useProgress";

const course = militaryDroneOpsCourse;

// ── Quiz Component ────────────────────────────────────────────
function QuizSection({
  moduleId,
  quiz,
  existingScore,
  onComplete,
}: {
  moduleId: string;
  quiz: typeof course.modules[0]["quiz"];
  existingScore: number | undefined;
  onComplete: (score: number) => void;
}) {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const q = quiz[currentQ];
  const total = quiz.length;
  const scorePercent = finished ? Math.round((correct / total) * 100) : 0;
  const passed = scorePercent >= 70;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correctIndex) {
      setCorrect((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 < total) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const pct = Math.round((correct / total) * 100);
      setFinished(true);
      onComplete(pct);
    }
  };

  const handleRetry = () => {
    setStarted(true);
    setCurrentQ(0);
    setSelected(null);
    setCorrect(0);
    setFinished(false);
    setAnswered(false);
  };

  if (!started) {
    return (
      <div className="border border-border bg-surface p-8">
        <div className="flex items-center gap-3 mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
          <h3 className="text-xl font-display font-semibold text-text">
            Module Quiz
          </h3>
        </div>
        <p className="text-sm text-text-secondary">
          {total} questions. You need 70% or higher to pass. Your highest score is recorded.
        </p>
        {existingScore !== undefined && (
          <p className="mt-3 text-sm">
            <span className="text-text-muted">Previous best: </span>
            <span className={existingScore >= 70 ? "text-green font-semibold" : "text-red font-semibold"}>
              {existingScore}%
            </span>
            {existingScore >= 70 && (
              <span className="ml-2 text-xs font-mono text-green uppercase tracking-[0.1em]">Passed</span>
            )}
          </p>
        )}
        <button
          onClick={() => setStarted(true)}
          className="mt-6 inline-flex items-center gap-2 bg-amber px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
        >
          {existingScore !== undefined ? "Retake Quiz" : "Start Quiz"}
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="border border-border bg-surface p-8">
        <h3 className="text-xl font-display font-semibold text-text">
          Quiz Complete
        </h3>
        <div className="mt-6 flex items-center gap-6">
          <div className={`text-5xl font-display font-bold ${passed ? "text-green" : "text-red"}`}>
            {scorePercent}%
          </div>
          <div>
            <p className="text-lg font-semibold text-text">
              {passed ? "Passed" : "Not passed"}
            </p>
            <p className="text-sm text-text-secondary">
              {correct} of {total} correct{!passed && " — 70% required"}
            </p>
          </div>
        </div>
        {!passed && (
          <button
            onClick={handleRetry}
            className="mt-6 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
          >
            Retry Quiz
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="border border-border bg-surface p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
          Question {currentQ + 1} of {total}
        </span>
        <div className="flex gap-1">
          {quiz.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < currentQ
                  ? "bg-amber"
                  : i === currentQ
                  ? "bg-amber/50"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <h4 className="text-lg font-display font-semibold text-text leading-snug">
        {q.question}
      </h4>

      <div className="mt-6 space-y-3">
        {q.options.map((opt, idx) => {
          let optClass =
            "border border-border bg-void p-4 text-sm text-text-secondary cursor-pointer hover:border-amber/30 hover:bg-surface-raised/50 transition-all duration-200";
          if (answered) {
            if (idx === q.correctIndex) {
              optClass = "border border-green bg-green/5 p-4 text-sm text-green";
            } else if (idx === selected && idx !== q.correctIndex) {
              optClass = "border border-red bg-red/5 p-4 text-sm text-red";
            } else {
              optClass = "border border-border bg-void p-4 text-sm text-text-muted opacity-50";
            }
          } else if (idx === selected) {
            optClass = "border border-amber bg-amber/5 p-4 text-sm text-amber";
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className={`block w-full text-left rounded-none ${optClass}`}
            >
              <span className="font-mono text-xs mr-3 opacity-50">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-6 border-l-2 border-amber/30 pl-4">
          <p className="text-sm text-text-secondary">{q.explanation}</p>
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="mt-6 inline-flex items-center gap-2 bg-amber px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
        >
          {currentQ + 1 < total ? "Next Question" : "Finish Quiz"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ── Sidebar Nav Item ──────────────────────────────────────────
function SidebarModule({
  m,
  isCurrent,
  isComplete,
  score,
}: {
  m: typeof course.modules[0];
  isCurrent: boolean;
  isComplete: boolean;
  score: number | undefined;
}) {
  return (
    <Link
      href={`/academy/military-drone-ops/${m.id}`}
      className={`block py-3 px-4 text-sm transition-colors duration-200 border-l-2 ${
        isCurrent
          ? "border-amber bg-amber/5 text-text"
          : isComplete
          ? "border-green/40 text-text-secondary hover:text-text hover:bg-surface-raised/30"
          : "border-transparent text-text-muted hover:text-text hover:bg-surface-raised/30"
      }`}
    >
      <div className="flex items-center gap-3">
        {isComplete ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green shrink-0">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <span className="text-[10px] font-mono text-text-muted w-[14px] text-center shrink-0">
            {String(m.number).padStart(2, "0")}
          </span>
        )}
        <span className="truncate">{m.title}</span>
      </div>
      {score !== undefined && (
        <div className="ml-[26px] mt-1">
          <span className={`text-[10px] font-mono uppercase tracking-[0.1em] ${score >= 70 ? "text-green" : "text-red"}`}>
            Quiz: {score}%
          </span>
        </div>
      )}
    </Link>
  );
}

// ── Main Module Page ──────────────────────────────────────────
export default function ModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = use(params);
  const router = useRouter();
  const mod = course.modules.find((m) => m.id === moduleId);
  const {
    completedModules,
    quizScores,
    markModuleComplete,
    saveQuizScore,
    loaded,
  } = useProgress(course.id, course.modules.length);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!mod) {
    return (
      <>
        <Nav />
        <main className="bg-void min-h-screen pt-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-3xl font-display font-bold text-text">
              Module not found
            </h1>
            <p className="mt-4 text-text-secondary">
              The requested module does not exist.
            </p>
            <Link
              href="/academy/military-drone-ops"
              className="mt-6 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:text-amber-bright transition-colors"
            >
              Back to course
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const modIndex = course.modules.findIndex((m) => m.id === moduleId);
  const nextMod = modIndex < course.modules.length - 1 ? course.modules[modIndex + 1] : null;
  const isComplete = completedModules.includes(mod.id);
  const quizScore = quizScores[mod.id];

  const handleMarkCompleteAndContinue = () => {
    if (!isComplete) {
      markModuleComplete(mod.id);
    }
    if (nextMod) {
      router.push(`/academy/military-drone-ops/${nextMod.id}`);
    } else {
      router.push("/academy/military-drone-ops/certificate");
    }
  };

  return (
    <>
      <Nav />
      <main className="bg-void min-h-screen">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-amber text-void flex items-center justify-center shadow-lg hover:bg-amber-bright transition-colors duration-200"
          aria-label="Toggle course navigation"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {sidebarOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-void/80 backdrop-blur-sm z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="pt-[72px] lg:flex">
          {/* ── SIDEBAR ── */}
          <aside
            className={`fixed top-[72px] bottom-0 left-0 w-80 bg-surface border-r border-border z-30 overflow-y-auto transition-transform duration-300 lg:translate-x-0 lg:sticky lg:top-[72px] lg:h-[calc(100vh-72px)] lg:shrink-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-5 border-b border-border">
              <Link
                href="/academy/military-drone-ops"
                className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200 flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Course Overview
              </Link>
              <h2 className="mt-3 text-sm font-display font-semibold text-text leading-snug">
                Military Drone Operations Fundamentals
              </h2>

              {/* Overall progress */}
              {loaded && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-text-muted">
                      {completedModules.length}/{course.modules.length} modules
                    </span>
                    <span className="text-[10px] font-mono text-amber">
                      {Math.round((completedModules.length / course.modules.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-1 bg-border w-full rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber transition-all duration-500 rounded-full"
                      style={{ width: `${(completedModules.length / course.modules.length) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <nav className="py-2">
              {course.modules.map((m) => (
                <SidebarModule
                  key={m.id}
                  m={m}
                  isCurrent={m.id === moduleId}
                  isComplete={completedModules.includes(m.id)}
                  score={quizScores[m.id]}
                />
              ))}

              {/* Certificate link */}
              <div className="mt-2 border-t border-border pt-2">
                <Link
                  href="/academy/military-drone-ops/certificate"
                  className="block py-3 px-4 text-sm text-text-muted hover:text-amber hover:bg-surface-raised/30 transition-colors duration-200 border-l-2 border-transparent"
                >
                  <div className="flex items-center gap-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                    <span>Certificate</span>
                  </div>
                </Link>
              </div>
            </nav>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 min-w-0">
            <div className="mx-auto max-w-4xl px-6 py-10 md:py-16 lg:px-12">
              {/* Module header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-void bg-amber px-2.5 py-1 font-semibold">
                    Module {String(mod.number).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-[0.1em]">
                    {mod.duration} &middot; {mod.sections.length} sections
                  </span>
                  {loaded && isComplete && (
                    <span className="ml-auto text-xs font-mono uppercase tracking-[0.1em] text-green flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Completed
                    </span>
                  )}
                </div>

                <h1 className="text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl font-display">
                  {mod.title}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {mod.description}
                </p>

                {/* Progress bar */}
                <div className="mt-6 flex items-center gap-3">
                  {course.modules.map((m) => (
                    <div
                      key={m.id}
                      className={`h-1 flex-1 rounded-full ${
                        m.id === mod.id
                          ? "bg-amber"
                          : completedModules.includes(m.id)
                          ? "bg-amber/40"
                          : "bg-border"
                      }`}
                      title={`Module ${m.number}: ${m.title}`}
                    />
                  ))}
                  <span className="text-xs font-mono text-text-muted shrink-0">
                    {mod.number}/{course.modules.length}
                  </span>
                </div>
              </div>

              {/* ── Content Sections (all visible, like a lesson) ── */}
              <div className="space-y-12">
                {mod.sections.map((section, idx) => (
                  <article key={idx} className="relative">
                    {/* Section number accent */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 border border-amber/20 bg-amber/5 flex items-center justify-center shrink-0">
                        <span className="text-xs font-mono text-amber">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="text-xl font-display font-semibold text-text">
                        {section.title}
                      </h2>
                    </div>
                    <div
                      className="course-content text-[15px] leading-[1.75] text-text-secondary pl-12
                        [&_h3]:text-lg [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-text [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:first:mt-0
                        [&_p]:mb-5 [&_p]:last:mb-0
                        [&_ul]:mb-5 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2.5
                        [&_li]:text-text-secondary [&_li]:leading-[1.7]
                        [&_strong]:text-text [&_strong]:font-medium"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </article>
                ))}
              </div>

              {/* ── Divider before quiz ── */}
              <div className="my-14 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
                  Assessment
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* ── Quiz ── */}
              <div id="quiz">
                <QuizSection
                  moduleId={mod.id}
                  quiz={mod.quiz}
                  existingScore={quizScore}
                  onComplete={(score) => saveQuizScore(mod.id, score)}
                />
              </div>

              {/* ── Mark Complete & Continue ── */}
              <div className="mt-10">
                <button
                  onClick={handleMarkCompleteAndContinue}
                  className="inline-flex items-center gap-3 bg-amber px-8 py-4 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
                >
                  {isComplete
                    ? nextMod
                      ? "Next Module"
                      : "View Certificate"
                    : nextMod
                    ? "Mark Complete & Continue"
                    : "Mark Complete & View Certificate"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* ── Bottom Navigation ── */}
              <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                {modIndex > 0 ? (
                  <Link
                    href={`/academy/military-drone-ops/${course.modules[modIndex - 1].id}`}
                    className="group flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Module {course.modules[modIndex - 1].number}:</span> Previous
                  </Link>
                ) : (
                  <Link
                    href="/academy/military-drone-ops"
                    className="group flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Course Overview
                  </Link>
                )}

                {nextMod ? (
                  <Link
                    href={`/academy/military-drone-ops/${nextMod.id}`}
                    className="group flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                  >
                    Next <span className="hidden sm:inline">: Module {nextMod.number}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href="/academy/military-drone-ops/certificate"
                    className="group flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                  >
                    View Certificate
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
