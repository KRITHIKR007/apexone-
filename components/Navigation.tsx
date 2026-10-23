'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

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

            // Liquid glass activates once scrolled past initial top buffer
            setIsScrolled(currentScrollY > 20);

            // Always show at top of page
            if (currentScrollY <= 20) {
                setIsVisible(true);
            } else {
                const diff = currentScrollY - prevScrollY.current;
                // Threshold of 8px to prevent micro-jitter
                if (Math.abs(diff) > 8) {
                    if (diff > 0) {
                        // Scrolling DOWN (swiping up) -> HIDE navbar
                        setIsVisible(false);
                    } else {
                        // Scrolling UP (swiping down) -> REVEAL navbar
                        setIsVisible(true);
                    }
                }
            }

            prevScrollY.current = currentScrollY;

            // Track sections on homepage
            if (isHome) {
                const sections = ['hero', 'solution', 'products'];
                const current = sections.find(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top <= 140 && rect.bottom >= 140;
                    }
                    return false;
                });
                if (current) setActiveSection(current);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
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

    const isLiquidGlass = isScrolled || !isHome;

    return (
        <header
            style={{
                transform: isVisible || isMobileMenuOpen ? 'translateY(0)' : 'translateY(-160%)',
                opacity: isVisible || isMobileMenuOpen ? 1 : 0
            }}
            className={`fixed left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLiquidGlass ? 'top-3 md:top-4' : 'top-5 md:top-6'
            }`}
        >
            {/* Ambient Refraction Glow behind liquid glass pill */}
            <div className={`transition-opacity duration-700 pointer-events-none ${
                isLiquidGlass ? 'opacity-100' : 'opacity-0'
            }`}>
                <div className="liquid-glass-glow w-[95%] max-w-5xl h-14 mx-auto" />
            </div>

            <nav
                className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative flex items-center justify-between ${
                    isLiquidGlass
                        ? 'liquid-glass-nav py-2.5 px-5 md:px-7 rounded-full w-full max-w-5xl'
                        : 'bg-white/40 backdrop-blur-md border border-white/50 py-3.5 px-6 md:px-8 rounded-full w-full max-w-7xl shadow-sm'
                }`}
            >
                {/* Logo */}
                <a
                    href="/"
                    className="text-lg md:text-xl font-bold tracking-tight transition-all duration-300 flex items-center gap-2.5 group shrink-0"
                >
                    <div className="relative w-8 h-8 rounded-full p-1 bg-white/70 border border-white/80 shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="ApexOne Studios Logo"
                            width={32}
                            height={32}
                            className="w-6 h-auto object-contain"
                            priority
                        />
                    </div>
                    <span className="gradient-text font-bold tracking-tight">ApexOne</span>
                </a>

                {/* Desktop Navigation */}
                <div
                    className={`hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-500 ${
                        isLiquidGlass
                            ? 'liquid-glass-pill'
                            : 'bg-slate-100/60 border border-white/60 backdrop-blur-md'
                    }`}
                >
                    {navLinks.map((link) => {
                        let isActive = false;
                        if (isHome && link.sectionId && activeSection === link.sectionId) isActive = true;
                        if (!isHome && pathname.startsWith(link.path) && link.path !== '/') isActive = true;
                        if (!isHome && link.path === '/blog' && pathname.startsWith('/blog')) isActive = true;

                        return (
                            <a
                                key={link.label}
                                href={link.path}
                                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 relative group ${
                                    isActive
                                        ? 'text-indigo-600 liquid-glass-pill-active font-semibold'
                                        : 'text-slate-800 hover:text-indigo-600 hover:bg-white/70 font-medium'
                                }`}
                            >
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        );
                    })}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    {/* CTA Button */}
                    <a
                        href="/contact"
                        className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-[0_4px_14px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group no-underline"
                    >
                        <span className="relative z-10 flex items-center gap-1.5">
                            Partner With Us
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/25 pointer-events-none" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-slate-700 shadow-sm hover:bg-white hover:text-slate-950 transition-all duration-200 active:scale-95"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Premium Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 pointer-events-auto">
                    {/* Backdrop with blur */}
                    <div
                        className="absolute inset-0 bg-slate-900/30 backdrop-blur-md animate-in fade-in duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu Panel with Deep Liquid Glass */}
                    <div className="absolute top-3 right-3 left-3 sm:left-auto sm:w-96 max-h-[92vh] rounded-3xl liquid-glass-drawer p-6 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col border border-white/80 overflow-hidden">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/60">
                            <div className="flex items-center gap-2">
                                <Image src="/logo.png" alt="Logo" width={28} height={28} className="w-7 h-auto object-contain" />
                                <span className="font-bold tracking-tight text-slate-900 text-lg">ApexOne</span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-full bg-white/70 border border-white/80 text-slate-800 shadow-sm active:scale-90 transition-transform"
                                aria-label="Close mobile menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrolling Content */}
                        <div className="flex-1 overflow-y-auto py-6">
                            <div className="space-y-8">
                                {/* Nav Links */}
                                <nav className="flex flex-col gap-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Menu</span>
                                    {navLinks.map((link) => {
                                        let isActive = false;
                                        if (isHome && link.sectionId && activeSection === link.sectionId) isActive = true;
                                        if (!isHome && pathname.startsWith(link.path) && link.path !== '/') isActive = true;

                                        return (
                                            <a
                                                key={link.label}
                                                href={link.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`text-2xl font-bold tracking-tight py-2.5 px-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                                                    isActive
                                                        ? 'text-indigo-600 bg-white/80 shadow-sm'
                                                        : 'text-slate-800 hover:text-indigo-600 hover:bg-white/40'
                                                }`}
                                            >
                                                <span>{link.label}</span>
                                                {isActive && <span className="w-2 h-2 rounded-full bg-indigo-600" />}
                                            </a>
                                        );
                                    })}
                                </nav>

                                {/* Contact Mini Section */}
                                <div className="space-y-4 pt-6 border-t border-white/60">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Connect</span>
                                    <div className="space-y-1">
                                        <a href="mailto:apexonestudio@gmail.com" className="block text-base font-semibold text-slate-900 hover:text-indigo-600">
                                            apexonestudio@gmail.com
                                        </a>
                                        <p className="text-slate-500 text-sm font-normal">
                                            Bangalore South, Karnataka, India
                                        </p>
                                    </div>
                                    <div className="flex gap-4 pt-2">
                                        {['Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                                            <a key={social} href="#" className="text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors">
                                                {social}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="pt-4 border-t border-white/60">
                            <a
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center p-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-base shadow-lg shadow-indigo-500/25 active:scale-98 transition-all"
                            >
                                Start Your Project
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
