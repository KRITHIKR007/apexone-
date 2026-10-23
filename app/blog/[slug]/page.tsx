import BlogPostClient from './BlogPostClient';
import type { Metadata } from 'next';

const blogMetaMap: Record<string, { title: string; description: string; category: string; author: string }> = {
    "death-of-traditional-saas": {
        title: "The Death of Traditional SaaS: Why Service-Plus-Software is Winning",
        description: "The recurring revenue model is under siege. Learn why enterprise buyers demand autonomous outcomes over empty software logins.",
        category: "Strategy",
        author: "Krithik R",
    },
    "building-autonomous-sales-agents": {
        title: "Building Autonomous Sales Agents That Don't Hallucinate",
        description: "A technical deep dive into RAG pipelines, constitutional AI loops, and guardrails for customer-facing AI agents.",
        category: "AI Engineering",
        author: "ApexOne Technology Group",
    },
    "scaling-fintech-to-50m": {
        title: "How We Scaled a Fintech to $50M ARR with 3 Marketers",
        description: "The exact playbook of revenue attribution, Golden Goose intelligence, and high-velocity automated ad testing.",
        category: "Growth",
        author: "Ahyam",
    },
    "risks-of-enterprise-ai": {
        title: "The Hidden Risks of Enterprise AI Adoption",
        description: "Discover how Corporate Intelligence IP Protection (CIIP) prevents shadow AI leaks and secures enterprise data.",
        category: "Security",
        author: "ApexOne Research Fabric",
    },
    "dashboard-fatigue": {
        title: "Why Dashboard Fatigue is Killing Your Efficiency",
        description: "Stop wasting time looking at empty charts. Learn how push-based anomaly alerts drive real-time operational execution.",
        category: "Intelligence",
        author: "ApexOne Operations Team",
    },
    "state-of-ai-2026": {
        title: "The State of AI Business Operations 2026",
        description: "Our comprehensive analysis of how 500+ enterprise companies are deploying autonomous AI agents.",
        category: "Featured Report",
        author: "Krithik R",
    },
    "automating-customer-support": {
        title: "Automating 90% of Customer Support for a Logistics Giant",
        description: "How a Tier-1 AI defense layer solved enterprise support tickets in under 3 seconds with zero human intervention.",
        category: "Case Study",
        author: "Vasanth",
    },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    const meta = blogMetaMap[slug];

    if (!meta) {
        return {
            title: "Article Not Found | ApexOne Studios Blog",
            description: "The requested article was not found.",
        };
    }

    return {
        title: `${meta.title} | ApexOne Studios`,
        description: meta.description,
        authors: [{ name: meta.author }],
        alternates: {
            canonical: `https://apexonestudio.com/blog/${slug}`,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "article",
            url: `https://apexonestudio.com/blog/${slug}`,
            siteName: "ApexOne Studios",
            images: ["/logo.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: ["/logo.png"],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <BlogPostClient slug={resolvedParams?.slug} />;
}
