import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const FooterCTA = () => {
  return (
    <section
      className="py-12 lg:py-20 text-white"
      style={{ backgroundColor: "#111724" }}
    >
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-semibold mb-4 uppercase"
          style={{ fontFamily: "Against, sans-serif" }}
        >
          Ready to Create Your Perfect Look?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-300 mb-8 font-light league-spartan"
        >
          Let's bring your fashion vision to life with our expert craftsmanship
        </motion.p>

        {/* <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/collections"
              className="bg-white text-black font-medium hover:bg-gray-100 transition-colors rounded-full league-spartan"
              style={{ padding: "20px 30px" }}
            >
              Place Order
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="border border-white text-white font-medium hover:bg-white hover:text-black transition-colors rounded-full league-spartan"
              style={{ padding: "20px 30px" }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div> */}


        <motion.div
  variants={itemVariants}
  className="flex flex-col sm:flex-row gap-4 justify-center"
>
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-0">
    <Link
      to="/collections"
      className="bg-white text-black font-medium hover:bg-inherit hover:text-white hover:border hover:border-white transition-colors rounded-full league-spartan
                 py-4 px-8 sm:px-10 w-1/2 max-w-xs mx-auto block text-center"
    >
      Place Order
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-0">
    <Link
      to="/contact"
      className="border border-white text-white font-medium hover:bg-white hover:text-black transition-colors rounded-full league-spartan
                 py-4 px-8 sm:px-10 w-1/2 max-w-xs mx-auto block text-center"
    >
      Get In Touch
    </Link>
  </motion.div>
</motion.div>
      </motion.div>
    </section>
  )
}

export default FooterCTA