import ApexEduClient from './ApexEduClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Apex.EDU - Academic Intelligence & Campus OS | ApexOne Studios",
    description: "The Cognitive Operating System for Educational Institutions spanning Pre-University, University, and Graduate Research Schools.",
    openGraph: {
        title: "Apex.EDU - Academic Intelligence & Campus OS | ApexOne Studios",
        description: "Transform education administration, predictive student retention, and research IP security with Apex.EDU.",
        images: ["/logo.png"],
    },
};

export default function ApexEduPage() {
    return <ApexEduClient />;
}
