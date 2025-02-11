import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaChartPie,
  FaComments,
  FaLock,
  FaCogs,
  FaSync,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white container p-2 sm:p-0 mx-auto  ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl font-extrabold p-4 bg-gradient-to-r from-[#c47b3b] to-[#b87333] bg-clip-text text-transparent">
          ShaRlix
        </h1>

        <div className="hidden md:flex space-x-6 items-center mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <button className="text-gray-700 font-semibold">Product ▾</button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                <Link
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md"
                  to="/analytics"
                >
                  <FaChartPie /> <span>Analytics</span>
                </Link>
                <Link
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md"
                  to="/engagement"
                >
                  <FaComments /> <span>Engagement</span>
                </Link>
                <Link
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md"
                  to="/security"
                >
                  <FaLock /> <span>Security</span>
                </Link>
                <Link
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md"
                  to="/integrations"
                >
                  <FaCogs /> <span>Integrations</span>
                </Link>
                <Link
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md"
                  to="/automations"
                >
                  <FaSync /> <span>Automations</span>
                </Link>
              </div>
            )}
          </div>
          <Link to="/features" className="text-gray-700 font-semibold">
            Features
          </Link>
          <Link to="/marketplace" className="text-gray-700 font-semibold">
            Marketplace
          </Link>
          <Link to="/company" className="text-gray-700 font-semibold">
            Company
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700">
            <FaUser size={20} />
          </Link>
          <Link to="/cart" className="text-gray-700">
            <FaShoppingCart size={20} />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg p-4 absolute top-16 left-0 w-full"
          >
            <Link to="/product" className="block p-2">
              Product
            </Link>
            <Link to="/features" className="block p-2">
              Features
            </Link>
            <Link to="/marketplace" className="block p-2">
              Marketplace
            </Link>
            <Link to="/company" className="block p-2">
              Company
            </Link>
            <Link to="/login" className="block p-2">
              Log in
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
