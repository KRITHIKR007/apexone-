'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const jobs = [
    {
        id: 'ai-research-1',
        title: 'Principal AI Scientist',
        level: 'L7 / Principal',
        department: 'AI Research',
        image: '/careers/ai-research.png',
        location: 'Bengaluru / Remote',
        salary: '₹50L - ₹85L',
        description: 'Lead multi-modal architectural breakthroughs. Researching the next frontier of autonomous reasoning agents.'
    },
    {
        id: 'ai-eng-1',
        title: 'Neural Systems Engineer',
        level: 'L6 / Senior',
        department: 'AI Research',
        image: '/careers/engineering.png',
        location: 'Global Remote',
        salary: '₹40L - ₹65L',
        description: 'Optimize training pipelines for billion-parameter models. Infrastructure design for neural scale.'
    },
    {
        id: 'ai-pm-1',
        title: 'AI Product Manager',
        level: 'L5 / Senior',
        department: 'AI Research',
        location: 'Hybrid / Remote',
        image: '/careers/ai-research.png',
        salary: '₹35L - ₹55L',
        description: 'Bridge the gap between frontier research and enterprise deployment. Define the core intelligence roadmap.'
    },
    {
        id: 'ar-vr-architect',
        title: 'Spatial Systems Lead',
        level: 'L6 / Senior',
        department: 'AR/VR',
        image: '/careers/ar-vr.png',
        location: 'Bengaluru / Hybrid',
        salary: '₹45L - ₹70L',
        description: 'Develop the OS for spatial computing interfaces. Bridging neural inputs with high-fidelity digital reality.'
    },
    {
        id: 'metaverse-designer',
        title: 'Cinematic Metaverse Artist',
        level: 'L5 / Senior',
        department: 'AR/VR',
        image: '/careers/metaverse.png',
        location: 'Remote',
        salary: 'Top Tier',
        description: 'Craft high-fidelity immersive worlds. Experience in UE5 and spatial storytelling for global commerce.'
    },
    {
        id: 'ar-ux-1',
        title: 'AR Interaction Designer',
        level: 'L4 / Senior',
        department: 'AR/VR',
        image: '/careers/ar-vr.png',
        location: 'Remote',
        salary: '₹24L - ₹42L',
        description: 'Define the gestures and interfaces of the spatial age. Engineering the next phase of human-computer interaction.'
    },
    {
        id: 'founding-engineers',
        title: 'Founding Infrastructure Lead',
        level: 'Founding Team',
        department: 'Engineering',
        image: '/careers/engineering.png',
        location: 'Bengaluru (Hybrid)',
        salary: '₹25L - ₹45L',
        description: 'Build the engine that automates multi-billion dollar enterprises. Direct engineering dominance.'
    }
];

const internships = [
    { id: 1, title: 'AI Research Intern', dept: 'AI Research', loc: 'Remote', type: 'Technical' },
    { id: 2, title: 'Neural Network Intern', dept: 'AI Research', loc: 'Bengaluru', type: 'Technical' },
    { id: 3, title: 'Spatial UX Intern', dept: 'AR/VR', loc: 'Remote', type: 'Design' },
    { id: 4, title: 'Metaverse World Intern', dept: 'AR/VR', loc: 'Remote', type: 'Creative' },
    { id: 5, title: 'AR Interface Intern', dept: 'AR/VR', loc: 'Hybrid', type: 'Technical' },
    { id: 6, title: '3D Content Intern', dept: 'AR/VR', loc: 'Remote', type: 'Creative' },
    { id: 7, title: 'Frontend Systems Intern', dept: 'Engineering', loc: 'Remote', type: 'Technical' },
    { id: 8, title: 'Backend Scale Intern', dept: 'Engineering', loc: 'Remote', type: 'Technical' },
    { id: 9, title: 'Full Stack Node Intern', dept: 'Engineering', loc: 'Hybrid', type: 'Technical' },
    { id: 10, title: 'Cloud Infrastructure Intern', dept: 'Engineering', loc: 'Remote', type: 'Technical' },
    { id: 11, title: 'Cinematic Design Intern', dept: 'Creative Lab', loc: 'Bengaluru', type: 'Creative' },
    { id: 12, title: 'Motion Graphics Intern', dept: 'Creative Lab', loc: 'Remote', type: 'Creative' },
    { id: 13, title: 'Visual Identity Intern', dept: 'Creative Lab', loc: 'Remote', type: 'Creative' },
    { id: 14, title: 'Graphic Design Intern', dept: 'Creative Lab', loc: 'Remote', type: 'Creative' },
    { id: 15, title: 'Editorial Video Intern', dept: 'Creative Lab', loc: 'Hybrid', type: 'Creative' }
];

