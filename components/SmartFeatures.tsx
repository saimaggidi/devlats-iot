import React from 'react';
import { Network, Wifi, KeyRound, TabletSmartphone, Gauge, Siren, ShieldBan } from 'lucide-react';

const smartFeatures = [
  {
    title: 'Intelligent Traffic Routing',
    description: 'Optimize network performance by dynamically routing traffic based on application type and user priority.',
    icon: Network
  },
  {
    title: 'Secure Wireless Connectivity',
    description: 'Enterprise-grade encryption and isolation to ensure guest and BYOD devices never compromise the core network.',
    icon: Wifi
  },
  {
    title: 'User Authentication Gateway',
    description: 'A unified portal supporting SSO, Social Login, and SMS verification for seamless identity management.',
    icon: KeyRound
  },
  {
    title: 'Monitor Device Connectivity',
    description: 'Real-time dashboard to track connected devices, session duration, and data usage across all global sites.',
    icon: TabletSmartphone
  },
  {
    title: 'Bandwidth Management',
    description: 'Granular controls to limit bandwidth consumption per user or application, ensuring fair usage policies.',
    icon: Gauge
  },
  {
    title: 'Threat Detection & Prevention',
    description: 'AI-driven analysis to identify and block malicious activities, phishing attempts, and botnets instantly.',
    icon: Siren
  },
  {
    title: 'Block Unauthorized Devices',
    description: 'Automatically quarantine or block devices that fail security posture checks or violate access policies.',
    icon: ShieldBan
  }
];

const SmartFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">Technical Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Smart Features for Modern Networks</h2>
          <p className="text-slate-400 mt-4 max-w-2xl">
            Advanced tools designed for network administrators who demand control, visibility, and security without complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {smartFeatures.map((item, idx) => (
            <div key={idx} className="bg-brand-900/50 border border-brand-800 hover:border-brand-500 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-brand-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-colors">
                <item.icon className="w-6 h-6 text-brand-200 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
          
          {/* Call to Action Card */}
          
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;
