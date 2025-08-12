"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SecondaryHero from "../components/SecondaryHero"
import Collections from "../components/Collections"
import OrderProcess from "../components/OrderProcess"
import CustomOrderForm from "../components/CustomOrderForm"
import FAQ from "../components/FAQ"
import FooterCTA from "../components/FooterCTA"
import Footer from "../components/Footer"

const Home = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    designCategory: "",
    specificRequirements: "",
  })

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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

  const renderPage = () => {
    switch (currentPage) {
      case "collections":
        return <Collections />
      case "about":
        return (
          <div className="min-h-screen pt-20 px-4">
            <h1 className="text-4xl font-bold text-center">About Us</h1>
          </div>
        )
      case "contact":
        return <CustomOrderForm />
      case "order":
        return (
          <div className="min-h-screen pt-20 px-4">
            <h1 className="text-4xl font-bold text-center">Order</h1>
          </div>
        )
      default:
        return (
          <>
            <Hero />
            <SecondaryHero />
            <Collections />
            <OrderProcess />
            <CustomOrderForm />
            <FAQ />
            <FooterCTA />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white font-league-spartan">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default Home
