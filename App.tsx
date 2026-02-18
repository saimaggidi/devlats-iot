import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SmartFeatures from './components/SmartFeatures';
import HowItWorks from './components/HowItWorks';
import IndustrySolutions from './components/IndustrySolutions';
import CompliancePricing from './components/CompliancePricing';
import Pricing from './components/Pricing';
import ContactSales from './components/ContactSales';
import GlobalMap from './components/GlobalMap';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'quote' | 'plans' | 'partners'>('home');

  const navigateToQuote = () => {
    setCurrentPage('quote');
    window.scrollTo(0, 0);
  };

  const navigateToPlans = () => {
    setCurrentPage('plans');
    window.scrollTo(0, 0);
  };

  const navigateToPartners = () => {
    setCurrentPage('partners');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar 
        onGetQuote={navigateToQuote} 
        onLogoClick={navigateToHome} 
        onPlansClick={navigateToPlans} 
        onPartnersClick={navigateToPartners}
        variant={currentPage === 'home' ? 'home' : 'inner'}
      />
      
      {currentPage === 'home' && (
        <>
          <Hero onStartTrial={navigateToQuote} />
          <Features />
          <SmartFeatures />
          <HowItWorks />
          <IndustrySolutions />
          <CompliancePricing />
          <GlobalMap />
        </>
      )}

      {currentPage === 'quote' && (
        <div className="pt-20 min-h-[80vh] animate-fade-in">
           <ContactSales />
        </div>
      )}

      {currentPage === 'plans' && (
        <div className="pt-20 min-h-[80vh] animate-fade-in">
           <Pricing />
        </div>
      )}

      {currentPage === 'partners' && (
         <Partners />
      )}
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;