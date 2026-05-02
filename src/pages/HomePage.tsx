import React from 'react';
import { HomeGatewaySection, HomeHero, MissionStrip } from '../components/SiteSections';

const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <MissionStrip />
      <HomeGatewaySection />
    </>
  );
};

export default HomePage;
