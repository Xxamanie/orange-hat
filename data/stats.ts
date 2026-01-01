import { Stat } from '../types';

export const impactStats: Stat[] = [
  {
    id: 'children-reached',
    label: 'Children Reached',
    value: '2,500+',
    description: 'Children directly impacted through our programs',
  },
  {
    id: 'communities-served',
    label: 'Communities Served',
    value: '15',
    description: 'Communities across Nigeria where we operate',
  },
  {
    id: 'volunteers',
    label: 'Active Volunteers',
    value: '150+',
    description: 'Dedicated volunteers supporting our mission',
  },
  {
    id: 'programs-running',
    label: 'Active Programs',
    value: '6',
    description: 'Ongoing programs addressing various needs',
  },
  {
    id: 'years-active',
    label: 'Years of Service',
    value: '8',
    description: 'Years of dedicated service to communities',
  },
  {
    id: 'partnerships',
    label: 'Partner Organizations',
    value: '25+',
    description: 'Organizations collaborating with us',
  },
];

export const financialStats: Stat[] = [
  {
    id: 'funds-raised',
    label: 'Funds Raised',
    value: '₦50M+',
    description: 'Total funds raised for programs',
  },
  {
    id: 'program-efficiency',
    label: 'Program Efficiency',
    value: '85%',
    description: 'Of funds go directly to programs',
  },
  {
    id: 'average-donation',
    label: 'Average Donation',
    value: '₦5,000',
    description: 'Average individual donation amount',
  },
];

export const educationStats: Stat[] = [
  {
    id: 'scholarships',
    label: 'Scholarships Awarded',
    value: '200+',
    description: 'Educational scholarships provided',
  },
  {
    id: 'schools-supported',
    label: 'Schools Supported',
    value: '30',
    description: 'Schools receiving our support',
  },
  {
    id: 'literacy-rate',
    label: 'Literacy Improvement',
    value: '40%',
    description: 'Average literacy improvement in our programs',
  },
];

export function getStatsByCategory(category: 'impact' | 'financial' | 'education'): Stat[] {
  switch (category) {
    case 'impact':
      return impactStats;
    case 'financial':
      return financialStats;
    case 'education':
      return educationStats;
    default:
      return impactStats;
  }
}

export function getStatById(id: string): Stat | undefined {
  const allStats = [...impactStats, ...financialStats, ...educationStats];
  return allStats.find(stat => stat.id === id);
}