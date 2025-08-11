"use client"

import { useState, useEffect } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Timeless Fashion,",
      subtitle: "Conscious Choices",
      description: "Sustainably designed effortlessly worn. Our pieces are made with premium materials and wardrobe that stands the test of time.",
      image: "../../public/images/hero-main.png",
      bgImage: "../../public/images/hero-main.png",
    },
    {
      id: 2,
      title: "Elegant Designs,",
      subtitle: "Modern Style",
      description:
        "Discover our latest collection of contemporary African fashion that blends tradition with innovation",
      image: "/placeholder.svg?height=600&width=500&text=Fashion+Model+2",
      bgImage: "../../public/images/hero-main.png",
    },
    {
      id: 3,
      title: "Crafted Excellence,",
      subtitle: "Unique Beauty",
      description:
        "Each piece is carefully crafted by skilled artisans using premium materials and traditional techniques",
      image: "/placeholder.svg?height=600&width=500&text=Fashion+Model+3",
      bgImage: "../../public/images/hero-main.png",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div
        className="relative bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url(${slides[currentSlide].bgImage})`,
          minHeight: "600px",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            <div className="text-white z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
                {slides[currentSlide].title}
                <br />
                <span className="font-light text-white text-2xl sm:text-3xl lg:text-4xl opacity-90">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white font-light opacity-90 drop-shadow-md">
                {slides[currentSlide].description}
              </p>
              <button
                className="bg-white text-black font-medium transition-colors hover:bg-gray-800 drop-shadow-lg rounded-full"
                style={{ padding: "20px 30px" }}
              >
                Explore the Collections
              </button>
            </div>
            {/* Remove the separate image div since we're using background image */}
          </div>
        </div>
      </div>

    {/* Navigation Arrows */}
      <div className="absolute bottom-4 right-16 flex space-x-2">
        <button
          onClick={prevSlide}
            className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={nextSlide}
             className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FiArrowRight />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
