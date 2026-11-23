'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SFPhone } from './SFIcons';

export default function MobileActions() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-12 opacity-0 pointer-events-none'
            }`}
        >
            <div className="bg-black/80 backdrop-blur-2xl border border-white/15 p-1.5 rounded-full shadow-2xl flex items-center justify-between gap-2">
                <Link
                    href="/contact"
                    prefetch={false}
                    className="flex-1 apple-btn-blue text-white py-2.5 px-6 rounded-full text-xs font-medium text-center shadow-xs transition-all active:scale-[0.98]"
                >
                    Partner With Us
                </Link>
                <a
                    href="tel:+919902079990"
                    aria-label="Direct Phone Consultation"
                    className="w-9 h-9 bg-white/10 hover:bg-white/15 text-white rounded-full flex items-center justify-center transition-all active:scale-[0.96]"
                >
                    <SFPhone className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
