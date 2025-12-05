import { Star, MapPin, ChefHat } from "lucide-react"

export default function HEYArenaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full ">
            <MapPin size={20} />
            <span className="font-semibold">About Neil Bakery</span>
          </button>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Crafting Happiness
                <br />           
                <span className="text-[#e98d1a]">In Every Bite</span>
              </h1>
              <div className="w-24 h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              At Neil's Bakery, we believe that baking is an art form. For over 40 years, we've been serving our community with the finest baked goods, made fresh daily using traditional recipes and premium ingredients.
            </p>

            {/* Details */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Every loaf of bread, every pastry, and every cake is crafted with care and attention to detail. Our commitment to quality and taste has made us a beloved destination for food lovers.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#e98d1a] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  <ChefHat size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Delicious Bakes</h3>
                  <p className="text-sm text-gray-600">Freshly made with traditional recipes</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">10K+ Happy Customers</h3>
                  <p className="text-sm text-gray-600">Trusted by our growing customer base</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://www.spoton.com/blog/content/images/2024/06/vintage-bakery-name-ideas.jpeg"
                alt="Neil Bakery - History and Craftsmanship"
                className="w-full h-auto object-cover"
              />

              {/* Review Card */}
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-6 max-w-xs shadow-xl">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Title */}
                <h4 className="font-bold text-gray-900 mb-1">Highly rated by early users</h4>

                {/* Review Text */}
                <p className="text-sm text-gray-600 leading-relaxed">
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
