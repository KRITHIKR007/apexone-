'use client';

import React from 'react';

export default function RiskReversal() {
    const cards = [
        {
            tag: "WHAT YOU GET",
            text: "A full revenue audit — ad spend, CAC, LTV, and profit leaks identified in writing."
        },
        {
            tag: "WHO IT'S FOR",
            text: "Companies doing $500K+ revenue who want to scale without adding headcount."
        },
        {
            tag: "WHAT IT COSTS",
            text: "The audit is free. Ongoing engagement is scoped after we see your numbers."
        }
    ];

    return (
        <section className="bg-[#0b101d] text-white flex flex-col justify-center items-center overflow-hidden relative selection:bg-indigo-500/30 py-24 sm:py-32 px-4">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Top Accent Pill */}
                <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mb-8" />

                {/* Header */}
                <div className="mb-14 md:mb-16 text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white leading-tight">
                        We don&apos;t sell dreams.<br />
                        We sell systems.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                        We only work with companies where we&apos;re confident Growth OS creates measurable impact. That&apos;s why every engagement starts with a free audit — no pitch, no pressure.
                    </p>
                </div>

                {/* 3 Dark Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-[#131b2e]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-7 text-left shadow-lg backdrop-blur-sm"
                        >
                            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-indigo-400 mb-3.5 block">
                                {card.tag}
                            </span>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Audit Callout Card */}
                <div className="max-w-xl mx-auto bg-[#131b2e]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-7 text-center shadow-lg backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight">
                        Start with the Audit.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-light">
                        No commitment. No risk. Just clarity on where your profit is going.
                    </p>
                </div>

            </div>
        </section>
    );
}
