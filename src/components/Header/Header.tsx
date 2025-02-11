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
    <nav className="bg-tranparent sticky top-0 z-50 container px-4 md:px-8 lg:px-16 p-2 sm:p-0 mx-auto backdrop-blur-lg  ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-5xl font-extrabold p-4 bg-gradient-to-r from-[#c47b3b] to-[#b87333] bg-clip-text text-transparent">
            ShaRlix
          </h1>
        </Link>

        <div className="hidden md:flex space-x-6 items-center mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          ></div>
          <Link to="/features" className="text-white font-semibold">
            Features
          </Link>
          <Link to="/marketplace" className="text-white font-semibold">
            Marketplace
          </Link>
          <Link to="/company" className="text-white font-semibold">
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
