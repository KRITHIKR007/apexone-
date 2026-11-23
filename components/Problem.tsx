'use client';

export default function Problem() {
    return (
        <section id="problem" className="section bg-white relative overflow-hidden py-24 sm:py-32 border-t border-slate-100">
            <div className="container relative">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                        Why Traditional Growth Stalls.
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
                        High-growth enterprises don't fail from lack of effort. They bleed margin in fragmented silos.
                        <span className="font-semibold text-slate-900"> Intuition cannot compete with deterministic telemetry.</span>
                    </p>
                </div>

                {/* Problem Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: 'Data Silos',
                            desc: 'Marketing, Sales, and Finance speak different languages. No single source of truth.',
                            icon: (
                                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            )
                        },
                        {
                            title: 'Margin Leaks',
                            desc: 'Profitable campaigns bleed money due to attribution errors and delayed reporting.',
                            icon: (
                                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )
                        },
                        {
                            title: 'Slow Velocity',
                            desc: 'It takes 14 days to close your books. By the time you act, the market has moved.',
                            icon: (
                                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )
                        },
                        {
                            title: 'Intuition Trap',
                            desc: 'Strategy based on "gut feeling" instead of mathematical certainty. High risk, low control.',
                            icon: (
                                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            )
                        }
                    ].map((item, idx) => (
                        <div key={item.title} className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
