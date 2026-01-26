'use client';

export default function GoldenGoose() {
    return (
        <section className="section bg-slate-50 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 font-medium text-xs uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Proprietary Intelligence Engine
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            Meet <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Golden Goose</span>.<br />
                            Your Business, De-Coded.
                        </h2>

                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                            We don't build dashboards. We build a <span className="text-indigo-600 font-semibold">central nervous system</span> for your company.
                            Golden Goose ingests chaos from your ads, banks, and CRMs — and spits out pure math.
                        </p>

                        <div className="flex flex-col gap-4 mb-10">
                            {[
                                { title: 'No More "I Think"', desc: 'Replace gut feeling with Bayesian probability models.' },
                                { title: 'Live P&L Tracking', desc: 'See your exact net profit every second of the day.' },
                                { title: 'Predictive ROI', desc: 'Know the 90-day value of a customer before they buy.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300">
                                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="/products/golden-goose" className="group inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                            Explore the Architecture
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Right: Visual Creative - Optimized for Mobile */}
                    <div className="relative px-0 md:px-8 py-12 order-first lg:order-last">
                        {/* Main Card */}
                        <div className="relative z-20 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl shadow-indigo-500/20 border border-slate-100 transform rotate-0 md:rotate-[-2deg] transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
                            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                                <div>
                                    <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-bold">Live Profitability</div>
                                    <div className="text-2xl md:text-3xl font-bold text-slate-900">₹8,420,103</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] md:text-xs text-emerald-500 font-bold bg-emerald-50 px-2 py-1 rounded">+24%</div>
                                </div>
                            </div>

                            {/* Fake Chart Bars - Fewer bars on very small screens */}
                            <div className="flex items-end gap-2 md:gap-3 h-32 md:h-48 mb-6">
                                {[40, 60, 45, 70, 85, 60, 95].slice(0, 5).concat([60, 95]).map((h, i) => (
                                    <div key={i} className={`w-full bg-indigo-50 rounded-t-lg relative group overflow-hidden ${i > 4 ? 'hidden sm:block' : ''}`}>
                                        <div style={{ height: `${h}%` }} className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-t-lg transition-all duration-1000 group-hover:bg-indigo-600" />
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-900 rounded-xl p-4 text-white flex items-center gap-4 shadow-lg">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 animate-pulse">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400">AI Recommendation</div>
                                    <div className="font-medium text-xs md:text-sm leading-tight">Scale Campaign #402. ROAS is 4.2x.</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 1 - Repositioned/Hidden on small mobile */}
                        <div className="absolute -top-4 right-0 md:-top-6 md:-right-6 z-30 bg-white p-3 md:p-4 rounded-xl shadow-xl shadow-purple-500/10 border border-white/50 w-40 md:w-48 animate-[float_6s_ease-in-out_infinite]">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <div className="text-[10px] font-bold text-slate-700">Kill Signal</div>
                            </div>
                            <div className="text-[10px] text-slate-500 leading-tight">"Creative fatigue detected. Paused."</div>
                        </div>

                        {/* Floating Element 2 - Hidden on very small mobile */}
                        <div className="hidden sm:block absolute -bottom-6 -left-6 z-30 bg-white p-4 rounded-2xl shadow-xl shadow-emerald-500/10 border border-white/50 w-56 animate-[float_8s_ease-in-out_infinite_reverse]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <div className="text-xs font-bold text-slate-700">Cohort Detected</div>
                            </div>
                            <div className="text-xs text-slate-500">"New user segment identified. LTV high."</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
