'use client';

export default function Results90Days() {
    return (
        <section className="section bg-slate-900 text-white relative overflow-hidden">
            {/* Dark background with gradient accents */}
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 mb-6 font-mono text-sm">
                        TIMELINE TO PROFITABILITY
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">What to expect in 90 Days.</h2>
                    <p className="text-xl text-slate-400">
                        We don't sell "plans". We sell outcomes. Here is exactly what happens.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 -z-10 opacity-30 transform translate-y-4" />

                    {/* Stage 1 */}
                    <div className="relative group">
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-xl font-bold mb-6 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors mx-auto relative z-10 shadow-xl">
                            01
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 font-mono">Day 1-30</div>
                            <h3 className="text-2xl font-bold mb-3">The Audit</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li className="flex gap-2"><span>•</span> Full data infrastructure setup</li>
                                <li className="flex gap-2"><span>•</span> Connecting all revenue sources</li>
                                <li className="flex gap-2"><span>•</span> Identifying "money leaks"</li>
                            </ul>
                        </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="relative group">
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-xl font-bold mb-6 group-hover:border-purple-500 group-hover:text-purple-400 transition-colors mx-auto relative z-10 shadow-xl">
                            02
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2 font-mono">Day 31-60</div>
                            <h3 className="text-2xl font-bold mb-3">The Optimization</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li className="flex gap-2"><span>•</span> Implementation of CIIP</li>
                                <li className="flex gap-2"><span>•</span> Automated reporting live</li>
                                <li className="flex gap-2"><span>•</span> First growth experiments launched</li>
                            </ul>
                        </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="relative group">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-xl font-bold mb-6 text-emerald-400 mx-auto relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                            03
                        </div>
                        <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 p-6 rounded-2xl">
                            <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 font-mono">Day 90+</div>
                            <h3 className="text-2xl font-bold mb-3 text-white">The Scale</h3>
                            <ul className="space-y-2 text-emerald-100/70 text-sm">
                                <li className="flex gap-2"><span>•</span> Predictable revenue engine</li>
                                <li className="flex gap-2"><span>•</span> 50% Reduction in manual work</li>
                                <li className="flex gap-2"><span>•</span> <strong>Complete Business Visibility</strong></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">3.5x</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Avg. ROI</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">14 Days</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Time to Value</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Data Ownership</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">24/7</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Executive Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
