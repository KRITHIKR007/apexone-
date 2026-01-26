'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-black selection:text-white">
            <Navigation />

            {/* Editorial Hero (EXISTING) */}
            <section className="pt-48 pb-32 container relative">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase mb-8 text-slate-400">The Leadership</p>
                    <h1 className="text-7xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-12 text-slate-900">
                        WE ARE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600">APEX ONE.</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        A collective of strategists, engineers, and visionaries obsessed with the mathematical certainty of growth.
                    </p>
                </div>
            </section>

            {/* 1. THE APEX MANIFESTO (NEW) */}
            <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
                {/* Noise texture or abstract bg */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-extralight leading-tight mb-12 tracking-tight">
                            "We don't just build software. <br />
                            <span className="text-emerald-500 font-bold">We engineer clarity.</span>"
                        </h2>
                        <div className="h-px w-24 bg-white/20 mx-auto mb-12"></div>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
                            In an age of infinite noise and data overload, ApexOne stands as the signal. We believe that the future of enterprise belongs not to those who accumulate data, but to those who can transmute it into mathematical certainty.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. THE IMPACT ENGINE (NEW) */}
            <section className="py-20 border-b border-slate-100 bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                        {[
                            { label: "Revenue Optimized", value: "$500M+" },
                            { label: "Decision Latency", value: "0.01s" },
                            { label: "Data Sovereignty", value: "100%" },
                            { label: "Enterprise Nodes", value: "42" }
                        ].map((stat, i) => (
                            <div key={i} className="p-4 group">
                                <div className="text-4xl md:text-5xl font-mono font-bold text-slate-900 mb-2 tracking-tighter group-hover:text-emerald-600 transition-colors">{stat.value}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders - Editorial Layout (EXISTING) */}
            <section className="py-20 border-t border-slate-100 mt-20">
                <div className="container">

                    {/* CEO - Krithik */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                        <div className="relative group w-[80%] mx-auto">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-slate-100 shadow-2xl">
                                <Image src="/team/krithik.jpg" alt="Krithik R" width={600} height={800} className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white p-6 border border-slate-100 shadow-xl hidden lg:flex flex-col justify-center items-center text-center z-10">
                                <span className="text-4xl font-bold">01</span>
                                <span className="text-xs uppercase tracking-widest mt-2">Founder</span>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-6xl font-bold tracking-tight">Krithik R.</h2>
                            <p className="text-sm font-bold tracking-widest uppercase text-slate-400">Chief Executive Officer</p>
                            <div className="h-px w-20 bg-black"></div>
                            <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                                <p>
                                    "We are not here to compete. We are here to change the physics of the game."
                                </p>
                                <p className="text-lg text-slate-500">
                                    As the Architect of the Apex Intelligence Layer, Krithik bridges the gap between raw technological capability and high-level business strategy. His vision is simple: automated, sovereign, and intelligent enterprise.
                                </p>
                            </div>
                            <div className="pt-8">
                                <a href="https://linkedin.com" className="inline-block border-b border-black pb-1 hover:text-slate-600 transition-colors">Connect on LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    {/* COO - Shaili */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 space-y-8 lg:text-right flex flex-col items-end">
                            <h2 className="text-6xl font-bold tracking-tight">Shaili Srivastava</h2>
                            <p className="text-sm font-bold tracking-widest uppercase text-slate-400">Chief Operating Officer</p>
                            <div className="h-px w-20 bg-black"></div>
                            <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                                <p>
                                    "Vision without execution is just a hallucination. My job is to ensure the machine never stops."
                                </p>
                                <p className="text-lg text-slate-500">
                                    Shaili is the engine of ApexOne. With a relentless focus on operational efficiency and scale, she ensures that the complex systems we build are deployed with military precision and zero friction.
                                </p>
                            </div>
                            <div className="pt-8">
                                <a href="https://linkedin.com" className="inline-block border-b border-black pb-1 hover:text-slate-600 transition-colors">Connect on LinkedIn</a>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative group w-[80%] mx-auto">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-slate-100 shadow-2xl">
                                <Image src="/team/shaili_new.jpg" alt="Shaili Srivastava" width={600} height={800} className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white p-6 border border-slate-100 shadow-xl hidden lg:flex flex-col justify-center items-center text-center z-10">
                                <span className="text-4xl font-bold">02</span>
                                <span className="text-xs uppercase tracking-widest mt-2">Co-Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimal Premium Core Team Section */}
            <section className="py-32 bg-white">
                <div className="container">
                    {/* Minimal Header */}
                    <div className="mb-24 flex flex-col md:flex-row items-baseline justify-between gap-4 border-b border-slate-100 pb-12">
                        <h3 className="text-4xl font-light tracking-tight text-slate-900">
                            The Core <span className="font-bold">Team.</span>
                        </h3>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                            Engineering Excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                        {[
                            {
                                name: "Kanishk K. Singh",
                                role: "Technology Director",
                                img: "/team/kanishk.webp",
                                bio: "Lead architect driving the technical vision and security protocols of ApexOne's sovereign infrastructure."
                            },
                            {
                                name: "Vasanth",
                                role: "Finance Director",
                                img: "/team/vasanth.jpg",
                                bio: "Oversees the financial intelligence layer, ensuring sustainable growth and strategic capital allocation."
                            },
                            {
                                name: "Thanish",
                                role: "Chief AI Officer",
                                img: "/team/thanish.png",
                                bio: "Specializes in neural system deployment and the ethical evolution of our autonomous intelligence models."
                            }
                        ].map((member, i) => (
                            <div key={i} className="group">
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-slate-50 mb-8">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        width={500}
                                        height={667}
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Details */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-2xl font-bold tracking-tight text-slate-900">{member.name}</h4>
                                        <div className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-indigo-600 transition-all duration-500"></div>
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">{member.role}</p>
                                    <p className="text-slate-500 font-light leading-relaxed text-base pt-2 border-t border-slate-50">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. GLOBAL COORDINATES (NEW) */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                        <h3 className="text-4xl font-bold">Global Coordinates.</h3>
                        <p className="text-slate-400">Operating across major financial and tech hubs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { city: "Bangalore South", coord: "12.7944° N, 77.4611° E", time: "HQ / ENGINEERING" },
                            { city: "Abu Dhabi", coord: "24.4539° N, 54.3773° E", time: "SALES / FINANCE" },
                            { city: "Bangkok", coord: "13.7563° N, 100.5018° E", time: "STRATEGY / EMEA" }
                        ].map((loc, i) => (
                            <div key={i} className="group border-t border-white/10 pt-8 hover:border-emerald-500 transition-colors duration-300">
                                <h4 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{loc.city}</h4>
                                <p className="font-mono text-sm text-slate-500 mb-1">{loc.coord}</p>
                                <p className="text-xs text-slate-600 uppercase tracking-widest">{loc.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. STRATEGIC ALLIANCES (NEW) */}
            <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
                <div className="container text-center mb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Technology & Infrastructure Alliances</p>
                </div>

                <div className="relative w-full">
                    <div className="flex w-max animate-marquee items-center">
                        {/* Duplicate list for seamless loop */}
                        {[
                            'AWS', 'OpenAI', 'Salesforce', 'Google', 'Antigravity IDE', 'Razorpay', 'Oracle',
                            'Microsoft', 'Nvidia', 'Palantir', 'Bloomberg', 'Goldman Sachs', 'J.P. Morgan', 'Deloitte',
                            'AWS', 'OpenAI', 'Salesforce', 'Google', 'Antigravity IDE', 'Razorpay', 'Oracle',
                            'Microsoft', 'Nvidia', 'Palantir', 'Bloomberg', 'Goldman Sachs', 'J.P. Morgan', 'Deloitte'
                        ].map((partner, i) => (
                            <span key={i} className="mx-12 text-3xl md:text-5xl font-bold text-slate-200 hover:text-slate-800 cursor-default transition-all duration-500 select-none whitespace-nowrap">
                                {partner}
                            </span>
                        ))}
                    </div>
                    {/* Fade Edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
