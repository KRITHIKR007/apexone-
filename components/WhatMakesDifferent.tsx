'use client';

export default function WhatMakesDifferent() {
    return (
        <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden relative selection:bg-indigo-500/30 py-24 sm:py-32 px-4">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Header */}
                <div className="mb-16 md:mb-24 text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white leading-tight">
                        Evolution, not Upgrade.
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light tracking-wide">
                        Why traditional agencies and SaaS tools are failing.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">
                    {/* Center Divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                    {/* Left Column: The Old Way */}
                    <div className="text-left md:text-right md:pr-12">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-slate-500 mb-8 md:mb-12">
                            The Old Way
                        </h3>
                        <div className="space-y-8 md:space-y-14">
                            {[
                                "Running isolated ad campaigns manually.",
                                "Dashboards you have to check.",
                                "Siloed in Facebook / Google / CRM.",
                                "Vanity metrics (Clicks, Likes)."
                            ].map((text, i) => (
                                <p key={i} className="text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed">
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: The Apex Way */}
                    <div className="text-left md:pl-12">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 mb-8 md:mb-12">
                            The Apex Way
                        </h3>
                        <div className="space-y-8 md:space-y-14">
                            {[
                                "Building self-optimizing growth engines.",
                                "Intelligence that alerts you.",
                                "Unified Single Source of Truth.",
                                "Business metrics (Net Profit, LTV)."
                            ].map((text, i) => (
                                <p key={i} className="text-lg sm:text-xl md:text-2xl text-white font-bold leading-snug">
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
