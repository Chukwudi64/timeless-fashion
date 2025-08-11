import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { LuClock4 } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import StaticMapComponent from "./StaticMapComponent";

const Contact = () => {
    // map stuff <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.559046381295!2d7.453543815804371!3d9.091535060191038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a68024c0ac5%3A0x631ccc256a8efdf4!2sMaitama%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1754921366385!5m2!1sen!2sng" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    return ( 
        <div className="league-spartan px-10">
            <div className="flex justify-center">
                <img src="/contact.png" alt="fashionista image" className="rounded-t-xl" />
            </div>
            <div className="flex">
                <div className="ml-[20px]">
                    <h2 className="text-[35px] font-bold">Get in Touch</h2>
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
                    <h2 className="md:text-[35px] font-bold">Connect With Us</h2>
                    <div className="flex flex-wrap gap-4 mb-20">
                        <div className="flex pt-2 justify-center gap-2 h-[40px] w-[150px] rounded rounded-full bg-whatsapp-grn text-white"><FaWhatsapp/><span>Whatsapp</span></div>
                        <div className="flex pt-2 justify-center gap-3 h-[40px] w-[150px] rounded rounded-full bg-instagram-red text-white"><FaInstagram/>Instagram</div>
                        <div className="flex pt-2 justify-center gap-3 h-[40px] w-[150px] rounded rounded-full bg-facebook-blue text-white"><FaFacebook/>Facebook</div>
                    </div>
                </div>
                <div>
                   <h2 className="text-[35px] font-bold">Find Us</h2>
                   <StaticMapComponent />
                </div>
            </div>
        </div>
     );
}
 
export default Contact;