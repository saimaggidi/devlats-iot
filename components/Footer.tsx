import React from 'react';
import { CloudLightning, Linkedin, Youtube, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-slate-400 border-t border-brand-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#206273 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        
        {/* Top Section: Newsletter & Branding */}
        <div className="bg-brand-900/50 backdrop-blur-md border border-brand-800 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Stay ahead of security threats</h3>
                <p className="text-slate-400 text-sm">Join 15,000+ network administrators receiving our monthly insights on Zero Trust and Cloud Networking.</p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
                <form className="flex gap-2">
                    <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                            type="email" 
                            placeholder="Enter your work email" 
                            className="w-full bg-brand-950 border border-brand-700 text-white text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                        />
                    </div>
                    <button type="button" className="bg-brand-500 hover:bg-brand-400 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors flex items-center gap-2">
                        Subscribe <ArrowRight className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16 border-b border-brand-900 pb-16">
          
          {/* Brand Column (Wider) */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
             <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-500 p-1.5 rounded-lg shadow-lg shadow-brand-500/20">
                    <CloudLightning className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-display font-bold text-white tracking-tight">
                    Devlats-IoT
                </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-500">
                The only Cloud-native platform that unifies connectivity and security. Deploy instantly across any infrastructure, anywhere in the world.
            </p>
            <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-800 hover:text-white transition-colors border border-brand-800"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-800 hover:text-white transition-colors border border-brand-800"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-800 hover:text-white transition-colors border border-brand-800"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm">
                {['Zero Trust Access', 'Guest Wi-Fi', 'IoT Security', 'Compliance Logs', 'Integrations'].map(item => (
                    <li key={item}><a href="#" className="hover:text-brand-300 transition-colors block py-1">{item}</a></li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
                {['About Us', 'Careers', 'Partners', 'Newsroom', 'Contact Sales'].map(item => (
                    <li key={item}><a href="#" className="hover:text-brand-300 transition-colors block py-1">{item}</a></li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
                {['Blog', 'Case Studies', 'Whitepapers', 'Help Center', 'API Docs'].map(item => (
                    <li key={item}><a href="#" className="hover:text-brand-300 transition-colors block py-1">{item}</a></li>
                ))}
            </ul>
          </div>

           <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Trust Center'].map(item => (
                    <li key={item}><a href="#" className="hover:text-brand-300 transition-colors block py-1">{item}</a></li>
                ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>&copy; {new Date().getFullYear()} Cloudi-Fi SAS. All rights reserved.</div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                System Status: <span className="text-slate-400 hover:text-white cursor-pointer">Operational</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;