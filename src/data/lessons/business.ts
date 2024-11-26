import { Lesson } from '../../types/lesson';

export const businessLessons: Lesson[] = [
  {
    id: 'business-1',
    title: 'Business Meeting Basics',
    level: 'intermediate',
    category: 'business',
    description: 'Essential phrases for business meetings in Swedish.',
    content: 'Swedish business culture values punctuality and directness. Meetings often start with a brief informal chat before getting down to business.',
    vocabulary: [
      { swedish: 'möte', english: 'meeting', pronunciation: 'muh-teh' },
      { swedish: 'välkommen', english: 'welcome', pronunciation: 'vel-komen' },
      { swedish: 'presentation', english: 'presentation', pronunciation: 'pre-sen-ta-shon' },
      { swedish: 'rapport', english: 'report', pronunciation: 'ra-port' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'How do you say "meeting" in Swedish?',
        options: ['möte', 'rapport', 'presentation', 'välkommen'],
        correctAnswer: 'möte'
      }
    ]
  }
];