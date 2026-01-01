import { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'education-support',
    title: 'Education Support',
    description: 'Providing quality education, school supplies, and learning resources to underprivileged children in rural and urban communities.',
    image: '/images/education-support.jpg',
    category: 'Education',
    targetAge: '5-18 years',
    duration: 'Ongoing',
  },
  {
    id: 'mentorship',
    title: 'Mentorship Program',
    description: 'Connecting children with positive role models who provide guidance, support, and inspiration for their personal and academic growth.',
    image: '/images/mentorship.jpg',
    category: 'Development',
    targetAge: '10-18 years',
    duration: '6-12 months',
  },
  {
    id: 'skills-training',
    title: 'Skills Training',
    description: 'Teaching practical life skills, digital literacy, and vocational training to prepare young people for future opportunities.',
    image: '/images/skills-training.jpg',
    category: 'Training',
    targetAge: '14-25 years',
    duration: '3-6 months',
  },
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    description: 'Promoting physical and mental health through healthcare access, nutrition programs, and wellness education.',
    image: '/images/health-wellness.jpg',
    category: 'Health',
    targetAge: 'All ages',
    duration: 'Ongoing',
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach',
    description: 'Engaging with local communities to identify needs, build relationships, and create sustainable positive change.',
    image: '/images/community-outreach.jpg',
    category: 'Community',
    targetAge: 'All ages',
    duration: 'Ongoing',
  },
  {
    id: 'emergency-relief',
    title: 'Emergency Relief',
    description: 'Providing immediate assistance during crises, natural disasters, and emergency situations affecting children and families.',
    image: '/images/emergency-relief.jpg',
    category: 'Relief',
    targetAge: 'All ages',
    duration: 'As needed',
  },
];

export const programCategories = [
  'All',
  'Education',
  'Development',
  'Training',
  'Health',
  'Community',
  'Relief',
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