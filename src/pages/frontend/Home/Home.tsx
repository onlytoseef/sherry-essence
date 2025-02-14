import { motion } from "framer-motion";
import bottle from "../../../assets/images/LandingPage/bottle.svg";
import ProductSection from "../../../components/ProductSection";
import ValuesSection from "../../../components/ValuesSection";
import WelcomeSection from "../../../components/WelcomeSection";

export default function Home() {
  return (
    <main>
      <div className="bg-[black] hero h-screen flex justify-center items-center">
        <div className="container px-4 md:px-8 lg:px-16 flex items-center justify-between">
          {/* Left Side - Animated Text */}
          <div className="left-side max-w-2xl text-white">
            <motion.h1
              className="text-6xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Elevate Your Spirit With
            </motion.h1>

            <motion.h1
              className="text-6xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Victory Scented Fragrances
            </motion.h1>

            <motion.p
              className="mt-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, porro.
            </motion.p>

            {/* Animated Button */}
            <motion.button
              className="bg-[#AB572D] p-2 rounded px-5 mt-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            >
              Shop Now
            </motion.button>
          </div>

          {/* Right Side - Smooth Bounce-in Bottle Animation */}
          <motion.div
            className="right-side relative"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: [0, -20, 0] }} // Simple bounce effect
            transition={{ duration: 1.2, ease: "easeOut", bounce: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)", // Glow effect on hover
            }}
          >
            <img src={bottle} alt="Bottle" className="w-64 md:w-100" />
          </motion.div>
        </div>
      </div>

      <WelcomeSection />
      <ValuesSection />
      <ProductSection />
    </main>
  );
}
