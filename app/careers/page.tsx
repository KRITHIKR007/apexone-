'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

// Professional SVG Icons
const Icons = {
    Research: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    Metaverse: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
    ),
    Design: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 5 10" /><path d="m14 14 8 8" /></svg>
    ),
    Video: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" /><rect width="14" height="12" x="2" y="6" rx="2" /></svg>
    ),
    Code: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
    Growth: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="m17 5-5-3-5 3" /><path d="m17 19-5 3-5-3" /><path d="M2 12h20" /><path d="m5 7 3 5-3 5" /><path d="m19 7-3 5 3 5" /></svg>
    )
};

const jobs = [
    {
        id: 'ai-research',
        title: 'AI Research Engineer',
        level: 'L6 / Principal',
        department: 'Engineering',
        icon: 'Research',
        location: 'Bengaluru / Remote',
        salary: '₹35L - ₹60L + Equity',
        description: 'Lead the next generation of multi-modal reasoning. You will be building the frontier models that power our autonomous business operating systems.'
    },
    {
        id: 'meta-architect',
        title: 'Metaverse Architect',
        level: 'L5 / Senior',
        department: 'Creative Lab',
        icon: 'Metaverse',
        location: 'Global Remote',
        salary: 'Top Tier Compensation',
        description: 'Design immersive virtual commerce hubs. You aren\'t just building 3D models; you are building the future of digital high-fidelity interaction.'
    },
    {
        id: 'ar-vr-interact',
        title: 'AR/VR Interaction Designer',
        level: 'L4 / Senior',
        department: 'Creative Lab',
        icon: 'Design',
        location: 'Remote',
        salary: '$80k - $130k USD',
        description: 'Define the gestures and interfaces of the spatial age. Bridge the gap between physical reality and digital overlays.'
    },
    {
        id: 'lead-videographer',
        title: 'Lead Videographer',
        level: 'L4 / Senior',
        department: 'Creative Lab',
        icon: 'Video',
        location: 'Bengaluru (On-site)',
        salary: '₹12L - ₹24L / year',
        description: 'Scale our visual storytelling. Produce cinematic content that makes AI feel human and business feel like a blockbuster movie.'
    },
    {
        id: 'founding-engineers',
        title: 'Founding Engineering Lead',
        level: 'Founding Team',
        department: 'Engineering',
        icon: 'Code',
        location: 'Bengaluru (Hybrid)',
        salary: '₹25L - ₹45L + Equity',
        description: 'Join as a founding pillar of our technology stack. You will build the engine that automates multi-billion dollar enterprises.'
    }
];

export default function CareersPage() {
    const [filter, setFilter] = useState('All');
    const [hoveredJob, setHoveredJob] = useState<string | null>(null);

    const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.department === filter);

    return (
        <main className="bg-[#030303] min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
            <Navigation />

            {/* Cinematic Hero */}
            <section className="relative pt-64 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[160px] animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[140px] animate-pulse delay-700" />
                    {/* Subtle Mesh Gradient Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,0)_0%,rgba(3,3,3,1)_100%)]" />
                </div>

                <div className="container relative z-10 max-w-5xl text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
                            The Elite Network
                        </span>
                        <h1 className="text-7xl md:text-9xl font-medium tracking-tighter mb-8 leading-[0.8] text-white">
                            Build The <br />
                            <span className="text-white/20">Future.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed mb-16">
                            ApexOne Studios is looking for the top 1% of global talent to build
                            the AI operating system for the next generation of enterprise.
                        </p>
                    </motion.div>

                    <div className="flex flex-center justify-center flex-wrap gap-3">
                        {['All', 'Engineering', 'Creative Lab'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 border ${filter === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimalist Job List */}
            <section className="py-24">
                <div className="container max-w-4xl px-4">
                    <div className="flex flex-col gap-px bg-white/5 border border-white/5 overflow-hidden rounded-2xl">
                        {filteredJobs.map((job) => (
                            <motion.div
                                key={job.id}
                                onMouseEnter={() => setHoveredJob(job.id)}
                                onMouseLeave={() => setHoveredJob(null)}
                                className="group relative bg-[#050505] p-8 md:p-10 cursor-pointer transition-colors hover:bg-white/[0.02]"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/30 transition-all">
                                            {Icons[job.icon as keyof typeof Icons]()}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-xl font-medium tracking-tight text-white">{job.title}</h3>
                                                <span className="px-2 py-0.5 rounded-sm bg-indigo-500/20 text-indigo-400 text-[9px] font-mono tracking-widest uppercase border border-indigo-500/30">
                                                    {job.level}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs font-mono text-white/30">
                                                <span>{job.department}</span>
                                                <span className="w-1 h-1 rounded-full bg-white/10" />
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-8">
                                        <div className="hidden md:block text-right">
                                            <div className="text-sm font-medium text-white/80">{job.salary}</div>
                                            <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Yearly Package</div>
                                        </div>
                                        <a
                                            href={`mailto:apexonestudio@gmail.com?subject=Application: ${job.title}`}
                                            className="px-6 py-3 rounded-full bg-white text-black text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-slate-200 transition-all text-center"
                                        >
                                            Apply
                                        </a>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {hoveredJob === job.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden mt-6"
                                        >
                                            <p className="text-sm text-white/40 leading-relaxed max-w-2xl border-t border-white/5 pt-6 font-light">
                                                {job.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Perks Header */}
            <section className="py-24 border-t border-white/5">
                <div className="container max-w-5xl px-4 text-center">
                    <h2 className="text-sm font-mono tracking-[0.4em] text-white/20 uppercase mb-4">The Standard</h2>
                    <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-20 text-white">How we empower the elite.</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            { title: 'Remote Autonomy', desc: 'Work from anywhere. We care about output, not hours.', icon: '🌍' },
                            { title: 'Top-Tier Gear', desc: 'MacBook Pro M4 Max, Pro Display XDR, whatever you need.', icon: '💻' },
                            { title: 'Unlimited Fuel', desc: 'Unlimited PTO and $5k annual learning stipend.', icon: '⚡' },
                        ].map((perk, i) => (
                            <div key={i} className="p-8 bg-[#080808] border border-white/5 rounded-2xl group hover:border-white/10 transition-all">
                                <span className="text-3xl mb-6 block group-hover:scale-110 transition-transform">{perk.icon}</span>
                                <h4 className="text-lg font-medium mb-3 text-white">{perk.title}</h4>
                                <p className="text-sm text-white/30 leading-relaxed font-light">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Epic Logo Section (The part you loved) */}
            <section className="py-48 bg-[#000000] relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container max-w-7xl px-4 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="relative w-48 h-48 md:w-64 md:h-64 mb-16"
                    >
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-[80px] animate-pulse" />
                        <Image
                            src="/logo.png"
                            alt="ApexOne Logo"
                            fill
                            className="object-contain grayscale brightness-[5] opacity-20 transform hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>

                    <div className="text-center space-y-8 max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white leading-[1.1]">
                            Not a Company. <br />
                            <span className="text-white/30 italic">A Strategic Support System.</span>
                        </h2>
                        <p className="text-lg text-white/40 font-light leading-relaxed">
                            We don't do politics. We don't do busy work. We solve first-principle problems that move the needle for global enterprise. If you are a high-performer, you belong here.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
