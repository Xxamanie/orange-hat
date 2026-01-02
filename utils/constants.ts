// Application constants and configuration

export const APP_CONFIG = {
  name: import.meta.env.VITE_ORG_NAME || 'Orange Hat Childcare Foundation',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'info@orangehat.org',
  phone: import.meta.env.VITE_PHONE_NUMBER || '+234-XXX-XXX-XXXX',
  address: import.meta.env.VITE_ORG_ADDRESS || 'COCIN Church Jiyep, Hwolshe, Jos, Plateau State, Nigeria',
  website: 'https://orangehat.org',
  vision: 'To create a safe space of discovery where children and their caregivers can grow spiritually, relationally, and academically to positively impact their world.',
  founded: '2018',
  ngoRegistration: '2024',
};

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.orangehat.org',
  timeout: 10000, // 10 seconds
};

export const SOCIAL_LINKS = {
  facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/orangehatchildcare',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/orangehatchildcare',
  youtube: import.meta.env.VITE_YOUTUBE_URL || 'https://youtube.com/@orangehatchildcare',
  twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/orangehatchildcare',
};

export const DONATION_CONFIG = {
  paystackUrl: import.meta.env.VITE_DONATION_URL || 'https://paystack.com/pay/your-link',
  minAmount: 100, // Minimum donation in Naira
  maxAmount: 1000000, // Maximum donation in Naira
  defaultAmount: 5000,
  frequencies: [
    { value: 'one-time', label: 'One-time' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ],
};

export const PROGRAMS_INFO = {
  afterSchool: {
    name: 'After School Adventure',
    frequency: '3 days per week',
    description: 'Engaging learning activities that inspire hope, healing and wholeness through literature',
  },
  holiday: {
    name: 'Holiday Orange Hat',
    duration: '5 impactful weeks',
    reach: '200+ children',
    description: 'Joyful, exploratory learning including skills and arts training',
  },
  bakery: {
    name: "Lovin' Oven Bakery",
    target: 'Young women',
    focus: 'Community, training, faith, professionalism and confidence',
  },
  rootedHouse: {
    name: 'Rooted House',
    target: 'Young women in crisis',
    services: 'Skill training, life skills, education, community living, discipleship',
  },
  hwolemen: {
    name: 'Hwolemen',
    target: 'Young men',
    approach: 'Mature men mentoring through meaningful relationships',
    services: 'Rehabilitation, skill training, belonging, accountability',
  },
};

export const FUTURE_PLANS = {
  newFacility: {
    location: 'Hwolshe',
    features: [
      'Residential communities for rehabilitated young men',
      'Model farms',
      'Library',
      'Community playground',
    ],
  },
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'programs', label: 'Programs', path: '/programs' },
  { id: 'get-involved', label: 'Get Involved', path: '/get-involved' },
  { id: 'media', label: 'Media', path: '/media' },
  { id: 'support', label: 'Support', path: '/support' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const PARTNERSHIP_TYPES = [
  { value: 'financial', label: 'Financial Sponsorship' },
  { value: 'in-kind', label: 'In-Kind Donations' },
  { value: 'skills', label: 'Skills & Expertise' },
  { value: 'venue', label: 'Venue & Space' },
  { value: 'marketing', label: 'Marketing & Promotion' },
  { value: 'other', label: 'Other' },
];

export const VOLUNTEER_AREAS = [
  { value: 'education', label: 'Education & Tutoring' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'events', label: 'Event Organization' },
  { value: 'admin', label: 'Administrative Support' },
  { value: 'other', label: 'Other' },
];

export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection and try again.',
  server: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.',
  generic: 'Something went wrong. Please try again.',
  timeout: 'Request timed out. Please try again.',
};

export const SUCCESS_MESSAGES = {
  contact: 'Thank you for your message! We\'ll get back to you soon.',
  newsletter: 'Successfully subscribed to our newsletter!',
  volunteer: 'Thank you for your interest in volunteering! We\'ll reach out soon.',
  partner: 'Thank you for your interest in partnering with us! We\'ll be in touch.',
  donation: 'Thank you for your generous donation!',
};