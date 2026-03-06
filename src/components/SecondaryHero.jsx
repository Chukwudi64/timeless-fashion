import WTM from "../assets/wear-the-moment.webp";
import R4 from "../assets/rectangle-4.webp";
import R5 from "../assets/rectangle-5.webp";
import { GoArrowDownRight } from "react-icons/go";

const SecondaryHero = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Heading */}
        <div className="mb-14">
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

            {/* small circular arrow */}
            <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-sm">
              <GoArrowDownRight />
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Large Left Image */}
          <div>
            <img
              src={WTM}
              alt="Editorial fashion look"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            
            {/* Top Right Image */}
            <img
              src={R4}
              alt="Blue sculptural outfit"
              className="w-full h-[300px] lg:h-[340px] object-cover rounded-2xl"
            />

            <img
                src={R5}
                alt="Minimal beige outfit"
                className="w-full h-[300px] object-cover rounded-2xl"
              />

            {/* Bottom Right Section */}
            <div className="grid gap-6 items-end">
              
              

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
                  <button className="bg-black text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-gray-800 transition league-spartan">
                    SHOP NOW
                  </button>

                  <p className="text-gray-500 max-w-xs font-bold league-spartan">
                    Elevate your wardrobe with our exclusive collections,
                    designed for modern living
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHero;