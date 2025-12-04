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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
