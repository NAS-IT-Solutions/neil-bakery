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

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white
                   flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white
                   flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/35 px-3 py-2 rounded-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-2.5 h-2.5 rounded-full ${
              idx === active ? 'bg-white scale-110' : 'bg-white/60'
            }`}
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
        title: 'The Beginning',
        description: [
          'Neil Bakery began its journey in 1990 as a small bakery in Egoda Uyana, Sri Lanka, founded with a passion for freshly baked bread and quality pastries. With fewer than five team members, we focused on serving our local community with care, consistency, and homemade taste.',
          'What started as a small business quickly became a trusted neighborhood bakery, built on strong relationships and a commitment to quality that set us apart from the very beginning.',
        ],
        images: ['/assets/images/Neil_Old_One.jpeg', '/assets/images/Neil_Old_Two.jpeg'],
      },
      {
        title: 'Founder of Neil Bakery',
        description: [
          'As our loyal customers grew, Neil Bakery grew alongside them. Founded by Mr. Neil Peiris, Neil Bakery evolved from a humble beginning into a trusted destination for freshly baked goods. Over time, the bakery expanded its product range to include delicious cakes, refreshing beverages, and a wide variety of high quality baked treats, all crafted with passion and premium ingredients.',
          'With growing demand, we proudly opened three main outlets in Koralawella, Moratuwa and Egoda Uyana, reaching more families and celebrations every day. Guided by our brand promise “Crafting happiness in every bite” we continue to grow alongside our customers, turning everyday moments into sweet memories.',
        ],
        image: '/assets/images/Father_photo.jpg',
      },
      {
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

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#fbfbfc]">
        {/* HERO */}
        <div className="relative h-[35vh] min-h-[350px] overflow-hidden pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/assets/images/neil_bakery_our_journey_banner.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center space-y-5 -translate-y-4 sm:-translate-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✨ Fresh Daily Since 1990
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
                Our Journey
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
                35 years of baking excellence and serving our community
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                {step.images ? (
                  <JourneyImageCarousel images={step.images} alt={step.title} />
                ) : (
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  {step.title}
                </h2>
                <div className="h-1 w-20 bg-[#e98d1a] rounded-full" />
                {step.description.map((p, i) => (
                  <p key={i} className="text-lg text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-20 px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl p-12 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Visit Us Today
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the quality and taste that has kept us going for decades.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#e98d1a] text-white font-semibold rounded-full hover:scale-105 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
