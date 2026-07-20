'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
    BookOpen,
    GraduationCap,
    ShieldCheck,
    Zap,
    Check,
    FileText,
    Lock,
    BarChart3,
    ArrowRight,
    ChevronRight,
    Sliders,
    Layers,
    Cpu,
    Database,
    RefreshCw,
    Activity,
    CheckCircle2,
    AlertTriangle,
    ShieldAlert
} from 'lucide-react';

// Flowchart Node Types
interface FlowNode {
    id: string;
    title: string;
    category: string;
    desc: string;
    metrics: string;
    status: string;
    icon: string;
}

const FLOW_NODES: FlowNode[] = [
    {
        id: 'ingestion',
        title: '01. Campus Data Ingestion',
        category: 'INPUT LAYER',
        desc: 'Continuous ingestion of raw signals from Canvas, Blackboard, attendance logs, and campus registration systems.',
        metrics: '1.2M events / min • 200+ Connectors',
        status: 'ACTIVE',
        icon: 'Database'
    },
    {
        id: 'core',
        title: '02. Apex.EDU Cognitive Core',
        category: 'ANALYSIS LAYER',
        desc: 'Neural learning path modeling, 60-day predictive retention analysis, and automated rubric evaluation.',
        metrics: 'Latency <8ms • Bayesian Telemetry',
        status: 'PROCESSING',
        icon: 'Cpu'
    },
    {
        id: 'security',
        title: '03. CIIP Security & IP Relay',
        category: 'PROTECTION LAYER',
        desc: 'Zero-knowledge encryption layer that sanitizes thesis data, grant proposals, and lab research prior to model processing.',
        metrics: 'FERPA & GDPR Compliant • AES-256',
        status: 'ENCRYPTED',
        icon: 'ShieldCheck'
    },
    {
        id: 'outputs',
        title: '04. Actionable Institutional Outputs',
        category: 'ACTION LAYER',
        desc: 'Automatic dispatches 60-day retention alerts, publishes auto-graded essay feedback, and updates executive board dashboards.',
        metrics: '40% Admin Hours Saved • Real-Time',
        status: 'DISPATCHED',
        icon: 'Zap'
    }
];

// Sample Essay Submissions for Experience 2
const SAMPLE_PAPERS = [
    {
        id: 'thesis',
        title: 'Ph.D. Thesis: Quantum Cryptography Protocols',
        author: 'Elena Rostova (Graduate Research)',
        logicScore: 96,
        citationStatus: '100% Verified (142 Sources)',
        clarityScore: 94,
        feedback: 'Exceptional mathematical rigor in Theorem 3.2. Prior-art analysis confirms 0 intellectual property conflicts.',
        risk: 'LOW RISK'
    },
    {
        id: 'cs',
        title: 'Undergraduate CS: Distributed Consensus Nodes',
        author: 'Marcus Chen (Senior Year)',
        logicScore: 88,
        citationStatus: '98% Verified (45 Sources)',
        clarityScore: 90,
        feedback: 'Strong understanding of Byzantine Fault Tolerance. Minor formatting adjustment recommended in Appendix B.',
        risk: 'LOW RISK'
    },
    {
        id: 'bio',
        title: 'Pre-College AP Bio: Synthetic Genomics',
        author: 'Aria Sharma (Academy Senior)',
        logicScore: 78,
        citationStatus: '92% Verified (18 Sources)',
        clarityScore: 82,
        feedback: 'Good overview of CRISPR-Cas9 mechanism. Suggested additional review of cellular transport mechanisms.',
        risk: 'MODERATE GUIDANCE'
    }
];

