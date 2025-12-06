'use client';

import { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { OUTLETS } from '@/lib/constants';
import { MapPin } from "lucide-react";

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = { lat: 6.7625, lng: 79.895 };

export default function Outlets() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const selectedOutlet =
    selectedIndex !== null ? OUTLETS[selectedIndex] : null;

  const mapCenter = selectedOutlet
    ? { lat: selectedOutlet.lat, lng: selectedOutlet.lng }
    : defaultCenter;

  // Open Google Maps navigation
  const handleGetDirections = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <section id="outlets" className="py-12 sm:py-16 md:py-20 bg-[#fbfbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3">
            Where to <span className="text-[#e98d1a]">Find Us</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Visit us at a location that suits you best!
          </p>
        </div>

        {/* Grid layout: left cards + right map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* LEFT — vertical cards */}
          <div className="flex flex-col gap-4 sm:gap-6 max-h-[500px] sm:max-h-[600px] overflow-y-auto pr-1 sm:pr-2">
            {OUTLETS.map((outlet, index) => (
              <div
                key={outlet.name}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer relative bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 border-l-4 transition hover:shadow-lg ${selectedIndex === index ? 'border-[#e98d1a]' : 'border-gray-300'
                  }`}
              >
                <h3 className="text-lg sm:text-xl font-bold text-black pr-8">{outlet.name}</h3>

                <p className="text-gray-600 text-sm sm:text-base mt-2">{outlet.address}</p>

                <p className="text-green-700 text-xs sm:text-sm font-semibold mt-2">{outlet.hours}</p>

                <p className="text-gray-600 text-xs sm:text-sm mt-2">{outlet.phone}</p>

                {/* Arrow icon (directions) with tooltip */}
                {/* MapPin icon (directions) with tooltip */}
                <div className="absolute right-3 sm:right-5 top-4 sm:top-1/2 sm:-translate-y-1/2 group">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGetDirections(outlet.lat, outlet.lng);
                    }}
                    className="text-[#e98d1a] hover:text-[#d67c15] transition cursor-pointer"
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>

                  {/* Tooltip */}
                  <div className="hidden sm:block absolute right-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md transition duration-200 whitespace-nowrap">
                    Get Directions
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT — Google Map */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={mapCenter}
                zoom={12}
              >
                {OUTLETS.map((outlet, index) => (
                  <Marker
                    key={outlet.name}
                    position={{ lat: outlet.lat, lng: outlet.lng }}
                    onClick={() => {
                      setSelectedIndex(index);
                      handleGetDirections(outlet.lat, outlet.lng);
                    }}
                  />
                ))}
              </GoogleMap>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 text-sm sm:text-base">Loading map…</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
