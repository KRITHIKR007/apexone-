'use client';

export default function ForWhom() {
    return (
        <section className="section bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-900/20" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Top 1%</span>.</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We are not a vendor for everyone. We are a strategic partner for high-growth leadership teams.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* The Qualifier */}
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">✓</span>
                            Who Fits
                        </h3>
                        <ul className="space-y-6">
                            {[
                                { title: "Founders & CEOs", desc: "You are tired of managing people and want to manage systems." },
                                { title: "Revenue > $1M", desc: "You have product-market fit, but scaling is breaking your operations." },
                                { title: "Data-Hungry", desc: "You believe that gut-feeling is for gambling, not for business." },
                                { title: "Aggressive Goals", desc: "You want to 3x your growth next year, not 1.1x." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-lg text-slate-100">{item.title}</div>
                                        <div className="text-slate-400 text-sm leading-relaxed">{item.desc}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Disqualifier */}
                    <div className="bg-transparent rounded-3xl p-10 border border-white/5 opacity-60 hover:opacity-100 transition-opacity">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-400">
                            <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 font-bold">✕</span>
                            Who Does Not
                        </h3>
                        <ul className="space-y-6">
                            {[
                                { title: "Micromanagers", desc: "We build autonomous systems. If you need to approve every pixel, we are not a match." },
                                { title: "Idea Stage", desc: "We fuel fire, we don't start it. Come back when you have revenue." },
                                { title: "Feature Shoppers", desc: "If you are looking for a 'cheaper Mailchimp', we are too expensive for you." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-lg text-slate-300">{item.title}</div>
                                        <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
