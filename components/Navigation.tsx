'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();
    const isHome = pathname === '/';
    const lastScrollY = useState(0)[0]; // We'll use a closure variable or ref actually. state is fine if we don't depend on it in effect
    // Actually, let's use a ref for the last scroll position to avoid re-renders of the effect
    const prevScrollY = useRef(0);

    // Need to import useRef
    // Since I can't add imports easily without replacing top lines, I will assume React imports are needed or use React.useRef if I can't see top.
    // I can see top. transform `import { useState, useEffect } from 'react';` to include useRef.

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Visibility logic
            if (currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > prevScrollY.current) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            prevScrollY.current = currentScrollY;
            setIsScrolled(currentScrollY > 20);

            // Only track sections on homepage
            if (isHome) {
                const sections = ['hero', 'problem', 'solution', 'products'];
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

    const navLinks = [
        { path: '/', label: 'Home', sectionId: 'hero' },
        { path: '/#problem', label: 'Problem', sectionId: 'problem' },
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
                        className={`text-xl font-bold tracking-tight transition-all duration-500 flex items-center gap-2 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}
                    >
                        <img src="/logo.png" alt="ApexOne Studios Logo" className="h-8 w-auto" />
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

                    {/* Mobile Menu Button - Frosty */}
                    <button className="lg:hidden p-2.5 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-600 shadow-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}
