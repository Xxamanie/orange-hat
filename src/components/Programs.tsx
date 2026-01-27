import { motion } from "framer-motion";
import { programs } from "../data/programs";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bg-white shadow-md rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${prog.image})` }}
                  role="img"
                  aria-label={prog.title}
                ></div>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {prog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{prog.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span className="bg-gray-100 px-2 py-1 rounded">{prog.category}</span>
                  <span>{prog.targetAge}</span>
                </div>
                <a
                  href="#"
                  className="text-orangeHat font-medium hover:underline text-sm"
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