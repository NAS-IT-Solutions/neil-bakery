'use client';

import { useState } from 'react';

export default function Feedback() {
  const [rating, setRating] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The best bakery in town! Their croissants are absolutely divine.',
      date: 'Nov 2024',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Fresh bread every day and amazing customer service. Highly recommended!',
      date: 'Oct 2024',
    },
    {
      name: 'Emma Williams',
      rating: 5,
      comment: 'Their custom cakes are works of art. Perfect for special occasions!',
      date: 'Dec 2024',
    },
  ];

  return (
    <section id="feedback" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Customer <span className="text-amber-600">Feedback</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">What our customers say about us</p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Share Your Experience</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-3xl focus:outline-none"
                  >
                    <span className={star <= rating ? 'text-amber-500' : 'text-gray-300'}>★</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Feedback</label>
              <textarea
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none"
                rows={4}
                placeholder="Tell us about your experience"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
