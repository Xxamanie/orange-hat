import { useState } from "react";

// Replaced lucide-react icons with inline SVGs for simplicity
const Menu = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header = ({ onNavigate, currentPage }: HeaderProps) => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Programs", page: "programs" },
    { name: "Get Involved", page: "get-involved" },
    //{ name: "Media", page: "media" },
    { name: "Contact", page: "contact" },
  ];
  
  const handleNavClick = (page: string) => {
    onNavigate(page);
    setNavOpen(false);
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Placeholder for logo.png */}
          <img src="/images/logo.png" alt="Orange Hat Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-semibold text-white">Orange Hat</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.page)}}
              className={`transition-colors ${currentPage === link.page ? 'text-orangeHat' : 'hover:text-orangeHat'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Support Button */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleNavClick('support')}}
          className="hidden md:inline-block bg-orangeHat text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          Support Us
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
        >
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md border-t border-orangeHat">
          <nav className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.page)}}
                className={`transition-colors ${currentPage === link.page ? 'text-orangeHat' : 'hover:text-orangeHat'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick('support')}}
              className="bg-orangeHat text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Support Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;