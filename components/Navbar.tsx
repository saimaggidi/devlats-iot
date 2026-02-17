import React, { useState, useEffect } from 'react';
import { Menu, X, CloudLightning } from 'lucide-react';

interface NavbarProps {
  onGetQuote: () => void;
  onLogoClick: () => void;
  onPlansClick: () => void;
  onPartnersClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetQuote, onLogoClick, onPlansClick, onPartnersClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Platform', 'Solutions', 'Plans', 'Partners'];

  const handleLinkClick = (link: string) => {
    if (link === 'Plans') {
      onPlansClick();
    } else if (link === 'Partners') {
      onPartnersClick();
    } else {
      onLogoClick();
    }
    setMobileMenuOpen(false);
  };

  const isActive = (link: string) => {
      // Simple visual check logic if needed, currently handling mostly via routing resets in parent
      return false; 
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-brand-950/90 backdrop-blur-md shadow-lg border-b border-brand-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={onLogoClick}
        >
            <div className="bg-brand-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_10px_rgba(32,98,115,0.5)]">
                <CloudLightning className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-white tracking-tight">
                Devlats-IoT
            </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
                key={link} 
                className="relative group cursor-pointer" 
                onClick={() => handleLinkClick(link)}
            >
              <span className={`text-slate-300 hover:text-white font-medium text-[1.2rem] flex items-center gap-1 transition-colors ${link === 'Plans' || link === 'Partners' ? 'hover:text-brand-300' : ''}`}>
                {link} 
              </span>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
            <button 
                onClick={onGetQuote}
                className="bg-brand-500 hover:bg-brand-400 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(32,98,115,0.4)]"
            >
                Get a Quote
            </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-900 border-b border-brand-800 p-6 flex flex-col gap-4 animate-slide-up shadow-2xl h-screen overflow-y-auto pb-32">
            {navLinks.map((link) => (
                <a 
                    key={link} 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
                    className="text-slate-300 hover:text-brand-300 font-medium text-lg border-b border-brand-800 pb-2"
                >
                    {link}
                </a>
            ))}
            <button 
                onClick={() => { setMobileMenuOpen(false); onGetQuote(); }}
                className="bg-brand-500 text-white w-full py-3 rounded-lg font-bold mt-4"
            >
                Get a Quote
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;