'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Products() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const products = [
    {
      image:
        'https://defencebakery.in/cdn/shop/files/Multi_Grain_Bread.jpg?v=1756544969&width=1500',
      name: 'Breads',
      icon: '🍞',
    },
    {
      image:
        'https://images.stockcake.com/public/b/8/b/b8bca4f2-33d0-40cb-a267-d57d747713cc_large/assorted-breakfast-pastries-stockcake.jpg',
      name: 'Pastries',
      icon: '🥐',
    },
    {
      image:
        'https://thumbs.dreamstime.com/b/sweet-pastries-berries-form-cake-muffins-showcase-pastry-shop-glass-stand-eclair-cakes-tartlets-refrigerator-294305026.jpg',

      name: 'Cakes',
      icon: '🎂',
    },
    {
      image:
        'https://img.freepik.com/premium-photo/soft-drinks-water-splashes-color-natural-black-background_1091270-9168.jpg?w=360',
      name: 'Drinks',
      icon: '☕',
    },
    {
      image:
        'https://static.vecteezy.com/system/resources/previews/049/544/454/large_2x/plate-of-assorted-cakes-and-pastries-being-decorated-with-powdered-sugar-photo.jpg',
      name: 'Sweets',
      icon: '🍩',
    },
  ];

  return (
    <section id="products" className="py-12 sm:py-28 md:py-28 bg-[#fbfbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Fresh from <span className="text-[#e98d1a]">the Oven</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">Explore our variety of freshly baked delights</p>
        </div>

        {/* First Row - 3 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-6 sm:mb-8">
          {products.slice(0, 3).map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full aspect-square cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-xl sm:rounded-2xl transition-opacity duration-300 group-hover:opacity-30"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">{product.icon}</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#e98d1a]">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Images Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {products.slice(3, 5).map((product, index) => (
            <div
              key={index + 3}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-square cursor-pointer md:w-[calc((100%-2rem)/3)]"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-xl sm:rounded-2xl transition-opacity duration-300 group-hover:opacity-30"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">{product.icon}</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#e98d1a]">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* See All Items Button */}
        <div className="flex justify-center mt-12 max-w-6xl mx-auto">
          <a
            href="/products"
            className="px-8 py-3 bg-[#e98d1a] text-white font-semibold rounded-lg hover:bg-[#d17a0f] transition-colors shadow-lg hover:shadow-xl text-center"
            style={{ width: 'calc((200% - 2rem) / 3)' }}
          >
            See All Items
          </a>
        </div>
      </div>
    </section>
  );
}
