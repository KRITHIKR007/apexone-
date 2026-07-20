'use client';

import React from 'react';

const EDU_LOGS = [
    { time: '10:14:01', type: 'info', msg: 'Apex.EDU Campus Node... [OK]' },
    { time: '10:14:03', type: 'success', msg: 'Pre-University Cohort Synced' },
    { time: '10:14:05', type: 'warning', msg: 'Learning Gap Flagged (Math 101)' },
    { time: '10:14:06', type: 'action', msg: '>> Faculty Alert Dispatched' },
    { time: '10:14:08', type: 'success', msg: 'Research Sandbox Secured (CIIP)' },
    { time: '10:14:10', type: 'info', msg: 'Campus Operations Normal' },
];

function LiveEduConsole() {
    const [logs, setLogs] = React.useState(EDU_LOGS.slice(0, 3));
    const [index, setIndex] = React.useState(3);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                const next = (prev + 1) % EDU_LOGS.length;
                setLogs(current => {
                    const newLogs = [...current, EDU_LOGS[prev % EDU_LOGS.length]];
                    if (newLogs.length > 3) newLogs.shift();
                    return newLogs;
                });
                return next;
            });
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="border-t border-white/5 pt-3 mt-4">
            <div className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest font-bold font-mono">Live Campus Event Stream</div>
            <div ref={scrollRef} className="font-mono text-[10px] space-y-1.5 h-[60px] overflow-hidden relative">
                {logs.map((log, i) => (
                    <div key={i} className={`flex gap-2 items-center animate-in fade-in slide-in-from-bottom-1 duration-300 ${log.type === 'warning' ? 'text-amber-400' :
                        log.type === 'action' ? 'text-blue-400 font-bold' :
                            'opacity-80'
                        }`}>
                        <span className="text-slate-600">[{log.time}]</span>
                        <span className={`${log.type === 'success' ? 'text-emerald-400' :
                            log.type === 'warning' ? 'text-amber-400' :
                                'text-slate-300'
                            }`}>
                            {log.msg}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ApexEDU() {
    return (
        <section className="py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left Column: Narrative */}
                    <div className="lg:w-1/2 space-y-8">
                        {/* Status Chip */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest">
                                Academic Engine Active
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
                            Apex.<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite] tracking-tight border-r-4 border-blue-600 pr-2">EDU</span>
                        </h2>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                            <strong className="text-slate-900">ApexOne Studios' Academic Operating System.</strong><br />
                            Unifying admissions, student progress, and campus operations into a single clean system.
                        </p>

                        <div className="pt-8 border-t border-slate-100 space-y-6">
                            <EduFeatureRow
                                title="Pre-University & Academies"
                                desc="Automates grading feedback, attendance, and parent updates so teachers can focus on student growth."
                            />
                            <EduFeatureRow
                                title="Universities & Campuses"
                                desc="Spots learning gaps weeks before exams and brings complete clarity to multi-faculty operations."
                            />
                            <EduFeatureRow
                                title="Graduate & Research Schools"
                                desc="Keeps groundbreaking academic research, patents, and thesis data 100% secure and private."
                            />
                        </div>

                        <div className="pt-8">
                            <a href="/products/apex-edu" className="group inline-flex items-center gap-3 text-blue-600 font-mono text-sm tracking-widest uppercase hover:text-blue-700 transition-colors">
                                <span className="border-b border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-300">
                                    View Architecture
                                </span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: High-Fidelity Terminal */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            {/* Scanner Line Accent */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-30 animate-scan pointer-events-none"></div>

                            {/* Main Dark Terminal */}
                            <div className="bg-[#050505] rounded-xl border border-slate-900/10 shadow-2xl shadow-blue-900/10 overflow-hidden relative">
                                {/* Header */}
                                <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between backdrop-blur-sm">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono">
                                        root@apex-edu:~
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-4 md:p-6 font-mono text-[10px] md:text-sm h-[280px] md:h-[400px] overflow-hidden text-slate-300 relative bg-black/50 overflow-y-auto terminal-scrollbar">

                                    <div className="flex gap-3 items-center opacity-60">
                                        <span className="text-blue-500">➜</span>
                                        <span>Initialising Campus Intelligence Node... [OK]</span>
                                    </div>

                                    <div className="space-y-2 mt-4">
                                        <div className="flex justify-between text-slate-600 text-[8px] md:text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">
                                            <span>INSTITUTION MODULE</span>
                                            <span>STATUS</span>
                                        </div>
                                        <div className="flex justify-between text-slate-300 text-xs">
                                            <span>Pre-University Analytics</span>
                                            <span className="text-emerald-400 font-bold">ONLINE</span>
                                        </div>
                                        <div className="flex justify-between text-slate-300 text-xs">
                                            <span>Campus Operations Bridge</span>
                                            <span className="text-blue-400 font-bold font-mono">ACTIVE</span>
                                        </div>
                                        <div className="flex justify-between text-slate-300 text-xs">
                                            <span>Research IP Protection</span>
                                            <span className="text-emerald-400 font-bold">SECURED</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-center text-blue-400 font-bold animate-pulse mt-6 text-[9px] md:text-xs">
                                        <span>&gt;&gt; APEX.EDU INSTITUTIONAL HARMONY ACHIEVED</span>
                                    </div>

                                    {/* Live Event Stream */}
                                    <LiveEduConsole />

                                    {/* Decoration Glow */}
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Outer Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-transparent blur-2xl -z-10 group-hover:from-blue-500/20 transition-all duration-500"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function EduFeatureRow({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shadow-[0_0_8px_rgba(59,130,246,0.6)] flex-shrink-0"></div>
            <div>
                <h3 className="text-slate-900 font-bold text-lg">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-1 max-w-sm">{desc}</p>
            </div>
        </div>
    );
}
