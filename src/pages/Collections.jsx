import { getWhatsAppLink } from "../utils/whatsapp";
import { useState } from "react";
import collection_1 from "../assets/collection-1.jpg";
import collection_2 from "../assets/collection-2.jpg";
import collection_3 from "../assets/collection-3.jpg";
import collection_4 from "../assets/collection-4.jpg";
import collection_5 from "../assets/collection-5.jpg";
import collection_6 from "../assets/collection-6.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ── Animation Variants ──────────────────────────────────────────────────────

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const subheadVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const filterContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.35 },
  },
};

const filterItemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// ── Component ───────────────────────────────────────────────────────────────

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState("All Collections");

  const collections = [
    { name: "All Collections" },
    { name: "Bridal" },
    { name: "Ready-to-wear" },
    { name: "Custom Pieces" },
  ];

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
      description:
        "Stunning white bridal gown with traditional Nigerian embroidery",
      price: "₦450,000",
      image: collection_6,
      category: "Bridal",
    },
  ];

  const filteredProducts =
    activeFilter === "All Collections"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl font-semibold text-black mb-4"
            style={{ fontFamily: "Against, sans-serif" }}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            OUR COLLECTIONS
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto font-light league-spartan"
            variants={subheadVariants}
            initial="hidden"
            animate="visible"
          >
            Discover our latest designs that blend traditional African elegance
            with contemporary fashion
          </motion.p>
        </div>

        {/* ── Filter Buttons ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={filterContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {collections.map((collection, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(collection.name)}
              variants={filterItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`font-medium rounded-full transition-colors cursor-pointer ${
                activeFilter === collection.name
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 league-spartan"
              }`}
              style={{ padding: "20px 30px" }}
            >
              {collection.name}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Products Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 20px 40px -8px rgba(0,0,0,0.15), 0 8px 16px -4px rgba(0,0,0,0.08)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Image with zoom-on-hover */}
                <div className="overflow-hidden">
                  <motion.img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 league-spartan">
                  <h3 className="text-xl font-semibold text-black mb-2 uppercase">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm font-regular">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-lg font-semibold text-black"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {product.price}
                    </span>
                    <Link
                      to={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white font-medium transition-colors text-sm rounded-full uppercase cursor-pointer"
                        style={{ padding: "15px 25px" }}
                      >
                        Order Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Collections;