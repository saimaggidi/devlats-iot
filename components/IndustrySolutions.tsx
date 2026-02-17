import React, { useState, useEffect } from 'react';
import { ShoppingBag, Plane, Building2, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    id: 0,
    title: 'Retail & Luxury',
    subtitle: 'Digital in-store experience',
    description: 'Turn your Wi-Fi into a brand experience. Capture customer insights, drive loyalty program enrollment, and ensure global compliance across all your boutiques.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    features: ['Custom branded captive portals', 'CRM & Loyalty integration', 'Footfall analytics']
  },
  {
    id: 1,
    title: 'Transportation',
    subtitle: 'High-density connectivity',
    description: 'Provide seamless, high-speed connectivity for thousands of travelers. Monetize through tiered bandwidth options while ensuring security in public spaces.',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200',
    features: ['High-density load balancing', 'Tiered bandwidth (Free/Premium)', 'Seamless roaming']
  },
  {
    id: 2,
    title: 'Corporate Offices',
    subtitle: 'Zero Trust workplace',
    description: 'Secure your hybrid workplace. Automatically onboard employees, secure IoT devices, and isolate guest traffic from your corporate network.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    features: ['Zero Trust Network Access', 'IoT Micro-segmentation', 'Visitor management integration']
  },
  {
    id: 3,
    title: 'Higher Education',
    subtitle: 'Campus-wide security',
    description: 'Empower learning with safe, filtered internet access for students and faculty. Support BYOD policies and Eduroam roaming on a massive scale.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
    features: ['Content filtering (CIPA)', 'Eduroam support', 'Student profile management']
  }
];

const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const DURATION = 5000; // 5 seconds per slide

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % industries.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section className="py-24 bg-slate-50 font-sans">
      <div className="container mx-auto px-6">
         
         {/* Header Section */}
         <div className="mb-12">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-brand-600"></span> Industries
            </span>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                        Tailored for <span className="text-brand-600">your sector</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Devlats-IoT adapts to the unique connectivity and security challenges of your industry, ensuring a seamless experience for every user.
                    </p>
                </div>
                <button className="hidden md:flex items-center gap-2 text-brand-600 font-bold hover:text-brand-800 transition-colors group shrink-0 mb-2">
                    View all industries <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
         </div>

         {/* Navigation Bar (Dark Teal Strip) */}
         <div className="bg-brand-900 rounded-2xl p-2 mb-8 shadow-xl overflow-x-auto relative">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 min-w-max md:min-w-0">
                {industries.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group min-w-[250px] md:min-w-0 overflow-hidden ${
                            activeTab === idx 
                            ? 'bg-white text-slate-900 shadow-lg scale-[1.02] z-10' 
                            : 'text-white hover:bg-brand-800'
                        }`}
                    >
                        {/* Border Animation SVG */}
                        {activeTab === idx && (
                            <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-xl z-20">
                                <rect 
                                    x="1" y="1" 
                                    width="99%" height="98%" 
                                    rx="12" ry="12" // Matches rounded-xl
                                    fill="none" 
                                    stroke="#206273" // Brand-500 color for visibility on white
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    pathLength="100"
                                    className="origin-center animate-[drawBorder_5s_linear_forwards]"
                                    style={{
                                        strokeDasharray: 100,
                                        strokeDashoffset: 100
                                    }}
                                />
                                <style>{`
                                    @keyframes drawBorder {
                                        to {
                                            stroke-dashoffset: 0;
                                        }
                                    }
                                `}</style>
                            </svg>
                        )}

                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors relative z-10 ${
                             activeTab === idx ? 'bg-brand-900 text-white' : 'bg-white text-brand-900'
                        }`}>
                            <item.icon className="w-5 h-5" />
                        </div>
                        <div className="relative z-10">
                            <div className="font-bold text-sm leading-tight">{item.title}</div>
                            <div className={`text-xs mt-1 ${activeTab === idx ? 'text-slate-500' : 'text-brand-200'}`}>{item.subtitle}</div>
                        </div>
                    </button>
                ))}
            </div>
         </div>

         {/* Main Content Area */}
         <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row min-h-[550px] animate-fade-in transition-all duration-500">
            
            {/* Left: Image Area */}
            <div className="lg:w-7/12 relative h-64 lg:h-auto overflow-hidden">
                {/* Image Transition Wrapper - using key to force re-mount/animation */}
                <div key={activeTab} className="absolute inset-0 w-full h-full animate-fade-in">
                     <img 
                        src={industries[activeTab].image} 
                        alt={industries[activeTab].title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] ease-linear hover:scale-105"
                        style={{ transform: 'scale(1.05)', animation: 'zoomOut 5s ease-out forwards' }}
                     />
                     <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                </div>
            </div>

            {/* Right: Content Card */}
            <div className="lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative z-10">
                 <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 animate-slide-up">
                      {React.createElement(industries[activeTab].icon, { className: "w-7 h-7 text-brand-600" })}
                 </div>
                 
                 <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                     {industries[activeTab].title}
                 </h3>
                 
                 <p className="text-slate-600 text-lg leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                     {industries[activeTab].description}
                 </p>

                 <div className="space-y-5 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                     {industries[activeTab].features.map((feature, i) => (
                         <div key={i} className="flex items-start gap-3 group">
                             <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                             <span className="text-slate-700 font-medium text-base">{feature}</span>
                         </div>
                     ))}
                 </div>

                 <button className="self-start text-brand-700 font-bold text-sm border-b-2 border-brand-200 hover:border-brand-600 transition-all pb-1 mt-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
                     Learn more about {industries[activeTab].title.split(' ')[0]}
                 </button>
            </div>

         </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;