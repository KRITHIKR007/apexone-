'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function MobileActions() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 500px
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl flex items-center justify-between gap-2 ring-1 ring-white/20">
                <a
                    href="/contact"
                    className="flex-1 bg-white text-slate-900 py-3 px-6 rounded-xl font-bold text-sm text-center active:scale-95 transition-transform"
                >
                    Partner With Us
                </a>
                <a
                    href="tel:+91 9902079990"
                    aria-label="Call us"
                    className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center active:scale-95 transition-transform"
                >
                    <Phone className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
