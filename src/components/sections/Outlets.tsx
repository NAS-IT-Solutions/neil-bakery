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
    <section id="outlets" className="py-20 bg-[#fbfbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
            Where to <span className="text-[#e98d1a]">Find Us</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Visit us at a location that suits you best!
          </p>
        </div>

        {/* Grid layout: left cards + right map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT — vertical cards */}
          <div className="flex flex-col gap-6 max-h-[600px] overflow-y-auto pr-2">
            {OUTLETS.map((outlet, index) => (
              <div
                key={outlet.name}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer relative bg-white rounded-xl shadow-md p-5 border-l-4 transition hover:shadow-lg ${selectedIndex === index ? 'border-[#e98d1a]' : 'border-gray-300'
                  }`}
              >
                <h3 className="text-xl font-bold text-black">{outlet.name}</h3>

                <p className="text-gray-600 text-md mt-2">{outlet.address}</p>

                <p className="text-green-700 text-sm font-semibold mt-2">{outlet.hours}</p>

                <p className="text-gray-600 text-sm mt-2">{outlet.phone}</p>

                {/* Arrow icon (directions) with tooltip */}
                {/* MapPin icon (directions) with tooltip */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 group">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGetDirections(outlet.lat, outlet.lng);
                    }}
                    className="text-[#e98d1a] hover:text-[#d67c15] transition cursor-pointer"
                  >
                    <MapPin size={24} />
                  </span>

                  {/* Tooltip */}
                  <div className="absolute right-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
    bg-black text-white text-xs py-1 px-2 rounded-md transition duration-200 whitespace-nowrap">
                    Get Directions
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT — Google Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
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
              <div className="flex items-center justify-center h-[600px]">
                <p className="text-gray-500">Loading map…</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
