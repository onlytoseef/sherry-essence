import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginImage from "../../assets/images/loginScreen/login.svg";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
};

const inputVariants = {
  focus: { scale: 1.05, transition: { duration: 0.2 } },
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Prevent scrolling when login screen is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Reset when unmounting
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in...", formData);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-black"
    >
      {/* Left Side Image + Text */}
      <motion.div
        variants={containerVariants}
        className="hidden md:flex md:w-1/2 justify-center items-center bg-gray-800 h-full"
      >
        <motion.div className="flex flex-col text-center">
          <motion.h1
            className="text-white text-5xl font-bold sm:text-6xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Connect With Us
          </motion.h1>
          <motion.img
            src={LoginImage}
            alt="Login Illustration"
            className="w-[80%] h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Right Side Login Form */}
      <motion.div
        variants={formVariants}
        className="flex flex-1  justify-center items-center p-6 h-full"
      >
        <div className="bg-gray border-2 border-orange-500 p-8 rounded-lg shadow-lg w-full max-w-md">
          <motion.h2
            className="text-3xl font-semibold text-center text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Login
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              className="relative"
              whileFocus="focus"
              variants={inputVariants}
            >
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
              />
            </motion.div>

            <motion.div
              className="relative"
              whileFocus="focus"
              variants={inputVariants}
            >
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ff7300" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition"
            >
              Login
            </motion.button>
          </form>

          {/* Register Link */}
          <p className="text-gray-400 text-center mt-4">
            Not having an account?{" "}
            <Link
              to="/auth/register"
              className="text-orange-500 hover:underline transition"
            >
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
