'use client';

export default function WhyChoose() {
    return (
        <section className="section bg-slate-50">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">The Apex Standard</div>
                    <h2 className="mb-4 text-4xl font-bold">Why Top 1% Companies Choose Us.</h2>
                    <p className="text-xl text-slate-600">
                        We are not another vendor account you have to manage.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        {
                            title: 'AI-Native Architecture',
                            desc: 'We didn\'t "add AI" to an agency model. We built a software company that services your growth.',
                            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                            gradient: 'from-blue-600 to-indigo-600'
                        },
                        {
                            title: 'Complete Visibility',
                            desc: 'No more "black box" marketing. See exactly where every dollar of revenue came from.',
                            icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                            gradient: 'from-emerald-600 to-teal-600'
                        },
                        {
                            title: 'Enterprise Security',
                            desc: 'Bank-grade encryption (AES-256) and local model deployment for sensitive IP.',
                            icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                            gradient: 'from-slate-700 to-slate-900'
                        },
                        {
                            title: 'Outcome Based',
                            desc: 'We map our success to your Net Profit. When you scale, we scale.',
                            icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                            gradient: 'from-amber-500 to-orange-600'
                        }
                    ].map((item) => (
                        <div key={item.title} className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                            {/* Hover Gradient Border Effect */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                            <div className="flex items-start gap-6">
                                <div className={`w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300`}>
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
