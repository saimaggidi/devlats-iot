import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Globe, Wifi, Smartphone, Cpu, CheckCircle2, PlayCircle } from 'lucide-react';

interface HeroProps {
    onStartTrial: () => void;
}

const clientLogos = [
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', h: 'h-6 md:h-7' },
  { name: 'Hotel Kapila', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNjAiPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQnJ1c2ggU2NyaXB0IE1ULCBjdXJzaXZlIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzJFN0QzMiI+SG90ZWwgS2FwaWxhPC90ZXh0Pjwvc3ZnPg==', h: 'h-10 md:h-12' },
  { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg', h: 'h-6 md:h-8' },
  { name: 'McDonalds', url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg', h: 'h-8 md:h-10' }
];

const Hero: React.FC<HeroProps> = ({ onStartTrial }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isTyping1, setIsTyping1] = useState(true);
  
  const line1Full = "The Last Mile of";
  const line2Full = "Zero Trust";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (text1.length < line1Full.length) {
      timeout = setTimeout(() => {
        setText1(line1Full.slice(0, text1.length + 1));
      }, 50);
    } else if (isTyping1) {
       // Pause briefly before starting line 2
       timeout = setTimeout(() => {
           setIsTyping1(false);
       }, 200);
    }

    return () => clearTimeout(timeout);
  }, [text1, isTyping1]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isTyping1 && text2.length < line2Full.length) {
        timeout = setTimeout(() => {
            setText2(line2Full.slice(0, text2.length + 1));
        }, 100);
    }
    return () => clearTimeout(timeout);
  }, [text2, isTyping1]);

  return (
    <div className="relative min-h-[90vh] bg-slate-950 overflow-hidden flex flex-col justify-center pt-24 lg:pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-slate-900 to-brand-950"></div>
          {/* Animated Blobs */}
           <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] animate-blob"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
           {/* Grid Pattern */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left animate-slide-up">
                 {/* Badge */}
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/50 border border-brand-500/30 text-brand-200 text-xs font-bold uppercase tracking-wider backdrop-blur-sm mx-auto lg:mx-0">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                    Identity-First Security
                 </div>

                 <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight min-h-[3.3em] lg:min-h-[2.2em]">
                    {text1}
                    {isTyping1 && <span className="animate-pulse text-brand-400">|</span>}
                    <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-200 to-brand-100">
                        {text2}
                    </span>
                    {!isTyping1 && <span className="animate-pulse text-brand-400 ml-1">|</span>}
                 </h1>

                 <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Secure the unmanaged. Cloudi-Fi is the only cloud-native platform that unifies authentication and security for <strong>Guest Wi-Fi</strong>, <strong>BYOD</strong>, and <strong>IoT devices</strong>—without additional hardware.
                 </p>

                 {/* Action Buttons */}
                 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                    <button 
                        onClick={onStartTrial}
                        className="bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(32,98,115,0.3)] hover:shadow-[0_0_30px_rgba(32,98,115,0.5)] flex items-center justify-center gap-2 group"
                    >
                        Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold text-white border border-slate-700 hover:bg-slate-800/50 transition-all flex items-center justify-center gap-2">
                        <PlayCircle className="w-5 h-5 text-slate-400" /> Watch Demo
                    </button>
                 </div>

                 {/* Use Case Tags */}
                 <div className="pt-8 border-t border-slate-800/50 flex flex-col items-center lg:items-start gap-4">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Securing connectivity for</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {['Guest Wi-Fi', 'BYOD Workforce', 'IoT / OT Devices', 'Smart Buildings'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium hover:border-brand-500/30 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Right Visual - Connectivity Flow Diagram */}
            <div className="lg:w-1/2 w-full relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
                 <div className="relative z-10">
                    {/* Main Glass Panel */}
                    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                        
                        {/* Header text for the diagram */}
                        <div className="flex justify-between items-center mb-10 border-b border-slate-800 pb-4">
                            <span className="text-xs font-mono text-brand-400">CLOUDI-FI PLATFORM</span>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative">
                            
                            {/* Left Column: Unmanaged Sources */}
                            <div className="flex flex-col gap-4 z-10 w-full sm:w-auto">
                                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center gap-3 w-full sm:w-48 shadow-lg transform hover:-translate-x-2 transition-transform cursor-default">
                                    <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center"><Wifi className="w-5 h-5 text-brand-300" /></div>
                                    <div>
                                        <div className="text-white text-sm font-bold">Guest Wi-Fi</div>
                                        <div className="text-xs text-slate-500">Unverified Users</div>
                                    </div>
                                </div>
                                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center gap-3 w-full sm:w-48 shadow-lg transform hover:-translate-x-2 transition-transform cursor-default">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center"><Smartphone className="w-5 h-5 text-purple-300" /></div>
                                    <div>
                                        <div className="text-white text-sm font-bold">BYOD</div>
                                        <div className="text-xs text-slate-500">Personal Devices</div>
                                    </div>
                                </div>
                                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center gap-3 w-full sm:w-48 shadow-lg transform hover:-translate-x-2 transition-transform cursor-default">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center"><Cpu className="w-5 h-5 text-orange-300" /></div>
                                    <div>
                                        <div className="text-white text-sm font-bold">IoT / OT</div>
                                        <div className="text-xs text-slate-500">Smart Sensors</div>
                                    </div>
                                </div>
                            </div>

                            {/* Center: The Process (Animated Lines) */}
                            <div className="flex-1 h-16 sm:h-auto w-full sm:w-auto flex flex-row sm:flex-col items-center justify-center relative">
                                {/* Connecting Lines */}
                                <div className="hidden sm:block absolute inset-0">
                                    <svg className="w-full h-full overflow-visible">
                                        <path d="M0,20 C50,20 50,100 100,100" fill="none" stroke="#206273" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                                        <path d="M0,100 C50,100 50,100 100,100" fill="none" stroke="#206273" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                                        <path d="M0,180 C50,180 50,100 100,100" fill="none" stroke="#206273" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                                    </svg>
                                </div>
                                {/* Mobile Vertical Line */}
                                <div className="sm:hidden w-0.5 h-full bg-slate-700 absolute left-1/2 -translate-x-1/2"></div>

                                {/* Shield Badge */}
                                <div className="relative z-20 bg-slate-900 border border-brand-500 rounded-full p-1.5 shadow-[0_0_15px_rgba(32,98,115,0.5)]">
                                    <div className="bg-brand-600 rounded-full p-3">
                                        <ShieldCheck className="w-6 h-6 text-white" />
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full border border-brand-400 animate-ping opacity-20"></div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 text-[10px] font-bold text-brand-300 uppercase tracking-wide bg-slate-900/80 px-2 rounded hidden sm:block">
                                    Authentication
                                </div>
                            </div>

                            {/* Right Column: Secure Outcome */}
                            <div className="z-10 w-full sm:w-auto flex justify-center">
                                <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl flex flex-col items-center gap-3 w-full sm:w-40 text-center shadow-lg hover:shadow-green-900/20 transition-all">
                                    <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-1">
                                        <Globe className="w-7 h-7 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-green-100 font-bold text-sm">Secure Internet</div>
                                        <div className="text-green-500/60 text-xs mt-1">Policy Applied</div>
                                    </div>
                                    <div className="mt-2 flex gap-1">
                                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                                        <span className="text-[10px] text-green-400">Compliance Logged</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements behind the diagram */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500 rounded-full blur-[60px] opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500 rounded-full blur-[60px] opacity-20 animate-pulse"></div>
                 </div>
            </div>
        </div>

        {/* Clients Strip */}
        <div className="mt-24 pt-10 border-t border-slate-800/50">
            <p className="text-center text-slate-500 text-sm font-semibold mb-8 uppercase tracking-widest">Trusted by global industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
                 {clientLogos.map((logo, i) => (
                     <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-center min-w-[120px] sm:min-w-[140px]">
                        <img 
                            src={logo.url} 
                            alt={logo.name} 
                            className={`${logo.h} w-auto object-contain`} 
                        />
                     </div>
                 ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;