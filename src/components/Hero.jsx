import { useState, useEffect } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

import heroImg1 from "../assets/heroImg1.webp"
import heroImg2 from "../assets/heroImg2.webp"
import heroImg3 from "../assets/heroImg3.webp"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Timeless Fashion,",
      subtitle: "Conscious Choices",
      description: "Sustainably designed effortlessly worn. Our pieces are made with premium materials and wardrobe that stands the test of time.",
      bgImage: heroImg1,
    },
    {
      id: 2,
      title: "Elegant Designs,",
      subtitle: "Modern Style",
      description: "Discover our latest collection of contemporary African fashion that blends tradition with innovation",
      bgImage: heroImg2,
    },
    {
      id: 3,
      title: "Crafted Excellence,",
      subtitle: "Unique Beauty",
      description: "Each piece is carefully crafted by skilled artisans using premium materials and traditional techniques",
      bgImage: heroImg3,
    },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  // Framer Motion Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  }

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  }

  return (
    <section className="relative overflow-hidden min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
          variants={bgVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center min-h-[500px]"
          >
            <div className="text-white">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[100%] mb-4 text-white drop-shadow-lg uppercase"
                style={{ fontFamily: "Against, sans-serif" }}
              >
                {slides[currentSlide].title}
                <br />
                <span className="font-light text-white text-2xl sm:text-3xl lg:text-4xl opacity-90 capitalize">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white font-light opacity-90 drop-shadow-md league-spartan">
                {slides[currentSlide].description}
              </p>
              <Link
                to="/collections"
                className="bg-white text-black font-medium transition-colors hover:bg-gray-800 hover:text-white drop-shadow-lg rounded-full league-spartan"
                style={{ padding: "20px 30px" }}
              >
                Explore the Collections
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 right-4 sm:bottom-4 sm:right-16 flex space-x-2 z-20">
        <button
          onClick={prevSlide}
          className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all cursor-pointer"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all cursor-pointer"
        >
          <FiArrowRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
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