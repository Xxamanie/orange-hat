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
