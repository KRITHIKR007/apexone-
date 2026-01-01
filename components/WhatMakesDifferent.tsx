'use client';

export default function WhatMakesDifferent() {
    const comparisons = [
        {
            title: "The Approach",
            oldWay: "Running isolated ad campaigns manually.",
            newWay: "Building self-optimizing growth engines.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
            title: " The Deliverable",
            oldWay: "Dashboards you have to check.",
            newWay: "Intelligence that alerts you.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            title: "The Data",
            oldWay: "Siloed in Facebook / Google / CRM.",
            newWay: "Unified Single Source of Truth.",
            icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        },
        {
            title: "The Focus",
            oldWay: "Vanity metrics (Clicks, Likes).",
            newWay: "Business metrics (Net Profit, LTV).",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }
    ];

    return (
        <section className="section bg-slate-50">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="accent-line mx-auto mb-6" />
                        <h2 className="mb-4 text-4xl font-bold">Evolution, not Upgrade.</h2>
                        <p className="text-xl text-slate-600">Why traditional agencies and SaaS tools are failing.</p>
                    </div>

                    <div className="space-y-6">
                        {comparisons.map((item, idx) => (
                            <div key={idx} className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-100 -z-0"></div>

                                <div className="grid md:grid-cols-2 relative z-10">
                                    {/* The Old Way */}
                                    <div className="p-8 flex items-center justify-end text-right border-b md:border-b-0 md:border-r border-slate-100 opacity-50 bg-slate-50">
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">The Old Way</div>
                                            <div className="text-lg text-slate-700 font-medium">{item.oldWay}</div>
                                        </div>
                                    </div>

                                    {/* The Apex Way */}
                                    <div className="p-8 flex items-center bg-white">
                                        <div>
                                            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">The Apex Way</div>
                                            <div className="text-xl text-slate-900 font-bold">{item.newWay}</div>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-sm">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
