import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SmartFeatures from './components/SmartFeatures';
import HowItWorks from './components/HowItWorks';
import IndustrySolutions from './components/IndustrySolutions';
import CompliancePricing from './components/CompliancePricing';
import GlobalMap from './components/GlobalMap';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <SmartFeatures />
      <HowItWorks />
      <IndustrySolutions />
      <CompliancePricing />
      
      {/* Dynamic CTA Banner */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Start your journey with Cloudi-Fi</h2>
            <button className="bg-brand-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-400 hover:scale-105 transition-all">
                Get Cloudi-Fi
            </button>
        </div>
      </section>
      
      <GlobalMap />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
