'use client';

import React from 'react';
import Link from 'next/link';
import { SFArrowRight, SFCheck } from './SFIcons';

export default function FinalCTA() {
    return (
        <section id="audit" className="py-24 sm:py-32 md:py-40 bg-[#000000] text-white border-t border-white/[0.08] relative overflow-hidden">
            <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center space-y-6">

                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#86868b] uppercase block">
                        SOVEREIGN ARCHITECTURE AUDIT
                    </span>

                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.03em] text-white leading-tight font-sans">
                        Stop Guessing.<br />
                        <span className="text-[#86868b]">Scale with Deterministic Intelligence.</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-[#86868b] max-w-2xl mx-auto font-light leading-relaxed">
                        We map your attribution leaks, benchmark your unit economics, and deploy sovereign neural infrastructure inside your private cloud perimeter.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                        <Link
                            href="/contact"
                            prefetch={false}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-normal text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20 group"
                        >
                            <span>Schedule an Architecture Audit</span>
                            <SFArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/services#enterprise-os"
                            prefetch={false}
                            className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-normal text-[#2997ff] hover:underline transition-colors"
                        >
                            <span>Explore Enterprise OS Specs</span>
                            <span className="ml-1">›</span>
                        </Link>
                    </div>

                    <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/[0.08] text-xs text-[#86868b] font-light">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-500/20 text-[#2997ff] flex items-center justify-center shrink-0">
                                <SFCheck className="w-2.5 h-2.5" />
                            </div>
                            <span>Forensic Unit Economics Audit</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-500/20 text-[#2997ff] flex items-center justify-center shrink-0">
                                <SFCheck className="w-2.5 h-2.5" />
                            </div>
                            <span>Zero Public Model Sharing</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-500/20 text-[#2997ff] flex items-center justify-center shrink-0">
                                <SFCheck className="w-2.5 h-2.5" />
                            </div>
                            <span>90-Day Net Margin Guarantee</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
