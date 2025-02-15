import { motion } from "framer-motion";
import storeImage from "../../../assets/images/AboutSection/perfumeStore.webp";

export default function About() {
  return (
    <>
      <div className="relative md:h-[80vh] flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/images/AboutSection/Madrid.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
          <motion.h1
            className="md:text-5xl text-white font-bold z-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="md:w-[60vw] md:py-5 text-white font-extralight z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            impedit corrupti consequuntur voluptas eos distinctio? Labore,
            nostrum. Reiciendis sit voluptas temporibus. Blanditiis eaque ipsa
            quo cupiditate veniam quia rerum libero suscipit temporibus officiis
            unde consequatur, at quaerat sequi. Laboriosam rerum facere sapiente
            ex alias. Beatae repellat fugiat quam libero. Libero quisquam error
            eius nemo iure expedita magni iste pariatur! Harum cupiditate
            perspiciatis ratione maiores commodi distinctio vitae dolorem amet
            ipsam error facilis, sequi fugit!
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col story-sec py-15 bg-black justify-center items-center">
        <motion.h1
          className="container text-5xl text-[#AB572D] story-sec mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.h1>
        <motion.p
          className="sm:w-[60vw] font-extralight p-5 text-white text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptate velit dignissimos totam numquam nostrum iure tempore porro
          facere voluptas perferendis excepturi assumenda dolorem, recusandae
          aut a sed quaerat, sapiente ut!
        </motion.p>
      </div>
      <div className="store-img">
        <img src={storeImage} className="w-full" alt="" />
      </div>
      <section className="bg-black card-sec text-white py-16 px-6 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-semibold text-orange-500 mb-8"
        >
          What Makes Us Unique
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Locally Inspired",
              text: "Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, and landscapes of various regions. From the vibrant streets of Marrakech to the serene cherry blossom gardens of Kyoto, each fragrance tells a unique story that resonates with its origin.",
            },
            {
              title: "High Quality Ingredients",
              text: "We believe that the key to an extraordinary scent lies in the quality of ingredients. That's why we collaborate with expert perfumers who source the finest and ethically-sourced materials from around the world. We never compromise on the quality of our products, ensuring a long-lasting and luxurious experience.",
            },
            {
              title: "Personalized Service",
              text: "We understand that choosing the perfect scent is a deeply personal experience. Our team of fragrance experts is always ready to assist you in finding a fragrance that complements your personality and style. Whether you're exploring new scents or seeking to rediscover an old favorite, we're here to guide you every step of the way.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
