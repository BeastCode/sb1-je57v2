import React from 'react';
import { BookOpen, Check } from 'lucide-react';
import { Lesson } from '../types/lesson';
import { useStore } from '../store/useStore';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

export function LessonCard({ lesson, onClick }: LessonCardProps) {
  const { userProgress } = useStore();
  const isCompleted = userProgress.completedLessons.includes(lesson.id);

  return (
    <div 
      onClick={onClick}
      className={`
        relative bg-white rounded-xl shadow-md p-6 cursor-pointer
        transform transition-all duration-300 hover:scale-105
        ${isCompleted ? 'border-2 border-green-500' : 'hover:shadow-xl'}
      `}
    >
      {isCompleted && (
        <div className="absolute top-4 right-4">
          <Check className="h-6 w-6 text-green-500" />
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex space-x-2">
          <span className={`
            px-2 py-1 rounded-full text-xs font-medium
            ${lesson.level === 'beginner' ? 'bg-green-100 text-green-800' :
              lesson.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}
          `}>
            {lesson.level}
          </span>
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {lesson.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-600">{lesson.description}</p>
      </div>
    </div>
  );
}