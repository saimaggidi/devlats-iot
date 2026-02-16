import React from 'react';
import { MapPin } from 'lucide-react';

const GlobalMap: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-brand-900/50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Cloud native, borderless, <br/> scalable and global
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
                Unlocking Universal Zero Trust Network Access on all continents. Deploy instantly, manage globally.
            </p>

            {/* Stylized Map Container */}
            <div className="relative w-full h-[300px] md:h-[500px] mx-auto max-w-5xl bg-brand-900/30 rounded-3xl border border-brand-500/10 backdrop-blur-sm flex items-center justify-center overflow-hidden group">
                {/* World Map SVG Representation */}
                <svg className="w-full h-full opacity-30 absolute top-0 left-0" viewBox="0 0 1000 500">
                    <path d="M145,315l15,-20l-10,-30l-30,-10l-20,20l10,30z" fill="#5BA0AF" /> {/* Rough SA */}
                    <path d="M230,120l50,10l20,40l-30,30l-60,-10l-10,-40z" fill="#5BA0AF" /> {/* Rough NA */}
                    <path d="M480,100l30,10l10,50l-20,20l-40,-10l-10,-40z" fill="#5BA0AF" /> {/* Rough EU */}
                    <path d="M550,250l30,20l10,60l-30,20l-50,-10l-10,-50z" fill="#5BA0AF" /> {/* Rough Africa */}
                    <path d="M750,120l60,20l20,50l-40,30l-80,-10l-20,-50z" fill="#5BA0AF" /> {/* Rough Asia */}
                    <path d="M850,350l40,10l10,30l-20,20l-50,-10l-10,-30z" fill="#5BA0AF" /> {/* Rough Aus */}
                </svg>

                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Pulsing Dots (Locations) */}
                {[
                    { t: '25%', l: '20%' }, { t: '30%', l: '25%' }, { t: '20%', l: '80%' },
                    { t: '40%', l: '50%' }, { t: '60%', l: '60%' }, { t: '70%', l: '85%' },
                    { t: '35%', l: '48%' }, { t: '28%', l: '52%' }
                ].map((pos, i) => (
                    <div key={i} className="absolute" style={{ top: pos.t, left: pos.l }}>
                         <div className="relative flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400"></span>
                         </div>
                    </div>
                ))}

                {/* Central Text overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-900/60 backdrop-blur-[2px]">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">100+</div>
                        <div className="text-sm text-brand-300 uppercase tracking-widest font-bold">PoPs Worldwide</div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                {[
                    { label: 'Countries', value: '90+' },
                    { label: 'Users & Devices', value: '500M+' },
                    { label: 'Secured Sites', value: '100k+' },
                ].map((stat, i) => (
                    <div key={i} className="p-6 bg-brand-900/50 rounded-2xl border border-brand-800 hover:border-brand-500 transition-colors">
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-400 uppercase tracking-wide font-semibold">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default GlobalMap;