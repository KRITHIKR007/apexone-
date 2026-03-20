'use client';

export default function Testimonials() {
    const testimonials = [
        {
            company: "D2C Health Brand",
            industry: "E-Commerce · India",
            growth: "+312%",
            metric: "Revenue Growth (YoY)",
            quote: "We were running 5 agencies with zero visibility into what was actually working. ApexOne unified everything into one dashboard and the profit jump was immediate — we saw it in the first 30 days.",
            name: "Rohan M.",
            role: "Founder & CEO",
            initials: "RM",
            color: "bg-indigo-600"
        },
        {
            company: "Performance Marketing Agency",
            industry: "SaaS · Southeast Asia",
            growth: "6.4x",
            metric: "ROAS Improvement",
            quote: "I stopped micromanaging ad accounts. The Golden Goose dashboard gives me a single number every morning — profit. That's all I needed.",
            name: "Priya S.",
            role: "Marketing Director",
            initials: "PS",
            color: "bg-violet-600"
        },
        {
            company: "B2B SaaS Platform",
            industry: "Enterprise SaaS · US",
            growth: "-40%",
            metric: "CAC Reduction",
            quote: "The automated outbound agents changed everything. Our sales team now focuses on closing, not prospecting. Pipeline quality went up, cost went down.",
            name: "James T.",
            role: "Chief Revenue Officer",
            initials: "JT",
            color: "bg-emerald-600"
        }
    ];

    return (
        <section id="testimonials" className="section bg-white">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="mb-4 text-4xl font-bold">Don't trust words.<br />Trust the P&L.</h2>
                        <p className="text-xl text-slate-600">
                            Results from partners after deploying the Apex Operating System.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative hover:shadow-lg transition-shadow flex flex-col">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full uppercase tracking-wide">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        Client Result
                                    </div>
                                </div>

                                <div className="text-4xl font-bold text-slate-900 mb-1">{t.growth}</div>
                                <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-6">{t.metric}</div>

                                <p className="text-slate-700 italic mb-6 leading-relaxed flex-1">"{t.quote}"</p>

                                <div className="border-t border-slate-200 pt-4 flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{t.name} · {t.company}</div>
                                        <div className="text-xs text-slate-500">{t.role} · {t.industry}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-xs text-slate-400 mt-8">
                        Names anonymized at client request. Full case studies available during discovery call.
                    </p>
                </div>
            </div>
        </section>
    );
}
