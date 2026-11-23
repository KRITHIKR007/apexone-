'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200/80 pt-16 sm:pt-20 pb-12 font-sans relative overflow-hidden text-slate-900">
            {/* Subtle Signature Wave Lines */}
            <div className="absolute bottom-0 left-0 right-0 h-[30%] opacity-10 pointer-events-none">
                <svg
                    className="absolute w-full h-full"
                    style={{ animation: 'flow-stream 12s linear infinite' }}
                    viewBox="0 0 2400 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M-400,100 Q-200,40 0,100 Q200,160 400,100 Q600,50 800,100 Q1000,150 1200,100 Q1400,60 1600,100 Q1800,140 2000,100 Q2200,70 2400,100"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="absolute w-full h-full"
                    style={{ animation: 'flow-stream 16s linear infinite', animationDelay: '-4s' }}
                    viewBox="0 0 2400 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M-400,120 Q-150,80 100,130 Q350,170 600,110 Q850,60 1100,140 Q1350,180 1600,100 Q1850,50 2100,130 Q2350,160 2600,110"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-6 lg:col-span-5">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo.png"
                                alt="ApexOne Studios Logo"
                                width={28}
                                height={28}
                                className="w-7 h-7 object-contain"
                            />
                            <span className="text-xl font-bold tracking-tight text-slate-950 font-sans">
                                ApexOne Studios
                            </span>
                        </div>
                        <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed mb-6 max-w-sm font-normal">
                            The AI Operating System for Business Growth. Scaling net profit through autonomous agents and Bayesian revenue forecasting.
                        </p>

                        {/* Social Channels */}
                        <div className="flex items-center gap-3">
                            {[
                                {
                                    name: 'X',
                                    url: 'https://x.com/Apexonestudio',
                                    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z'
                                },
                                {
                                    name: 'LinkedIn',
                                    url: 'https://www.linkedin.com/company/apex-one-studio',
                                    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                                },
                                {
                                    name: 'YouTube',
                                    url: 'https://www.youtube.com/channel/UCWcqtFUkhYoR5bfD-x0tn-g',
                                    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
                                }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-200"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Clean Curated Links: Only Real, Top-Level Site Destinations */}
                    <div className="md:col-span-6 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:pl-8">
                        {/* Column 1: Solutions */}
                        <div>
                            <p className="font-semibold text-slate-900 mb-4 text-[11px] sm:text-xs tracking-[0.16em] uppercase">
                                Solutions
                            </p>
                            <ul className="space-y-2.5 text-[13px]">
                                <li>
                                    <Link href="/services" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/customers" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        Insights & Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Company */}
                        <div>
                            <p className="font-semibold text-slate-900 mb-4 text-[11px] sm:text-xs tracking-[0.16em] uppercase">
                                Company
                            </p>
                            <ul className="space-y-2.5 text-[13px]">
                                <li>
                                    <Link href="/about" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Trust & Legal */}
                        <div>
                            <p className="font-semibold text-slate-900 mb-4 text-[11px] sm:text-xs tracking-[0.16em] uppercase">
                                Trust & Legal
                            </p>
                            <ul className="space-y-2.5 text-[13px]">
                                <li>
                                    <Link href="/legal/security" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        Security Enclave
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/legal/privacy" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/legal/terms" className="text-slate-500 hover:text-slate-950 transition-colors block py-0.5">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Bar */}
                <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-slate-500 font-normal">
                    <p>© 2026 ApexOne Studios Inc. All rights reserved.</p>
                    <div className="flex items-center gap-6 text-slate-500">
                        <Link href="/legal/privacy" className="hover:text-slate-950 transition-colors">
                            Privacy Policy
                        </Link>
                        <span>·</span>
                        <Link href="/legal/terms" className="hover:text-slate-950 transition-colors">
                            Terms of Service
                        </Link>
                        <span>·</span>
                        <Link href="/legal/security" className="hover:text-slate-950 transition-colors">
                            Security Enclave
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
