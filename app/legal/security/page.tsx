import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function SecurityPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <Navigation />

            {/* Dark Legal Header */}
            <div className="bg-[#050505] pt-32 pb-32 md:pb-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>

                {/* Radial Sheen */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-emerald-300 uppercase tracking-widest">Defense In Depth</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Security Architecture</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                        Enterprise-grade protection for your most critical assets.
                    </p>
                </div>
            </div>

            {/* Content Card */}
            <div className="container mx-auto px-4 md:px-6 pb-20 -mt-20 md:-mt-32 relative z-20">
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden max-w-5xl mx-auto border border-slate-200/60 ring-1 ring-black/5">

                    {/* Highlights */}
                    <div className="grid md:grid-cols-3 bg-slate-50/50 border-b border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="p-6 md:p-8">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                AES-256 Encryption
                            </h3>
                            <p className="text-sm text-slate-500">Data is encrypted at rest and in transit using industry standard protocols.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                SOC 2 Type II
                            </h3>
                            <p className="text-sm text-slate-500">In-progress certification to verify our availability and confidentiality.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                                Zero Trust
                            </h3>
                            <p className="text-sm text-slate-500">Rigorous RBAC and access monitoring for all internal systems.</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-16">
                        {/* Content */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-strong:text-slate-900">
                            <p className="lead font-medium text-slate-900">
                                At ApexOne Studios, security is not an afterthought—it's the foundation of our architecture. We employ defense-in-depth strategies to ensure your enterprise data is protected against modern cyber threats.
                            </p>

                            <h2>1. Infrastructure Security</h2>
                            <p>Our platforms are hosted on top-tier global cloud providers (AWS/GCP), utilizing:</p>
                            <ul>
                                <li><strong>Virtual Private Clouds (VPC):</strong> To isolate mission-critical resources.</li>
                                <li><strong>DDoS Protection:</strong> Automated mitigation of volumetric attacks via Cloudflare and AWS Shield.</li>
                                <li><strong>Intrusion Detection:</strong> Real-time monitoring of network traffic for anomalous behavior.</li>
                            </ul>

                            <h2>2. Data Encryption</h2>
                            <p>We ensure your data is unreadable to unauthorized parties at all times:</p>
                            <ul>
                                <li><strong>In Transit:</strong> All data transmitted between your devices and our servers is encrypted using TLS 1.3.</li>
                                <li><strong>At Rest:</strong> Data stored in our databases and file systems is encrypted using AES-256 standards.</li>
                                <li><strong>Key Management:</strong> Encryption keys are managed via hardware security modules (HSMs).</li>
                            </ul>

                            <h2>3. Access Control & Authentication</h2>
                            <p>Limitless access is a vulnerability. We enforce strict "Zero Trust" policies:</p>
                            <ul>
                                <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions ensure employees access only the data necessary for their role.</li>
                                <li><strong>Multi-Factor Authentication (MFA):</strong> Required for all administrative access.</li>
                                <li><strong>SSO Support:</strong> Integration with enterprise identity providers (Okta, Azure AD) for seamless and secure user management.</li>
                            </ul>

                            <h2>4. Compliance & Audits</h2>
                            <p>We align with international standards to ensure your compliance needs are met:</p>
                            <ul>
                                <li><strong>SOC 2 Type II:</strong> (In Progress) We are currently undergoing auditing to verify our security, availability, and confidentiality controls.</li>
                                <li><strong>GDPR/CCPA:</strong> Our data processing practices are designed to respect global privacy regulations.</li>
                            </ul>

                            <h2>5. Incident Response</h2>
                            <p>Our dedicated SecOps team maintains a 24/7 incident response capability, including:</p>
                            <ul>
                                <li> Automated alert triage.</li>
                                <li> Detailed containment and eradication playbooks.</li>
                                <li> Post-mortem analysis to prevent recurrence.</li>
                            </ul>

                            <div className="mt-12 pt-8 border-t border-slate-100 p-6 bg-red-50/50 rounded-xl border border-red-100">
                                <h3 className="mt-0 text-slate-900 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    Vulnerability Disclosure
                                </h3>
                                <p className="mb-4">
                                    If you discover a potential security vulnerability, please report it immediately. We practice responsible disclosure.
                                </p>
                                <a href="mailto:security@apexonestudio.com" className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700">
                                    Report a Vulnerability →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
