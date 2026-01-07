import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function PrivacyPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <Navigation />

            {/* Dark Legal Header */}
            <div className="bg-[#050505] pt-32 pb-32 md:pb-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-emerald-300 uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Privacy Policy</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                        Transparent, secure, and respectful. We believe your data belongs to you.
                    </p>
                </div>
            </div>

            {/* Content Card with Overlap */}
            <div className="container mx-auto px-4 md:px-6 pb-20 -mt-20 md:-mt-32 relative z-20">
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden max-w-5xl mx-auto border border-slate-200/60 ring-1 ring-black/5">

                    {/* Quick Highlights Grid */}
                    <div className="grid md:grid-cols-3 bg-slate-50/50 border-b border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="p-6 md:p-8">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Encrypted</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Your data is encrypted at rest and in transit using military-grade standards.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">No Training</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">We do <strong>not</strong> use your proprietary data to train models for other customers.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mb-4">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">PCI-DSS</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Payments are processed securely via top-tier compliant providers.</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-16">
                        {/* Metadata */}
                        <div className="flex flex-wrap items-center justify-between text-xs md:text-sm text-slate-400 mb-12 pb-8 border-b border-slate-100 uppercase tracking-wider font-medium">
                            <div className="flex items-center gap-6">
                                <span>Version 2.0</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span>Effective: Jan 1, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 mt-4 md:mt-0 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                Live Document
                            </div>
                        </div>

                        {/* Content */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-strong:text-slate-900">
                            <p className="lead">
                                At ApexOne Studios ("ApexOne", "we", "us", or "our"), safeguarding the confidentiality and integrity of your enterprise data is our highest priority. This Privacy Policy details how we collect, use, disclose, and secure your information when you access our AI-powered operating systems and services.
                            </p>

                            <h2>1. Information We Collect</h2>
                            <p>We collect information to provide and optimize our intelligent services:</p>
                            <ul>
                                <li><strong>Account Information:</strong> Name, corporate email address, company name, phone number, and authentication credentials.</li>
                                <li><strong>Operational Data:</strong> Data you connect to our ecosystem (marketing campaigns, CRM records, financial ledgers) for analysis by CIIP and Enterprise OS.</li>
                                <li><strong>Usage Telemetry:</strong> Logs, device information, IP addresses, and interaction patterns within our console to improve system performance and security.</li>
                                <li><strong>Payment Information:</strong> Billing addresses and payment method details (processed securely by our PCI-DSS compliant payment partners).</li>
                            </ul>

                            <h2>2. How We Use Your Data</h2>
                            <p>Your data fuels the cognitive engines of ApexOne. We use it to:</p>
                            <ul>
                                <li>Deploy, maintain, and secure our platforms (Growth OS, CIIP, Enterprise OS).</li>
                                <li>Generate real-time intelligence, predictions, and automated actions as requested by you.</li>
                                <li>Detect and prevent fraud, security breaches, and unauthorized access.</li>
                                <li>Comply with legal obligations and enforce our Terms of Service.</li>
                            </ul>

                            <div className="my-8 p-6 bg-slate-50 rounded-xl border-l-4 border-indigo-500">
                                <h4 className="text-indigo-900 font-bold mb-2 mt-0">Commitment to Data Sovereignty</h4>
                                <p className="mb-0 text-sm opacity-90">
                                    ApexOne does <strong>not</strong> use your proprietary business data to train our foundational models for other customers. Your enterprise intelligence remains isolated and confidential to your organization. This is a hard-coded principle in our architecture.
                                </p>
                            </div>

                            <h2>3. Data Sharing and Disclosure</h2>
                            <p>We do not sell your personal data. We strictly limit disclosure to:</p>
                            <ul>
                                <li><strong>Service Providers:</strong> Cloud infrastructure providers (e.g., AWS), payment processors (e.g., Stripe), and security vendors who assist in service delivery, bound by strict confidentiality agreements.</li>
                                <li><strong>Legal Compliance:</strong> When required by law, subpoena, or to protect the vital interests of our users or the public.</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, subject to confidentiality requirements.</li>
                            </ul>

                            <h2>4. Data Retention</h2>
                            <p>We retain your data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. When data is no longer needed, we securely delete or anonymize it.</p>

                            <h2>5. Your Rights</h2>
                            <p>Depending on your jurisdiction, you may have rights to:</p>
                            <ul>
                                <li>Access, correct, or delete your personal information.</li>
                                <li>Restrict or object to our processing of your data.</li>
                                <li>Export your data in a portable format.</li>
                            </ul>
                            <p>To exercise these rights, please contact our Data Protection Officer at <a href="mailto:privacy@apexonestudio.com">privacy@apexonestudio.com</a>.</p>

                            <h2>6. Security</h2>
                            <p>We employ military-grade encryption (AES-256), rigorous access controls, and real-time threat monitoring to protect your data. Please refer to our <a href="/legal/security">Security Policy</a> for detailed architecture specifications.</p>

                            <h2>7. Updates to This Policy</h2>
                            <p>We may update this policy to reflect changes in our technologies or legal requirements. Vital changes will be communicated via email or console notifications.</p>

                            <div className="mt-16 pt-8 border-t border-slate-100">
                                <h3 className="mb-4">Contact Privacy Office</h3>
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 inline-block pr-20">
                                    <p className="mb-1 font-bold text-slate-900">ApexOne Studios - Legal Dept.</p>
                                    <p className="mb-0 text-slate-500">Bengaluru, India</p>
                                    <a href="mailto:privacy@apexonestudio.com" className="block mt-4 text-emerald-600 font-medium hover:underline">privacy@apexonestudio.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
