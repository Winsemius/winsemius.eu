"use client";

import { use, useState, useCallback } from "react";
import Link from "next/link";
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
      const finalCorrect = selected === q.correctIndex ? correct : correct;
      // correct is already updated by handleSelect
      const pct = Math.round((correct / total) * 100);
      setFinished(true);
      onComplete(pct);
    }
  };

  // Retry
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
        <h3 className="text-xl font-display font-semibold text-text">
          Module Quiz
        </h3>
        <p className="mt-3 text-sm text-text-secondary">
          {total} questions. You need 70% or higher to pass.
        </p>
        {existingScore !== undefined && (
          <p className="mt-2 text-sm">
            <span className="text-text-muted">Previous score: </span>
            <span
              className={
                existingScore >= 70 ? "text-green font-semibold" : "text-red font-semibold"
              }
            >
              {existingScore}%
            </span>
          </p>
        )}
        <button
          onClick={() => setStarted(true)}
          className="mt-6 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
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
        <div className="mt-6 flex items-center gap-4">
          <div
            className={`text-5xl font-display font-bold ${
              passed ? "text-green" : "text-red"
            }`}
          >
            {scorePercent}%
          </div>
          <div>
            <p className="text-lg font-semibold text-text">
              {passed ? "Passed" : "Not passed"}
            </p>
            <p className="text-sm text-text-secondary">
              {correct} of {total} correct
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
              className={`w-2 h-2 ${
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
              optClass =
                "border border-green bg-green/5 p-4 text-sm text-green";
            } else if (idx === selected && idx !== q.correctIndex) {
              optClass = "border border-red bg-red/5 p-4 text-sm text-red";
            } else {
              optClass =
                "border border-border bg-void p-4 text-sm text-text-muted opacity-50";
            }
          } else if (idx === selected) {
            optClass =
              "border border-amber bg-amber/5 p-4 text-sm text-amber";
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className={`block w-full text-left ${optClass}`}
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
          className="mt-6 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
        >
          {currentQ + 1 < total ? "Next Question" : "Finish Quiz"}
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
        </button>
      )}
    </div>
  );
}

// ── Main Module Page ──────────────────────────────────────────
export default function ModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = use(params);
  const mod = course.modules.find((m) => m.id === moduleId);
  const {
    completedModules,
    quizScores,
    markModuleComplete,
    saveQuizScore,
    loaded,
  } = useProgress(course.id, course.modules.length);

  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({});

  const toggleSection = useCallback((idx: number) => {
    setExpandedSections((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }, []);

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
  const prevMod = modIndex > 0 ? course.modules[modIndex - 1] : null;
  const nextMod =
    modIndex < course.modules.length - 1
      ? course.modules[modIndex + 1]
      : null;

  const isComplete = completedModules.includes(mod.id);
  const quizScore = quizScores[mod.id];

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
                Module {mod.number}
              </span>
            </nav>

            {/* Progress bar */}
            <div className="mb-8 flex items-center gap-3">
              {course.modules.map((m, i) => (
                <div
                  key={m.id}
                  className={`h-1 flex-1 ${
                    m.id === mod.id
                      ? "bg-amber"
                      : completedModules.includes(m.id)
                      ? "bg-amber/40"
                      : "bg-border"
                  }`}
                  title={`Module ${m.number}: ${m.title}`}
                />
              ))}
              <span className="text-xs font-mono text-text-muted">
                {mod.number}/{course.modules.length}
              </span>
            </div>

            {/* Module header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                Module {String(mod.number).padStart(2, "0")}
              </span>
              {isComplete && (
                <span className="ml-auto text-xs font-mono uppercase tracking-[0.1em] text-green flex items-center gap-1.5">
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
            </div>

            <h1 className="text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl font-display">
              {mod.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {mod.description}
            </p>
            <p className="mt-2 text-xs font-mono text-text-muted uppercase tracking-[0.1em]">
              {mod.duration} &middot; {mod.sections.length} sections &middot;{" "}
              {mod.quiz.length} quiz questions
            </p>

            {/* Content sections */}
            <div className="mt-12 space-y-4">
              {mod.sections.map((section, idx) => {
                const isOpen = expandedSections[idx] ?? idx === 0;
                return (
                  <div
                    key={idx}
                    className="border border-border bg-surface"
                  >
                    <button
                      onClick={() => toggleSection(idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-raised/30 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-text-muted">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-base font-semibold text-text font-display">
                          {section.title}
                        </h2>
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
                        className={`text-text-muted shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-border">
                        <div
                          className="mt-6 course-content text-sm leading-relaxed text-text-secondary
                            [&_h3]:text-lg [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-text [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:first:mt-0
                            [&_p]:mb-4 [&_p]:last:mb-0
                            [&_ul]:mb-4 [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-2
                            [&_li]:text-text-secondary
                            [&_strong]:text-text [&_strong]:font-medium"
                          dangerouslySetInnerHTML={{
                            __html: section.content,
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mark complete button */}
            {loaded && !isComplete && (
              <div className="mt-8">
                <button
                  onClick={() => markModuleComplete(mod.id)}
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Mark as Complete
                </button>
              </div>
            )}

            {/* Quiz */}
            <div className="mt-12" id="quiz">
              <QuizSection
                moduleId={mod.id}
                quiz={mod.quiz}
                existingScore={quizScore}
                onComplete={(score) => saveQuizScore(mod.id, score)}
              />
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
              {prevMod ? (
                <Link
                  href={`/academy/military-drone-ops/${prevMod.id}`}
                  className="group flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
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
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  <span>
                    <span className="hidden sm:inline">Module {prevMod.number}: </span>
                    Previous
                  </span>
                </Link>
              ) : (
                <Link
                  href="/academy/military-drone-ops"
                  className="group flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
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
                  <span>
                    <span className="hidden sm:inline">Module {nextMod.number}: </span>
                    Next
                  </span>
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
              ) : (
                <Link
                  href="/academy/military-drone-ops/certificate"
                  className="group flex items-center gap-2 text-sm font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200"
                >
                  View Certificate
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
      </main>
      <Footer />
    </>
  );
}
