'use client';

export default function RiskReversal() {
    return (
        <section className="section bg-slate-900 text-white">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded mx-auto mb-8" />

                    <h2 className="text-white mb-8">
                        We don't sell dreams.<br />
                        We sell systems.
                    </h2>

                    <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                        We only work with companies where we're confident Growth OS creates measurable impact.
                        That's why every engagement starts with a free audit — no pitch, no pressure.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { label: "What you get", value: "A full revenue audit — ad spend, CAC, LTV, and profit leaks identified in writing." },
                            { label: "Who it's for", value: "Companies doing $500K+ revenue who want to scale without adding headcount." },
                            { label: "What it costs", value: "The audit is free. Ongoing engagement is scoped after we see your numbers." }
                        ].map((item, i) => (
                            <div key={i} className="text-left p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">{item.label}</div>
                                <p className="text-slate-300 text-sm leading-relaxed">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                        <p className="text-2xl font-semibold text-white mb-2">
                            Start with the Audit.
                        </p>
                        <p className="text-slate-300">
                            No commitment. No risk. Just clarity on where your profit is going.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
