import React from "react";
import { motion } from "framer-motion";

const Mail = ({ size = 32, strokeWidth = 2 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);


const Newsletter = () => {
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
          Subscribe to receive inspiring updates, stories of transformation, and
          upcoming events from the Orange Hat community.
        </p>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full sm:w-1/3 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orangeHat text-gray-700"
            required
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-1/2 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orangeHat text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-orangeHat to-greenHat text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-6">
          We value your privacy. You can unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};

export default Newsletter;