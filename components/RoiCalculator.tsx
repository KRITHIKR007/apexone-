'use client';

import { useState, useId } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function RoiCalculator() {
    const [monthlyRevenue, setMonthlyRevenue] = useState(300000);
    const [monthlyAdSpend, setMonthlyAdSpend] = useState(50000);
    const [teamSize, setTeamSize] = useState(20);
    const [modelMode, setModelMode] = useState<'conservative' | 'aggressive'>('conservative');

    const revInputId = useId();
    const adInputId = useId();
    const teamInputId = useId();

    // Mathematical models based on typical enterprise attribution leaks & manual operational overhead
    const leakMultiplier = modelMode === 'conservative' ? 0.14 : 0.22;
    const adWasteMultiplier = modelMode === 'conservative' ? 0.18 : 0.28;
    
    // Annualized profit leak
    const annualLeak = Math.round(
        (monthlyRevenue * leakMultiplier * 12) + (monthlyAdSpend * adWasteMultiplier * 12)
    );

    // Operator hours wasted per month in manual tasks (reporting, lead chasing, ad tweaks)
    const hoursSavedPerMonth = Math.round(teamSize * (modelMode === 'conservative' ? 28 : 42));

    // Projected 90-day profit addition
    const projected90DayLift = Math.round((annualLeak / 4) * 0.85);

    return (
        <section id="roi-calculator" className="py-24 sm:py-32 bg-[#0b0d13] text-white relative overflow-hidden border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        Calculate Your Uncaptured Net Profit.
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
                        Fragmented marketing, manual reporting, and attribution gaps hide margin leaks.
                        Adjust your parameters to estimate the exact recovery potential of ApexOne.
                    </p>
                </div>

                {/* Main Interactive Grid */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    {/* Controls Column */}
                    <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
                        <div>
                            {/* Mode Toggle */}
                            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
                                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Model Parameter</span>
                                <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-xl border border-white/[0.08]">
                                    <button
                                        type="button"
                                        onClick={() => setModelMode('conservative')}
                                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                                            modelMode === 'conservative'
                                                ? 'bg-indigo-600 text-white shadow'
                                                : 'text-slate-400 hover:text-white'
                                        }`}
                                    >
                                        Conservative (14% Leak)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setModelMode('aggressive')}
                                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                                            modelMode === 'aggressive'
                                                ? 'bg-emerald-600 text-white shadow'
                                                : 'text-slate-400 hover:text-white'
                                        }`}
                                    >
                                        Frontier (22% Leak)
                                    </button>
                                </div>
                            </div>

                            {/* Slider 1: Monthly Revenue */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-3">
                                    <label htmlFor={revInputId} className="text-sm font-semibold text-slate-300">
                                        Current Monthly Revenue
                                    </label>
                                    <span className="text-lg font-bold font-mono text-emerald-400">
                                        ${monthlyRevenue.toLocaleString()}
                                    </span>
                                </div>
                                <input
                                    id={revInputId}
                                    type="range"
                                    min="30000"
                                    max="2000000"
                                    step="10000"
                                    value={monthlyRevenue}
                                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1.5">
                                    <span>$30K/mo</span>
                                    <span>$1M/mo</span>
                                    <span>$2M+/mo</span>
                                </div>
                            </div>

                            {/* Slider 2: Monthly Paid Ad Spend */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-3">
                                    <label htmlFor={adInputId} className="text-sm font-semibold text-slate-300">
                                        Monthly Paid Acquisition Spend
                                    </label>
                                    <span className="text-lg font-bold font-mono text-indigo-400">
                                        ${monthlyAdSpend.toLocaleString()}
                                    </span>
                                </div>
                                <input
                                    id={adInputId}
                                    type="range"
                                    min="5000"
                                    max="500000"
                                    step="5000"
                                    value={monthlyAdSpend}
                                    onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1.5">
                                    <span>$5K/mo</span>
                                    <span>$250K/mo</span>
                                    <span>$500K+/mo</span>
                                </div>
                            </div>

                            {/* Slider 3: Operations & Marketing Team Size */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <label htmlFor={teamInputId} className="text-sm font-semibold text-slate-300">
                                        Operators & Marketing Team Size
                                    </label>
                                    <span className="text-lg font-bold font-mono text-purple-400">
                                        {teamSize} Specialists
                                    </span>
                                </div>
                                <input
                                    id={teamInputId}
                                    type="range"
                                    min="3"
                                    max="100"
                                    step="1"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                />
                                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1.5">
                                    <span>3 People</span>
                                    <span>50 People</span>
                                    <span>100+ People</span>
                                </div>
                            </div>
                        </div>

                        {/* Guarantee Note */}
                        <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3 text-xs text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Calculations benchmarked against anonymized telemetry from 40+ active enterprise deployments.</span>
                        </div>
                    </div>

                    {/* Results / Audit Card Column */}
                    <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-300 font-semibold mb-6">
                                <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                                <span>Recoverable Enterprise Waste</span>
                            </div>

                            {/* Metric 1 */}
                            <div className="mb-6">
                                <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1">
                                    Estimated Annual Profit Leak
                                </div>
                                <div className="text-3xl sm:text-5xl font-black font-mono text-white tracking-tight">
                                    ${annualLeak.toLocaleString()}
                                </div>
                                <p className="text-xs text-slate-400 mt-1.5">
                                    Lost in blind attribution, churn delays, and suboptimal campaign scaling.
                                </p>
                            </div>

                            {/* Secondary Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/10 mb-6">
                                <div>
                                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mb-1">
                                        <Clock className="w-3 h-3 text-slate-400" />
                                        <span>Hours Reclaimed</span>
                                    </div>
                                    <div className="text-2xl font-bold font-mono text-slate-200">
                                        {hoursSavedPerMonth.toLocaleString()}<span className="text-xs font-normal text-slate-400">/mo</span>
                                    </div>
                                    <div className="text-[10px] text-slate-500 mt-0.5">Automated workflows</div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mb-1">
                                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                                        <span>90-Day Profit Lift</span>
                                    </div>
                                    <div className="text-2xl font-bold font-mono text-emerald-400">
                                        +${projected90DayLift.toLocaleString()}
                                    </div>
                                    <div className="text-[10px] text-slate-500 mt-0.5">Phase 1 deployment</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Block */}
                        <div className="space-y-3 pt-2">
                            <a
                                href={`/contact?audit_rev=${monthlyRevenue}&ad_spend=${monthlyAdSpend}&team=${teamSize}`}
                                className="w-full py-4 px-6 apple-btn-blue text-white rounded-2xl font-semibold text-center text-sm sm:text-base transition-all shadow-sm flex items-center justify-center gap-2 group"
                            >
                                <span>Claim Forensic Profit Audit</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <p className="text-center text-[11px] font-mono text-slate-400">
                                100% Free · No Pitch · Confidential NDA Included
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
