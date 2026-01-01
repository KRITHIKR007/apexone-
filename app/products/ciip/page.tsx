'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function CIIPPage() {
    return (
        <main className="bg-black min-h-screen text-emerald-50 font-mono selection:bg-emerald-900 selection:text-white">
            <Navigation />

            <div className="pt-32 pb-10 container">
                <div className="border border-emerald-900/50 bg-emerald-950/10 rounded-lg p-2 mb-8 inline-flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
                    <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase">System Operational // v4.2.0</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
                    CIIP <span className="text-emerald-600">Protocol</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl leading-relaxed font-sans">
                    Corporate Intelligence & Integrity Platform. The invisible defensive layer that ensures your code, infrastructure, and AI systems are compliant, secure, and performant by default.
                </p>
            </div>

            {/* Dashboard / Console View */}
            <section className="pb-20">
                <div className="container">
                    <div className="bg-[#0c0c0c] border border-emerald-900/30 rounded-xl overflow-hidden shadow-2xl">
                        {/* Fake Browser/Terminal Header */}
                        <div className="bg-emerald-950/20 border-b border-emerald-900/30 p-4 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                            </div>
                            <div className="text-xs text-emerald-700 font-mono">root@apex-ciip:~</div>
                        </div>

                        {/* Grid Content */}
                        <div className="p-8 grid lg:grid-cols-3 gap-8">

                            {/* Column 1: Live Metrics */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">Real-Time Telemetry</h3>
                                <div className="space-y-4">
                                    {[
                                        { label: "Code Integrity", val: "99.98%", status: "OPTIMAL", color: "text-emerald-400" },
                                        { label: "Active Nodes", val: "4,102", status: "ONLINE", color: "text-emerald-400" },
                                        { label: "Threats Blocked", val: "14,204", status: "24H", color: "text-amber-400" },
                                        { label: "PII Leaks", val: "0", status: "SECURE", color: "text-emerald-400" },
                                        { label: "System Latency", val: "12ms", status: "FAST", color: "text-blue-400" }
                                    ].map((stat) => (
                                        <div key={stat.label} className="flex justify-between items-center group cursor-default">
                                            <span className="text-slate-500 text-sm group-hover:text-emerald-500 transition-colors">{stat.label}</span>
                                            <div className="text-right">
                                                <div className={`font-bold font-mono text-lg ${stat.color}`}>{stat.val}</div>
                                                <div className="text-[10px] text-slate-600 tracking-widest uppercase">{stat.status}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mini Graph Area */}
                                <div className="h-32 bg-emerald-900/5 rounded border border-emerald-900/20 flex items-end justify-between px-2 pb-2 gap-1">
                                    {[40, 60, 45, 70, 85, 60, 75, 50, 65, 90, 80, 95, 100, 90, 85, 70, 60, 80, 90, 100].map((h, i) => (
                                        <div key={i} style={{ height: `${h}%` }} className="w-full bg-emerald-500/20 hover:bg-emerald-500 transition-colors"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2: Attack Vector Map */}
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">Global Threat Visualization</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-emerald-950/30 rounded-lg p-6 border border-emerald-900/30 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-3 opacity-20">
                                            <svg className="w-24 h-24 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                                        </div>
                                        <h4 className="text-emerald-400 font-bold mb-2">Codebase Scanner</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                            Continuous AST (Abstract Syntax Tree) parsing detects hardcoded secrets, SQL injections, and insecure dependencies before commit.
                                        </p>
                                        <div className="space-y-2 text-xs font-mono text-slate-500">
                                            <div className="flex justify-between border-b border-emerald-900/30 pb-1">
                                                <span>Scan #882_19A</span>
                                                <span className="text-emerald-600">PASSED</span>
                                            </div>
                                            <div className="flex justify-between border-b border-emerald-900/30 pb-1">
                                                <span>Scan #882_20B</span>
                                                <span className="text-emerald-600">PASSED</span>
                                            </div>
                                            <div className="flex justify-between border-b border-emerald-900/30 pb-1">
                                                <span>Scan #883_01X</span>
                                                <span className="text-emerald-600">PASSED</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-red-950/10 rounded-lg p-6 border border-red-900/30 relative overflow-hidden group hover:bg-red-950/20 transition-colors">
                                        <h4 className="text-red-400 font-bold mb-2">Active Defense</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                            Real-time WAF (Web Application Firewall) blocking anomalous traffic patterns and DDoS attempts.
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-16 h-16 flex items-center justify-center">
                                                <svg className="w-16 h-16 text-red-900 animate-spin-slow" viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                                                </svg>
                                                <span className="font-bold text-red-500 text-xs text-center">LIVE</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[10px] uppercase text-red-800 font-bold mb-1">Current Load</div>
                                                <div className="h-2 bg-red-950 rounded-full overflow-hidden">
                                                    <div className="h-full w-[12%] bg-red-600 animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stack Trace / Logs */}
                                <div className="bg-black p-4 rounded border border-slate-800 font-mono text-[10px] text-slate-500 h-32 overflow-hidden relative">
                                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent"></div>
                                    <p><span className="text-blue-500">[INFO]</span> 10:42:01 - Initializing CIIP wrapper for next-server...</p>
                                    <p><span className="text-emerald-500">[OK]</span> 10:42:02 - Environment variables sanitized.</p>
                                    <p><span className="text-emerald-500">[OK]</span> 10:42:02 - PII filters loaded (Regex Pattern v9.2).</p>
                                    <p><span className="text-amber-500">[WARN]</span> 10:42:05 - Suspicious payload detected from IP 192.168.0.x (Blocked).</p>
                                    <p><span className="text-emerald-500">[OK]</span> 10:42:06 - Deployment successful. Hash: 8f92a1.</p>
                                    <p><span className="text-blue-500">[INFO]</span> 10:42:10 - Watching for file changes...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Matrix */}
            <section className="py-20 border-t border-slate-900">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white font-sans">Compliance Standards</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-emerald-900/50 text-slate-500 text-xs uppercase tracking-widest">
                                    <th className="py-4 px-6">Access Control</th>
                                    <th className="py-4 px-6">Data Encryption</th>
                                    <th className="py-4 px-6">Audit Logging</th>
                                    <th className="py-4 px-6 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300 font-mono text-sm">
                                {[
                                    { std: "SOC 2 Type II", enc: "AES-256 (At Rest)", log: "Immutable / 7 Years", status: "VERIFIED" },
                                    { std: "GDPR ( EU )", enc: "TLS 1.3 (In Transit)", log: "Anonymized", status: "COMPLIANT" },
                                    { std: "HIPAA (Healthcare)", enc: "End-to-End", log: "Patient Access Logged", status: "READY" },
                                    { std: "ISO 27001", enc: "Key Management (KMS)", log: "Centralized SIEM", status: "CERTIFIED" }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-900 hover:bg-slate-900/50 transition-colors group">
                                        <td className="py-6 px-6 font-bold text-white group-hover:text-emerald-400 transition-colors">{row.std}</td>
                                        <td className="py-6 px-6 text-slate-400">{row.enc}</td>
                                        <td className="py-6 px-6 text-slate-400">{row.log}</td>
                                        <td className="py-6 px-6 text-right">
                                            <span className="inline-block px-2 py-1 bg-emerald-950 border border-emerald-900 text-emerald-500 text-[10px] rounded tracking-widest">
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Final Technical Specs Grid */}
            <section className="py-20 bg-[#050505]">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8 text-white font-sans">Technical Specifications</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: "Deployment", value: "Docker / K8s Sidecar" },
                            { label: "Overhead", value: "< 14ms Latency" },
                            { label: "Supported Langs", value: "Node, Python, Go, Rust" },
                            { label: "Integration", value: "CI/CD Pipeline (GitHub)" },
                            { label: "Alerting", value: "Slack, PagerDuty, Email" },
                            { label: "Scanning", value: "Static (SAST) + Dynamic (DAST)" },
                            { label: "AI Model", value: "Proprietary Threat LLM" },
                            { label: "Region", value: "Multi-Cloud / On-Prem" },
                        ].map((spec) => (
                            <div key={spec.label} className="p-4 border border-slate-800 rounded hover:border-emerald-900/50 transition-colors">
                                <div className="text-xs text-slate-500 uppercase mb-1">{spec.label}</div>
                                <div className="text-sm font-bold text-slate-200 font-mono">{spec.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
