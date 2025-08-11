import { FiArrowDownRight } from "react-icons/fi";
import { MdRemoveRedEye } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi2";

const About = () => {
    return ( 
        <div className="league-spartan flex flex-col items-center justify-center">
            <div className="flex gap-5 items-center ml-7 md:ml=0">
                <h1 className="text-[50px] 2xl:text-[64px] text-black font-semibold">About Jespheb Design</h1>
                <div className="hidden md:flex h-[50px] w-[50px] rounded rounded-full bg-black text-white items-center justify-center">
                    <FiArrowDownRight size={30}/>
                </div>
            </div>
            <p className="text-[17px] px-8 2xl:px-0">Founded in the heart of Abuja, Nigeria, Jespheb Design has been crafting exceptional fashion pieces that celebrate African heritage while embracing contemporary style.</p>
            <div className="flex flex-col sm:flex-row items-start md:items-center 2xl:items-start 2xl:items-start gap-15 px-10 2xl:px-0 2xl:w-[1618px] mt-20">
                <img src="/wear the moment.png" alt="jespheb-image" className="h-[306px] w-[400px] 2xl:h-[506px] 2xl:w-[684px] rounded rounded-lg object-fit object-cover" />
                <div className="text-right w-auto 2xl:w-[817px] text-[17px]">
                    <h2 className="text-[50px] 2xl:text-[64px] font-semibold">Our Story</h2>
                    <p>Jespheb Design was born from a passion for celebrating African heritage through contemporary fashion. Founded in 2018 in the vibrant city of Abuja, Nigeria, we began as a small atelier with a big vision - to create fashion pieces that honor our rich cultural traditions while embracing modern aesthetics.</p>
                    <p className="mt-10">What started as a dream to bridge the gap between traditional African wear and contemporary fashion has grown into a respoected fashion house known for its exceptional craftsmahship, attention to detail, and innovative designs that celebrate the beauty of Afican culture.</p>
                </div>
            </div>
            {/* mission */}
            <div className="flex flex-col sm:flex-row gap-15 2xl:w-[1618px] mt-20 px-10 2xl:px-0">
                <div className="2xl:w-[775px] 2xl:h-[267px] bg-mission-bg flex flex-col gap-3 justify-evenly p-5">
                    <div className="w-[37px] h-[38px] bg-black rounded rounded-base flex items-center justify-center">
                        <MdRemoveRedEye className="text-white fill-white" size={20} />
                    </div>
                    <h3 className="text-[30px] 2xl:text-[45px]">Our Mission</h3>
                    <p className="text-[17px]">To create exceptional fashion pieces that celebrate African heritage while embracing contemporary style, providing our clients with garments that reflect their unique personality and cultural pride through superior craftsmanship and innovative design.</p>
                </div>
                <div className="2xl:w-[775px] 2xl:h-[267px] bg-mission-bg flex flex-col gap-3 justify-evenly p-5">
                    <div className="w-[37px] h-[38px] bg-black rounded rounded-base flex items-center justify-center">
                        <HiLightBulb className="text-white fill-white" size={20} />
                    </div>
                    <h3 className="text-[30px] 2xl:text-[45px]">Our Vision</h3>
                    <p className="text-[17px]">To becone the leading African fashion house that sets global standards for quality, creativity, and cultural authenticity, inspiring a new generation of fashion enthusiasts to embrace their heritage while making bold style statements.</p>
                </div>
            </div>
            {/* meet the founder */}
            <div className="flex flex-col sm:flex-row gap-15 sm:items-start md:items-center 2xl:items-start 2xl:w-[1618px] mt-20 mb-20 px-10 2xl:px-0">
                <div className="text-[17px] 2xl:w-[817px] h-[506px] flex flex-col gap-5">
                    <h3 className="text-[50px] 2xl:text-[64px] font-semibold">Meet the Founder</h3>
                    <p>Jespheb Okoro, the visionary founder of Jespheb Design, discovered her passion for fashion at an early age while watching her grandmother create beautiful traditional garments in their family home in Abuja. This early exposure to the artistry of African fashion ignited a lifelong love affair with design and craftsmanship.</p>
                    <p>After completing her studies in Fashion Design and working with serveral renowed fashion houses across Nigeria, Jespheb decided to launch her own brand in 2018. Her goal was simple yet ambitious: to create a fashion house that would showcase the beauty of African culture through modern, wearable art.</p>
                </div>
                <img src="/wear the moment.png" alt="jespheb-image" className="h-[306px] w-[400px] 2xl:h-[506px] 2xl:w-[684px] rounded rounded-lg object-fit object-cover mt-25 md:mt-0" />
            </div>
        </div>
     );
}
 
export default About;