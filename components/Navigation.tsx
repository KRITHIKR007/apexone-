'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always update style state
            setIsScrolled(currentScrollY > 20);

            // Visibility logic with threshold to prevent jitter
            // We only update visibility if user scrolls more than 10px
            const threshold = 10;

            if (currentScrollY < 50) {
                setIsVisible(true);
                prevScrollY.current = currentScrollY;
            } else if (Math.abs(currentScrollY - prevScrollY.current) > threshold) {
                // Significant movement detected
                if (currentScrollY > prevScrollY.current) {
                    // Scrolling down
                    setIsVisible(false);
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }
                prevScrollY.current = currentScrollY;
            }

            // Only track sections on homepage
            if (isHome) {
                const sections = ['hero', 'solution', 'products'];
                const current = sections.find(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top <= 100 && rect.bottom >= 100;
                    }
                    return false;
                });
                if (current) setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    // Close mobile menu on scroll or route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    const navLinks = [
        { path: '/', label: 'Home', sectionId: 'hero' },
        { path: '/#solution', label: 'Solution', sectionId: 'solution' },
        { path: '/#products', label: 'Products', sectionId: 'products' },
        { path: '/about', label: 'About' },
        { path: '/blog', label: 'Insights' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[200%]'}`}>
            <nav className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled || !isHome
                ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-500/10 border border-white/20 py-3 px-6 rounded-full w-auto max-w-6xl'
                : 'bg-transparent py-4 px-0 w-full max-w-[1600px] border-none'
                }`}>
                <div className="flex items-center justify-between gap-8">

                    {/* Logo */}
                    <a
                        href="/"
                        className="text-xl font-bold tracking-tight transition-all duration-500 flex items-center gap-2"
                    >
                        <Image src="/logo.png" alt="ApexOne Studios Logo" width={32} height={32} className="w-8 h-auto" priority />
                        <span className="gradient-text">ApexOne Studios</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className={`hidden lg:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-white/50 backdrop-blur-md transition-all duration-500 ${isScrolled || !isHome ? 'bg-transparent border-none p-0' : ''}`}>
                        {navLinks.map((link) => {
                            // Determine activity
                            let isActive = false;
                            if (isHome && link.sectionId && activeSection === link.sectionId) isActive = true;
                            if (!isHome && pathname.startsWith(link.path) && link.path !== '/') isActive = true;
                            if (!isHome && link.path === '/blog' && pathname.startsWith('/blog')) isActive = true;

                            return (
                                <a
                                    key={link.label}
                                    href={link.path}
                                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative overflow-hidden group ${isActive
                                        ? 'text-indigo-600 bg-white shadow-sm'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                                        }`}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    {isActive && (
                                        <div className="absolute inset-0 bg-white rounded-full shadow-sm z-0 animate-in fade-in zoom-in duration-300" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="/contact"
                        className="btn btn-primary hidden md:inline-flex rounded-full px-6 py-2.5 text-sm shadow-indigo-500/20 shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 no-underline hover:text-white"
                    >
                        Start Audit
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-600 shadow-sm hover:bg-white transition-colors"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Premium Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 pointer-events-auto">
                    {/* Backdrop with blur */}
                    <div
                        className="absolute inset-0 bg-white/60 backdrop-blur-2xl animate-in fade-in duration-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="absolute inset-0 top-0 right-0 w-full h-screen bg-white shadow-2xl animate-in slide-in-from-right duration-500 ease-out flex flex-col">
                        {/* Mobile Header (Fixed) */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <Image src="/logo.png" alt="Logo" width={28} height={28} />
                                <span className="font-bold tracking-tight text-slate-900">ApexOne</span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-full bg-slate-100 text-slate-900"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrolling Content */}
                        <div className="flex-1 overflow-y-auto p-8 pt-12">
                            <div className="space-y-12">
                                {/* Nav Links */}
                                <nav className="flex flex-col gap-6">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Menu</span>
                                    {navLinks.map((link, i) => {
                                        let isActive = false;
                                        if (isHome && link.sectionId && activeSection === link.sectionId) isActive = true;
                                        if (!isHome && pathname.startsWith(link.path) && link.path !== '/') isActive = true;

                                        return (
                                            <a
                                                key={link.label}
                                                href={link.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`text-4xl font-bold tracking-tighter transition-all duration-300 ${isActive ? 'text-indigo-600 translate-x-2' : 'text-slate-900 hover:text-indigo-600'
                                                    }`}
                                                style={{ animationDelay: `${i * 50}ms` }}
                                            >
                                                {link.label}
                                            </a>
                                        );
                                    })}
                                </nav>

                                {/* Contact Mini Section */}
                                <div className="space-y-6 pt-12 border-t border-slate-100">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Connect</span>
                                    <div className="space-y-4">
                                        <a href="mailto:apexonestudio@gmail.com" className="block text-xl font-medium text-slate-900">
                                            apexonestudio@gmail.com
                                        </a>
                                        <p className="text-slate-500 font-light leading-relaxed">
                                            Bangalore South, <br />
                                            Karnataka, India
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        {['Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                                            <a key={social} href="#" className="text-sm font-bold text-slate-900 border-b-2 border-slate-100 hover:border-indigo-600 transition-colors">
                                                {social}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer CTA (Fixed) */}
                        <div className="p-6 border-t border-slate-100 bg-slate-50">
                            <a
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center p-5 bg-black text-white rounded-2xl font-bold text-lg shadow-xl shadow-black/10 active:scale-95 transition-all"
                            >
                                Start Your Project
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
