'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';
import { CUSTOMER_TESTIMONIALS } from '@/lib/constants';

export default function FeedbackNew() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="feedback" className="py-20 px-4 bg-[#fbfbfc]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hear from Our <span className="text-[#e98d1a]">Customers</span>
          </h2>
          <p className="text-lg text-gray-600">Hear the buzz from those who tasted the magic</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CUSTOMER_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Avatar with Initials */}
                <div className="flex flex-col items-center text-center mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`fill-[#e98d1a] text-[#e98d1a] transition-transform duration-300 ${
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

                {/* Feedback Text */}
                <p className="text-gray-700 leading-relaxed min-h-[120px] text-center">
                  &quot;{testimonial.feedback}&quot;
                </p>

                {/* See Feedback Button */}
                <div className="text-center">
                  <a
                    href={testimonial.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#e98d1a] font-semibold hover:text-[#d17a0f] transition-colors group"
                  >
                    <span>See the Review</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>

                {/* Decorative Quote Mark */}
                <div className="absolute top-6 right-6 text-6xl text-gray-100 font-serif opacity-50">
                  &ldquo;
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Have you tried our baked goods?</p>
          <a
            href="https://maps.app.goo.gl/CPqtbSNBsJBPCT857"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#e98d1a] text-white font-semibold rounded-full hover:bg-[#d17a0f] transition-colors shadow-lg hover:shadow-xl"
          >
            Leave a Review
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
