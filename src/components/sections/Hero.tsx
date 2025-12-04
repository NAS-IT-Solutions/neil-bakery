export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center justify-center bg-linear-to-br from-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
          Welcome to <span className="text-amber-600">Neil's Bakery</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Freshly baked goods crafted with passion, tradition, and the finest ingredients
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
