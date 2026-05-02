import React from 'react';
import { ContactSection, PageHero } from '../components/SiteSections';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Start a conversation with <em>Orange Hat</em></>}
        lead="If you want to give, volunteer, ask a question, or explore a partnership, this page is the direct route."
        image="/images/joel.jpg"
      />
      <ContactSection />
    </>
  );
};

export default ContactPage;
