'use client';

export default function CIIP() {
    return (
        <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[400px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: The Narrative */}
                    <div className="lg:w-1/2 space-y-8">
                        {/* Status Chip */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-900/50 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-mono font-bold text-emerald-500 tracking-widest uppercase">
                                System Status: Secure
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95]">
                            CIIP <span className="text-slate-600 block text-3xl md:text-5xl mt-2 tracking-tight">Protocol v4.0</span>
                        </h2>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                            Corporate Intelligence & Integrity Platform. The invisible defensive layer that allows your enterprise to adopt AI without leaking IP.
                        </p>

                        <div className="pt-8 border-t border-white/5 space-y-6">
                            <FeatureRow
                                title="Zero-Trust Architecture"
                                desc="We verify every prompt, API call, and data packet against your internal compliance matrix before it leaves your VPC."
                            />
                            <FeatureRow
                                title="Real-Time PII Redaction"
                                desc="Hardcoded secrets, credit card numbers, and patient data are automatically stripped and replaced with generic tokens."
                            />
                        </div>

                        <div className="pt-8">
                            <a href="/products/ciip" className="group inline-flex items-center gap-3 text-emerald-400 font-mono text-sm tracking-widest uppercase hover:text-emerald-300 transition-colors">
                                <span className="border-b border-emerald-500/0 group-hover:border-emerald-500/100 transition-all duration-300">
                                    Initiate Protocol
                                </span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: The High-Fidelity Interface */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            {/* The 'Scanner' Line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.5)] z-30 animate-scan pointer-events-none"></div>

                            {/* Main Terminal Window */}
                            <div className="bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden relative">
                                {/* Header */}
                                <div className="bg-black/50 px-4 py-3 border-b border-white/5 flex items-center justify-between backdrop-blur-sm">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#18181b] border border-white/10"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#18181b] border border-white/10"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#18181b] border border-white/10"></div>
                                    </div>
                                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                                        ciip_monitor_dkh2.sh
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 font-mono text-xs md:text-sm space-y-4 h-[400px] overflow-hidden text-slate-300 relative">

                                    {/* Line 1 */}
                                    <div className="flex gap-3 items-center opacity-40">
                                        <span className="text-slate-600">01</span>
                                        <span className="text-emerald-500">➜</span>
                                        <span>Initializing handshake with OpenAI API...</span>
                                    </div>

                                    {/* Line 2 */}
                                    <div className="flex gap-3 items-center opacity-40">
                                        <span className="text-slate-600">02</span>
                                        <span className="text-emerald-500">➜</span>
                                        <span>Verifying TLS 1.3 certificate... [OK]</span>
                                    </div>

                                    {/* Line 3: The Danger */}
                                    <div className="flex gap-3 items-start bg-red-950/10 -mx-6 px-6 py-2 border-l-2 border-red-500/50">
                                        <span className="text-slate-600 mt-1">03</span>
                                        <div className="flex-1">
                                            <div className="text-red-400 font-bold mb-1 flex items-center gap-2">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                THREAT DETECTED
                                            </div>
                                            <div className="text-slate-300">
                                                Payload contains sensitive keys: <br />
                                                <code className="bg-red-500/10 text-red-300 px-1 rounded">AWS_ACCESS_KEY_ID="AKIA..."</code>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Line 4: Intervention */}
                                    <div className="flex gap-3 items-center text-emerald-400 font-bold animate-pulse">
                                        <span className="text-slate-600">04</span>
                                        <span>&gt;&gt; CIIP INTERVENTION ACTIVE</span>
                                    </div>

                                    {/* Line 5: Resolution */}
                                    <div className="flex gap-3 items-start bg-emerald-950/10 -mx-6 px-6 py-2 border-l-2 border-emerald-500/50">
                                        <span className="text-slate-600 mt-1">05</span>
                                        <div className="flex-1">
                                            <div className="text-emerald-400 font-bold mb-1">REDACTION COMPLETE</div>
                                            <div className="text-slate-300">
                                                Payload sanitized. Replaced with hash:<br />
                                                <code className="text-emerald-300">e8293c... [SECURE]</code>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decoration Lines */}
                                    <div className="absolute bottom-6 left-6 right-6 h-px bg-white/5"></div>
                                    <div className="absolute bottom-6 left-6 w-20 h-px bg-emerald-500/50"></div>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-transparent blur-2xl -z-10 group-hover:from-emerald-500/30 transition-all duration-500"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function FeatureRow({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shadow-[0_0_8px_rgba(16,185,129,0.6)] flex-shrink-0"></div>
            <div>
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-1 max-w-sm">{desc}</p>
            </div>
        </div>
    );
}
