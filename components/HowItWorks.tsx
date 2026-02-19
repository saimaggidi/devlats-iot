import React, { useState, useEffect } from 'react';
import { Wifi, UserCheck, ShieldCheck, Globe, Signal, Battery, Lock, CheckCircle2, ChevronRight, ScanLine, Loader2, Zap, X, QrCode } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Connect',
    description: 'Users access the network by selecting the Free WiFi SSID or scanning the QR code.They are either connected instantly or redirected to a secure verification page.',
    icon: QrCode
  },
  {
    id: 2,
    title: 'Authenticate',
    description: 'A secure login page appears automatically. Users verify access using a one-time password (OTP) sent via SMS or email.',
    icon: UserCheck
  },
  {
    id: 3,
    title: 'Validate',
    description: 'Cloudi-Fi performs real-time security posture checks on the device before granting network access.',
    icon: ShieldCheck
  },
  {
    id: 4,
    title: 'Access',
    description: 'The user is granted secure internet access with applied bandwidth and content filtering policies.',
    icon: Globe
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
      }
    }, 4000); // Change step every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">User Journey</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2">
            Seamless & Secure <br/> 
            <span className="text-brand-500">Live Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Interactive Steps */}
          <div 
            className="space-y-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {steps.map((step) => (
              <div 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-500 border-2 relative overflow-hidden ${
                  activeStep === step.id 
                    ? 'bg-brand-50 border-brand-500 shadow-lg scale-[1.02]' 
                    : 'bg-white border-slate-100 hover:border-brand-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    activeStep === step.id ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${activeStep === step.id ? 'text-brand-900' : 'text-slate-700'}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`ml-auto self-center transition-opacity duration-300 ${activeStep === step.id ? 'opacity-100 text-brand-500' : 'opacity-0'}`}>
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Phone Mockup Live Preview */}
          <div className="relative flex justify-center items-center">
            {/* Background Blob */}
            <div className="absolute w-[500px] h-[500px] bg-brand-100 rounded-full blur-3xl opacity-50 -z-10 animate-blob"></div>
            
            {/* Phone Frame */}
            <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-800">
               {/* Screen Area */}
               <div className="w-full h-full bg-slate-50 rounded-[2.2rem] overflow-hidden relative flex flex-col">
                  
                  {/* Status Bar */}
                  <div className="h-8 bg-slate-900 text-white flex justify-between items-center px-6 text-[10px] font-medium z-20 absolute top-0 left-0 w-full">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                       <Signal className="w-3 h-3" />
                       <span className="text-[10px]">5G</span>
                       <Battery className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Dynamic Screen Content */}
                  <div className="flex-1 relative mt-0 h-full">
                    
                    {/* Screen 1: QR Code Scanner (Camera View) */}
                    {activeStep === 1 && (
                      <div className="absolute inset-0 bg-slate-950 flex flex-col overflow-hidden animate-fade-in">
                        {/* Camera Header */}
                        <div className="absolute top-0 left-0 w-full p-6 pt-12 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
                            <X className="w-5 h-5 text-white/80" />
                            <div className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs font-medium text-white border border-white/10">
                                Scan QR Code
                            </div>
                            <Zap className="w-5 h-5 text-white/80" />
                        </div>

                        {/* Camera Feed Simulation */}
                        <img 
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" 
                            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-overlay" 
                            alt="Camera Feed" 
                        />
                        
                        {/* Scanning UI - Centered Absolutely */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                            <div className="relative w-64 h-64">
                                {/* Corners */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-500 rounded-tl-2xl drop-shadow-[0_0_10px_rgba(32,98,115,0.8)]"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-500 rounded-tr-2xl drop-shadow-[0_0_10px_rgba(32,98,115,0.8)]"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-500 rounded-bl-2xl drop-shadow-[0_0_10px_rgba(32,98,115,0.8)]"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-500 rounded-br-2xl drop-shadow-[0_0_10px_rgba(32,98,115,0.8)]"></div>

                                {/* QR Code */}
                                <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                                     <QrCode className="w-40 h-40 text-white/80 opacity-50" />
                                </div>

                                {/* Laser Line */}
                                <div className="absolute left-0 right-0 h-1 bg-brand-400 shadow-[0_0_20px_rgba(32,226,255,1)] animate-[scan_2s_ease-in-out_infinite] z-20"></div>
                            </div>
                            
                            <div className="mt-8 text-white font-mono text-xs tracking-widest animate-pulse">
                                DETECTING NETWORK...
                            </div>
                        </div>

                        {/* Camera Controls */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent z-20 flex items-center justify-center pb-8">
                             <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
                                 <div className="w-12 h-12 bg-white rounded-full"></div>
                             </div>
                        </div>

                        <style>{`
                            @keyframes scan {
                                0% { top: 0%; opacity: 0; }
                                10% { opacity: 1; }
                                90% { opacity: 1; }
                                100% { top: 100%; opacity: 0; }
                            }
                        `}</style>
                      </div>
                    )}

                    {/* Screen 2: Captive Portal */}
                    {activeStep === 2 && (
                       <div className="absolute inset-0 bg-white flex flex-col items-center justify-center px-6 animate-fade-in">
                          <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl rotate-12">
                             <Wifi className="w-8 h-8 text-white" />
                          </div>
                          <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">Welcome To <br />Devlats-IoT</h2>
                          <p className="text-slate-500 text-center text-sm mb-10">Sign in to access the Guest Network</p>
                          
                          <div className="w-full space-y-4">
                             <button className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold text-sm shadow-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 group">
                                Unlock WiFi <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                             </button>
                             <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                                <Wifi className="w-3 h-3 text-brand-500" />
                                <span>Secure and fast WiFi for you</span>
                             </div>
                          </div>
                          <div className="mt-8 text-xs text-slate-400 text-center">
                             Powered by Devlats-IoT
                          </div>
                       </div>
                    )}

                    {/* Screen 3: Validation */}
                    {activeStep === 3 && (
                       <div className="absolute inset-0 bg-brand-900 flex flex-col items-center justify-center animate-fade-in">
                          <div className="relative">
                             <div className="absolute inset-0 border-4 border-brand-500/30 rounded-full animate-ping"></div>
                             <div className="w-24 h-24 bg-brand-800 rounded-full flex items-center justify-center border-4 border-brand-500 relative z-10">
                                <ScanLine className="w-10 h-10 text-brand-200 animate-pulse" />
                             </div>
                          </div>
                          <h3 className="text-white font-bold text-lg mt-8">Verifying...</h3>
                          <div className="space-y-2 mt-4 w-64">
                             <div className="flex items-center gap-2 text-xs text-brand-200">
                                <CheckCircle2 className="w-3 h-3 text-green-400" /> OS Version Checked
                             </div>
                             <div className="flex items-center gap-2 text-xs text-brand-200">
                                <CheckCircle2 className="w-3 h-3 text-green-400" /> Antivirus Active
                             </div>
                             <div className="flex items-center gap-2 text-xs text-brand-200">
                                <CheckCircle2 className="w-3 h-3 text-green-400" /> No Malware Detected
                             </div>
                          </div>
                       </div>
                    )}

                    {/* Screen 4: Success */}
                    {activeStep === 4 && (
                       <div className="absolute inset-0 bg-slate-50 flex flex-col pt-12 px-6 animate-fade-in">
                           {/* Top Section: Connected Status */}
                           <div className="flex flex-col items-center mb-6">
                               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-sm animate-bounce">
                                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                               </div>
                               <h2 className="text-2xl font-bold text-slate-900">Connected!</h2>
                               <p className="text-slate-500 text-center text-sm px-4">You now have secure access to the internet.</p>
                           </div>

                           {/* Center Section: Ad Poster */}
                           <div className="flex-1 w-full bg-slate-900 rounded-2xl overflow-hidden relative mb-6 shadow-xl group cursor-pointer border border-slate-200">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" alt="Ad" className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity transform group-hover:scale-105 duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-5 w-full">
                                    <span className="inline-block bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">OFFER</span>
                                    <h4 className="text-white font-bold text-lg leading-tight mb-1">Devlats-IoT Premium</h4>
                                    <p className="text-slate-300 text-xs">Unlock 1Gbps speeds & dedicated support.</p>
                                </div>
                           </div>

                           {/* Bottom Section: Browse Button */}
                           <button className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-sm shadow-lg transition-all mb-8 flex items-center justify-center gap-2 group">
                              Start Browsing <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                           </button>
                       </div>
                    )}
                  </div>

                  {/* Bottom Bar */}
                  <div className="h-1 bg-slate-900/10 mx-auto w-1/3 rounded-full absolute bottom-2 left-0 right-0 z-20"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;