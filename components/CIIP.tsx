'use client';

export default function CIIP() {
    return (
        <section className="section bg-slate-900 text-white relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Side: The "Live Redaction" Terminal */}
                    <div className="relative order-2 lg:order-1 group">
                        {/* Terminal Window */}
                        <div className="bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm relative z-20">
                            {/* Terminal Bar */}
                            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                <div className="ml-2 text-slate-500 text-xs">ciip-protection-layer — bash</div>
                            </div>

                            {/* Terminal Content */}
                            <div className="p-6 space-y-4">
                                {/* Step 1: User Action */}
                                <div className="opacity-50">
                                    <div className="text-slate-500 mb-1 flex items-center gap-2">
                                        <span className="text-blue-400">➜</span>
                                        <span>User Input (Developer):</span>
                                    </div>
                                    <div className="bg-slate-900/50 p-3 rounded border border-white/5 text-slate-300">
                                        "Debug this code: const AWS_KEY = <span className="text-red-400 font-bold">'AKIA_2492_X829'</span>;"
                                    </div>
                                </div>

                                {/* Step 2: CIIP Intervention */}
                                <div className="relative">
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-indigo-500 rounded-full"></div>
                                    <div className="text-indigo-400 font-bold mb-1 flex items-center gap-2 animate-pulse">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        CIIP INTERCEPT DETECTED
                                    </div>
                                    <div className="text-slate-400 text-xs mb-2 pl-6">
                                        Scanning for PII, Secrets, and IP markers...
                                    </div>
                                </div>

                                {/* Step 3: Safe Output */}
                                <div>
                                    <div className="text-slate-500 mb-1 flex items-center gap-2">
                                        <span className="text-emerald-400">➜</span>
                                        <span>Sent to Public LLM:</span>
                                    </div>
                                    <div className="bg-emerald-500/10 p-3 rounded border border-emerald-500/20 text-emerald-100">
                                        "Debug this code: const AWS_KEY = <span className="bg-emerald-500/30 text-emerald-300 px-1 rounded font-bold">[REDACTED_SECRET_ID_92]</span>;"
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -right-6 -bottom-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-30 hidden md:block animate-[float_4s_ease-in-out_infinite]">
                            <div className="text-xs text-slate-400 mb-1">Total Threats Blocked</div>
                            <div className="text-2xl font-bold text-white">14,209</div>
                        </div>

                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] -z-10 transition-all duration-500 group-hover:bg-indigo-500/30" />
                    </div>

                    {/* Content Side: Relatable Copy */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium text-xs uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
                            Enterprise Guardrails
                        </div>

                        <h3 className="text-2xl font-bold text-indigo-400 mb-2 tracking-wide font-mono">
                            CIIP: Code Intelligence & Integrity Platform
                        </h3>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Your devs want speed.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">Your lawyers want safety.</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            It's the modern dilemma: If you block ChatGPT, your team falls behind.
                            If you allow it, you risk pasting your roadmap into a public training model.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">The "Middle-Man" Architecture</h4>
                                    <p className="text-slate-400 text-sm mt-1">
                                        We sit between your employees and the AI. We strip PII, secrets, and IP *before* the request leaves your servers.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Air-Gapped Local Models</h4>
                                    <p className="text-slate-400 text-sm mt-1">
                                        For "Level 5" sensitive data, we automatically route requests to on-prem Llama-3 instances. Zero external pulses.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
