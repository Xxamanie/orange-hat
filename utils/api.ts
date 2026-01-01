import { ApiResponse, FormSubmissionResponse } from '../types';

const API_BASE_URL = process.env.VITE_API_BASE_URL || 'https://api.orangehat.org';

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Contact form submission
export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<FormSubmissionResponse> {
  // For now, simulate API call - replace with actual endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      resolve({
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.',
      });
    }, 1000);
  });
}

// Newsletter subscription
export async function subscribeToNewsletter(formData: {
  name: string;
  email: string;
}): Promise<FormSubmissionResponse> {
  // For now, simulate API call - replace with actual endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Newsletter subscription:', formData);
      resolve({
        success: true,
        message: 'Successfully subscribed to our newsletter!',
      });
    }, 1000);
  });
}

// Volunteer form submission
export async function submitVolunteerForm(formData: {
  name: string;
  email: string;
  message: string;
}): Promise<FormSubmissionResponse> {
  // For now, simulate API call - replace with actual endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Volunteer form submitted:', formData);
      resolve({
        success: true,
        message: 'Thank you for your interest in volunteering! We\'ll reach out soon.',
      });
    }, 1000);
  });
}

// Partner form submission
export async function submitPartnerForm(formData: {
  name: string;
  email: string;
  organization: string;
  partnershipType: string;
}): Promise<FormSubmissionResponse> {
  // For now, simulate API call - replace with actual endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Partner form submitted:', formData);
      resolve({
        success: true,
        message: 'Thank you for your interest in partnering with us! We\'ll be in touch.',
      });
    }, 1000);
  });
}

// Donation submission
export async function submitDonation(formData: {
  name: string;
  email: string;
  amount: number;
  frequency: string;
}): Promise<FormSubmissionResponse> {
  // For now, simulate API call - replace with actual payment processing
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Donation submitted:', formData);
      resolve({
        success: true,
        message: 'Thank you for your generous donation!',
      });
    }, 1000);
  });
}