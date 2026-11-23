'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function CoreServices() {
    return (
        <section id="services" className="py-24 sm:py-32 md:py-36 bg-[#f5f5f7] text-slate-900 overflow-hidden border-t border-slate-200/80">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* Section 1: Apple Services Hero Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-slate-400 uppercase mb-4 block">
                        ApexOne Services
                    </span>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.04] mb-6">
                        The best of ApexOne.<br />
                        <span className="text-slate-500 font-medium">All in one sovereign stack.</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light mb-8">
                        Connect autonomous sales swarms, deterministic revenue intelligence, and air-gapped security enclaves across your entire business.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            prefetch={false}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-normal tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20"
                        >
                            Scope Deployment
                        </Link>
                        <a
                            href="#bundle"
                            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
                        >
                            <span>Explore Sovereign Bundle</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Section 2: Flagship Bundle Spotlight ("Apple One" Equivalent Bento) */}
                <div id="bundle">
                    <div className="relative rounded-[32px] bg-[#0c0e14] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-white/10 shadow-2xl">
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
                            {/* Left Column: Bundle Story & Tiers */}
                            <div className="lg:col-span-7 space-y-6">
                                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-400 block">
                                    APEXONE UNIFIED // THE ALL-IN-ONE BUNDLE
                                </span>

                                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                                    One sovereign contract.<br />
                                    Complete cognitive execution.
                                </h3>

                                <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-xl">
                                    Bundle Growth OS, Golden Goose, and CIIP under a unified private VPC deployment. Replaces 6+ fragmented SaaS subscriptions and agencies with automated deterministic execution.
                                </p>

                                {/* 3 Flagship Pillars Included */}
                                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                                        <div className="text-sm font-semibold text-white">Growth OS</div>
                                        <div className="text-[11px] text-slate-400 mt-1">Autonomous SDR swarms</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                                        <div className="text-sm font-semibold text-white">Golden Goose</div>
                                        <div className="text-[11px] text-slate-400 mt-1">Real-time audited P&L</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                                        <div className="text-sm font-semibold text-white">CIIP Enclave</div>
                                        <div className="text-[11px] text-slate-400 mt-1">Air-gapped KMS privacy</div>
                                    </div>
                                </div>

                                {/* 90-Day Guarantee Callout */}
                                <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span>
                                        <strong className="text-white font-medium">90-Day Net Margin Guarantee:</strong> If target ROI is not verified in 90 days, we work at zero cost.
                                    </span>
                                </div>

                                <div className="pt-4 flex flex-wrap items-center gap-4">
                                    <Link
                                        href="/contact"
                                        prefetch={false}
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20"
                                    >
                                        Scope Sovereign Bundle
                                    </Link>
                                    <Link
                                        href="/about"
                                        prefetch={false}
                                        className="text-sm text-slate-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
                                    >
                                        <span>Learn about our standard</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Layered Hardware UI Showcase */}
                            <div className="lg:col-span-5 relative flex items-center justify-center">
                                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                                    {/* Backplate Card: CIIP */}
                                    <div className="absolute w-[85%] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 -rotate-6 -translate-y-8 bg-slate-900">
                                        <Image
                                            src="/services/ciip.png"
                                            alt="CIIP Architecture"
                                            fill
                                            className="object-cover opacity-80"
                                            sizes="400px"
                                        />
                                    </div>

                                    {/* Midplate Card: Golden Goose */}
                                    <div className="absolute w-[88%] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-3 translate-y-4 bg-slate-900">
                                        <Image
                                            src="/services/golden-goose.png"
                                            alt="Golden Goose Dashboard"
                                            fill
                                            className="object-cover opacity-90"
                                            sizes="400px"
                                        />
                                    </div>

                                    {/* Foreground Card: Growth OS */}
                                    <div className="absolute w-[92%] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 -translate-y-1 bg-slate-900 hover:scale-105 transition-transform duration-500">
                                        <Image
                                            src="/services/growth-os.png"
                                            alt="Growth OS Interface"
                                            fill
                                            className="object-cover"
                                            sizes="400px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
