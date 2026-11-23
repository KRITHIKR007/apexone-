'use client';

export default function ForWhom() {
    return (
        <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="max-w-3xl mb-16 sm:mb-20">
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4 block">
                        Partnership Profile
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                        Built for Operators Seeking <br />
                        <span className="text-indigo-600">Pure Leverage.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Part 1: Who It's Built For */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl font-mono font-bold text-slate-400">01</span>
                                <h3 className="text-2xl font-bold text-slate-900">Who We Partner With</h3>
                            </div>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-light">
                                We partner with established founders, CROs, and finance leaders who recognize that sustainable growth comes from software leverage rather than endlessly expanding headcount.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { label: "Annual Revenue", desc: "$500K - $50M ARR seeking margin optimization" },
                                    { label: "Lean Culture", desc: "Prioritizes automated accuracy over managerial layers" },
                                    { label: "Data Ready", desc: "Has existing traffic, transactions, or CRM activity to analyze" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                                        <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                                        <div>
                                            <strong className="text-slate-900">{item.label}:</strong>{' '}
                                            <span className="text-slate-600">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Part 2: Who It's Not For */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl font-mono font-bold text-slate-400">02</span>
                                <h3 className="text-2xl font-bold text-slate-900">Where We Are Not A Fit</h3>
                            </div>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-light">
                                We don't sell hourly marketing retainers, social media graphics, or vanity metric reports. If you're looking for an agency to manage hours rather than output, ApexOne is the wrong fit.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { label: "Early Idea Stage", desc: "Pre-product or pre-revenue projects without historical data" },
                                    { label: "Vanity Metrics", desc: "Prioritizing impressions or follower counts over net cash flow" },
                                    { label: "Manual Dependencies", desc: "Preferring bloated team meetings over autonomous dashboards" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                                        <span className="w-2 h-2 rounded-full bg-slate-400 mt-2 shrink-0" />
                                        <div>
                                            <strong className="text-slate-900">{item.label}:</strong>{' '}
                                            <span className="text-slate-600">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
