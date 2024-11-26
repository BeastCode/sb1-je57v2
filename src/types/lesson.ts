export interface Lesson {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'basics' | 'conversation' | 'business' | 'travel';
  description: string;
  content: string;
  vocabulary: VocabularyItem[];
  exercises: Exercise[];
}

export interface VocabularyItem {
  swedish: string;
  english: string;
  pronunciation: string;
}

export interface Exercise {
  type: 'multiple-choice' | 'translation' | 'listening' | 'speaking';
  question: string;
  options?: string[];
  correctAnswer: string;
}