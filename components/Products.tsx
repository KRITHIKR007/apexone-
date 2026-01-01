'use client';

export default function Products() {
    return (
        <section id="products" className="section bg-slate-50 py-32">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-white border border-indigo-100 rounded-full text-indigo-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                        The Ecosystem
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Complete Business OS
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Four specialized engines working in unison to automate every layer of your enterprise.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Golden Goose",
                            desc: "Central Intelligence & P&L",
                            path: "/products/golden-goose",
                            icon: "M13 10V3L4 14h7v7l9-11h-7z",
                            color: "text-amber-500"
                        },
                        {
                            title: "CIIP Platform",
                            desc: "Security & IP Protection",
                            path: "/products/ciip",
                            icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                            color: "text-red-500"
                        },
                        {
                            title: "Growth OS",
                            desc: "Revenue & Acquisition",
                            path: "/products/growth-os",
                            icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
                            color: "text-emerald-500"
                        },
                        {
                            title: "Enterprise OS",
                            desc: "Full Autonomous Infrastructure",
                            path: "/products/enterprise-os",
                            icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                            color: "text-indigo-500"
                        }
                    ].map((product, i) => (
                        <a key={i} href={product.path} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col items-start relative overflow-hidden">
                            <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-white group-hover:scale-110 transition-all duration-300 ${product.color}`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.icon} /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{product.title}</h3>
                            <p className="text-sm text-slate-500 mb-6">{product.desc}</p>

                            <div className="mt-auto flex items-center font-bold text-sm text-indigo-600 group-hover:translate-x-2 transition-transform duration-300">
                                View Section <span className="ml-1">→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
