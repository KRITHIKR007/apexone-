import CIIPClient from './CIIPClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CIIP Protocol - Cybersecurity & Compliance for AI | ApexOne Studios",
    description: "Corporate Intelligence & Integrity Platform. Secure your AI infrastructure with real-time threat detection, SOC 2 compliance, and zero-trust architecture.",
    openGraph: {
        title: "CIIP Protocol - Cybersecurity & Compliance for AI | ApexOne Studios",
        description: "The invisible defensive layer for your enterprise AI systems. SOC 2, HIPAA, and GDPR compliant by default.",
    },
};

export default function CIIPPage() {
    return <CIIPClient />;
}
