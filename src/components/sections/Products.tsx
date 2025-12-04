import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

export default function Products() {

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-amber-600">Products</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Discover our wide range of delicious baked goods</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-white to-amber-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-amber-200 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="text-6xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-2 text-center">{category.name}</h3>
              <p className="text-gray-600 text-center mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
