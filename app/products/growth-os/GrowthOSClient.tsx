'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function GrowthOSClient() {
    return (
        <main className="bg-[#030303] min-h-screen text-white selection:bg-white selection:text-black">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative border-b border-indigo-500/20 overflow-hidden">
                {/* Vibrant Background Ambient Glows */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute top-[20%] left-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />
                
                <div className="container max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-3 py-1 mb-6 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md">
                                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-indigo-300">Growth OS 3.0</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] relative z-10">
                                Revenue <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">Engineering.</span>
                            </h1>

                            <p className="text-xl text-indigo-100/70 max-w-2xl font-light leading-relaxed mb-12">
                                A deterministic system for predictable revenue growth. Every dollar spent is tracked,
                                every conversion optimized, every customer journey engineered for maximum LTV.
                            </p>

                            <div className="flex gap-4 relative z-10">
                                <Link href="/contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold tracking-wide transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:scale-105 inline-block">
                                    Request Demo
                                </Link>
                                <button className="px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/5 hover:border-white/40 transition-all rounded-full">
                                    View Case Studies
                                </button>
                            </div>
                        </div>

                        {/* Custom Graphic UI Component */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center [perspective:1000px]">
                            {/* Central Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-fuchsia-600/20 rounded-full blur-[80px] animate-pulse" />
                            
                            {/* Main Floating Graph Board - Glassy & Deep */}
                            <div className="relative w-[85%] h-[75%] bg-[#030303]/60 border border-white/10 rounded-3xl backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)] p-8 flex flex-col justify-between overflow-hidden animate-[float_6s_ease-in-out_infinite] [transform:rotateY(-10deg)_rotateX(5deg)] z-10">
                                {/* Depth Background Grids */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
                                
                                {/* Header */}
                                <div className="flex justify-between items-start relative z-20">
                                    <div>
                                        <div className="text-[10px] font-mono text-indigo-400 mb-2 tracking-[0.2em] font-bold">LIVE REVENUE VELOCITY</div>
                                        <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter drop-shadow-lg">$248,500<span className="text-indigo-400/60 text-2xl font-normal">/hr</span></div>
                                    </div>
                                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs font-bold text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                                        +34.2% ROAS
                                    </div>
                                </div>
                                
                                {/* Deep Graph lines */}
                                <div className="flex-1 w-full mt-10 relative z-20">
                                    {/* Sub background line (previous month comparison) */}
                                    <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <path d="M0,45 Q15,48 25,40 T50,35 T75,30 T100,25" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4 4" />
                                    </svg>
                                    
                                    {/* Primary Glow Line */}
                                    <svg className="absolute w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <path d="M0,40 Q15,45 25,25 T50,20 T75,10 T100,5" fill="none" stroke="url(#gradientMain)" strokeWidth="4" className="drop-shadow-[0_10px_15px_rgba(168,85,247,0.5)]" />
                                        <defs>
                                            <linearGradient id="gradientMain" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#818cf8" />
                                                <stop offset="50%" stopColor="#c084fc" />
                                                <stop offset="100%" stopColor="#e879f9" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Card 1 (In front, clear glass) */}
                            <div className="absolute top-[15%] -right-[5%] bg-white/5 border border-white/20 backdrop-blur-2xl p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-[float_5s_ease-in-out_infinite_reverse] [transform:translateZ(50px)] z-30">
                                <div className="text-[10px] text-white/70 font-mono mb-3 tracking-widest font-bold">BUDGET SCALING</div>
                                <div className="flex gap-3 items-end h-16">
                                    <div className="w-3 h-8 bg-purple-500/40 rounded-t-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]"></div>
                                    <div className="w-3 h-12 bg-purple-400/60 rounded-t-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]"></div>
                                    <div className="w-3 h-16 bg-gradient-to-t from-fuchsia-600 to-fuchsia-300 rounded-t-sm shadow-[0_0_20px_#e879f9,inset_0_2px_4px_rgba(255,255,255,0.8)]"></div>
                                </div>
                            </div>

                            {/* Floating Card 2 (In front, clear glass) */}
                            <div className="absolute bottom-[15%] -left-[10%] bg-indigo-950/40 border border-indigo-400/30 backdrop-blur-2xl p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-[float_7s_ease-in-out_infinite] [transform:translateZ(80px)] z-30">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/50 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                                        <div className="w-3 h-3 rounded-full bg-indigo-300 animate-ping"></div>
                                        <div className="w-2 h-2 rounded-full bg-indigo-100 absolute"></div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-indigo-300/80 tracking-widest mb-1 font-bold">A/B TEST WINNER</div>
                                        <div className="text-base font-bold text-white drop-shadow-md">Variant C <span className="text-emerald-400">+18%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-32 border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="mb-16">
                        <h2 className="text-sm font-mono tracking-[0.2em] text-white/40 uppercase mb-4">Performance Benchmarks</h2>
                        <h3 className="text-4xl font-medium tracking-tight">Measured Outcomes</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[
                            { metric: "ROAS", value: "4.5x", delta: "+12% vs Industry" },
                            { metric: "CAC Reduction", value: "22%", delta: "Month over Month" },
                            { metric: "Conversion Rate", value: "3.8%", delta: "Top 1% Percentile" },
                            { metric: "LTV:CAC", value: "5:1", delta: "Sustainable Growth" }
                        ].map((stat) => (
                            <div key={stat.metric} className="bg-indigo-950/20 backdrop-blur-sm p-8 relative group overflow-hidden border border-indigo-500/20 hover:border-indigo-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="text-xs font-mono text-indigo-300 mb-4 uppercase tracking-widest relative z-10">{stat.metric}</div>
                                <div className="text-4xl font-bold text-white mb-2 relative z-10 drop-shadow-md">{stat.value}</div>
                                <div className="text-xs text-indigo-200/70 relative z-10">{stat.delta}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Problem: Traditional Marketing */}
            <section className="py-32 border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight mb-6">The Attribution Gap</h2>
                            <p className="text-lg text-white/50 leading-relaxed">
                                Most companies operate on intuition. They spend millions on ads without knowing which channels
                                drive revenue, which campaigns are profitable, or where customers drop off. Growth OS eliminates guesswork.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="group">
                                <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/30 transition-colors"></div>
                                <h3 className="text-lg font-medium mb-2">Broken Attribution</h3>
                                <p className="text-sm text-white/40">Multi-touch attribution is fragmented across platforms with no single source of truth.</p>
                            </div>
                            <div className="group">
                                <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/30 transition-colors"></div>
                                <h3 className="text-lg font-medium mb-2">Optimization Lag</h3>
                                <p className="text-sm text-white/40">Manual A/B testing takes weeks. Markets move in hours.</p>
                            </div>
                            <div className="group">
                                <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/30 transition-colors"></div>
                                <h3 className="text-lg font-medium mb-2">Revenue Opacity</h3>
                                <p className="text-sm text-white/40">CMOs cannot answer: "What is our true CAC by channel?"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Architecture */}
            <section className="py-32 bg-[#050505] border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="mb-20">
                        <h2 className="text-sm font-mono tracking-[0.2em] text-white/40 uppercase mb-4">System Architecture</h2>
                        <h3 className="text-4xl font-medium tracking-tight">Three-Layer Revenue Stack</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {/* Layer 1 */}
                        <div className="bg-indigo-950/20 backdrop-blur-sm p-12 hover:bg-indigo-900/30 transition-all relative group overflow-hidden border border-indigo-500/30 hover:border-indigo-400 hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/30 rounded-full blur-[80px] group-hover:bg-indigo-400/50 transition-all duration-700" />
                            <div className="absolute top-6 left-6 text-xs font-bold font-mono text-indigo-300">01 / ACQUIRE</div>
                            <div className="mt-8 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-400/50 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 relative z-10 text-white drop-shadow-md">Acquisition Engine</h4>
                            <p className="text-sm text-indigo-100/80 leading-relaxed relative z-10">
                                Unified API layer ingests data from Meta, Google, LinkedIn. Real-time bidding optimization across all platforms simultaneously.
                            </p>
                        </div>

                        {/* Layer 2 */}
                        <div className="bg-purple-950/20 backdrop-blur-sm p-12 hover:bg-purple-900/30 transition-all relative group overflow-hidden border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/30 rounded-full blur-[80px] group-hover:bg-purple-400/50 transition-all duration-700" />
                            <div className="absolute top-6 left-6 text-xs font-bold font-mono text-purple-300">02 / CONVERT</div>
                            <div className="mt-8 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-400/50 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 relative z-10 text-white drop-shadow-md">Conversion Intelligence</h4>
                            <p className="text-sm text-purple-100/80 leading-relaxed relative z-10">
                                Continuous A/B testing on landing pages, CTAs, and checkout flows. Statistical significance reached in days, not months.
                            </p>
                        </div>

                        {/* Layer 3 */}
                        <div className="bg-blue-950/20 backdrop-blur-sm p-12 hover:bg-blue-900/30 transition-all relative group overflow-hidden border border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/30 rounded-full blur-[80px] group-hover:bg-blue-400/50 transition-all duration-700" />
                            <div className="absolute top-6 left-6 text-xs font-bold font-mono text-blue-300">03 / RETAIN</div>
                            <div className="mt-8 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-400/50 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 relative z-10 text-white drop-shadow-md">Retention Automation</h4>
                            <p className="text-sm text-blue-100/80 leading-relaxed relative z-10">
                                Behavioral triggers for email, SMS, and in-app messaging. Churn prediction models identify at-risk customers 30 days in advance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-32 border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-medium tracking-tight mb-6">Core Capabilities</h2>
                            <p className="text-white/50 leading-relaxed">
                                Growth OS is a complete revenue operating system. Deploy modules independently or as an integrated stack.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border border-white/10 bg-[#080808] p-8">
                                <h3 className="text-lg font-medium text-white mb-2">Multi-Channel Attribution</h3>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">First-touch, Last-touch, Linear Models</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Cross-device User Stitching</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Revenue Attribution by Campaign</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border border-white/10 bg-[#080808] p-8">
                                <h3 className="text-lg font-medium text-white mb-2">Experimentation Platform</h3>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Multivariate Testing Engine</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Bayesian Statistical Analysis</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Auto-deploy Winning Variants</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border border-white/10 bg-[#080808] p-8">
                                <h3 className="text-lg font-medium text-white mb-2">Predictive Analytics</h3>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Customer Lifetime Value Forecasting</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Churn Risk Scoring</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Propensity-to-Buy Models</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border border-white/10 bg-[#080808] p-8">
                                <h3 className="text-lg font-medium text-white mb-2">Campaign Automation</h3>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Dynamic Budget Allocation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Audience Segmentation AI</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                                        <span className="text-sm text-white/60">Creative Performance Analysis</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Table */}
            <section className="py-32">
                <div className="container max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-medium tracking-tight mb-6">Efficiency Gains</h2>
                        <p className="text-white/50">Comparative analysis: Traditional marketing vs Growth OS automation.</p>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-cols-3 border-b border-white/20 pb-4 mb-4">
                            <div className="text-xs font-mono uppercase tracking-widest text-white/40">Process</div>
                            <div className="text-xs font-mono uppercase tracking-widest text-white/40">Manual Approach</div>
                            <div className="text-xs font-mono uppercase tracking-widest text-white/40">Growth OS</div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-3 items-center py-4 border-b border-white/5">
                                <div className="text-sm font-medium text-white">Campaign Attribution</div>
                                <div className="text-sm text-white/40">7-14 Days (Spreadsheets)</div>
                                <div className="text-sm text-white">Real-time (&lt;1s)</div>
                            </div>
                            <div className="grid grid-cols-3 items-center py-4 border-b border-white/5">
                                <div className="text-sm font-medium text-white">A/B Test Deployment</div>
                                <div className="text-sm text-white/40">2-3 Weeks</div>
                                <div className="text-sm text-white">24 Hours</div>
                            </div>
                            <div className="grid grid-cols-3 items-center py-4 border-b border-white/5">
                                <div className="text-sm font-medium text-white">Budget Reallocation</div>
                                <div className="text-sm text-white/40">Monthly Review Cycle</div>
                                <div className="text-sm text-white">Continuous (Hourly)</div>
                            </div>
                            <div className="grid grid-cols-3 items-center py-4 border-b border-white/5">
                                <div className="text-sm font-medium text-white">Churn Detection</div>
                                <div className="text-sm text-white/40">Post-cancellation</div>
                                <div className="text-sm text-white">30-Day Advance Warning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
