import { Lesson } from '../../types/lesson';

export const basicLessons: Lesson[] = [
  {
    id: 'basics-1',
    title: 'Basic Greetings',
    level: 'beginner',
    category: 'basics',
    description: 'Learn essential Swedish greetings and introductions.',
    content: 'In Swedish culture, greetings are important and relatively informal. The most common greeting "Hej" can be used at any time of day and in most situations. For goodbye, you can use "Hej då" which is casual and friendly.',
    vocabulary: [
      { swedish: 'Hej', english: 'Hello', pronunciation: 'hey' },
      { swedish: 'Hej då', english: 'Goodbye', pronunciation: 'hey doh' },
      { swedish: 'God morgon', english: 'Good morning', pronunciation: 'good morron' },
      { swedish: 'God natt', english: 'Good night', pronunciation: 'good nat' },
      { swedish: 'Tack', english: 'Thank you', pronunciation: 'tahk' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Swedish?',
        options: ['Hej', 'Tack', 'Hej då', 'God natt'],
        correctAnswer: 'Hej'
      },
      {
        type: 'multiple-choice',
        question: 'Which phrase means "Thank you"?',
        options: ['God morgon', 'Tack', 'Hej då', 'Hej'],
        correctAnswer: 'Tack'
      }
    ]
  },
  {
    id: 'basics-2',
    title: 'Numbers 1-20',
    level: 'beginner',
    category: 'basics',
    description: 'Master counting in Swedish from one to twenty.',
    content: 'Swedish numbers follow a logical pattern, making them relatively easy to learn. The numbers 1-10 are unique words, while 11-20 follow a pattern similar to English.',
    vocabulary: [
      { swedish: 'ett', english: 'one', pronunciation: 'et' },
      { swedish: 'två', english: 'two', pronunciation: 'tvoh' },
      { swedish: 'tre', english: 'three', pronunciation: 'treh' },
      { swedish: 'tio', english: 'ten', pronunciation: 'tee-oh' },
      { swedish: 'tjugo', english: 'twenty', pronunciation: 'hwoo-goh' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'What is "two" in Swedish?',
        options: ['ett', 'två', 'tre', 'fyra'],
        correctAnswer: 'två'
      }
    ]
  }
];