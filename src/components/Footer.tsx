export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Neil's Bakery</h3>
            <p className="text-gray-300 leading-relaxed">
              Freshly baked goods made with love and the finest ingredients. Serving our community
              since [Year].
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#outlets" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Our Outlets
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 123 Bakery Street, City</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@neilsbakery.com</li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Neil's Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
