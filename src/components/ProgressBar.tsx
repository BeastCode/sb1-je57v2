import React from 'react';
import { useStore } from '../store/useStore';

export function ProgressBar() {
  const { userProgress } = useStore();
  const experienceForNextLevel = (userProgress.level) * 1000;
  const currentLevelExperience = userProgress.experience % 1000;
  const progress = (currentLevelExperience / experienceForNextLevel) * 100;

  return (
    <div className="w-full bg-gray-100 rounded-full h-4 mb-4">
      <div
        className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="relative">
          <span className="absolute -top-6 right-0 text-xs text-gray-600">
            {currentLevelExperience}/{experienceForNextLevel} XP
          </span>
        </div>
      </div>
    </div>
  );
}