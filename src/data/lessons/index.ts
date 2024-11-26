import { basicLessons } from './basics';
import { businessLessons } from './business';
import { travelLessons } from './travel';
import { Lesson } from '../../types/lesson';

export const LESSONS: Lesson[] = [
  ...basicLessons,
  ...businessLessons,
  ...travelLessons
];