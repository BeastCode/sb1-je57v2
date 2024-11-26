import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Lesson, Exercise } from '../types/lesson';

interface QuizSectionProps {
  lesson: Lesson;
  onComplete: () => void;
}

export function QuizSection({ lesson, onComplete }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const exercise = lesson.exercises[currentQuestion];
  const isLastQuestion = currentQuestion === lesson.exercises.length - 1;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const score = answers.reduce(
    (acc, answer, index) => 
      acc + (answer === lesson.exercises[index].correctAnswer ? 1 : 0),
    0
  );

  if (showResult) {
    return (
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Quiz Complete!</h2>
        <div className="text-6xl font-bold text-indigo-600">
          {score}/{lesson.exercises.length}
        </div>
        <p className="text-gray-600">
          {score === lesson.exercises.length
            ? 'Perfect score! Amazing job! 🎉'
            : 'Good effort! Keep practicing to improve! 💪'}
        </p>
        <button
          onClick={onComplete}
          className="btn-primary"
        >
          Complete Lesson
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Question {currentQuestion + 1} of {lesson.exercises.length}</span>
        <span>Score: {score}/{currentQuestion}</span>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">{exercise.question}</h3>
        <div className="grid gap-3">
          {exercise.options?.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="p-4 text-left bg-white rounded-lg border-2 border-gray-200
                       hover:border-indigo-500 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}