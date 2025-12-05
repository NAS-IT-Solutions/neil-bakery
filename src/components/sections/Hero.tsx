"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  const images = [
    "/homeimage1.jpg",
    "/homeimage3.jpg",
    "/homeimage6.jpg",
    "/homeimage8.jpg",
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
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="Hero Slide Image"
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl">
          Crafting Happiness  
          <br /> in Every Bite !
        </h1>
      </div>

      {/* SCROLL DOWN BUTTON */}
      <a
        href="#products"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white animate-bounce"
      >
        <FaChevronDown size={32} />
      </a>
    </section>
  );
}
