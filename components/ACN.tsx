'use client';

import React from 'react';

export default function ACN() {
    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden relative">
            {/* Background Elements (Light Mode) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-xs font-mono text-red-600 tracking-wider">INTERNAL GROWTH ENGINE</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
                            Apex Creators <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Network</span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            ApexOne Studio’s in-house creator and influencer ecosystem. Not an agency—a strategic internal growth engine.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            {['Instagram', 'YouTube', 'Short-form', 'Editing', 'Voice & UGC'].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium border border-slate-200 text-slate-600">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <div className="text-3xl font-bold text-slate-900 mb-2">100+</div>
                                <div className="text-sm text-slate-500 uppercase tracking-widest">Verified Creators</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
                                <div className="text-sm text-slate-500 uppercase tracking-widest">Quality Control</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://acn-v1.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                Visit ACN Platform
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Visuals - Aesthetic Cards (Light Mode) */}
                    <div className="relative">
                        <div className="grid gap-6">
                            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Why ACN?</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Launch campaigns at scale',
                                        'Test creatives fast',
                                        'Generate authentic UGC',
                                        'Control quality & delivery'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600">
                                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl relative overflow-hidden group shadow-lg">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg className="w-16 h-16 text-slate-900 transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Campaign-Ready</h3>
                                <p className="text-slate-600 text-sm relative z-10">
                                    Creators managed through ApexOne’s dashboards. Paid on performance. This gives you speed, cost efficiency, and creative dominance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
