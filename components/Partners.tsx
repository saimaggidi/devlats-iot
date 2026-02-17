import React from 'react';
import { Handshake, Network, Boxes, ArrowRight, CheckCircle2, Globe2, Zap, Shield, ArrowUpRight, Cpu, ExternalLink } from 'lucide-react';

const strategicPartners = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    category: "Identity & Cloud Security",
    description: "Cloudi-Fi integrates natively with Microsoft Azure Active Directory to streamline user authentication and Microsoft Sentinel for advanced threat telemetry and automated incident response.",
    link: "Learn more about Microsoft integration"
  },
  {
    name: "Palo Alto Networks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Palo_Alto_Networks_logo.svg",
    category: "SASE & Network Security",
    description: "Together with Prisma Access, we deliver a complete SASE solution that secures guest and BYOD traffic without deploying additional hardware at the edge.",
    link: "View Palo Alto Solution Brief"
  },
  {
    name: "Fortinet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Fortinet_logo.svg",
    category: "Security Fabric",
    description: "Leverage your Fortinet Security Fabric to extend protection to unmanaged devices. Cloudi-Fi acts as the identity layer for FortiGate, ensuring compliant internet access.",
    link: "Explore Fortinet Partnership"
  },
  {
    name: "Juniper Networks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Juniper_Networks_logo.svg",
    category: "AI-Driven Enterprise",
    description: "Enhance your Mist Wi-Fi experience with a captive portal that identifies users and devices, feeding identity data back into the Mist AI engine for better analytics.",
    link: "Discover Juniper Integration"
  }
];

