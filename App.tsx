import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Media from './pages/Media';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import StoriesPage from './pages/StoriesPage';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: string) => {
    const validPage = page as PageType;
    setCurrentPage(validPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'media':
        return <Media />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'programs':
        return <ProgramsPage onNavigate={handleNavigate} />;
      case 'get-involved':
        return <GetInvolvedPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'stories':
        return <StoriesPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="bg-gray-100 text-gray-800">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        {renderPage()}
        <Footer onNavigate={handleNavigate} />
      </div>
    </ErrorBoundary>
  );
};

export default App;