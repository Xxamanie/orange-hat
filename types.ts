// Common types for the Orange Hat application

export interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export interface FormData {
  name: string;
  email: string;
  message?: string;
  subject?: string;
  phone?: string;
}

export interface ContactFormData extends FormData {
  subject: string;
}

export interface VolunteerFormData extends FormData {
  message: string;
}

export interface PartnerFormData extends FormData {
  organization: string;
  partnershipType: string;
}

export interface DonationFormData {
  name: string;
  email: string;
  amount: number;
  frequency: 'one-time' | 'monthly' | 'yearly';
}

export interface NewsletterFormData {
  name: string;
  email: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  targetAge?: string;
  duration?: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string | number;
  icon?: string;
  description?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
}

export type PageType = 'home' | 'about' | 'programs' | 'get-involved' | 'contact' | 'stories' | 'media';