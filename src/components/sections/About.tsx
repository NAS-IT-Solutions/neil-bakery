import { Star, MapPin, ChefHat } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-[#fbfbfc]">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        {/* Navigation */}
        <nav className="mb-6 sm:mb-8">
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-600 rounded-full">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">About Neil Bakery</span>
          </button>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Heading */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Crafting Happiness<br />
                <span className="text-[#e98d1a]">In Every Bite</span>
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              At Neil's Bakery, we believe that baking is an art form. For over 40 years, we've been serving our community with the finest baked goods, made fresh daily using traditional recipes and premium ingredients.
            </p>

            {/* Details */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Every loaf of bread, every pastry, and every cake is crafted with care and attention to detail. Our commitment to quality and taste has made us a beloved destination for food lovers.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              {/* Card 1 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#e98d1a] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  <ChefHat className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Delicious Bakes</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Freshly made with traditional recipes</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 text-white rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">10K+ Happy Customers</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Trusted by our growing customer base</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://www.spoton.com/blog/content/images/2024/06/vintage-bakery-name-ideas.jpeg"
                alt="Neil Bakery - History and Craftsmanship"
                className="w-full h-auto object-cover"
              />

              {/* Review Card */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 max-w-[200px] sm:max-w-[240px] md:max-w-xs shadow-xl">
                {/* Stars */}
                <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Title */}
                <h4 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm md:text-base">Highly rated by early users</h4>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Trusted by our growing customer base, designed for a delightful dining experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
