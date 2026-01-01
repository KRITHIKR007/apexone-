'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function ContactPage() {
    return (
        <main>
            <Navigation />
            <PageHeader
                title="Get in Touch"
                subtitle="Ready to transform your business with ApexOne Studios? We are here to help."
                badge="Contact Us"
            />

            <section className="section">
                <div className="container">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">

                        {/* Contact Info */}
                        <div className="lg:w-1/3 space-y-12">
                            <div>
                                <div>
                                    <h3 className="text-xl font-bold mb-6">Headquarters</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="font-bold text-slate-800">Bangalore, India</div>
                                            <p className="text-slate-600 text-sm">ApexOne Studios<br />Bangalore, KA, India</p>
                                            <span className="inline-block mt-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100">Global HQ</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-6">Connect</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                                            <span className="text-sm font-medium">General Inquiries</span>
                                            <a href="mailto:apexonestudio@gmail.com" className="text-indigo-600 text-sm hover:underline">apexonestudio@gmail.com</a>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                                            <span className="text-sm font-medium">Careers</span>
                                            <a href="mailto:apexonestudio@gmail.com" className="text-indigo-600 text-sm hover:underline">apexonestudio@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-2/3">
                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50" placeholder="John" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50" placeholder="john@company.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50" placeholder="Acme Inc." />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Interest</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50">
                                            <option>Growth OS (90-Day System)</option>
                                            <option>Golden Goose (Business Intelligence)</option>
                                            <option>Enterprise OS</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                        <textarea className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50 h-32" placeholder="Tell us about your goals..."></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full justify-center py-4 text-lg">
                                        Request Consultation
                                    </button>
                                    <p className="text-xs text-center text-slate-500 mt-4">
                                        By submitting this form, you agree to our <a href="/legal/privacy" className="underline">Privacy Policy</a>.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
