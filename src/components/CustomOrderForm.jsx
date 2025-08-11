"use client"

import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    designCategory: "",
    specificRequirements: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-4">Tell Us About Your Dream Piece</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
                placeholder="+234 xxx xxx xxxx"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-black mb-2">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-black mb-2">Design Category</label>
            <select
              name="designCategory"
              value={formData.designCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
            >
              <option value="">Select a category</option>
              <option value="bridal">Bridal</option>
              <option value="casual">Casual Wear</option>
              <option value="formal">Formal Wear</option>
              <option value="traditional">Traditional</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-black mb-2">Describe Your Vision</label>
            <textarea
              name="specificRequirements"
              value={formData.specificRequirements}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
              placeholder="Tell us about your desired design, preferred colors, occasion, measurements, timeline or any specific requirements."
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-full"
              style={{ padding: "20px 30px" }}
            >
              Submit Order Request
            </button>
            <button
              type="button"
              className="flex-1 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 rounded-full"
              style={{ padding: "20px 30px" }}
            >
              <FaWhatsapp />
              Place Order on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CustomOrderForm
