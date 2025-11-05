import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icons ---
const UtensilsCrossed = ({ size = 40 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 1.6.8 2.5.2l5.2-3.2c.7-.4 1.1-1.1 1.1-2.1V9l-6 6z"/><path d="m2 16 6 6"/></svg>
);
const HeartHandshake = ({ size = 40 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 0 1 3.08 0v0c.82.82.82 2.13 0 2.94l-3 3"/></svg>
);
const BookOpen = ({ size = 40 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const Play = ({ size = 28 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);


const programs = [
  {
    title: "Lovin’ Oven Initiative",
    desc: "A skill development program that teaches baking and catering to young women and caregivers — building both confidence and a source of income.",
    image: "https://picsum.photos/seed/program-lovinoven/800/600",
    story: "“I never believed I could earn from my passion for baking — until Lovin’ Oven trained me. Now I bake for schools and events in my community.” – Grace, Trainee",
    video: "https://www.youtube.com/embed/1a2b3c4d5e",
    icon: <UtensilsCrossed size={40} />,
    color: "bg-orangeHat/10 text-orangeHat",
  },
  {
    title: "Mentorship & Character Building",
    desc: "A mentoring network that connects children and teens with loving adults who guide them emotionally, spiritually, and academically.",
    image: "https://picsum.photos/seed/program-mentorship/800/600",
    story: "“My mentor helped me believe in myself again. I’m now teaching other girls that they are enough.” – Zainab, Mentee",
    video: "https://www.youtube.com/embed/2b3c4d5e6f",
    icon: <HeartHandshake size={40} />,
    color: "bg-greenHat/10 text-greenHat",
  },
  {
    title: "Childcare & Learning Centers",
    desc: "Safe, nurturing spaces where children receive early education, meals, and moral guidance — shaping a foundation for lifelong growth.",
    image: "https://picsum.photos/seed/program-childcare/800/600",
    story: "“I leave my daughter at the center each morning knowing she’s loved, fed, and learning.” – Mary, Parent",
    video: "https://www.youtube.com/embed/3c4d5e6f7g",
    icon: <BookOpen size={40} />,
    color: "bg-blue-100 text-blue-600",
  },
];

const ProgramsPage = ({ onNavigate }) => {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <main className="pt-[90px] bg-white text-gray-800">
      {/* Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4">
          Our Programs
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Every initiative at Orange Hat is a bridge of hope — connecting hearts, skills, and opportunities to transform lives.
        </p>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto space-y-28">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center group"
          >
            {/* Image with Glow */}
            <div className={`relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 group-hover:shadow-orangeHat/30 group-hover:shadow-2xl ${i % 2 !== 0 ? "md:order-last" : ""}`}>
              <img src={program.image} alt={program.title} className="rounded-2xl object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              {/* Play Button Overlay */}
              <a href={program.video} target="_blank" rel="noreferrer" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white text-orangeHat w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <Play size={28} />
                </div>
              </a>
            </div>

            {/* Text */}
            <div className={`${i % 2 !== 0 ? "md:order-first" : ""}`}>
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${program.color}`}>
                {program.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4">{program.title}</h2>
              <p className="text-gray-700 mb-6">{program.desc}</p>
              <blockquote className="italic text-gray-600 bg-orangeHat/5 p-4 rounded-xl border-l-4 border-orangeHat mb-6">
                {program.story}
              </blockquote>
              <a href="#" onClick={(e) => handleNavClick(e, 'get-involved')} className="inline-block border-2 border-orangeHat text-orangeHat px-8 py-3 rounded-full hover:bg-orangeHat hover:text-white transition-all">
                Support This Program
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Impact Highlight */}
      <section className="bg-green-50 py-20 px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-6">
          Our Impact in Numbers
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { label: "Children Reached", value: "1,500+" },
            { label: "Women Trained", value: "250+" },
            { label: "Communities Served", value: "10+" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.8 }} viewport={{ once: true }} className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-4xl font-bold text-orangeHat mb-2">{stat.value}</h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orangeHat text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Be Part of the Change</h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Together we can equip more children and women with tools for a brighter future.
        </p>
        <a href="#" onClick={(e) => handleNavClick(e, 'get-involved')} className="bg-white text-orangeHat px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition">
          Get Involved
        </a>
      </section>
    </main>
  );
};

export default ProgramsPage;