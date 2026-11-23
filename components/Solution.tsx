'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Solution() {
    return (
        <section
            id="solution"
            className="w-full bg-black text-white relative overflow-hidden py-24 sm:py-32 md:py-36 px-4 selection:bg-blue-500/30 flex flex-col items-center justify-between min-h-[90vh]"
        >
            {/* Top Brand & Product Lockup (Apple Style:  WATCH SERIES 12) */}
            <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center z-10">
                <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                    {/* Minimal Monochromatic Apex Glyph */}
                    <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 19.5h20L12 2zm0 4.8l6.2 10.7H5.8L12 6.8z" />
                    </svg>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em] uppercase text-white font-sans">
                        APEXONE <span className="font-light text-slate-300">CORE</span>
                    </span>
                </div>
            </div>

            {/* Central Floating Hardware Product Photo (JARVIS / FRIDAY CORE) */}
            <div className="relative w-full max-w-4xl mx-auto my-10 sm:my-14 flex items-center justify-center z-10 group">
                {/* Subtle Cinematic Cyan/Cobalt Radial Glow Behind the Core */}
                <div className="absolute w-[360px] sm:w-[540px] md:w-[680px] h-[360px] sm:h-[540px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

                {/* Floating Product Image Container - Pure & Clean without floating tiles */}
                <div className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <Image
                        src="/services/jarvis-core.jpg"
                        alt="ApexOne Friday Sovereign Neural Core"
                        width={1376}
                        height={768}
                        priority
                        className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_50px_rgba(0,180,255,0.18)]"
                    />
                </div>
            </div>

            {/* Bottom Content & Apple-Style Action Buttons */}
            <div className="w-full max-w-3xl mx-auto text-center z-10 px-4">
                {/* Punchy Apple Headline */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white leading-snug mb-3">
                    The most powerful sovereign AI operating system ever built.¹
                </h3>

                <p className="text-sm sm:text-base text-[#86868b] max-w-xl mx-auto font-normal leading-relaxed mb-8">
                    Autonomous multi-agent swarms executing sales, attribution, and enterprise workflows 24/7.
                </p>

                {/* Apple Call to Action Buttons */}
                <div className="flex items-center justify-center gap-4">
                    <a
                        href="/#services"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-normal tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20"
                    >
                        Learn more
                    </a>

                    <Link
                        href="/contact"
                        prefetch={false}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#2997ff] text-[#2997ff] hover:bg-[#2997ff] hover:text-white text-[15px] font-normal tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Deploy Core
                    </Link>
                </div>

                {/* Apple Footnote */}
                <div className="mt-14 pt-6 border-t border-white/[0.08] text-[11px] text-[#6e6e73] leading-relaxed text-center font-normal">
                    1. Tested on sovereign private cloud clusters. Zero customer data or telemetry shared with public LLM training pools.
                </div>
            </div>
        </section>
    );
}
