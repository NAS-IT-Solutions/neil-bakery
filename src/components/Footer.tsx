import { COMPANY_INFO, NAV_ITEMS } from '@/lib/constants';

const QUICK_LINKS = NAV_ITEMS.filter((item) => item.id !== 'home');

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 leading-relaxed">{COMPANY_INFO.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 {COMPANY_INFO.address.split(',')[0]}</li>
              <li>📞 {COMPANY_INFO.phone}</li>
              <li>✉️ {COMPANY_INFO.email}</li>
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
          <p>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
