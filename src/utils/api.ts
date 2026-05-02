export const subscribeToNewsletter = async (_formData: { name: string; email: string }) => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful response
    return {
      success: true,
      message: 'Thank you for subscribing! You will receive updates soon.'
    };
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred. Please try again.'
    };
  }
};

export const validateNewsletterForm = (formData: { name: string; email: string }) => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
