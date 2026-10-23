import CareersClient from './CareersClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers & Open Roles | ApexOne Studios",
    description: "Join ApexOne Studios. We are hiring principal AI scientists, neural systems engineers, AR/VR spatial architects, and strategic growth leads.",
    openGraph: {
        title: "Careers & Open Roles | ApexOne Studios",
        description: "Build the future of enterprise AI operating systems with us.",
        images: ["/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers & Open Roles | ApexOne Studios",
        description: "Build the future of enterprise AI operating systems with us.",
        images: ["/logo.png"],
    },
};

export default function CareersPage() {
    return <CareersClient />;
}
