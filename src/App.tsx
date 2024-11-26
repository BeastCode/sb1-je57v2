import React, { useState } from 'react';
import { Header } from './components/Header';
import { LessonCard } from './components/LessonCard';
import { ProgressBar } from './components/ProgressBar';
import { LessonContent } from './components/LessonContent';
import { Lesson } from './types/lesson';
import { GraduationCap, BookOpen, Briefcase, Plane } from 'lucide-react';
import { useStore } from './store/useStore';
import { LESSONS } from './data/lessons/index';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const { completeLesson } = useStore();

  const categories = [
    { id: 'all', name: 'All Lessons', icon: GraduationCap },
    { id: 'basics', name: 'Basics', icon: BookOpen },
    { id: 'business', name: 'Business', icon: Briefcase },
    { id: 'travel', name: 'Travel', icon: Plane },
  ];

  const filteredLessons = selectedCategory === 'all'
    ? LESSONS
    : LESSONS.filter(lesson => lesson.category === selectedCategory);

  const handleLessonComplete = (lessonId: string) => {
    completeLesson(lessonId);
    setSelectedLesson(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedLesson ? (
          <LessonContent
            lesson={selectedLesson}
            onComplete={() => handleLessonComplete(selectedLesson.id)}
          />
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to SwedishLingo
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Start your journey to master Swedish with our interactive lessons
              </p>
              <ProgressBar />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {categories.map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                  className={`
                    flex items-center justify-center p-4 rounded-lg
                    transition-all duration-200
                    ${selectedCategory === id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-indigo-50'}
                  `}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  <span>{name}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  onClick={() => setSelectedLesson(lesson)}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;