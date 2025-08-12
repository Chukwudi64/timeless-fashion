import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { LuClock4 } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import StaticMapComponent from "./StaticMapComponent";

const Contact = () => {
    return (
        <div className="league-spartan px-10 mt-10">
            <div className="flex justify-center">
                <div className="bg-cover bg-center bg-no-repeat w-full rounded-t-xl" style={{backgroundImage: `url(../../public/contact.png)`, height: '606px',}}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="ml-[20px]">
                    <h2 className="text-[25px] md:text-[35px] font-bold">Get in Touch</h2>
                    <div className="flex gap-3 py-2">
                        <div className="h-[30px] w-[30px] rounded rounded-lg bg-black flex items-center justify-center"><CiLocationOn size={15} className="text-white" /></div>
                        <div className="w-[150px]">
                            <p className="text-[20px] font-medium">Visit Our Atelier</p>
                            <p>123 Fashion District Maitama, Abuja FCT, Nigeria</p>
                        </div>
                    </div>
                    <div className="flex gap-3 py-2">
                        <div className="h-[30px] w-[30px] rounded rounded-lg bg-black flex items-center justify-center"><IoMdCall size={15} className="text-white" /></div>
                        <div className="w-[150px]">
                            <p className="text-[20px] font-medium">Call US</p>
                            <p>+234 812 345 6789</p>
                            <p>+234 809 876 5432</p>
                        </div>
                    </div>
                    <div className="flex gap-3 py-2">
                        <div className="h-[30px] w-[30px] rounded rounded-lg bg-black flex items-center justify-center"><TfiEmail size={15} className="text-white" /></div>
                        <div className="w-[150px]">
                            <p className="text-[20px] font-medium">Email Us</p>
                            <p>info@jesphebdesign.com</p>
                            <p>orders@jesphebdesign.com</p>
                        </div>
                    </div>
                    <div className="flex gap-3 py-2">
                        <div className="h-[30px] w-[30px] rounded rounded-lg bg-black flex items-center justify-center"><LuClock4 size={15} className="text-white" /></div>
                        <div className="w-[150px]">
                            <p className="text-[20px] font-medium">Business Hours</p>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                    <h2 className="text-[25px] md:text-[35px] font-bold">Connect With Us</h2>
                    <div className="flex flex-wrap gap-4 mb-20">
                        <div className="flex items-center text-center justify-center gap-2 h-[40px] w-[150px] rounded rounded-full bg-whatsapp-grn text-white"><FaWhatsapp /><span>Whatsapp</span></div>
                        <div className="flex items-center text-center justify-center gap-3 h-[40px] w-[150px] rounded rounded-full bg-instagram-red text-white"><FaInstagram />Instagram</div>
                        <div className="flex items-center text-center justify-center gap-3 h-[40px] w-[150px] rounded rounded-full bg-facebook-blue text-white"><FaFacebook />Facebook</div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <h2 className="text-[25px] md:text-[35px] font-bold">Find Us</h2>
                    <StaticMapComponent />
                </div>
            </div>
        </div>
    );
}

export default Contact;