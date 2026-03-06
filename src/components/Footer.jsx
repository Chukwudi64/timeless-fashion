import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import footerLogo from "../assets/footerLogo.webp"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: "#111724" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={footerLogo} alt="Logo" className="w-32 h-32 object-contain mb-4" />
            <p className="text-white mb-4 font-light league-spartan">Crafting elegance from Abuja to the world</p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white font-bold hover:text-white transition-colors">
                <FaFacebookF />
              </Link>
              <Link to="#" className="text-white font-bold hover:text-white transition-colors">
                <FaInstagram />
              </Link>
              <Link to="#" className="text-white font-bold hover:text-white transition-colors">
                <FaWhatsapp />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white font-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white font-light">
              <li className="flex items-center gap-2">
                <FaPhone className="text-sm" />
                <span>+234 803 4146 664</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-sm" />
                <span>jesphebglobal@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-sm" />
                <span>A53 City of David Estate Gwarinpa, FCT, Abuja</span>
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="font-light">&copy; {new Date().getFullYear()} Jespheb Global. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
