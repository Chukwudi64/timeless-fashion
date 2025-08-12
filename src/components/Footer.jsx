import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: "#111724" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-normal mb-4">Logo</h3>
            <p className="text-white mb-4 font-light">Crafting elegance from Abuja to the world</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white font-bold hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white font-bold hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-white font-bold hover:text-white transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white font-light">
              <li className="flex items-center gap-2">
                <FaPhone className="text-sm" />
                <span>+234 812 345 6789</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-sm" />
                <span>info@jesphebdesign.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-sm" />
                <span>Abuja, Nigeria</span>
              </li>
            </ul>
          </div>

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

        {/* <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="font-light">&copy; 2024 Logo. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
