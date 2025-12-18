import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import productsData from '@/data/products.json';
import type { ProductsData } from '@/types';
import ProductsClient from './ProductsClient';

// SEO Metadata for Products Page
export const metadata: Metadata = {
  title: "Our Products - Fresh Cakes, Breads & Pastries",
  description: "Explore Neil Bakery's delicious range of fresh breads, birthday cakes, wedding cakes, pastries and drinks. Available in Moratuwa, Egoda Uyana & Korelawella. Order custom cakes today!",
  keywords: [
    'Neil Bakery products',
    'birthday cakes Moratuwa',
    'wedding cakes Sri Lanka',
    'custom cakes Egoda Uyana',
    'fresh bread Korelawella',
    'pastries Moratuwa',
    'bakery menu',
    'order cakes online'
  ],
  openGraph: {
    title: "Our Products | Neil Bakery",
    description: "Fresh breads, custom cakes, pastries and drinks. Order from Neil Bakery today!",
    url: 'https://neilbakery.lk/products',
    images: [
      {
        url: '/neli_banner.png',
        width: 1200,
        height: 630,
        alt: 'Neil Bakery Products',
      }
    ],
  },
  alternates: {
    canonical: 'https://neilbakery.lk/products',
  },
};

export default function ProductsPage() {
  const products = productsData as ProductsData;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://neilbakery.lk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://neilbakery.lk/products"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <Navbar />
      <main>
        <h1 className="sr-only">Neil Bakery Products - Fresh Cakes, Breads & Pastries in Moratuwa</h1>
        <ProductsClient products={products} />
      </main>
      <Footer />
    </>
  );
}
