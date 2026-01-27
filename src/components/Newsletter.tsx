import React, { useState } from "react";
import { motion } from "framer-motion";
import { subscribeToNewsletter } from "../utils/api";
import { validateNewsletterForm } from "../utils/validation";

const Mail = ({ size = 32, strokeWidth = 2 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);

const CheckCircle = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
);

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateNewsletterForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await subscribeToNewsletter(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        setSubmitMessage(response.message);
        setFormData({ name: '', email: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-cream py-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-10 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 text-green-600 w-16 h-16 flex items-center justify-center rounded-full">
              <CheckCircle size={32} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">{submitMessage}</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-orangeHat hover:text-orange-600 font-medium"
          >
            Subscribe another email
          </button>
        </motion.div>
      </section>
    );
  }
  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-10 text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-orangeHat/10 text-orangeHat w-16 h-16 flex items-center justify-center rounded-full">
            <Mail size={32} />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay Connected
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Subscribe to receive inspiring updates, community news, and
          upcoming events from the Orange Hat community.
        </p>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full sm:w-1/3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className={`w-full px-5 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orangeHat text-gray-700 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.name && <p className="error-text mt-1 text-left">{errors.name}</p>}
          </div>
          
          <div className="w-full sm:w-1/2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              className={`w-full px-5 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orangeHat text-gray-700 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.email && <p className="error-text mt-1 text-left">{errors.email}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-orangeHat to-greenHat text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>

        {submitMessage && !isSubmitted && (
          <p className="text-red-600 mt-4">{submitMessage}</p>
        )}

        <p className="text-xs text-gray-500 mt-6">
          We value your privacy. You can unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};

export default Newsletter;