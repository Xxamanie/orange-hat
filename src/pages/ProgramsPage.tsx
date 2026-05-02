import React from 'react';
import { PageHero, ProgramsSection } from '../components/SiteSections';

const ProgramsPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={<>Practical pathways to <em>growth</em></>}
        lead="Explore the initiatives Orange Hat uses to support learning, restoration, discipleship, vocational training, and long-term stability."
        image="/images/holiday.jpeg"
      />
      <ProgramsSection />
    </>
  );
};

export default ProgramsPage;
