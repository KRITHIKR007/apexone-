'use client';

import React from 'react';
import Link from 'next/link';

interface PhaseItem {
    days: string;
    phase: string;
    title: string;
    description: string;
    deliverables: string[];
}

const PHASES: PhaseItem[] = [
    {
        days: 'DAY 1–30',
        phase: 'Phase 01',
        title: 'Ingestion & Forensic Audit',
        description: 'Complete data lakehouse setup and multi-touch reconciliation across payment processors, CRM, and ad platforms.',
        deliverables: [
            'PostgreSQL or Snowflake pipeline live',
            'Forensic margin baseline calculated',
            'Attribution leaks surfaced and quantified'
        ]
    },
    {
        days: 'DAY 31–60',
        phase: 'Phase 02',
        title: 'Sovereign Enclave & Swarms',
        description: 'Installation of the CIIP air-gapped security perimeter and first live deployment of autonomous outbound sales swarms.',
        deliverables: [
            'CIIP air-gapped KMS isolation active',
            'Automated daily P&L dispatch loop',
            '24/7 Outbound prospecting neural swarm'
        ]
    },
    {
        days: 'DAY 61–90+',
        phase: 'Phase 03',
        title: 'Continuous Autonomous Scale',
        description: 'Real-time unit economics feedback loops actively managing budget arbitrage and churn defense with zero headcount added.',
        deliverables: [
            'Audited net EBITDA expansion engine',
            'Sub-minute ad spend decay pruning',
            'Full executive board P&L visibility'
        ]
    }
];

export default function Results90Days() {
    return (
        <section className="bg-black text-white flex flex-col justify-center items-center overflow-hidden relative selection:bg-indigo-500/30 py-24 sm:py-32 px-4">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="mb-14 md:mb-16 text-center">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 block mb-3">
                        DEPLOYMENT TIMELINE
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white leading-tight">
                        What to Expect in 90 Days.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                        We don&apos;t deliver vague strategy decks. We deploy sovereign infrastructure with mathematical milestones.
                    </p>
                </div>

                {/* 3 Dark Timeline Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {PHASES.map((phase, idx) => (
                        <div
                            key={idx}
                            className="bg-[#111113] border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between text-left shadow-xl"
                        >
                            <div>
                                {/* Days & Phase Pill Header */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                                        {phase.days}
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400">
                                        {phase.phase}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-6 mb-3">
                                    {phase.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-8">
                                    {phase.description}
                                </p>
                            </div>

                            {/* Checklist Deliverables */}
                            <div className="space-y-3.5 pt-4">
                                {phase.deliverables.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-start gap-3">
                                        <div className="w-4 h-4 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0 mt-0.5 text-white">
                                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-xs sm:text-[13px] text-slate-300 font-normal leading-tight">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Action CTA Button */}
                <div className="text-center">
                    <Link
                        href="/contact"
                        prefetch={false}
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25"
                    >
                        Schedule 90-Day Implementation Audit
                    </Link>
                </div>

            </div>
        </section>
    );
}
