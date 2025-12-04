import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import productsData from '@/data/products.json';
import type { ProductsData, ProductCategory } from '@/types';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Full Menu - Neil's Bakery",
  description:
    'Browse our complete menu of fresh breads, pastries, cakes, and drinks. Quality baked goods made fresh daily.',
};

export default function ProductsPage() {
  const products = productsData as ProductsData;

  const categories: ProductCategory[] = [
    { key: 'bread', name: 'Breads', icon: '🍞', items: products.bread },
    { key: 'pastries', name: 'Pastries', icon: '🥐', items: products.pastries },
    { key: 'cakes', name: 'Cakes', icon: '🎂', items: products.cakes },
    { key: 'drinks', name: 'Drinks', icon: '☕', items: products.drinks },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
        {/* Header */}
        <div className="bg-amber-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-block mb-4 text-white hover:text-amber-100 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Full Menu</h1>
          <p className="text-xl text-amber-100">Explore our complete range of delicious products</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category) => (
          <section key={category.key} id={category.key} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">{category.icon}</span>
              <h2 className="text-4xl font-bold text-gray-900">{category.name}</h2>
              <div className="flex-1 h-1 bg-amber-600 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-amber-100"
                >
                  <div className="relative h-48 bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                    <div className="text-6xl opacity-30">
                      {category.icon}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-amber-600">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

        {/* Contact CTA */}
        <div className="bg-amber-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Place an Order?</h2>
            <p className="text-xl text-amber-100 mb-6">Contact us today for fresh baked goods</p>
            <Link href="/#contact">
              <button className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
