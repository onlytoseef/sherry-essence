import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 shadow-xl  px-4 md:px-8 lg:px-16 p-2 sm:p-0 mx-auto backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-5xl font-extrabold p-4 bg-gradient-to-r from-[#c47b3b] to-[#b87333] bg-clip-text text-transparent">
            ShaRlix
          </h1>
        </Link>

        <div className="hidden md:flex space-x-6 items-center mx-auto">
          <Link
            to="/features"
            className={`font-semibold ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            Features
          </Link>
          <Link
            to="/marketplace"
            className={`font-semibold ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            Marketplace
          </Link>
          <Link
            to="/company"
            className={`font-semibold ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            Company
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className={scrolled ? "text-white" : "text-black"}>
            <FaUser size={20} />
          </Link>
          <Link to="/cart" className={scrolled ? "text-white" : "text-black"}>
            <FaShoppingCart size={20} />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiX
                  size={24}
                  className={scrolled ? "text-white" : "text-black"}
                />
              ) : (
                <FiMenu
                  size={24}
                  className={scrolled ? "text-white" : "text-black"}
                />
              )}
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
            <Link to="/product" className="block p-2 text-black">
              Product
            </Link>
            <Link to="/features" className="block p-2 text-black">
              Features
            </Link>
            <Link to="/marketplace" className="block p-2 text-black">
              Marketplace
            </Link>
            <Link to="/company" className="block p-2 text-black">
              Company
            </Link>
            <Link to="/login" className="block p-2 text-black">
              Log in
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
