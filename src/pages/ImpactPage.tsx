import React from 'react';
import { ImpactSection, PageHero } from '../components/SiteSections';

const ImpactPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title={<>A closer look at our <em>reach</em></>}
        lead="A snapshot of how Orange Hat serves children, youth, caregivers, and volunteers through focused programs and long-term support."
        image="/images/rooted house.jpeg"
      />
      <ImpactSection />
    </>
  );
};

export default ImpactPage;
