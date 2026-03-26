// "use client"

// import { useState, useEffect } from "react"
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
// import { Link } from "react-router-dom"
// // import heroMainImg from "../assets/hero-main.png";
// import heroImg1 from "../assets/heroImg1.webp"
// import heroImg2 from "../assets/heroImg2.webp"
// import heroImg3 from "../assets/heroImg3.webp"

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const slides = [
//     {
//       id: 1,
//       title: "Timeless Fashion,",
//       subtitle: "Conscious Choices",
//       description: "Sustainably designed effortlessly worn. Our pieces are made with premium materials and wardrobe that stands the test of time.",
//       image: "../../public/images/hero-main.png",
//       bgImage: heroImg1,
//     },
//     {
//       id: 2,
//       title: "Elegant Designs,",
//       subtitle: "Modern Style",
//       description:
//         "Discover our latest collection of contemporary African fashion that blends tradition with innovation",
//       image: "/placeholder.svg?height=600&width=500&text=Fashion+Model+2",
//       bgImage: heroImg2,
//     },
//     {
//       id: 3,
//       title: "Crafted Excellence,",
//       subtitle: "Unique Beauty",
//       description:
//         "Each piece is carefully crafted by skilled artisans using premium materials and traditional techniques",
//       image: "/placeholder.svg?height=600&width=500&text=Fashion+Model+3",
//       bgImage: heroImg3,
//     },
//   ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   // Auto-play carousel
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <section className="relative overflow-hidden">
//       <div
//         className="relative bg-cover bg-no-repeat transition-all duration-500"
//         style={{
//           backgroundImage: `url(${slides[currentSlide].bgImage})`,
//           minHeight: "600px",
//           fontFamily: ""
//         }}
//       >
//         {/* Overlay for better text readability */}
//         <div className="absolute inset-0 bg-opacity-20"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center min-h-[500px]">
//             <div className="text-white z-10">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[100%] tracking-normal mb-4 text-white drop-shadow-lg uppercase" style={{ fontFamily: "Against, sans-serif" }}>
//                 {slides[currentSlide].title}
//                 <br />
//                 <span className="font-light text-white text-2xl sm:text-3xl lg:text-4xl opacity-90 capitalize">
//                   {slides[currentSlide].subtitle}
//                 </span>
//               </h1>
//               <p className="text-lg sm:text-xl mb-8 text-white font-light opacity-90 drop-shadow-md league-spartan">
//                 {slides[currentSlide].description}
//               </p>
//               <Link
//                 to="/collections"
//                 className="bg-white text-black font-medium transition-colors hover:bg-gray-800 hover:text-white drop-shadow-lg rounded-full league-spartan"
//                 style={{ padding: "20px 30px" }}
//               >
//                 Explore the Collections
//               </Link>
//             </div>
//             {/* Remove the separate image div since we're using background image */}
//           </div>
//         </div>
//       </div>

//     {/* Navigation Arrows */}
//      <div className="absolute bottom-16 right-4 sm:bottom-4 sm:right-16 flex space-x-2 z-20">
//         <button
//           onClick={prevSlide}
//             className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all cursor-pointer"
//         >
//           <FiArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//              className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all cursor-pointer"
//         >
//           <FiArrowRight />
//         </button>
//       </div>

//       {/* Dots Indicator */}
//   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Hero









// "use client"

// import { useState, useEffect } from "react"
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
// import { Link } from "react-router-dom"

// import heroImg1 from "../assets/heroImg1.webp"
// import heroImg2 from "../assets/heroImg2.webp"
// import heroImg3 from "../assets/heroImg3.webp"

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const slides = [
//     {
//       id: 1,
//       title: "Timeless Fashion,",
//       subtitle: "Conscious Choices",
//       description:
//         "Sustainably designed effortlessly worn. Our pieces are made with premium materials and wardrobe that stands the test of time.",
//       bgImage: heroImg1,
//     },
//     {
//       id: 2,
//       title: "Elegant Designs,",
//       subtitle: "Modern Style",
//       description:
//         "Discover our latest collection of contemporary African fashion that blends tradition with innovation",
//       bgImage: heroImg2,
//     },
//     {
//       id: 3,
//       title: "Crafted Excellence,",
//       subtitle: "Unique Beauty",
//       description:
//         "Each piece is carefully crafted by skilled artisans using premium materials and traditional techniques",
//       bgImage: heroImg3,
//     },
//   ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   // Auto-play
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <section className="relative overflow-hidden">
      
//       {/* 🔥 BACKGROUND SLIDER ONLY */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentSlide * 100}%)`,
//         }}
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="min-w-full h-[600px] bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${slide.bgImage})`,
//             }}
//           />
//         ))}
//       </div>
//       {/* Replace your entire background slider div with this */}

//       {/* 🔥 OVERLAY */}
//       {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

//       {/* 🔥 FIXED TEXT CONTENT */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="text-white max-w-xl">
//             <h1
//               className="text-4xl sm:text-5xl lg:text-6xl mb-4 uppercase drop-shadow-lg"
//               style={{ fontFamily: "Against, sans-serif" }}
//             >
//               {slides[currentSlide].title}
//               <br />
//               <span className="font-light text-2xl sm:text-3xl lg:text-4xl opacity-90 capitalize">
//                 {slides[currentSlide].subtitle}
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl mb-8 font-light opacity-90 drop-shadow-md">
//               {slides[currentSlide].description}
//             </p>

//             <Link
//               to="/collections"
//               className="bg-white text-black font-medium hover:bg-gray-800 hover:text-white rounded-full transition-all"
//               style={{ padding: "20px 30px" }}
//             >
//               Explore the Collections
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 NAVIGATION */}
//       <div className="absolute bottom-16 right-4 sm:bottom-4 sm:right-16 flex space-x-2 z-20">
//         <button
//           onClick={prevSlide}
//           className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all"
//         >
//           <FiArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all"
//         >
//           <FiArrowRight />
//         </button>
//       </div>

//       {/* 🔥 DOTS */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               currentSlide === index
//                 ? "bg-white"
//                 : "bg-white bg-opacity-50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Hero








// import { useState, useEffect } from "react"
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
// import { Link } from "react-router-dom"

// import heroImg1 from "../assets/heroImg1.webp"
// import heroImg2 from "../assets/heroImg2.webp"
// import heroImg3 from "../assets/heroImg3.webp"

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const slides = [
//     {
//       id: 1,
//       title: "Timeless Fashion,",
//       subtitle: "Conscious Choices",
//       description:
//         "Sustainably designed effortlessly worn. Our pieces are made with premium materials and wardrobe that stands the test of time.",
//       bgImage: heroImg1,
//     },
//     {
//       id: 2,
//       title: "Elegant Designs,",
//       subtitle: "Modern Style",
//       description:
//         "Discover our latest collection of contemporary African fashion that blends tradition with innovation",
//       bgImage: heroImg2,
//     },
//     {
//       id: 3,
//       title: "Crafted Excellence,",
//       subtitle: "Unique Beauty",
//       description:
//         "Each piece is carefully crafted by skilled artisans using premium materials and traditional techniques",
//       bgImage: heroImg3,
//     },
//   ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   // Auto-play — always forward, no stale closure
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [slides.length])

//   return (
//     <section className="relative overflow-hidden">

//       {/* BACKGROUND FADE SLIDER */}
//       <div className="relative h-[600px]">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
//             style={{
//               backgroundImage: `url(${slide.bgImage})`,
//               opacity: currentSlide === index ? 1 : 0,
//             }}
//           />
//         ))}
//       </div>

//       {/* FIXED TEXT CONTENT */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="text-white max-w-xl">
//             <h1
//               className="text-4xl sm:text-5xl lg:text-6xl mb-4 uppercase drop-shadow-lg"
//               style={{ fontFamily: "Against, sans-serif" }}
//             >
//               {slides[currentSlide].title}
//               <br />
//               <span className="font-light text-2xl sm:text-3xl lg:text-4xl opacity-90 capitalize">
//                 {slides[currentSlide].subtitle}
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl mb-8 font-light opacity-90 drop-shadow-md">
//               {slides[currentSlide].description}
//             </p>

//             <Link
//               to="/collections"
//               className="bg-white text-black font-medium hover:bg-gray-800 hover:text-white rounded-full transition-all"
//               style={{ padding: "20px 30px" }}
//             >
//               Explore the Collections
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* NAVIGATION ARROWS */}
//       <div className="absolute bottom-16 right-4 sm:bottom-4 sm:right-16 flex space-x-2 z-20">
//         <button
//           onClick={prevSlide}
//           className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all"
//         >
//           <FiArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all"
//         >
//           <FiArrowRight />
//         </button>
//       </div>

