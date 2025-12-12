'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  const products = [
    {
      image:
        'https://defencebakery.in/cdn/shop/files/Multi_Grain_Bread.jpg?v=1756544969&width=1500',
      name: 'Breads',
      description: 'Freshly baked daily'
    },
    {
      image:
        'https://images.stockcake.com/public/b/8/b/b8bca4f2-33d0-40cb-a267-d57d747713cc_large/assorted-breakfast-pastries-stockcake.jpg',
      name: 'Pastries',
      description: 'Flaky & delicious'
    },
    {
      image:
        'https://thumbs.dreamstime.com/b/sweet-pastries-berries-form-cake-muffins-showcase-pastry-shop-glass-stand-eclair-cakes-tartlets-refrigerator-294305026.jpg',
      name: 'Cakes',
      description: 'Custom & ready-made'
    },
    {
      image:
        'https://img.freepik.com/premium-photo/soft-drinks-water-splashes-color-natural-black-background_1091270-9168.jpg?w=360',
      name: 'Drinks',
      description: 'Hot & cold beverages'
    },
    {
      image:
        'https://static.vecteezy.com/system/resources/previews/049/544/454/large_2x/plate-of-assorted-cakes-and-pastries-being-decorated-with-powdered-sugar-photo.jpg',
      name: 'Sweets',
      description: 'Traditional treats'
    },
  ];

  return (
    <section 
      ref={elementRef as any}
      id="products" 
      className={`relative py-12 sm:py-16 md:py-20 bg-[#fbfbfc] overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e98d1a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-semibold text-[#e98d1a] uppercase tracking-wider bg-[#e98d1a]/10 px-4 py-2 rounded-full">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fresh from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e98d1a] to-[#d17a0f]">the Oven</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our wide selection of freshly baked goods made with love every day
          </p>
        </div>

        {/* First Row - 3 Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-6 sm:mb-8">
          {products.slice(0, 3).map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content Overlay - Always visible on bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-white/90 text-sm">
                  {product.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Products Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {products.slice(3, 5).map((product, index) => (
            <div
              key={index + 3}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square md:w-[calc((100%-2rem)/3)]"
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content Overlay - Always visible on bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-white/90 text-sm">
                  {product.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e98d1a] to-[#d17a0f] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group text-base sm:text-lg"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
