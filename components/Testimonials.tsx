'use client';

export default function Testimonials() {
    const testimonials = [
        {
            company: "Fintech Scaleup",
            growth: "+312%",
            metric: "Revenue Growth (YoY)",
            quote: "We were flying blind with 5 different agencies. ApexOne unified our data and the profit jump was immediate.",
            role: "Series B Founder"
        },
        {
            company: "E-Commerce Giant",
            growth: "6.4x",
            metric: "ROAS Improvement",
            quote: "I stopped looking at Facebook Ads Manager. I just look at the Golden Goose dashboard every morning.",
            role: "Marketing Director"
        },
        {
            company: "SaaS Enterprise",
            growth: "-40%",
            metric: "CAC Reduction",
            quote: "The automated sales agents transformed our lead flow. We are closing deals while our sales team sleeps.",
            role: "CRO"
        }
    ];

    return (
        <section id="testimonials" className="section bg-white">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="mb-4 text-4xl font-bold">Don't trust words.<br />Trust the P&L.</h2>
                        <p className="text-xl text-slate-600">
                            Results from our partners after installing the Apex Operating System.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative hover:shadow-lg transition-shadow">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full uppercase tracking-wide">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        Verified
                                    </div>
                                </div>

                                <div className="text-4xl font-bold text-slate-900 mb-1">{t.growth}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">{t.metric}</div>

                                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.quote}"</p>

                                <div className="border-t border-slate-200 pt-4">
                                    <div className="font-bold text-slate-900">{t.company}</div>
                                    <div className="text-sm text-slate-500">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
