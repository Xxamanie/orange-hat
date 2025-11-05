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

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
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
    <div className="bg-gray-100 text-gray-800">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;