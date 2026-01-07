import EnterpriseOSClient from './EnterpriseOSClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Enterprise OS - AI Operating System for Business | ApexOne Studios",
    description: "Replace disconnected tools with Enterprise OS. A unified AI nervous system that automates finance, marketing, and operations workflows.",
    openGraph: {
        title: "Enterprise OS - AI Operating System for Business | ApexOne Studios",
        description: "A single, intelligent nervous system for your entire business. 360° visibility and autonomous uptime.",
    },
};

export default function EnterpriseOSPage() {
    return <EnterpriseOSClient />;
}
