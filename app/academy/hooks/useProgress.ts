"use client";

import { useState, useEffect, useCallback } from "react";

type ProgressData = {
  completedModules: string[];
  quizScores: Record<string, number>;
};

const STORAGE_PREFIX = "winsemius_progress_";

function getStorageKey(courseId: string) {
  return `${STORAGE_PREFIX}${courseId}`;
}

function loadProgress(courseId: string): ProgressData {
  if (typeof window === "undefined") {
    return { completedModules: [], quizScores: {} };
  }
  try {
    const raw = localStorage.getItem(getStorageKey(courseId));
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        completedModules: parsed.completedModules ?? [],
        quizScores: parsed.quizScores ?? {},
      };
    }
  } catch {
    // Ignore parse errors
  }
  return { completedModules: [], quizScores: {} };
}

function saveProgress(courseId: string, data: ProgressData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getStorageKey(courseId), JSON.stringify(data));
  } catch {
    // Ignore storage errors
  }
}

export function useProgress(courseId: string, totalModules: number = 6) {
  const [data, setData] = useState<ProgressData>({
    completedModules: [],
    quizScores: {},
  });
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setData(loadProgress(courseId));
    setLoaded(true);
  }, [courseId]);

  const completedModules = data.completedModules;
  const quizScores = data.quizScores;

  const progress = totalModules > 0
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
    const empty: ProgressData = { completedModules: [], quizScores: {} };
    setData(empty);
    saveProgress(courseId, empty);
  }, [courseId]);

  return {
    completedModules,
    quizScores,
    progress,
    isEligibleForCertificate,
    markModuleComplete,
    saveQuizScore,
    resetProgress,
    loaded,
  };
}
