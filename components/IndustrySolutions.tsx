import React, { useState, useEffect } from 'react';
import { ShoppingBag, Plane, Building2, GraduationCap, ArrowRight, CheckCircle2, ChevronLeft, Stethoscope, Factory, LayoutGrid } from 'lucide-react';

const industries = [
  {
    id: 0,
    title: 'Retail & Luxury',
    subtitle: 'Digital in-store experience',
    description: 'Turn your Wi-Fi into a brand experience. Capture customer insights, drive loyalty program enrollment, and ensure global compliance across all your boutiques.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    features: ['Custom branded portals', 'CRM & Loyalty integration', 'Footfall analytics']
  },
  {
    id: 1,
    title: 'Transportation',
    subtitle: 'High-density connectivity',
    description: 'Provide seamless, high-speed connectivity for thousands of travelers. Monetize through tiered bandwidth options while ensuring security in public spaces.',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200',
    features: ['Load balancing', 'Tiered bandwidth', 'Seamless roaming']
  },
  {
    id: 2,
    title: 'Corporate Offices',
    subtitle: 'Zero Trust workplace',
    description: 'Secure your hybrid workplace. Automatically onboard employees, secure IoT devices, and isolate guest traffic from your corporate network.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    features: ['Zero Trust Access', 'IoT Micro-segmentation', 'Visitor management']
  },
  {
    id: 3,
    title: 'Higher Education',
    subtitle: 'Campus-wide security',
    description: 'Empower learning with safe, filtered internet access for students and faculty. Support BYOD policies and Eduroam roaming on a massive scale.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
    features: ['CIPA filtering', 'Eduroam support', 'Student profiles']
  },
  {
    id: 4,
    title: 'Healthcare',
    subtitle: 'Patient & Staff Safety',
    description: 'Protect sensitive patient data while providing guest Wi-Fi. Isolate medical devices (IoMT) from public networks to prevent ransomware attacks.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    features: ['HIPAA Compliance', 'IoMT Isolation', 'Staff/Guest Separation']
  },
  {
    id: 5,
    title: 'Manufacturing',
    subtitle: 'Industry 4.0 Security',
    description: 'Secure the factory floor. Connect OT devices safely to the cloud for predictive maintenance without exposing them to cyber threats.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    features: ['OT/IT Convergence', 'Legacy Device Protection', 'Remote Access Control']
  }
];

const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, activeTab]);

  return (
    <section id="platform" className="py-24 bg-slate-50 font-sans">
      <div className="container mx-auto px-6">
         
         {/* Header Section */}
         <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-3 block">
                Tailored Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Built for <span className="text-brand-600">Every Sector</span>
            </h2>
            <p className="text-slate-600 text-lg">
                Our platform is industry-agnostic by design. Select your sector to see how we address your specific challenges.
            </p>
         </div>

         <div 
            className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
         >
           
           {/* Navigation List - Scrollable on Desktop if many items, Horizontal scroll on Mobile */}
           <div className="lg:w-1/3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] pb-4 lg:pb-0 hide-scrollbar snap-x px-1">
               {industries.map((item, idx) => (
                   <button
                       key={idx}
                       onClick={() => setActiveTab(idx)}
                       className={`
                           flex-shrink-0 w-[85vw] sm:w-[300px] lg:w-full text-left p-4 lg:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group border snap-center
                           ${activeTab === idx 
                           ? 'bg-brand-900 border-brand-800 text-white shadow-xl scale-[1.01] ring-2 ring-brand-500/20' 
                           : 'bg-white border-slate-200 text-slate-600 hover:border-brand-300 hover:shadow-lg hover:bg-slate-50'}
                       `}
                   >
                       <div className="flex items-center gap-4">
                           <div className={`
                               w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0
                               ${activeTab === idx ? 'bg-brand-700 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-100 group-hover:text-brand-600'}
                           `}>
                               <item.icon className="w-6 h-6" />
                           </div>
                           <div>
                               <div className={`font-bold text-base ${activeTab === idx ? 'text-white' : 'text-slate-900'}`}>{item.title}</div>
                               <div className={`text-xs mt-1 font-medium ${activeTab === idx ? 'text-brand-300' : 'text-slate-500'}`}>{item.subtitle}</div>
                           </div>
                       </div>
                       <ChevronLeft className={`w-5 h-5 transition-transform hidden lg:block ${activeTab === idx ? 'text-brand-400 -translate-x-1' : 'text-slate-300'}`} />
                   </button>
               ))}
               
               {/* Mobile spacer for better scrolling */}
               <div className="w-4 lg:hidden shrink-0"></div>
           </div>

           {/* Content Preview - Sticky/Fixed height */}
           <div className="lg:w-2/3">
               <div className="relative h-[600px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                   {industries.map((item, idx) => (
                       <div 
                           key={idx}
                           className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] ${
                               activeTab === idx ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-8 pointer-events-none'
                           }`}
                       >
                           {/* Background Image */}
                           <div className="absolute inset-0">
                               <img 
                                   src={item.image} 
                                   alt={item.title} 
                                   className="w-full h-full object-cover transition-transform duration-[20s] ease-linear transform scale-100 group-hover:scale-110"
                               />
                               <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent lg:via-slate-950/60 mix-blend-multiply"></div>
                               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                           </div>

                           {/* Content */}
                           <div className="absolute inset-0 p-8 lg:p-14 flex flex-col justify-end lg:justify-center max-w-3xl">
                               
                               <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-200 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                                            <LayoutGrid className="w-3.5 h-3.5" />
                                            {item.title} Solution
                                    </div>
                                    
                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                                        {item.subtitle}
                                    </h3>
                                    
                                    <p className="text-slate-200 text-lg mb-8 leading-relaxed border-l-4 border-brand-500 pl-6 bg-gradient-to-r from-black/40 to-transparent p-4 rounded-r-xl backdrop-blur-sm">
                                        {item.description}
                                    </p>
                               </div>
                               
                               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
                                   {item.features.map((feature, fIdx) => (
                                       <div key={fIdx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                           <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/30">
                                               <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                           </div>
                                           <span className="text-white font-medium shadow-black drop-shadow-md">{feature}</span>
                                       </div>
                                   ))}
                               </div>

                               <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                                   <button className="bg-white text-slate-950 hover:bg-brand-50 px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                       Discover {item.title}
                                       <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                   </button>
                               </div>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;