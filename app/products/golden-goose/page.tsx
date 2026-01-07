import GoldenGooseClient from './GoldenGooseClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Golden Goose - Business Intelligence AI | ApexOne Studios",
    description: "The 'Golden Goose' AI engine turns raw data into profitable decisions. Features Marketing Mix Modeling (MMM), LTV prediction, and automated competitor analysis.",
    openGraph: {
        title: "Golden Goose - Business Intelligence AI | ApexOne Studios",
        description: "Your data is your strategy. Predict revenue and automate execution with our proprietary BI engine.",
    },
};

export default function GoldenGoosePage() {
    return <GoldenGooseClient />;
}
