import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found. Return to Neil Bakery homepage to explore our fresh baked goods.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fbfbfc] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative -mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! This Page Went Stale
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We couldn't find the page you're looking for. It might have been removed, 
              renamed, or didn't exist in the first place.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#e98d1a] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#e98d1a] hover:text-[#e98d1a] transition-all duration-300"
          >
            <Search className="w-5 h-5" />
            <span>Browse Products</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#about" className="text-sm text-gray-600 hover:text-[#e98d1a] transition-colors">
              About Us
            </Link>
            <Link href="/#outlets" className="text-sm text-gray-600 hover:text-[#e98d1a] transition-colors">
              Our Outlets
            </Link>
            <Link href="/our-journey" className="text-sm text-gray-600 hover:text-[#e98d1a] transition-colors">
              Our Journey
            </Link>
            <Link href="/#contact" className="text-sm text-gray-600 hover:text-[#e98d1a] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
