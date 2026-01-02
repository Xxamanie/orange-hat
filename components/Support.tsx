import React from 'react';
import { APP_CONFIG, DONATION_CONFIG } from '../utils/constants';

const Support: React.FC = () => {
  const handleDonateClick = () => {
    window.open(DONATION_CONFIG.paystackUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mt-16 mx-auto max-w-2xl px-6 text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Support Orange Hat
      </h2>
      
      {/* Body Text */}
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Orange Hat Childcare Foundation is dedicated to empowering children, young women, and young men through 
        education, skill development, mentorship, and community. From after-school programs 
        and holiday learning weeks to bakery training, life skills education, and mentorship 
        initiatives, every program inspires growth, confidence, and hope. Your support helps 
        Orange Hat expand these programs, reach more lives, and create lasting impact in the community.
      </p>
      
      {/* Donation Button */}
      <button
        onClick={handleDonateClick}
        className="bg-greenHat hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-4"
        aria-label="Donate to Orange Hat via Paystack"
      >
        Donate Now
      </button>
      
      {/* Bank Transfer Note */}
      <p className="text-sm text-gray-500">
        Prefer bank transfer? Please contact us at{' '}
        <a 
          href={`mailto:${APP_CONFIG.email}`}
          className="text-orangeHat hover:text-orange-600 underline"
        >
          {APP_CONFIG.email}
        </a>
      </p>
    </div>
  );
};

export default Support;