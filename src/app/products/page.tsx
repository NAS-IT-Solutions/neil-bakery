import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import productsData from '@/data/products.json';
import type { ProductsData } from '@/types';

import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: "Full Menu - Neil's Bakery",
  description:
    "Browse our complete menu of fresh breads, pastries, cakes, and drinks. Quality baked goods made fresh daily.",
};

export default function ProductsPage() {
  const products = productsData as ProductsData;

  return (
    <>
      <Navbar />
      <ProductsClient products={products} />
      <Footer />
    </>
  );
}
