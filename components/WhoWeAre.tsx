'use client';

import { SFDocText, SFBolt, SFBarChart } from './SFIcons';

export default function WhoWeAre() {
    const pillars = [
        {
            title: "Sovereign Infrastructure",
            desc: "You own your data lakes, pipeline code, and customer intelligence models 100%. No vendor lock-in, no shared pools, and no rented intellectual property.",
            tag: "Complete IP Ownership",
            Icon: SFDocText
        },
        {
            title: "Algorithmic Precision",
            desc: "Sub-second budget allocation, real-time CPA arbitrage, and automated audience triage that halts ad spend decay before human teams can even log in.",
            tag: "Sub-Second Latency",
            Icon: SFBolt
        },
        {
            title: "Deterministic Attribution",
            desc: "Creativity is vital, but cash flow is mathematical. Every campaign, workflow, and customer touchpoint is tied directly to incremental net profit.",
            tag: "True Unit Economics",
            Icon: SFBarChart
        }
    ];

    return (
        <section id="about" className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                {/* 3 Sovereign Pillar Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {pillars.map((item, i) => {
                        const Icon = item.Icon;
                        return (
                            <div
                                key={i}
                                className="relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group overflow-hidden"
                            >
                                <div>
                                    {/* Icon Squircle & Tag Pill */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-11 h-11 rounded-xl bg-indigo-50/50 border border-indigo-100 flex items-center justify-center text-indigo-600 transition-all duration-300 group-hover:scale-105">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-mono tracking-tight font-medium text-indigo-500/90 bg-indigo-50/30 px-3 py-1 rounded-full border border-indigo-100/80">
                                            {item.tag}
                                        </span>
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Card Description */}
                                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 font-light antialiased">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
