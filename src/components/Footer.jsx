import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import footerLogo from "../assets/footerLogo.webp";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../utils/whatsapp";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 8,
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.9 },
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-white py-12 relative overflow-hidden"
      style={{ backgroundColor: "#111724" }}
    >
      {/* subtle animated background glow */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #ffffff22, transparent)",
            "radial-gradient(circle at 80% 70%, #ffffff22, transparent)",
            "radial-gradient(circle at 40% 60%, #ffffff22, transparent)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo + Social */}
          <motion.div variants={itemVariants}>
            <motion.img
              src={footerLogo}
              alt="Logo"
              className="h-8 w-auto object-contain mb-4"
              whileHover={{ scale: 1.05 }}
            />

            <motion.p
              className="text-white mb-4 font-light league-spartan"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Crafting elegance from Abuja to the world
            </motion.p>

            <div className="flex space-x-4">
              <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </motion.div>

              <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </motion.div>

              <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
                <Link to={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white font-light">
              {["Home", "Collections", "About", "Contact"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white font-light">
              {[
                { icon: <FaPhone />, text: "+234 803 4146 664" },
                { icon: <FaEnvelope />, text: "jesphebglobal@gmail.com" },
                {
                  icon: <FaMapMarkerAlt />,
                  text: "A53 City of David Estate Gwarinpa, FCT, Abuja",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2"
                  whileHover={{ x: 6 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

            {/* <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 font-light">Stay updated with our latest collections</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-black font-light"
              />
              <button className="bg-pink-500 px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-light">
            &copy; {new Date().getFullYear()} Jespheb Global. All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;