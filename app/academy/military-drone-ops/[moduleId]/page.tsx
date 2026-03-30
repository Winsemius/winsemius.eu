"use client";

import { use, useState, useCallback, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { militaryDroneOpsCourse } from "../../data/course-data";
import { useProgress } from "../../hooks/useProgress";

const course = militaryDroneOpsCourse;

// Build section counts map for auto-complete
const moduleSectionCounts: Record<string, number> = {};
course.modules.forEach((m) => {
  moduleSectionCounts[m.id] = m.sections.length;
});

// ── Inline Quick Check ──────────────────────────────────────
function QuickCheck({
  question,
  options,
  correctIndex,
  explanation,
}: {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === correctIndex;

  return (
    <div className="my-8 border border-amber/20 bg-amber/[0.03] p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-4">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span className="text-xs font-mono uppercase tracking-[0.15em] text-amber font-semibold">
          Quick Check
        </span>
      </div>
      <p className="text-[15px] font-display font-medium text-text leading-snug mb-5">
        {question}
      </p>
      <div className="space-y-2.5">
        {options.map((opt, idx) => {
          let cls =
            "block w-full text-left px-4 py-3 text-sm border transition-all duration-200 ";
          if (!answered) {
            cls +=
              "border-border bg-void/50 text-text-secondary cursor-pointer hover:border-amber/30 hover:bg-surface-raised/50";
          } else if (idx === correctIndex) {
            cls += "border-green bg-green/5 text-green";
          } else if (idx === selected) {
            cls += "border-red bg-red/5 text-red";
          } else {
            cls += "border-border bg-void/50 text-text-muted opacity-40";
          }
          return (
            <button
              key={idx}
              onClick={() => !answered && setSelected(idx)}
              disabled={answered}
              className={cls}
            >
              <span className="font-mono text-xs mr-2.5 opacity-50">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-5 flex items-start gap-3">
          {isCorrect ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green shrink-0 mt-0.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red shrink-0 mt-0.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
          <p className="text-sm text-text-secondary leading-relaxed">
            {isCorrect ? "Correct! " : "Not quite. "}
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Quiz Step (one question at a time, improved look) ───────
function QuizStep({
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
  const [transitioning, setTransitioning] = useState(false);

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
      setTransitioning(true);
      setTimeout(() => {
        setCurrentQ((c) => c + 1);
        setSelected(null);
        setAnswered(false);
        setTransitioning(false);
      }, 200);
    } else {
      const pct = Math.round(
        (correct + (selected === q.correctIndex ? 0 : 0)) / total * 100
      );
      // Recalculate including last answer
      const finalCorrect = correct;
      const finalPct = Math.round((finalCorrect / total) * 100);
      setFinished(true);
      onComplete(finalPct);
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
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 border-2 border-amber/30 bg-amber/5 flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber"
          >
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold text-text mb-3">
          Module Assessment
        </h3>
        <p className="text-text-secondary max-w-md mx-auto mb-2">
          Test your understanding of this module with {total} questions.
          You need 70% or higher to pass.
        </p>
        {existingScore !== undefined && (
          <p className="mb-6">
            <span className="text-text-muted text-sm">Previous best: </span>
            <span
              className={`text-sm font-mono font-semibold ${
                existingScore >= 70 ? "text-green" : "text-red"
              }`}
            >
              {existingScore}%
            </span>
            {existingScore >= 70 && (
              <span className="ml-2 text-xs font-mono text-green uppercase tracking-[0.1em]">
                Passed
              </span>
            )}
          </p>
        )}
        <button
          onClick={() => setStarted(true)}
          className="inline-flex items-center gap-2 bg-amber px-8 py-4 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
        >
          {existingScore !== undefined ? "Retake Quiz" : "Start Quiz"}
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
      </div>
    );
  }

  if (finished) {
    return (
      <div className="text-center py-12">
        <div
          className={`text-6xl font-display font-bold mb-4 ${
            passed ? "text-green" : "text-red"
          }`}
        >
          {scorePercent}%
        </div>
        <h3 className="text-2xl font-display font-bold text-text mb-2">
          {passed ? "Assessment Passed" : "Assessment Not Passed"}
        </h3>
        <p className="text-text-secondary mb-6">
          {correct} of {total} correct
          {!passed && " — 70% required to pass"}
        </p>
        {!passed && (
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-8 py-4 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
          >
            Retry Assessment
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`transition-opacity duration-200 ${
        transitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Quiz progress */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
          Question {currentQ + 1} of {total}
        </span>
        <div className="flex gap-1.5">
          {quiz.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i < currentQ
                  ? "bg-amber"
                  : i === currentQ
                  ? "bg-amber shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <h4 className="text-xl font-display font-semibold text-text leading-snug mb-8">
        {q.question}
      </h4>

      <div className="space-y-3">
        {q.options.map((opt, idx) => {
          let optClass =
            "block w-full text-left px-5 py-4 text-[15px] border transition-all duration-200 ";
          if (answered) {
            if (idx === q.correctIndex) {
              optClass +=
                "border-green bg-green/5 text-green";
            } else if (idx === selected && idx !== q.correctIndex) {
              optClass += "border-red bg-red/5 text-red";
            } else {
              optClass +=
                "border-border bg-void/50 text-text-muted opacity-40";
            }
          } else {
            optClass +=
              "border-border bg-void/50 text-text-secondary cursor-pointer hover:border-amber/30 hover:bg-surface-raised/50";
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className={optClass}
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
        <div className="mt-6 border-l-2 border-amber/30 pl-4 py-1">
          <p className="text-sm text-text-secondary leading-relaxed">
            {q.explanation}
          </p>
        </div>
      )}

      {answered && (
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 bg-amber px-8 py-4 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
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
        </div>
      )}
    </div>
  );
}

// ── Completion Celebration ───────────────────────────────────
function CompletionCelebration({
  nextMod,
  isLastModule,
}: {
  nextMod: typeof course.modules[0] | null;
  isLastModule: boolean;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`text-center py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div
        className={`w-20 h-20 mx-auto mb-6 rounded-full bg-green/10 border-2 border-green flex items-center justify-center transition-all duration-500 delay-200 ${
          visible ? "scale-100" : "scale-50"
        }`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2 className="text-3xl font-display font-bold text-text mb-3">
        Module Complete!
      </h2>
      <p className="text-text-secondary max-w-md mx-auto mb-8">
        {isLastModule
          ? "Congratulations! You have completed all modules in this course."
          : "Great work. You are ready to move on to the next module."}
      </p>
      {isLastModule ? (
        <Link
          href="/academy/military-drone-ops/certificate"
          className="inline-flex items-center gap-3 bg-amber px-8 py-4 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
          View Certificate
        </Link>
      ) : nextMod ? (
        <Link
          href={`/academy/military-drone-ops/${nextMod.id}`}
          className="inline-flex items-center gap-3 bg-amber px-8 py-4 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
        >
          Continue to Module {nextMod.number}
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
      ) : null}
    </div>
  );
}

// ── Step Indicator ──────────────────────────────────────────
function StepIndicator({
  totalSections,
  currentStep,
  completedSectionIndices,
  quizPassed,
  onStepClick,
}: {
  totalSections: number;
  currentStep: number;
  completedSectionIndices: string[];
  quizPassed: boolean;
  onStepClick: (step: number) => void;
}) {
  const totalSteps = totalSections + 1; // sections + quiz
  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const isQuiz = i === totalSections;
        const isCurrent = i === currentStep;
        const isCompleted = isQuiz
          ? quizPassed
          : completedSectionIndices.includes(String(i));
        const isAccessible =
          i === 0 ||
          isCompleted ||
          completedSectionIndices.includes(String(i - 1)) ||
          (isQuiz &&
            completedSectionIndices.length >= totalSections);

        return (
          <button
            key={i}
            onClick={() => isAccessible && onStepClick(i)}
            disabled={!isAccessible}
            className={`relative flex items-center justify-center transition-all duration-300 ${
              isCurrent
                ? "w-8 h-8 sm:w-9 sm:h-9"
                : "w-6 h-6 sm:w-7 sm:h-7"
            } ${
              isCompleted
                ? "bg-green/15 border border-green/40"
                : isCurrent
                ? "bg-amber/15 border-2 border-amber shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                : isAccessible
                ? "bg-surface border border-border hover:border-amber/30 cursor-pointer"
                : "bg-surface/50 border border-border/50 cursor-not-allowed opacity-40"
            } rounded-full`}
            title={isQuiz ? "Quiz" : `Section ${i + 1}`}
          >
            {isCompleted ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : isQuiz ? (
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isCurrent ? "text-amber" : "text-text-muted"}
              >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            ) : (
              <span
                className={`text-[9px] font-mono font-semibold ${
                  isCurrent ? "text-amber" : "text-text-muted"
                }`}
              >
                {i + 1}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ── Sidebar ─────────────────────────────────────────────────
function CourseSidebar({
  currentModuleId,
  currentStep,
  completedModules,
  completedSections,
  quizScores,
  onSectionJump,
  onClose,
  isMobile,
}: {
  currentModuleId: string;
  currentStep: number;
  completedModules: string[];
  completedSections: Record<string, string[]>;
  quizScores: Record<string, number>;
  onSectionJump: (step: number) => void;
  onClose?: () => void;
  isMobile: boolean;
}) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border shrink-0">
        <div className="flex items-center justify-between mb-3">
          <Link
            href="/academy/military-drone-ops"
            className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors duration-200 flex items-center gap-2"
            onClick={onClose}
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
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text transition-colors p-1"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
        <h2 className="text-sm font-display font-semibold text-text leading-snug">
          {course.title}
        </h2>
        {/* Overall progress */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-text-muted">
              {completedModules.length}/{course.modules.length} modules
            </span>
            <span className="text-[10px] font-mono text-amber">
              {Math.round(
                (completedModules.length / course.modules.length) * 100
              )}
              %
            </span>
          </div>
          <div className="h-1 bg-border w-full rounded-full overflow-hidden">
            <div
              className="h-full bg-amber transition-all duration-500 rounded-full"
              style={{
                width: `${
                  (completedModules.length / course.modules.length) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Module list */}
      <nav className="flex-1 overflow-y-auto py-2">
        {course.modules.map((m) => {
          const isCurrent = m.id === currentModuleId;
          const isComplete = completedModules.includes(m.id);
          const score = quizScores[m.id];
          const modSections = completedSections[m.id] ?? [];

          return (
            <div key={m.id}>
              <Link
                href={`/academy/military-drone-ops/${m.id}`}
                onClick={onClose}
                className={`block py-2.5 px-4 text-sm transition-colors duration-200 border-l-2 ${
                  isCurrent
                    ? "border-amber bg-amber/5 text-text"
                    : isComplete
                    ? "border-green/40 text-text-secondary hover:text-text hover:bg-surface-raised/30"
                    : "border-transparent text-text-muted hover:text-text hover:bg-surface-raised/30"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {isComplete ? (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span className="text-[10px] font-mono text-text-muted w-[13px] text-center shrink-0">
                      {String(m.number).padStart(2, "0")}
                    </span>
                  )}
                  <span className="truncate text-[13px]">{m.title}</span>
                </div>
              </Link>

              {/* Expanded sections for current module */}
              {isCurrent && (
                <div className="ml-4 border-l border-border/50">
                  {m.sections.map((section, sIdx) => {
                    const sectionDone = modSections.includes(String(sIdx));
                    const isCurrentSection =
                      currentStep === sIdx;
                    const isAccessible =
                      sIdx === 0 ||
                      modSections.includes(String(sIdx - 1)) ||
                      sectionDone;

                    return (
                      <button
                        key={sIdx}
                        onClick={() => {
                          if (isAccessible) {
                            onSectionJump(sIdx);
                            onClose?.();
                          }
                        }}
                        disabled={!isAccessible}
                        className={`w-full text-left py-1.5 pl-4 pr-3 text-[12px] transition-colors duration-150 flex items-center gap-2 ${
                          isCurrentSection
                            ? "text-amber"
                            : sectionDone
                            ? "text-text-secondary"
                            : isAccessible
                            ? "text-text-muted hover:text-text"
                            : "text-text-muted/40 cursor-not-allowed"
                        }`}
                      >
                        {sectionDone ? (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : isCurrentSection ? (
                          <span className="w-[10px] h-[10px] rounded-full bg-amber/30 border border-amber shrink-0" />
                        ) : (
                          <span className="w-[10px] h-[10px] rounded-full bg-border shrink-0" />
                        )}
                        <span className="truncate">{section.title}</span>
                      </button>
                    );
                  })}
                  {/* Quiz entry in sidebar */}
                  <button
                    onClick={() => {
                      if (modSections.length >= m.sections.length) {
                        onSectionJump(m.sections.length);
                        onClose?.();
                      }
                    }}
                    disabled={modSections.length < m.sections.length}
                    className={`w-full text-left py-1.5 pl-4 pr-3 text-[12px] transition-colors duration-150 flex items-center gap-2 ${
                      currentStep === m.sections.length
                        ? "text-amber"
                        : score !== undefined && score >= 70
                        ? "text-text-secondary"
                        : modSections.length >= m.sections.length
                        ? "text-text-muted hover:text-text"
                        : "text-text-muted/40 cursor-not-allowed"
                    }`}
                  >
                    {score !== undefined && score >= 70 ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : currentStep === m.sections.length ? (
                      <span className="w-[10px] h-[10px] rounded-full bg-amber/30 border border-amber shrink-0" />
                    ) : (
                      <span className="w-[10px] h-[10px] rounded-full bg-border shrink-0" />
                    )}
                    <span className="truncate">Quiz</span>
                  </button>
                </div>
              )}

              {/* Score display */}
              {score !== undefined && !isCurrent && (
                <div className="ml-[34px] pb-1">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-[0.1em] ${
                      score >= 70 ? "text-green" : "text-red"
                    }`}
                  >
                    Quiz: {score}%
                  </span>
                </div>
              )}
            </div>
          );
        })}

        {/* Certificate link */}
        <div className="mt-2 border-t border-border pt-2">
          <Link
            href="/academy/military-drone-ops/certificate"
            onClick={onClose}
            className="block py-2.5 px-4 text-sm text-text-muted hover:text-amber hover:bg-surface-raised/30 transition-colors duration-200 border-l-2 border-transparent"
          >
            <div className="flex items-center gap-2.5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              <span className="text-[13px]">Certificate</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

// ── Main Module Page ────────────────────────────────────────
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
    completedSections,
    quizScores,
    markModuleComplete,
    markSectionComplete,
    saveQuizScore,
    loaded,
  } = useProgress(course.id, course.modules.length, moduleSectionCounts);

  const [currentStep, setCurrentStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Total steps = sections + quiz
  const totalSections = mod?.sections.length ?? 0;
  const totalSteps = totalSections + 1;
  const isQuizStep = currentStep === totalSections;

  // Module navigation
  const modIndex = course.modules.findIndex((m) => m.id === moduleId);
  const nextMod =
    modIndex < course.modules.length - 1
      ? course.modules[modIndex + 1]
      : null;
  const isLastModule = modIndex === course.modules.length - 1;

  // Current module completed sections
  const modCompletedSections = completedSections[moduleId] ?? [];
  const quizScore = quizScores[moduleId];
  const quizPassed = quizScore !== undefined && quizScore >= 70;
  const allSectionsDone = modCompletedSections.length >= totalSections;
  const moduleFullyComplete = allSectionsDone && quizPassed;

  // Restore step from progress on load (jump to first incomplete section)
  useEffect(() => {
    if (!loaded || !mod) return;
    const sections = completedSections[moduleId] ?? [];
    // Find first incomplete section
    for (let i = 0; i < mod.sections.length; i++) {
      if (!sections.includes(String(i))) {
        setCurrentStep(i);
        return;
      }
    }
    // All sections done - go to quiz
    if (quizScores[moduleId] !== undefined && quizScores[moduleId] >= 70) {
      // Quiz passed too - show first section (review mode)
      setCurrentStep(0);
    } else {
      setCurrentStep(mod.sections.length);
    }
  }, [loaded, moduleId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset state when module changes
  useEffect(() => {
    setShowCompletion(false);
    setSidebarOpen(false);
  }, [moduleId]);

  // Scroll to top on step change
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const goToStep = useCallback(
    (step: number) => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentStep(step);
        setTransitioning(false);
      }, 200);
    },
    []
  );

  const handleContinue = useCallback(() => {
    if (!mod) return;
    // Mark current section as complete
    markSectionComplete(moduleId, String(currentStep));

    if (currentStep + 1 < totalSteps) {
      goToStep(currentStep + 1);
    }
  }, [mod, moduleId, currentStep, totalSteps, markSectionComplete, goToStep]);

  const handleQuizComplete = useCallback(
    (score: number) => {
      saveQuizScore(moduleId, score);
      if (score >= 70) {
        // Mark all sections complete if not already
        if (mod) {
          mod.sections.forEach((_, i) => {
            markSectionComplete(moduleId, String(i));
          });
        }
        markModuleComplete(moduleId);
        setTimeout(() => setShowCompletion(true), 800);
      }
    },
    [moduleId, mod, saveQuizScore, markSectionComplete, markModuleComplete]
  );

  // Quick check questions: show after sections at index 1 and 3 (i.e., sections 2 and 4)
  const getQuickCheckForSection = useCallback(
    (sectionIndex: number) => {
      if (!mod) return null;
      // Show quick checks after section indices 1 and 3
      if (sectionIndex !== 1 && sectionIndex !== 3) return null;
      // Pick a quiz question to use (section 2 -> quiz[0], section 4 -> quiz[1])
      const qIdx = sectionIndex === 1 ? 0 : 1;
      if (qIdx >= mod.quiz.length) return null;
      return mod.quiz[qIdx];
    },
    [mod]
  );

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

  const currentSection = !isQuizStep ? mod.sections[currentStep] : null;
  const quickCheck = !isQuizStep
    ? getQuickCheckForSection(currentStep)
    : null;
  const isSectionComplete = modCompletedSections.includes(
    String(currentStep)
  );

  return (
    <>
      <Nav />

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 bg-void/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile slide-over drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-surface border-r border-border z-50 transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <CourseSidebar
          currentModuleId={moduleId}
          currentStep={currentStep}
          completedModules={completedModules}
          completedSections={completedSections}
          quizScores={quizScores}
          onSectionJump={goToStep}
          onClose={() => setSidebarOpen(false)}
          isMobile={true}
        />
      </aside>

      <main className="bg-void min-h-screen">
        <div className="pt-[72px] lg:flex">
          {/* ── DESKTOP SIDEBAR ── */}
          <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-[72px] h-[calc(100vh-72px)] bg-surface border-r border-border overflow-y-auto">
            <CourseSidebar
              currentModuleId={moduleId}
              currentStep={currentStep}
              completedModules={completedModules}
              completedSections={completedSections}
              quizScores={quizScores}
              onSectionJump={goToStep}
              isMobile={false}
            />
          </aside>

          {/* ── MAIN CONTENT AREA ── */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* ── STICKY TOP BAR ── */}
            <div className="sticky top-[72px] z-20 bg-void/95 backdrop-blur-md border-b border-border">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 py-3 flex items-center gap-3 sm:gap-4">
                {/* Mobile menu button */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden shrink-0 text-text-muted hover:text-amber transition-colors"
                  aria-label="Open course navigation"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>

                {/* Module title (truncated) */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-display font-semibold text-text truncate">
                    {mod.title}
                  </h2>
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted">
                    {isQuizStep
                      ? "Assessment"
                      : `Section ${currentStep + 1} of ${totalSections}`}
                  </span>
                </div>

                {/* Step indicator */}
                <div className="hidden sm:flex shrink-0">
                  <StepIndicator
                    totalSections={totalSections}
                    currentStep={currentStep}
                    completedSectionIndices={modCompletedSections}
                    quizPassed={quizPassed}
                    onStepClick={goToStep}
                  />
                </div>

                {/* Back to course (desktop) */}
                <Link
                  href="/academy/military-drone-ops"
                  className="hidden md:flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.1em] text-text-muted hover:text-amber transition-colors shrink-0"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Course
                </Link>
              </div>

              {/* Mobile step indicator (below top bar content) */}
              <div className="sm:hidden px-4 pb-3 flex justify-center">
                <StepIndicator
                  totalSections={totalSections}
                  currentStep={currentStep}
                  completedSectionIndices={modCompletedSections}
                  quizPassed={quizPassed}
                  onStepClick={goToStep}
                />
              </div>

              {/* Progress bar */}
              <div className="h-0.5 bg-border">
                <div
                  className="h-full bg-amber transition-all duration-500"
                  style={{
                    width: `${
                      ((modCompletedSections.length +
                        (quizPassed ? 1 : 0)) /
                        totalSteps) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* ── CONTENT ── */}
            <div
              ref={contentRef}
              className="flex-1"
            >
              {showCompletion ? (
                <div className="mx-auto max-w-3xl px-4 sm:px-6">
                  <CompletionCelebration
                    nextMod={nextMod}
                    isLastModule={isLastModule}
                  />
                </div>
              ) : (
                <div
                  className={`transition-all duration-200 ${
                    transitioning
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {/* Section content */}
                  {!isQuizStep && currentSection && (
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 md:py-14">
                      {/* Section header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 border border-amber/20 bg-amber/5 flex items-center justify-center shrink-0">
                            <span className="text-xs font-mono text-amber font-semibold">
                              {String(currentStep + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted">
                            Section {currentStep + 1} of {totalSections}
                          </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-display font-bold text-text tracking-[-0.02em]">
                          {currentSection.title}
                        </h1>
                      </div>

                      {/* Section content body */}
                      <div
                        className="course-content text-[15px] sm:text-base leading-[1.8] text-text-secondary
                          [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-text [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:first:mt-0
                          [&_p]:mb-5 [&_p]:last:mb-0
                          [&_ul]:mb-5 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-3
                          [&_li]:text-text-secondary [&_li]:leading-[1.75]
                          [&_strong]:text-text [&_strong]:font-medium"
                        dangerouslySetInnerHTML={{
                          __html: currentSection.content,
                        }}
                      />

                      {/* Quick Check (inline knowledge check after certain sections) */}
                      {quickCheck && (
                        <QuickCheck
                          question={quickCheck.question}
                          options={quickCheck.options}
                          correctIndex={quickCheck.correctIndex}
                          explanation={quickCheck.explanation}
                        />
                      )}

                      {/* Continue button */}
                      <div className="mt-12 pt-8 border-t border-border">
                        <button
                          onClick={handleContinue}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber px-8 py-4 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                        >
                          {currentStep + 1 < totalSections
                            ? "Continue to Next Section"
                            : "Continue to Assessment"}
                          <svg
                            width="16"
                            height="16"
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
                        {isSectionComplete && (
                          <p className="mt-3 text-xs font-mono text-green flex items-center gap-1.5">
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
                            Section completed
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Quiz step */}
                  {isQuizStep && (
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 md:py-14">
                      <QuizStep
                        moduleId={mod.id}
                        quiz={mod.quiz}
                        existingScore={quizScore}
                        onComplete={handleQuizComplete}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ── FOOTER ── */}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
