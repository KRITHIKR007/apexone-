'use client';

export default function FinalCTA() {
    return (
        <section id="audit" className="section relative overflow-hidden bg-black text-white py-32">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        Stop guessing.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Start Knowing.</span>
                    </h2>

                    <p className="text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light">
                        Your business has hidden profit right now. We will find it in 48 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                            <span className="relative flex items-center gap-3">
                                Start Your Audit
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </span>
                        </a>

                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="h-px w-12 bg-slate-800"></div>
                            <span className="text-sm uppercase tracking-widest">or</span>
                            <div className="h-px w-12 bg-slate-800"></div>
                        </div>

                        <a href="/products/enterprise-os" className="text-lg text-white hover:text-indigo-400 font-medium transition-colors">
                            View the Enterprise OS
                        </a>
                    </div>

                    <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto opacity-60">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                            <span className="text-xs uppercase tracking-widest text-slate-500">Strategic Audit</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                            <span className="text-xs uppercase tracking-widest text-slate-500">7-Day Turnaround</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                            <span className="text-xs uppercase tracking-widest text-slate-500">No Commitments</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
