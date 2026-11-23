'use client';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
    return (
        <div className="pt-32 pb-16 md:pt-40 md:pb-24 text-center relative overflow-hidden">
            <div className="container relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
            </div>
        </div>
    );
}
