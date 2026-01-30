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
        image: '/careers/principal_ai_scientist.png',
        location: 'Bengaluru / Remote',
        salary: 'Top Tier / Role-Based',
        manager: 'Executive Council / CTO Office',
        responsibilities: [
            "Architectural leadership for multi-modal reasoning engines.",
            "Synthesizing frontier research into enterprise-grade protocols.",
            "Directing the neural roadmap for 2026 expansion."
        ],
        description: 'Lead multi-modal architectural breakthroughs. Researching the next frontier of autonomous reasoning agents.'
    },
    {
        id: 'ai-eng-1',
        title: 'Neural Systems Engineer',
        level: 'L6 / Senior',
        department: 'AI Research',
        image: '/careers/neural_systems.png',
        location: 'Global Remote',
        salary: 'Top Tier / Role-Based',
        manager: 'Lead AI Scientist',
        responsibilities: [
            "Scaling distributed training infrastructure for billion-parameter models.",
            "Implementing low-latency inference protocols for real-time telemetry.",
            "Optimizing neural weights for specialized edge deployment."
        ],
        description: 'Optimize training pipelines for billion-parameter models. Infrastructure design for neural scale.'
    },
    {
        id: 'ai-pm-1',
        title: 'AI Product Manager',
        level: 'L5 / Senior',
        department: 'AI Research',
        location: 'Hybrid / Remote',
        image: '/careers/ai_product_manager.png',
        salary: 'Competitive Range',
        manager: 'Head of Intelligence',
        responsibilities: [
            "Defining the intelligence roadmap for enterprise automation.",
            "Bridging the gap between neural research and user-facing dashboards.",
            "Managing lifecycle pivots for autonomous agent deployment."
        ],
        description: 'Bridge the gap between frontier research and enterprise deployment. Define the core intelligence roadmap.'
    },
    {
        id: 'ar-vr-architect',
        title: 'Spatial Systems Lead',
        level: 'L6 / Senior',
        department: 'AR/VR',
        image: '/careers/spatial_systems.png',
        location: 'Bengaluru / Hybrid',
        salary: 'Top Tier / Role-Based',
        manager: 'Spatial Design Lead',
        responsibilities: [
            "Engineering the core OS for spatial computing interfaces.",
            "Defining persistency protocols for multi-user AR environments.",
            "Researching neural-input integration for zero-latency interactions."
        ],
        description: 'Develop the OS for spatial computing interfaces. Bridging neural inputs with high-fidelity digital reality.'
    },
    {
        id: 'metaverse-designer',
        title: 'Cinematic Metaverse Artist',
        level: 'L5 / Senior',
        department: 'AR/VR',
        image: '/careers/metaverse_artist.png',
        location: 'Remote',
        salary: 'Top Tier / Role-Based',
        manager: 'World Architect',
        responsibilities: [
            "Crafting hyper-realistic environments in UE5 for global commerce.",
            "Directing the visual narrative of spatial storytelling.",
            "Implementing high-fidelity procedural world-generation logic."
        ],
        description: 'Craft high-fidelity immersive worlds. Experience in UE5 and spatial storytelling for global commerce.'
    },
    {
        id: 'ar-ux-1',
        title: 'AR Interaction Designer',
        level: 'L4 / Senior',
        department: 'AR/VR',
        image: '/careers/ar_interaction.png',
        location: 'Remote',
        salary: 'Competitive Range',
        manager: 'Spatial UX Lead',
        responsibilities: [
            "Defining gesture libraries for the next generation of computing.",
            "Prototyping fluid spatial overlays for enterprise data hubs.",
            "Researching ethical interaction patterns in AR/VR contexts."
        ],
        description: 'Define the gestures and interfaces of the spatial age. Engineering the next phase of human-computer interaction.'
    },
    {
        id: 'founding-engineers',
        title: 'Founding Infrastructure Lead',
        level: 'Founding Team',
        department: 'Engineering',
        image: '/careers/founding_infra.png',
        location: 'Bengaluru (Hybrid)',
        salary: 'Strategic Equity + Range',
        manager: 'CEO / CTO Office',
        responsibilities: [
            "Building the core engine that automates multi-billion dollar firms.",
            "Defining the engineering culture for the ApexOne ecosystem.",
            "Directing architectural scaling from zero to global dominance."
        ],
        description: 'Build the engine that automates multi-billion dollar enterprises. Direct engineering dominance.'
    }
];

