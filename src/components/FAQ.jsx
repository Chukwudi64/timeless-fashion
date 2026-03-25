import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

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
        
        {/* Header animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-4 uppercase" style={{ fontFamily: "Against, sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 font-light league-spartan">
            Quick answers to questions you may have about our services
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-black league-spartan">
                    {faq.question}
                  </span>

                  {/* Icon rotation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gray-500" />
                  </motion.div>
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600 font-light league-spartan">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