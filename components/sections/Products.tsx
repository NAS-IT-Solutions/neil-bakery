export default function Products() {
  const categories = [
    {
      name: 'Breads',
      description: 'Freshly baked artisan breads',
      icon: '🍞',
      items: ['Sourdough', 'Whole Wheat', 'French Baguette', 'Multigrain'],
    },
    {
      name: 'Pastries',
      description: 'Delicious sweet and savory pastries',
      icon: '🥐',
      items: ['Croissants', 'Danish', 'Puff Pastry', 'Eclairs'],
    },
    {
      name: 'Cakes',
      description: 'Custom cakes for every occasion',
      icon: '🎂',
      items: ['Birthday Cakes', 'Wedding Cakes', 'Cupcakes', 'Cheesecakes'],
    },
    {
      name: 'Cookies',
      description: 'Crunchy and soft cookies',
      icon: '🍪',
      items: ['Chocolate Chip', 'Oatmeal', 'Sugar Cookies', 'Macarons'],
    },
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-white to-amber-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-amber-200"
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
          <button className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
