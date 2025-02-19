import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUser, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store.ts";
import { logoutUser } from "../../store/features/authSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth/login");
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-xl px-4 md:px-8 lg:px-16 p-2 sm:p-0 mx-auto backdrop-blur-lg transition-all duration-300 bg-transparent`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-5xl font-extrabold p-4 bg-gradient-to-r from-[#c47b3b] to-[#b87333] bg-clip-text text-transparent">
            ShaRlix
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center mx-auto">
          {["/shop", "/about", "/service", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`relative font-semibold transition-all duration-200 ${
                scrolled ? "text-white" : "text-black"
              } ${
                location.pathname === path ? "border-b-2 border-orange-500" : ""
              } hover:border-b-2 hover:border-orange-500 focus:border-b-2 focus:border-orange-500 pb-1`}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>

        {/* User & Cart Icons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <button
              onClick={handleLogout}
              className={scrolled ? "text-white" : "text-black"}
              title="Logout"
            >
              <FaSignOutAlt size={18} />
            </button>
          ) : (
            <Link
              to="/auth/login"
              className={scrolled ? "text-white" : "text-black"}
              title="Login"
            >
              <FaUser size={18} />
            </Link>
          )}
          <Link to="/cart" className={scrolled ? "text-white" : "text-black"}>
            <FaShoppingCart size={18} />
          </Link>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg p-4 absolute top-16 left-0 w-full"
          >
            {["/product", "/features", "/marketplace", "/company"].map(
              (path, index) => (
                <Link
                  key={index}
                  to={path}
                  className="block p-2 text-black hover:border-b-2 hover:border-orange-500 focus:border-b-2 focus:border-orange-500 pb-1"
                >
                  {path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
                </Link>
              )
            )}
            {/* Show Logout Button in Mobile Menu */}
            {user && (
              <button
                onClick={handleLogout}
                className="block w-full text-left p-2 text-black hover:border-b-2 hover:border-orange-500 focus:border-b-2 focus:border-orange-500 pb-1"
              >
                Logout
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
