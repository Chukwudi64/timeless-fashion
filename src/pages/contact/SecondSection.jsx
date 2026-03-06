import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { LuClock4 } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import StaticMapComponent from "../../components/StaticMapComponent";

const Contact = () => {
  return (
    <div className="league-spartan px-10 mt-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="ml-[20px]">
          <h2 className="text-[25px] md:text-[35px] font-bold uppercase" style={{ fontFamily: "Against, serif" }}>Get in Touch</h2>
          <div className="flex gap-3 py-2">
            <div className="h-[30px] w-[30px] rounded rounded-lg bg-black flex items-center justify-center">
              <CiLocationOn size={15} className="text-white" />
            </div>
            <div className="w-[150px] league-spartan">
              <p className="text-[20px] font-medium">Visit Our Atelier</p>
              <p>A53 City of David Estate Gwarinpa, FCT, Abuja</p>
            </div>
          </div>
          <div className="flex gap-3 py-2">
            <div className="h-[30px] w-[30px] rounded rounded-lg bg-black flex items-center justify-center">
              <IoMdCall size={15} className="text-white" />
            </div>
            <div className="w-[150px] league-spartan">
              <p className="text-[20px] font-medium">Call US</p>
              <p>+234 803 4156 664</p>
            </div>
          </div>
          <div className="flex gap-3 py-2">
            <div className="h-[30px] w-[30px] rounded rounded-lg bg-black flex items-center justify-center">
              <TfiEmail size={15} className="text-white" />
            </div>
            <div className="w-[150px] league-spartan">
              <p className="text-[20px] font-medium">Email Us</p>
              <p>Jesphebglobal@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 py-2">
            <div className="h-[30px] w-[30px] rounded rounded-lg bg-black flex items-center justify-center">
              <LuClock4 size={15} className="text-white" />
            </div>
            <div className="w-[250px] league-spartan">
              <p className="text-[20px] font-medium">Business Hours</p>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <h2 className="text-[25px] md:text-[35px] font-bold uppercase" style={{ fontFamily: "Against, serif" }}>
            Connect With Us
          </h2>
          <div className="flex flex-wrap gap-4 mb-20">
            <div className="flex items-center text-center justify-center gap-2 h-[40px] w-[150px] rounded-full bg-whatsapp-grn text-white league-spartan">
              <FaWhatsapp />
              <span>Whatsapp</span>
            </div>
            <div className="flex items-center text-center justify-center gap-3 h-[40px] w-[150px] rounded-full bg-instagram-red text-white league-spartan">
              <FaInstagram />
              Instagram
            </div>
            <div className="flex items-center text-center justify-center gap-3 h-[40px] w-[150px] rounded-full bg-facebook-blue text-white league-spartan">
              <FaFacebook />
              Facebook
            </div>
          </div>
        </div>
        {/* <div className="lg:col-span-1">
          <h2 className="text-[25px] md:text-[35px] font-bold uppercase" style={{ fontFamily: "Against, serif" }}>Find Us</h2>
          <StaticMapComponent />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;