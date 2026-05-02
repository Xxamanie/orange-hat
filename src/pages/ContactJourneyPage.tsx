import React from 'react';
import { ContactDetailSection, PageHero, contactJourneys } from '../components/SiteSections';

const ContactJourneyPage: React.FC<{
  path: '/contact/give' | '/contact/volunteer' | '/contact/sponsor' | '/contact/partner' | '/contact/enquire';
}> = ({ path }) => {
  const journey = contactJourneys.find((item) => item.path === path) ?? contactJourneys[0];

  return (
    <>
      <PageHero
        eyebrow={journey.label}
        title={<>{journey.title} with <em>purpose</em></>}
        lead={journey.lead}
        image={journey.image}
      />
      <ContactDetailSection journeyPath={journey.path} />
    </>
  );
};

export default ContactJourneyPage;
