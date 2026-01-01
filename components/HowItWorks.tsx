'use client';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Sticky Title */}
                    <div className="lg:sticky lg:top-32 self-start">
                        <div className="accent-line mb-8" />
                        <h2 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            From Chaos to <br />
                            <span className="text-indigo-600">Clarity.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-md">
                            We don't just give you a login and wish you luck.
                            We deploy our engineering team to integrate ApexOne into your ecosystem tailored to your unique stack.
                        </p>
                        <a href="#audit" className="btn btn-primary inline-flex">
                            Start the Process
                        </a>
                    </div>

                    {/* Right: The Steps */}
                    <div className="relative space-y-12">
                        {/* Connecting Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-1 bg-slate-100 -z-10" />

                        {/* Step 1 */}
                        <div className="relative pl-24 group">
                            <div className="absolute left-0 top-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center text-xl font-bold text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors shadow-sm z-10">
                                01
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">Integration & Ingestion</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                Connect Golden Goose to your Ads Managers, payment processors (Stripe/Razorpay), and CRMs.
                            </p>
                            <div className="inline-flex gap-2">
                                <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-500 font-mono">API Connection</span>
                                <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-500 font-mono">Data Cleaning</span>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-24 group">
                            <div className="absolute left-0 top-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center text-xl font-bold text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors shadow-sm z-10">
                                02
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">The Intelligence Layer</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                Our models begin training on your historical data to establish baselines for CPA, LTV, and Churn.
                            </p>
                            <div className="inline-flex gap-2">
                                <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-500 font-mono">LTV Modeling</span>
                                <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-500 font-mono">Anomaly Detection</span>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pl-24 group">
                            <div className="absolute left-0 top-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center text-xl font-bold text-slate-400 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-colors shadow-sm z-10">
                                03
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">Autonomous Growth</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                You receive daily "Kill/Scale" signals. Bad ads are paused. Good ads are scaled. Revenue becomes predictable.
                            </p>
                            <div className="inline-flex gap-2">
                                <span className="px-2 py-1 bg-emerald-50 border border-emerald-100 rounded text-xs text-emerald-600 font-bold font-mono">PROFIT OPTIMIZED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
