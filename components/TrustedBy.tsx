'use client';

export default function TrustedBy() {
    return (
        <section className="py-20 border-b border-gray-100 bg-white">
            <div className="container mx-auto">
                <p className="text-center text-sm font-semibold text-slate-500 mb-12 uppercase tracking-[0.2em]">
                    Modeled after the operating principles of
                </p>
                {/* Desktop Grid Layout */}
                <div className="hidden md:flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-80">
                    <span className="text-2xl font-bold font-serif text-slate-900 tracking-tight">VANGUARD</span>
                    <span className="text-2xl font-bold font-sans text-slate-900 tracking-widest">BLACKROCK</span>
                    <span className="text-2xl font-extrabold font-mono text-slate-900">BRIDGEWATER</span>
                    <span className="text-2xl font-semibold italic text-slate-900">BERKSHIRE</span>
                    <span className="text-2xl font-bold text-slate-900">SEQUOIA</span>
                    <span className="text-2xl font-medium font-serif text-slate-900">McKinsey</span>
                </div>

                {/* Mobile Marquee Layout */}
                <div className="md:hidden relative overflow-hidden h-12">
                    <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap px-4">
                        <span className="text-xl font-bold font-serif text-slate-900 tracking-tight">VANGUARD</span>
                        <span className="text-xl font-bold font-sans text-slate-900 tracking-widest">BLACKROCK</span>
                        <span className="text-xl font-extrabold font-mono text-slate-900">BRIDGEWATER</span>
                        <span className="text-xl font-semibold italic text-slate-900">BERKSHIRE</span>
                        <span className="text-xl font-bold text-slate-900">SEQUOIA</span>
                        <span className="text-xl font-medium font-serif text-slate-900">McKinsey</span>
                        {/* Repeat for seamless loop */}
                        <span className="text-xl font-bold font-serif text-slate-900 tracking-tight">VANGUARD</span>
                        <span className="text-xl font-bold font-sans text-slate-900 tracking-widest">BLACKROCK</span>
                    </div>
                    {/* Fade Edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </div>
        </section>
    );
}
