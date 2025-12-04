import { OUTLETS } from '@/lib/constants';

export default function Outlets() {

  return (
    <section id="outlets" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-amber-600">Outlets</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Visit us at any of our convenient locations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {OUTLETS.map((outlet, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-amber-600"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-black mb-3">{outlet.name}</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-start">
                  <span className="mr-2">🏠</span>
                  <span>{outlet.address}</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">🕒</span>
                  <span>{outlet.hours}</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  <span>{outlet.phone}</span>
                </p>
              </div>
              <button className="mt-6 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
