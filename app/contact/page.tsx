'use client';

import { useState, FormEvent } from 'react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "ff0a4001-5e4f-4bf6-b126-b307852d233d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                form.reset();
            } else {
                setSubmitStatus('error');
                console.error("Form submission error:", data.message);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error("Network error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-black selection:text-white">
            <Navigation />

            {/* Compact Header */}
            <section className="pt-32 pb-12 border-b border-slate-100">
                <div className="container max-w-7xl">
                    <h1 className="text-5xl font-bold tracking-tight text-slate-900">
                        Contact Us.
                    </h1>
                </div>
            </section>

            <section className="py-20">
                <div className="container max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* LEFT: Details */}
                        <div className="lg:col-span-4 space-y-12">
                            {/* HQ */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Global Headquarters</h3>
                                <div>
                                    <p className="text-lg font-bold text-slate-900 leading-tight">ApexOne Studios</p>
                                    <p className="text-slate-600 leading-relaxed mt-2">
                                        Akshaya Nilaya, <br />
                                        Ranganath Layout, <br />
                                        Harohalli, Bangalore South,<br />
                                        Karnataka, India
                                    </p>
                                </div>
                                <a href="#" className="inline-block text-sm font-bold underline decoration-slate-300 hover:decoration-black transition-all">View on Google Maps</a>
                            </div>

                            {/* Departments */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Departments</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-bold text-slate-900 uppercase">New Business</p>
                                        <a href="mailto:apexonestudio@gmail.com" className="text-slate-600 hover:text-black transition-colors block">apexonestudio@gmail.com</a>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900 uppercase">Careers</p>
                                        <a href="mailto:apexonestudio@gmail.com" className="text-slate-600 hover:text-black transition-colors block">apexonestudio@gmail.com</a>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900 uppercase">Press</p>
                                        <a href="mailto:apexonestudio@gmail.com" className="text-slate-600 hover:text-black transition-colors block">apexonestudio@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Operating Hours</h3>
                                <div>
                                    <p className="text-lg font-medium text-slate-900">10:00 AM — 07:00 PM IST</p>
                                    <p className="text-sm text-slate-400 mt-1">Monday through Friday</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                                <h2 className="text-2xl font-bold mb-8">Send a Message</h2>

                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                                        <p className="text-emerald-800 font-medium">Success! Your message has been sent. We'll get back to you soon.</p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-800 font-medium">Something went wrong. Please try again or email us directly.</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-slate-900">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-all outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-slate-900">Work Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-all outline-none"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-bold text-slate-900">Company</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-all outline-none"
                                                placeholder="Acme Inc."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-bold text-slate-900">Subject</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-all outline-none"
                                            >
                                                <option>Growth OS</option>
                                                <option>Enterprise OS</option>
                                                <option>CIIP (Competitive Intelligence)</option>
                                                <option>Golden Goose (Business Intelligence)</option>
                                                <option>ACN (Apex Creators Network)</option>
                                                <option>General Inquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-slate-900">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-all outline-none h-40 resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center justify-between pt-4">
                                        <p className="text-xs text-slate-500 max-w-xs">By submitting this form, you agree to our Privacy Policy.</p>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Submit Request'}
                                        </button>
                                    </div>
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

