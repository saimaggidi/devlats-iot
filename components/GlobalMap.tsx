import React from 'react';
import { MapPin, Star, Utensils, Coffee, ShoppingBag, Building2, GraduationCap, Store, Plane, Server, Target, Radio, Crosshair } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, CloudScale AI",
    quote: "The edge observability provided by Cloudi-Fi has reduced our network MTTR by 64% across 400 global locations. The telemetry stream is flawless."
  },
  {
    name: "Marcus Rodriguez",
    role: "VP Infrastructure, TechFlow",
    quote: "Deploying Zero Trust across our retail footprint took days, not months. The cloud-native approach eliminated all hardware dependencies entirely."
  },
  {
    name: "Emily Watson",
    role: "CISO, GlobalFinance",
    quote: "Compliance was our biggest headache. Cloudi-Fi resolved it instantly with their automated logging and retention features in over 50 countries."
  },
  {
    name: "David Park",
    role: "Head of IT, OmniGroup",
    quote: "We needed a solution that worked for both guests and corporate IoT devices. Cloudi-Fi's unified platform was the only one that delivered."
  }
];

const locations = [
  { top: '28%', left: '22%', icon: Building2, label: 'Corporate HQ', delay: '0s' }, // NA West
  { top: '34%', left: '26%', icon: ShoppingBag, label: 'Retail Mall', delay: '1s' }, // NA East
  { top: '65%', left: '30%', icon: Coffee, label: 'Cafe Chain', delay: '2s' }, // SA
  { top: '38%', left: '49%', icon: Store, label: 'Luxury Store', delay: '0.5s' }, // Europe
  { top: '30%', left: '54%', icon: GraduationCap, label: 'University', delay: '1.5s' }, // Europe East
  { top: '48%', left: '58%', icon: Plane, label: 'Intl. Airport', delay: '2.5s' }, // Middle East
  { top: '65%', left: '56%', icon: Server, label: 'Data Center', delay: '1.2s' }, // Africa
  { top: '42%', left: '72%', icon: Utensils, label: 'Restaurant', delay: '0.8s' }, // India
  { top: '32%', left: '82%', icon: Building2, label: 'Tech Hub', delay: '1.8s' }, // Asia Japan/China
  { top: '75%', left: '86%', icon: Store, label: 'Retail Branch', delay: '2.2s' }, // Australia
];

const GlobalMap: React.FC = () => {
  return (
    <section className="py-24 bg-[#050b14] relative overflow-hidden font-sans">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-brand-950/20 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Global <span className="text-brand-500">Operations</span> Map
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
                Real-time telemetry and zone control across all active sectors.
            </p>

            {/* PUBG/Tactical Style Map Container */}
            <div className="relative w-full h-[450px] md:h-[600px] mx-auto max-w-6xl bg-[#0f172a] rounded-xl border-2 border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group mb-20 select-none">
                
                {/* 1. The Map Image (Satellite/Dark Terrain) */}
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
                        alt="Global Tactical Map" 
                        className="w-full h-full object-cover opacity-60 filter grayscale contrast-125 hover:scale-105 transition-transform duration-[20s] ease-linear"
                    />
                    <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply"></div>
                </div>

                {/* 2. Tactical Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                {/* 3. HUD Elements */}
                {/* Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-start pointer-events-none z-20">
                    <div className="flex items-center gap-2 text-brand-400 font-mono text-xs">
                        <Radio className="w-4 h-4 animate-pulse" />
                        <span>LIVE_FEED :: ENCRYPTED</span>
                    </div>
                    <div className="text-white/50 font-mono text-xs tracking-widest">
                        SECURE ZONE
                    </div>
                </div>

                {/* Compass / Scale - Decorative */}
                <div className="absolute bottom-6 right-6 text-right pointer-events-none z-20">
                     <div className="text-brand-500 font-mono text-3xl font-bold tracking-tighter leading-none mb-1">
                         04:00
                     </div>
                     <div className="text-xs text-brand-400 font-mono uppercase">Next Shrink</div>
                </div>

                 {/* 4. Active Locations (The "Blink It" Icons) */}
                {locations.map((loc, i) => (
                    <div 
                        key={i} 
                        className="absolute group/pin cursor-pointer" 
                        style={{ top: loc.top, left: loc.left }}
                    >
                         <div className="relative flex flex-col items-center justify-center">
                            {/* Loot Drop / Waypoint visual */}
                            <div className="relative">
                                {/* Vertical beam for "loot drop" effect (optional, maybe too messy, lets stick to pulsing target) */}
                                
                                {/* Outer Ring 1 */}
                                <div 
                                    className="absolute -inset-4 border border-brand-400/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"
                                    style={{ animationDelay: loc.delay }}
                                ></div>
                                {/* Outer Ring 2 */}
                                <div 
                                    className="absolute -inset-8 border border-brand-500/10 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"
                                    style={{ animationDelay: loc.delay }}
                                ></div>

                                {/* Core Icon */}
                                <div className="relative z-10 w-8 h-8 bg-brand-600 border-2 border-brand-300 rounded-lg transform rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(32,226,255,0.6)] hover:scale-110 transition-transform">
                                    <loc.icon className="w-4 h-4 text-white transform -rotate-45" />
                                </div>
                            </div>

                            {/* Label Tag (Game Style) */}
                            <div className="absolute mt-12 bg-black/80 backdrop-blur border-l-2 border-brand-500 text-white text-[10px] font-mono px-2 py-1 rounded-r opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">
                                <span className="text-brand-400 font-bold">LOC:</span> {loc.label}
                            </div>
                         </div>
                    </div>
                ))}

                {/* Crosshair Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                    <Crosshair className="w-64 h-64 text-white font-thin stroke-1" />
                </div>
            </div>

             {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-32">
                {[
                    { label: 'Active Zones', value: '90+' },
                    { label: 'Connected Agents', value: '500M+' },
                    { label: 'Secure Outposts', value: '100k+' },
                ].map((stat, i) => (
                    <div key={i} className="p-6 bg-slate-900/80 rounded-sm border-l-4 border-brand-600 hover:border-brand-400 transition-colors group relative overflow-hidden shadow-lg">
                         <div className="absolute top-0 right-0 p-2 opacity-10">
                             <Target className="w-12 h-12 text-white" />
                         </div>
                        <div className="text-3xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                        <div className="text-xs text-brand-400 uppercase tracking-widest font-semibold">{stat.label}</div>
                    </div>
                ))}
            </div>
            
            {/* Keeping the testimonials section but styling it to match */}
            <div className="max-w-6xl mx-auto border-t border-slate-800 pt-24">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Trusted by Industry Leaders
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
                     {testimonials.map((t, i) => (
                        <div key={i} className="bg-slate-900 p-8 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 relative group shadow-xl">
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="font-bold text-white text-lg font-mono">{t.name}</h4>
                                    <p className="text-brand-500 text-xs uppercase tracking-wider font-bold">{t.role}</p>
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-4 h-4 text-brand-600 fill-current" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed font-mono">
                                "{t.quote}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default GlobalMap;