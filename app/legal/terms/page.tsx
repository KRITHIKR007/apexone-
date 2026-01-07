import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function TermsPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <Navigation />

            {/* Dark Legal Header */}
            <div className="bg-[#050505] pt-32 pb-32 md:pb-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-indigo-300 uppercase tracking-widest">Master Agreement</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Terms of Service</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                        The rules of engagement for using the ApexOne Cognitive Engine.
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
                                <span className="w-2 h-2 rounded-full bg-indigo-500"></span> License Grant
                            </h3>
                            <p className="text-sm text-slate-500">Non-exclusive, revocable license to access our AI platforms.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-indigo-500"></span> IP Rights
                            </h3>
                            <p className="text-sm text-slate-500">You own your data. We own the AI models and platform code.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Fair Use
                            </h3>
                            <p className="text-sm text-slate-500">Strict prohibition on reverse engineering or malicious use.</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-16">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center justify-between text-xs md:text-sm text-slate-400 mb-12 pb-8 border-b border-slate-100 uppercase tracking-wider font-medium">
                            <div>Version 2.1 • Effective Jan 1, 2026</div>
                            <div className="text-indigo-600">APX-TOS-GLOBAL</div>
                        </div>

                        {/* Content */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-strong:text-slate-900">
                            <p className="lead font-medium text-slate-900">
                                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "User") and ApexOne Studios ("ApexOne") governing your access to and use of our AI software, platforms, and services.
                            </p>

                            <h2>1. Acceptance of Terms</h2>
                            <p>By registering for, accessing, or using the ApexOne services, you agree to be bound by these Terms. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity.</p>

                            <h2>2. Services & License</h2>
                            <p>Subject to your compliance with these Terms and payment of applicable fees, ApexOne grants you a limited, non-exclusive, non-transferable, revocable right to access and use our:
                            </p>
                            <ul>
                                <li><strong>Growth OS:</strong> For marketing automation and revenue intelligence.</li>
                                <li><strong>CIIP Platform:</strong> For corporate intelligence and telemetry.</li>
                                <li><strong>Enterprise OS:</strong> For large-scale organizational management.</li>
                            </ul>

                            <h2>3. User Obligations</h2>
                            <p>You agree to:</p>
                            <ul>
                                <li>Provide accurate and current information during registration.</li>
                                <li>Maintain the security of your account credentials.</li>
                                <li>Use the services only for lawful business purposes.</li>
                                <li>Not reverse engineer, decompile, or attempt to extract the source code or underlying algorithms of the ApexOne platform.</li>
                            </ul>

                            <h2>4. Fees and Payment</h2>
                            <p>Service fees are billed in advance on a monthly or annual basis. All payment obligations are non-cancelable and fees paid are non-refundable, except as expressly provided in a separate Service Level Agreement (SLA). Failure to pay may result in suspension of services.</p>

                            <h2>5. Intellectual Property</h2>
                            <ul>
                                <li><strong>ApexOne IP:</strong> We retain all rights, title, and interest in our platform, AI models, algorithms, and documentation.</li>
                                <li><strong>Customer Data:</strong> You retain all rights to the data you upload or connect to our services. You grant us a license to use this data solely to provide and improve the services for you.</li>
                            </ul>

                            <h2>6. AI & Predictive Nature</h2>
                            <p>Our services utilize advanced Artificial Intelligence to provide predictions and insights. You acknowledge that:</p>
                            <ul>
                                <li>AI predictions are probabilistic and may not perfectly forecast future outcomes.</li>
                                <li>ApexOne does not guarantee specific revenue results or financial outcomes.</li>
                                <li>You maintain final decision-making authority for all business actions taken based on our insights.</li>
                            </ul>

                            <h2>7. Limitation of Liability</h2>
                            <p>To the maximum extent permitted by law, ApexOne shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>

                            <h2>8. Termination</h2>
                            <p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

                            <h2>9. Governing Law</h2>
                            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

                            <div className="mt-12 pt-8 border-t border-slate-100 p-6 bg-slate-50 rounded-xl">
                                <h3 className="mt-0 text-slate-900">Contact Legal Team</h3>
                                <p className="mb-0">For legal inquiries, please contact <a href="mailto:legal@apexonestudio.com" className="font-bold">legal@apexonestudio.com</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