//       {/* DOTS */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               currentSlide === index
//                 ? "bg-white"
//                 : "bg-white bg-opacity-50"
//             }`}
//           />
//         ))}
//       </div>

//     </section>
//   )
// }

// export default Hero







import { useState, useEffect, useRef } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

import heroImg1 from "../assets/heroImg1.webp"
import heroImg2 from "../assets/heroImg2.webp"
import heroImg3 from "../assets/heroImg3.webp"

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Timeless Fashion,",
      subtitle: "Conscious Choices",
      description:
        "Sustainably designed effortlessly worn. Our pieces are made with premium materials and wardrobe that stands the test of time.",
      bgImage: heroImg1,
    },
    {
      id: 2,
      title: "Elegant Designs,",
      subtitle: "Modern Style",
      description:
        "Discover our latest collection of contemporary African fashion that blends tradition with innovation",
      bgImage: heroImg2,
    },
    {
      id: 3,
      title: "Crafted Excellence,",
      subtitle: "Unique Beauty",
      description:
        "Each piece is carefully crafted by skilled artisans using premium materials and traditional techniques",
      bgImage: heroImg3,
    },
  ]

  // Strip = [slide1, slide2, slide3, slide1_clone]
  // Real slides are index 0-2, clone is index 3
  const extendedSlides = [...slides, slides[0]]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [enableTransition, setEnableTransition] = useState(true)
  const isAnimating = useRef(false)

  const goNext = () => {
    if (isAnimating.current) return
    isAnimating.current = true
    setEnableTransition(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const goPrev = () => {
    if (isAnimating.current) return
    isAnimating.current = true
    setEnableTransition(true)
    setCurrentIndex((prev) => {
      if (prev === 0) return slides.length - 1
      return prev - 1
    })
  }

  // After sliding to the clone (index 3), silently jump to real index 0
  useEffect(() => {
    if (currentIndex === extendedSlides.length - 1) {
      const timeout = setTimeout(() => {
        setEnableTransition(false)
        setCurrentIndex(0)
        setTimeout(() => {
          isAnimating.current = false
        }, 50)
      }, 700) // match transition duration
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        isAnimating.current = false
      }, 700)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  // Auto-play always goes forward
  useEffect(() => {
    const timer = setInterval(() => {
      goNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Which real slide index to use for text/dots
  const realIndex = currentIndex % slides.length

  const totalWidth = extendedSlides.length * 100

  return (
    <section className="relative h-[600px] overflow-hidden">

      {/* BACKGROUND SLIDE STRIP */}
      <div
        className="absolute inset-0 flex"
        style={{
          width: `${totalWidth}%`,
          transform: `translateX(-${(currentIndex * 100) / extendedSlides.length}%)`,
          transition: enableTransition ? "transform 700ms ease-in-out" : "none",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{
              width: `${100 / extendedSlides.length}%`,
              backgroundImage: `url(${slide.bgImage})`,
            }}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10" /> */}

      {/* TEXT CONTENT — never moves */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-white max-w-xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 uppercase drop-shadow-lg"
              style={{ fontFamily: "Against, sans-serif" }}
            >
              {slides[realIndex].title}
              <br />
              <span className="font-light text-2xl sm:text-3xl lg:text-4xl opacity-90 capitalize">
                {slides[realIndex].subtitle}
              </span>
            </h1>

            <p className="text-lg sm:text-xl mb-8 font-light opacity-90 drop-shadow-md">
              {slides[realIndex].description}
            </p>

            <Link
              to="/collections"
              className="bg-white text-black font-medium hover:bg-gray-800 hover:text-white rounded-full transition-all"
              style={{ padding: "20px 30px" }}
            >
              Explore the Collections
            </Link>
          </div>
        </div>
      </div>

      {/* NAVIGATION ARROWS */}
      <div className="absolute bottom-16 right-4 sm:bottom-4 sm:right-16 flex space-x-2 z-30">
        <button
          onClick={goPrev}
          className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={goNext}
          className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FiArrowRight />
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              realIndex === index ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

    </section>
  )
}

export default Hero