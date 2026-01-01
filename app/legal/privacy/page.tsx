'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function PrivacyPage() {
    return (
        <main>
            <Navigation />
            <PageHeader
                title="Privacy Policy"
                subtitle="Last updated: January 2026"
                badge="Legal"
            />

            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-slate">
                        <p>At ApexOne Studios, we take your privacy seriously. This policy outlines how we collect, use, and protect your data.</p>
                        <h3>1. Data Collection</h3>
                        <p>We collect information you provide directly to us when you use our services, create an account, or communicate with us.</p>
                        <h3>2. Use of Information</h3>
                        <p>We use the information we collect to operate, maintain, and improve our services.</p>
                        <h3>3. Data Security</h3>
                        <p>We implement industry-standard security measures to protect your personal information.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
