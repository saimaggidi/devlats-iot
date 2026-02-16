import React from 'react';
import { Check, Shield, X, Info } from 'lucide-react';

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-32 items-center">
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

        {/* Pricing Table Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Compare Plans</h2>
            <p className="text-slate-600 text-lg">Select the perfect level of control and security for your organization.</p>
        </div>

        <div className="relative">
            {/* Scroll Hint for Mobile */}
            <div className="lg:hidden absolute top-1/2 right-2 z-10 bg-black/10 p-2 rounded-full animate-pulse pointer-events-none">
                <span className="sr-only">Scroll right</span>
            </div>

            <div className="overflow-x-auto pb-8 hide-scrollbar">
                <div className="min-w-[1000px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-100">
                    
                    {/* Header */}
                    <div className="grid grid-cols-4 bg-slate-50/50">
                        {/* Empty Top Left */}
                        <div className="p-6 border-b border-slate-200 border-r border-slate-100 bg-white"></div>
                        
                        {/* Essentials */}
                        <div className="p-6 text-center border-b border-slate-200 border-r border-slate-100 bg-white">
                            <h3 className="font-bold text-slate-900 text-xl mb-2">Essentials</h3>
                            <p className="text-sm text-slate-500 mb-4 h-10">For small businesses needing basic guest access.</p>
                            <div className="text-2xl font-display font-bold text-slate-900 mb-4">Custom</div>
                            <button className="w-full py-2.5 bg-slate-100 text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors text-sm">
                                Get Started
                            </button>
                        </div>
                        
                        {/* Enterprise (Highlighted) */}
                        <div className="p-6 text-center border-b border-brand-500 bg-brand-50/30 relative">
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-b-lg uppercase tracking-widest shadow-sm">
                                Recommended
                             </div>
                            <h3 className="font-bold text-brand-800 text-xl mb-2 mt-4">Enterprise</h3>
                            <p className="text-sm text-slate-600 mb-4 h-10">Full Zero Trust security for global organizations.</p>
                            <div className="text-2xl font-display font-bold text-brand-900 mb-4">Contact Us</div>
                            <button className="w-full py-2.5 bg-brand-500 text-white rounded-lg font-bold hover:bg-brand-400 transition-colors text-sm shadow-lg shadow-brand-500/30">
                                Request Demo
                            </button>
                        </div>
                        
                        {/* Service Provider */}
                        <div className="p-6 text-center border-b border-slate-200 border-l border-slate-100 bg-white">
                            <h3 className="font-bold text-slate-900 text-xl mb-2">Service Provider</h3>
                            <p className="text-sm text-slate-500 mb-4 h-10">For MSPs and carriers managing multiple tenants.</p>
                            <div className="text-2xl font-display font-bold text-slate-900 mb-4">Volume</div>
                            <button className="w-full py-2.5 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-bold hover:border-brand-500 hover:text-brand-600 transition-colors text-sm">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-slate-100">
                        {/* Section Header */}
                        <div className="grid grid-cols-4 bg-slate-50/80">
                            <div className="col-span-4 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                Core Connectivity
                            </div>
                        </div>
                        <FeatureRow 
                            name="Guest Wi-Fi Portal" 
                            desc="Customizable captive portal"
                            essentials={true} enterprise={true} sp={true} 
                        />
                        <FeatureRow 
                            name="Email Authentication" 
                            desc="Verify users via email loop"
                            essentials={true} enterprise={true} sp={true} 
                        />
                        <FeatureRow 
                            name="SSO & Social Login" 
                            desc="Google, Facebook, LinkedIn, SAML, Azure AD"
                            essentials={false} enterprise={true} sp={true} 
                        />
                         <FeatureRow 
                            name="Global Roaming" 
                            desc="Seamless access across international sites"
                            essentials={false} enterprise={false} sp={true} 
                        />

                        {/* Section Header */}
                        <div className="grid grid-cols-4 bg-slate-50/80">
                            <div className="col-span-4 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider mt-4">
                                Security & Identity
                            </div>
                        </div>
                        <FeatureRow 
                            name="Zero Trust Policies" 
                            desc="Identity-based firewall rules"
                            essentials={false} enterprise={true} sp={true} 
                        />
                        <FeatureRow 
                            name="IoT Fingerprinting" 
                            desc="Detect and secure IoT/OT devices"
                            essentials={false} enterprise={true} sp={true} 
                        />
                        <FeatureRow 
                            name="Threat Prevention" 
                            desc="Botnet and phishing protection"
                            essentials={false} enterprise={true} sp={true} 
                        />
                        <FeatureRow 
                            name="Compliance Logs" 
                            desc="Data retention for legal compliance"
                            essentials="30 Days" enterprise="1 Year" sp="Custom" 
                        />

                        {/* Section Header */}
                        <div className="grid grid-cols-4 bg-slate-50/80">
                            <div className="col-span-4 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider mt-4">
                                Management & Support
                            </div>
                        </div>
                        <FeatureRow 
                            name="Analytics Dashboard" 
                            desc="Real-time visibility"
                            essentials="Basic" enterprise="Advanced" sp="Custom" 
                        />
                        <FeatureRow 
                            name="API Access" 
                            desc="Integration with 3rd party tools"
                            essentials={false} enterprise={true} sp={true} 
                        />
                         <FeatureRow 
                            name="Multi-tenancy" 
                            desc="Manage multiple customers"
                            essentials={false} enterprise={false} sp={true} 
                        />
                        <FeatureRow 
                            name="Support Level" 
                            desc="Technical assistance"
                            essentials="Standard" enterprise="Priority" sp="24/7 Dedicated" 
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const FeatureRow = ({ name, desc, essentials, enterprise, sp }: { name: string, desc?: string, essentials: boolean | string, enterprise: boolean | string, sp: boolean | string }) => {
    
    const renderCell = (val: boolean | string, isEnterprise: boolean = false) => {
        if (typeof val === 'string') {
            return <span className={`text-sm font-semibold ${isEnterprise ? 'text-brand-700' : 'text-slate-600'}`}>{val}</span>;
        }
        return val ? (
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isEnterprise ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-600'}`}>
                <Check className="w-4 h-4" />
            </div>
        ) : (
            <X className="w-4 h-4 text-slate-300" />
        );
    };

    return (
        <div className="grid grid-cols-4 group transition-colors hover:bg-slate-50/50">
            <div className="p-6 border-r border-slate-100 flex flex-col justify-center">
                <div className="font-semibold text-slate-700 flex items-center gap-2">
                    {name}
                    {desc && (
                         <div className="group/tooltip relative">
                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity z-50">
                                {desc}
                            </div>
                         </div>
                    )}
                </div>
            </div>
            
            <div className="p-6 flex items-center justify-center border-r border-slate-100">
                {renderCell(essentials)}
            </div>
            
            <div className="p-6 flex items-center justify-center bg-brand-50/10 border-r border-slate-100 relative">
                {/* Highlight active row effect for enterprise column */}
                <div className="absolute inset-0 border-x border-brand-100 pointer-events-none"></div>
                {renderCell(enterprise, true)}
            </div>
            
            <div className="p-6 flex items-center justify-center">
                {renderCell(sp)}
            </div>
        </div>
    );
};

export default CompliancePricing;