import { motion } from "framer-motion";
import image from "../../assets/images/valuesSection/valueImage.webp";

export default function ValuesSection() {
  return (
    <section className="bg-black ">
      <div className="flex flex-col md:flex-row items-center  mx-auto">
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            src={image}
            className="w-[50vw] h-auto object-cover"
            alt="Values"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full  text-white px-6 md:px-12 text-center md:text-left">
          {/* Heading with Staggered Fade Animation (Triggers on Scroll) */}
          <motion.h1
            className="text-3xl text-center md:text-5xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Triggers when 50% of the section is in view
            variants={{
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
              hidden: { opacity: 0 },
            }}
          >
            {"Our Values".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraphs with Fade-Up Animation (Triggers on Scroll) */}
          <motion.p
            className="text-sm font-extralight leading-relaxed mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            At ShaRlix, our perfume retail store is built on a foundation of
            passion and authenticity. We believe in celebrating the
            individuality of every customer, providing a diverse collection of
            scents that resonate with their unique personality and style. Our
            dedicated team of fragrance enthusiasts is committed to creating a
            welcoming and inclusive environment, where connections are forged,
            and inspiration thrives.
          </motion.p>

          <motion.p
            className="text-sm font-extralight leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Embracing sustainability and continuous learning, ShaRlix strives to
            be more than just a shopping destination; we are a community that
            inspires and empowers individuals on their fragrance journey.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
