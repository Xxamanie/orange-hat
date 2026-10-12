import React from 'react';
import { InstagramFeedSection, PageHero } from '../components/SiteSections';

const MediaPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title={<>A look at our <em>moments</em></>}
        lead="Recent stories, celebrations, and community moments from Orange Hat — refreshed automatically from Instagram."
        image="/images/holiday.jpeg"
      />
      <InstagramFeedSection />
    </>
  );
};

export default MediaPage;
