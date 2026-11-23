'use client';

import Image from 'next/image';

interface TechItem {
    name: string;
    icon: string;
    styleClass: string;
}

const TECH_ITEMS: TechItem[] = [
    // Google Cloud & Columnar
    {
        name: 'AlloyDB',
        icon: '/logos/alloydb.svg',
        styleClass: 'font-mono font-bold tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'BigQuery',
        icon: '/logos/bigquery.svg',
        styleClass: 'font-sans font-black tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'Google Cloud',
        icon: '/logos/google-cloud.svg',
        styleClass: 'font-sans font-bold tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'Vertex AI',
        icon: '/logos/vertex-ai.svg',
        styleClass: 'font-sans font-extrabold uppercase tracking-widest text-base sm:text-lg'
    },
    // Modern Data Lakehouse & Streaming
    {
        name: 'Databricks',
        icon: '/logos/databricks.svg',
        styleClass: 'font-sans font-black tracking-tight text-lg sm:text-xl lowercase'
    },
    {
        name: 'Apache Iceberg',
        icon: '/logos/apache-iceberg.svg',
        styleClass: 'font-serif font-bold tracking-normal text-lg sm:text-xl'
    },
    {
        name: 'Snowflake',
        icon: '/logos/snowflake.svg',
        styleClass: 'font-sans font-bold uppercase tracking-widest text-base sm:text-lg'
    },
    {
        name: 'Apache Spark',
        icon: '/logos/apache-spark.svg',
        styleClass: 'font-sans font-black tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'ClickHouse',
        icon: '/logos/clickhouse.svg',
        styleClass: 'font-mono font-bold tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'Apache Kafka',
        icon: '/logos/kafka.svg',
        styleClass: 'font-mono font-bold tracking-wide text-base sm:text-lg'
    },
    {
        name: 'PostgreSQL',
        icon: '/logos/postgresql.svg',
        styleClass: 'font-serif font-semibold tracking-normal text-lg sm:text-xl'
    },
    {
        name: 'Redis',
        icon: '/logos/redis.svg',
        styleClass: 'font-mono font-bold uppercase tracking-wider text-base sm:text-lg'
    },
    // AI Agents & Engineering
    {
        name: 'Claude',
        icon: '/logos/claude.svg',
        styleClass: 'font-serif font-bold tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'Anthropic',
        icon: '/logos/anthropic.svg',
        styleClass: 'font-sans font-black uppercase tracking-widest text-base sm:text-lg'
    },
    {
        name: 'LangChain',
        icon: '/logos/langchain.svg',
        styleClass: 'font-mono font-bold tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'Python',
        icon: '/logos/python.svg',
        styleClass: 'font-mono font-bold tracking-tight text-lg sm:text-xl'
    },
    // Cloud & Orchestration
    {
        name: 'AWS',
        icon: '/logos/aws.svg',
        styleClass: 'font-sans font-black tracking-widest text-lg sm:text-xl'
    },
    {
        name: 'Azure',
        icon: '/logos/azure.svg',
        styleClass: 'font-sans font-bold tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'Kubernetes',
        icon: '/logos/kubernetes.svg',
        styleClass: 'font-sans font-black tracking-wider text-base sm:text-lg uppercase'
    },
    {
        name: 'Docker',
        icon: '/logos/docker.svg',
        styleClass: 'font-sans font-black tracking-tight text-lg sm:text-xl'
    },
    // Revenue, Telemetry & Growth
    {
        name: 'stripe',
        icon: '/logos/stripe.svg',
        styleClass: 'font-sans font-black italic tracking-tighter text-xl sm:text-2xl lowercase'
    },
    {
        name: 'Shopify Plus',
        icon: '/logos/shopify.svg',
        styleClass: 'font-sans font-bold tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'Meta',
        icon: '/logos/meta.svg',
        styleClass: 'font-sans font-bold tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'Salesforce',
        icon: '/logos/salesforce.svg',
        styleClass: 'font-sans font-extrabold italic tracking-tight text-lg sm:text-xl'
    },
    {
        name: 'HubSpot',
        icon: '/logos/hubspot.svg',
        styleClass: 'font-sans font-bold tracking-tight text-lg sm:text-xl'
    }
];

export default function TrustedBy() {
    return (
        <section className="py-10 sm:py-14 border-y border-slate-200/80 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-7 text-center">
                <p className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-[0.25em]">
                    Enterprise Data Lakehouse, Autonomous Agents & Cloud Architecture
                </p>
            </div>

            {/* Single-Line Infinite Scroll Marquee */}
            <div className="relative w-full overflow-hidden group">
                {/* Left Fade Gradient Mask */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />

                {/* The Scrolling Track (Duplicated for seamless infinite loop) */}
                <div className="flex w-max items-center gap-14 sm:gap-20 py-2 animate-marquee-slow group-hover:[animation-play-state:paused]">
                    {[...TECH_ITEMS, ...TECH_ITEMS].map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 cursor-default select-none group/item"
                        >
                            <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
                                <Image
                                    src={tech.icon}
                                    alt={`${tech.name} logo`}
                                    width={28}
                                    height={28}
                                    className="w-full h-full object-contain"
                                    unoptimized
                                />
                            </div>
                            <span className={`${tech.styleClass} text-slate-800 group-hover/item:text-slate-950 whitespace-nowrap transition-colors`}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Right Fade Gradient Mask */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
            </div>
        </section>
    );
}
