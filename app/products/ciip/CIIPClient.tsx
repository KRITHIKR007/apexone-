'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function CIIPClient() {
    return (
        <main className="bg-[#020202] min-h-screen text-slate-300 font-sans selection:bg-emerald-900 selection:text-white">
            <Navigation />

            {/* Custom Hero Section */}
            <div className="pt-32 pb-20 md:pt-48 md:pb-32 text-center relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-emerald-900/10 to-teal-900/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tl from-emerald-900/10 to-indigo-900/10 rounded-full blur-[100px]" />
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                </div>

                <div className="container relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/30 border border-emerald-900/50 mb-10 transform hover:scale-105 transition-transform duration-300 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">System Operational</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1] md:leading-[0.9]">
                        CIIP <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-700">Protocol</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest mb-6 font-mono">
                        Corporate Intelligence & Integrity Platform
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
                        ApexOne Studios’ Autonomous Cyber Defense & Compliance Brain. <br />
                        <span className="text-emerald-500/80">The invisible nervous system that protects every line of code.</span>
                    </p>
                </div>
            </div>

            {/* Core Philosophy */}
            <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="container max-w-4xl text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6"> Golden Goose grows your business.<br /> <span className="text-emerald-500">CIIP ensures nothing can destroy it.</span></h3>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        CIIP is not a security tool. It is the invisible nervous system that protects every line of code, every customer record, every API call, and every AI model inside your company.
                    </p>
                </div>
            </section>

            {/* The Core Problem */}
            <section className="py-24 relative">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">The Core Problem CIIP Solves</h2>
                            <p className="text-lg text-slate-400 mb-6">
                                Modern companies are built on Cloud infrastructure, APIs, Microservices, AI models, Remote teams, and Third-party vendors.
                            </p>
                            <div className="p-6 bg-red-950/20 border-l-4 border-red-500 rounded-r-xl mb-8">
                                <h4 className="text-red-400 font-bold mb-2 uppercase tracking-wide text-xs">The Equation</h4>
                                <ul className="space-y-2 font-mono text-sm text-red-200">
                                    <li>&gt; Attack surface = <span className="text-white font-bold">Infinite</span></li>
                                    <li>&gt; Compliance = <span className="text-white font-bold">Fragmented</span></li>
                                    <li>&gt; Risk = <span className="text-white font-bold">Invisible</span></li>
                                </ul>
                            </div>
                            <p className="text-slate-400 mb-6">
                                Most companies discover breaches after damage. CIIP changes the model to: <span className="text-white font-bold">Detect → Predict → Block → Prove compliance</span> — in real time.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>
                            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl">
                                <div className="space-y-4">
                                    {['Cloud Infrastructure', 'Public APIs', 'Microservices Mesh', 'AI Models', 'Remote Teams'].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                                            <span className="text-slate-300 font-mono text-sm">{item}</span>
                                            <div className="flex gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 delay-75"></span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 delay-150"></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Total Attack Surface Monitored</div>
                                    <div className="text-3xl font-bold text-white font-mono">100% Coverage</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Neural Architecture */}
            <section className="py-24 bg-[#050505]">
                <div className="container">
                    <div className="text-center mb-20">
                        <span className="text-emerald-500 font-mono font-bold tracking-widest uppercase text-sm mb-2 block">System Architecture</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">CIIP Neural Architecture</h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">CIIP runs as a secure AI layer across your entire tech stack. It sees everything. It trusts nothing. It records everything.</p>
                    </div>

                    <div className="space-y-24 max-w-6xl mx-auto">

                        {/* Layer 1 */}
                        <div className="grid md:grid-cols-12 gap-8 items-start relative">
                            <div className="md:col-span-3 sticky top-32">
                                <div className="text-6xl font-black text-white/5 mb-4">01</div>
                                <h3 className="text-xl font-bold text-white mb-2">Universal Visibility</h3>
                                <p className="text-slate-500 text-sm">Creates a real-time digital twin of your company’s entire attack surface.</p>
                            </div>
                            <div className="md:col-span-9 grid sm:grid-cols-2 gap-4">
                                <Card title="Deployment" items={['Docker Sidecars', 'K8s Agents', 'Cloud API Connectors', 'GitHub / CI Hooks']} />
                                <Card title="Integrations" items={['AWS / GCP / Azure', 'GitHub / GitLab', 'Databases / S3', 'Web & Mobile Apps']} />
                            </div>
                        </div>

                        {/* Layer 2 */}
                        <div className="grid md:grid-cols-12 gap-8 items-start relative border-t border-white/5 pt-16">
                            <div className="md:col-span-3 sticky top-32">
                                <div className="text-6xl font-black text-white/5 mb-4">02</div>
                                <h3 className="text-xl font-bold text-white mb-2">Code & Model Integrity</h3>
                                <p className="text-slate-500 text-sm">Continuously parses source code and AI pipelines using AST and graph analysis.</p>
                            </div>
                            <div className="md:col-span-9 bg-[#111] rounded-xl overflow-hidden border border-white/10">
                                <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex justify-between items-center text-xs font-mono text-slate-400">
                                    <span>THREAT_DETECTION.LOG</span>
                                    <span className="text-emerald-500">LIVE SCANNING...</span>
                                </div>
                                <div className="p-6">
                                    <table className="w-full text-left text-sm font-mono text-slate-400">
                                        <thead>
                                            <tr className="border-b border-white/10 text-white opacity-50">
                                                <th className="pb-4">Threat Type</th>
                                                <th className="pb-4">What CIIP Sees</th>
                                                <th className="pb-4 text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="space-y-4">
                                            {[
                                                ['Hardcoded Secrets', 'API keys, tokens, passwords', 'REDACT'],
                                                ['Injections', 'SQL, NoSQL, Shell Command', 'BLOCK'],
                                                ['Supply Chain', 'Insecure npm/pip/docker', 'FLAG'],
                                                ['Backdoors', 'Obfuscated logic patterns', 'QUARANTINE'],
                                                ['Prompt Injection', 'AI Jailbreak attempts', 'FILTER'],
                                            ].map(([risk, desc, action], i) => (
                                                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                    <td className="py-3 text-red-400">{risk}</td>
                                                    <td className="py-3">{desc}</td>
                                                    <td className="py-3 text-right text-emerald-500 font-bold">{action}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Layer 3 */}
                        <div className="grid md:grid-cols-12 gap-8 items-start relative border-t border-white/5 pt-16">
                            <div className="md:col-span-3 sticky top-32">
                                <div className="text-6xl font-black text-white/5 mb-4">03</div>
                                <h3 className="text-xl font-bold text-white mb-2">Runtime Defense Fabric</h3>
                                <p className="text-slate-500 text-sm">A distributed AI firewall mesh that runs once code is live.</p>
                            </div>
                            <div className="md:col-span-9">
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                    {['Credential Stuffing', 'Bot Attacks', 'DDoS', 'API Abuse', 'Injection Payloads', 'Data Exfiltration'].map(threat => (
                                        <div key={threat} className="p-4 bg-red-950/10 border border-red-900/40 rounded flex items-center gap-3">
                                            <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                            <span className="text-red-200 text-sm font-medium">{threat}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-6 text-slate-400 text-sm">Every request is evaluated by Behavior Model, Risk Score, and Threat History. Then: <span className="text-white">Allowed, Throttled, Sandboxed, or Killed.</span></p>
                            </div>
                        </div>

                        {/* Layer 4 */}
                        <div className="grid md:grid-cols-12 gap-8 items-start relative border-t border-white/5 pt-16">
                            <div className="md:col-span-3 sticky top-32">
                                <div className="text-6xl font-black text-white/5 mb-4">04</div>
                                <h3 className="text-xl font-bold text-white mb-2">PII & Compliance Guardian</h3>
                                <p className="text-slate-500 text-sm">Tracks Names, Emails, Health Data, Payment Info across DBs, Logs, and APIs.</p>
                            </div>
                            <div className="md:col-span-9">
                                <div className="bg-emerald-950/10 border border-emerald-900/40 p-8 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
                                    <h4 className="text-xl font-bold text-emerald-400 mb-4">Continuous Compliance</h4>
                                    <div className="grid grid-cols-3 gap-8 text-center text-white font-mono">
                                        <div>
                                            <div className="text-3xl font-bold mb-1">GDPR</div>
                                            <div className="text-xs text-slate-500">READY</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold mb-1">HIPAA</div>
                                            <div className="text-xs text-slate-500">READY</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold mb-1">SOC 2</div>
                                            <div className="text-xs text-slate-500">READY</div>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-center text-slate-400">If PII moves where it shouldn't, CIIP <span className="text-white">blocks it, masks it, logs it, and reports it.</span> <br /> No audits. No spreadsheets. Just proof.</p>
                                </div>
                            </div>
                        </div>

                        {/* Layer 5 & 6 Combined */}
                        <div className="grid md:grid-cols-2 gap-8 border-t border-white/5 pt-16">
                            <div className="bg-[#111] p-8 rounded-2xl border border-white/10 group hover:border-emerald-500/30 transition-colors">
                                <div className="text-4xl font-black text-white/10 mb-4">05</div>
                                <h3 className="text-xl font-bold text-white mb-3">Threat Intelligence Brain</h3>
                                <p className="text-slate-400 text-sm mb-6">Runs a proprietary Threat LLM trained on exploit DBs, zero-day patterns, and customer telemetry. Predicts attacks before they happen.</p>
                                <div className="bg-slate-800 p-3 rounded text-xs font-mono text-emerald-400">
                                    "This API pattern matches early-stage fraud seen in 4 other companies. Lock down now."
                                </div>
                            </div>
                            <div className="bg-[#111] p-8 rounded-2xl border border-white/10 group hover:border-emerald-500/30 transition-colors">
                                <div className="text-4xl font-black text-white/10 mb-4">06</div>
                                <h3 className="text-xl font-bold text-white mb-3">Compliance Audit Ledger</h3>
                                <p className="text-slate-400 text-sm mb-6">Every action is recorded into an immutable audit log. Who access what, when, from where, and what was done.</p>
                                <div className="text-white font-bold text-sm">
                                    CIIP turns security into <br /><span className="text-emerald-500">court-grade evidence.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Real World Scenarios */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">Real World CIIP Scenarios</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ScenarioCard
                            title="The Silent Breach"
                            desc="A fintech company's API key leaks on GitHub."
                            result="CIIP detects the key, revokes it, rotates credentials, and notifies security before a single rupee is stolen."
                            icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                        <ScenarioCard
                            title="AI Data Poisoning"
                            desc="A competitor tries to inject false data into your AI model."
                            result="CIIP detects anomalous training data, quarantines the batch, and preserves clean model state. Your AI remains trustworthy."
                            icon="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                        <ScenarioCard
                            title="Compliance Audit"
                            desc="A regulator asks: 'Show me all access to patient data in the 6 months.'"
                            result="CIIP produces every access, every user, every reason, and every record in seconds."
                            icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </div>
                </div>
            </section>

            {/* Strategic Value */}
            <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-emerald-950/20 text-center">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-white mb-8">Why CIIP is Strategic for ApexOne</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-white/5 rounded-xl">
                            <h4 className="text-xl font-bold text-slate-300 mb-2">Golden Goose</h4>
                            <p className="text-slate-500">Makes companies smarter. Optimizes profit.</p>
                        </div>
                        <div className="p-6 bg-emerald-950/30 border border-emerald-900/50 rounded-xl">
                            <h4 className="text-xl font-bold text-emerald-400 mb-2">CIIP Protocol</h4>
                            <p className="text-emerald-200/70">Makes them unbreakable. Protects survival.</p>
                        </div>
                    </div>
                    <p className="text-2xl text-slate-300">
                        Together they form the <strong className="text-white">ApexOne Intelligence Layer</strong>.<br />
                        <span className="text-lg text-slate-500 mt-4 block">This is how ApexOne stops being an agency and becomes a defense-grade AI corporation.</span>
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function Card({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="bg-white/5 border border-white/5 p-6 rounded-lg">
            <h4 className="text-emerald-400 font-bold mb-4 uppercase text-xs tracking-wider">{title}</h4>
            <ul className="space-y-2">
                {items.map(item => (
                    <li key={item} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ScenarioCard({ title, desc, result, icon }: { title: string, desc: string, result: string, icon: string }) {
    return (
        <div className="bg-[#111] p-8 rounded-2xl border border-white/10 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
            <p className="text-slate-500 text-sm mb-4 border-b border-white/5 pb-4">{desc}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{result}</p>
        </div>
    );
}
