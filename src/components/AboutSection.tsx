import { MouseEvent } from "react";
import { motion } from "framer-motion";

// --- SVG Icon Components ---
const Heart = ({ size = 36 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const Users = ({ size = 36 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

const BookOpen = ({ size = 36 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
);

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

const AboutSection = ({ onNavigate }: AboutSectionProps) => {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <>
      {/* Our Story */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/background.jpg"
            alt="Children smiling and learning together"
            className="rounded-2xl shadow-md object-cover w-full h-96"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Orange Hat began as a small community of caregivers and educators who saw the need for consistent mentorship, love, and learning among children in underserved communities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            What started as a few friends visiting children in need has grown into a registered foundation with programs that empower both children and women — nurturing potential, dignity, and hope.
          </p>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'about')}
            className="inline-block border-2 border-orangeHat text-orangeHat px-6 py-3 rounded-full hover:bg-orangeHat hover:text-white transition-all"
          >
            Learn More About Us →
          </a>
        </motion.div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-greenHat/10 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Heartbeat</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Orange Hat Childcare Foundation exists to inspire transformation through love, education, and community support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8 text-center"
          >
            <div className="bg-orangeHat/10 text-orangeHat w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6">
              <Heart size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700 text-sm">
              To empower children and caregivers through education, mentorship, and love — helping them grow into confident and purposeful individuals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8 text-center"
          >
            <div className="bg-orangeHat/10 text-orangeHat w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6">
              <BookOpen size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700 text-sm">
              A community where every child is seen, loved, and equipped to reach their full potential — one family and one community at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8 text-center"
          >
            <div className="bg-orangeHat/10 text-orangeHat w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6">
              <Users size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-gray-700 text-sm">
              We believe in compassion, integrity, community, and faith — these values guide every program, partnership, and conversation.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
