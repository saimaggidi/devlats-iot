import React, { useState } from 'react';
import { ShoppingBag, Plane, Building2, GraduationCap, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

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

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
         {/* Header */}
         <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <span className="text-brand-600 font-bold tracking-wider uppercase text-sm flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-brand-600"></span> Industries
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-4">
                    Tailored for <span className="text-brand-600">your sector</span>
                </h2>
                <p className="text-slate-600 mt-4 text-lg">
                    Cloudi-Fi adapts to the unique connectivity and security challenges of your industry, ensuring a seamless experience for every user.
                </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-brand-600 font-bold hover:text-brand-800 transition-colors group mt-6 md:mt-0">
                View all industries <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>

         <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Navigation */}
            <div className="lg:w-1/3 flex flex-col gap-4">
                {industries.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 group relative overflow-hidden ${
                            activeTab === idx 
                            ? 'bg-white border-brand-500 shadow-xl scale-[1.02] z-10' 
                            : 'bg-white border-transparent hover:border-slate-200 hover:bg-slate-50'
                        }`}
                    >
                        <div className="flex items-center gap-4 relative z-10">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                                activeTab === idx ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-400 group-hover:bg-brand-100'
                            }`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg ${activeTab === idx ? 'text-brand-900' : 'text-slate-600'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm ${activeTab === idx ? 'text-brand-600' : 'text-slate-400'}`}>
                                    {item.subtitle}
                                </p>
                            </div>
                            {activeTab === idx && (
                                <ChevronRight className="w-5 h-5 text-brand-500 ml-auto" />
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Right Column: Content Preview */}
            <div className="lg:w-2/3">
                <div key={activeTab} className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 h-full flex flex-col md:flex-row animate-fade-in">
                    {/* Image Section */}
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                        <img 
                            src={industries[activeTab].image} 
                            alt={industries[activeTab].title} 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply"></div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                             {React.createElement(industries[activeTab].icon, { className: "w-6 h-6 text-brand-600" })}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            {industries[activeTab].title}
                        </h3>
                        
                        <p className="text-slate-600 leading-relaxed mb-8">
                            {industries[activeTab].description}
                        </p>

                        <div className="space-y-4 mb-8">
                            {industries[activeTab].features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="self-start text-brand-600 font-bold text-sm border-b-2 border-brand-200 hover:border-brand-600 transition-all pb-1">
                            Learn more about {industries[activeTab].title.split(' ')[0]}
                        </button>
                    </div>
                </div>
            </div>

         </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;