const internships = [
    // AI & ML
    {
        id: 1,
        title: 'AI Research Intern',
        dept: 'AI & ML',
        loc: 'Remote',
        type: 'Technical',
        duration: '6 Months',
        manager: 'Lead AI Scientist',
        responsibilities: [
            "Researching and implementing state-of-the-art transformer architectures.",
            "Benchmarking multi-modal models for enterprise logic.",
            "Assisting in the development of autonomous reasoning protocols."
        ]
    },
    {
        id: 2,
        title: 'Neural Network / ML Intern',
        dept: 'AI & ML',
        loc: 'Bengaluru',
        type: 'Technical',
        duration: '6 Months',
        manager: 'Neural Systems Architect',
        responsibilities: [
            "Optimizing neural scale training pipelines.",
            "Fine-tuning billion-parameter models for specific domain niches.",
            "Implementing advanced quantization techniques for edge deployment."
        ]
    },
    {
        id: 3,
        title: 'Data Science Intern',
        dept: 'AI & ML',
        loc: 'Hybrid',
        type: 'Technical',
        duration: '4 Months',
        manager: 'Head of Data Intelligence',
        responsibilities: [
            "Building predictive revenue models using historical enterprise data.",
            "Synthesizing complex datasets into actionable growth insights.",
            "Automating ETL pipelines for real-time telemetry."
        ]
    },
    {
        id: 4,
        title: 'Automation & AI Tools Intern',
        dept: 'AI & ML',
        loc: 'Remote',
        type: 'Technical',
        duration: '3 Months',
        manager: 'Automation Lead',
        responsibilities: [
            "Developing custom AI agents for internal workflow optimization.",
            "Integrating LLM-based tools into the existing CRM infrastructure.",
            "Mapping business processes for autonomous execution."
        ]
    },

    // AR/VR & Metaverse
    {
        id: 5,
        title: 'Spatial UX Intern',
        dept: 'AR/VR',
        loc: 'Hybrid',
        type: 'Design',
        duration: '6 Months',
        manager: 'Spatial Design Lead',
        responsibilities: [
            "Designing 3D interfaces for spatial computing environments.",
            "Researching intuitive gesture-based interaction patterns.",
            "Prototyping AR overlays for complex industrial workflows."
        ]
    },
    {
        id: 6,
        title: 'Metaverse World Intern',
        dept: 'AR/VR',
        loc: 'Remote',
        type: 'Creative',
        duration: '6 Months',
        manager: 'World Architect',
        responsibilities: [
            "Building high-fidelity environments in Unreal Engine 5.",
            "Implementing spatial audio experiences for virtual commerce hubs.",
            "Optimizing 3D assets for real-time multiplayer interaction."
        ]
    },
    {
        id: 7,
        title: 'AR Interface Intern',
        dept: 'AR/VR',
        loc: 'Remote',
        type: 'Technical',
        duration: '4 Months',
        manager: 'Core Systems Engineer',
        responsibilities: [
            "Developing real-time tracking algorithms for AR devices.",
            "Integrating cloud-spatial anchors for persistent digital objects.",
            "Refining hand-tracking latency for high-precision interactions."
        ]
    },
    {
        id: 8,
        title: '3D Content Intern',
        dept: 'AR/VR',
        loc: 'Bengaluru',
        type: 'Creative',
        duration: '3 Months',
        manager: 'Senior Artist',
        responsibilities: [
            "Modeling and texturing premium assets for virtual showrooms.",
            "Developing procedural shaders for hyper-realistic materials.",
            "Implementing physics-based animations for spatial assets."
        ]
    },

    // Engineering
    {
        id: 9,
        title: 'Frontend Systems Intern',
        dept: 'Engineering',
        loc: 'Remote',
        type: 'Technical',
        duration: '4 Months',
        manager: 'Frontend Principal',
        responsibilities: [
            "Building high-performance dashboards using Next.js and React 19.",
            "Implementing complex Framer Motion animations for data density.",
            "Ensuring pixel-perfect responsive execution across all viewports."
        ]
    },
    {
        id: 10,
        title: 'Backend Scale Intern',
        dept: 'Engineering',
        loc: 'Remote',
        type: 'Technical',
        duration: '6 Months',
        manager: 'Infrastructure Architect',
        responsibilities: [
            "Optimizing Postgres query performance for high-concurrency loops.",
            "Designing scalable API microservices to handle global traffic.",
            "Implementing robust security protocols and authentication layers."
        ]
    },
    {
        id: 11,
        title: 'Full Stack Node Intern',
        dept: 'Engineering',
        loc: 'Hybrid',
        type: 'Technical',
        duration: '4 Months',
        manager: 'Full Stack Lead',
        responsibilities: [
            "Developing end-to-end features for the Command Center dashboard.",
            "Bridging AI services with user-facing frontend interfaces.",
            "Maintaining 99.9% uptime for critical business operations."
        ]
    },
    {
        id: 12,
        title: 'Cloud Infrastructure Intern',
        dept: 'Engineering',
        loc: 'Remote',
        type: 'Technical',
        duration: '6 Months',
        manager: 'DevOps Lead',
        responsibilities: [
            "Managing Vercel and AWS deployments for global scale.",
            "Automating CI/CD pipelines for instant protocol rollout.",
            "Monitoring real-time telemetry for system-wide health."
        ]
    },

    // Creative Lab
    {
        id: 13,
        title: 'Motion Graphics Intern',
        dept: 'Creative Lab',
        loc: 'Remote',
        type: 'Creative',
        duration: '4 Months',
        manager: 'Creative Director',
        responsibilities: [
            "Crafting premium orbital animations for the ApexOne brand.",
            "Designing dynamic UI transitions for the digital ecosystem.",
            "Creating high-impact social assets for expansion protocols."
        ]
    },
    {
        id: 14,
        title: 'Visual Identity / Graphic Design Intern',
        dept: 'Creative Lab',
        loc: 'Remote',
        type: 'Creative',
        duration: '3 Months',
        manager: 'Brand Architect',
        responsibilities: [
            "Evolving the ApexOne design language for the 2026 era.",
            "Curating visual tokens for product interfaces and marketing.",
            "Defining typography and color standards for global dominance."
        ]
    },
    {
        id: 15,
        title: 'Cinematic / Editorial Video Intern',
        dept: 'Creative Lab',
        loc: 'Bengaluru',
        type: 'Creative',
        duration: '6 Months',
        manager: 'Executive Producer',
        responsibilities: [
            "Editing high-fidelity brand films and cinematic shorts.",
            "Sound design for immersive metaverse experiences.",
            "Directing visual storytelling for enterprise-level audits."
        ]
    }
];

