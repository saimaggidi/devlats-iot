import React from 'react';
import { Lock, Smartphone, BarChart3, Fingerprint, Layers, Zap } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 'captive',
    title: 'Captive Portal',
    description: 'Cloud-based with centralized user and device authentication. Offers flexible Wi-Fi onboarding for guests and BYOD users.',
    icon: Smartphone,
    color: 'bg-brand-500'
  },
  {
    id: 'compliance',
    title: 'Global Compliance',
    description: 'Effortless global compliance with role-based access logs kept for legal duration in over 100 countries.',
    icon: Lock,
    color: 'bg-cyan-600'
  },
  {
    id: 'analytics',
    title: 'Deep Analytics',
    description: 'Full network access visibility across all sites and devices to make informed decisions and drive business.',
    icon: BarChart3,
    color: 'bg-teal-600'
  },
  {
    id: 'zerotrust',
    title: 'Zero Trust Security',
    description: 'Strict identification and authentication for every connection, ensuring robust access control policies.',
    icon: Fingerprint,
    color: 'bg-brand-700'
  },
  {
    id: 'iot',
    title: 'IoT/OT Onboarding',
    description: 'Cloud-DHCP fingerprinting for seamless IoT/OT onboarding, identity control, and shadow IT risk reduction.',
    icon: Layers,
    color: 'bg-sky-600'
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    description: 'Easy deployment with any physical and cloud infrastructure using our infrastructure-agnostic approach.',
    icon: Zap,
    color: 'bg-brand-accent'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Platform Features</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Unlock the full potential of <br/> Cloudi-Fi
          </h3>
          <p className="text-lg text-slate-600">
            A feature-rich platform that empowers you to make informed decisions and drive your business forward with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={feature.id} 
              className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className={`w-12 h-12 rounded-xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-500 -z-0 opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;