export default function CareersPage() {
    const [filter, setFilter] = useState('All');
    const [showAllInterns, setShowAllInterns] = useState(false);

    const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.department.includes(filter));
    const visibleInterns = showAllInterns ? internships : internships.slice(0, 6);

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-indigo-100 overflow-x-hidden font-sans antialiased">
            <Navigation />

            {/* Redesigned Hero - Reduced Opticality, Premium Minimalism */}
            <section className="relative h-screen flex items-center pt-24 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        transition={{ duration: 3 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/careers-hero-new.png"
                            alt="ApexOne Ecosystem"
                            fill
                            className="object-cover grayscale brightness-125 contrast-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
                    </motion.div>
                </div>

                <div className="container relative z-10 max-w-7xl px-4 mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[2px] bg-slate-200" />
                                    <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-indigo-600">
                                        Protocol Expansion 2026
                                    </span>
                                </div>
                                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-slate-950">
                                    Engineering <br />
                                    <span className="text-slate-300">Dominance.</span>
                                </h1>
                                <p className="text-xl md:text-3xl text-slate-500 max-w-2xl font-light leading-snug antialiased">
                                    ApexOne is a strategic infrastructure hub. We are curating the world's most capable creative and technical nodes.
                                </p>
                                <div className="pt-8 flex flex-wrap gap-4">
                                    <a href="#open-roles" className="px-12 py-5 bg-slate-950 text-white rounded-full font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl">
                                        Open Protocols
                                    </a>
                                    <div className="flex items-center gap-6 px-8 border-l border-slate-200">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100" />)}
                                        </div>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Global Status: Active</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Subtle Geometric Detail */}
                <div className="absolute left-1/2 bottom-12 -translate-x-1/2 flex flex-col items-center gap-4">
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Deploy</span>
                    <div className="w-[1px] h-12 bg-slate-100" />
                </div>
            </section>

            {/* Sovereign Infrastructure Frame - One Frame View */}
            <section className="h-screen py-20 flex items-center bg-white border-y border-slate-50 relative overflow-hidden">
                <div className="container max-w-7xl px-4 mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-16">
                        <div>
                            <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.4em]">Infrastructure</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-6 leading-none">
                                Not a Company. <br />
                                <span className="text-slate-300 italic">A Support System.</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            {[
                                { title: "Autonomy", desc: "No middle management. No useless syncs.", ref: "01" },
                                { title: "Hardware", desc: "M4 Max ecosystem. Instant deployment.", ref: "02" },
                                { title: "Leverage", desc: "Proprietary AI to automate your debt.", ref: "03" },
                                { title: "Freedom", desc: "Digital sovereignty. Remote-first flow.", ref: "04" }
                            ].map((sys, i) => (
                                <div key={i} className="group relative">
                                    <span className="absolute -left-6 top-1 text-[8px] font-mono text-slate-300 group-hover:text-indigo-400 transition-colors uppercase">{sys.ref}</span>
                                    <h4 className="text-xl font-bold mb-3 text-slate-950">{sys.title}</h4>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed">{sys.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 hidden lg:block">
                        <Image src="/careers/engineering.png" alt="Operational Center" fill className="object-cover" />
                        <div className="absolute inset-x-8 bottom-8 p-10 bg-white/90 backdrop-blur-3xl border border-white rounded-[2.5rem] text-slate-900">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-600 font-mono">operational_telemetry</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                            <div className="space-y-4">
                                <div className="h-px w-full bg-slate-200" />
                                <div className="flex justify-between text-[10px] font-mono font-bold">
                                    <span className="opacity-40 uppercase tracking-widest">Efficiency Status</span>
                                    <span className="text-indigo-600">Optimal Range</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Job Protocols */}
            <section id="open-roles" className="py-32 bg-slate-50">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 leading-none">Open Protocols.</h2>
                            <p className="text-xl text-slate-500 mt-10 font-light max-w-xl">Curating elite creative and engineering nodes for the 2026 expansion protocol.</p>
                        </div>
                        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                            {['All', 'AI Research', 'AR/VR', 'Creative'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat === 'Creative' ? 'Creative Lab' : cat)}
                                    className={`px-10 py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${filter === (cat === 'Creative' ? 'Creative Lab' : cat) ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-900'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredJobs.map((job, i) => (
                            <motion.div key={job.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col bg-white border border-slate-200 rounded-[3rem] overflow-hidden group hover:border-indigo-400 transition-all duration-1000 shadow-sm hover:shadow-2xl">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <Image src={job.image} alt={job.title} fill className="object-cover" />
                                    <div className="absolute top-8 left-8"><span className="px-5 py-2 bg-white/95 rounded-xl text-[9px] font-black text-slate-950 uppercase tracking-widest shadow-sm">{job.level}</span></div>
                                </div>
                                <div className="p-12 flex-1 flex flex-col items-stretch">
                                    <div className="flex-1">
                                        <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.4em] mb-6">{job.department}</div>
                                        <h3 className="text-4xl font-bold tracking-tight text-slate-950 mb-8 group-hover:text-indigo-600 transition-colors leading-none">{job.title}</h3>
                                        <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">{job.description}</p>
                                    </div>
                                    <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                                        <div className="text-base font-medium text-slate-950">{job.salary}</div>
                                        <a href={`mailto:apexonestudio@gmail.com?subject=Application: ${job.title}`} className="px-10 py-4 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all">Initialize</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internship Guild - Massive Scale */}
            <section className="py-40 bg-white border-y border-slate-50">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.6em]">FUTURE TALENT</span>
                        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mt-8 leading-none">Internship Guild.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <AnimatePresence>
                            {visibleInterns.map((intern, i) => (
                                <motion.div
                                    key={intern.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:border-indigo-100 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-center mb-10">
                                        <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{intern.dept}</div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    </div>
                                    <h4 className="text-3xl font-bold text-slate-950 mb-6 leading-none">{intern.title}</h4>
                                    <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-12">
                                        <span>{intern.loc}</span>
                                        <div className="flex-1 h-px bg-slate-200" />
                                        <a href="/contact" className="text-indigo-600 hover:text-slate-950 transition-colors">Apply →</a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {!showAllInterns && (
                        <div className="text-center">
                            <button
                                onClick={() => setShowAllInterns(true)}
                                className="px-20 py-8 border-2 border-slate-900 rounded-full text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-slate-950 hover:text-white transition-all shadow-2xl"
                            >
                                SHOW ALL PROTOCOLS (15+)
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Minimal Concluding Manifesto - One Frame View */}
            <section className="h-screen bg-white flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
                <div className="container relative z-10 max-w-7xl px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 0.05, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="relative mb-32 grayscale"
                    >
                        <div className="max-w-[400px] mx-auto">
                            <Image src="/logo.png" alt="ApexOne" width={800} height={800} className="w-full h-auto object-contain" />
                        </div>
                    </motion.div>

                    <div className="space-y-16">
                        <h2 className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.85] text-slate-950">
                            Sovereign <br />
                            <span className="text-slate-200">Expansion.</span>
                        </h2>
                        <p className="text-2xl text-slate-500 mt-12 max-w-4xl mx-auto font-light leading-relaxed antialiased">
                            Establishing the next nodes for universal intelligence.
                        </p>
                        <div className="pt-16">
                            <a href="/contact" className="px-20 py-8 bg-slate-950 text-white rounded-full font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-indigo-600 transition-all shadow-2xl">
                                INITIALIZE ADMISSION
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
