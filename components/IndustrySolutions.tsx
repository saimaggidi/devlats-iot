import React, { useState } from 'react';
import { ShoppingBag, Plane, Building2, GraduationCap, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

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
  }
];

const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-50 font-sans" id="industries">
      <div className="container mx-auto px-6">
         
         {/* Header Section */}
         <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-3 block">
                Tailored Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Built for <span className="text-brand-600">Your Sector</span>
            </h2>
            <p className="text-slate-600 text-lg">
                We understand that every industry has unique connectivity and security challenges. Our platform adapts to your specific operational needs.
            </p>
         </div>

         {/* Expanding Cards Container */}
         {/* Mobile: Vertical Flex, Desktop: Horizontal Flex */}
         <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[600px] w-full">
             {industries.map((item, idx) => {
                 const isActive = activeTab === idx;
                 
                 return (
                    <div
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        onMouseEnter={() => setActiveTab(idx)}
                        className={`
                            relative rounded-3xl overflow-hidden cursor-pointer 
                            transition-[flex-grow,flex-shrink,flex-basis] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                            ${isActive ? 'flex-[5]' : 'flex-[1]'}
                            group
                        `}
                    >
                        {/* Background Image & Overlay */}
                        <div className="absolute inset-0 w-full h-full">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100 grayscale-[50%]'}`}
                            />
                            {/* Gradient Overlay: Darker on active for text readability */}
                            <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90 transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-60 lg:opacity-70'}`}></div>
                            
                            {/* Color Accent Tint for inactive states to differentiate */}
                            {!isActive && <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply"></div>}
                        </div>

                        {/* Content Container */}
                        <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end overflow-hidden">
                            
                            {/* INACTIVE STATE CONTENT */}
                            {/* Desktop: Vertical text when collapsed */}
                            <div className={`absolute inset-0 flex items-center justify-center lg:justify-end lg:pb-12 lg:flex-col transition-all duration-500 ${isActive ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 delay-300'}`}>
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg mb-0 lg:mb-8 transform lg:rotate-0">
                                    <item.icon className="text-white w-6 h-6" />
                                </div>
                                <span className="text-white font-bold text-lg tracking-wider whitespace-nowrap lg:-rotate-90 lg:origin-center drop-shadow-md">
                                    {item.title}
                                </span>
                                {/* Mobile indicator */}
                                <ChevronDown className="lg:hidden text-white/50 w-5 h-5 absolute right-6 animate-bounce" />
                            </div>

                            {/* ACTIVE STATE CONTENT */}
                            <div className={`relative z-10 flex flex-col items-start transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-12 absolute bottom-0 left-0 p-10'}`}>
                                
                                {/* Header Group */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/30">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                                            {item.title}
                                        </h3>
                                        <div className="text-brand-300 font-medium text-lg mt-1">{item.subtitle}</div>
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <p className="text-slate-300 leading-relaxed mb-8 max-w-xl text-base md:text-lg border-l-2 border-brand-500/50 pl-4">
                                    {item.description}
                                </p>
                                
                                {/* Features Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 w-full max-w-xl">
                                    {item.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 group/feat">
                                            <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 group-hover/feat:text-brand-300 transition-colors" />
                                            </div>
                                            <span className="text-slate-200 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className="group/btn flex items-center gap-3 bg-white text-brand-950 px-6 py-3 rounded-xl font-bold transition-all hover:bg-brand-50 hover:pl-8">
                                    Learn more
                                    <ArrowRight className="w-4 h-4 text-brand-600 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        {/* Active Border Highlight */}
                        <div className={`absolute inset-0 border-[3px] border-brand-500/50 rounded-3xl pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>
                 );
             })}
         </div>
         
         {/* Bottom Industry Grid Summary (Optional - for quick navigation if user misses interaction) */}
         <div className="mt-12 flex flex-wrap justify-center gap-4 lg:hidden">
            {industries.map((item, idx) => (
                <div key={idx} 
                     onClick={() => setActiveTab(idx)}
                     className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTab === idx ? 'w-8 bg-brand-600' : 'bg-slate-300'}`}
                />
            ))}
         </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;