import DashboardClient from './DashboardClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Command Center | ApexOne Studios",
    description: "Executive AI telemetry and real-time operational dashboard for ApexOne clients.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardPage() {
    return <DashboardClient />;
}
