'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function EnterpriseOSPage() {
    return (
        <main className="bg-slate-50 min-h-screen text-slate-900 selection:bg-slate-900 selection:text-white">
            <Navigation />

            <div className="pt-32 pb-12 container">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-slate-700 shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Unified Infrastructure
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                    Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">OS</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                    The complete operating system for modern business.
                    We replace disconnected tools and manual workflows with a single, intelligent nervous system.
                </p>

                {/* Stats Strip */}
                <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-200 pt-8">
                    <div>
                        <div className="text-4xl font-bold text-slate-900 mb-1">360°</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Visibility</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-slate-900 mb-1">-40%</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">OpEx Reduction</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-slate-900 mb-1">24/7</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Autonomous Uptime</div>
                    </div>
                </div>
            </div>

            {/* Network Topology Visualization */}
            <section className="pb-20 pt-10">
                <div className="container">
                    <div className="bg-slate-900 rounded-2xl shadow-2xl p-8 md:p-16 relative overflow-hidden group">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">

                            {/* Inputs */}
                            <div className="space-y-8">
                                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl backdrop-blur-sm flex items-center gap-4">
                                    <div className="w-10 h-10 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">FN</div>
                                    <div>
                                        <div className="text-white font-bold">Finance</div>
                                        <div className="text-xs text-slate-400">Stripe, Xero, Banks</div>
                                    </div>
                                    <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500"></div>
                                </div>
                                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl backdrop-blur-sm flex items-center gap-4">
                                    <div className="w-10 h-10 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">MK</div>
                                    <div>
                                        <div className="text-white font-bold">Marketing</div>
                                        <div className="text-xs text-slate-400">Meta, Google, CRM</div>
                                    </div>
                                    <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500"></div>
                                </div>
                                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl backdrop-blur-sm flex items-center gap-4">
                                    <div className="w-10 h-10 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">OP</div>
                                    <div>
                                        <div className="text-white font-bold">Operations</div>
                                        <div className="text-xs text-slate-400">Logistics, Inventory</div>
                                    </div>
                                    <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500"></div>
                                </div>
                            </div>

                            {/* Central Node */}
                            <div className="flex justify-center">
                                <div className="w-64 h-64 rounded-full border border-slate-700 bg-slate-900 relative flex items-center justify-center shadow-[0_0_60px_rgba(79,70,229,0.3)]">
                                    <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-ping opacity-20"></div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center text-slate-900 font-bold text-2xl shadow-lg">
                                            OS
                                        </div>
                                        <div className="text-white font-bold text-xl tracking-tight">Enterprise OS</div>
                                        <div className="text-indigo-400 text-xs font-mono mt-2">PROCESSING...</div>
                                    </div>
                                </div>
                            </div>

                            {/* Outputs */}
                            <div className="space-y-6">
                                <div className="border-l-2 border-indigo-500 pl-6 py-2">
                                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Strategic Output</div>
                                    <div className="text-white font-medium">Real-time P&L Dashboard</div>
                                </div>
                                <div className="border-l-2 border-emerald-500 pl-6 py-2">
                                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Growth Output</div>
                                    <div className="text-white font-medium">Automated Ad Scaling</div>
                                </div>
                                <div className="border-l-2 border-amber-500 pl-6 py-2">
                                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Risk Output</div>
                                    <div className="text-white font-medium">Compliance & Security Alerts</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Timeline (Gantt) */}
            <section className="py-20 bg-white">
                <div className="container max-w-6xl">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Implementation Cycle</h2>
                            <p className="text-slate-500">From Audit to Autonomy in 12 Weeks.</p>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-sm font-bold text-slate-900">Total Duration</div>
                            <div className="text-4xl font-mono font-bold text-indigo-600">90 Days</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { phase: "Phase 1: Deep Audit", weeks: "W1-W2", color: "bg-slate-800", width: "w-[16%]" },
                            { phase: "Phase 2: Data Integration", weeks: "W3-W6", color: "bg-indigo-600", width: "w-[33%]" },
                            { phase: "Phase 3: Agent Deployment", weeks: "W7-W10", color: "bg-purple-600", width: "w-[33%]" },
                            { phase: "Phase 4: Handover", weeks: "W11-W12", color: "bg-emerald-500", width: "w-[16%]" }
                        ].map((item, i) => (
                            <div key={i} className="relative h-16 bg-slate-50 rounded-lg border border-slate-100 overflow-hidden flex items-center px-6">
                                <div className={`absolute top-0 bottom-0 left-0 ${item.color} ${item.width} opacity-10`}></div>
                                <div className={`absolute top-4 bottom-4 left-0 h-1.5 rounded-full ${item.color} translate-x-6 w-[calc(100%-3rem)] max-w-[${item.width}]`}>
                                    {/* Fake Gantt Bar */}
                                </div>
                                <div className="relative w-full flex justify-between items-center pl-4">
                                    <div className="flex items-center gap-4">
                                        <span className="font-mono text-xs font-bold text-slate-400 w-12">{item.weeks}</span>
                                        <span className="font-bold text-slate-900">{item.phase}</span>
                                    </div>
                                    <button className="text-xs font-bold text-slate-400 hover:text-slate-900">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Efficiency Matrix */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Operational Efficiency Protocol</h2>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-100 text-xs font-bold uppercase tracking-widest text-slate-500">
                                <tr>
                                    <th className="p-6">Task / Workflow</th>
                                    <th className="p-6">Human Manual Time</th>
                                    <th className="p-6 text-indigo-700 bg-indigo-50/50">Enterprise OS Agents</th>
                                    <th className="p-6 text-right text-emerald-700">Efficiency Gain</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { task: "Lead Qualification", manual: "15 mins / lead", agent: "< 10 sec / lead", gain: "9000% Faster" },
                                    { task: "Monthly P&L Report", manual: "4-5 Days", agent: "Real-Time", gain: "Instant" },
                                    { task: "Customer Support (L1)", manual: "24h Avg Response", agent: "< 2 min Response", gain: "100% Coverage" },
                                    { task: "Competitor Analysis", manual: "Weekly Review", agent: "Continuous Monitor", gain: "Always On" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-6 font-medium text-slate-900">{row.task}</td>
                                        <td className="p-6 text-slate-500">{row.manual}</td>
                                        <td className="p-6 font-bold text-indigo-700 bg-indigo-50/30">{row.agent}</td>
                                        <td className="p-6 text-right font-bold text-emerald-600 font-mono">{row.gain}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
