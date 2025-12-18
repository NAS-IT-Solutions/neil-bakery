
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import productsData from '@/data/products.json';
import type { ProductsData } from '@/types';
import ProductsClient from './ProductsClient';

export default function ProductsPage() {
  const products = productsData as ProductsData;

  return (
    <>
      <Head>
        <title>Order Delicious Cakes in Moratuwa | Neil Bakery</title>
        <meta name="description" content="Order custom cakes in Egodauyana from Neil Bakery. Birthday cakes, wedding cakes, and more!" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",
          \"@type\": \"Bakery\",
          \"name\": \"Neil Bakery\",
          \"address\": {
            \"@type\": \"PostalAddress\",
            \"streetAddress\": \"St.Annes Lane Katukurunda\",
            \"addressLocality\": \"Moratuwa\",
            \"addressRegion\": \"Western Province\",
            \"postalCode\": \"10400\",
            \"addressCountry\": \"LK\"
          },
          \"telephone\": \"+94771544293\",
          \"url\": \"https://neilbakery.lk\"
        }` }} />
      </Head>
      <Navbar />
      <main>
        <h1 className="sr-only">Order Cakes in Egodauyana, Moratuwa & Korelawella</h1>
        <ProductsClient products={products} />
      </main>
      <Footer />
    </>
  );
}
