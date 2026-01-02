import React from "react";

// Inline SVG Icons for simplicity and consistency
const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
);

const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
);

const YoutubeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 5.83-.07.8-.16 1.43-.28 1.9-.29 1.05-.83 1.98-2.17 2.17C16.96 22 12 22 12 22s-4.96 0-7.17-.44c-1.34-.19-1.88-1.12-2.17-2.17-.07-.47-.16-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-5.83.07-.8.16-1.43.28 1.9.29-1.05.83-1.98 2.17-2.17C7.04 2 12 2 12 2s4.96 0 7.17.44c1.34.19 1.88-1.12 2.17 2.17z"/></svg>
);


const Footer = ({ onNavigate }) => {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
  };
  
  return (
    <footer className="bg-orangeHat text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Column 1: Logo & Mission */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-orangeHat text-xl">
              O
            </div>
            <h1 className="text-2xl font-semibold">Orange Hat</h1>
          </div>
          <p className="text-orange-50 text-sm leading-relaxed">
            Creating safe spaces where children and their caregivers can grow spiritually, 
            relationally, and academically to positively impact their world.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-orange-50 text-sm">
            <li><a href="#" onClick={(e) => handleNavClick(e, 'about')} className="hover:underline">About Us</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, 'programs')} className="hover:underline">Programs</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, 'get-involved')} className="hover:underline">Get Involved</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-orange-50 mb-4">
            COCIN Church Jiyep, Hwolshe, Jos, Plateau State, Nigeria  
            <br /> Email:{" "}
            <a href="mailto:info@orangehat.org" className="underline hover:text-white">
              info@orangehat.org
            </a>
          </p>

          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm text-orange-50">
        © {new Date().getFullYear()} Orange Hat Childcare Foundation. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;