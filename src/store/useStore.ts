import { create } from 'zustand';

interface UserProgress {
  completedLessons: string[];
  currentLesson: string | null;
  experience: number;
  level: number;
}

interface Store {
  userProgress: UserProgress;
  completeLesson: (lessonId: string) => void;
  setCurrentLesson: (lessonId: string) => void;
  addExperience: (amount: number) => void;
}

export const useStore = create<Store>((set) => ({
  userProgress: {
    completedLessons: [],
    currentLesson: null,
    experience: 0,
    level: 1,
  },
  completeLesson: (lessonId) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        completedLessons: [...state.userProgress.completedLessons, lessonId],
      },
    })),
  setCurrentLesson: (lessonId) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        currentLesson: lessonId,
      },
    })),
  addExperience: (amount) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        experience: state.userProgress.experience + amount,
        level: Math.floor((state.userProgress.experience + amount) / 1000) + 1,
      },
    })),
}));