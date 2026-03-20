import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://apexonestudio.com';

    const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' },
        { url: '/about', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/blog', priority: 0.9, changeFrequency: 'weekly' },
        { url: '/careers', priority: 0.7, changeFrequency: 'weekly' },
        { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/coin', priority: 0.6, changeFrequency: 'monthly' },
        { url: '/products/golden-goose', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/products/ciip', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/products/growth-os', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/products/enterprise-os', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/products/acn', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/legal/privacy', priority: 0.4, changeFrequency: 'yearly' },
        { url: '/legal/terms', priority: 0.4, changeFrequency: 'yearly' },
        { url: '/legal/security', priority: 0.4, changeFrequency: 'yearly' },
    ];

    const blogSlugs = [
        'state-of-ai-2026',
        'death-of-traditional-saas',
        'building-autonomous-sales-agents',
        'scaling-fintech-to-50m',
        'risks-of-enterprise-ai',
        'dashboard-fatigue',
        'automating-customer-support',
    ];

    const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        ...staticRoutes.map(({ url, priority, changeFrequency }) => ({
            url: `${baseUrl}${url}`,
            lastModified: new Date(),
            changeFrequency,
            priority,
        })),
        ...blogRoutes,
    ];
}
