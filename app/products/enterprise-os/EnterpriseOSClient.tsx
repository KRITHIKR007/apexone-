'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function EnterpriseOSClient() {
    return (
        <main className="bg-[#030303] min-h-screen text-white selection:bg-white selection:text-black">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">Enterprise OS 2.0</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 leading-[0.9]">
                        The Enterprise <br />
                        <span className="text-white/40">Neural Network.</span>
                    </h1>

                    <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-12">
                        A unified intelligence layer that connects, analyzes, and orchestrates your entire organization.
                        Eliminate silos. Automate decisions. Scale without friction.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-slate-200 transition-colors inline-block">
                            Request Demo
                        </Link>
                        <button className="px-8 py-4 border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-colors">
                            Technical Specs
                        </button>
                    </div>
                </div>
            </section>

            {/* The Problem: Fragmentation (Minimalist) */}
            <section className="py-32 border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight mb-6">The Integration Deficit</h2>
                            <p className="text-lg text-white/50 leading-relaxed">
                                Modern enterprises operate on fractured infrastructure. Data lives in isolations—Salesforce, SAP, AWS, Stripe.
                                Context is lost in the gaps, creating latency that compounds into millions in lost operational efficiency.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="group">
                                <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/30 transition-colors"></div>
                                <h3 className="text-lg font-medium mb-2">Data Silos</h3>
                                <p className="text-sm text-white/40"> disconnected systems prevent a unified view of organizational health.</p>
                            </div>
                            <div className="group">
                                <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/30 transition-colors"></div>
                                <h3 className="text-lg font-medium mb-2">Decision Latency</h3>
                                <p className="text-sm text-white/40">Manual data aggregation delays critical strategic moves by days or weeks.</p>
                            </div>
                            <div className="group">
                                <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/30 transition-colors"></div>
                                <h3 className="text-lg font-medium mb-2">Operational Opacity</h3>
                                <p className="text-sm text-white/40">Leadership lacks real-time visibility into bottom-line drivers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture: Schematic View */}
            <section className="py-32 bg-[#050505] border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="mb-20">
                        <h2 className="text-sm font-mono tracking-[0.2em] text-white/40 uppercase mb-4">System Architecture</h2>
                        <h3 className="text-4xl font-medium tracking-tight">Three Layers of Intelligence</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {/* Layer 1 */}
                        <div className="bg-[#080808] p-12 hover:bg-[#0a0a0a] transition-colors relative group">
                            <div className="absolute top-6 left-6 text-xs font-mono text-white/20">01 / INGEST</div>
                            <div className="mt-8 mb-6">
                                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                            </div>
                            <h4 className="text-xl font-medium mb-4">Unified Data Plane</h4>
                            <p className="text-sm text-white/40 leading-relaxed">
                                Seamless API connectors ingest structured and unstructured data from 100+ enterprise tools (ERP, CRM, Banking) into a normalized single source of truth.
                            </p>
                        </div>

                        {/* Layer 2 */}
                        <div className="bg-[#080808] p-12 hover:bg-[#0a0a0a] transition-colors relative group">
                            <div className="absolute top-6 left-6 text-xs font-mono text-white/20">02 / REASON</div>
                            <div className="mt-8 mb-6">
                                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h4 className="text-xl font-medium mb-4">Cognitive Core</h4>
                            <p className="text-sm text-white/40 leading-relaxed">
                                Specialized LLM agents analyze correlations across datasets. Financial models are updated in real-time, detecting anomalies and opportunities instantly.
                            </p>
                        </div>

                        {/* Layer 3 */}
                        <div className="bg-[#080808] p-12 hover:bg-[#0a0a0a] transition-colors relative group">
                            <div className="absolute top-6 left-6 text-xs font-mono text-white/20">03 / EXECUTE</div>
                            <div className="mt-8 mb-6">
                                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h4 className="text-xl font-medium mb-4">Active Response</h4>
                            <p className="text-sm text-white/40 leading-relaxed">
                                Autonomous execution of low-risk decisions. Invoice processing, inventory reordering, and payroll reconciliation occur without human intervention.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules: High Density Lists */}
            <section className="py-32 border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-medium tracking-tight mb-6">Core Capabilities</h2>
                            <p className="text-white/50 leading-relaxed">
                                Enterprise OS is modular by design. Activate specific agents to handle departmental functions with superhuman precision.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Module Card */}
                            <div className="border border-white/10 bg-[#080808] p-8">
                                <h3 className="text-lg font-medium text-white mb-2">Financial Intelligence</h3>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Real-time P&L Construction</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Automated Expense Reconciliation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Predictive Cash Flow Modeling</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Module Card */}
                            <div className="border border-white/10 bg-[#080808] p-8">
                                <h3 className="text-lg font-medium text-white mb-2">Talent Operations</h3>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Global Payroll Automation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Benefit Administration</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Performance Analytics</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Module Card */}
                            <div className="border border-white/10 bg-[#080808] p-8">
                                <h3 className="text-lg font-medium text-white mb-2">Supply Chain</h3>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Demand Forecasting</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Automated Reordering</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Vendor Optimization</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Module Card */}
                            <div className="border border-white/10 bg-[#080808] p-8">
                                <h3 className="text-lg font-medium text-white mb-2">Growth & Sales</h3>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Lead Scoring & Routing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Pipeline Health Monitoring</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Churn Prediction</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics: Clean Table */}
            <section className="py-32">
                <div className="container max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-medium tracking-tight mb-6">Performance Outcomes</h2>
                        <p className="text-white/50">Measured impact across deployed enterprise environments.</p>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-cols-3 border-b border-white/20 pb-4 mb-4">
                            <div className="text-xs font-mono uppercase tracking-widest text-white/40">Metric</div>
                            <div className="text-xs font-mono uppercase tracking-widest text-white/40">Baseline (Human)</div>
                            <div className="text-xs font-mono uppercase tracking-widest text-white/40">Enterprise OS</div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-3 items-center py-4 border-b border-white/5">
                                <div className="text-sm font-medium text-white">Financial Reconciliation</div>
                                <div className="text-sm text-white/40">24-48 Hours</div>
                                <div className="text-sm text-white">Real-time (&lt;50ms)</div>
                            </div>
                            <div className="grid grid-cols-3 items-center py-4 border-b border-white/5">
                                <div className="text-sm font-medium text-white">Lead Qualification</div>
                                <div className="text-sm text-white/40">15 min / lead</div>
                                <div className="text-sm text-white">Instant / Concurrent</div>
                            </div>
                            <div className="grid grid-cols-3 items-center py-4 border-b border-white/5">
                                <div className="text-sm font-medium text-white">Support Triage</div>
                                <div className="text-sm text-white/40">4 hr avg response</div>
                                <div className="text-sm text-white">Immediate Resolution</div>
                            </div>
                            <div className="grid grid-cols-3 items-center py-4 border-b border-white/5">
                                <div className="text-sm font-medium text-white">Compliance Audit</div>
                                <div className="text-sm text-white/40">Quarterly Review</div>
                                <div className="text-sm text-white">Continuous Monitoring</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
