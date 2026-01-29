'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

export default function DashboardPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 overflow-hidden font-sans">
            <Navigation />

            {/* Dashboard Sidebar + Main Grid */}
            <div className="pt-24 h-screen flex gap-px bg-white/5">

                {/* Sidebar Navigation */}
                <aside className="w-20 md:w-64 bg-[#050505] flex flex-col items-center md:items-stretch h-full border-r border-white/5">
                    <div className="p-8 hidden md:block">
                        <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-8">Navigation</div>
                        <nav className="space-y-6">
                            {['Overview', 'Intelligence', 'Revenue', 'Infrastructure', 'Security', 'Settings'].map((item) => (
                                <a key={item} href="#" className={`block text-sm font-medium tracking-wide transition-colors ${item === 'Overview' ? 'text-indigo-400' : 'text-white/40 hover:text-white'}`}>
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content Area */}
                <section className="flex-1 bg-[#030303] overflow-y-auto p-4 md:p-10">

                    {/* Header Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div>
                            <h1 className="text-3xl font-black tracking-tighter text-white">Command Center v4.0</h1>
                            <p className="text-sm font-mono text-white/20 uppercase tracking-widest mt-1">Operational Status: All Systems Optimal</p>
                        </div>

                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 rounded-full backdrop-blur-xl">
                            <span className="px-4 py-2 bg-indigo-500 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">Live Updates</span>
                            <div className="flex -space-x-3 pr-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030303] bg-slate-800 flex items-center justify-center text-[10px] font-bold">A{i}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {[
                            { label: 'Real-time ROI', value: '4.8x', delta: '+0.4%', icon: '🚀' },
                            { label: 'Active Agents', value: '1,240', delta: 'Nominal', icon: '🤖' },
                            { label: 'Network TVL', value: '$84.2M', delta: '+1.2%', icon: '💰' },
                            { label: 'Infrastructure', value: '99.99%', delta: '100% Up', icon: '⚡' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-[#080808] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.02] transition-colors relative group"
                            >
                                <div className="absolute top-6 right-8 text-2xl grayscale group-hover:grayscale-0 transition-all">{stat.icon}</div>
                                <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                                <div className="text-4xl font-black tracking-tight mb-2">{stat.value}</div>
                                <div className="text-xs font-mono text-indigo-400">{stat.delta}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mid Section - Charts & Recommendations */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Interactive Map/Visual Block */}
                        <div className="lg:col-span-8 bg-[#080808] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1)_0%,transparent_70%)]" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-12">
                                    <h2 className="text-2xl font-bold tracking-tight">Global Revenue Matrix</h2>
                                    <div className="flex gap-2">
                                        <button className="w-2 h-2 rounded-full bg-white/20" />
                                        <button className="w-2 h-2 rounded-full bg-white/40" />
                                        <button className="w-2 h-2 rounded-full bg-indigo-500" />
                                    </div>
                                </div>

                                {/* Simulated Chart/Grid */}
                                <div className="flex-1 grid grid-cols-12 items-end gap-2 md:gap-4 h-64">
                                    {[40, 70, 45, 90, 65, 80, 50, 85, 100, 75, 60, 95].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.05 }}
                                            className="bg-indigo-500/20 hover:bg-indigo-500 rounded-t-lg transition-colors group/bar relative"
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                                {Math.round(h * 12.4)}K
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-6 text-[10px] font-mono text-white/20 uppercase tracking-widest">
                                    <span>Jan</span>
                                    <span>Jun</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                        </div>

                        {/* AI Recommendations */}
                        <div className="lg:col-span-4 bg-[#080808] border border-white/5 rounded-[3rem] p-10">
                            <h2 className="text-xl font-bold tracking-tight mb-8">Strategic Buffer</h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Allocate $24K to Growth OS', score: 'P: 0.94', status: 'RECOMMENDED' },
                                    { title: 'ACN Node Expansion', score: 'P: 0.88', status: 'ACTIVE' },
                                    { title: 'Synthesize Data Lake v3', score: 'P: 0.82', status: 'IDLE' },
                                ].map((rec, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{rec.status}</span>
                                            <span className="text-[10px] font-mono text-white/30">{rec.score}</span>
                                        </div>
                                        <h4 className="text-sm font-medium text-white">{rec.title}</h4>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full py-4 mt-8 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">
                                Execute All Protocols
                            </button>
                        </div>
                    </div>

                    {/* Active Nodes Table */}
                    <div className="mt-10 bg-[#080808] border border-white/5 rounded-[3rem] overflow-hidden">
                        <div className="p-10 border-b border-white/5 flex justify-between items-center">
                            <h2 className="text-xl font-bold tracking-tight">Active Infrastructure Nodes</h2>
                            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Total Nodes: 432</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] border-b border-white/5">
                                    <tr>
                                        <th className="p-8">Node Identifier</th>
                                        <th className="p-8">Protocol</th>
                                        <th className="p-8">Latency</th>
                                        <th className="p-8">Performance</th>
                                        <th className="p-8">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[
                                        { id: 'GG-001-BOM', protocol: 'Golden Goose', latency: '12ms', perf: 'Optimal' },
                                        { id: 'CIIP-XA-78', protocol: 'Security Fabric', latency: '4ms', perf: 'Defensive' },
                                        { id: 'GOS-DELTA-9', protocol: 'Growth Engine', latency: '45ms', perf: 'Throttled' },
                                        { id: 'ACN-NODE-12', protocol: 'Human Asset', latency: 'N/A', perf: 'Executing' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                                            <td className="p-8 font-mono text-white/50">{row.id}</td>
                                            <td className="p-8 font-medium">{row.protocol}</td>
                                            <td className="p-8 text-indigo-400 font-mono">{row.latency}</td>
                                            <td className="p-8">
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${row.perf === 'Throttled' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                                                    {row.perf}
                                                </div>
                                            </td>
                                            <td className="p-8">
                                                <button className="text-[10px] font-bold text-white/30 hover:text-white uppercase tracking-widest">Detail →</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
}
