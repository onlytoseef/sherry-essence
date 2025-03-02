import { motion } from "framer-motion";
import bottle from "../../../assets/images/LandingPage/bottle.webp";
import ProductSection from "../../../components/ProductSection";
import ValuesSection from "../../../components/ValuesSection";
import WelcomeSection from "../../../components/WelcomeSection";

export default function Home() {
  return (
    <main>
      <div className="bg-black hero h-screen flex justify-center items-center">
        <div className="container px-4 md:px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="left-side max-w-2xl text-white text-center md:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, staggerChildren: 0.3 },
                },
              }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Elevate Your Spirit With
              </motion.h1>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Victory Scented Fragrances
              </motion.h1>

              <motion.p
                className="mt-4 text-base sm:text-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, porro.
              </motion.p>

              <motion.button
                className="bg-[#AB572D] p-2 rounded px-5 mt-10 md:mt-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              >
                Shop Now
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="right-side relative flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <img
              src={bottle}
              loading="lazy"
              alt="Bottle"
              className="w-40 sm:w-64 md:w-100"
            />
          </motion.div>
        </div>
      </div>

      <WelcomeSection />
      <ValuesSection />
      <ProductSection />
    </main>
  );
}
