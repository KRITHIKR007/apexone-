'use client';

export default function Products() {
    // Premium Product Data
    const products = [
        {
            title: 'Golden Goose',
            description: 'The automated revenue engine. Scale vertically without adding headcount.',
            image: '/products/golden-goose.png',
            link: '/products/golden-goose'
        },
        {
            title: 'CIIP Platform',
            description: 'Central Intelligence & Integration Platform. The brain of your enterprise.',
            image: '/products/ciip.png',
            link: '/products/ciip'
        },
        {
            title: 'Growth OS',
            description: 'Data-driven market expansion and customer acquisition at scale.',
            image: '/products/growth-os.png',
            link: '/products/growth-os'
        },
        {
            title: 'Enterprise OS',
            description: 'Full-stack operational infrastructure for high-velocity organizations.',
            image: '/products/enterprise-os.png',
            link: '/products/enterprise-os'
        },
        {
            title: 'Apex Creators Network (ACN)',
            description: 'Elite talent on demand. Access the top 1% of global creative professionals.',
            image: '/products/acn-network.png',
            link: '/products/acn'
        }
    ];

    return (
        <section id="products" className="py-32 bg-white border-t border-slate-100">
            <div className="container mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-slate-900"></span>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-900">The Ecosystem</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
                            Tools for the <br />
                            <span className="text-slate-400">exponential age.</span>
                        </h2>
                    </div>
                </div>

                {/* Vertical Product List - Ultra Editorial */}
                <div className="space-y-16 md:space-y-32">
                    {products.map((product, index) => (
                        <div key={index} className={`group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-24`}>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2">
                                <a href={product.link} className="block relative overflow-hidden rounded-lg aspect-video shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700">
                                    <div className="absolute inset-0 bg-slate-900/10 transition-opacity duration-500 group-hover:opacity-0 z-10" />
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                                    />
                                </a>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/3 flex flex-col justify-center">
                                <div className="text-xs font-mono text-slate-400 mb-4">0{index + 1}</div>
                                <h3 className="text-3xl font-medium text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors duration-300">
                                    <a href={product.link}>{product.title}</a>
                                </h3>
                                <div className="h-px w-12 bg-slate-200 mb-8 mt-2" />
                                <p className="text-lg text-slate-500 leading-relaxed mb-10">
                                    {product.description}
                                </p>

                                <a href={product.link} className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-900 group/link">
                                    View Product
                                    <span className="w-8 h-px bg-slate-900 group-hover/link:w-12 transition-all duration-300" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
