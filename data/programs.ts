import { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'after-school-adventure',
    title: 'After School Adventure',
    description: 'Three days a week, Orange Hat provides a place where engaging learning activities inspire hope, healing and wholeness through literature for children on their educational journey.',
    image: '/images/after-school-adventure.jpg',
    category: 'Education',
    targetAge: 'Children',
    duration: '3 days/week',
  },
  {
    id: 'holiday-orange-hat',
    title: 'Holiday Orange Hat',
    description: '5 impactful weeks of joyful, exploratory learning including skills and arts training with faithful and loving adults. Serving 200+ children during holiday periods.',
    image: '/images/holiday-orange-hat.jpg',
    category: 'Education',
    targetAge: 'Children',
    duration: '5 weeks (holidays)',
  },
  {
    id: 'lovin-oven-bakery',
    title: "Lovin' Oven Bakery",
    description: 'Bakery training center empowering young women through community, training, and faith. Building professionalism and confidence in a supportive environment.',
    image: '/images/lovin-oven-bakery.jpg',
    category: 'Training',
    targetAge: 'Young Women',
    duration: 'Ongoing',
  },
  {
    id: 'rooted-house',
    title: 'Rooted House',
    description: 'A home for young women in crisis where they experience wholeness through skill training, life skills education, and inspiring hope through community living and discipleship.',
    image: '/images/rooted-house.jpg',
    category: 'Support',
    targetAge: 'Young Women',
    duration: 'Residential',
  },
  {
    id: 'hwolemen',
    title: 'Hwolemen',
    description: 'Mature men mentor young men, empowering them through meaningful relationships. Providing rehabilitation, skill training, belonging, accountability and a place to grow.',
    image: '/images/hwolemen.jpg',
    category: 'Mentorship',
    targetAge: 'Young Men',
    duration: 'Ongoing',
  },
];

export const programCategories = [
  'All',
  'Education',
  'Training',
  'Support',
  'Mentorship',
];

export function getProgramsByCategory(category: string): Program[] {
  if (category === 'All') {
    return programs;
  }
  return programs.filter(program => program.category === category);
}

export function getProgramById(id: string): Program | undefined {
  return programs.find(program => program.id === id);
}