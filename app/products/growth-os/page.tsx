import GrowthOSClient from './GrowthOSClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Growth OS - Algorithmic Revenue Engine | ApexOne Studios",
    description: "Scale your revenue with Growth OS. Use scientific data modeling to optimize CAC, increase LTV, and automate customer acquisition.",
    openGraph: {
        title: "Growth OS - Algorithmic Revenue Engine | ApexOne Studios",
        description: "We install a mathematical revenue engine. Predictable, scalable growth for high-performance companies.",
    },
};

export default function GrowthOSPage() {
    return <GrowthOSClient />;
}
