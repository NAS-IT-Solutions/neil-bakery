import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Neil's Bakery - Fresh Baked Goods Daily",
  description:
    'Discover freshly baked breads, pastries, cakes, and more at Neil\'s Bakery. Quality ingredients, traditional recipes, and exceptional taste. Visit us today!',
  keywords: ['bakery', 'bread', 'pastries', 'cakes', 'fresh baked goods', "Neil's Bakery"],
  authors: [{ name: "Neil's Bakery" }],
  openGraph: {
    title: "Neil's Bakery - Fresh Baked Goods Daily",
    description: 'Freshly baked goods made with love and the finest ingredients',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Neil Bakery | Crafting Happiness In Every Bite</title>
        <meta name="description" content="Discover Neil Bakery's delicious products, find our outlets, or contact us. Crafting happiness in every bite!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Neil Bakery",
              "url": "https://neilbakery.lk",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://neilbakery.lk/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": ["Products", "Outlets", "Contact Us"],
              "url": [
                "https://neilbakery.lk/products",
                "https://neilbakery.lk/outlets",
                "https://neilbakery.lk/contact"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
