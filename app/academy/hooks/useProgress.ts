"use client";

import { useState, useEffect, useCallback } from "react";

type ProgressData = {
  completedModules: string[];
  quizScores: Record<string, number>;
  completedSections: Record<string, string[]>;
};

const STORAGE_PREFIX = "winsemius_progress_";

function getStorageKey(courseId: string) {
  return `${STORAGE_PREFIX}${courseId}`;
}

function loadProgress(courseId: string): ProgressData {
  if (typeof window === "undefined") {
    return { completedModules: [], quizScores: {}, completedSections: {} };
  }
  try {
    const raw = localStorage.getItem(getStorageKey(courseId));
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        completedModules: parsed.completedModules ?? [],
        quizScores: parsed.quizScores ?? {},
        completedSections: parsed.completedSections ?? {},
      };
    }
  } catch {
    // Ignore parse errors
  }
  return { completedModules: [], quizScores: {}, completedSections: {} };
}

function saveProgress(courseId: string, data: ProgressData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getStorageKey(courseId), JSON.stringify(data));
  } catch {
    // Ignore storage errors
  }
}

export function useProgress(
  courseId: string,
  totalModules: number = 6,
  moduleSectionCounts?: Record<string, number>
) {
  const [data, setData] = useState<ProgressData>({
    completedModules: [],
    quizScores: {},
    completedSections: {},
  });
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setData(loadProgress(courseId));
    setLoaded(true);
  }, [courseId]);

  const completedModules = data.completedModules;
  const quizScores = data.quizScores;
  const completedSections = data.completedSections;

  const progress =
    totalModules > 0
      ? Math.round((completedModules.length / totalModules) * 100)
      : 0;

  const isEligibleForCertificate =
    completedModules.length >= totalModules &&
    Object.keys(quizScores).length >= totalModules &&
    Object.values(quizScores).every((score) => score >= 70);

  const markModuleComplete = useCallback(
    (moduleId: string) => {
      setData((prev) => {
        if (prev.completedModules.includes(moduleId)) return prev;
        const next = {
          ...prev,
          completedModules: [...prev.completedModules, moduleId],
        };
        saveProgress(courseId, next);
        return next;
      });
    },
    [courseId]
  );

  const markSectionComplete = useCallback(
    (moduleId: string, sectionIndex: string) => {
      setData((prev) => {
        const moduleSections = prev.completedSections[moduleId] ?? [];
        if (moduleSections.includes(sectionIndex)) return prev;

        const updatedModuleSections = [...moduleSections, sectionIndex];
        const next: ProgressData = {
          ...prev,
          completedSections: {
            ...prev.completedSections,
            [moduleId]: updatedModuleSections,
          },
        };

        // Auto-complete module when all sections are done
        if (
          moduleSectionCounts &&
          moduleSectionCounts[moduleId] !== undefined &&
          updatedModuleSections.length >= moduleSectionCounts[moduleId] &&
          !prev.completedModules.includes(moduleId)
        ) {
          next.completedModules = [...prev.completedModules, moduleId];
        }

        saveProgress(courseId, next);
        return next;
      });
    },
    [courseId, moduleSectionCounts]
  );

  const saveQuizScore = useCallback(
    (moduleId: string, scorePercent: number) => {
      setData((prev) => {
        const next = {
          ...prev,
          quizScores: { ...prev.quizScores, [moduleId]: scorePercent },
        };
        saveProgress(courseId, next);
        return next;
      });
    },
    [courseId]
  );

  const resetProgress = useCallback(() => {
    const empty: ProgressData = {
      completedModules: [],
      quizScores: {},
      completedSections: {},
    };
    setData(empty);
    saveProgress(courseId, empty);
  }, [courseId]);

  return {
    completedModules,
    quizScores,
    completedSections,
    progress,
    isEligibleForCertificate,
    markModuleComplete,
    markSectionComplete,
    saveQuizScore,
    resetProgress,
    loaded,
  };
}
