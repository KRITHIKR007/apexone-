'use client';

export default function ForWhom() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto">

                {/* Section Header */}
                <div className="mb-24">
                    <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4 block">Selection Criteria</span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[0.9]">
                        Designed for <br />
                        <span className="text-slate-400">the 1%.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">

                    {/* Part 1: YOU ARE THE 1% */}
                    <div>
                        <div className="flex items-end gap-4 mb-8">
                            <span className="text-6xl font-light text-slate-200">01</span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">The Leadership</h3>
                        </div>
                        <div className="prose prose-lg text-slate-500">
                            <p className="mb-6">
                                You are not a manager. Managers maintain the status quo. <strong>You are an architect of value.</strong>
                            </p>
                            <p className="mb-8">
                                We partner exclusively with founders and executives who view their business not as a job, but as a high-performance machine. You are tired of "people problems" and are ready for "system solutions." You demand speed, precision, and absolute autonomy.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-900 font-medium">
                                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                                    Revenue &gt; $3M/year
                                </li>
                                <li className="flex items-center gap-3 text-slate-900 font-medium">
                                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                                    Decisive Leadership
                                </li>
                                <li className="flex items-center gap-3 text-slate-900 font-medium">
                                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                                    Unsatisfied with Linear Growth
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Part 2: GETTING TO THE 1% */}
                    <div className="relative">
                        <div className="absolute top-0 left-0 w-full h-px bg-slate-100 lg:hidden" /> {/* Mobile separator */}

                        <div className="flex items-end gap-4 mb-8 lg:mt-0 mt-12">
                            <span className="text-6xl font-light text-slate-200">02</span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">The Transformation</h3>
                        </div>
                        <div className="prose prose-lg text-slate-500">
                            <p className="mb-6">
                                Most companies die in the "Middle Class" of business—too big to be small, too small to be dominant. <strong>We bridge the gap.</strong>
                            </p>
                            <p className="mb-8">
                                To enter the top 1% of your industry, you cannot rely on more headcount. You must deploy leverage. We install the infrastructure that creates unfair advantages: predictive data, automated fulfillment, and infinite media scale.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">10x</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Efficiency</div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">#1</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Market Pos.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-24 pt-8 border-t border-slate-100 flex justify-end">
                    <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">
                        *Strict qualification criteria apply to all partnerships.
                    </p>
                </div>

            </div>
        </section>
    );
}