export default function CareersPage() {
    const [filter, setFilter] = useState('All');
    const [showAllInterns, setShowAllInterns] = useState(false);
    const [selectedIntern, setSelectedIntern] = useState<number | null>(null);
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

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
                        <Image src="/careers/sovereign_infra.png" alt="Operational Center" fill className="object-cover" />
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
                            <p className="text-xl text-slate-500 mt-10 font-light max-w-xl">Curating elite creative and engineering nodes for the 2026 expansion protocol. Select a role for full technical specs.</p>
                        </div>
                        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                            {['All', 'AI Research', 'AR/VR', 'Engineering'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-10 py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${filter === cat ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-900'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <AnimatePresence mode="popLayout">
                            {filteredJobs.map((job, i) => (
                                <motion.div
                                    key={job.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                                    className={`flex flex-col bg-white border border-slate-200 rounded-[3rem] overflow-hidden group cursor-pointer transition-all duration-700 shadow-sm hover:shadow-2xl ${selectedJob === job.id ? 'lg:col-span-2 border-indigo-400 ring-1 ring-indigo-100' : 'hover:border-indigo-200'}`}
                                >
                                    <motion.div
                                        layout
                                        className={`overflow-hidden relative transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${selectedJob === job.id ? 'aspect-[21/9] rounded-b-[2rem]' : 'aspect-[16/10]'}`}
                                    >
                                        <Image src={job.image} alt={job.title} fill className="object-cover" />
                                        <div className="absolute top-8 left-8">
                                            <span className="px-5 py-2 bg-white/95 rounded-xl text-[9px] font-black text-slate-950 uppercase tracking-widest shadow-sm">
                                                {job.level}
                                            </span>
                                        </div>
                                    </motion.div>

                                    <div className={`p-10 md:p-12 flex-1 flex flex-col items-stretch transition-all duration-500`}>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.4em]">{job.department}</div>
                                                <motion.div animate={{ rotate: selectedJob === job.id ? 180 : 0 }} className="w-2 h-2 rounded-full bg-slate-300" />
                                            </div>
                                            <h3 className={`font-bold tracking-tight text-slate-950 leading-none transition-all duration-500 ${selectedJob === job.id ? 'text-4xl md:text-5xl mb-12' : 'text-4xl mb-8'}`}>{job.title}</h3>

                                            <AnimatePresence>
                                                {selectedJob === job.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="grid md:grid-cols-2 gap-12 py-8 border-t border-slate-100">
                                                            <div className="space-y-6">
                                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Expansion Objectives</span>
                                                                <ul className="space-y-4">
                                                                    {job.responsibilities.map((res, idx) => (
                                                                        <li key={idx} className="flex gap-4 text-sm text-slate-600 leading-relaxed antialiased">
                                                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                                                            {res}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="space-y-8">
                                                                <div>
                                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Operational Data</span>
                                                                    <div className="grid grid-cols-2 gap-6">
                                                                        <div>
                                                                            <div className="text-[9px] font-bold text-indigo-600 uppercase mb-1">Status</div>
                                                                            <div className="text-lg font-bold text-slate-950">Active Protocol</div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="text-[9px] font-bold text-indigo-600 uppercase mb-1">Rep. Manager</div>
                                                                            <div className="text-lg font-bold text-slate-950">{job.manager}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pt-8 flex flex-col gap-4">
                                                                    <a href={`mailto:apexonestudio@gmail.com?subject=Application: ${job.title}`} className="inline-block text-center px-12 py-5 bg-slate-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl">Initialize Admission</a>
                                                                    <p className="text-[9px] text-center text-slate-400 italic">Financial package discussed during Phase II audit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {!selectedJob && (
                                                <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">{job.description}</p>
                                            )}
                                        </div>

                                        {!selectedJob && (
                                            <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                                                <div className="text-base font-medium text-slate-950">{job.salary}</div>
                                                <span className="text-indigo-600 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">Details →</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Culture Manifesto - New Section */}
            <section className="py-40 bg-white border-y border-slate-50 overflow-hidden">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.6em]">Cultural Architecture</span>
                                <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-8 leading-tight">
                                    The Silent <br />
                                    <span className="text-slate-300">Engine.</span>
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <p className="text-xl text-slate-500 font-light leading-relaxed antialiased">
                                    At ApexOne, we don't follow industry trends; we engineer the foundations they sit on. Our culture is built on <span className="text-slate-950 font-medium italic">Digital Sovereignty</span> and radical autonomy.
                                </p>

                                <div className="grid gap-6">
                                    {[
                                        { title: "Radical Secrecy", desc: "All core protocols are protected by multi-layer NDAs. We operate in stealth because true power is silent." },
                                        { title: "Direct Dealing", desc: "We don't 'manage' clients. We audit their reality and install solutions. Zero fluff. Zero friction." },
                                        { title: "Neural Flow", desc: "Work is not measured by hours, but by the complexity of the problems solved. We operate in deep flow states." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-100 transition-colors">
                                            <h4 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 relative z-10"
                            >
                                <Image src="/careers/culture_manifesto.png" alt="Cultural Hub" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Protocol: Classified</span>
                                    </div>
                                    <p className="text-xs text-white/70 leading-relaxed font-light">
                                        Admittance to the ApexOne inner circle requires a rigid verification process. All engineers and artists are bound by the Global Secrecy Protocol (GSP-2026).
                                    </p>
                                </div>
                            </motion.div>

                            {/* Decorative Background Element */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Internship Guild - Massive Scale */}
            <section className="py-40 bg-white border-y border-slate-50">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.6em]">FUTURE TALENT</span>
                        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mt-8 leading-none">Internship Guild.</h2>
                        <p className="text-xl text-slate-500 mt-10 font-light max-w-xl mx-auto">Join the 2026 Cohort across 15 specialized domains. Select a protocol to view details.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <AnimatePresence mode="popLayout">
                            {visibleInterns.map((intern, i) => (
                                <motion.div
                                    key={intern.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onClick={() => setSelectedIntern(selectedIntern === intern.id ? null : intern.id)}
                                    className={`p-10 rounded-[3.5rem] bg-slate-50 border border-slate-100 cursor-pointer group hover:shadow-2xl transition-all duration-500 ${selectedIntern === intern.id ? 'bg-white border-indigo-200 ring-1 ring-indigo-100 lg:col-span-2' : 'hover:bg-white'}`}
                                >
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{intern.dept}</div>
                                        <motion.div
                                            animate={{ rotate: selectedIntern === intern.id ? 180 : 0 }}
                                            className="w-1.5 h-1.5 rounded-full bg-slate-300"
                                        />
                                    </div>

                                    <h4 className={`font-bold text-slate-950 mb-6 leading-none transition-all duration-500 ${selectedIntern === intern.id ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{intern.title}</h4>

                                    <AnimatePresence>
                                        {selectedIntern === intern.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="grid md:grid-cols-2 gap-12 py-8 border-t border-slate-100">
                                                    <div className="space-y-6">
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Responsibilities</span>
                                                        <ul className="space-y-4">
                                                            {intern.responsibilities.map((res, idx) => (
                                                                <li key={idx} className="flex gap-4 text-sm text-slate-600 leading-relaxed antialiased">
                                                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                                                    {res}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="space-y-8">
                                                        <div>
                                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Metadata</span>
                                                            <div className="grid grid-cols-2 gap-6">
                                                                <div>
                                                                    <div className="text-[9px] font-bold text-indigo-600 uppercase mb-1">Duration</div>
                                                                    <div className="text-lg font-bold text-slate-950">{intern.duration}</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-[9px] font-bold text-indigo-600 uppercase mb-1">Rep. Manager</div>
                                                                    <div className="text-lg font-bold text-slate-950">{intern.manager}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-8">
                                                            <a href={`mailto:apexonestudio@gmail.com?subject=Internship Application: ${intern.title}`} className="inline-block px-12 py-4 bg-slate-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl">Deploy Application</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {!selectedIntern && (
                                        <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-12">
                                            <span>{intern.loc}</span>
                                            <div className="flex-1 h-px bg-slate-200" />
                                            <span className="text-indigo-600 group-hover:translate-x-2 transition-transform">Details →</span>
                                        </div>
                                    )}
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
