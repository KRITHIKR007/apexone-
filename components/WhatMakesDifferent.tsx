'use client';

export default function WhatMakesDifferent() {
    return (
        <section className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center overflow-hidden relative selection:bg-indigo-500/30 py-20 px-4">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 text-white leading-tight">
                        Evolution, not Upgrade.
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light tracking-wide">
                        Why traditional agencies and SaaS tools are failing.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
                    {/* Center Divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent -translate-x-1/2 hidden md:block"></div>

                    {/* Column Headers */}
                    <div className="text-left md:text-right md:pr-12 border-b md:border-none border-white/10 pb-8 md:pb-0 mb-8 md:mb-0">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-600 mb-6 md:mb-8">The Old Way</h3>
                        <div className="space-y-8 md:space-y-16">
                            {[
                                "Running isolated ad campaigns manually.",
                                "Dashboards you have to check.",
                                "Siloed in Facebook / Google / CRM.",
                                "Vanity metrics (Clicks, Likes)."
                            ].map((text, i) => (
                                <p key={i} className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-medium line-through decoration-slate-800 decoration-2 transition-colors duration-500 hover:text-slate-500 hover:decoration-slate-700 cursor-default">
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="text-left md:pl-12">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-emerald-500 mb-6 md:mb-8 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">The Apex Way</h3>
                        <div className="space-y-8 md:space-y-16">
                            {[
                                "Building self-optimizing growth engines.",
                                "Intelligence that alerts you.",
                                "Unified Single Source of Truth.",
                                "Business metrics (Net Profit, LTV)."
                            ].map((text, i) => (
                                <p key={i} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold leading-tight relative">
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
