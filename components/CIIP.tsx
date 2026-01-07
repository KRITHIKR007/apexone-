
import React from 'react';

const LOGS = [
    { time: '14:20:01', type: 'info', msg: 'Neural Layer... [OK]' },
    { time: '14:20:02', type: 'success', msg: 'TLS 1.3 Handshake' },
    { time: '14:20:05', type: 'warning', msg: 'Scanning Packet...' },
    { time: '14:20:06', type: 'error', msg: 'PII LEAK DETECTED' },
    { time: '14:20:06', type: 'action', msg: '>> AUTO-REDACTING' },
    { time: '14:20:07', type: 'success', msg: 'Payload Sanitized' },
    { time: '14:20:08', type: 'info', msg: 'Monitoring...' },
];

function LiveConsole() {
    const [logs, setLogs] = React.useState(LOGS.slice(0, 3));
    const [index, setIndex] = React.useState(3);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                const next = (prev + 1) % LOGS.length;
                setLogs(current => {
                    const newLogs = [...current, LOGS[prev % LOGS.length]];
                    if (newLogs.length > 3) newLogs.shift(); // Keep only 3 logs for compact view
                    return newLogs;
                });
                return next;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="border-t border-white/5 pt-3 mt-4">
            <div className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest font-bold">Real-time Audit Log</div>
            <div ref={scrollRef} className="font-mono text-[10px] space-y-1.5 h-[60px] overflow-hidden relative fade-mask">
                {logs.map((log, i) => (
                    <div key={i} className={`flex gap-2 items-center animate-in fade-in slide-in-from-bottom-1 duration-300 ${log.type === 'error' ? 'text-red-400' :
                        log.type === 'action' ? 'text-emerald-500 font-bold' :
                            'opacity-80'
                        }`}>
                        <span className="text-slate-600">[{log.time}]</span>
                        <span className={`${log.type === 'success' ? 'text-emerald-400' :
                            log.type === 'warning' ? 'text-amber-400' :
                                log.type === 'error' ? 'font-bold' :
                                    'text-slate-400'
                            }`}>
                            {log.msg}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CIIP() {
    return (
        <section className="py-32 bg-white text-slate-900 relative overflow-hidden">
            {/* Ambient Background Glows (Light Mode) */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[400px] bg-emerald-50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: The Narrative */}
                    <div className="lg:w-1/2 space-y-8">
                        {/* Status Chip */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
                                System Operational
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
                            Corporate Intelligence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite] tracking-tight border-r-4 border-emerald-600 pr-2 animate-[typewriter_1s_steps(2)_infinite]">Integrity Platform</span>
                        </h2>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                            <strong className="text-slate-900">ApexOne Studios' Autonomous Cyber Defense Brain.</strong><br />
                            The invisible nervous system that protects every line of code, every customer record, and every AI model.
                        </p>

                        <div className="pt-8 border-t border-slate-100 space-y-6">
                            <FeatureRow
                                title="Universal Visibility"
                                desc="Creates a real-time digital twin of your company’s entire attack surface. Sees everything, trusts nothing."
                            />
                            <FeatureRow
                                title="Runtime Defense Fabric"
                                desc="Blocks credential stuffing, DDoS, and injection payloads in real-time with a distributed AI firewall."
                            />
                        </div>

                        <div className="pt-8">
                            <a href="/products/ciip" className="group inline-flex items-center gap-3 text-emerald-600 font-mono text-sm tracking-widest uppercase hover:text-emerald-700 transition-colors">
                                <span className="border-b border-emerald-500/0 group-hover:border-emerald-500/100 transition-all duration-300">
                                    View Architecture
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

                            {/* Main Terminal Window (Kept Dark for Contrast) */}
                            <div className="bg-[#050505] rounded-xl border border-slate-900/10 shadow-2xl shadow-emerald-900/10 overflow-hidden relative">
                                {/* Header */}
                                <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between backdrop-blur-sm">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono">
                                        root@apex-ciip:~
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 font-mono text-xs md:text-sm h-[400px] overflow-hidden text-slate-300 relative bg-black/50 overflow-y-auto terminal-scrollbar">

                                    <div className="flex gap-3 items-center opacity-60">
                                        <span className="text-emerald-500">➜</span>
                                        <span>Initialising Neural Layer... [OK]</span>
                                    </div>

                                    <div className="space-y-2 mt-4">
                                        <div className="flex justify-between text-slate-600 text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">
                                            <span>Metric</span>
                                            <span>Status</span>
                                        </div>
                                        <div className="flex justify-between items-center group">
                                            <span className="text-slate-400">Code Integrity</span>
                                            <span className="text-emerald-400 font-bold">99.98%</span>
                                        </div>
                                        <div className="flex justify-between items-center group">
                                            <span className="text-slate-400">Threats Blocked</span>
                                            <span className="text-amber-400 font-bold">14,204</span>
                                        </div>
                                    </div>

                                    {/* Alert Box */}
                                    <div className="mt-6 pt-6 border-t border-white/5">
                                        <div className="flex gap-3 items-start bg-red-950/20 -mx-6 px-6 py-3 border-l-2 border-red-500/50">
                                            <div className="flex-1">
                                                <div className="text-red-400 font-bold mb-1 flex items-center gap-2">
                                                    <span className="animate-pulse">●</span> THREAT DETECTED
                                                </div>
                                                <div className="text-slate-400 mb-2 text-[10px]">
                                                    Suspicious payload detected:
                                                </div>
                                                <code className="block bg-black p-2 rounded text-red-300 text-[10px] border border-red-900/30">
                                                    POST /api/v1/users {'{'} "sql": "DROP..." {'}'}
                                                </code>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-center text-emerald-400 font-bold animate-pulse mt-4 text-[10px] md:text-xs">
                                        <span>&gt;&gt; CIIP AUTO-DEFENSE ENGAGED</span>
                                    </div>

                                    {/* Live Log Area */}
                                    <LiveConsole />

                                    {/* Decoration Lines */}
                                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-transparent blur-2xl -z-10 group-hover:from-emerald-500/20 transition-all duration-500"></div>
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
                <h3 className="text-slate-900 font-bold text-lg">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-1 max-w-sm">{desc}</p>
            </div>
        </div>
    );
}
