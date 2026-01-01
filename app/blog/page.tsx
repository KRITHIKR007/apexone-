'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function BlogPage() {
    const articles = [
        {
            category: "Strategy",
            slug: "death-of-traditional-saas",
            title: "The Death of Traditional SaaS: Why Service-Plus-Software is Winning",
            excerpt: "The era of empty subscriptions is over. Companies now demand outcomes, not just login credentials.",
            date: "Jan 2, 2026",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "AI Engineering",
            slug: "building-autonomous-sales-agents",
            title: "Building Autonomous Sales Agents That Don't Hallucinate",
            excerpt: "A technical deep dive into RAG pipelines and guardrails for deploying AI in customer-facing roles.",
            date: "Dec 28, 2025",
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Growth",
            slug: "scaling-fintech-to-50m",
            title: "How We Scaled a Fintech to $50M ARR with 3 Marketers",
            excerpt: "The exact playbook of automation, Golden Goose intelligence, and high-velocity testing.",
            date: "Dec 15, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Security",
            slug: "risks-of-enterprise-ai",
            title: "The Hidden Risks of Enterprise AI Adoption",
            excerpt: "Data leaks in LLMs are real. Here is how CIIP prevents training data contamination.",
            date: "Nov 30, 2025",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Intelligence",
            slug: "dashboard-fatigue",
            title: "Why Dashboard Fatigue is Killing Your Efficiency",
            excerpt: "You don't need more charts. You need actionable insights pushed to you.",
            date: "Nov 12, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Case Study",
            slug: "automating-customer-support",
            title: "Automating 90% of Customer Support for a Logistics Giant",
            excerpt: "How we implemented a Tier-1 AI defense layer that solved tickets in under 3 seconds.",
            date: "Oct 24, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <main>
            <Navigation />
            <PageHeader
                title="Insights & Intelligence"
                subtitle="Deep dives into the mechanics of modern business growth and AI."
                badge="The Blog"
            />

            <section className="section">
                <div className="container">
                    <div className="max-w-6xl mx-auto">

                        {/* Categories */}
                        <div className="flex flex-wrap gap-4 justify-center mb-16">
                            {['All', 'Strategy', 'AI Engineering', 'Growth', 'Security', 'Case Studies'].map((cat, i) => (
                                <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Featured Article */}
                        <div className="mb-20">
                            <a href="/blog/state-of-ai-2026" className="group block grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-xl">
                                <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
                                        alt="Featured"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm">Featured Report</span>
                                    <h2 className="text-4xl font-bold group-hover:text-indigo-700 transition-colors">The State of AI Business Operations 2026</h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        We analyzed 500+ enterprise companies to understand how AI agents are replacing traditional operational workflows. The results are startling.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span>By KRITHIK R</span>
                                        <span>•</span>
                                        <span>15 min read</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article, i) => (
                                <a key={i} href={`/blog/${article.slug}`} className="group block flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="h-48 relative overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                                            {article.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                                            <span>{article.date}</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20" />
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl font-bold mb-4">Get Intelligence Delivered</h2>
                                <p className="text-slate-400 mb-8">Join 15,000+ executives who read our weekly briefing on AI and growth.</p>
                                <div className="flex gap-2">
                                    <input type="email" placeholder="Enter your work email" className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                    <button className="btn btn-primary px-8">Subscribe</button>
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
