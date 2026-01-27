import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Stats from '../components/Stats';
import ImpactStats from '../components/ImpactStats';
import GetInvolved from '../components/GetInvolved';
import Newsletter from '../components/Newsletter';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import ContactSection from '../components/ContactSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main className="space-y-0">
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* About Section with background */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <AboutSection onNavigate={onNavigate} />
      </div>

      {/* Programs Section */}
      <Programs onNavigate={onNavigate} />

      {/* Featured Programs with background */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <ProgramsSection onNavigate={onNavigate} />
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Impact Stats with background */}
      <div className="bg-gradient-to-b from-white to-orange-50/30">
        <ImpactStats />
      </div>

      {/* Get Involved Section */}
      <GetInvolved onNavigate={onNavigate} />

      {/* Contact Section with background */}
      <div className="bg-gradient-to-b from-orange-50/30 to-white">
        <ContactSection onNavigate={onNavigate} />
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
};

export default HomePage;
