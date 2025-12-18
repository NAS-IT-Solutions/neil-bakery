'use client';

import Link from "next/link";
import { Star, MapPin, ChefHat, ChevronRight } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HEYArenaPage() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef as any}
      id="about"
      className={`py-12 sm:py-16 md:py-20 bg-[#fbfbfc] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation */}
        <nav className="mb-8">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full">
            <MapPin size={20} />
            <span className="font-semibold">About Neil Bakery</span>
          </button>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Crafting Happiness
                <br />
                <span className="text-[#e98d1a]">In Every Bite</span>
              </h1>
              <div className="w-24 h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              At Neil's Bakery, we believe that baking is an art form. For over 35 years, we've been serving our community with the finest baked goods, made fresh daily using traditional recipes and premium ingredients.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Every loaf of bread, every pastry, and every cake is crafted with care and attention to detail. Our commitment to quality and taste has made us a beloved destination for food lovers.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">

              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#e98d1a] text-white rounded-full flex items-center justify-center">
                  <ChefHat size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Delicious Bakes</h3>
                  <p className="text-sm text-gray-600">
                    Freshly made with traditional recipes
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">10K+ Happy Customers</h3>
                  <p className="text-sm text-gray-600">
                    Trusted by our growing customer base
                  </p>
                </div>
              </div>

            </div>

            {/* OUR JOURNEY BUTTON – AFTER 10K+ */}
            <div className="pt-6">
              <Link
                href="/our-journey"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  border border-gray-600
                  rounded-full
                  font-bold text-gray-800
                  transition-all duration-300
                  hover:bg-[#e98d1a]
                  hover:text-white
                  hover:border-[#e98d1a]
                "
              >
                <span>Our Journey</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://www.spoton.com/blog/content/images/2024/06/vintage-bakery-name-ideas.jpeg"
                alt="Neil Bakery - History and Craftsmanship"
                className="w-full h-auto object-cover"
              />

              {/* Review Card */}
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-6 max-w-xs shadow-xl">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h4 className="font-bold text-gray-900 mb-1">
                  Highly rated by early users
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Trusted by our growing customer base, designed for a delightful dining experience
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
