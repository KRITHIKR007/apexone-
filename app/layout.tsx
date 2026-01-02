import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://apexonestudios.com'),
  title: {
    default: "ApexOne Studios - The AI Operating System for Business Growth",
    template: "%s | ApexOne Studios"
  },
  description: "ApexOne Studios installs an AI-powered intelligence, sales, and automation system inside your business so you can see where you're losing money, fix it, and scale faster than your competitors.",
  applicationName: "ApexOne Studios",
  keywords: ["AI", "Business Intelligence", "Automation", "Sales", "Marketing", "Growth", "Analytics", "CRM", "ApexOne"],
  authors: [{ name: "ApexOne Studios", url: "https://apexonestudios.com" }],
  creator: "ApexOne Studios",
  publisher: "ApexOne Studios",
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
    description: "Transform your business with AI-powered intelligence and automation",
    url: "https://apexonestudios.com",
    siteName: "ApexOne Studios",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "ApexOne Studios Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApexOne Studios - The AI Operating System for Business Growth",
    description: "Transform your business with AI-powered intelligence and automation",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-slate-900 bg-white selection:bg-indigo-500/30">
        <div className="main-layout">
          {children}
        </div>
      </body>
    </html>
  );
}

