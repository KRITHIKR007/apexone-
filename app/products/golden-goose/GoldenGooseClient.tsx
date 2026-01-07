'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function GoldenGooseClient() {
    return (
        <main>
            <Navigation />
            <PageHeader
                title="Thinking Engine of ApexOne Studios"
                subtitle="Golden Goose is ApexOne Studios's AI-powered business intelligence system. It turns chaos into a single source of truth."
                badge="Business Intelligence"
            />

            <section className="section">
                <div className="container">
                    <div className="max-w-5xl mx-auto space-y-32">

                        {/* 1. The Core Philosophy */}
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold mb-8 text-slate-900">Your Data IS Your Strategy.</h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Most companies treat data as a "report card"—something you look at after the month is over.
                                Golden Goose treats data as a "steering wheel." It is a living, breathing engine that ingests millions of signals
                                from your business ecosystem and tells you exactly what to do next.
                            </p>
                            <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 inline-block text-left">
                                <p className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    The "Black Box" Problem
                                </p>
                                <p className="text-amber-800/80 mb-0">
                                    "I know 50% of my marketing budget works, I just don't know which 50%." <br />
                                    <strong>Golden Goose kills this statement. We tell you which 50% it is, down to the exact rupee.</strong>
                                </p>
                            </div>
                        </div>

                        {/* 2. Architecture Diagram (Conceptual) */}
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                            <h2 className="text-3xl font-bold mb-12 relative z-10">The Neural Architecture</h2>

                            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                {/* Input Layer */}
                                <div className="space-y-6">
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-2">Step 1: Ingestion</div>
                                    <ul className="space-y-4">
                                        {[
                                            { icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', label: 'SQL Databases (Postgres/MySQL)' },
                                            { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', label: 'Payment Gateways (Stripe/Razorpay)' },
                                            { icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z', label: 'Ads API (Meta/Google)' },
                                            { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z', label: 'CRM (Salesforce/HubSpot)' }
                                        ].map(item => (
                                            <li key={item.label} className="flex items-center gap-3 text-slate-300">
                                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                                                {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Processing Layer */}
                                <div className="space-y-6">
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-2">Step 2: Synthesis (The Brain)</div>
                                    <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-xl p-6 relative">
                                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
                                        <h3 className="font-bold text-white mb-2">Attribution Engine</h3>
                                        <p className="text-xs text-indigo-200 mb-4">
                                            Matches ad clicks to bank deposits using a 90-day lookback window across devices.
                                        </p>
                                        <h3 className="font-bold text-white mb-2">Anomaly Detector</h3>
                                        <p className="text-xs text-indigo-200">
                                            Watches for deviations (e.g., "Checkout page load time up 200ms").
                                        </p>
                                    </div>
                                    <div className="flex justify-center text-indigo-400">
                                        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                    </div>
                                </div>

                                {/* Output Layer */}
                                <div className="space-y-6">
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-2">Step 3: Action</div>
                                    <ul className="space-y-4">
                                        <li className="bg-white/5 rounded-lg p-3 text-sm">
                                            <span className="text-green-400 font-bold">Scaling Signal:</span><br />
                                            "Campaign B has 3.4x ROAS. Increase budget by 20% immediately."
                                        </li>
                                        <li className="bg-white/5 rounded-lg p-3 text-sm">
                                            <span className="text-red-400 font-bold">Kill Signal:</span><br />
                                            "Ad Creative #442 saturation reached. CPR rose 40% yesterday. Turn off."
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3. Deep Dive into Features */}
                        <div className="grid lg:grid-cols-2 gap-16">

                            {/* Feature 1: MMM (Marketing Mix Modeling) */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">01</span>
                                    Marketing Mix Modeling (MMM)
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    Attribution is dying because of iOS14 and cookies. We don't rely on pixels. Golden Goose uses <strong>Bayesian Regression</strong> to correlate spending with revenue lift.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                        <strong>No Tracking Code Needed:</strong> Works purely on spend vs. revenue data.
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                        <strong>Offline Attribution:</strong> Detects if a TV ad or billboard spike caused a web traffic spike.
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                        <strong>Diminishing Returns Curve:</strong> Tells you exactly when your next $1 of spend will yield only $0.90 back.
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 2: LTV/CAC Engine */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center text-sm">02</span>
                                    Cohort-Based LTV Prediction
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    Not all customers are equal. Golden Goose predicts the 12-month value of a customer on <strong>Day 1</strong> based on their behavior.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                        <strong>Whale Detection:</strong> Identifies high-value users instantly and sends the signal back to Meta to find more like them.
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                        <strong>Churn Prediction:</strong> Flags users who are 80% likely to cancel next month so automated email flows can save them.
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 3: Creative Intelligence */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">03</span>
                                    Creative Intelligence
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    The biggest lever in 2026 is ad creative. The AI analyzes every frame of your video ads.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        <strong>Frame-by-Frame Analysis:</strong> "Videos starting with a human face have 2.3x higher retention than text-only hooks."
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        <strong>Hook Testing:</strong> Automatically categorizes hooks (e.g., "Problem/Solution" vs "Testimonial") and tells you which format converts.
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 4: Competitor Reconnaissance */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center text-sm">04</span>
                                    Competitor Reconnaissance
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    You don't operate in a vacuum. Golden Goose monitors your top 5 competitors constantly.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                        <strong>Price Watch:</strong> Alerts you if a competitor drops their price.
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                        <strong>Ad Library Scraper:</strong> Detects new ads launched by competitors and analyzes their messaging strategy.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Use Case Scenarios */}
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
                            <h2 className="text-2xl font-bold mb-8 text-center text-slate-900">Real World Execution</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Scenario A</div>
                                    <h4 className="text-lg font-bold mb-2">The "Hidden Loss"</h4>
                                    <p className="text-sm text-slate-600 mb-4">
                                        <strong>Problem:</strong> A D2C brand spending ₹50L/month sees sales drop. Dashboard shows ROAS is fine.
                                    </p>
                                    <p className="text-sm text-slate-900">
                                        <strong>Golden Goose Finding:</strong> "Your ROAS is fine on new customers, but your <em>Repeat Purchase Rate</em> has dropped 40% because of a delivery delay issue with your courier partner in Mumbai."
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Scenario B</div>
                                    <h4 className="text-lg font-bold mb-2">The "Scale Wall"</h4>
                                    <p className="text-sm text-slate-600 mb-4">
                                        <strong>Problem:</strong> SaaS company can't scale past ₹1Cr MRR. Every time they increase ad spend, CAC skyrockets.
                                    </p>
                                    <p className="text-sm text-slate-900">
                                        <strong>Golden Goose Finding:</strong> "You have tapped out the 'Founder' audience. The diminishing returns curve shows you need to switch creatives to target 'Product Managers' to unlock the next leg of scale."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
