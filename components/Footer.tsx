'use client';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-20 pb-10 font-sans relative overflow-hidden">
            {/* Dramatic Flow Lines - Lower Section Only */}
            <div className="absolute bottom-0 left-0 right-0 h-[30%] opacity-15 pointer-events-none">
                {/* Line 1 - Large dramatic waves */}
                <svg
                    className="absolute w-full h-full"
                    style={{
                        animation: 'flow-stream 10s linear infinite',
                    }}
                    viewBox="0 0 2400 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M-400,100 Q-200,40 0,100 Q200,160 400,100 Q600,50 800,100 Q1000,150 1200,100 Q1400,60 1600,100 Q1800,140 2000,100 Q2200,70 2400,100"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.5"
                    />
                </svg>

                {/* Line 2 - Medium irregular waves */}
                <svg
                    className="absolute w-full h-full"
                    style={{
                        animation: 'flow-stream 14s linear infinite',
                        animationDelay: '-3s',
                    }}
                    viewBox="0 0 2400 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M-400,120 Q-150,80 100,130 Q350,170 600,110 Q850,60 1100,140 Q1350,180 1600,100 Q1850,50 2100,130 Q2350,160 2600,110"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        opacity="0.4"
                    />
                </svg>

                {/* Line 3 - Subtle background wave */}
                <svg
                    className="absolute w-full h-full"
                    style={{
                        animation: 'flow-stream 18s linear infinite',
                        animationDelay: '-7s',
                    }}
                    viewBox="0 0 2400 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M-400,110 Q-100,130 200,90 Q500,60 800,120 Q1100,150 1400,95 Q1700,70 2000,125 Q2300,155 2600,100"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.3"
                    />
                </svg>
            </div>

            <div className="container relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="ApexOne Studios Logo" className="h-8 w-auto" />
                            <h3 className="text-xl font-bold tracking-tight text-slate-900">ApexOne Studios</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
                            The AI Operating System for Business Growth.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { name: 'Twitter', url: 'https://x.com/Apexonestudio', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/apex-one-studio', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                                { name: 'Instagram', url: 'https://www.linkedin.com/company/apex-one-studio', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                                { name: 'YouTube', url: 'https://www.youtube.com/channel/UCWcqtFUkhYoR5bfD-x0tn-g', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
                            ].map((social) => (
                                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-300">
                                    <span className="sr-only">{social.name}</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm tracking-wide uppercase">Product</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="/products/golden-goose" className="text-slate-500 hover:text-indigo-600 transition-colors">Golden Goose</a></li>
                            <li><a href="/products/ciip" className="text-slate-500 hover:text-indigo-600 transition-colors">CIIP Platform</a></li>
                            <li><a href="/products/growth-os" className="text-slate-500 hover:text-indigo-600 transition-colors">Growth OS</a></li>
                            <li><a href="/products/enterprise-os" className="text-slate-500 hover:text-indigo-600 transition-colors">Enterprise OS</a></li>
                            <li><a href="/products/acn" className="text-slate-500 hover:text-indigo-600 transition-colors">ACN</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm tracking-wide uppercase">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="/about" className="text-slate-500 hover:text-indigo-600 transition-colors">About Us</a></li>
                            <li><a href="/customers" className="text-slate-500 hover:text-indigo-600 transition-colors">Customers</a></li>
                            <li><a href="/careers" className="text-slate-500 hover:text-indigo-600 transition-colors">Careers</a></li>
                            <li><a href="/contact" className="text-slate-500 hover:text-indigo-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
                    <p>© 2026 ApexOne Studios. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="/legal/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                        <a href="/legal/terms" className="hover:text-slate-900 transition-colors">Terms of Service</a>
                        <a href="/legal/security" className="hover:text-slate-900 transition-colors">Security</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes flow-stream {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(400px);
                    }
                }
            `}</style>
        </footer>
    );
}
