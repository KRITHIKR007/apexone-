import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://apexonestudios.com';

    const routes = [
        '',
        '/about',
        '/blog',
        '/careers',
        '/contact',
        '/legal/privacy',
        '/legal/security',
        '/legal/terms',
        '/products/ciip',
        '/products/enterprise-os',
        '/products/golden-goose',
        '/products/growth-os',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