const Partners: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in bg-slate-50 min-h-screen font-sans">
      
      {/* Modern Dark Hero Section */}
      <section className="relative py-24 lg:py-36 bg-slate-950 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-500/20 rounded-[100%] blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

        {/* World Map Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
             <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 1000 500">
                <path d="M145,315l15,-20l-10,-30l-30,-10l-20,20l10,30z" /> 
                <path d="M230,120l50,10l20,40l-30,30l-60,-10l-10,-40z" /> 
                <path d="M480,100l30,10l10,50l-20,20l-40,-10l-10,-40z" /> 
                <path d="M550,250l30,20l10,60l-30,20l-50,-10l-10,-50z" /> 
                <path d="M750,120l60,20l20,50l-40,30l-80,-10l-20,-50z" /> 
                <path d="M850,350l40,10l10,30l-20,20l-50,-10l-10,-30z" /> 
            </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/50 border border-brand-700/50 text-brand-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                    Partner Ecosystem
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
                    Powering the Future of <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-200 to-white">Connected Security</span>
                </h1>
                
                <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    Join a global network of innovators. Whether you are an MSP, a reseller, or a technology vendor, Cloudi-Fi unlocks new revenue streams and value for your customers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <button className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-brand-900/20 flex items-center justify-center gap-2 group">
                        Become a Partner <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-full font-bold text-white border border-slate-700 hover:bg-slate-800 transition-all backdrop-blur-sm">
                        Partner Portal Login
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Strategic Partners Section (Added) */}
      <section className="py-24 bg-white border-b border-slate-100">
         <div className="container mx-auto px-6">
             <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Strategic Global Alliances</h2>
                 <p className="text-slate-500 text-lg">We partner with the world's leading technology providers to deliver integrated, best-in-class security solutions.</p>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                 {strategicPartners.map((partner, index) => (
                     <div key={index} className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                         <div className="w-full md:w-48 shrink-0 flex items-center justify-center bg-slate-50 rounded-2xl p-6 group-hover:bg-white border border-transparent group-hover:border-slate-100 transition-colors">
                             <img src={partner.logo} alt={partner.name} className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100" />
                         </div>
                         <div className="flex-1 flex flex-col">
                             <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">{partner.category}</div>
                             <h3 className="text-xl font-bold text-slate-900 mb-3">{partner.name}</h3>
                             <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                                 {partner.description}
                             </p>
                             <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm hover:gap-3 transition-all group/link">
                                 {partner.link} <ArrowRight className="w-4 h-4" />
                             </a>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* Partner Programs - Bento Grid Style */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        Tailored Partner Programs
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Designed to fit your business model, from referral to full managed service delivery.
                    </p>
                </div>
                <a href="#" className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    View Program Guide <ArrowRight className="w-5 h-5" />
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* MSP Card */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                            <Network className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Service Providers</h3>
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">For MSPs & ISPs</div>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            Embed Cloudi-Fi into your connectivity portfolio. Deliver value-added services like guest Wi-Fi security and compliance logs.
                        </p>
                        <div className="space-y-3 pt-6 border-t border-slate-100">
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-blue-500" /> Multi-tenant Dashboard
                             </div>
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-blue-500" /> Recurring Revenue (ARR)
                             </div>
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-blue-500" /> White-label Options
                             </div>
                        </div>
                    </div>
                </div>

                {/* Reseller Card */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                            <Handshake className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Solution Resellers</h3>
                        <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4">For VARs & Integrators</div>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            Expand your cybersecurity portfolio. Sell a unique solution that bridges the gap between network and security teams.
                        </p>
                        <div className="space-y-3 pt-6 border-t border-slate-100">
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Deal Registration
                             </div>
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sales Enablement
                             </div>
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Marketing Funds (MDF)
                             </div>
                        </div>
                    </div>
                </div>

                {/* Tech Alliance Card */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                            <Boxes className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Tech Alliance</h3>
                        <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">For ISVs & OEMs</div>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                             Integrate your solution with Cloudi-Fi. We partner with SASE vendors, Identity Providers, and Wi-Fi infrastructure leaders.
                        </p>
                        <div className="space-y-3 pt-6 border-t border-slate-100">
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-purple-500" /> API-First Integration
                             </div>
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-purple-500" /> Joint Go-To-Market
                             </div>
                             <div className="flex items-center gap-3 text-sm text-slate-700">
                                 <CheckCircle2 className="w-4 h-4 text-purple-500" /> Co-Selling Motions
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Technology Ecosystem - Dark Technical Theme */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                    Better Together
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Cloudi-Fi sits at the intersection of Network, Security, and Identity. We integrate natively with the tools you already use.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center shadow-[0_0_50px_rgba(32,98,115,0.3)] relative">
                         <div className="absolute inset-0 rounded-full border border-brand-500/50 animate-ping opacity-20"></div>
                         <div className="text-center">
                             <div className="font-display font-bold text-white text-xl">CLOUDI-FI</div>
                             <div className="text-[10px] text-brand-400 tracking-widest uppercase">Platform</div>
                         </div>
                    </div>
                </div>

                {/* Connecting Lines (SVG) */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0 hidden md:block" viewBox="0 0 1000 600">
                    <line x1="500" y1="300" x2="200" y2="150" stroke="#5BA0AF" strokeWidth="2" strokeDasharray="5 5" />
                    <line x1="500" y1="300" x2="800" y2="150" stroke="#5BA0AF" strokeWidth="2" strokeDasharray="5 5" />
                    <line x1="500" y1="300" x2="500" y2="500" stroke="#5BA0AF" strokeWidth="2" strokeDasharray="5 5" />
                </svg>

                {/* Orbiting Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[500px]">
                    
                    {/* SASE/SSE - Top Left */}
                    <div className="md:col-start-1 md:row-start-1 flex flex-col items-center md:items-end text-center md:text-right space-y-4 pt-10">
                        <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-2xl backdrop-blur-sm w-full max-w-xs hover:border-brand-500/50 transition-colors">
                            <div className="flex items-center justify-end gap-3 mb-3">
                                <h4 className="font-bold text-lg text-white">SASE / SSE</h4>
                                <div className="p-2 bg-slate-700 rounded-lg"><Shield className="w-5 h-5 text-brand-400"/></div>
                            </div>
                            <div className="flex flex-wrap justify-end gap-2">
                                {['Zscaler', 'Palo Alto', 'Netskope', 'Fortinet'].map(n => (
                                    <span key={n} className="text-xs bg-slate-900 px-2 py-1 rounded text-slate-400">{n}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Wi-Fi - Top Right */}
                    <div className="md:col-start-3 md:row-start-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 pt-10">
                        <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-2xl backdrop-blur-sm w-full max-w-xs hover:border-brand-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-slate-700 rounded-lg"><Zap className="w-5 h-5 text-brand-400"/></div>
                                <h4 className="font-bold text-lg text-white">Infrastructure</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Cisco Meraki', 'HPE Aruba', 'Juniper Mist', 'Ruckus'].map(n => (
                                    <span key={n} className="text-xs bg-slate-900 px-2 py-1 rounded text-slate-400">{n}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Identity - Bottom Center */}
                    <div className="md:col-start-2 md:row-start-3 flex flex-col items-center justify-end text-center space-y-4 pb-10">
                         <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-2xl backdrop-blur-sm w-full max-w-xs hover:border-brand-500/50 transition-colors">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="p-2 bg-slate-700 rounded-lg"><Globe2 className="w-5 h-5 text-brand-400"/></div>
                                <h4 className="font-bold text-lg text-white">Identity (IdP)</h4>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Okta', 'Azure AD', 'Google Workspace', 'Ping'].map(n => (
                                    <span key={n} className="text-xs bg-slate-900 px-2 py-1 rounded text-slate-400">{n}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Partner - Stats & Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                     <h2 className="text-4xl font-display font-bold text-slate-900">
                         Why partner with <br/> Cloudi-Fi?
                     </h2>
                     <p className="text-slate-600 text-lg leading-relaxed">
                         We provide the technology, support, and resources you need to grow your business and help your customers succeed in the cloud era.
                     </p>
                     
                     <div className="grid grid-cols-2 gap-8 pt-4">
                         <div>
                             <div className="text-5xl font-bold text-brand-600 mb-2 font-display">100%</div>
                             <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Retention Rate</div>
                             <p className="text-xs text-slate-500 mt-1">Partners stay with us long-term.</p>
                         </div>
                         <div>
                             <div className="text-5xl font-bold text-brand-600 mb-2 font-display">Global</div>
                             <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Reach & Support</div>
                             <p className="text-xs text-slate-500 mt-1">Deploy in 100+ countries.</p>
                         </div>
                         <div>
                             <div className="text-5xl font-bold text-brand-600 mb-2 font-display">2x</div>
                             <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Faster Deals</div>
                             <p className="text-xs text-slate-500 mt-1">Simplified sales cycle.</p>
                         </div>
                         <div>
                             <div className="text-5xl font-bold text-brand-600 mb-2 font-display">24/7</div>
                             <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Expert Support</div>
                             <p className="text-xs text-slate-500 mt-1">We are always here to help.</p>
                         </div>
                     </div>
                 </div>

                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative">
                     <div className="absolute top-4 right-4 text-slate-200">
                         <Cpu className="w-24 h-24 opacity-20" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">Partner Benefits</h3>
                     <ul className="space-y-4 relative z-10">
                         {[
                             'Dedicated Partner Manager',
                             'Pre-sales Technical Support',
                             'Marketing Development Funds',
                             'Exclusive Training & Certification',
                             'Not-for-resale (NFR) Licenses',
                             'Deal Registration Protection'
                         ].map((benefit, i) => (
                             <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                     <ArrowUpRight className="w-3.5 h-3.5 text-green-600" />
                                 </div>
                                 <span className="font-medium text-slate-700">{benefit}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-800 to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                  Ready to grow your business?
              </h2>
              <p className="text-brand-200 text-xl mb-10 max-w-2xl mx-auto">
                  Become a Cloudi-Fi partner today and start offering the next generation of Zero Trust Network Access.
              </p>
              <button className="bg-brand-500 hover:bg-brand-400 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-500/30 text-lg">
                  Apply Now
              </button>
          </div>
      </section>

    </div>
  );
};

export default Partners;