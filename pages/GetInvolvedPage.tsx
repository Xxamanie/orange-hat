import React, { useState } from "react";
import { motion } from "framer-motion";

// --- SVG Icon Components ---
const Users = ({ size = 40, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const HeartHandshake = ({ size = 40, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 0 1 3.08 0v0c.82.82.82 2.13 0 2.94l-3 3"/></svg>
);
const HandHeart = ({ size = 40, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.7-2.9l-4.2 4.3c-.4.4-.9.6-1.4.6H12a2 2 0 1 1 0-4h2"/></svg>
);
const CheckCircle = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
);


const GetInvolvedPage = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState(null);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    setFormType(type);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <main className="pt-[90px] bg-white text-gray-800">
      {/* Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4">
          Get Involved
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          There are many ways to join the Orange Hat story — volunteer, partner, or donate to support children and families in need.
        </p>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center" id="volunteer">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <img src="https://picsum.photos/seed/volunteer/800/600" alt="Volunteer with Orange Hat" className="rounded-2xl shadow-md object-cover w-full h-96" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6"><Users size={40} className="text-orangeHat" /><h2 className="text-3xl font-bold">Volunteer With Us</h2></div>
          <p className="text-gray-700 mb-6">Become part of a growing team of mentors, educators, and caregivers creating safe spaces for children to learn and thrive.</p>
          <form onSubmit={(e) => handleSubmit(e, "Volunteer")} className="space-y-4">
            <input type="text" placeholder="Full name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat" />
            <input type="email" placeholder="Email address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat" />
            <textarea placeholder="Tell us why you’d like to volunteer..." required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat"></textarea>
            <button type="submit" className="bg-orangeHat text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Submit</button>
          </form>
          {submitted && formType === "Volunteer" && (<p className="text-green-600 flex items-center gap-2 mt-4"><CheckCircle size={18} /> Thank you! We’ll reach out soon.</p>)}
        </motion.div>
      </section>

      {/* Partner Section */}
      <section className="bg-green-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center" id="partner">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:order-last">
            <img src="https://picsum.photos/seed/partner/800/600" alt="Partner with Orange Hat" className="rounded-2xl shadow-md object-cover w-full h-96" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:order-first">
            <div className="flex items-center gap-3 mb-6"><HeartHandshake size={40} className="text-greenHat" /><h2 className="text-3xl font-bold">Partner or Sponsor</h2></div>
            <p className="text-gray-700 mb-6">Join hands with us through sponsorship, skill-sharing, or material donations to expand our reach and sustain our programs.</p>
            <form onSubmit={(e) => handleSubmit(e, "Partner")} className="space-y-4">
              <input type="text" placeholder="Organization / Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenHat" />
              <input type="email" placeholder="Email address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenHat" />
              <textarea placeholder="Describe your intended partnership or area of support..." required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenHat"></textarea>
              <button type="submit" className="bg-greenHat text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">Submit</button>
            </form>
            {submitted && formType === "Partner" && (<p className="text-green-600 flex items-center gap-2 mt-4"><CheckCircle size={18} /> Thank you! We’ll contact you shortly.</p>)}
          </motion.div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center" id="donate">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <img src="https://picsum.photos/seed/donate/800/600" alt="Donate to Orange Hat" className="rounded-2xl shadow-md object-cover w-full h-96" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6"><HandHeart size={40} className="text-orangeHat" /><h2 className="text-3xl font-bold">Support With a Donation</h2></div>
          <p className="text-gray-700 mb-6">Every contribution helps sustain education, feeding, and mentorship programs for children and women. Your giving makes hope tangible.</p>
          <form onSubmit={(e) => handleSubmit(e, "Donate")} className="space-y-4">
            <input type="number" placeholder="Donation amount (₦)" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat" />
            <input type="text" placeholder="Full name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat" />
            <input type="email" placeholder="Email address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orangeHat" />
            <button type="submit" className="bg-orangeHat text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Donate Now</button>
          </form>
          {submitted && formType === "Donate" && (<p className="text-green-600 flex items-center gap-2 mt-4"><CheckCircle size={18} /> Thank you! Your kindness fuels our mission.</p>)}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-orangeHat text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Together, We Create Change</h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Your time, skills, and generosity are what make Orange Hat thrive. Join us today.
        </p>
        <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="bg-white text-orangeHat px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition">
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default GetInvolvedPage;