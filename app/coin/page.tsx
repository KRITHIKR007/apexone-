'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function APXCoinPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 overflow-x-hidden">
            <Navigation />

            {/* Futuristic Hero */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] animate-pulse" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(100,100,255,0.05)_0%,transparent_70%)]" />
                </div>

                <div className="container relative z-10 max-w-7xl px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-16"
                    >
                        <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
                        <Image
                            src="/apx-coin.png"
                            alt="APX Coin"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(99,102,241,0.4)]"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.8]">
                            The APX <br />
                            <span className="text-white/20 italic">Liquidity Layer.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                            The native currency of the ApexOne ecosystem. Engineering decentralized
                            value for the global enterprise AI economy.
                        </p>

                        <div className="flex flex-center justify-center gap-4">
                            <button className="px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-slate-200 transition-all shadow-2xl shadow-white/10">
                                Buy APX
                            </button>
                            <button className="px-10 py-4 border border-white/10 rounded-full font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                                Whitepaper
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Metrics */}
            <section className="py-24 border-t border-white/5 bg-black/50 backdrop-blur-md">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
                        {[
                            { label: 'Market Cap', value: '$1.2B', delta: '+12.4%' },
                            { label: 'Total Supply', value: '1,000,000,000', delta: 'Capped' },
                            { label: 'Validators', value: '1,240', delta: 'Global' },
                            { label: 'Network TVL', value: '$840M', delta: 'Staked' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#050505] p-10 hover:bg-white/[0.02] transition-colors">
                                <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                                <div className="text-4xl font-black tracking-tight mb-2">{stat.value}</div>
                                <div className="text-xs font-mono text-indigo-400">{stat.delta}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tokenomics - High Tech Visualization */}
            <section className="py-32 bg-[#030303]">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-sm font-bold tracking-[0.4em] text-white/20 uppercase mb-4">Protocol Economy</h2>
                                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">Deterministic <br /> Tokenomics.</h3>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { title: 'Deflationary Burn', desc: 'A portion of all network transaction fees are permanently burned, reducing supply over time.', icon: '🔥' },
                                    { title: 'Ecosystem Utility', desc: 'Holders get priority access to ApexOne AI models and reduced processing latency.', icon: '⚡' },
                                    { title: 'Governance Rights', desc: 'The APX DAO governs the treasury and votes on protocol expansion and R&D.', icon: '🏛️' },
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{feature.icon}</div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                            <p className="text-slate-500 font-light leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 bg-[#080808] p-12">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <div className="flex flex-col h-full justify-between">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Live Flow Distribution</span>
                                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { label: 'Treasury & Reserve', value: 40, color: 'bg-indigo-500' },
                                        { label: 'Network Rewards', value: 30, color: 'bg-white' },
                                        { label: 'Ecosystem Growth', value: 20, color: 'bg-indigo-300' },
                                        { label: 'Current Liquidity', value: 10, color: 'bg-indigo-900' },
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-xs font-mono">
                                                <span className="text-white/40">{item.label}</span>
                                                <span>{item.value}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.value}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: i * 0.2 }}
                                                    className={`h-full ${item.color}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section className="py-48 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
                <div className="container max-w-5xl px-4 mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12">Secure. Autonomous. <br /> Built for Scale.</h2>
                    <p className="text-xl text-slate-500 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                        APX is more than a coin. It's the computational gas for the decentralized
                        enterprise. Zero downtime, military-grade encryption, and seamless integration.
                    </p>
                    <button className="px-12 py-5 bg-indigo-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-500/20">
                        Explore Ecosystem
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
