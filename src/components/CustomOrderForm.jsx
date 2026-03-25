import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../utils/whatsapp";
import { motion } from "framer-motion";

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    designCategory: "",
    specificRequirements: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
  };

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-4xl sm:text-5xl font-semibold text-black mb-4 uppercase"
            style={{ fontFamily: "Against, sans-serif" }}
          >
            Tell Us About Your Dream Piece
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 league-spartan"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-bold text-black mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
                placeholder="Your full name"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-bold text-black mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
                placeholder="+234 xxx xxx xxxx"
              />
            </motion.div>
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-sm font-bold text-black mb-2">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
              placeholder="your@email.com"
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-sm font-bold text-black mb-2">Design Category</label>
            <select
              name="designCategory"
              value={formData.designCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
            >
              <option value="">Select a category</option>
              <option value="bridal">Bridal</option>
              <option value="ready-to-wear">Ready to Wear</option>
              <option value="custom-pieces">Custom Pieces</option>
            </select>
          </motion.div>

          <motion.div className="mb-8" variants={itemVariants}>
            <label className="block text-sm font-bold text-black mb-2">Describe Your Vision</label>
            <textarea
              name="specificRequirements"
              value={formData.specificRequirements}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-light"
              placeholder="Tell us about your desired design, preferred colors, occasion, measurements, timeline or any specific requirements."
            ></textarea>
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <Link to={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <motion.button
                type="button"
                className="flex-1 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-full uppercase cursor-pointer"
                style={{ padding: "20px 30px" }}
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                Submit Order Request
              </motion.button>
            </Link>

            <Link to={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <motion.button
                type="button"
                className="flex-1 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 rounded-full uppercase cursor-pointer"
                style={{ padding: "20px 30px" }}
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                Place Order on WhatsApp
              </motion.button>
            </Link>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default CustomOrderForm;