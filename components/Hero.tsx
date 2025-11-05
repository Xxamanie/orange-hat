import React from "react";
import { motion } from "framer-motion";

const Hero = ({ onNavigate }) => {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <section
      className="relative h-[100vh] flex items-center justify-center text-center text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm scale-105"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/orangehat/1920/1080')",
        }}
        role="presentation"
      ></div>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" role="presentation"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 md:px-10 max-w-3xl"
      >
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold leading-tight text-orange-100 drop-shadow-md">
          Building Hope Through Love, Learning, and Community.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-100">
          Creating safe spaces where children and caregivers grow spiritually,
          relationally, and academically.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'get-involved')}
            className="bg-orangeHat text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Get Involved
          </a>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'get-involved')}
            className="border-2 border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-orangeHat transition-all"
          >
            Donate Now
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;