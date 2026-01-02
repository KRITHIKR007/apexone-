'use client';

export default function TrustedBy() {
    return (
        <section className="py-20 border-b border-gray-100 bg-white">
            <div className="container mx-auto">
                <p className="text-center text-sm font-semibold text-gray-500 mb-12 uppercase tracking-[0.2em]">
                    Modeled after the operating principles of
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-80">
                    {/* Text-based Logos for minimal premium feel - Using names that evoke stability giving "High Finance/Tech" vibes */}
                    <span className="text-2xl font-bold font-serif text-gray-900 tracking-tight">VANGUARD</span>
                    <span className="text-2xl font-bold font-sans text-gray-900 tracking-widest">BLACKROCK</span>
                    <span className="text-2xl font-extrabold font-mono text-gray-900">BRIDGEWATER</span>
                    <span className="text-2xl font-semibold italic text-gray-900">BERKSHIRE</span>
                    <span className="text-2xl font-bold text-gray-900">SEQUOIA</span>
                    <span className="text-2xl font-medium font-serif text-gray-900">McKinsey</span>
                </div>
            </div>
        </section>
    );
}
