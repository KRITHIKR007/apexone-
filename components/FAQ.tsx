'use client';

import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            id: '01',
            question: 'Is ApexOne a software tool or an agency?',
            answer: 'We are a Hybrid. Agencies offer people but lack tech. SaaS offers tools but no strategy. ApexOne provides the proprietary "Growth OS" software AND the engineering team to install and manage it for you.'
        },
        {
            id: '02',
            question: 'Does this replace my marketing team?',
            answer: 'No. We "supercharge" your team. We give your Head of Marketing the data they are missing and automate the manual tasks (reporting, bid management) so they can focus on creative strategy.'
        },
        {
            id: '03',
            question: 'What is the "Audit" process?',
            answer: 'Before we partner, we perform a deep-dive audit of your current ad accounts, tracking setup, and sales pipeline. We identify exactly where money is leaking. This audit is free for qualified companies.'
        },
        {
            id: '04',
            question: 'How fast can we deploy?',
            answer: 'Our average integration time is 14 days. This includes connecting all data sources, training the Golden Goose models, and setting up your executive dashboards.'
        }
    ];

    return (
        <section id="faq" className="section bg-slate-50">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 self-start">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
                            <h2 className="text-3xl font-bold mb-4">Questions?</h2>
                            <p className="text-slate-600 mb-6">
                                Everything you need to know about the product and billing.
                            </p>
                            <a href="/contact" className="text-indigo-600 font-semibold hover:underline">
                                Can't find the answer? Chat to us &rarr;
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="group">
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className={`w-full text-left p-6 sm:p-8 rounded-3xl transition-all duration-300 flex items-start gap-6 border ${openIndex === idx
                                            ? 'bg-white border-indigo-200 shadow-lg'
                                            : 'bg-white border-transparent hover:border-slate-200'
                                        }`}
                                >
                                    <span className={`text-xl font-bold font-mono transition-colors ${openIndex === idx ? 'text-indigo-600' : 'text-slate-300'}`}>
                                        {faq.id}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className={`text-xl font-bold mb-2 transition-colors ${openIndex === idx ? 'text-slate-900' : 'text-slate-600'}`}>
                                            {faq.question}
                                        </h3>
                                        <div className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                                            }`}>
                                            <div className="overflow-hidden">
                                                <p className="text-slate-600 leading-relaxed text-lg">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-indigo-100 text-indigo-600 rotate-45' : 'bg-slate-100 text-slate-400'}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
