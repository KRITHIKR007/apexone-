'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "ff0a4001-5e4f-4bf6-b126-b307852d233d";
        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                form.reset();
            } else {
                setSubmitStatus('error');
                console.error("Form submission error:", data.message);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error("Network error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const departments = [
        {
            name: "Founder & CEO",
            lead: "KRITHIK",
            email: "krithik@apexonestudio.com",
            desc: "Strategic partnerships & sovereign inquiries."
        },
        {
            name: "New Business",
            lead: "Expansion Team",
            email: "apexonestudio@gmail.com",
            desc: "Initialize Growth OS & Enterprise protocols."
        },
        {
            name: "Admission / Careers",
            lead: "Talent Guild",
            email: "apexonestudio@gmail.com",
            desc: "Submit admission protocols for decentralized nodes."
        }
    ];

    const quickProtocols = [
        { label: "Reach CEO", email: "krithik@apexonestudio.com", subject: "Strategic Inquiry" },
        { label: "New Project", email: "apexonestudio@gmail.com", subject: "New Project Initiation" },
        { label: "Join Guild", email: "apexonestudio@gmail.com", subject: "Admission Protocol 2026" }
    ];

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-indigo-100 overflow-x-hidden font-sans antialiased">
            <Navigation />

            {/* Cinematic Header */}
            <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden flex items-center min-h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
                </div>
                <div className="container relative z-10 max-w-7xl px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-16 h-[2px] bg-indigo-600" />
                            <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.8em]">Transmission Hub</span>
                        </div>
                        <h1 className="text-8xl md:text-[11rem] lg:text-[13rem] font-black tracking-tighter text-slate-950 leading-[0.75]">
                            Reach <br />
                            <span className="text-slate-200">The Core.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-slate-500 mt-16 max-w-3xl font-light leading-snug">
                            Initialize a new project, submit an admission protocol, or reach our strategic leadership directly via the sovereign hub.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Action Protocol Bar */}
            <section className="py-10 bg-slate-950 text-white overflow-hidden whitespace-nowrap border-y border-white/10">
                <div className="flex gap-20 animate-marquee-slow">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="flex gap-24 items-center">
                            {quickProtocols.map(proto => (
                                <a
                                    key={proto.label}
                                    href={`mailto:${proto.email}?subject=${encodeURIComponent(proto.subject)}`}
                                    className="flex items-center gap-6 hover:text-indigo-400 transition-all duration-300 group"
                                >
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                                    <span className="text-[11px] font-bold uppercase tracking-[0.5em]">{proto.label}</span>
                                    <span className="text-white/20 group-hover:translate-x-2 transition-transform">→</span>
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-40 relative">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">

                        {/* LEFT: Nodes & Logistics */}
                        <div className="lg:col-span-5 space-y-24">

                            {/* Detailed Departments */}
                            <div className="space-y-16">
                                <h3 className="text-sm font-bold uppercase tracking-[0.6em] text-slate-300">Strategic Nodes</h3>
                                <div className="space-y-14">
                                    {departments.map((dept, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group cursor-pointer border-l-2 border-slate-50 pl-10 hover:border-indigo-600 transition-colors"
                                        >
                                            <div className="flex justify-between items-end mb-6">
                                                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.4em]">{dept.name}</p>
                                                <span className="text-[9px] font-mono text-slate-300">PROTO_ID_0{i + 1}</span>
                                            </div>
                                            <h4 className="text-3xl font-bold text-slate-950 mb-3 group-hover:text-indigo-600 transition-colors leading-none">{dept.lead}</h4>
                                            <p className="text-base text-slate-500 font-light mb-6 leading-relaxed max-w-sm">{dept.desc}</p>
                                            <a href={`mailto:${dept.email}`} className="text-sm font-bold text-slate-950 hover:text-indigo-600 transition-colors underline-offset-8 decoration-slate-200 hover:decoration-indigo-600 transition-all">
                                                {dept.email}
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Global headquarters */}
                            <div className="pt-24 border-t border-slate-100 space-y-12">
                                <h3 className="text-sm font-bold uppercase tracking-[0.6em] text-slate-300">Logistics</h3>
                                <div className="p-14 bg-slate-50 rounded-[4rem] border border-slate-100 relative group overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-700">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-[80px]" />
                                    <p className="text-3xl font-bold text-slate-950 mb-6">Akshaya Nilaya</p>
                                    <p className="text-lg text-slate-500 font-light leading-loose mb-12">
                                        Ranganath Layout, <br />
                                        Bangalore South, <br />
                                        Karnataka, India
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Akshaya+Nilaya+Ranganath+Layout+Bangalore+South+Karnataka+India"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-6 px-12 py-5 bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-[0.4em] rounded-full hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all shadow-sm"
                                    >
                                        Initialize Map Protocol <span>↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: High-Fidelity Intake Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-16 md:p-24 rounded-[4rem] border border-slate-100 shadow-[0_80px_100px_rgba(0,0,0,0.03)] relative"
                            >
                                <h2 className="text-5xl font-black tracking-tighter mb-4 text-slate-950 leading-none">Transmission.</h2>
                                <p className="text-lg text-slate-500 font-light mb-20">Establish a secure connection with the core hub.</p>

                                <AnimatePresence mode="wait">
                                    {submitStatus === 'success' ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="mb-16 p-10 bg-emerald-50 border border-emerald-100 rounded-[3rem]"
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                                <p className="text-emerald-800 font-bold text-[10px] uppercase tracking-[0.4em]">Protocol Accepted</p>
                                            </div>
                                            <p className="text-emerald-600 font-light text-base leading-relaxed">Response node established successfully. Our strategic team will initialize a connection within 24 operational hours.</p>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>

                                <form onSubmit={handleSubmit} className="space-y-12">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] px-2">Identity</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-2 py-6 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all outline-none text-2xl font-medium text-slate-950 placeholder:text-slate-200"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] px-2">Network</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-2 py-6 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all outline-none text-2xl font-medium text-slate-950 placeholder:text-slate-200"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] px-2">Entity</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="w-full px-2 py-6 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all outline-none text-2xl font-medium text-slate-950 placeholder:text-slate-200"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] px-2">Protocol Type</label>
                                            <select
                                                name="subject"
                                                className="w-full px-2 py-6 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all outline-none text-2xl font-medium text-slate-950 appearance-none cursor-pointer"
                                            >
                                                <option>Growth OS Protocol</option>
                                                <option>Enterprise Expansion</option>
                                                <option>Spatial Admission</option>
                                                <option>Direct CEO Inquiry</option>
                                                <option>General Transmission</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] px-2">Message Payload</label>
                                        <textarea
                                            name="message"
                                            required
                                            className="w-full px-2 py-8 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all outline-none text-2xl font-light h-40 resize-none text-slate-950 placeholder:text-slate-200 leading-snug"
                                            placeholder="Define your objective..."
                                        />
                                    </div>

                                    <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-12">
                                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em] leading-relaxed">
                                            By initializing transmission, you agree to <br />
                                            ApexOne sovereign encryption protocols.
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-20 py-8 bg-slate-950 text-white font-bold rounded-full text-xs uppercase tracking-[0.5em] hover:bg-indigo-600 transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 active:scale-95 disabled:opacity-50"
                                        >
                                            {isSubmitting ? 'Transmitting...' : 'Initialize'}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* Visual Alignment Lines - Fixed & Centered */}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 hidden xl:flex flex-col items-center gap-12 pointer-events-none opacity-20">
                    <div className="h-64 w-px bg-gradient-to-t from-indigo-500 to-transparent" />
                    <span className="text-[9px] font-mono text-slate-900 uppercase tracking-[1.5em] rotate-90 whitespace-nowrap origin-center">Mission Critical Node</span>
                    <div className="h-64 w-px bg-gradient-to-b from-indigo-500 to-transparent" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
