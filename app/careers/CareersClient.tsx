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

export default function CareersClient() {
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
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filtered Roles Grid */}
            <section id="open-roles" className="py-32 container mx-auto px-4">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-100 pb-8 gap-8">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 block mb-2 font-mono">01 / OPEN PROTOCOLS</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">Direct Admissions.</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'AI Research', 'AR/VR', 'Engineering'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${filter === cat ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredJobs.map((job) => (
                            <div key={job.id} className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:border-slate-200 transition-all duration-500">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">{job.department}</span>
                                        <span className="text-[10px] font-mono text-slate-400">{job.level}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed">{job.description}</p>
                                </div>
                                <div className="pt-8 mt-8 border-t border-slate-100 flex justify-between items-center">
                                    <span className="text-xs font-mono text-slate-400">{job.location}</span>
                                    <a href="/contact" className="text-xs font-bold uppercase tracking-widest text-slate-950 group-hover:text-indigo-600 transition-colors">Apply Node →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internships Node */}
            <section className="py-32 bg-slate-50/30 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-7xl space-y-16">
                    <div className="flex justify-between items-end border-b border-slate-200/60 pb-8">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 block mb-2 font-mono">02 / FELLOWSHIP PROGRAM</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">Neural Internships.</h2>
                        </div>
                        <button
                            onClick={() => setShowAllInterns(!showAllInterns)}
                            className="text-xs font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                            {showAllInterns ? 'Show Less ←' : 'View All 15 Roles →'}
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleInterns.map((intern) => (
                            <div key={intern.id} className="p-8 rounded-3xl bg-white border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                                        <span>{intern.dept}</span>
                                        <span>{intern.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-950">{intern.title}</h3>
                                    <p className="text-xs text-slate-500 font-light">{intern.type} track • Managed by {intern.manager}</p>
                                </div>
                                <div className="pt-6 mt-6 border-t border-slate-50 flex justify-between items-center">
                                    <span className="text-xs font-mono text-slate-400">{intern.loc}</span>
                                    <a href="/contact" className="text-xs font-bold text-slate-950 hover:text-indigo-600 transition-colors">Submit Application →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-40 bg-white text-center">
                <div className="container max-w-5xl mx-auto px-4">
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
