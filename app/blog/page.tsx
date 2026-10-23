import BlogClient from './BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Insights & Intelligence | ApexOne Studios Blog",
    description: "Deep dives into the mechanics of modern business growth, autonomous AI agents, enterprise cybersecurity, and algorithmic revenue engines.",
    openGraph: {
        title: "Insights & Intelligence | ApexOne Studios Blog",
        description: "Strategy, AI Engineering, and Enterprise Operations insights from the ApexOne Studios team.",
        images: ["/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Insights & Intelligence | ApexOne Studios Blog",
        description: "Strategy, AI Engineering, and Enterprise Operations insights from the ApexOne Studios team.",
        images: ["/logo.png"],
    },
};

export default function BlogPage() {
    return <BlogClient />;
}
