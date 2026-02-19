import React, { useState, useEffect } from 'react';
import { Menu, X, CloudLightning } from 'lucide-react';

interface NavbarProps {
  onGetQuote: () => void;
  onLogoClick: () => void;
  onPlansClick: () => void;
  onPartnersClick: () => void;
  variant?: 'home' | 'inner';
}

const Navbar: React.FC<NavbarProps> = ({ 
  onGetQuote, 
  onLogoClick, 
  onPlansClick, 
  onPartnersClick,
  variant = 'home'
}) => {
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

  // Determine styles based on variant and scroll state
  
  // Background Logic
  const navBackgroundClass = (() => {
    if (mobileMenuOpen) {
      return 'bg-brand-950/90 backdrop-blur-md shadow-lg border-b border-brand-800 py-3';
    }
    if (isScrolled) {
      return 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200 py-3';
    }
    if (variant === 'home') {
      return 'bg-transparent py-5';
    }
    return 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-4';
  })();

  // Text/Content Logic
  // We want Light Text (white/slate-300) if background is Dark.
  // Background is dark if: Mobile Menu Open OR (Home Variant AND Not Scrolled)
  const isLightText = mobileMenuOpen || (variant === 'home' && !isScrolled);

  const textColorClass = isLightText ? 'text-slate-300' : 'text-slate-600';
  const hoverColorClass = isLightText ? 'hover:text-white' : 'hover:text-brand-600';
  const logoTextClass = isLightText ? 'text-white' : 'text-brand-950';
  const toggleButtonClass = isLightText ? 'text-white' : 'text-slate-900';
  const logoBoxClass = isLightText ? 'bg-brand-500' : 'bg-brand-600';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackgroundClass}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={onLogoClick}
        >
            <div className={`p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_10px_rgba(32,98,115,0.5)] ${logoBoxClass}`}>
                <CloudLightning className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-display font-bold tracking-tight transition-colors ${logoTextClass}`}>
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
              <span className={`font-medium text-[1.2rem] flex items-center gap-1 transition-colors ${textColorClass} ${hoverColorClass}`}>
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
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={toggleButtonClass}>
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