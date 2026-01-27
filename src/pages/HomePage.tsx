import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Stats from '../components/Stats';
import ImpactStats from '../components/ImpactStats';
import GetInvolved from '../components/GetInvolved';
import Newsletter from '../components/Newsletter';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <Programs />
      <Stats />
      <ImpactStats />
      <GetInvolved onNavigate={onNavigate} />
      <Newsletter />
    </main>
  );
};

export default HomePage;
