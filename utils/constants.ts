// Application constants and configuration

export const APP_CONFIG = {
  name: import.meta.env.VITE_ORG_NAME || 'Orange Hat',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'info@orangehat.org',
  phone: import.meta.env.VITE_PHONE_NUMBER || '+234-XXX-XXX-XXXX',
  address: import.meta.env.VITE_ORG_ADDRESS || 'Hwolshe, Jos, Plateau State, Nigeria',
  website: 'https://orangehat.org',
};

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.orangehat.org',
  timeout: 10000, // 10 seconds
};

export const SOCIAL_LINKS = {
  facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/orangehatng',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/orangehatng',
  youtube: import.meta.env.VITE_YOUTUBE_URL || 'https://youtube.com/@orangehatng',
  twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/orangehatng',
};

export const ANALYTICS_CONFIG = {
  enabled: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  trackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
};

export const FORM_CONFIG = {
  maxMessageLength: 1000,
  minMessageLength: 10,
  maxNameLength: 100,
  minNameLength: 2,
  submitTimeout: 30000, // 30 seconds
};

export const DONATION_CONFIG = {
  minAmount: 100, // Minimum donation in Naira
  maxAmount: 1000000, // Maximum donation in Naira
  defaultAmount: 5000,
  frequencies: [
    { value: 'one-time', label: 'One-time' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ],
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'programs', label: 'Programs', path: '/programs' },
  { id: 'stories', label: 'Stories', path: '/stories' },
  { id: 'get-involved', label: 'Get Involved', path: '/get-involved' },
  { id: 'media', label: 'Media', path: '/media' },
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
  { value: 'fundraising', label: 'Fundraising' },
  { value: 'marketing', label: 'Marketing & Communications' },
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