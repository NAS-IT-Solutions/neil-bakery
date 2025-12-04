export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About <span className="text-amber-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-amber-100 rounded-lg h-96 flex items-center justify-center">
              <span className="text-6xl">🍞</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black">Our Story</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              At Neil's Bakery, we believe that baking is an art form. For over [X] years, we've
              been serving our community with the finest baked goods, made fresh daily using
              traditional recipes and premium ingredients.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Every loaf of bread, every pastry, and every cake is crafted with care and attention
              to detail. Our commitment to quality and taste has made us a beloved destination for
              food lovers.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">100+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">5+</div>
                <div className="text-sm text-gray-600">Outlets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
