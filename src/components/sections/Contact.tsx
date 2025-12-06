'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Contact() {
  const iconComponents = {
    '📍': <MapPin size={24} />,
    '📞': <Phone size={24} />,
    '✉️': <Mail size={24} />,
    '🕒': <Clock size={24} />,
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#fbfbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Connect<span className="text-[#e98d1a]"> with Us</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Have questions or special orders? We&apos;d love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-stretch">
          {/* Contact Information Cards */}
          <div className="bg-[#fbfbfc] rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8 shadow-lg flex flex-col">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Contact Information</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Reach out to us through any of the following channels. We&apos;re here to help!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 flex-1">
              {CONTACT_INFO.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#e98d1a] text-white rounded-full flex items-center justify-center">
                      {iconComponents[info.icon as keyof typeof iconComponents]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-base sm:text-lg">{info.title}</h4>
                      <div className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                        {Array.isArray(info.content) ? (
                          info.content.map((line, idx) => (
                            <p key={idx} className="mb-1">
                              {line}
                            </p>
                          ))
                        ) : (
                          <p>{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#fbfbfc] rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h3>
            <form className="space-y-4 sm:space-y-5">
              {/* Name and Phone Number in one row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:border-[#e98d1a] focus:ring-2 focus:ring-[#e98d1a]/20 focus:outline-none bg-white transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:border-[#e98d1a] focus:ring-2 focus:ring-[#e98d1a]/20 focus:outline-none bg-white transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:border-[#e98d1a] focus:ring-2 focus:ring-[#e98d1a]/20 focus:outline-none bg-white transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:border-[#e98d1a] focus:ring-2 focus:ring-[#e98d1a]/20 focus:outline-none bg-white transition-all resize-none"
                  rows={5}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e98d1a] text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-[#d17a0f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Optional: Map or Additional CTA */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Visit us at any of our outlet locations</p>
          <a
            href="#outlets"
            className="inline-flex items-center gap-2 text-[#e98d1a] font-semibold hover:text-[#d17a0f] transition-colors group text-sm sm:text-base"
          >
            <span>View Our Outlets</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
