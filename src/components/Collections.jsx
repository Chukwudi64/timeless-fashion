"use client"

import { useState } from "react"
import collection_1 from "../assets/collection-1.jpg"
import collection_2 from "../assets/collection-2.jpg"
import collection_3 from "../assets/collection-3.jpg"
import collection_4 from "../assets/collection-4.jpg"
import collection_5 from "../assets/collection-5.jpg"
import collection_6 from "../assets/collection-6.jpg"

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState("All Collections")

  const collections = [
    { name: "All Collections", active: true },
    { name: "Bridal", active: false },
    { name: "Ready-to-wear", active: false },
    { name: "Custom Pieces", active: false },
  ]

  const products = [
    {
      id: 1,
      name: "Designer Wrapper Set",
      description: "Bespoke wrapper and blouse with unique embellishments",
      price: "₦120,000",
      image: collection_1,
      category: "Ready-to-wear",
    },
    {
      id: 2,
      name: "Traditional Bridal Set",
      description: "Complete bridal ensemble with matching accessories",
      price: "₦520,000",
      image: collection_2,
      category: "Bridal",
    },
    {
      id: 3,
      name: "Bespoke Agbada",
      description: "Custom-tailored traditional agbada with modern touches",
      price: "₦180,000",
      image: collection_4,
      category: "Custom Pieces",
    },
    {
      id: 4,
      name: "Ankara Business Suit",
      description: "Professional ankara suit perfect for the modern woman",
      price: "₦80,000",
      image: collection_5,
      category: "Ready-to-wear",
    },
    {
      id: 5,
      name: "Casual Ankara Dress",
      description: "Comfortable and stylish dress for everyday wear",
      price: "₦40,000",
      image: collection_3,
      category: "Ready-to-wear",
    },
    {
      id: 6,
      name: "Elegant Bridal Gown",
      description: "Stunning white bridal gown with traditional Nigerian embroidery",
      price: "₦450,000",
      image: collection_6,
      category: "Bridal",
    },
  ]

  const filteredProducts =
    activeFilter === "All Collections" ? products : products.filter((product) => product.category === activeFilter)

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-4">Our Collections</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Discover our latest designs that blend traditional African elegance with contemporary fashion
          </p>
        </div>

        {/* Collection Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {collections.map((collection, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(collection.name)}
              className={`font-medium rounded-full transition-colors ${
                activeFilter === collection.name ? "bg-black text-white" : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              style={{ padding: "20px 30px" }}
            >
              {collection.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm font-regular">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-black">{product.price}</span>
                  <button
                    className="bg-black text-white font-medium hover:bg-gray-800 transition-colors text-sm rounded-full"
                    style={{ padding: "15px 25px" }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors rounded-full"
            style={{ padding: "20px 30px" }}
          >
            Show All
          </button>
        </div>
      </div>
    </section>
  )
}

export default Collections
