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
            <section className="pt-40 pb-32 relative border-b border-emerald-500/20 overflow-hidden">
                {/* Vibrant Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute top-[20%] left-0 w-[600px] h-[600px] bg-teal-600/30 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />
                
                <div className="container max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-3 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 backdrop-blur-md">
                                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-emerald-300">Enterprise OS 2.0</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] relative z-10">
                                The Enterprise <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Neural Network.</span>
                            </h1>

                            <p className="text-xl text-emerald-100/70 max-w-2xl font-light leading-relaxed mb-12">
                                A unified intelligence layer that connects, analyzes, and orchestrates your entire organization.
                                Eliminate silos. Automate decisions. Scale without friction.
                            </p>

                            <div className="flex gap-4 relative z-10">
                                <Link href="/contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold tracking-wide transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 inline-block">
                                    Request Demo
                                </Link>
                                <button className="px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/5 hover:border-white/40 transition-all rounded-full">
                                    Technical Specs
                                </button>
                            </div>
                        </div>

                        {/* Custom Graphic UI Component */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center [perspective:1000px]">
                            {/* Central Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-cyan-600/20 rounded-full blur-[80px] animate-pulse" />
                            
                            {/* Main Floating Dashboard - Glassy & Deep */}
                            <div className="relative w-[85%] h-[80%] bg-[#020504]/60 border border-white/10 rounded-3xl backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)] p-6 md:p-8 flex flex-col justify-between overflow-hidden animate-[float_6s_ease-in-out_infinite] [transform:rotateY(-8deg)_rotateX(6deg)] z-10">
                                {/* Depth Background Grids */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-70" />
                                
                                {/* Top Header */}
                                <div className="flex justify-between items-start relative z-20 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                                            <div className="w-3 h-3 bg-emerald-400 rounded-sm animate-pulse" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-mono text-emerald-400 tracking-[0.2em] font-bold">SYSTEM STATUS</div>
                                            <div className="text-xl font-bold text-white tracking-tight drop-shadow-md">Operational</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs font-mono font-bold text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                                        12ms LATENCY
                                    </div>
                                </div>
                                
                                {/* Deep Metrics Grid */}
                                <div className="grid grid-cols-2 gap-4 flex-1 relative z-20">
                                    {/* Metric 1 */}
                                    <div className="bg-[#020504]/80 border border-emerald-500/20 rounded-2xl p-4 flex flex-col justify-center shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]">
                                        <div className="text-[10px] font-mono text-emerald-500/80 tracking-widest font-bold mb-1">DATA PROCESSED</div>
                                        <div className="text-3xl font-bold text-white tracking-tighter drop-shadow-lg">4.2 <span className="text-emerald-400/60 text-lg font-normal">PB/mo</span></div>
                                    </div>
                                    {/* Metric 2 */}
                                    <div className="bg-[#020504]/80 border border-cyan-500/20 rounded-2xl p-4 flex flex-col justify-center shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]">
                                        <div className="text-[10px] font-mono text-cyan-500/80 tracking-widest font-bold mb-1">API REQUESTS</div>
                                        <div className="text-3xl font-bold text-white tracking-tighter drop-shadow-lg">1.8M <span className="text-cyan-400/60 text-lg font-normal">/sec</span></div>
                                    </div>
                                </div>

                                {/* Graph Bottom */}
                                <div className="h-24 w-full mt-6 relative z-20 border-t border-white/5 pt-4">
                                     <div className="text-[10px] font-mono text-emerald-400/60 tracking-widest mb-2">NEURAL LOAD</div>
                                     <div className="flex items-end gap-1 h-12 w-full">
                                         {[40, 60, 30, 80, 50, 90, 45, 75, 50, 100, 60, 85].map((h, i) => (
                                             <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: h > 80 ? '#22d3ee' : '#10b981', opacity: 0.6 + (h/200) }} />
                                         ))}
                                     </div>
                                </div>
                            </div>

                            {/* Floating Element 1 (Top Right) */}
                            <div className="absolute top-[10%] -right-[5%] bg-cyan-950/40 border border-cyan-400/30 backdrop-blur-2xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-[float_5s_ease-in-out_infinite_reverse] [transform:translateZ(60px)] z-30 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-cyan-400/50 flex flex-wrap items-center justify-center gap-[2px] p-2 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                </div>
                                <div className="text-[10px] text-white/80 font-mono tracking-widest font-bold whitespace-nowrap">4 AGENTS SYNCED</div>
                            </div>

                            {/* Floating Element 2 (Bottom Left) */}
                            <div className="absolute bottom-[10%] -left-[10%] bg-emerald-950/40 border border-emerald-400/30 backdrop-blur-2xl p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-[float_7s_ease-in-out_infinite] [transform:translateZ(80px)] z-30">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-10 bg-gradient-to-b from-emerald-400 to-emerald-700 rounded-full shadow-[0_0_15px_#10b981]" />
                                    <div>
                                        <div className="text-[10px] font-mono text-emerald-300/80 tracking-widest mb-1 font-bold">ANOMALY DETECTED</div>
                                        <div className="text-sm font-bold text-white drop-shadow-md whitespace-nowrap">Resolving autonomously...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div className="bg-emerald-950/20 backdrop-blur-sm p-12 hover:bg-emerald-900/30 transition-all relative group overflow-hidden border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/30 rounded-full blur-[80px] group-hover:bg-emerald-400/50 transition-all duration-700" />
                            <div className="absolute top-6 left-6 text-xs font-bold font-mono text-emerald-300">01 / INGEST</div>
                            <div className="mt-8 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-400/50 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 relative z-10 text-white drop-shadow-md">Unified Data Plane</h4>
                            <p className="text-sm text-emerald-100/80 leading-relaxed relative z-10">
                                Seamless API connectors ingest structured and unstructured data from 100+ enterprise tools (ERP, CRM, Banking) into a normalized single source of truth.
                            </p>
                        </div>

                        {/* Layer 2 */}
                        <div className="bg-teal-950/20 backdrop-blur-sm p-12 hover:bg-teal-900/30 transition-all relative group overflow-hidden border border-teal-500/30 hover:border-teal-400 hover:shadow-[0_0_50px_rgba(20,184,166,0.4)] hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/30 rounded-full blur-[80px] group-hover:bg-teal-400/50 transition-all duration-700" />
                            <div className="absolute top-6 left-6 text-xs font-bold font-mono text-teal-300">02 / REASON</div>
                            <div className="mt-8 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center border border-teal-400/50 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.5)]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 relative z-10 text-white drop-shadow-md">Cognitive Core</h4>
                            <p className="text-sm text-teal-100/80 leading-relaxed relative z-10">
                                Specialized LLM agents analyze correlations across datasets. Financial models are updated in real-time, detecting anomalies and opportunities instantly.
                            </p>
                        </div>

                        {/* Layer 3 */}
                        <div className="bg-cyan-950/20 backdrop-blur-sm p-12 hover:bg-cyan-900/30 transition-all relative group overflow-hidden border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/30 rounded-full blur-[80px] group-hover:bg-cyan-400/50 transition-all duration-700" />
                            <div className="absolute top-6 left-6 text-xs font-bold font-mono text-cyan-300">03 / EXECUTE</div>
                            <div className="mt-8 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 relative z-10 text-white drop-shadow-md">Active Response</h4>
                            <p className="text-sm text-cyan-100/80 leading-relaxed relative z-10">
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
