'use client';

import { useState } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
      <div className="bg-[#3b3f3f] rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between shadow-lg border border-gray-500">

        {/* Logo & Brand */}
        <div
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 transition-transform group-hover:scale-110 duration-300 ring-2 ring-[#e98d1a]/20"
            />
          </div>
          <span className="text-white font-bold tracking-tight text-base sm:text-lg md:text-xl">
            Neil Bakery
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative px-4 py-2 text-base  transition-all duration-300 rounded-lg text-white hover:text-[#e98d1a] cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white hover:text-[#e98d1a] transition-all duration-300"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white hover:text-[#e98d1a] transition-all duration-300"
          >
            <FaFacebookSquare className="w-5 h-5" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white hover:text-[#e98d1a] transition-all duration-300"
          >
            <FaTiktok className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#e98d1a] transition-all duration-300 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#3b3f3f] mt-2 rounded-2xl py-4 px-3 shadow-2xl border border-gray-500 animate-slide-down">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 text-white hover:text-[#e98d1a] cursor-pointer"
            >
              {item.name}
            </button>
          ))}

          <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-600">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-[#e98d1a] transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-[#e98d1a] transition-all duration-300"
            >
              <FaFacebookSquare className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-[#e98d1a] transition-all duration-300"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
