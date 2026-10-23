import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  metadataBase: new URL('https://apexonestudio.com'),
  title: {
    default: "ApexOne Studios - The AI Operating System for Business Growth",
    template: "%s | ApexOne Studios"
  },
  description: "ApexOne Studios builds and installs sovereign AI operating systems, autonomous sales agents, and real-time business intelligence to engineer enterprise growth.",
  applicationName: "ApexOne Studios",
  keywords: ["AI Operating System", "ApexOne Studios", "Enterprise AI", "Golden Goose BI", "CIIP Cybersecurity", "Growth OS", "Autonomous AI Agents", "Business Automation", "Krithik R"],
  authors: [{ name: "ApexOne Studios", url: "https://apexonestudio.com" }, { name: "Krithik R", url: "https://apexonestudio.com/about" }],
  creator: "ApexOne Studios",
  publisher: "ApexOne Studios",
  alternates: {
    canonical: 'https://apexonestudio.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "ApexOne Studios - The AI Operating System for Business Growth",
    description: "ApexOne Studios installs custom AI intelligence layers and autonomous automation systems inside your business.",
    url: "https://apexonestudio.com",
    siteName: "ApexOne Studios",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ApexOne Studios Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApexOne Studios - The AI Operating System for Business Growth",
    description: "ApexOne Studios installs custom AI intelligence layers and autonomous automation systems inside your business.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased text-slate-900 bg-white selection:bg-indigo-500/30" suppressHydrationWarning>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ApexOne Studios",
              "url": "https://apexonestudio.com",
              "logo": "https://apexonestudio.com/logo.png",
              "description": "The AI Operating System for Business Growth",
              "founder": {
                "@type": "Person",
                "name": "Krithik R",
                "jobTitle": "Founder & CEO"
              },
              "sameAs": [
                "https://x.com/Apexonestudio",
                "https://www.linkedin.com/company/apex-one-studio",
                "https://www.youtube.com/channel/UCWcqtFUkhYoR5bfD-x0tn-g"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9902079990",
                "contactType": "customer service"
              }
            })
          }}
        />
      </body>
    </html>
  );
}

