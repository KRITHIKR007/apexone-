import ContactClient from './ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us & Book Executive Briefing | ApexOne Studios",
    description: "Get in touch with ApexOne Studios. Schedule an executive briefing to deploy AI intelligence layers and autonomous growth systems inside your enterprise.",
    openGraph: {
        title: "Contact Us & Book Executive Briefing | ApexOne Studios",
        description: "Transform your enterprise operating model with ApexOne Studios.",
        images: ["/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us & Book Executive Briefing | ApexOne Studios",
        description: "Transform your enterprise operating model with ApexOne Studios.",
        images: ["/logo.png"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
