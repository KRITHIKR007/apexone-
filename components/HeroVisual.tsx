'use client';

import { useEffect, useState } from 'react';

export default function HeroVisual() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative pb-32 pt-10 overflow-hidden bg-white">
            <div className="container relative z-10 px-4 mx-auto">
                <div className={`relative transition-all duration-1000 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

                    {/* Main Dashboard Container - 3D Tilt Effect */}
                    <div className="relative mx-auto max-w-6xl">
                        <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full transform scale-75" />

                        <div className="relative bg-slate-900 rounded-2xl shadow-2xl shadow-indigo-500/20 border border-slate-800 overflow-hidden backdrop-blur-sm p-2 md:p-4 perspective-[2000px] group">

                            {/* Top Bar of Fake UI */}
                            <div className="flex items-center gap-4 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 text-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-md text-[10px] text-slate-400 font-mono">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        apex_core_v2.system.active
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="grid grid-cols-12 gap-4 p-4 md:p-8 h-[500px] md:h-[600px] overflow-hidden bg-slate-950/50">

                                {/* Left Sidebar */}
                                <div className="col-span-12 md:col-span-3 lg:col-span-2 space-y-4 hidden md:block">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="h-10 bg-slate-800/50 rounded-lg w-full animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                                    ))}
                                    <div className="mt-8 p-4 bg-indigo-900/10 border border-indigo-500/20 rounded-xl">
                                        <div className="h-2 w-full bg-indigo-500/20 rounded-full mb-2">
                                            <div className="h-full w-2/3 bg-indigo-500 rounded-full" />
                                        </div>
                                        <div className="text-xs text-indigo-400 font-mono">System Load: 67%</div>
                                    </div>
                                </div>

                                {/* Center / Main Display */}
                                <div className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col gap-6">

                                    {/* Stats Row */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { label: "Active Revenue", val: "$2.4M", up: true },
                                            { label: "Prediction Accuracy", val: "99.8%", up: true },
                                            { label: "Churn Risk", val: "0.2%", up: false },
                                            { label: "Auto-Actions", val: "842", up: true },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-indigo-500/30 transition-colors">
                                                <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider">{stat.label}</div>
                                                <div className="flex items-end justify-between">
                                                    <div className="text-xl md:text-2xl font-bold text-slate-100">{stat.val}</div>
                                                    <div className={`text-xs ${stat.up ? 'text-emerald-500' : 'text-indigo-400'}`}>
                                                        {stat.up ? '↑' : '↓'}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Graph Area */}
                                    <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden group-hover:border-indigo-500/20 transition-all">
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                                        {/* Animated Lines */}
                                        <svg className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="none">
                                            <path d="M0,300 Q200,250 400,100 T800,50" fill="none" stroke="url(#gradient1)" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                            <defs>
                                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                                                    <stop offset="50%" stopColor="#6366f1" />
                                                    <stop offset="100%" stopColor="#8b5cf6" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        {/* Floating Nodes */}
                                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)] animate-ping" />
                                        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)] animate-ping" style={{ animationDelay: '1s' }} />
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* Reflection / Ground */}
                        <div className="absolute -bottom-20 left-4 right-4 h-20 bg-gradient-to-t from-white via-white to-transparent z-20" />
                    </div>

                </div>
            </div>
        </section>
    );
}
