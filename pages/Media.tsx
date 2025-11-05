import React from "react";
import { motion } from "framer-motion";

// --- SVG Icon Components ---
const FacebookIcon = ({ className = "" }) => (
    <svg className={`w-8 h-8 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
);

const InstagramIcon = ({ className = "" }) => (
    <svg className={`w-8 h-8 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
);

const YoutubeIcon = ({ className = "" }) => (
    <svg className={`w-8 h-8 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 5.83-.07.8-.16 1.43-.28 1.9-.29 1.05-.83 1.98-2.17 2.17C16.96 22 12 22 12 22s-4.96 0-7.17-.44c-1.34-.19-1.88-1.12-2.17-2.17-.07-.47-.16-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-5.83.07-.8.16-1.43.28-1.9.29-1.05.83-1.98 2.17-2.17C7.04 2 12 2 12 2s4.96 0 7.17.44c1.34.19 1.88-1.12 2.17 2.17z"/></svg>
);


const Media = () => {
  return (
    <main className="pt-[90px] bg-white text-gray-800">
      {/* Page Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Media & Updates
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the latest from our community — stories, events, and impact moments shared across our social media channels.
        </p>
      </section>

      {/* Social Feeds */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto space-y-24">
        {/* Instagram Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold flex items-center gap-3 mb-6">
            <InstagramIcon className="text-pink-500" /> Instagram Highlights
          </h2>
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.instagram.com/p/C3q4Z_vNAoM/embed"
              title="Instagram Feed"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className="rounded-xl"
            ></iframe>
          </div>
        </motion.div>

        {/* Facebook Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold flex items-center gap-3 mb-6">
            <FacebookIcon className="text-blue-600" /> Facebook Timeline
          </h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Forangehatfoundation%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Feed"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </motion.div>

        {/* YouTube Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold flex items-center gap-3 mb-6">
            <YoutubeIcon className="text-red-600" /> YouTube Stories
          </h2>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/videoseries?list=UU7b7-axX-2a5s_1-pS_ub2w"
              title="Orange Hat YouTube Channel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-orangeHat text-white text-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Connected With Us</h2>
          <p className="text-orange-100 mb-8">
            Join our growing online community — share, follow, and help us spread hope to more lives.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com/orangehatfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/orangehatfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@orangehatfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition"
            >
              YouTube
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Media;
