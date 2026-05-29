import type { Program } from '../../types';

export const programs: Program[] = [
  {
    id: 'lovin-oven',
    title: "Lovin' Oven",
    shortDescription: 'A baking skill acquisition program for young women.',
    description: `This three months program empowers young women to achieve financial independence through the art of baking. Our holistic curriculum covers professional baking techniques, essential entrepreneurship, and faith-based financial management. To ensure a successful launch, we provide each graduate with a starter kit of basic baking materials.`,
    image: "/images/lovin' oven.jpeg",
    category: 'Training',
    targetAge: 'Young Women',
    duration: '3 months',
    story:
      '"I never believed I could earn from my passion for baking until Lovin\' Oven trained me. Now I bake for schools and events in my community."',
    media: [{ type: 'image', src: "/images/lovin' oven.jpeg", caption: "Lovin' Oven training session" }],
  },
  {
    id: 'hwolemen',
    title: 'HwoleMen',
    shortDescription: 'Mature men mentor young men through accountability and life-on-life discipleship.',
    description: `Hwolemen is a comprehensive transformation program dedicated to guiding young men toward a life of purpose, integrity, and self-sufficiency. We believe in nurturing the whole man, which is why our initiative goes beyond surface-level fixes. By integrating intensive mentorship with practical skill acquisition, we provide the tools necessary for sustainable success.

Our holistic approach focuses on:`,
    image: '/images/wholemen.jpeg',
    category: 'Mentorship',
    targetAge: 'Young Men',
    duration: 'Ongoing',
    media: [{ type: 'image', src: '/images/wholemen.jpeg', caption: 'HWOLEMEN community mentorship moment' }],
  },
  {
    id: 'learning-center',
    title: 'The Learning Center',
    shortDescription: 'Safe, nurturing education support for young adults.',
    description: `At the learning center, we believe it is never too late to start. Whether a young person is picking up a pen for the first time or preparing for the university of their dreams, we are here to guide them.

Our curriculum is split into two primary tracks:
`,
    image: '/images/learning center.jpg',
    category: 'Education',
    targetAge: 'Children',
    duration: 'Year-round',
    media: [{ type: 'image', src: '/images/learning center.jpg', caption: 'Learning center classroom activity' }],
  },
  {
    id: 'rooted-house',
    title: 'Rooted House',
    shortDescription: 'A home and support pathway for young women in crisis.',
    description: `A sanctuary for hope and transformation.

Rooted House is a comprehensive, two-year residential program designed for vulnerable young women, teen mothers, and expectant mothers. We provide more than just a roof; we provide a foundation for a renewed life. Our mission is to transition young women from crisis to confidence through a holistic, Christ-centered approach over twenty-four months of intentional growth.

`,
    image: '/images/rooted house.jpeg',
    category: 'Support',
    targetAge: 'Young Women',
    duration: 'Residential',
    media: [{ type: 'image', src: '/images/rooted house.jpeg', caption: 'Residents at Rooted House' }],
  },
  {
    id: 'after-school-adventures',
    title: 'The After-School Program',
    shortDescription: 'Engaging after-school learning that inspires hope and wholeness.',
    description: `Learning without limits.

Our after-school program is a vibrant space where children can explore the world beyond the traditional classroom. We created a come-as-you-are environment that removes the pressure of grades and competition.

Program highlights: `,
    image: '/images/after-school.jpg',
    category: 'Education',
    targetAge: 'Children',
    duration: '3 days/week',
    media: [{ type: 'image', src: '/images/asabe.png', caption: 'After-school reading and activity circle' }],
  },
  {
    id: 'educational-sponsorship',
    title: 'Comprehensive Educational Sponsorship',
    shortDescription: 'Full-circle support that removes financial barriers to education.',
    description: `Our "Total Care" Commitment: Every sponsored student receives practical support that removes barriers to education and helps them stay consistent through the year.

We cover essential learning needs such as tuition support, study materials, monitoring, and ongoing after-school encouragement—so progress becomes realistic, not just hopeful.`,
    image: '/images/asabe.png',
    category: 'Sponsorship',
    targetAge: 'Students',
    duration: 'Year-round',
    media: [{ type: 'image', src: '/images/learning center.jpg', caption: 'Sponsored student academic support' }],
  },
  {
    id: 'holiday-orange-hat',
    title: 'Kingdom Discovery',
    shortDescription: 'Five impactful weeks of joyful, exploratory holiday learning.',
    description: `Kingdom Discovery: our annual five-week summer expedition.

Every August, we transform our learning space into a global adventure that runs through the first week of September. This Bible-based summer program invites children and teens to explore God's world through the lens of science, scripture, and skill-building.

We do not just lecture, we sing! We use music as a primary teaching tool because songs stick! Whether learning a new language or a scientific concept, our students sing their way to mastery.

Each day combines spiritual grounding and academic excitement through worship, dance, Bible study, and music-based learning.`,
    image: '/images/holiday.jpeg',
    category: 'Education',
    targetAge: 'Children',
    duration: '5 weeks',
    media: [{ type: 'image', src: '/images/holiday.jpeg', caption: 'Holiday Orange Hat activities' }],
  },
];

export function getProgramById(id: string): Program | undefined {
  return programs.find((program) => program.id === id);
}
