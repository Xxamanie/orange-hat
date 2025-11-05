import React from "react";
import { motion } from "framer-motion";

const Quote = ({ size = 40, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
    </svg>
  );

const Testimonial = () => {
  return (
    <section className="bg-cream py-24 px-6 md:px-12 relative">
      <div className="absolute left-0 top-0 h-full w-2 bg-orangeHat rounded-r-full"></div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-orangeHat rounded-full"></div>
            <p className="text-orangeHat font-semibold uppercase tracking-wider text-sm">
              Impact Story
            </p>
          </div>

          <Quote size={40} className="text-orangeHat mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-6">
            “The Orange Hat has changed my life — I now dream bigger and believe
            in myself.”
          </h2>

          <p className="text-gray-700 mb-6">
            Grace joined the <strong>Lovin’ Oven Bakery Training</strong> in
            2022. Through mentorship, community support, and skill development,
            she discovered her purpose and confidence. Today, she mentors other
            young women to dream again.
          </p>

          <div className="mt-6">
            <p className="font-semibold text-gray-900">— Grace, Graduate</p>
            <p className="text-sm text-gray-600">
              Lovin’ Oven Program Beneficiary
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#"
              className="inline-block border-2 border-orangeHat text-orangeHat px-8 py-3 rounded-full hover:bg-orangeHat hover:text-white transition-all"
            >
              Read More Stories
            </a>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://picsum.photos/seed/grace/500/500"
              alt="Grace - Lovin Oven Graduate"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;