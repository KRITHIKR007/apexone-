'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap, BarChart3, Building2 } from 'lucide-react';

const CASE_STUDIES = [
    {
        title: "Scaling Omnichannel D2C from Chaos to 312% YoY Net Profit",
        client: "D2C Health & Wellness Brand",
        vertical: "E-Commerce",
        region: "India / APAC",
        metrics: [
            { label: "Net Profit Growth", value: "+312%", icon: TrendingUp },
            { label: "CAC Compression", value: "-34%", icon: Zap },
            { label: "Agency Bloat Cut", value: "5 to 0", icon: CheckCircle2 }
        ],
        challenge: "Managing 5 disconnected agencies (creative, media buying, SEO, CRM, analytics) resulted in opaque attribution, duplicate ad spend, and zero true visibility into unit economics.",
        solution: "Deployed Golden Goose unified data pipeline across Shopify, Meta Ads, Google Ads, and ICICI/Razorpay payment webhooks. Activated automated budget arbitrageur swarms.",
        quote: "We were running 5 agencies with zero visibility into what was actually working. ApexOne unified everything into one dashboard and the profit jump was immediate — we saw it in the first 30 days.",
        author: "Rohan M.",
        role: "Founder & CEO"
    },
    {
        title: "Decimating B2B SaaS CAC by 40% with Autonomous Prospecting Agents",
        client: "Enterprise Workflow SaaS",
        vertical: "B2B SaaS",
        region: "North America / Global",
        metrics: [
            { label: "CAC Reduction", value: "-40%", icon: TrendingUp },
            { label: "Enterprise Pipeline", value: "$4.8M", icon: Zap },
            { label: "Human SDR Headcount Added", value: "0", icon: CheckCircle2 }
        ],
        challenge: "Scaling SDR teams caused payroll inflation with diminishing response rates due to generic copy and delayed follow-ups.",
        solution: "Installed Growth OS multi-agent outbound fabric. Agents conduct real-time deep RAG research on prospect 10-K filings, hiring updates, and tech stacks before generating hyper-personalized outreach.",
        quote: "The automated outbound agents changed everything. Our sales team now focuses on closing, not prospecting. Pipeline quality went up, cost went down.",
        author: "James T.",
        role: "Chief Revenue Officer"
    },
    {
        title: "6.4x ROAS Performance for Multi-Brand Media Agency",
        client: "Performance Agency Partner",
        vertical: "Agency / Media",
        region: "Southeast Asia",
        metrics: [
            { label: "Average ROAS", value: "6.4x", icon: TrendingUp },
            { label: "Decision Latency", value: "<1 min", icon: Zap },
            { label: "Ad Waste Slashed", value: "$180K/mo", icon: CheckCircle2 }
        ],
        challenge: "Human media buyers cannot monitor 120 ad accounts 24/7, leading to overnight ad spend bleeding on fatigued creatives and dying target groups.",
        solution: "Embedded Golden Goose sub-second bid-kill algorithms. Dying ad sets are halted automatically within 15 minutes of margin decay.",
        quote: "I stopped micromanaging ad accounts. The Golden Goose dashboard gives me a single number every morning — profit. That's all I needed.",
        author: "Priya S.",
        role: "Marketing Director"
    },
    {
        title: "90% Automated Ticket Resolution for Cross-Border Logistics",
        client: "Global Freight & Supply Chain Fleet",
        vertical: "Logistics",
        region: "India / Middle East",
        metrics: [
            { label: "Support Automated", value: "90%", icon: TrendingUp },
            { label: "Resolution Time", value: "2.4s", icon: Zap },
            { label: "Zero PII Leaks", value: "100%", icon: ShieldCheck }
        ],
        challenge: "Over 40,000 shipment inquiries per week overwhelmed human customer service centers, resulting in 18-hour response backlogs and lost shipping contracts.",
        solution: "Implemented CIIP-secured Tier-1 Autonomous Support Defense layer with deep ERP integration, allowing customers to query container customs status instantly with zero human touch.",
        quote: "The speed is terrifyingly fast. Our customer satisfaction ratings jumped from 3.2 to 4.9 in eight weeks.",
        author: "Vikram K.",
        role: "VP Operations"
    }
];

export default function CustomersClient() {
    const [selectedVertical, setSelectedVertical] = useState('All');

    const verticals = ['All', 'E-Commerce', 'B2B SaaS', 'Agency / Media', 'Logistics'];

    const filteredCases = selectedVertical === 'All'
        ? CASE_STUDIES
        : CASE_STUDIES.filter(c => c.vertical === selectedVertical);

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-indigo-500/30">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-36 sm:pt-48 pb-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl text-center">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                        Don't Trust Words. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600">
                            Inspect The P&L.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        See how enterprises, hyper-growth startups, and sovereign brands deploy the ApexOne AI Operating System to multiply net profit while holding headcount flat.
                    </p>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {verticals.map(v => (
                            <button
                                key={v}
                                onClick={() => setSelectedVertical(v)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                                    selectedVertical === v
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600'
                                }`}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies List */}
            <section className="py-20 sm:py-28 container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="space-y-16">
                    {filteredCases.map((cs, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-indigo-600" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{cs.client}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                                        {cs.vertical}
                                    </span>
                                    <span className="text-xs text-slate-400 font-mono">{cs.region}</span>
                                </div>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                {cs.title}
                            </h2>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                {cs.metrics.map((m, mIdx) => {
                                    const Icon = m.icon;
                                    return (
                                        <div key={mIdx} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                                            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono mb-1">
                                                <Icon className="w-3.5 h-3.5 text-indigo-600" />
                                                <span>{m.label}</span>
                                            </div>
                                            <div className="text-3xl font-black font-mono text-slate-900 tracking-tight">
                                                {m.value}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Challenge vs Solution */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm leading-relaxed">
                                <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6">
                                    <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500" />
                                        The Friction
                                    </h4>
                                    <p className="text-slate-700">{cs.challenge}</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6">
                                    <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                        The Apex Architecture
                                    </h4>
                                    <p className="text-slate-700">{cs.solution}</p>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="italic text-slate-700 text-sm sm:text-base max-w-3xl">
                                    "{cs.quote}"
                                    <div className="text-xs font-bold text-slate-900 not-italic mt-2">
                                        {cs.author} · <span className="text-slate-500 font-normal">{cs.role}</span>
                                    </div>
                                </div>
                                <a
                                    href="/contact"
                                    className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                                >
                                    <span>Replicate Results</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Final CTA */}
            <section className="py-20 bg-slate-950 text-white text-center relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                        Ready to Engineer Dominance?
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                        We begin every prospective partnership with an exhaustive revenue and attribution audit.
                        Zero risk. Zero pitch. Pure math.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-slate-950 font-bold text-base rounded-full hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
                    >
                        <span>Schedule Sovereign Architecture Audit</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
