import React from "react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "After School Adventure",
    desc: "Engaging learning activities that inspire hope, healing, and wholeness through literature for children on their educational journey.",
    image: "https://picsum.photos/seed/program1/400/300",
  },
  {
    title: "Lovin’ Oven Bakery",
    desc: "Empowering young women with bakery and business training — building confidence, professionalism, and community faith.",
    image: "https://picsum.photos/seed/program2/400/300",
  },
  {
    title: "Rooted House",
    desc: "A safe home for young women in crisis, offering life skills, education, and a nurturing community for transformation.",
    image: "https://picsum.photos/seed/program3/400/300",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="bg-white py-24 px-6 md:px-12" aria-labelledby="programs-heading">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          id="programs-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Our Impact Programs
        </motion.h2>

        <div className="w-24 h-1 bg-orangeHat mx-auto mt-4 mb-12 rounded-full"></div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="bg-white shadow-md rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <div
                  className="h-56 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${prog.image})` }}
                  role="img"
                  aria-label={prog.title}
                ></div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {prog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{prog.desc}</p>
                <a
                  href="#"
                  className="text-orangeHat font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
