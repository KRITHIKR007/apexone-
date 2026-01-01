'use client';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function TermsPage() {
    return (
        <main>
            <Navigation />
            <PageHeader
                title="Terms of Service"
                subtitle="Last updated: January 2026"
                badge="Legal"
            />

            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-slate">
                        <h3>1. Acceptance of Terms</h3>
                        <p>By accessing and using ApexOne Studios services, you agree to comply with and be bound by these Terms of Service.</p>
                        <h3>2. Use License</h3>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on ApexOne Studios's website for personal, non-commercial transitory viewing only.</p>
                        <h3>3. Disclaimer</h3>
                        <p>The materials on ApexOne Studios's website are provided on an 'as is' basis.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
