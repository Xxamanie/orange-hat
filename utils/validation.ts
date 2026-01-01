// Form validation utilities

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation (Nigerian format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+234|0)[789][01]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Name validation
export function isValidName(name: string): boolean {
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
}

// Generic required field validation
export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

// Contact form validation
export function validateContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isRequired(data.subject)) {
    errors.subject = 'Subject is required';
  }

  if (!isRequired(data.message)) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Newsletter validation
export function validateNewsletterForm(data: {
  name: string;
  email: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Volunteer form validation
export function validateVolunteerForm(data: {
  name: string;
  email: string;
  message: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isRequired(data.message)) {
    errors.message = 'Please tell us why you\'d like to volunteer';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Please provide more details (at least 20 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Partner form validation
export function validatePartnerForm(data: {
  name: string;
  email: string;
  organization: string;
  partnershipType: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isRequired(data.organization)) {
    errors.organization = 'Organization name is required';
  }

  if (!isRequired(data.partnershipType)) {
    errors.partnershipType = 'Please select a partnership type';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Donation validation
export function validateDonationForm(data: {
  name: string;
  email: string;
  amount: number;
  frequency: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.amount || data.amount <= 0) {
    errors.amount = 'Please enter a valid donation amount';
  } else if (data.amount < 100) {
    errors.amount = 'Minimum donation amount is ₦100';
  }

  if (!isRequired(data.frequency)) {
    errors.frequency = 'Please select a donation frequency';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}