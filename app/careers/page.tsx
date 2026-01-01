'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

// Job Data Structure
const jobs = [
    {
        id: 'ai-eng',
        title: 'Senior AI Engineer',
        department: 'Engineering',
        location: 'Bengaluru (Hybrid)',
        type: 'Full-time',
        salary: '₹25L - ₹45L / year',
        description: 'We are looking for a Founding AI Engineer to lead the development of Golden Goose. You will work directly with KRITHIK R to build autonomous agents that can analyze complex financial and operational data.',
        requirements: [
            '3+ years exp in NLP & LLMs (OpenAI, Anthropic, Llama)',
            'Strong proficiency in Python, PyTorch/TensorFlow',
            'Experience building RAG pipelines at scale',
            'Ability to read research papers and implement SOTA models'
        ],
        whatYouWillDo: [
            'Architect the core decision engine of ApexOne Studios',
            'Fine-tune models on proprietary business datasets',
            'Optimize inference cost and latency',
            'ship code to production daily'
        ]
    },
    {
        id: 'full-stack',
        title: 'Founding Full Stack Engineer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        salary: '₹18L - ₹35L / year',
        description: 'You will build the dashboard that CEOs run their companies on. This is not a simple CRUD app; it is a high-performance command center visualizing millions of data points in real-time.',
        requirements: [
            'Expert in Next.js 14, TypeScript, and React Server Components',
            'Experience with real-time databases (Supabase/Firebase)',
            'Obsession with UI/UX details (Framer Motion, Tailwind)',
            'History of shipping side projects'
        ],
        whatYouWillDo: [
            'Build the "Mission Control" interface for clients',
            'Integrate complex 3rd party APIs (Stripe, HubSpot, Salesforce)',
            'Ensure sub-100ms UI response times',
            'Work primarily in TypeScript'
        ]
    },
    {
        id: 'sales-lead',
        title: 'Enterprise Accounts Lead',
        department: 'Growth',
        location: 'Remote / Travel',
        type: 'Full-time',
        salary: '₹15L Base + Uncapped Comm.',
        description: 'We sell high-ticket transformation systems (₹10L+). we need a killer who understands consultative selling and can close C-suite executives without being pushy.',
        requirements: [
            'Proven track record closing ₹10L+ B2B deals',
            'Understanding of enterprise software sales cycles',
            'Excellent communication skills (written & verbal)',
            'Fearless on the phone'
        ],
        whatYouWillDo: [
            'Handle inbound leads from our content engine',
            'Run demo calls with CEOs and Founders',
            'Negotiate contracts and navigate procurement',
            'Help refine the Growth OS value proposition'
        ]
    }
];

