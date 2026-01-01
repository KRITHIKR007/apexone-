'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function SecurityPage() {
    return (
        <main>
            <Navigation />
            <PageHeader
                title="Security"
                subtitle="How we protect your business and data."
                badge="Trust & Safety"
            />

            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-slate">
                        <p>Security is at the core of everything we build at ApexOne Studios.</p>
                        <h3>Our Security Philosophy</h3>
                        <p>We believe in a defense-in-depth approach, ensuring multiple layers of security protect your critical business intelligence.</p>
                        <ul>
                            <li>SOC 2 Type II Compliant</li>
                            <li>End-to-End Encryption</li>
                            <li>Regular Penetration Testing</li>
                            <li>Role-Based Access Control (RBAC)</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
