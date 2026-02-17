import React from 'react';
import { Check, Shield } from 'lucide-react';

const CompliancePricing: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-brand-200/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Compliance Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="bg-brand-950 p-6 flex justify-between items-center">
                        <span className="text-white font-bold flex items-center gap-2">
                            <Shield className="w-5 h-5 text-brand-400" /> Security Status
                        </span>
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                    </div>
                    <div className="p-8">
                        <h4 className="font-bold text-slate-900 mb-6 text-lg">Platform Capabilities</h4>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { val: '100%', label: 'Cloud Native', sub: 'No hardware required' },
                                { val: '99.99%', label: 'SLA Uptime', sub: 'Guaranteed availability' },
                                { val: '50+', label: 'Integrations', sub: 'IdP, firewall, & more' },
                                { val: 'Global', label: 'Coverage', sub: '100+ POPs worldwide' }
                            ].map((stat, i) => (
                                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-2xl font-bold text-brand-600 mb-1">{stat.val}</div>
                                    <div className="text-sm font-bold text-slate-900">{stat.label}</div>
                                    <div className="text-xs text-slate-500">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="order-1 lg:order-2">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
                    Compliance & Privacy
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    Global Regulation <span className="text-brand-600">Ready</span>
                </h2>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                    Cloudi-Fi ensures your network adheres to local internet regulations in over 100 countries. We handle the complexity of data privacy and logs retention so you don't have to.
                </p>
                
                <div className="space-y-4">
                    {['GDPR Compliant (Europe)', 'LGPD Ready (Brazil)', 'CCPA Ready (USA)', 'ISO 27001 Certified'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                             <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                 <Check className="w-3.5 h-3.5 text-green-600" />
                             </div>
                             <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CompliancePricing;