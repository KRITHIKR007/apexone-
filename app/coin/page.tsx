import APXCoinClient from './APXCoinClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "APX Coin - Decentralized Intelligence Protocol | ApexOne Studios",
    description: "APX Coin powers the sovereign data & AI execution layer across the ApexOne Studios ecosystem.",
    openGraph: {
        title: "APX Coin - Decentralized Intelligence Protocol | ApexOne Studios",
        description: "The utility and governance protocol powering autonomous AI computation.",
        images: ["/apx-coin.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "APX Coin - Decentralized Intelligence Protocol | ApexOne Studios",
        description: "The utility and governance protocol powering autonomous AI computation.",
        images: ["/apx-coin.png"],
    },
};

export default function APXCoinPage() {
    return <APXCoinClient />;
}
