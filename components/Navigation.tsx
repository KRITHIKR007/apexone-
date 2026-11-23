'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
    SFChevronDown,
    SFArrowRight,
    SFTrendingUp,
    SFTerminal,
    SFCpu,
    SFDocText,
    SFBriefcase,
    SFShieldCheck,
    SFBarChart,
    SFLayers,
    SFSparkles
} from './SFIcons';

interface NavFlyoutCategory {
    title: string;
    description?: string;
    path: string;
    badge?: string;
    icon?: any;
}

interface NavItem {
    id: string;
    label: string;
    path: string;
    flyout?: {
        exploreLabel: string;
        primaryItems: NavFlyoutCategory[];
        quickLinksLabel?: string;
        quickLinks?: { label: string; path: string }[];
        featuredCard?: {
            title: string;
            description: string;
            cta: string;
            path: string;
        };
    };
}

const NAV_ITEMS: NavItem[] = [
    {
        id: 'services',
        label: 'Services',
        path: '/services',
        flyout: {
            exploreLabel: 'Core Capabilities',
            primaryItems: [
                {
                    title: 'Autonomous Sales Swarms',
                    description: 'Inbound qualification and outbound deal-closing neural agents',
                    path: '/services#growth-os',
                    icon: SFCpu
                },
                {
                    title: 'Deterministic Revenue Intelligence',
                    description: 'Predictive revenue forecasting and churn mitigation pipelines',
                    path: '/services#golden-goose',
                    icon: SFBarChart
                },
                {
                    title: 'Sovereign AI Infrastructure',
                    description: 'Air-gapped models deployed securely on proprietary enclaves',
                    path: '/services#ciip',
                    icon: SFLayers
                },
                {
                    title: 'Enterprise Operating System',
                    description: 'Full-stack cognitive infrastructure for scaling operations',
                    path: '/services#enterprise-os',
                    icon: SFTerminal
                }
            ],
            quickLinksLabel: 'Deliverables & Audit',
            quickLinks: [
                { label: 'Explore All Services & Ecosystem', path: '/services' },
                { label: 'Schedule Architecture Audit', path: '/contact' },
                { label: 'Client Case Studies & Outcomes', path: '/customers' }
            ],
            featuredCard: {
                title: '90-Day Net Margin Guarantee',
                description: 'We install custom AI neural layers into your business. If target ROI is not met in 90 days, we work free.',
                cta: 'Explore Services',
                path: '/services'
            }
        }
    },
    {
        id: 'solution',
        label: 'Solution',
        path: '/#solution'
    },
    {
        id: 'outcomes',
        label: 'Case Studies',
        path: '/customers'
    },
    {
        id: 'about',
        label: 'About',
        path: '/about',
        flyout: {
            exploreLabel: 'Company & Guild',
            primaryItems: [
                {
                    title: 'Executive Philosophy',
                    description: 'Why enterprise sovereignty and mathematical rigor matter',
                    path: '/about',
                    icon: SFBriefcase
                },
                {
                    title: 'Careers & Talent Guild',
                    description: 'Join our elite research team in Bangalore South and remote',
                    path: '/careers',
                    icon: SFSparkles
                }
            ],
            quickLinksLabel: 'Company',
            quickLinks: [
                { label: 'Executive Team & Founder', path: '/about' },
                { label: 'Open Engineering Roles', path: '/careers' },
                { label: 'Direct Headquarters & Contact', path: '/contact' }
            ]
        }
    },
    {
        id: 'careers',
        label: 'Careers',
        path: '/careers'
    },
    {
        id: 'insights',
        label: 'Insights',
        path: '/blog',
        flyout: {
            exploreLabel: 'Research & Theses',
            primaryItems: [
                {
                    title: 'The Death of Traditional SaaS',
                    description: 'Why software-plus-service AI models are replacing seat licenses',
                    path: '/blog/death-of-traditional-saas',
                    icon: SFDocText
                },
                {
                    title: 'Autonomous Sales Without Hallucination',
                    description: 'RAG pipelines and probabilistic validation in mission-critical sales',
                    path: '/blog/building-autonomous-sales-agents',
                    icon: SFCpu
                },
                {
                    title: 'Scaling to $50M with 3 Marketers',
                    description: 'Full automated attribution and generative campaign orchestration',
                    path: '/blog/scaling-fintech-to-50m',
                    icon: SFBarChart
                }
            ],
            quickLinksLabel: 'Publications',
            quickLinks: [
                { label: 'Read All Research Articles', path: '/blog' },
                { label: 'State of AI 2026 Report', path: '/blog/state-of-ai-2026' }
            ]
        }
    },
    {
        id: 'contact',
        label: 'Contact',
        path: '/contact'
    }
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState<string>('');

    const pathname = usePathname();
    const isHome = pathname === '/';
    const prevScrollY = useRef(0);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Scroll handler for auto-hide/show and sticky state
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 10);

            if (currentScrollY <= 44) {
                setIsVisible(true);
            } else {
                const diff = currentScrollY - prevScrollY.current;
                if (Math.abs(diff) > 6) {
                    if (diff > 0 && !hoveredItem && !isMobileMenuOpen) {
                        setIsVisible(false);
                    } else {
                        setIsVisible(true);
                    }
                }
            }

            prevScrollY.current = currentScrollY;

            // Section tracking on homepage
            if (isHome) {
                const tracked = ['services', 'solution', 'hero'];
                const current = tracked.find((id) => {
                    const el = document.getElementById(id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        return rect.top <= 120 && rect.bottom >= 120;
                    }
                    return false;
                });
                if (current) setActiveSection(current);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome, hoveredItem, isMobileMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setHoveredItem(null);
    }, [pathname]);

    // Flyout hover handlers with debounce
    const handleMouseEnter = (itemId: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setHoveredItem(itemId);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setHoveredItem(null);
        }, 120);
    };

    const currentFlyoutItem = NAV_ITEMS.find((item) => item.id === hoveredItem);

    return (
        <>
            {/* Apple Global Navigation Bar Header (44px) */}
            <header
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: isVisible || isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease'
                }}
                className={`fixed top-0 left-0 right-0 z-50 h-[44px] select-none ${
                    isScrolled || isMobileMenuOpen || hoveredItem
                        ? 'apple-global-nav backdrop-blur-2xl bg-white/80 border-b border-black/[0.06]'
                        : 'apple-global-nav backdrop-blur-xl bg-white/70 border-b border-black/[0.04]'
                }`}
            >
                {/* 1024px Max-Width Apple Container */}
                <div className="max-w-[1024px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        prefetch={false}
                        className="flex items-center gap-2 text-slate-900 opacity-90 hover:opacity-100 transition-opacity duration-200 shrink-0 group py-1"
                        aria-label="ApexOne Studios Home"
                    >
                        <div className="relative w-4 h-4 flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="ApexOne Studios"
                                width={18}
                                height={18}
                                className="w-4 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </div>
                        <span className="text-[14px] font-semibold tracking-tight text-slate-900">
                            ApexOne
                        </span>
                    </Link>

                    {/* Global Nav Links (Desktop) */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 h-full">
                        {NAV_ITEMS.map((item) => {
                            const isCurrentActive =
                                (isHome && item.id === 'services' && activeSection === 'services') ||
                                (isHome && item.id === 'solution' && activeSection === 'solution') ||
                                (!isHome && pathname === item.path) ||
                                (!isHome && item.path === '/blog' && pathname.startsWith('/blog')) ||
                                (!isHome && item.id === 'services' && pathname === '/services');

                            const isItemHovered = hoveredItem === item.id;
                            const isHash = item.path.startsWith('/#');

                            return (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    className="h-full flex items-center"
                                >
                                    {isHash ? (
                                        <a
                                            href={item.path}
                                            className={`text-[12px] tracking-[-0.01em] transition-colors duration-200 flex items-center gap-1 h-full cursor-pointer relative ${
                                                isItemHovered || isCurrentActive
                                                    ? 'text-slate-950 font-medium'
                                                    : 'text-slate-600 hover:text-slate-950'
                                            }`}
                                        >
                                            <span>{item.label}</span>
                                            {isCurrentActive && !hoveredItem && (
                                                <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-slate-900 rounded-full" />
                                            )}
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.path}
                                            prefetch={false}
                                            className={`text-[12px] tracking-[-0.01em] transition-colors duration-200 flex items-center gap-1 h-full cursor-pointer relative ${
                                                isItemHovered || isCurrentActive
                                                    ? 'text-slate-950 font-medium'
                                                    : 'text-slate-600 hover:text-slate-950'
                                            }`}
                                        >
                                            <span>{item.label}</span>
                                            {isCurrentActive && !hoveredItem && (
                                                <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-slate-900 rounded-full" />
                                            )}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right Side Tools: Action CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        {/* Apple Blue Pill Action Button */}
                        <Link
                            href="/contact"
                            prefetch={false}
                            className="hidden sm:inline-flex items-center justify-center h-[26px] px-3.5 rounded-full text-[12px] apple-btn-blue font-medium tracking-tight shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            Partner With Us
                        </Link>

                        {/* Signature 2-Bar Animated Hamburger (Mobile) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-slate-800 hover:text-black transition-colors focus:outline-hidden cursor-pointer"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="w-4 h-3 relative flex flex-col justify-between items-center pointer-events-none">
                                <span
                                    className={`w-4 h-[1.2px] bg-slate-800 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                                        isMobileMenuOpen ? 'translate-y-[5px] rotate-45' : ''
                                    }`}
                                />
                                <span
                                    className={`w-4 h-[1.2px] bg-slate-800 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                                        isMobileMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Desktop Flyout Tray */}
                {hoveredItem && currentFlyoutItem?.flyout && (
                    <div
                        onMouseEnter={() => handleMouseEnter(hoveredItem)}
                        onMouseLeave={handleMouseLeave}
                        className="hidden md:block absolute top-[44px] left-0 right-0 apple-nav-flyout border-b border-black/[0.08] shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200 z-50 bg-white/95 backdrop-blur-2xl"
                    >
                        <div className="max-w-[1024px] mx-auto px-8 py-8">
                            <div className="grid grid-cols-12 gap-8">
                                {/* Left Column: Explore Primary Items */}
                                <div className="col-span-6 space-y-4">
                                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                        {currentFlyoutItem.flyout.exploreLabel}
                                    </div>
                                    <div className="space-y-3">
                                        {currentFlyoutItem.flyout.primaryItems.map((subItem) => {
                                            const Icon = subItem.icon || SFLayers;
                                            return (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.path}
                                                    prefetch={false}
                                                    onClick={() => setHoveredItem(null)}
                                                    className="group flex items-start gap-3 p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors"
                                                >
                                                    <div className="p-2 rounded-lg bg-slate-100/80 group-hover:bg-indigo-50 text-slate-700 group-hover:text-indigo-600 transition-colors shrink-0 mt-0.5">
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[14px] font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                                                {subItem.title}
                                                            </span>
                                                            {subItem.badge && (
                                                                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                                                    {subItem.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {subItem.description && (
                                                            <p className="text-[12px] text-slate-500 leading-snug mt-0.5 font-light">
                                                                {subItem.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Right Column: Quick Links & Featured Card */}
                                <div className="col-span-6 space-y-6 pl-4 border-l border-slate-100">
                                    {currentFlyoutItem.flyout.quickLinks && (
                                        <div className="space-y-3">
                                            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                                {currentFlyoutItem.flyout.quickLinksLabel || 'Quick Links'}
                                            </div>
                                            <div className="space-y-2">
                                                {currentFlyoutItem.flyout.quickLinks.map((link) => (
                                                    <Link
                                                        key={link.label}
                                                        href={link.path}
                                                        prefetch={false}
                                                        onClick={() => setHoveredItem(null)}
                                                        className="group flex items-center justify-between py-1 text-[13px] text-slate-700 hover:text-slate-950 font-medium transition-colors"
                                                    >
                                                        <span>{link.label}</span>
                                                        <SFArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {currentFlyoutItem.flyout.featuredCard && (
                                        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/40 border border-slate-200/60 shadow-xs space-y-2">
                                            <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600">
                                                Featured Guarantee
                                            </div>
                                            <h4 className="text-[14px] font-semibold text-slate-900 leading-tight">
                                                {currentFlyoutItem.flyout.featuredCard.title}
                                            </h4>
                                            <p className="text-[12px] text-slate-600 leading-relaxed font-light">
                                                {currentFlyoutItem.flyout.featuredCard.description}
                                            </p>
                                            <Link
                                                href={currentFlyoutItem.flyout.featuredCard.path}
                                                prefetch={false}
                                                onClick={() => setHoveredItem(null)}
                                                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-indigo-600 hover:text-indigo-700 group pt-1"
                                            >
                                                <span>{currentFlyoutItem.flyout.featuredCard.cta}</span>
                                                <SFArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Background Scrim when Flyout is Active */}
            {hoveredItem && currentFlyoutItem?.flyout && (
                <div
                    onMouseEnter={() => setHoveredItem(null)}
                    className="fixed inset-0 top-[44px] bg-black/25 backdrop-blur-[2px] z-40 animate-in fade-in duration-200 pointer-events-auto"
                />
            )}

            {/* Mobile Full-Screen Navigation Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-[44px] z-40 bg-white/95 backdrop-blur-2xl flex flex-col animate-in fade-in slide-in-from-top-2 duration-300 overflow-y-auto">
                    <div className="px-6 py-6 space-y-6 flex-1">
                        {/* Navigation Links Accordion */}
                        <div className="space-y-1 divide-y divide-slate-100">
                            {NAV_ITEMS.map((item) => {
                                const hasFlyout = !!item.flyout;
                                const isExpanded = mobileExpandedItem === item.id;

                                return (
                                    <div key={item.id} className="pt-2">
                                        <div className="flex items-center justify-between py-2">
                                            <Link
                                                href={item.path}
                                                prefetch={false}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-[20px] font-semibold text-slate-900 tracking-tight"
                                            >
                                                {item.label}
                                            </Link>
                                            {hasFlyout && (
                                                <button
                                                    onClick={() =>
                                                        setMobileExpandedItem(isExpanded ? null : item.id)
                                                    }
                                                    className="p-2 text-slate-400 hover:text-slate-900 cursor-pointer"
                                                >
                                                    <SFChevronDown
                                                        className={`w-4 h-4 transition-transform duration-200 ${
                                                            isExpanded ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {/* Expanded Sub-Items */}
                                        {hasFlyout && isExpanded && item.flyout && (
                                            <div className="pl-3 pb-3 space-y-2.5 animate-in slide-in-from-top-1 duration-200">
                                                {item.flyout.primaryItems.map((sub) => (
                                                    <Link
                                                        key={sub.title}
                                                        href={sub.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block text-sm font-medium text-slate-600 hover:text-indigo-600"
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                ))}
                                                {item.flyout.quickLinks?.map((ql) => (
                                                    <Link
                                                        key={ql.label}
                                                        href={ql.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block text-xs text-indigo-600 font-semibold pt-1"
                                                    >
                                                        → {ql.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mobile Direct Contact Channels */}
                        <div className="pt-6 border-t border-slate-100 space-y-3">
                            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                Direct Contact
                            </span>
                            <div className="space-y-1">
                                <a
                                    href="mailto:krithik@apexonestudio.com"
                                    className="block text-sm font-semibold text-slate-900"
                                >
                                    krithik@apexonestudio.com
                                </a>
                                <p className="text-xs text-slate-500">
                                    Bangalore South, Karnataka, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Sticky Mobile Action */}
                    <div className="p-6 border-t border-slate-100 bg-white/60 backdrop-blur-md">
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center w-full py-3 rounded-full apple-btn-blue text-[14px] font-semibold shadow-md"
                        >
                            Partner With Us
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
