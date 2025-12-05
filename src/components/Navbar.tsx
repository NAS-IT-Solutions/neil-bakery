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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%]">
      <div className="bg-[#3b3f3f] rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-gray-500">

        {/* Logo & Brand */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <Image
            src="/logo.png"   /** <-- replace with your real logo path **/
            alt="Company Logo"
            width={42}
            height={42}
            className="rounded-full"
          />
          <span className="text-[#e4a53a] font-semibold tracking-wide text-sm md:text-base uppercase">
            Neil Bakery
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="hover:text-[#e4a53a] transition-colors text-sm font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-white text-lg">
          <FaInstagram className="cursor-pointer hover:text-[#e4a53a] transition" />
          <FaFacebookSquare className="cursor-pointer hover:text-[#e4a53a] transition" />
          <FaTiktok className="cursor-pointer hover:text-[#e4a53a] transition" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
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
        <div className="md:hidden bg-[#3b3f3f] mt-2 rounded-xl py-3 px-4 text-white shadow-lg">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left py-2 text-sm hover:text-[#e4a53a] transition-colors"
            >
              {item.name}
            </button>
          ))}

          <div className="flex items-center space-x-4 mt-3 text-lg">
            <FaInstagram className="cursor-pointer hover:text-[#e4a53a]" />
            <FaFacebookSquare className="cursor-pointer hover:text-[#e4a53a]" />
            <FaTiktok className="cursor-pointer hover:text-[#e4a53a]" />
          </div>
        </div>
      )}
    </nav>
  );
}
