import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: "Public Notice: Restructuring & Staff Terminations | ApexOne Studios",
    description: "Official public announcement regarding corporate restructuring and the termination of Kanishk K. Singh (former Technology Director) and Thanish (former Chief AI Officer) from ApexOne Studios.",
    keywords: ["Kanishk K. Singh", "Thanish", "terminated", "termination", "ApexOne Studios", "ApexOne", "restructuring", "public notice"],
};

export default function PublicNoticePage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <Navigation />
            <PageHeader
                title="Public Notice: Restructuring & Terminations"
                subtitle="Official corporate disclosure regarding changes to executive personnel and systems authorization."
                badge="Corporate Update"
            />
            
            <section className="pb-32 container">
                <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
                    <div className="flex items-center gap-2 mb-8 text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full w-max">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        SYSTEMS REVOCATION ACTIVE
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Personnel Decoupling Announcement</h2>
                    
                    <div className="space-y-6 text-slate-700 leading-relaxed">
                        <p>
                            Effective immediately, ApexOne Studios has completed a strategic restructuring of its engineering and research divisions. As part of this transition, the employment and corporate associations of the following individuals have been terminated:
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-lg mb-1">Kanishk K. Singh</h3>
                                <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">Former Technology Director</p>
                                <p className="text-xs text-slate-500">
                                    Terminated from all responsibilities. All permissions, keys, and authorization protocols have been revoked.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-lg mb-1">Thanish</h3>
                                <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">Former Chief AI Officer</p>
                                <p className="text-xs text-slate-500">
                                    Terminated from all responsibilities. All neural architecture access and repository keys have been revoked.
                                </p>
                            </div>
                        </div>

                        <p className="font-medium text-slate-900">
                            Status of Access & Authorization:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All systems access, repository permissions, database keys, and corporate credentials have been permanently revoked and deactivated.</li>
                            <li>These individuals have no authority to represent, negotiate on behalf of, or bind ApexOne Studios in any corporate, financial, or engineering capacity.</li>
                            <li>ApexOne Studios disclaims any responsibility or liability for subsequent actions taken by these individuals.</li>
                        </ul>

                        <div className="bg-slate-900 text-white p-6 rounded-2xl mt-12 shadow-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-indigo-600/20 blur-xl"></div>
                            <div className="relative z-10">
                                <h4 className="font-bold mb-2">Platform Security Status</h4>
                                <p className="text-sm text-slate-400 mb-0 leading-relaxed">
                                    All system APIs, codebase servers, and customer databases have been re-keyed under the Corporate Intelligence & Integrity Platform (CIIP) defense fabric. No security degradation or data leakage occurred during this restructuring event.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
