'use client';

export default function Solution() {
    return (
        <section id="solution" className="section bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-sm font-semibold text-indigo-900 tracking-wide uppercase">Unified Command Center</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
                        One Platform.<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Complete Visibility.</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Stop toggling between 12 different dashboards. ApexOne Studios connects every data point in your business and surfaces the only metric that matters: <span className="font-bold text-slate-900">Net Profit</span>.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Central Hub - The "One Platform" Visual */}
                    <div className="lg:col-span-3 bg-white rounded-3xl p-1 shadow-xl border border-indigo-100 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white opacity-50" />

                        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 md:p-12 items-center">
                            {/* Central Text */}
                            <div className="lg:col-span-1 text-left">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">The Apex Core</h3>
                                <p className="text-slate-500 text-sm">Real-time data ingestion from all sources.</p>
                            </div>

                            {/* Connection Lines (Visual only) */}
                            <div className="hidden lg:flex col-span-3 justify-between relative px-8">
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-indigo-200 -z-10" />

                                {[
                                    { title: 'Ad Networks', icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' },
                                    { title: 'CRM & Sales', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                                    { title: 'Banking/Stripe', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-indigo-50 z-10 w-32">
                                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-700">{item.title}</span>
                                        <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            Active
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards Grid */}
                    {[
                        { title: 'Business Intelligence', desc: 'Replace "I think" with "I know". Real-time P&L dashboards.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                        { title: 'Process Automation', desc: 'Robots don\'t sleep. Automate 80% of manual workflows.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                        { title: 'Sales Intelligence', desc: 'Predict customer LTV before they spend a single dollar.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