export default function ApexEduClient() {
    // Flowchart Node State
    const [activeNode, setActiveNode] = useState<FlowNode>(FLOW_NODES[0]);

    // Student Risk Calculator State (Experience 1)
    const [attendance, setAttendance] = useState<number>(82);
    const [gradeAvg, setGradeAvg] = useState<number>(74);
    const [lmsScore, setLmsScore] = useState<number>(6);

    // Calculated Retention Score
    const retentionProb = Math.min(99, Math.max(15, Math.round(attendance * 0.45 + gradeAvg * 0.40 + lmsScore * 2.2)));

    // Interactive Evaluator State (Experience 2)
    const [selectedPaper, setSelectedPaper] = useState(SAMPLE_PAPERS[0]);
    const [isApproved, setIsApproved] = useState<boolean>(false);

    // FAQ Accordion State
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <main className="bg-white text-slate-900 selection:bg-blue-500/30 min-h-screen">
            <Navigation />

            {/* Editorial Hero Header */}
            <div className="pt-32 pb-20 md:pt-48 md:pb-32 text-center relative overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tl from-purple-500/5 to-emerald-500/5 rounded-full blur-[80px]" />
                </div>

                <div className="container relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8 transform hover:scale-105 transition-transform duration-300">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">Academic Operating System // v4.2</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]">
                        Thinking Engine for<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Higher Education</span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                        Apex.EDU is not generic campus software. It is ApexOne's <strong>thinking layer</strong> for pre-universities, colleges, and research institutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="/contact"
                            className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white text-base font-bold rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
                        >
                            <span>Schedule Institutional Briefing</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#architecture-flowchart"
                            className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 border border-slate-200 text-base font-bold rounded-full hover:bg-slate-50 transition-all"
                        >
                            Explore Architecture Flowchart
                        </a>
                    </div>

                    {/* Visual Key Metrics Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto border-t border-b border-slate-200/80 py-8">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">40%</div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Admin Hours Saved</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">60 Days</div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Early Retention Lead</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">100%</div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Data Sovereignty</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">200+</div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Standard Connectors</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========================================================================= */}
            {/* FEATURE 1: INTERACTIVE ARCHITECTURE FLOWCHART DIAGRAM */}
            {/* ========================================================================= */}
            <section id="architecture-flowchart" className="section bg-slate-900 text-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-4">
                            System Flowchart Architecture
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Interactive Campus Data Flow.
                        </h2>
                        <p className="text-base text-slate-400 mt-4">
                            Click any node on the flowchart below to inspect real-time data ingestion, analysis layers, security gates, and actionable outputs.
                        </p>
                    </div>

                    {/* Flowchart Diagram Canvas */}
                    <div className="max-w-6xl mx-auto bg-black/40 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl">
                        {/* Flowchart Connections Header */}
                        <div className="grid md:grid-cols-4 gap-4 mb-8 relative">
                            {FLOW_NODES.map((node, index) => (
                                <button
                                    key={node.id}
                                    onClick={() => setActiveNode(node)}
                                    className={`p-5 rounded-2xl border text-left transition-all duration-300 relative ${activeNode.id === node.id
                                            ? 'bg-blue-600/20 border-blue-500 shadow-xl shadow-blue-500/20'
                                            : 'bg-white/5 border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400">
                                            {node.category}
                                        </span>
                                        <span className={`w-2 h-2 rounded-full ${activeNode.id === node.id ? 'bg-blue-400 animate-ping' : 'bg-slate-600'}`} />
                                    </div>
                                    <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                                    <p className="text-[11px] text-slate-400 font-mono truncate">{node.status}</p>

                                    {/* Arrow connector indicator */}
                                    {index < FLOW_NODES.length - 1 && (
                                        <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                                            <ChevronRight className="w-5 h-5 text-slate-500" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Node Inspector Display */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-2 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-bold">
                                    <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                                    <span>NODE INSPECTOR: {activeNode.category}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">{activeNode.title}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{activeNode.desc}</p>
                            </div>

                            <div className="p-5 bg-black/60 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-white/10 pb-2">
                                    Node Diagnostics
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Throughput:</span>
                                    <span className="text-blue-400 font-bold">{activeNode.metrics}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Security Gate:</span>
                                    <span className="text-emerald-400 font-bold">FERPA / GDPR OK</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">State:</span>
                                    <span className="text-amber-300 font-bold">{activeNode.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* FEATURE 2: INTERACTIVE EXPERIENCE 1 - STUDENT RETENTION RISK CALCULATOR */}
            {/* ========================================================================= */}
            <section className="section bg-slate-50 border-t border-slate-200">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-4">
                            Interactive Experience 01
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            Predictive Student Risk Radar.
                        </h2>
                        <p className="text-base text-slate-600 mt-4">
                            Adjust the campus telemetry sliders below to simulate how Apex.EDU predicts student retention and triggers early faculty intervention protocols.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl grid md:grid-cols-12 gap-10 items-center">

                        {/* Sliders Input Panel */}
                        <div className="md:col-span-7 space-y-6">
                            <div className="flex items-center gap-2 mb-2">
                                <Sliders className="w-5 h-5 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">Campus Telemetry Controls</h3>
                            </div>

                            {/* Slider 1: Attendance */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-slate-700">
                                    <span>Lecture Attendance Rate</span>
                                    <span className="text-blue-600 font-mono">{attendance}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="20"
                                    max="100"
                                    value={attendance}
                                    onChange={(e) => setAttendance(Number(e.target.value))}
                                    className="w-full accent-blue-600 cursor-pointer"
                                />
                            </div>

                            {/* Slider 2: Assignment Grade Average */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-slate-700">
                                    <span>Assignment & Midterm Average</span>
                                    <span className="text-blue-600 font-mono">{gradeAvg}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="30"
                                    max="100"
                                    value={gradeAvg}
                                    onChange={(e) => setGradeAvg(Number(e.target.value))}
                                    className="w-full accent-blue-600 cursor-pointer"
                                />
                            </div>

                            {/* Slider 3: LMS Portal Score */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-slate-700">
                                    <span>LMS Portal Engagement Index</span>
                                    <span className="text-blue-600 font-mono">{lmsScore} / 10</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={lmsScore}
                                    onChange={(e) => setLmsScore(Number(e.target.value))}
                                    className="w-full accent-blue-600 cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Calculated Output Gauge Panel */}
                        <div className="md:col-span-5 bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-6 text-center border border-slate-800">
                            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                                Predicted 90-Day Retention Score
                            </div>

                            <div className="text-6xl font-black tracking-tighter text-white">
                                {retentionProb}%
                            </div>

                            {/* Dynamic Risk Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold font-mono">
                                {retentionProb >= 80 ? (
                                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4" /> RETENTION OPTIMAL
                                    </span>
                                ) : retentionProb >= 60 ? (
                                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full flex items-center gap-1.5">
                                        <AlertTriangle className="w-4 h-4" /> MODERATE RISK (ADVISOR NOTIFIED)
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/40 rounded-full flex items-center gap-1.5">
                                        <ShieldAlert className="w-4 h-4" /> CRITICAL INTERVENTION NEEDED
                                    </span>
                                )}
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed font-light">
                                {retentionProb >= 80
                                    ? 'Student is performing optimal. No intervention required.'
                                    : retentionProb >= 60
                                        ? 'Apex.EDU has automatically generated a personalized study guide and scheduled an advisor check-in.'
                                        : 'Critical lead time! Automated emergency learning plan dispatched to faculty & student support team.'
                                }
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* FEATURE 3: INTERACTIVE EXPERIENCE 2 - AUTOMATED ESSAY EVALUATOR */}
            {/* ========================================================================= */}
            <section className="section bg-white border-t border-slate-200">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-4">
                            Interactive Experience 02
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            Automated Assessment Evaluator.
                        </h2>
                        <p className="text-base text-slate-600 mt-4">
                            Select a sample student submission to test Apex.EDU's rubric evaluation, citation verification, and 1-click professor approval engine.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
                        {/* Sample Selection Buttons */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {SAMPLE_PAPERS.map((paper) => (
                                <button
                                    key={paper.id}
                                    onClick={() => { setSelectedPaper(paper); setIsApproved(false); }}
                                    className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all ${selectedPaper.id === paper.id
                                            ? 'bg-slate-900 text-white shadow-lg shadow-purple-500/10'
                                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                                        }`}
                                >
                                    {paper.title}
                                </button>
                            ))}
                        </div>

                        {/* Evaluator Output Card */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-2">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">{selectedPaper.title}</h4>
                                    <p className="text-xs font-mono text-slate-500">{selectedPaper.author}</p>
                                </div>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-mono font-bold rounded-full w-fit">
                                    Status: {selectedPaper.risk}
                                </span>
                            </div>

                            {/* Rubric Matrix */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-2xl font-bold text-slate-900">{selectedPaper.logicScore}%</div>
                                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Logic & Rigor</div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-xs font-bold text-emerald-600 mt-2">{selectedPaper.citationStatus}</div>
                                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400 mt-1">Citations</div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-2xl font-bold text-slate-900">{selectedPaper.clarityScore}%</div>
                                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Structure</div>
                                </div>
                            </div>

                            {/* AI Generated Feedback */}
                            <div className="p-4 bg-purple-50/60 border border-purple-100 rounded-xl space-y-1">
                                <div className="text-[10px] font-mono font-bold text-purple-700 uppercase">Automated Feedback Summary</div>
                                <p className="text-xs text-slate-700 leading-relaxed font-medium">{selectedPaper.feedback}</p>
                            </div>

                            {/* 1-Click Action Button */}
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsApproved(true)}
                                    className={`px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${isApproved
                                            ? 'bg-emerald-600 text-white cursor-default'
                                            : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                                        }`}
                                >
                                    {isApproved ? '✓ Approved & Published to LMS Portal' : '1-Click Professor Approval'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* FEATURE 4: VISUAL CAMPUS SYSTEM INFRASTRUCTURE NODE GRID */}
            {/* ========================================================================= */}
            <section className="section bg-slate-900 text-white border-t border-slate-800">
                <div className="container">
                    <div className="max-w-3xl mb-16">
                        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-4">
                            Infrastructure Grid
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Sovereign Campus Node Grid.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { id: 'NODE-EDU-BOM-01', title: 'Pre-University Academy Node', latency: '4ms', uptime: '99.99%', status: 'OPERATIONAL' },
                            { id: 'NODE-EDU-DEL-04', title: 'University Operating Engine', latency: '6ms', uptime: '99.98%', status: 'ACTIVE STREAM' },
                            { id: 'NODE-EDU-RESEARCH-09', title: 'Graduate Research CIIP Fortress', latency: '2ms', uptime: '100%', status: 'ZERO-KNOWLEDGE SECURED' }
                        ].map((node, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono text-blue-400 font-bold">{node.id}</span>
                                    <span className="text-[10px] font-mono text-emerald-400 font-bold">{node.status}</span>
                                </div>
                                <h4 className="text-lg font-bold text-white">{node.title}</h4>
                                <div className="flex justify-between text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
                                    <span>Latency: <strong className="text-white">{node.latency}</strong></span>
                                    <span>Uptime: <strong className="text-white">{node.uptime}</strong></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Institutional FAQs */}
            <section className="section bg-slate-50 border-t border-slate-200">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-4">
                            Institutional FAQ
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            Frequently Asked Questions.
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {[
                            {
                                q: 'Is Apex.EDU compliant with student data privacy laws (FERPA / GDPR)?',
                                a: 'Yes. Apex.EDU is fully FERPA and GDPR compliant by default. All student telemetry is encrypted in transit and at rest using bank-grade AES-256 standards, and no student data is ever used to train public LLM models.'
                            },
                            {
                                q: 'Does Apex.EDU replace our existing LMS (Canvas, Blackboard, Moodle)?',
                                a: 'No. Apex.EDU acts as an intelligent operating layer sitting on top of your existing LMS. It connects via standard APIs to ingest data seamlessly without disrupting faculty workflows.'
                            },
                            {
                                q: 'How does the Research Sandbox protect confidential lab data and patents?',
                                a: 'Graduate research is routed through our CIIP (Corporate Intelligence & IP Protection) relay. Data is redacted, encrypted, and processed in a zero-log environment, ensuring full patent and grant confidentiality.'
                            },
                            {
                                q: 'Can Apex.EDU be deployed on-premises for sensitive research institutes?',
                                a: 'Yes. For graduate research schools and defense-affiliated institutes, Apex.EDU offers local on-premises model deployment on institution-owned hardware.'
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
                                >
                                    <span className="text-base">{faq.q}</span>
                                    <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === index ? 'rotate-90 text-blue-600' : ''}`} />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Executive CTA */}
            <section className="section bg-slate-900 text-white text-center">
                <div className="container">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Modernize Your Campus Operating System</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light">
                        Schedule a briefing with our academic engineering team to discuss custom integration for your school or university.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30">
                        <span>Book Institutional Briefing</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
