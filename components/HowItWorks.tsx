import React, { useState, useEffect } from 'react';
import { Wifi, UserCheck, ShieldCheck, Globe, Signal, Battery, Lock, CheckCircle2, ChevronRight, ScanLine } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Connect',
    description: 'User selects the "Cloudi-Fi Guest" SSID from their device Wi-Fi settings to initiate the connection.',
    icon: Wifi
  },
  {
    id: 2,
    title: 'Authenticate',
    description: 'A branded captive portal automatically appears. Users authenticate via SSO, Social Login, or SMS.',
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

  // Optional: Auto-rotate steps if user hasn't interacted? 
  // Keeping it manual for better UX control as per "Live Preview" request.

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
          <div className="space-y-6">
            {steps.map((step) => (
              <div 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border-2 ${
                  activeStep === step.id 
                    ? 'bg-brand-50 border-brand-500 shadow-lg scale-[1.02]' 
                    : 'bg-white border-slate-100 hover:border-brand-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    activeStep === step.id ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${activeStep === step.id ? 'text-brand-900' : 'text-slate-700'}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`ml-auto self-center ${activeStep === step.id ? 'opacity-100 text-brand-500' : 'opacity-0'}`}>
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
                  <div className="h-8 bg-slate-900 text-white flex justify-between items-center px-6 text-[10px] font-medium z-20">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                       <Signal className="w-3 h-3" />
                       <span className="text-[10px]">5G</span>
                       <Battery className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Dynamic Screen Content */}
                  <div className="flex-1 relative">
                    
                    {/* Screen 1: Wi-Fi List */}
                    {activeStep === 1 && (
                      <div className="absolute inset-0 bg-slate-100 animate-fade-in">
                        <div className="bg-white p-4 pb-2 shadow-sm z-10">
                           <h4 className="text-lg font-bold text-slate-900">Wi-Fi</h4>
                        </div>
                        <div className="mt-4 px-4 space-y-2">
                           {['Office_Secure', 'Cloudi-Fi Guest', 'Free_Wifi', 'Starbucks_2'].map((ssid, i) => (
                             <div key={ssid} className={`p-3 bg-white rounded-xl flex items-center justify-between shadow-sm ${ssid === 'Cloudi-Fi Guest' ? 'border-2 border-brand-500' : ''}`}>
                                <div className="flex items-center gap-3">
                                   <Wifi className={`w-5 h-5 ${ssid === 'Cloudi-Fi Guest' ? 'text-brand-500' : 'text-slate-400'}`} />
                                   <span className={`font-medium ${ssid === 'Cloudi-Fi Guest' ? 'text-brand-900' : 'text-slate-600'}`}>{ssid}</span>
                                </div>
                                {ssid === 'Cloudi-Fi Guest' && <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>}
                             </div>
                           ))}
                        </div>
                        <div className="absolute bottom-10 left-0 w-full px-8 text-center">
                            <div className="bg-slate-800 text-white py-2 rounded-full text-xs shadow-lg animate-bounce">
                                Tap 'Cloudi-Fi Guest'
                            </div>
                        </div>
                      </div>
                    )}

                    {/* Screen 2: Captive Portal */}
                    {activeStep === 2 && (
                       <div className="absolute inset-0 bg-white flex flex-col items-center pt-16 px-6 animate-fade-in">
                          <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl rotate-12">
                             <Wifi className="w-8 h-8 text-white" />
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome</h2>
                          <p className="text-slate-500 text-center text-sm mb-10">Sign in to access the Guest Network</p>
                          
                          <div className="w-full space-y-3">
                             <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-sm shadow-md hover:bg-blue-700 transition-colors">
                                Login with SSO
                             </button>
                             <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors">
                                Connect with Email
                             </button>
                          </div>
                          <div className="mt-auto mb-8 text-xs text-slate-400 text-center">
                             Powered by Cloudi-Fi
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
                          <h3 className="text-white font-bold text-lg mt-8">Checking Device...</h3>
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
                       <div className="absolute inset-0 bg-green-500 flex flex-col items-center justify-center text-white animate-fade-in">
                           <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg animate-bounce">
                              <CheckCircle2 className="w-10 h-10 text-green-600" />
                           </div>
                           <h2 className="text-2xl font-bold mb-2">Connected!</h2>
                           <p className="text-green-100 text-center px-8 mb-8">You now have secure access to the internet.</p>
                           <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center w-64">
                              <div className="text-xs uppercase opacity-75 mb-1">Session Time</div>
                              <div className="font-mono text-xl font-bold">02:00:00</div>
                           </div>
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