import React from 'react';
import { PageHero, StaffSection } from '../components/SiteSections';

const TeamPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={<>The people carrying the <em>work</em></>}
        lead="Meet the educators, caregivers, and leaders who help turn Orange Hat's mission into everyday action."
        image="/images/blessing.jpg"
      />
      <StaffSection />
    </>
  );
};

export default TeamPage;
