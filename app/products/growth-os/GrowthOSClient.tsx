'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function GrowthOSClient() {
    return (
        <main className="bg-[#030303] min-h-screen text-white selection:bg-white selection:text-black">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative border-b border-white/5">
                <div className="container max-w-6xl">
                    <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">Growth OS 3.0</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 leading-[0.9]">
                        Revenue <br />
                        <span className="text-white/40">Engineering.</span>
                    </h1>

                    <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-12">
                        A deterministic system for predictable revenue growth. Every dollar spent is tracked,
                        every conversion optimized, every customer journey engineered for maximum LTV.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-slate-200 transition-colors inline-block">
                            Request Demo
                        </Link>
                        <button className="px-8 py-4 border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-colors">
                            View Case Studies
                        </button>
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
                            <div key={stat.metric} className="bg-[#080808] p-8 hover:bg-[#0a0a0a] transition-colors">
                                <div className="text-xs font-mono text-white/40 mb-4 uppercase tracking-widest">{stat.metric}</div>
                                <div className="text-4xl font-medium text-white mb-2">{stat.value}</div>
                                <div className="text-xs text-white/60">{stat.delta}</div>
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
                        <div className="bg-[#080808] p-12 hover:bg-[#0a0a0a] transition-colors relative group">
                            <div className="absolute top-6 left-6 text-xs font-mono text-white/20">01 / ACQUIRE</div>
                            <div className="mt-8 mb-6">
                                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>
                            </div>
                            <h4 className="text-xl font-medium mb-4">Acquisition Engine</h4>
                            <p className="text-sm text-white/40 leading-relaxed">
                                Unified API layer ingests data from Meta, Google, LinkedIn. Real-time bidding optimization across all platforms simultaneously.
                            </p>
                        </div>

                        {/* Layer 2 */}
                        <div className="bg-[#080808] p-12 hover:bg-[#0a0a0a] transition-colors relative group">
                            <div className="absolute top-6 left-6 text-xs font-mono text-white/20">02 / CONVERT</div>
                            <div className="mt-8 mb-6">
                                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </div>
                            <h4 className="text-xl font-medium mb-4">Conversion Intelligence</h4>
                            <p className="text-sm text-white/40 leading-relaxed">
                                Continuous A/B testing on landing pages, CTAs, and checkout flows. Statistical significance reached in days, not months.
                            </p>
                        </div>

                        {/* Layer 3 */}
                        <div className="bg-[#080808] p-12 hover:bg-[#0a0a0a] transition-colors relative group">
                            <div className="absolute top-6 left-6 text-xs font-mono text-white/20">03 / RETAIN</div>
                            <div className="mt-8 mb-6">
                                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h4 className="text-xl font-medium mb-4">Retention Automation</h4>
                            <p className="text-sm text-white/40 leading-relaxed">
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
