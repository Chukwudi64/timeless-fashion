import { motion } from "framer-motion";
import { getWhatsAppLink } from "../../utils/whatsapp";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { LuClock4 } from "react-icons/lu";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import StaticMapComponent from "../../components/StaticMapComponent";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="league-spartan px-10 mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="ml-[20px]">
          
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-[25px] md:text-[35px] font-bold uppercase"
            style={{ fontFamily: "Against, serif" }}
          >
            Get in Touch
          </motion.h2>

          {/* Contact Items */}
          {[
            {
              icon: <CiLocationOn size={15} className="text-white" />,
              title: "Visit Our Atelier",
              text: "A53 City of David Estate Gwarinpa, FCT, Abuja",
            },
            {
              icon: <IoMdCall size={15} className="text-white" />,
              title: "Call Us",
              text: "+234 803 4156 664",
            },
            {
              icon: <TfiEmail size={15} className="text-white" />,
              title: "Email Us",
              text: "Jesphebglobal@gmail.com",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-3 py-2"
            >
              <div className="h-[30px] w-[30px] rounded-lg bg-black flex items-center justify-center">
                {item.icon}
              </div>
              <div className="w-[150px]">
                <p className="text-[20px] font-medium">{item.title}</p>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}

          {/* Business Hours */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 py-2"
          >
            <div className="h-[30px] w-[30px] rounded-lg bg-black flex items-center justify-center">
              <LuClock4 size={15} className="text-white" />
            </div>
            <div className="w-[250px]">
              <p className="text-[20px] font-medium">Business Hours</p>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.h2
            variants={itemVariants}
            className="text-[25px] md:text-[35px] font-bold uppercase mt-6"
            style={{ fontFamily: "Against, serif" }}
          >
            Connect With Us
          </motion.h2>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Link to={getWhatsAppLink()} target="_blank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 h-[40px] w-[150px] rounded-full bg-whatsapp-grn text-white cursor-pointer"
              >
                <FaWhatsapp />
                Whatsapp
              </motion.button>
            </Link>

            <Link to="#">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 h-[40px] w-[150px] rounded-full bg-instagram-red text-white"
              >
                <FaInstagram />
                Instagram
              </motion.button>
            </Link>

            <Link to="#">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 h-[40px] w-[150px] rounded-full bg-facebook-blue text-white"
              >
                <FaFacebook />
                Facebook
              </motion.button>
            </Link>
          </motion.div>

               {/* <div className="lg:col-span-1">
          <h2 className="text-[25px] md:text-[35px] font-bold uppercase" style={{ fontFamily: "Against, serif" }}>Find Us</h2>
          <StaticMapComponent />
        </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;