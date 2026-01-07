'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function GoldenGooseClient() {
    return (
        <main>
            <Navigation />
            <div className="pt-32 pb-20 md:pt-48 md:pb-32 text-center relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tl from-blue-500/5 to-emerald-500/5 rounded-full blur-[80px]" />
                </div>

                <div className="container relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-10 transform hover:scale-105 transition-transform duration-300">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Autonomous Business Intelligence</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                        Thinking Engine of<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">ApexOne Studios</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                        Golden Goose is not software. It is ApexOne's <strong>thinking layer</strong> for modern companies.
                    </p>
                </div>
            </div>

            <section className="section pb-0">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                            Your data is no longer history.<br />
                            <span className="text-indigo-600">It is strategy in real time.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            It continuously ingests, understands, predicts, and acts on every signal inside your business — from ads and payments to logistics and customer behavior — and turns chaos into a <strong>single source of truth</strong> that runs your company for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Core Problem */}
            <section className="section bg-white">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 md:p-16">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 text-slate-900">The Core Problem We Solve</h3>
                                    <p className="text-lg text-slate-600 mb-6 italic border-l-4 border-indigo-200 pl-4">
                                        “We have data everywhere… but we don’t know what to do with it.”
                                    </p>
                                    <p className="text-slate-600 mb-6">
                                        Marketing dashboards, Sales CRMs, Payment gateways, Customer support, Website analytics, Ad platforms... all screaming different stories.
                                    </p>
                                    <p className="font-medium text-indigo-900">
                                        Golden Goose unifies them into <strong>one brain</strong> that answers only one question:
                                    </p>
                                    <div className="mt-4 text-xl font-bold text-slate-900">
                                        “What should we do next to make more money?”
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {/* Chaos Visualization */}
                                    <div className="flex flex-wrap gap-2 justify-center opacity-60">
                                        {['Meta Ads', 'Stripe', 'Google Analytics', 'HubSpot', 'Shopify', 'Support', 'AWS', 'TikTok'].map(tool => (
                                            <span key={tool} className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-400 font-mono strike-through decorative-chaos">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-center my-4">
                                        <svg className="w-6 h-6 text-indigo-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                    </div>
                                    <div className="bg-slate-900 text-white p-6 rounded-xl text-center shadow-xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-indigo-600/20 blur-xl"></div>
                                        <div className="relative z-10 font-bold text-lg">One Single Source of Truth</div>
                                        <div className="text-indigo-300 text-xs mt-1 font-mono uppercase tracking-widest">Golden Goose Core</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Neural Architecture */}
            <section className="section pt-0">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2 block">System Architecture</span>
                        <h2 className="text-4xl font-bold text-slate-900">The Golden Goose Neural Architecture</h2>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-24">

                        {/* Layer 1: Ingestion */}
                        <div className="grid md:grid-cols-12 gap-12 items-start">
                            <div className="md:col-span-4 sticky top-32">
                                <div className="text-6xl font-black text-slate-100 mb-4 -ml-4">01</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Universal Ingestion</h3>
                                <p className="text-slate-600">
                                    Golden Goose connects to everything that moves money or behavior inside your business. Everything flows into one <strong>time-aligned data lake</strong>.
                                </p>
                            </div>
                            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                                <SourceCard title="Revenue" items={['Razorpay', 'Stripe', 'PayPal', 'Shopify', 'WooCommerce']} />
                                <SourceCard title="Marketing" items={['Meta Ads', 'Google Ads', 'TikTok', 'LinkedIn']} />
                                <SourceCard title="Customers" items={['Salesforce', 'HubSpot', 'Zoho', 'Custom CRMs']} />
                                <SourceCard title="Product" items={['Website', 'App', 'Funnels', 'Checkout', 'Heatmaps']} />
                                <SourceCard title="Operations" items={['Delivery Partners', 'Support Tickets', 'Refunds', 'NPS']} />
                                <SourceCard title="Offline" items={['TV Ads', 'Influencer Posts', 'Billboards', 'POS Sales']} />
                            </div>
                        </div>

                        {/* Layer 2: Intelligence Core */}
                        <div className="grid md:grid-cols-12 gap-12 items-start border-t border-slate-100 pt-24">
                            <div className="md:col-span-4 sticky top-32">
                                <div className="text-6xl font-black text-slate-100 mb-4 -ml-4">02</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Intelligence Core</h3>
                                <p className="text-slate-600">
                                    This is where ApexOne becomes lethal. We don't just report data; we calculate reality using advanced attribution and prediction models.
                                </p>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <FeatureBlock
                                    title="Causal Attribution Engine"
                                    desc="Not pixel-based. Not cookie-based. Money-based. We match ad clicks to revenue across devices, channels, and time windows (up to 90 days). You get who actually made you money."
                                />
                                <FeatureBlock
                                    title="Bayesian Marketing Mix Modeling (MMM)"
                                    desc="When tracking breaks (iOS, cookies), we use Bayesian regression to correlate ad spend, seasonality, and external events with actual revenue. It answers: 'If I spend ₹10L more on Google, how much revenue will I really get?'"
                                />
                                <FeatureBlock
                                    title="Anomaly Detection Engine"
                                    desc="Watches thousands of signals. 'Your Mumbai courier delay increased refunds by 12%.' This turns Golden Goose into a 24/7 digital COO."
                                />
                                <FeatureBlock
                                    title="Predictive Intelligence"
                                    desc="LTV Prediction on Day 1: We look at first session behavior to predict 12-month value. Churn & Risk Engine: identify users likely to cancel before money is lost."
                                />
                            </div>
                        </div>

                        {/* Layer 3: Creative Intelligence */}
                        <div className="grid md:grid-cols-12 gap-12 items-start border-t border-slate-100 pt-24">
                            <div className="md:col-span-4 sticky top-32">
                                <div className="text-6xl font-black text-slate-100 mb-4 -ml-4">03</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Creative Intelligence</h3>
                                <p className="text-slate-600">
                                    Ads don’t fail. <strong>Creatives fail.</strong> Golden Goose analyzes every frame of every ad to build a creative genome.
                                </p>
                            </div>
                            <div className="md:col-span-8">
                                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                                    <div className="mb-6 border-b border-slate-700 pb-6">
                                        <h4 className="font-bold text-lg mb-4">What it measures:</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {['Face vs No Face', 'Emotion Analysis', 'First-3s Hook', 'Text Density', 'Visual Movement', 'Offer Clarity'].map(item => (
                                                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-mono text-emerald-400 text-sm mb-2">&gt; INSIGHT GENERATED</div>
                                        <p className="font-medium text-lg">
                                            “Testimonial hooks with a human face and subtitles outperform by <span className="text-emerald-400 font-bold">2.3x</span> in your audience.”
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layer 4: Competitor Intelligence */}
                        <div className="grid md:grid-cols-12 gap-12 items-start border-t border-slate-100 pt-24">
                            <div className="md:col-span-4 sticky top-32">
                                <div className="text-6xl font-black text-slate-100 mb-4 -ml-4">04</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Competitor Intelligence</h3>
                                <p className="text-slate-600">
                                    Golden Goose watches your battlefield. It tracks pricing, offers, creatives, and funnel changes of your top competitors.
                                </p>
                            </div>
                            <div className="md:col-span-8 grid gap-6">
                                <div className="bg-white border-l-4 border-rose-500 p-6 shadow-sm rounded-r-lg">
                                    <h4 className="font-bold text-rose-900 mb-2">Pricing Alert</h4>
                                    <p className="text-slate-700">“Competitor X dropped price 15%. Expect CAC to rise in 48 hours.”</p>
                                </div>
                                <div className="bg-white border-l-4 border-amber-500 p-6 shadow-sm rounded-r-lg">
                                    <h4 className="font-bold text-amber-900 mb-2">Creative Strategy Alert</h4>
                                    <p className="text-slate-700">“Competitor Y launched a new testimonial campaign. Their hook angle is shifting.”</p>
                                </div>
                            </div>
                        </div>

                        {/* Layer 5: Action Engine */}
                        <div className="grid md:grid-cols-12 gap-12 items-start border-t border-slate-100 pt-24">
                            <div className="md:col-span-4 sticky top-32">
                                <div className="text-6xl font-black text-slate-100 mb-4 -ml-4">05</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Action Engine</h3>
                                <p className="text-slate-600">
                                    This is where Golden Goose becomes a money machine. It does not just show insights. It gives <strong>commands</strong>.
                                </p>
                            </div>
                            <div className="md:col-span-8 grid gap-6">
                                <ActionSignal type="scaling" title="Scaling Signal" desc="Campaign B has 3.4x ROAS and rising. Increase spend 20% now." />
                                <ActionSignal type="kill" title="Kill Signal" desc="Creative #442 fatigue detected. CPR up 40%. Turn off immediately." />
                                <ActionSignal type="pivot" title="Pivot Signal" desc="Founder audience saturated. Shift targeting to Product Managers to unlock scale." />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Category Creator */}
            <section className="py-24 bg-slate-900 text-white mt-12">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">Why Golden Goose is a Category Creator</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="opacity-50 space-y-4">
                                <h3 className="text-xl font-bold text-slate-400">Most Tools</h3>
                                <ul className="space-y-2">
                                    <li className="text-slate-500">Show data...</li>
                                    <li className="text-slate-500">Visulize chaos...</li>
                                    <li className="text-slate-500">Wait for you to decide...</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
                                <h3 className="text-2xl font-bold text-indigo-400 mb-6">Golden Goose</h3>
                                <ul className="space-y-4 text-left">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Understands reality
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Predicts outcomes
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Tells you what to do
                                    </li>
                                    <li className="flex items-center gap-3 bg-indigo-500/20 p-2 rounded -mx-2">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                        Executes via ApexOne teams
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-16 text-lg text-slate-400">
                            This is why ApexOne is not an agency.<br />
                            It is an <strong className="text-white">AI-powered business operating system.</strong>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function SourceCard({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h4 className="font-bold text-indigo-900 mb-3">{title}</h4>
            <ul className="space-y-1">
                {items.map(item => (
                    <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FeatureBlock({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="group">
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{title}</h4>
            <div className="h-1 w-12 bg-indigo-600 mb-3 opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </div>
    );
}

function ActionSignal({ type, title, desc }: { type: 'scaling' | 'kill' | 'pivot', title: string, desc: string }) {
    const colors = {
        scaling: "border-green-500 bg-green-50 text-green-900",
        kill: "border-red-500 bg-red-50 text-red-900",
        pivot: "border-blue-500 bg-blue-50 text-blue-900"
    };

    return (
        <div className={`border-l-4 p-6 rounded-r-xl ${colors[type]}`}>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-2 opacity-80">{title}</h4>
            <p className="font-bold text-lg">“{desc}”</p>
        </div>
    );
}
