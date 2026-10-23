import AboutClient from './AboutClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | ApexOne Studios",
    description: "Learn about ApexOne Studios, our leadership under Founder & CEO Krithik R, our operating principles, and our mission to engineer enterprise growth with AI.",
    openGraph: {
        title: "About Us | ApexOne Studios",
        description: "We are ApexOne Studios. A collective of strategists, engineers, and visionaries obsessed with the mathematical certainty of growth.",
        images: ["/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | ApexOne Studios",
        description: "We are ApexOne Studios. A collective of strategists, engineers, and visionaries obsessed with the mathematical certainty of growth.",
        images: ["/logo.png"],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
