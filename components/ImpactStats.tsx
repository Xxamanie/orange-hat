import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// --- Icon Components ---
const iconProps = {
  size: 42,
  strokeWidth: 1.5,
};

const Users = ({ size = 42, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const GraduationCap = ({ size = 42, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z"/>
    <path d="M22 10v6"/>
    <path d="M6 12.5V16a6 6 0 0 0 12 0v-3.5"/>
  </svg>
);

const HeartHandshake = ({ size = 42, strokeWidth = 1.5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 0 1 3.08 0v0c.82.82.82 2.13 0 2.94l-3 3" />
    </svg>
);

const HandHeart = ({ size = 42, strokeWidth = 1.5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
        <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.7-2.9l-4.2 4.3c-.4.4-.9.6-1.4.6H12a2 2 0 1 1 0-4h2" />
    </svg>
);

const stats = [
  {
    icon: <Users {...iconProps} />,
    number: 200,
    suffix: "+",
    label: "Children Impacted",
  },
  {
    icon: <GraduationCap {...iconProps} />,
    number: 50,
    suffix: "+",
    label: "Young Women Trained",
  },
  {
    icon: <HeartHandshake {...iconProps} />,
    number: 20,
    suffix: "+",
    label: "Staff & Volunteers",
  },
  {
    icon: <HandHeart {...iconProps} />,
    number: 5,
    suffix: "",
    label: "Years of Service",
  },
];

const ImpactStats = () => {
  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #F57C00 0%, #FB8C00 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/10 to-transparent opacity-50"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center z-10">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm shadow-md">
              {item.icon}
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp start={0} end={item.number} duration={2.5} suffix={item.suffix} />
            </h3>
            <p className="text-sm uppercase tracking-wide opacity-90">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;