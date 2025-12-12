'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { ProductsData } from '@/types';
import { formatPrice } from '@/lib/utils';

type Props = {
  products: ProductsData;
};

type CategoryKey = 'bread' | 'pastries' | 'cakes' | 'drinks' | 'sweets';
type FilterKey = 'all' | CategoryKey;

type ProductItem = {
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
};

type Category = {
  key: CategoryKey;
  name: string;
  icon: string;
  items: ProductItem[];
};

export default function ProductsClient({ products }: Props) {
  const categories: Category[] = useMemo(
    () => [
      { key: 'bread', name: 'Breads', icon: '🍞', items: products.bread ?? [] },
      { key: 'pastries', name: 'Pastries', icon: '🥐', items: products.pastries ?? [] },
      { key: 'cakes', name: 'Cakes', icon: '🎂', items: products.cakes ?? [] },
      { key: 'drinks', name: 'Drinks', icon: '☕', items: products.drinks ?? [] },
      { key: 'sweets', name: 'Sweets', icon: '🍬', items: (products as any).sweets ?? [] },
    ],
    [products]
  );

  // ✅ Multi-select (default = All)
  const [selected, setSelected] = useState<FilterKey[]>(['all']);
  const isAllActive = selected.includes('all');

  const heroButtons: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'bread', label: 'Bread' },
    { key: 'pastries', label: 'Pastries' },
    { key: 'cakes', label: 'Cakes' },
    { key: 'drinks', label: 'Drinks' },
    { key: 'sweets', label: 'Sweets' },
  ];

  const toggleFilter = (key: FilterKey) => {
    setSelected((prev) => {
      // All is exclusive
      if (key === 'all') return ['all'];

      // If All is active and user clicks another category -> disable All and select category
      if (prev.includes('all')) return [key];

      // Toggle multi-select
      const exists = prev.includes(key);
      const next = exists ? prev.filter((x) => x !== key) : [...prev, key];

      // If nothing selected -> fallback to All
      return next.length === 0 ? ['all'] : next;
    });

    // ✅ no scrolling
  };

  const visibleCategories: Category[] = useMemo(() => {
    if (isAllActive) return categories;

    const selectedKeys = selected.filter(
      (k): k is CategoryKey => k !== 'all'
    );

    return categories.filter((c) => selectedKeys.includes(c.key));
  }, [categories, selected, isAllActive]);

  const buttonIcon = (label: string) => {
    switch (label) {
      case 'All':
        return '✨';
      case 'Bread':
        return '🍞';
      case 'Pastries':
        return '🥐';
      case 'Cakes':
        return '🎂';
      case 'Drinks':
        return '☕';
      case 'Sweets':
        return '🍬';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      {/* Hero Header */}
      <div className="h-[50vh] bg-[url('/neli_banner.png')] bg-cover bg-center bg-no-repeat text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Our Full Menu
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-amber-100">
            Explore our complete range of delicious products
          </p>

          {/* ✅ Mobile-style 3-per-row grid on ALL screens, bigger & centered */}
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-3 gap-4 max-w-xl sm:max-w-2xl">
              {heroButtons.map((btn) => {
                const active = selected.includes(btn.key);

                return (
                  <button
                    key={btn.label}
                    onClick={() => toggleFilter(btn.key)}
                    className={[
                      // Bigger, more visual buttons
                      'h-14 sm:h-16',
                      'px-4 sm:px-6',
                      'text-sm sm:text-base md:text-lg',
                      'font-semibold rounded-2xl',
                      'transition-all duration-200',
                      'shadow-md hover:shadow-lg',
                      'border backdrop-blur-sm',
                      active
                        ? 'bg-white text-amber-700 border-white scale-[1.03]'
                        : 'bg-white/25 hover:bg-white/35 text-white border-white/40',
                    ].join(' ')}
                  >
                    <span className="mr-2">{buttonIcon(btn.label)}</span>
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {visibleCategories.map((category) => (
          <section key={category.key} className="mb-12 sm:mb-16">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-3xl sm:text-4xl md:text-5xl">{category.icon}</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {category.name}
              </h2>
              <div className="flex-1 h-1 bg-amber-600 ml-3"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {category.items.map((product, index) => (
                <div
                  key={`${category.key}-${index}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-amber-100"
                >
                  {/* Product Image */}
                  <div className="relative h-44 sm:h-48 bg-amber-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index < 4}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-amber-600">
                        {formatPrice(product.price)}
                      </span>

                      <span className="text-sm font-semibold text-gray-700">
                        ⭐ {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="bg-amber-600 text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Place an Order?</h2>
          <p className="text-lg text-amber-100 mb-6">
            Contact us today for fresh baked goods
          </p>

          <Link href="/#contact">
            <button className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