export default function CareersPage() {
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const toggleJob = (id: string) => {
        setExpandedJob(expandedJob === id ? null : id);
    };

    return (
        <main>
            <Navigation />
            <PageHeader
                title="Join the Revolution"
                subtitle="Work on problems that matter. Build systems that scale. Define the future of business intelligence."
                badge="Careers at ApexOne Studios"
            />

            <section className="section">
                <div className="container">
                    <div className="max-w-5xl mx-auto space-y-24">

                        {/* Culture Deck */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Why ApexOne Studios?</h2>
                                <div className="space-y-6 text-lg text-slate-600">
                                    <p>
                                        We are not a normal company. We don't do politics, we don't do busy work, and we don't do "good enough."
                                    </p>
                                    <p>
                                        We are a team of high-performers who are obsessed with building the most advanced business intelligence systems in the world.
                                    </p>
                                    <p>
                                        If you love autonomy, mastery, and purpose, you belong here.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="frosty-card p-6 text-center">
                                    <div className="text-3xl mb-2">⚡</div>
                                    <div className="font-bold">Move Fast</div>
                                </div>
                                <div className="frosty-card p-6 text-center">
                                    <div className="text-3xl mb-2">🧠</div>
                                    <div className="font-bold">Think Deep</div>
                                </div>
                                <div className="frosty-card p-6 text-center">
                                    <div className="text-3xl mb-2">🤝</div>
                                    <div className="font-bold">Trust First</div>
                                </div>
                                <div className="frosty-card p-6 text-center">
                                    <div className="text-3xl mb-2">🌍</div>
                                    <div className="font-bold">Work Anywhere</div>
                                </div>
                            </div>
                        </div>

                        {/* Perks */}
                        <div className="bg-slate-50 rounded-3xl p-12">
                            <h2 className="text-3xl font-bold mb-12 text-center">Top-Tier Benefits</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { title: 'Remote-First', desc: 'Work from anywhere in the world. We care about output, not hours.' },
                                    { title: 'Top 1% Compensation', desc: 'We pay above market rate because we only hire the top 1%.' },
                                    { title: 'Comprehensive Health', desc: 'Full medical, dental, and vision for you and your family.' },
                                    { title: 'Latest Gear', desc: 'MacBook Pro M4, 4K monitors, and whatever else you need.' },
                                    { title: 'Unlimited PTO', desc: 'Take the time you need to recharge. We insist on it.' },
                                    { title: 'Learning Budget', desc: '$5,000/year for courses, conferences, and books.' }
                                ].map(perk => (
                                    <div key={perk.title} className="bg-white p-6 rounded-xl border border-slate-200">
                                        <h3 className="font-bold text-lg mb-2 text-indigo-900">{perk.title}</h3>
                                        <p className="text-slate-600 text-sm">{perk.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Open Roles */}
                        <div>
                            <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
                            <div className="space-y-6">
                                {jobs.map(job => (
                                    <div key={job.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        {/* Job Header */}
                                        <div
                                            className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                                            onClick={() => toggleJob(job.id)}
                                        >
                                            <div>
                                                <h3 className="font-bold text-xl text-slate-900 mb-2">{job.title}</h3>
                                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                                        {job.department}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                        {job.location}
                                                    </span>
                                                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full font-medium">
                                                        {job.type}
                                                    </span>
                                                    <span className="text-emerald-600 font-semibold">
                                                        {job.salary}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-4 md:mt-0">
                                                <span className={`text-indigo-600 font-medium text-sm transition-transform inline-block ${expandedJob === job.id ? 'rotate-180' : ''}`}>
                                                    ▼ Details
                                                </span>
                                            </div>
                                        </div>

                                        {/* Expanded Details */}
                                        {expandedJob === job.id && (
                                            <div className="px-6 md:px-8 pb-8 border-t border-slate-100 bg-slate-50 animate-in fade-in slide-in-from-top-1 duration-200">
                                                <div className="pt-6 space-y-8">
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 mb-3">About the Role</h4>
                                                        <p className="text-slate-600 leading-relaxed max-w-3xl">
                                                            {job.description}
                                                        </p>
                                                    </div>

                                                    <div className="grid md:grid-cols-2 gap-8">
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 mb-3">Requirements</h4>
                                                            <ul className="space-y-2">
                                                                {job.requirements.map((req, i) => (
                                                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                                        <span className="text-indigo-500 mt-1">•</span>
                                                                        {req}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 mb-3">What You Will Do</h4>
                                                            <ul className="space-y-2">
                                                                {job.whatYouWillDo.map((item, i) => (
                                                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                                        <span className="text-indigo-500 mt-1">•</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="pt-6">
                                                        <a
                                                            href={`mailto:apexonestudio@gmail.com?subject=Application for ${job.title}&body=Hi ApexOne Studios Team,%0D%0A%0D%0AI am interested in the ${job.title} position. Here is my portfolio/resume link:%0D%0A%0D%0A[Paste Link Here]%0D%0A%0D%0AThanks.`}
                                                            className="btn btn-primary inline-flex items-center gap-2"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                            Apply via Email
                                                        </a>
                                                        <p className="text-xs text-slate-500 mt-3">
                                                            Clicking this will open your email client. Attach your resume and portfolio.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
