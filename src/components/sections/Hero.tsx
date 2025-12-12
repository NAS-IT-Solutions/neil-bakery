"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1920&q=80",
    "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=1920&q=80",
    "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=1920&q=80",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920&q=80",
    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920&q=80",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* SLIDES */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={img}
              alt="Hero Slide Image"
              fill
              priority
              className="object-cover transition-transform duration-[8000ms]"
            />
          </div>
        ))}
      </div>

      {/* GRADIENT OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-8">
        {/* Badge */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg">
            <Sparkles className="w-4 h-4 text-[#e98d1a]" />
            Fresh Daily Since 1974
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-tight tracking-tight mb-6 animate-fade-in-up">
          <span className="block mb-0">Crafting Happiness</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#e98d1a] via-[#f5a623] to-[#e98d1a]">
            in Every Bite
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
          Experience the perfect blend of tradition and taste with our freshly baked goods
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#e98d1a] to-[#d17a0f] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Explore Products</span>
            <ChevronDown className="w-5 h-5" />
          </a>
          <a
            href="#outlets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Find Us
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? "w-8 h-2 bg-[#e98d1a]"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/70 text-xs sm:text-sm font-medium">Scroll Down</span>
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}
