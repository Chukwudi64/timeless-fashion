import WTM from "../assets/wear-the-moment.webp";
import R4 from "../assets/rectangle-4.webp";
import R5 from "../assets/rectangle-5.webp";
import { GoArrowDownRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Smooth fade-up + slight scale + rotation for a more dramatic entrance
const heroFadeUp = {
  hidden: { opacity: 0, y: 80, scale: 0.95, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Stagger container for images
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

// Hover animation for images (scale + slight rotation + shadow pop)
const hoverEffect = {
  whileHover: { scale: 1.05, rotate: 1, boxShadow: "0 25px 50px rgba(0,0,0,0.25)" },
  transition: { type: "spring", stiffness: 300 },
};

const SecondaryHero = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Heading */}
        <motion.div
          className="mb-14"
          variants={heroFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-black"
            style={{ fontFamily: "Against, serif" }}
          >
            WEAR THE MOMENT
          </h2>

          <div className="flex items-center gap-4 mt-4">
            <p className="text-2xl text-gray-600 font-light league-spartan">
              Own the look.
            </p>

            <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-sm">
              <GoArrowDownRight />
            </div>
          </div>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* Large Left Image */}
          <motion.div
            variants={heroFadeUp}
            whileHover={hoverEffect.whileHover}
            transition={hoverEffect.transition}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={WTM}
              alt="Editorial fashion look"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">

            {/* Top Right Image */}
            <motion.img
              src={R4}
              alt="Blue sculptural outfit"
              className="w-full h-[300px] lg:h-[340px] object-cover rounded-2xl overflow-hidden"
              variants={heroFadeUp}
              whileHover={hoverEffect.whileHover}
              transition={hoverEffect.transition}
            />

            {/* Bottom Right Image */}
            <motion.img
              src={R5}
              alt="Minimal beige outfit"
              className="w-full h-[300px] object-cover rounded-2xl overflow-hidden"
              variants={heroFadeUp}
              whileHover={hoverEffect.whileHover}
              transition={hoverEffect.transition}
            />

            {/* Bottom Right Text Section */}
            <motion.div
              className="grid gap-6 items-end"
              variants={heroFadeUp}
            >
              <div>
                <h3
                  className="text-4xl sm:text-4xl font-medium leading-tight text-black"
                  style={{ fontFamily: "Against, serif" }}
                >
                  SUSTAINABLY DESIGNED,
                </h3>

                <p className="text-xl text-gray-600 font-light mt-2 league-spartan">
                  effortlessly worn.
                </p>

                <div className="flex items-center gap-6 mt-6">
                  <Link to="/collections">
                    <button className="bg-black text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-gray-800 transition league-spartan cursor-pointer">
                      SHOP NOW
                    </button>
                  </Link>

                  <p className="text-gray-500 max-w-xs font-bold league-spartan">
                    Elevate your wardrobe with our exclusive collections,
                    designed for modern living
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondaryHero;