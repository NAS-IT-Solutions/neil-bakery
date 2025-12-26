'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function JourneyImageCarousel({
  images,
  alt,
  intervalMs = 3500,
}: {
  images: string[];
  alt: string;
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!images?.length) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images, intervalMs]);

  const goPrev = () => setActive((p) => (p - 1 + images.length) % images.length);
  const goNext = () => setActive((p) => (p + 1) % images.length);

  return (
    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl group">
      {/* Image layers for smooth fade */}
      {images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Prev/Next */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white
                   flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white
                   flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/35 px-3 py-2 rounded-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === active ? 'bg-white scale-110' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function OurJourneyPage() {
  const journeySteps = useMemo(
    () => [
      {
        year: '1990',
        title: 'The Beginning',
        description: [
          'Neil Bakery began its journey in 1990 as a small bakery in Egoda Uyana, Sri Lanka, founded with a passion for freshly baked bread and quality pastries. With fewer than five team members, we focused on serving our local community with care, consistency, and homemade taste.',
          'What started as a small business quickly became a trusted neighborhood bakery, built on strong relationships and a commitment to quality that set us apart from the very beginning.',
        ],
        images: ['/assets/images/Neil_Old_One.jpeg', '/assets/images/Neil_Old_Two.jpeg'],
      },
      {
        year: '2005',
        title: 'Founder of Neil Bakery',
        description: [
          'As our loyal customers grew, Neil Bakery grew alongside them. Founded by Mr. Neil Peris, Neil Bakery evolved from a humble beginning into a trusted destination for freshly baked goods. Over time, the bakery expanded its product range to include delicious cakes, refreshing beverages, and a wide variety of high quality baked treats, all crafted with passion and premium ingredients.',
          'With growing demand, we proudly opened three main outlets in Koralawella and Moratuwa, Sri Lanka, reaching more families and celebrations every day. Guided by our brand promise “Crafting happiness in every bite” we continue to grow alongside our customers, turning everyday moments into sweet memories.',
        ],
        image: '/assets/images/Father_photo.jpg',
      },
      {
        year: '2025',
        title: 'Today & Beyond',
        description: [
          'Today, Neil Bakery is powered by a dedicated team of 30+ employees, producing over 1,000 bakery items daily while maintaining the quality our customers love. With 35+ years of experience, we are proud of the trust we’ve earned and the positive customer feedback that drives us forward.',
          'As we look to the future, our focus remains on innovation, consistency, and delivering exceptional bakery products that bring happiness today and for generations to come.',
        ],
        images: ['/assets/images/Neil_Moratuwa.jpeg', '/assets/images/Neil_EgodaUyana.jpeg'],
      },
    ],
    []
  );

  // AboutPage Schema
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Our Journey - Neil Bakery',
    description:
      'Discover the journey of Neil Bakery, from our humble beginnings in 1990 to becoming a beloved bakery brand in Sri Lanka.',
    url: 'https://neilbakery.lk/our-journey',
    mainEntity: {
      '@type': 'Organization',
      name: 'Neil Bakery',
      foundingDate: '1990',
      founder: {
        '@type': 'Person',
        name: 'Mr. Neil',
      },
      description: 'A trusted bakery brand in Sri Lanka since 1990, crafting happiness in every bite.',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://neilbakery.lk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Our Journey',
        item: 'https://neilbakery.lk/our-journey',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <div className="min-h-screen bg-[#fbfbfc]">
        {/* HERO (image shows as-is because overlay removed) */}
        <div className="relative h-[40vh] min-h-[400px] overflow-hidden pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/images/neil_bakery_our_journey_banner.jpg')",
            }}
          />
          {/* If you ever want dim for readability, add overlay here:
              <div className="absolute inset-0 bg-black/40" />
          */}
        </div>

        {/* Hero Content */}
        <div className="relative -mt-[40vh] min-h-[400px] pt-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <span>✨</span>
              <span>Fresh Daily Since 1990</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">
                Our Journey
              </h1>
              <p className="text-lg sm:text-xl text-white/90 font-light max-w-2xl mx-auto">
                35 years of baking excellence and serving our community
              </p>
            </div>
          </div>
        </div>

        {/* Journey Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="space-y-24 sm:space-y-32">
            {journeySteps.map((step: any, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 sm:gap-12 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  {/* Carousel only for steps with images array */}
                  {step.images ? (
                    <JourneyImageCarousel images={step.images} alt={step.title} />
                  ) : (
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                      {step.title}
                    </h2>
                    <div className="h-1 w-20 bg-[#e98d1a] rounded-full" />
                  </div>

                  {Array.isArray(step.description) ? (
                    step.description.map((para: string, idx: number) => (
                      <p key={idx} className="text-lg sm:text-lg text-gray-600 leading-relaxed mb-4">
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-lg sm:text-lg leading-relaxed text-[justify]">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 mb-20 sm:mt-8 md:mt-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-gray-100 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Visit Us Today</h3>

              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
                Experience the quality and taste that has kept us going for over three decades.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#e98d1a] text-white font-semibold rounded-full hover:shadow-xl active:shadow-xl transition-all duration-300 hover:scale-105 active:scale-105 text-sm sm:text-base"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
