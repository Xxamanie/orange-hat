import { Stat } from '../types';

export const impactStats: Stat[] = [
  {
    id: 'children-reached',
    label: 'Children Reached',
    value: '200+',
    description: 'Children served through Holiday Orange Hat program',
  },
  {
    id: 'years-active',
    label: 'Years of Service',
    value: '6',
    description: 'Years of dedicated service since 2018',
  },
  {
    id: 'staff-volunteers',
    label: 'Staff & Volunteers',
    value: '20+',
    description: 'Dedicated staff and volunteers supporting our mission',
  },
  {
    id: 'programs-running',
    label: 'Active Programs',
    value: '5',
    description: 'Core programs serving the community',
  },
  {
    id: 'holiday-weeks',
    label: 'Holiday Program Weeks',
    value: '5',
    description: 'Impactful weeks of holiday learning',
  },
  {
    id: 'weekly-sessions',
    label: 'After School Days',
    value: '3',
    description: 'Days per week of After School Adventure',
  },
];

export const programStats: Stat[] = [
  {
    id: 'after-school-frequency',
    label: 'After School Adventure',
    value: '3x/week',
    description: 'Regular after-school programming',
  },
  {
    id: 'holiday-impact',
    label: 'Holiday Program',
    value: '5 weeks',
    description: 'Intensive holiday learning periods',
  },
  {
    id: 'bakery-training',
    label: "Lovin' Oven Bakery",
    value: 'Young Women',
    description: 'Empowerment through bakery training',
  },
  {
    id: 'rooted-house',
    label: 'Rooted House',
    value: 'Crisis Support',
    description: 'Home for young women in crisis',
  },
  {
    id: 'hwolemen',
    label: 'Hwolemen',
    value: 'Mentorship',
    description: 'Men mentoring young men',
  },
];

export const organizationStats: Stat[] = [
  {
    id: 'founded',
    label: 'Founded',
    value: '2018',
    description: 'Started in a small shop in Hwolshe, Jos',
  },
  {
    id: 'ngo-status',
    label: 'NGO Registration',
    value: '2024',
    description: 'Registered as NGO in Plateau State',
  },
  {
    id: 'location',
    label: 'Current Location',
    value: 'COCIN Church Jiyep',
    description: 'Operating from church-provided building',
  },
  {
    id: 'future-location',
    label: 'Future Plans',
    value: 'Hwolshe Property',
    description: 'Planning new facility in Hwolshe',
  },
];

export function getStatsByCategory(category: 'impact' | 'programs' | 'organization'): Stat[] {
  switch (category) {
    case 'impact':
      return impactStats;
    case 'programs':
      return programStats;
    case 'organization':
      return organizationStats;
    default:
      return impactStats;
  }
}

export function getStatById(id: string): Stat | undefined {
  const allStats = [...impactStats, ...programStats, ...organizationStats];
  return allStats.find(stat => stat.id === id);
}