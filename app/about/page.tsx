'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-black selection:text-white">
            <Navigation />

            {/* Editorial Hero */}
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

            {/* Founders - Editorial Layout (Full Color) */}
            <section className="py-20 border-t border-slate-100">
                <div className="container">

                    {/* CEO - Krithik */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                        <div className="relative group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-slate-100 shadow-2xl">
                                <img src="/team/krithik.jpg" alt="Krithik R" className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105" />
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
                        <div className="order-1 lg:order-2 relative group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-slate-100 shadow-2xl">
                                <img src="/team/shaili_new.jpg" alt="Shaili Srivastava" className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white p-6 border border-slate-100 shadow-xl hidden lg:flex flex-col justify-center items-center text-center z-10">
                                <span className="text-4xl font-bold">02</span>
                                <span className="text-xs uppercase tracking-widest mt-2">Co-Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directors - Classic Grid Layout */}
            <section className="py-32 bg-slate-50">
                <div className="container">
                    <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                        <h3 className="text-5xl font-bold tracking-tight max-w-xl">The Core Team.</h3>
                        <p className="text-slate-500 max-w-md text-right">
                            A multi-disciplinary team of experts leading technology, finance, and growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {[
                            { name: "Kanishk K. Singh", role: "Technology Director", img: "/team/kanishk.webp" },
                            { name: "Vasanth", role: "Finance Director", img: "/team/vasanth.jpg" },
                            { name: "Thanish", role: "Chief AI Officer", img: "/team/thanish.png" },
                            { name: "Ayadee A.", role: "Creative Director", img: "/team/ayadee.jpg" },
                            { name: "Ayham", role: "Digital Marketing Director", img: "/team/ahyam.jpg" },
                            { name: "Kishore", role: "Corporate Director", img: "/team/kishore.jpg" },
                            { name: "Ardhendu", role: "Tech Ops Director", img: "/team/ardhendu.jpg" },
                            { name: "Tanvir", role: "Content Director", img: "/team/tanvir_new.png" }
                        ].map((member, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[3/4] mb-6 overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{member.name}</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
