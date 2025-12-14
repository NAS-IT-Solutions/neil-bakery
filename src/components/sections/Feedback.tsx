'use client';

import { Star, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { CUSTOMER_TESTIMONIALS } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeedbackNew() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Colors for avatars
  const avatarColors = [
    'bg-gradient-to-br from-orange-400 to-pink-500',
    'bg-gradient-to-br from-blue-400 to-purple-500',
    'bg-gradient-to-br from-green-400 to-teal-500',
    'bg-gradient-to-br from-yellow-400 to-orange-500',
    'bg-gradient-to-br from-pink-400 to-rose-500',
    'bg-gradient-to-br from-indigo-400 to-blue-500',
  ];

  return (
    <section 
      ref={elementRef as any}
      id="feedback" 
      className={`relative py-12 sm:py-16 md:py-20 bg-[#fbfbfc] overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#e98d1a]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#e98d1a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-semibold text-[#e98d1a] uppercase tracking-wider bg-[#e98d1a]/10 px-4 py-2 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-5">
            Loved by Our <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e98d1a] to-[#d17a0f]">Customers</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Don't just take our word for it - here's what our happy customers have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CUSTOMER_TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative h-full"
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(testimonial.id)}
              onTouchEnd={() => setTimeout(() => setHoveredCard(null), 2000)}
            >
              <div className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-500 transform border border-gray-100 h-full flex flex-col ${
                hoveredCard === testimonial.id ? 'shadow-2xl -translate-y-2' : ''
              }`}>
                {/* Top Section - Avatar & Info */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Avatar with Gradient */}
                  <div className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 ${avatarColors[index % avatarColors.length]} rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg transform transition-transform duration-300 ${
                    hoveredCard === testimonial.id ? 'scale-110' : ''
                  }`}>
                    {getInitials(testimonial.name)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2 truncate">{testimonial.role}</p>
                    
                    {/* Star Rating - Compact */}
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#e98d1a] text-[#e98d1a] transition-all duration-300 ${
                            hoveredCard === testimonial.id
                              ? 'animate-[shake_0.5s_ease-in-out_infinite]'
                              : ''
                          }`}
                          style={{
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feedback Text */}
                <div className="flex-1 mb-6">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic relative">
                    <span className="absolute -left-2 -top-2 text-4xl text-[#e98d1a]/20 font-serif leading-none">"</span>
                    <span className="relative z-10">{testimonial.feedback}</span>
                    <span className="absolute -right-2 -bottom-2 text-4xl text-[#e98d1a]/20 font-serif leading-none">"</span>
                  </p>
                </div>

                {/* View Review Link */}
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={testimonial.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#e98d1a] font-semibold hover:text-[#d17a0f] active:text-[#d17a0f] transition-all group/link text-sm"
                  >
                    <span>View on Google</span>
                    <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-active/link:translate-x-0.5 group-active/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#e98d1a]/20 rounded-tr-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Share Your Experience
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
              Had a delightful experience? We'd love to hear from you! Your feedback helps us serve you better.
            </p>
            <a
              href="https://maps.app.goo.gl/CPqtbSNBsJBPCT857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-[#e98d1a] to-[#d17a0f] text-white font-semibold text-sm sm:text-base rounded-full hover:shadow-xl hover:scale-105 active:shadow-xl active:scale-105 transition-all duration-300 shadow-lg"
            >
              <Star className="w-5 h-5 fill-current" />
              <span>Leave a Review</span>
            </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }
      `}</style>
    </section>
  );
}
