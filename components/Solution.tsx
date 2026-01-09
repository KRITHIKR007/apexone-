'use client';

export default function Solution() {
    return (
        <section id="solution" className="min-h-screen bg-[#050505] flex flex-col justify-center items-center relative overflow-hidden text-white py-20 px-4">
            {/* Background Grid - Subtle Tech Feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

            {/* Radial Gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.1),transparent_70%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 mb-8 opacity-70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] uppercase">
                        System Unified
                    </span>
                </div>

                {/* Massive Heading */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-10 leading-[1.1] md:leading-[0.9]">
                    One Platform.<br />
                    <span className="text-slate-600">Complete Visibility.</span>
                </h2>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-16 md:mb-24 font-light antialiased px-4">
                    Stop guessing. We connect every data point to surface the only metric that matters: <span className="text-white border-b border-emerald-500/50 pb-0.5">Net Profit</span>.
                </p>

                {/* 3 Pillars - Ultra Minimal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto text-left">
                    {[
                        { label: 'Intelligence', val: 'Real-time P&L', color: 'bg-emerald-500' },
                        { label: 'Automation', val: 'Workflow Autonomy', color: 'bg-indigo-500' },
                        { label: 'Prediction', val: 'LTV Forecasting', color: 'bg-violet-500' }
                    ].map((item, i) => (
                        <div key={i} className="border-t border-white/10 pt-6 group hover:border-white/30 transition-colors cursor-default">
                            <div className={`w-1.5 h-1.5 ${item.color} rounded-full mb-4 shadow-[0_0_10px_currentColor] opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                            <h3 className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">{item.label}</h3>
                            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 group-hover:text-white transition-colors">{item.val}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
