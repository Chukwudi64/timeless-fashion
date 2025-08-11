import WTM from "../assets/wear-the-moment.png";
import R4 from "../assets/rectangle-4.png";
import R5 from "../assets/rectangle-5.png";
const SecondaryHero = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-2">Wear the moment.</h2>
          <p className="text-2xl text-gray-600 font-light">Own the look.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <img
              src={WTM}
              alt="Model in Yellow Coat"
              className="w-full h-64 lg:h-96 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <img
              src={R4}
              alt="Checkered Outfit"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src={R5}
              alt="Checkered Outfit"
              className="w-full h-48 object-cover rounded-lg"
            />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-4xl sm:text-5xl font-semibold text-black mb-2">Sustainably designed,</h3>
              <p className="text-2xl text-gray-600 font-light">effortlessly worn.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <button
                className="bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-full"
                style={{ padding: "20px 30px" }}
              >
                Shop Now
              </button>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                Elevate your wardrobe with our exclusive collections.
                Designed for modern living.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondaryHero
