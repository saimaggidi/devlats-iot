import React, { useState } from 'react';
import { Check, X, Info, ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

// Define the data structure for features to make rendering cleaner
interface PlanFeature {
  name: string;
  desc?: string;
  essentials: boolean | string;
  enterprise: boolean | string;
  sp: boolean | string;
}

interface FeatureCategory {
  title: string;
  features: PlanFeature[];
}

const pricingData: FeatureCategory[] = [
  {
    title: "Core Connectivity",
    features: [
      { name: "Guest Wi-Fi Portal", desc: "Customizable captive portal", essentials: true, enterprise: true, sp: true },
      { name: "Email Authentication", desc: "Verify users via email loop", essentials: true, enterprise: true, sp: true },
      { name: "SSO & Social Login", desc: "Google, Facebook, LinkedIn, SAML, Azure AD", essentials: false, enterprise: true, sp: true },
      { name: "Global Roaming", desc: "Seamless access across international sites", essentials: false, enterprise: false, sp: true },
    ]
  },
  {
    title: "Security & Identity",
    features: [
      { name: "Zero Trust Policies", desc: "Identity-based firewall rules", essentials: false, enterprise: true, sp: true },
      { name: "IoT Fingerprinting", desc: "Detect and secure IoT/OT devices", essentials: false, enterprise: true, sp: true },
      { name: "Threat Prevention", desc: "Botnet and phishing protection", essentials: false, enterprise: true, sp: true },
      { name: "Compliance Logs", desc: "Data retention for legal compliance", essentials: "30 Days", enterprise: "1 Year", sp: "Custom" },
    ]
  },
  {
    title: "Management & Support",
    features: [
      { name: "Analytics Dashboard", desc: "Real-time visibility", essentials: "Basic", enterprise: "Advanced", sp: "Custom" },
      { name: "API Access", desc: "Integration with 3rd party tools", essentials: false, enterprise: true, sp: true },
      { name: "Multi-tenancy", desc: "Manage multiple customers", essentials: false, enterprise: false, sp: true },
      { name: "Support Level", desc: "Technical assistance", essentials: "Standard", enterprise: "Priority", sp: "24/7 Dedicated" },
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden animate-fade-in">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-slate-50/80 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    Flexible Pricing
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                    Choose the right plan for your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">Global Network</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Whether you are a single site or a global enterprise, we have a solution that scales with your security needs.
                </p>
            </div>

            {/* Pricing Cards (Desktop Grid) */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24 items-start">
                
                {/* Essentials Card */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Essentials</h3>
                    <p className="text-slate-500 text-sm mb-6 h-10">Perfect for small businesses needing basic guest access.</p>
                    <div className="text-3xl font-display font-bold text-slate-900 mb-6">Custom</div>
                    
                    <button className="w-full py-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-100 hover:border-slate-300 transition-all text-sm mb-8">
                        Get Started
                    </button>

                    <div className="space-y-4">
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Key Features</div>
                         {['Guest Wi-Fi Portal', 'Email Authentication', 'Basic Analytics', 'Standard Support'].map((feat, i) => (
                             <div key={i} className="flex items-start gap-3">
                                 <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                                     <Check className="w-3 h-3 text-slate-600" />
                                 </div>
                                 <span className="text-slate-600 text-sm font-medium">{feat}</span>
                             </div>
                         ))}
                    </div>
                </div>

                {/* Enterprise Card (Highlighted) */}
                <div className="bg-brand-900 rounded-3xl border border-brand-700 p-8 shadow-2xl relative transform lg:-translate-y-4 z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-400 to-cyan-400 text-brand-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        Most Popular
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                    <p className="text-brand-200 text-sm mb-6 h-10">Full Zero Trust security for global multi-site organizations.</p>
                    <div className="text-3xl font-display font-bold text-white mb-6">Contact Us</div>
                    
                    <button className="w-full py-3 bg-brand-400 hover:bg-brand-300 text-brand-950 rounded-xl font-bold transition-all text-sm mb-8 shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 group">
                        Request Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="space-y-4">
                         <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-4">Everything in Essentials, plus:</div>
                         {['Zero Trust Policies', 'IoT Fingerprinting', 'Threat Prevention', 'Global Compliance (1 Year)', 'API Access', 'Priority Support'].map((feat, i) => (
                             <div key={i} className="flex items-start gap-3">
                                 <div className="w-5 h-5 rounded-full bg-brand-800 flex items-center justify-center shrink-0 mt-0.5">
                                     <Check className="w-3 h-3 text-brand-300" />
                                 </div>
                                 <span className="text-brand-100 text-sm font-medium">{feat}</span>
                             </div>
                         ))}
                    </div>
                </div>

                {/* Service Provider Card */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Service Provider</h3>
                    <p className="text-slate-500 text-sm mb-6 h-10">For MSPs and carriers managing multiple tenants.</p>
                    <div className="text-3xl font-display font-bold text-slate-900 mb-6">Volume</div>
                    
                    <button className="w-full py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-brand-500 hover:text-brand-600 transition-all text-sm mb-8">
                        Contact Sales
                    </button>

                    <div className="space-y-4">
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Everything in Enterprise, plus:</div>
                         {['Multi-tenancy Management', 'Global Roaming', 'Custom Retention', '24/7 Dedicated Support', 'White-label Options'].map((feat, i) => (
                             <div key={i} className="flex items-start gap-3">
                                 <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                                     <Check className="w-3 h-3 text-slate-600" />
                                 </div>
                                 <span className="text-slate-600 text-sm font-medium">{feat}</span>
                             </div>
                         ))}
                    </div>
                </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                     <h3 className="text-2xl font-bold text-slate-900">Detailed Feature Comparison</h3>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto hide-scrollbar">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="p-6 text-left w-1/3 text-xs font-bold text-slate-500 uppercase tracking-wider">Features</th>
                                    <th className="p-6 text-center w-1/5 text-slate-900 font-bold">Essentials</th>
                                    <th className="p-6 text-center w-1/5 text-brand-700 font-bold bg-brand-50/50">Enterprise</th>
                                    <th className="p-6 text-center w-1/5 text-slate-900 font-bold">Service Provider</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {pricingData.map((category, catIdx) => (
                                    <React.Fragment key={catIdx}>
                                        <tr className="bg-slate-50/50">
                                            <td colSpan={4} className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                {category.title}
                                            </td>
                                        </tr>
                                        {category.features.map((feat, featIdx) => (
                                            <tr key={featIdx} className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-slate-700 flex items-center gap-2">
                                                        {feat.name}
                                                        {feat.desc && (
                                                             <div className="group/tooltip relative">
                                                                <Info className="w-3.5 h-3.5 text-slate-300 hover:text-brand-500 cursor-help transition-colors" />
                                                                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 p-2.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all z-50 shadow-xl">
                                                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                                                                    {feat.desc}
                                                                </div>
                                                             </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <FeatureValue value={feat.essentials} />
                                                </td>
                                                <td className="px-6 py-4 text-center bg-brand-50/30">
                                                    <FeatureValue value={feat.enterprise} highlight />
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <FeatureValue value={feat.sp} />
                                                </td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const FeatureValue = ({ value, highlight = false }: { value: boolean | string, highlight?: boolean }) => {
    if (typeof value === 'string') {
        return <span className={`text-sm font-bold ${highlight ? 'text-brand-700' : 'text-slate-700'}`}>{value}</span>;
    }
    
    if (value === true) {
        return (
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${highlight ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30' : 'bg-slate-100 text-slate-500'}`}>
                <Check className="w-5 h-5" />
            </div>
        );
    }

    return <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mx-auto"></div>; // Clean dot for negative
};

export default Pricing;