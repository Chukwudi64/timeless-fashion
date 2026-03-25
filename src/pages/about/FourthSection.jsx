import { motion } from "framer-motion";
import rectangle from "../../assets/rectangle-s3.webp"

const FourthSection = () => {
  return (
        <div className="relative">
            <motion.img
                    src={rectangle}
                    alt="Background"
                    className="w-full object-cover h-[500px] lg:h-[600px]"
                    
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
    </div>

  );
};

export default FourthSection;
