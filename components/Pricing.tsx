import React from 'react';
import { Check, X, Info, ChevronDown, ArrowRight, ShieldCheck, ShieldAlert, Shield } from 'lucide-react';

interface PlanFeature {
  name: string;
  basic: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

const pricingFeatures: PlanFeature[] = [
  { name: "Edge Router Setup", basic: true, pro: true, enterprise: true },
  { name: "Network & Data Control", basic: true, pro: true, enterprise: true },
  { name: "User Managment", basic: true, pro: true, enterprise: true },
  { name: "Wireless Access Point Setup", basic: true, pro: true, enterprise: true },
  { name: "Captive Portal", basic: true, pro: true, enterprise: true },
  { name: "Firewall Protection", basic: true, pro: true, enterprise: true },
  { name: "Website Control", basic: false, pro: true, enterprise: true },
  { name: "Network Monitoring", basic: false, pro: true, enterprise: true },
  { name: "Load Balancing", basic: false, pro: true, enterprise: true },
  { name: "Advanced Firewall + VPN", basic: false, pro: false, enterprise: true },
  { name: "VoIP/Custom Integration", basic: false, pro: false, enterprise: true },
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
                
                {/* Basic Plan Card */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Plan</h3>
                    <p className="text-slate-500 text-sm mb-6 h-10">Essential connectivity and security features.</p>
                    <div className="text-3xl font-display font-bold text-slate-900 mb-6">Starter</div>
                    
                    <button className="w-full py-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-100 hover:border-slate-300 transition-all text-sm mb-8">
                        Get Started
                    </button>

                    <div className="space-y-4">
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Includes</div>
                         {['Edge Router Setup', 'Captive Portal', 'Firewall Protection'].map((feat, i) => (
                             <div key={i} className="flex items-start gap-3">
                                 <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                                     <Check className="w-3 h-3 text-slate-600" />
                                 </div>
                                 <span className="text-slate-600 text-sm font-medium">{feat}</span>
                             </div>
                         ))}
                    </div>
                </div>

                {/* Pro Plan Card (Highlighted) */}
                <div className="bg-brand-900 rounded-3xl border border-brand-700 p-8 shadow-2xl relative transform lg:-translate-y-4 z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-400 to-cyan-400 text-brand-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        Recommended
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
                    <p className="text-brand-200 text-sm mb-6 h-10">Advanced control and monitoring for growing networks.</p>
                    <div className="text-3xl font-display font-bold text-white mb-6">Professional</div>
                    
                    <button className="w-full py-3 bg-brand-400 hover:bg-brand-300 text-brand-950 rounded-xl font-bold transition-all text-sm mb-8 shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 group">
                        Start Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="space-y-4">
                         <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-4">Everything in Basic, plus:</div>
                         {['Website Control', 'Network Monitoring', 'Load Balancing'].map((feat, i) => (
                             <div key={i} className="flex items-start gap-3">
                                 <div className="w-5 h-5 rounded-full bg-brand-800 flex items-center justify-center shrink-0 mt-0.5">
                                     <Check className="w-3 h-3 text-brand-300" />
                                 </div>
                                 <span className="text-brand-100 text-sm font-medium">{feat}</span>
                             </div>
                         ))}
                    </div>
                </div>

                {/* Enterprise Card */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                    <p className="text-slate-600 text-sm mb-6 h-10">Full-scale security, VPN, and custom integrations.</p>
                    <div className="text-3xl font-display font-bold text-amber-600 mb-6">Custom</div>
                    
                    <button className="w-full py-3 bg-white border-2 border-amber-200 text-amber-700 rounded-xl font-bold hover:border-amber-400 hover:text-amber-800 transition-all text-sm mb-8">
                        Contact Sales
                    </button>

                    <div className="space-y-4">
                         <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-4">Everything in Pro, plus:</div>
                         {['Advanced Firewall + VPN', 'VoIP Integration', 'Custom Deployment', '24/7 Priority Support'].map((feat, i) => (
                             <div key={i} className="flex items-start gap-3">
                                 <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                                     <Check className="w-3 h-3 text-amber-600" />
                                 </div>
                                 <span className="text-slate-700 text-sm font-medium">{feat}</span>
                             </div>
                         ))}
                    </div>
                </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto hide-scrollbar">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="bg-slate-900 text-white border-b border-slate-800">
                                    <th className="p-6 text-left w-1/3 text-sm font-bold uppercase tracking-wider">Features Details</th>
                                    <th className="p-6 text-center w-1/5 text-sm font-bold uppercase tracking-wider bg-slate-800/50">Basic Plan</th>
                                    <th className="p-6 text-center w-1/5 text-sm font-bold uppercase tracking-wider bg-brand-900">Pro Plan</th>
                                    <th className="p-6 text-center w-1/5 text-sm font-bold uppercase tracking-wider bg-amber-900/40 text-amber-200">Enterprise - Get Quote</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {pricingFeatures.map((feat, featIdx) => (
                                    <tr key={featIdx} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-700 flex items-center gap-2">
                                                {feat.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center bg-slate-50/30">
                                            <FeatureValue value={feat.basic} variant="blue" />
                                        </td>
                                        <td className="px-6 py-4 text-center bg-brand-50/10">
                                            <FeatureValue value={feat.pro} variant="blue" />
                                        </td>
                                        <td className="px-6 py-4 text-center bg-amber-50/30">
                                            <FeatureValue value={feat.enterprise} variant="gold" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Footer Note */}
                    <div className="bg-slate-100 p-4 border-t border-slate-200 text-sm text-slate-600 flex items-center justify-center gap-2">
                         <Info className="w-4 h-4 text-brand-600" />
                         <span>We provide software only, hardware is not included in the above charges.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const FeatureValue = ({ value, variant = 'blue' }: { value: boolean | string, variant?: 'blue' | 'gold' }) => {
    if (typeof value === 'string') {
        return <span className="text-sm font-bold text-slate-700">{value}</span>;
    }
    
    if (value === true) {
        if (variant === 'gold') {
             return (
                <div className="flex justify-center">
                    <div className="relative">
                        <Shield className="w-6 h-6 text-amber-500 fill-amber-100" />
                        <Check className="w-3 h-3 text-amber-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            );
        }
        // Blue Variant
        return (
            <div className="flex justify-center">
                <div className="relative">
                    <Shield className="w-6 h-6 text-brand-500 fill-brand-50" />
                    <Check className="w-3 h-3 text-brand-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
            </div>
        );
    }

    // False / X
    return (
         <div className="flex justify-center">
            <div className="relative">
                <Shield className="w-6 h-6 text-slate-200 fill-slate-50" />
                <X className="w-3 h-3 text-red-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
    );
};

export default Pricing;