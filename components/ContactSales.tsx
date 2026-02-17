import React from 'react';
import { Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const ContactSales: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Column: Context & Info */}
            <div>
                <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Contact Us</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                    Get a personalized <br/> <span className="text-brand-600">quote today</span>
                </h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                    Ready to transform your network security? Our team connects you with the right solution for your global needs. 
                </p>

                <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100">
                            <Mail className="w-5 h-5 text-brand-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Sales Inquiries</h4>
                            <p className="text-slate-500 mb-1">For enterprise plans and partnerships.</p>
                            <a href="mailto:sales@cloudi-fi.com" className="text-brand-600 font-bold hover:underline">sales@cloudi-fi.com</a>
                        </div>
                    </div>

                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100">
                            <MapPin className="w-5 h-5 text-brand-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Global HQ</h4>
                            <p className="text-slate-500">
                                123 Innovation Drive<br/>
                                75001 Paris, France
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" /> What happens next?
                    </h5>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span> An expert will analyze your requirements.</li>
                        <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span> We'll schedule a brief demo or discovery call.</li>
                        <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span> Receive a tailored proposal within 24 hours.</li>
                    </ul>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-brand-500 rounded-full blur-[60px] opacity-10 pointer-events-none"></div>
                
                <form className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400" placeholder="Jane" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400" placeholder="Doe" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                        <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400" placeholder="jane@company.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400" placeholder="Acme Corp" />
                    </div>

                     <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none placeholder:text-slate-400" placeholder="Tell us about your project needs..."></textarea>
                    </div>

                    <button type="button" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                        Send Request <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-xs text-slate-400 text-center mt-4">
                        By submitting this form, you agree to our <a href="#" className="underline hover:text-brand-600">Privacy Policy</a>.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSales;