"use client"

import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "How long does it take to complete a custom order?",
      answer:
        "Custom pieces typically take 2-4 weeks to complete, depending on the complexity of the design and current order volume. We'll provide you with a specific timeline during your consultation.",
    },
    {
      question: "Do you offer fittings and alterations?",
      answer:
        "Yes! We include up to 3 fittings in our custom order process to ensure the perfect fit. Additional alterations are available at a nominal fee.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, bank transfers, and mobile money payments. A 50% deposit is required to begin work on custom orders, with the balance due upon completion.",
    },
    {
      question: "Do you ship outside Abuja?",
      answer:
        "Yes, we ship nationwide within Nigeria. International shipping is available for select items. Shipping costs and delivery times vary based on location.",
    },
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 font-light">Quick answers to questions you may have about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-black">{faq.question}</span>
                {openFaq === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 font-light">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
