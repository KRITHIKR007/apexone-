'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
    SFArrowRight,
    SFChevronRight,
    SFCpu,
    SFBarChart,
    SFShieldCheck,
    SFTerminal,
    SFDocText,
    SFCheck,
    SFBolt,
    SFLayers
} from '@/components/SFIcons';

export default function ServicesClient() {
    return (
        <main className="bg-[#000000] text-white selection:bg-[#0071e3]/30 min-h-screen font-sans">
            <Navigation />

            {/* 1. Hero Section: Meet the A-list of enterprise intelligence */}
            <section className="pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 relative overflow-hidden text-center px-4">
                {/* Subtle Cinematic Center Ambient Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/12 via-cyan-500/8 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

                <div className="container max-w-5xl mx-auto relative z-10">
                    <span className="text-[12px] font-semibold text-[#2997ff] tracking-[0.2em] uppercase block mb-4">
                        APEXONE ECOSYSTEM
                    </span>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.03em] text-white leading-[1.04] mb-6 sm:mb-8">
                        Meet the A-list of<br />
                        <span className="text-[#86868b]">enterprise intelligence.</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed text-[#86868b] mb-10 sm:mb-12 font-light antialiased px-2">
                        Proprietary neural architectures, deterministic financial attribution, and air-gapped sovereign security. Engineered to scale net margin without payroll inflation.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
                        <Link
                            href="/contact"
                            prefetch={false}
                            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-normal tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 group"
                        >
                            <span>Scope Sovereign Deployment</span>
                            <SFArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <a
                            href="#bundle"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black text-[15px] font-normal tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                        >
                            Explore All-in-One Bundle
                        </a>
                    </div>

                    {/* Stage Preview: Floating Product Lineup */}
                    <div className="w-full max-w-4xl mx-auto relative">
                        <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto rounded-[28px] overflow-hidden border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#0a0a0a]">
                            <Image
                                src="/services/jarvis-core.jpg"
                                alt="ApexOne Sovereign Architecture"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 800px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left">
                                <div>
                                    <div className="text-xs font-mono text-[#00f5ff] uppercase tracking-widest">SOVEREIGN CORE</div>
                                    <div className="text-base sm:text-lg font-semibold text-white">Full-Stack Cognitive Infrastructure</div>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span>Air-Gapped Private VPC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Apple One Chiclet Banner Ribbon */}
            <section className="py-4 bg-[#0a0a0a] border-y border-white/[0.08]">
                <div className="container max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#2997ff]">
                            <SFLayers className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 font-normal">
                            Deploy Growth OS, Golden Goose, and CIIP with the <strong>Sovereign Enterprise Bundle</strong>.*
                        </p>
                    </div>
                    <a
                        href="#bundle"
                        className="text-xs sm:text-sm text-[#2997ff] hover:underline flex items-center gap-1 font-medium"
                    >
                        <span>Learn more</span>
                        <SFChevronRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </section>

            {/* 3. Service 1 (Apple TV+ Mirror) -> Growth OS */}
            <section id="growth-os" className="py-24 sm:py-36 bg-[#000000] border-b border-white/[0.08] relative overflow-hidden px-4">
                <div className="container max-w-6xl mx-auto">
                    {/* Header Lockup */}
                    <div className="max-w-3xl mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 text-[#00f5ff] mb-3">
                            <SFCpu className="w-5 h-5" />
                            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase">
                                GROWTH OS
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight mb-4">
                            Autonomous sales swarms on every revenue channel.
                        </h2>
                        <p className="text-base sm:text-xl text-[#86868b] font-light leading-relaxed">
                            Outbound prospecting, multi-touch lead qualification, and real-time ad spend arbitrage 24/7 with zero human latency.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-6">
                            <Link
                                href="/contact"
                                prefetch={false}
                                className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] font-medium tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20"
                            >
                                Scope Deployment
                            </Link>
                            <a
                                href="#growth-os"
                                className="text-sm font-medium text-[#2997ff] hover:underline flex items-center gap-1"
                            >
                                <span>Platform Telemetry</span>
                                <SFChevronRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Wide Cinematic Product Visual */}
                    <div className="relative rounded-[28px] overflow-hidden border border-white/[0.1] bg-[#0a0a0a] shadow-2xl group">
                        <div className="relative aspect-[16/9] w-full max-h-[580px]">
                            <Image
                                src="/services/growth-os.png"
                                alt="Growth OS Autonomous Sales Pipeline"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                                sizes="(max-width: 1200px) 100vw, 1100px"
                            />
                        </div>
                        <div className="p-6 sm:p-8 bg-[#0a0a0a] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-6 text-xs sm:text-sm text-[#86868b]">
                                <div><strong className="text-white font-medium">&lt; 50ms</strong> Execution Loop</div>
                                <div><strong className="text-white font-medium">24/7</strong> Active Swarm</div>
                                <div><strong className="text-white font-medium">0 FTE</strong> Headcount Added</div>
                            </div>
                            <span className="text-xs font-mono text-[#00f5ff]">AUTONOMOUS PIPELINE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Service 2 (Apple Music Mirror) -> Golden Goose */}
            <section id="golden-goose" className="py-24 sm:py-36 bg-[#050505] border-b border-white/[0.08] relative overflow-hidden px-4">
                <div className="container max-w-6xl mx-auto">
                    {/* Header Lockup */}
                    <div className="max-w-3xl mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 text-emerald-400 mb-3">
                            <SFBarChart className="w-5 h-5" />
                            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase">
                                GOLDEN GOOSE
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight mb-4">
                            All cash flow. Highest ledger fidelity. Zero ad waste.
                        </h2>
                        <p className="text-base sm:text-xl text-[#86868b] font-light leading-relaxed">
                            Cross-channel reconciliation across payment processors, CRMs, and ad networks cross-checked against actual bank deposits.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-6">
                            <Link
                                href="/contact"
                                prefetch={false}
                                className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] font-medium tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20"
                            >
                                Audit Revenue Leaks
                            </Link>
                            <a
                                href="#golden-goose"
                                className="text-sm font-medium text-[#2997ff] hover:underline flex items-center gap-1"
                            >
                                <span>Attribution Model</span>
                                <SFChevronRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Wide Cinematic Product Visual */}
                    <div className="relative rounded-[28px] overflow-hidden border border-white/[0.1] bg-[#0a0a0a] shadow-2xl group">
                        <div className="relative aspect-[16/9] w-full max-h-[580px]">
                            <Image
                                src="/services/golden-goose.png"
                                alt="Golden Goose Deterministic Attribution"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                                sizes="(max-width: 1200px) 100vw, 1100px"
                            />
                        </div>
                        <div className="p-6 sm:p-8 bg-[#0a0a0a] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-6 text-xs sm:text-sm text-[#86868b]">
                                <div><strong className="text-white font-medium">+18.4%</strong> Net Margin Lift</div>
                                <div><strong className="text-white font-medium">Sub-minute</strong> Decay Pruning</div>
                                <div><strong className="text-white font-medium">100%</strong> Bank Reconciled</div>
                            </div>
                            <span className="text-xs font-mono text-emerald-400">DETERMINISTIC ATTRIBUTION</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Service 3 (Apple Arcade Mirror) -> CIIP Enclave */}
            <section id="ciip" className="py-24 sm:py-36 bg-[#000000] border-b border-white/[0.08] relative overflow-hidden px-4">
                <div className="container max-w-6xl mx-auto">
                    {/* Header Lockup */}
                    <div className="max-w-3xl mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 text-[#2997ff] mb-3">
                            <SFShieldCheck className="w-5 h-5" />
                            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase">
                                CIIP ENCLAVE
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight mb-4">
                            The sovereign security perimeter. 100% client-owned IP.
                        </h2>
                        <p className="text-base sm:text-xl text-[#86868b] font-light leading-relaxed">
                            Customer prompts, proprietary data, and fine-tuned embeddings deployed in private VPCs with air-gapped KMS encryption keys.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-6">
                            <Link
                                href="/contact"
                                prefetch={false}
                                className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] font-medium tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20"
                            >
                                Inspect Enclave Security
                            </Link>
                            <a
                                href="#ciip"
                                className="text-sm font-medium text-[#2997ff] hover:underline flex items-center gap-1"
                            >
                                <span>Enclave Architecture</span>
                                <SFChevronRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Wide Cinematic Product Visual */}
                    <div className="relative rounded-[28px] overflow-hidden border border-white/[0.1] bg-[#0a0a0a] shadow-2xl group">
                        <div className="relative aspect-[16/9] w-full max-h-[580px]">
                            <Image
                                src="/services/ciip.png"
                                alt="CIIP Sovereign Cybersecurity Architecture"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                                sizes="(max-width: 1200px) 100vw, 1100px"
                            />
                        </div>
                        <div className="p-6 sm:p-8 bg-[#0a0a0a] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-6 text-xs sm:text-sm text-[#86868b]">
                                <div><strong className="text-white font-medium">Air-Gapped</strong> Dedicated VPC</div>
                                <div><strong className="text-white font-medium">Zero</strong> Data Exfiltration</div>
                                <div><strong className="text-white font-medium">Customer KMS</strong> Isolated Keys</div>
                            </div>
                            <span className="text-xs font-mono text-[#2997ff]">SOVEREIGN PRIVACY</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Service 4 (Apple Fitness+ Mirror) -> Enterprise OS */}
            <section id="enterprise-os" className="py-24 sm:py-36 bg-[#050505] border-b border-white/[0.08] relative overflow-hidden px-4">
                <div className="container max-w-6xl mx-auto">
                    {/* Header Lockup */}
                    <div className="max-w-3xl mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 text-purple-400 mb-3">
                            <SFTerminal className="w-5 h-5" />
                            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase">
                                ENTERPRISE OS
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight mb-4">
                            From Sales to ERP Reconciliation, unified cognitive leverage.
                        </h2>
                        <p className="text-base sm:text-xl text-[#86868b] font-light leading-relaxed">
                            Full-stack cognitive infrastructure connecting databases, payment gateways, and enterprise CRMs with mathematical reliability.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-6">
                            <Link
                                href="/contact"
                                prefetch={false}
                                className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] font-medium tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20"
                            >
                                Partner With Us
                            </Link>
                            <a
                                href="#enterprise-os"
                                className="text-sm font-medium text-[#2997ff] hover:underline flex items-center gap-1"
                            >
                                <span>Integration Matrix</span>
                                <SFChevronRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Wide Cinematic Product Visual */}
                    <div className="relative rounded-[28px] overflow-hidden border border-white/[0.1] bg-[#0a0a0a] shadow-2xl group">
                        <div className="relative aspect-[16/9] w-full max-h-[580px]">
                            <Image
                                src="/services/enterprise-os.png"
                                alt="Enterprise OS Infrastructure"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                                sizes="(max-width: 1200px) 100vw, 1100px"
                            />
                        </div>
                        <div className="p-6 sm:p-8 bg-[#0a0a0a] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-6 text-xs sm:text-sm text-[#86868b]">
                                <div><strong className="text-white font-medium">PostgreSQL / Snowflake</strong> Native Hooks</div>
                                <div><strong className="text-white font-medium">Stripe / Salesforce</strong> Integrated</div>
                                <div><strong className="text-white font-medium">Deterministic</strong> Reconciliation</div>
                            </div>
                            <span className="text-xs font-mono text-purple-400">ENTERPRISE STACK</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Service 5 (Apple Podcasts Mirror) -> Apex.EDU */}
            <section id="apex-edu" className="py-24 sm:py-36 bg-[#000000] border-b border-white/[0.08] relative overflow-hidden px-4">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-2 text-indigo-400 mb-3">
                                <SFDocText className="w-5 h-5" />
                                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase">
                                    APEX.EDU
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight mb-4">
                                Cognitive operating system for higher education.
                            </h2>
                            <p className="text-base sm:text-lg text-[#86868b] font-light leading-relaxed mb-6">
                                Millions of academic data points, automated syllabus alignment, and autonomous research synthesis for modern universities.
                            </p>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/contact"
                                    prefetch={false}
                                    className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] font-medium tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20"
                                >
                                    Scope Academic Enclave
                                </Link>
                                <a
                                    href="#bundle"
                                    className="text-sm font-medium text-[#2997ff] hover:underline flex items-center gap-1"
                                >
                                    <span>Explore Sovereign Bundle</span>
                                    <SFChevronRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 bg-[#0a0a0a] rounded-[24px] p-8 border border-white/[0.08]">
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="text-xs font-mono text-[#00f5ff]">CURRICULUM MAPPING</div>
                                    <div className="text-sm font-semibold text-white mt-1">Autonomous Syllabus Compliance</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="text-xs font-mono text-purple-400">STUDENT OUTCOMES</div>
                                    <div className="text-sm font-semibold text-white mt-1">Predictive Retention & Career Readiness</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="text-xs font-mono text-emerald-400">RESEARCH COMPLIANCE</div>
                                    <div className="text-sm font-semibold text-white mt-1">Air-Gapped Academic Data Isolation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Grand Finale Bundle (Apple One Router Mirror) */}
            <section id="bundle" className="py-28 sm:py-40 bg-[#050505] relative overflow-hidden px-4">
                <div className="container max-w-5xl mx-auto text-center">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2997ff] uppercase block mb-4">
                        SOVEREIGN BUNDLE (ALL-IN-ONE)
                    </span>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight mb-6">
                        All three platforms you need.<br />
                        <span className="text-[#86868b]">Now in one turnkey sovereign deployment. *</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#86868b] font-light leading-relaxed mb-12">
                        Bundle Growth OS, Golden Goose, and CIIP under a unified private VPC perimeter. Backed by our contractual 90-Day Net Margin Guarantee.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Link
                            href="/contact"
                            prefetch={false}
                            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-normal tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 group"
                        >
                            <span>Schedule 90-Day Implementation Audit</span>
                            <SFArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/about"
                            prefetch={false}
                            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black text-[15px] font-normal tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                        >
                            Learn About Sovereignty
                        </Link>
                    </div>

                    {/* Tier Comparison Matrix Teaser */}
                    <div className="bg-[#0a0a0a] rounded-[24px] border border-white/[0.08] p-8 text-left max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                                <div className="text-xs font-mono text-[#86868b] uppercase">Tier 01</div>
                                <h3 className="text-lg font-semibold text-white mt-1 mb-2">Single Platform</h3>
                                <p className="text-xs text-[#86868b] leading-relaxed mb-4">Growth OS or Golden Goose deployed on managed tenant architecture.</p>
                                <div className="text-xs font-mono text-[#00f5ff]">14–21 Days Turnkey</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/30">
                                <div className="text-xs font-mono text-[#2997ff] uppercase">Tier 02 (Recommended)</div>
                                <h3 className="text-lg font-semibold text-white mt-1 mb-2">Sovereign Bundle</h3>
                                <p className="text-xs text-slate-300 leading-relaxed mb-4">All 3 platforms unified inside dedicated private customer VPC with 90-Day Guarantee.¹</p>
                                <div className="text-xs font-mono text-emerald-400">30 Days Full Turnkey</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                                <div className="text-xs font-mono text-[#86868b] uppercase">Tier 03</div>
                                <h3 className="text-lg font-semibold text-white mt-1 mb-2">Enterprise Enclave</h3>
                                <p className="text-xs text-[#86868b] leading-relaxed mb-4">Air-gapped sovereign cloud with custom foundation weights and dedicated SLA.</p>
                                <div className="text-xs font-mono text-purple-400">Custom Engineering Sprint</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Footnotes / Sosumi Section (Mirror of Apple Legal Disclaimer) */}
            <section className="py-12 bg-[#000000] border-t border-white/[0.06] text-left px-4">
                <div className="container max-w-5xl mx-auto space-y-3 text-[11px] leading-relaxed text-[#6e6e73]">
                    <p>
                        * The ApexOne Sovereign Bundle includes Growth OS, Golden Goose, and CIIP Enclave deployed under a single master services agreement.
                    </p>
                    <p>
                        1. The 90-Day Net Margin Guarantee applies to qualified Sovereign Bundle deployments meeting baseline annual revenue thresholds. If agreed net margin lift targets are not achieved at the conclusion of 90 days, subsequent platform support is provided at zero engineering cost.
                    </p>
                    <p>
                        2. Private VPC tenant isolation is configured with dedicated customer KMS encryption keys. Zero customer data or telemetry is used for model training or public pool optimization.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
