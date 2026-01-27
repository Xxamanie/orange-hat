import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// A reusable component to animate numbers counting up
const StatCounter = ({ value, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const stats = [
  { value: 1200, label: "Children Served", suffix: "+" },
  { value: 350, label: "Volunteers Engaged", suffix: "+" },
  { value: 25000, label: "Meals Provided", suffix: "+" },
  { value: 50, label: "Community Partners", suffix: "+" },
];

const Stats = () => {
  return (
    <section className="bg-orange-50 py-24 px-6 md:px-12" aria-labelledby="stats-heading">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          id="stats-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Our Impact in Numbers
        </motion.h2>
        <div className="w-24 h-1 bg-orangeHat mx-auto mt-4 mb-12 rounded-full"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-orangeHat">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm md:text-base text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;