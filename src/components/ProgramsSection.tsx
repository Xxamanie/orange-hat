import { MouseEvent } from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icons ---
const UtensilsCrossed = ({ size = 40 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 1.6.8 2.5.2l5.2-3.2c.7-.4 1.1-1.1 1.1-2.1V9l-6 6z"/><path d="m2 16 6 6"/></svg>
);
const HeartHandshake = ({ size = 40 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 1 1 3.08 0v0c.82.82.82 2.13 0 2.94l-3 3"/></svg>
);
const BookOpen = ({ size = 40 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

const programs = [
  {
    title: "Lovin' Oven Initiative",
    desc: "A skill development program that teaches baking and catering to young women and caregivers — building both confidence and a source of income.",
    image: "/images/lovin' oven.jpg",
    story: "\"I never believed I could earn from my passion for baking — until Lovin' Oven trained me. Now I bake for schools and events in my community.\" – Mama, Trainee",
    icon: <UtensilsCrossed size={40} />,
    color: "bg-orangeHat/10 text-orangeHat",
  },
  {
    title: "Mentorship & Character Building (HWOLEMEN)",
    desc: "Mature men mentor young men. Young men are empowered through meaningful relationships with mature men. Rehabilitation, Skill acquisition, Life skills training, Belonging — Providing accountability and a place to grow and belong.",
    image: "/images/wholemen.jpeg",
    icon: <HeartHandshake size={40} />,
    color: "bg-greenHat/10 text-greenHat",
  },
  {
    title: "Learning Center",
    desc: "Safe, nurturing spaces where children receive early education, meals, and moral guidance — shaping a foundation for lifelong growth.",
    image: "/images/learning center.jpg",
    icon: <BookOpen size={40} />,
    color: "bg-blue-100 text-blue-600",
  },
];

interface ProgramsSectionProps {
  onNavigate: (page: string) => void;
}

const ProgramsSection = ({ onNavigate }: ProgramsSectionProps) => {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Programs</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Every initiative at Orange Hat is a bridge of hope — connecting hearts, skills, and opportunities to transform lives.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${program.color}`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{program.desc}</p>
              <blockquote className="italic text-gray-600 bg-gray-50 p-3 rounded-lg border-l-4 border-orangeHat mb-4 text-sm">
                {program.story}
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'programs')}
          className="inline-block bg-orangeHat text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          View All Programs →
        </a>
      </div>
    </section>
  );
};

export default ProgramsSection;
