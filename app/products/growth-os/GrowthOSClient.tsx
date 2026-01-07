'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function GrowthOSClient() {
    return (
        <main className="bg-slate-50 min-h-screen text-slate-900 selection:bg-indigo-600 selection:text-white">
            <Navigation />

            <div className="pt-32 pb-12 container">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
                    Performance Protocol
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                    Growth <span className="text-indigo-600">OS</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                    We don't "do marketing". We install a mathematical revenue engine.
                    From acquisition to retention, every user action is predicted, tracked, and optimized.
                </p>

                {/* Metric Strip */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                    {[
                        { label: "Target ROAS", val: "4.5x", sub: "+12% vs Market" },
                        { label: "CAC Efficiency", val: "-22%", sub: "MoM Reduction" },
                        { label: "Conversion Rate", val: "3.8%", sub: "Top 1% Percentile" },
                        { label: "LTV / CAC", val: "5:1", sub: "Healthy Growth" }
                    ].map((stat) => (
                        <div key={stat.label} className="bg-white p-6">
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">{stat.label}</div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.val}</div>
                            <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 inline-block px-1.5 py-0.5 rounded">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Funnel Visualization */}
            <section className="pb-20">
                <div className="container">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold text-slate-700 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                Live Funnel Diagnostics
                            </h3>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600">Last 30 Days</span>
                                <span className="px-3 py-1 bg-indigo-50 border border-indigo-100 rounded text-xs font-bold text-indigo-700">Live View</span>
                            </div>
                        </div>

                        <div className="p-8 grid md:grid-cols-5 gap-4 items-center relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>

                            {[
                                { stage: "Impressions", count: "142,000", rate: "100%", color: "bg-slate-100 border-slate-200" },
                                { stage: "Clicks", count: "8,520", rate: "6.0% CTR", color: "bg-blue-50 border-blue-100 text-blue-700" },
                                { stage: "Leads", count: "2,130", rate: "25% Opt-in", color: "bg-indigo-50 border-indigo-100 text-indigo-700" },
                                { stage: "Sales Call", count: "426", rate: "20% Booked", color: "bg-purple-50 border-purple-100 text-purple-700" },
                                { stage: "Closed Deals", count: "128", rate: "30% Close", color: "bg-emerald-50 border-emerald-100 text-emerald-700" }
                            ].map((step, i) => (
                                <div key={step.stage} className={`p-6 rounded-xl border ${step.color} shadow-sm relative group hover:-translate-y-1 transition-transform duration-300 bg-white`}>
                                    {/* Fix: bg-white overrides specific backgrounds, removing it to let color prop work, or blending */}
                                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Step 0{i + 1}</div>
                                    <h4 className="font-bold text-slate-900 mb-1">{step.stage}</h4>
                                    <div className="text-2xl font-bold text-slate-900 mb-2">{step.count}</div>
                                    <div className="text-xs font-semibold px-2 py-1 rounded bg-white/50 inline-block border border-black/5">{step.rate}</div>

                                    {i < 4 && (
                                        <div className="absolute top-1/2 -right-6 w-8 h-8 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center z-10 hidden md:flex text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Dropoff Analysis */}
                        <div className="px-8 pb-8 pt-0">
                            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex items-start gap-3">
                                <svg className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <div>
                                    <h4 className="text-sm font-bold text-amber-800">Anomaly Detected: High Dropoff at Step 03</h4>
                                    <p className="text-xs text-amber-700 mt-1">
                                        Booking page load time is 4.2s. Predicted lift if reduced to 2.0s: <span className="font-bold">+18% Calls Booked.</span>
                                    </p>
                                </div>
                                <button className="ml-auto text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded font-bold hover:bg-amber-200">Deploy Fix</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiment Log */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900">Active Experiments (A/B)</h2>

                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-500">
                                <tr>
                                    <th className="p-4 border-b border-slate-200">Experiment ID</th>
                                    <th className="p-4 border-b border-slate-200">Hypothesis</th>
                                    <th className="p-4 border-b border-slate-200">Confidence</th>
                                    <th className="p-4 border-b border-slate-200 text-right">Impact</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[
                                    { id: "EXP-402", title: "Headline: 'Save Costs' vs 'Increase Revenue'", conf: "99% (Statistical Significance)", impact: "+14.2% Conv.", status: "WINNER" },
                                    { id: "EXP-405", title: "Checkout: Remove 'Company Name' field", conf: "82% (Gathering Data)", impact: "+4.1% Conv.", status: "RUNNING" },
                                    { id: "EXP-409", title: "Pricing: Annual Plan Default", conf: "95% (Statistical Significance)", impact: "+22% LTV", status: "WINNER" },
                                    { id: "EXP-411", title: "CTA Color: Black vs Indigo", conf: "12% (Inconclusive)", impact: "0.0% Diff", status: "FAILED" }
                                ].map((row, i) => (
                                    <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-mono text-slate-500">{row.id}</td>
                                        <td className="p-4 font-medium text-slate-900">{row.title}</td>
                                        <td className="p-4 text-slate-500">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${row.status === 'RUNNING' ? 'bg-amber-500 animate-pulse' : 'bg-slate-300'}`}></div>
                                                {row.conf}
                                            </div>
                                        </td>
                                        <td className="p-4 text-right font-bold text-emerald-600">{row.impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* System Blueprint */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900">Integration Map</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Acquisition Layer</h4>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• Meta Ads Manager (API v19.0)</li>
                                <li>• Google Ads (PMax)</li>
                                <li>• LinkedIn Insight Tag</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Data Warehouse</h4>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• BigQuery (Event Stream)</li>
                                <li>• Segment.com (CDP)</li>
                                <li>• DBT (Data Transformation)</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Retention Layer</h4>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• Klaviyo (Email Flows)</li>
                                <li>• Intercom (Live Chat)</li>
                                <li>• Twilio (SMS / WhatsApp)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
