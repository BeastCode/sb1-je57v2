import { Lesson } from '../../types/lesson';

export const travelLessons: Lesson[] = [
  {
    id: 'travel-1',
    title: 'Restaurant & Dining',
    level: 'beginner',
    category: 'travel',
    description: 'Learn how to order food and navigate restaurants in Swedish.',
    content: `Swedish dining etiquette is relatively informal. It's common to say "Smaklig måltid" (enjoy your meal) before starting to eat.`,
    vocabulary: [
      { swedish: 'restaurang', english: 'restaurant', pronunciation: 'res-to-rong' },
      { swedish: 'meny', english: 'menu', pronunciation: 'me-ny' },
      { swedish: 'vatten', english: 'water', pronunciation: 'vat-ten' },
      { swedish: 'notan', english: 'the bill', pronunciation: 'noo-tan' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'How do you ask for "the bill" in Swedish?',
        options: ['meny', 'vatten', 'notan', 'restaurang'],
        correctAnswer: 'notan'
      }
    ]
  },
  {
    id: 'travel-2',
    title: 'Weather Expressions',
    level: 'intermediate',
    category: 'travel',
    description: 'Learn to discuss weather conditions in Swedish.',
    content: `Weather is a common topic in Swedish small talk, especially given the country's varied climate throughout the year.`,
    vocabulary: [
      { swedish: 'sol', english: 'sun', pronunciation: 'sool' },
      { swedish: 'regn', english: 'rain', pronunciation: 'reyn' },
      { swedish: 'snö', english: 'snow', pronunciation: 'snuh' },
      { swedish: 'vind', english: 'wind', pronunciation: 'vind' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'What is "snow" in Swedish?',
        options: ['sol', 'regn', 'snö', 'vind'],
        correctAnswer: 'snö'
      }
    ]
  }
];