'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function WhoWeAre() {
    const founders = [
        {
            name: "Krithik R.",
            role: "Founder & CEO",
            bio: "Architect of the Apex Intelligence Layer. Bridges raw technological capability with high-level business strategy. His vision: automated, sovereign, and intelligent enterprise.",
            img: "/team/krithik.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Shaili Srivastava",
            role: "Co-Founder & COO",
            bio: "The engine of ApexOne. Relentless focus on operational efficiency and scale — ensuring complex systems are deployed with precision and zero friction.",
            img: "/team/shaili_new.jpg",
            linkedin: "https://linkedin.com"
        }
    ];

    const team = [
        {
            name: "Kanishk K. Singh",
            role: "Technology Director",
            bio: "Lead architect driving the technical vision and security protocols of ApexOne's sovereign infrastructure.",
            img: "/team/kanishk.webp"
        },
        {
            name: "Vasanth",
            role: "Finance Director",
            bio: "Oversees the financial intelligence layer, ensuring sustainable growth and strategic capital allocation.",
            img: "/team/vasanth.jpg"
        },
        {
            name: "Thanish",
            role: "Chief AI Officer",
            bio: "Specializes in neural system deployment and the ethical evolution of our autonomous intelligence models.",
            img: "/team/thanish.png"
        }
    ];

    return (
        <section id="about" className="section bg-white text-slate-900 py-20 md:py-32 relative overflow-hidden px-4">
            <div className="container relative z-10">
                {/* Philosophy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-24">
                    <div>
                        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-900 text-xs font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">
                            Our Philosophy
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
                            We don&apos;t sell services. <br />
                            <span className="text-indigo-600">We engineer dominance.</span>
                        </h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                            The traditional agency model is broken. It sells hours, not outcomes. It creates dependencies, not assets.
                            <br /><br />
                            <strong className="text-slate-900 font-semibold">ApexOne is different.</strong> We interact with your business as a sovereign territory of performance. We deploy proprietary technology, military-grade strategy, and creative intelligence to build an unassailable advantage.
                        </p>
                    </div>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-24">
                    {[
                        {
                            title: "Sovereign Intelligence",
                            desc: "We do not rely on rented land. We build proprietary data lakes and intelligence systems that belong to you, ensuring your IP and customer insights remain your competitive moat.",
                            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        },
                        {
                            title: "Asymmetric Warfare",
                            desc: "In a saturated market, playing fair is a losing strategy. We deploy autonomous agents and algorithmic ad-buying to outmaneuver competitors who are still operating manually.",
                            icon: "M13 10V3L4 14h7v7l9-11h-7z"
                        },
                        {
                            title: "Mathematical Growth",
                            desc: "Creativity is subjective. Revenue is not. Every campaign, every line of code, and every strategy is backed by a statistical probability of success before it ever goes live.",
                            icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-8 md:p-12 group hover:bg-white transition-colors duration-500">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 md:mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Founders */}
                <div className="mb-20">
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-900 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                        Leadership
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-slate-900">
                        Built by operators, <span className="text-indigo-600">not consultants.</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {founders.map((member, i) => (
                            <div key={i} className="flex gap-5 p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                                    <Image src={member.img} alt={member.name} width={64} height={64} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-slate-900">{member.name}</span>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <div className="text-xs text-indigo-600 font-semibold mb-2">{member.role}</div>
                                    <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Team */}
                <div>
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-900 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                        Core Team
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {team.map((member, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                                    <Image src={member.img} alt={member.name} width={48} height={48} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm mb-0.5">{member.name}</div>
                                    <div className="text-xs text-indigo-600 font-semibold mb-2">{member.role}</div>
                                    <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <a href="/about" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors border-b border-slate-200 hover:border-indigo-400 pb-0.5">
                            Meet the full team →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
