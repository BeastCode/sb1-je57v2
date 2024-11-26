import React, { useState } from 'react';
import { Volume2, ArrowRight, Check, X } from 'lucide-react';
import { Lesson, VocabularyItem } from '../types/lesson';
import { useStore } from '../store/useStore';
import { QuizSection } from './QuizSection';

interface LessonContentProps {
  lesson: Lesson;
  onComplete: () => void;
}

export function LessonContent({ lesson, onComplete }: LessonContentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { addExperience } = useStore();
  
  const steps = [
    { type: 'content', title: 'Learn' },
    { type: 'vocabulary', title: 'Practice' },
    { type: 'quiz', title: 'Test' },
  ];

  const handleComplete = () => {
    addExperience(100);
    onComplete();
  };

  const speakWord = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'sv-SE';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step.type}
            className={`flex items-center ${
              index < currentStep
                ? 'text-green-600'
                : index === currentStep
                ? 'text-indigo-600'
                : 'text-gray-400'
            }`}
          >
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${index < currentStep
                ? 'bg-green-100'
                : index === currentStep
                ? 'bg-indigo-100'
                : 'bg-gray-100'
              }
            `}>
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="ml-2">{step.title}</span>
            {index < steps.length - 1 && (
              <ArrowRight className="w-5 h-5 mx-4" />
            )}
          </div>
        ))}
      </div>

      {currentStep === 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">{lesson.title}</h2>
          <p className="text-gray-600">{lesson.content}</p>
          <button
            onClick={() => setCurrentStep(1)}
            className="btn-primary"
          >
            Continue to Vocabulary
          </button>
        </div>
      )}

      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Vocabulary Practice</h2>
          <div className="grid gap-4">
            {lesson.vocabulary.map((item: VocabularyItem) => (
              <div
                key={item.swedish}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-lg font-semibold">{item.swedish}</p>
                  <p className="text-gray-600">{item.english}</p>
                </div>
                <button
                  onClick={() => speakWord(item.swedish)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Volume2 className="w-5 h-5 text-indigo-600" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setCurrentStep(2)}
            className="btn-primary"
          >
            Start Quiz
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <QuizSection
          lesson={lesson}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}