import ServicesClient from './ServicesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Services & Sovereign Platforms - ApexOne Studios",
    description: "Meet the A-list of enterprise intelligence. Explore Growth OS, Golden Goose, CIIP Enclave, and Enterprise OS unified under the Sovereign Enterprise Bundle.",
    openGraph: {
        title: "Services & Sovereign Platforms - ApexOne Studios",
        description: "Autonomous sales swarms, deterministic financial models, and air-gapped sovereign security. Engineered to scale net margin without payroll inflation.",
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
