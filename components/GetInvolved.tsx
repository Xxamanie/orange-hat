import React from "react";
import { motion } from "framer-motion";

// --- Icon Components ---
const Users = ({ size = 40, strokeWidth = 1.5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
  
const HeartHandshake = ({ size = 40, strokeWidth = 1.5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 0 1 3.08 0v0c.82.82.82 2.13 0 2.94l-3 3" />
    </svg>
);
  
const HandHeart = ({ size = 40, strokeWidth = 1.5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
        <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.7-2.9l-4.2 4.3c-.4.4-.9.6-1.4.6H12a2 2 0 1 1 0-4h2" />
    </svg>
);

const actions = [
  {
    title: "Volunteer With Us",
    desc: "Join our team of dedicated mentors, teachers, and caregivers who bring hope and learning to children every week.",
    icon: <Users />,
    btnText: "Join as Volunteer",
    color: "bg-orangeHat",
  },
  {
    title: "Partner or Sponsor",
    desc: "Partner with Orange Hat to empower communities and support programs that nurture children and young women.",
    icon: <HeartHandshake />,
    btnText: "Become a Partner",
    color: "bg-orangeHat",
  },
];

const GetInvolved = ({ onNavigate }) => {
  const handleNavClick = (e) => {
    e.preventDefault();
    onNavigate('get-involved');
  };

  return (
    <section className="bg-orange-50 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Get Involved
        </motion.h2>

        <div className="w-24 h-1 bg-orangeHat mx-auto mt-4 mb-12 rounded-full"></div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {actions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-center text-center"
            >
              <div className="bg-orangeHat/10 text-orangeHat w-20 h-20 flex items-center justify-center rounded-full mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{item.desc}</p>

              <a
                href="#"
                onClick={handleNavClick}
                className={`${item.color} text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity`}
              >
                {item.btnText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;