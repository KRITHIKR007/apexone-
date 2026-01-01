'use client';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
    return (
        <div className="pt-32 pb-16 md:pt-40 md:pb-24 text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tl from-blue-500/5 to-emerald-500/5 rounded-full blur-[80px]" />
            </div>

            <div className="container relative z-10">
                {badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{badge}</span>
                    </div>
                )}
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
            </div>
        </div>
    );
}
