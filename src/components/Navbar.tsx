'use client';

import { useState } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
      <div className="bg-[#3b3f3f] rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between shadow-lg border border-gray-500">

        {/* Logo & Brand */}
        <div
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <Image
            src="/logo.png"   /** <-- replace with your real logo path **/
            alt="Company Logo"
            width={36}
            height={36}
            className="rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
          />
          <span className="text-[#e4a53a] font-semibold tracking-wide text-xs sm:text-sm md:text-base uppercase">
            Neil Bakery
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-white">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="hover:text-[#e4a53a] transition-colors text-xs xl:text-sm font-medium whitespace-nowrap"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 text-white text-base xl:text-lg">
          <FaInstagram className="cursor-pointer hover:text-[#e4a53a] transition" />
          <FaFacebookSquare className="cursor-pointer hover:text-[#e4a53a] transition" />
          <FaTiktok className="cursor-pointer hover:text-[#e4a53a] transition" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#3b3f3f] mt-2 rounded-xl py-3 px-4 text-white shadow-lg max-h-[80vh] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left py-2.5 px-2 text-sm sm:text-base hover:text-[#e4a53a] hover:bg-[#4a4f4f] rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}

          <div className="flex items-center justify-center space-x-6 mt-4 pt-3 border-t border-gray-600 text-xl">
            <FaInstagram className="cursor-pointer hover:text-[#e4a53a] transition" />
            <FaFacebookSquare className="cursor-pointer hover:text-[#e4a53a] transition" />
            <FaTiktok className="cursor-pointer hover:text-[#e4a53a] transition" />
          </div>
        </div>
      )}
    </nav>
  );
}
