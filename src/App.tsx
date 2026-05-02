import React, { useEffect, useMemo, useState } from 'react';
import { RoutePath, SiteFooter, SiteNav } from './components/SiteSections';
import ContactPage from './pages/ContactPage';
import ContactJourneyPage from './pages/ContactJourneyPage';
import HomePage from './pages/HomePage';
import ImpactPage from './pages/ImpactPage';
import ProgramsPage from './pages/ProgramsPage';
import TeamPage from './pages/TeamPage';
import './styles/NewDesign.css';

const normalizeRoute = (hash: string): RoutePath => {
  const cleaned = hash.replace(/^#/, '') || '/';

  switch (cleaned) {
    case '/programs':
    case '/team':
    case '/impact':
    case '/contact':
    case '/contact/give':
    case '/contact/volunteer':
    case '/contact/sponsor':
    case '/contact/partner':
    case '/contact/enquire':
      return cleaned;
    default:
      return '/';
  }
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => normalizeRoute(window.location.hash));

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/');
    }

    const handleHashChange = () => {
      setCurrentPath(normalizeRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const page = useMemo(() => {
    switch (currentPath) {
      case '/programs':
        return <ProgramsPage />;
      case '/team':
        return <TeamPage />;
      case '/impact':
        return <ImpactPage />;
      case '/contact':
        return <ContactPage />;
      case '/contact/give':
      case '/contact/volunteer':
      case '/contact/sponsor':
      case '/contact/partner':
      case '/contact/enquire':
        return <ContactJourneyPage path={currentPath} />;
      default:
        return <HomePage />;
    }
  }, [currentPath]);

  return (
    <div className="bg-[#fff8f0] text-[#2c1700]">
      <SiteNav currentPath={currentPath} />
      {page}
      <SiteFooter />
    </div>
  );
};

export default App;
