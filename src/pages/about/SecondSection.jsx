import { motion } from "framer-motion";
import rectangle from "../../assets/rectangle-3.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const SecondSection = () => {
  return (
    <section className="px-6 lg:px-16 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-semibold mb-4 uppercase"
            style={{ fontFamily: "Against, sans-serif" }}
          >
            Meet the Founder
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mb-10 leading-relaxed league-spartan text-justify"
          >
            Jespheb was founded by Ogbogbo Phebe, a passionate fashion designer and creative who is inspired by innovation and the power of self-expression. With an eye for style and a drive to push boundaries, Phebe created Jespheb to help people and brands confidently own their presence.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-semibold mb-4 uppercase"
            style={{ fontFamily: "Against, sans-serif" }}
          >
            Our Company
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 leading-relaxed league-spartan text-justify"
          >
            At Jespheb, we inspire individuals and brands to own their presence. Through creative branding, fashion, and lifestyle solutions, we transform confidence into influence and make every presence unforgettable.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={rectangle}
            alt="Founder"
            className="w-full max-w-md lg:max-w-lg mx-auto rounded-lg object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default SecondSection;