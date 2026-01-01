'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe all elements with reveal classes
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        revealElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
