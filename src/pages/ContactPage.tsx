import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavigationProps, ContactFormData } from "../types";
import { submitContactForm } from "../utils/api";
import { validateContactForm } from "../utils/validation";
import { APP_CONFIG, SOCIAL_LINKS } from "../utils/constants";

// --- SVG Icon Components ---
const MapPin = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const Mail = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const Phone = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const CheckCircle = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
);

const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
);
const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
);
const YoutubeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 5.83-.07.8-.16 1.43-.28 1.9-.29 1.05-.83 1.98-2.17 2.17C16.96 22 12 22 12 22s-4.96 0-7.17-.44c-1.34-.19-1.88-1.12-2.17-2.17-.07-.47-.16-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-5.83.07-.8.16-1.43.28-1.9.29-1.05.83-1.98 2.17-2.17C7.04 2 12 2 12 2s4.96 0 7.17.44c1.34.19 1.88-1.12 2.17 2.17z"/></svg>
);


const ContactPage: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await submitContactForm(formData);
      
      if (response.success) {
        setSubmitted(true);
        setSubmitMessage(response.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-[90px] bg-white text-gray-800">
      {/* Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We’d love to hear from you. Whether you have a question, a suggestion, or want to get involved, please reach out.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info & Map */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-orangeHat/10 text-orangeHat p-3 rounded-full flex-shrink-0"><MapPin /></div>
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="text-gray-600 text-sm">{APP_CONFIG.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orangeHat/10 text-orangeHat p-3 rounded-full flex-shrink-0"><Mail /></div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href={`mailto:${APP_CONFIG.email}`} className="text-gray-600 text-sm hover:underline">{APP_CONFIG.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orangeHat/10 text-orangeHat p-3 rounded-full flex-shrink-0"><Phone /></div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600 text-sm">{APP_CONFIG.phone}</p>
                </div>
              </div>
            </div>
            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62883.33924036079!2d8.847589578271034!3d9.89445963288102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373a2a3e5c969%3A0x70557453303c7344!2sJos%2C%20Plateau!5e0!3m2!1sen!2sng!4v1695663737332!5m2!1sen!2sng"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Orange Hat Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name" 
                  required 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  required 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  required 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.subject && <p className="error-text">{errors.subject}</p>}
              </div>
              
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..." 
                  required 
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-orangeHat text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            
            {submitted && (
              <p className="text-green-600 flex items-center gap-2 mt-4">
                <CheckCircle /> {submitMessage}
              </p>
            )}
            
            {submitMessage && !submitted && (
              <p className="text-red-600 mt-4">{submitMessage}</p>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Footer */}
      <section className="bg-orangeHat text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Follow us on social media and join our community of changemakers.
        </p>
        <div className="flex justify-center space-x-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </a>
          </div>
      </section>
    </main>
  );
};

export default ContactPage;
